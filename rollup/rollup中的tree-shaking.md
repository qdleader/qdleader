# rollup中的tree-shaking
##  tree-shaking

在rollup中, tree-shaking的本质是通过代码的静态分析, 分析模块代码中的导入(import), 变量声明(definition), 导出(export)
并在其模块的导入导出上下文中逐层查找, 如果有依赖关系, 则移除export声明(bundle的时候), 如果没有, 则移除掉此语句块.
以此来达到tree-shaking的目的
那么相应的, 我们也需要优化丰富我们之前的代码内容
首先, 我们需要在模块中对模块的导入导出和变量声明进行收集

```js
// 在constructor中预先定义这三个对象
this.imports = {} // 导入的变量
this.exports = {} // 导出的变量
this.definitions = {} // 变量定义的语句

// 在analyze 中通过ast的遍历进行收集
analyse() {
    // 收集导入和导出变量
    this.ast.body.forEach(node => {
      if (node.type === 'ImportDeclaration') {
        const source = node.source.value
        node.specifiers.forEach(specifier => {
          const { name: localName} = specifier.local
          const { name } = specifier.imported
          this.imports[localName] = {
            source,
            name,
            localName,
          }
        })
      } else if (node.type === 'ExportNamedDeclaration') {
        const { declaration } = node
        if (declaration.type === 'VariableDeclaration') {
          const { name } = declaration.declarations[0].id
          this.exports[name] = {
            node,
            localName: name,
            expression: declaration,
          }
        }
      }
    })
    analyse(this.ast, this.code, this)
    // 收集所有语句定义的变量，建立变量和声明语句之间的对应关系
    this.ast.body.forEach(statement => {
      Object.keys(statement._defines).forEach(name => {
        this.definitions[name] = statement
      })
    })
  }
```

其次, 我们需要在expandAllStatements调用的时候, 同步将其模块依赖进行递归处理, 以使其生成树状的依赖关系
其中expandAllStatement遍历调用了expandStatement, 用于处理每个ast节点
在expandStatement中遍历了_dependsOn(也就是其依赖的变量列表), 遍历变量列表
如果依赖的变量在导入变量中, 则根据变量内容来查找import语句中的导入变量, 然后根据import语句的导入源找到源模块, 通过源模块找到了其导出的变量,
否则从当前作用域中的definitions中找到这个声明, 如果声明之前没有_included(已经包含在输出语句中), 则将继续调用expandStatement
```js
 expandStatement(statement) {
   statement._included = true
   const result = []
   const dependencies = Object.keys(statement._dependsOn)
   dependencies.forEach(name => {
     const definition = this.define(name)
     result.push(...definition)
   })
   result.push(statement)
   return result
 }
define(name) {
  if (hasOwn(this.imports, name)) {
    const importDeclaration = this.imports[name]
    const mod = this.bundle.fetchModule(importDeclaration.source, this.path)
    const exportDeclaration = mod.exports[importDeclaration.name]
    if (!exportDeclaration) {
      throw new Error(`Module ${mod.path} does not export ${importDeclaration.name} (imported by ${this.path})`)
    }
    return mod.define(exportDeclaration.localName)
  } else {
    let statement = this.definitions[name]
    if (statement && !statement._included) {
      return this.expandStatement(statement)
    } else {
      return []
    }
  }
}
```
这些下划线的变量其实是在analyse步骤中进行处理和分析的
analyse定义了四个内置下划线变量
_source: 代表当前区块的源代码
_defines: 代表当前模块定义的变量
_dependsOn: 代表当前模块没有定义的变量(外部依赖的变量)
_included: 是否已经包含在输出语句中, 包含在其中的才会被输出

```js
const Scope = require('./scope')
const walk = require('./walk')

function analyse(ast, ms) {
  let scope = new Scope()
  // 创建作用域链、
  ast.body.forEach(statement => {
    function addToScope(declarator) {
      const { name } = declarator.id
      scope.add(name)
      if (!scope.parent) { // 如果没有上层作用域，说明是模块内的定级作用域
        statement._defines[name] = true
      }
    }
    Object.defineProperties(statement, {
      _source: { // 源代码
        value: ms.snip(statement.start, statement.end),
      },
      _defines: { // 当前模块定义的变量
        value: {},
      },
      _dependsOn: { // 当前模块没有定义的变量，即外部依赖的变量
        value: {},
      },
      _included: { // 是否已经包含在输出语句中
        value: false,
        writable: true,
      },
    })
    // 收集每个语句上定义的变量，创建作用域链
    walk(statement, {
      enter(node) {
        let newScope
        switch (node.type) {
          case 'FunctionDeclaration':
            const params = node.params.map(p => p.name)
            addToScope(node)
            newScope = new Scope({
              parent: scope,
              params,
            })
            break;
          case 'VariableDeclaration':
            node.declarations.forEach(addToScope)
            break;
        }
        if (newScope) {
          Object.defineProperty(node, '_scope', {
            value: newScope,
          })
          scope = newScope
        }
      },
      leave(node) {
        if (node._scope) {
          scope = scope.parent
        }
      },
    })
  })
  ast._scope = scope
  // 收集外部依赖的变量
  ast.body.forEach(statement => {
    walk(statement, {
      enter(node) {
        if (node.type === 'Identifier') {
          const { name } = node
          const definingScope = scope.findDefiningScope(name)
          // 作用域链中找不到 则说明为外部依赖
          if (!definingScope) {
            statement._dependsOn[name] = true
          }
        }
      },
    })
  })
}

module.exports = analyse
```

自此, 我们就能够成功实现:
对模块逐一进行分析, 获知到模块的import进来的内容, export出去的内容, 在当前模块上下文中定义了的变量, 当前模块中使用了的变量, 在当前模块中修改了的变量, 等
根据scope进行逐层查找, 以此来获知当前模块中使用的变量在import语句中是否已经存在, 存在则将该语句标记为_dependsOn, 也就是已经被依赖的内容
分析完成依赖关系之后, 会进行打包操作, 将import语句中的内容直接注入替换掉该import语句, 同时移除掉export语句
如果上层变量与下层变量有所冲突, 则需要在后续合并的时候进行重命名
这样就完成了rollup的基础打包工作



### rollup与webpack不同


#### 处理维度不同
webpack的核心在于将模块塞到模块数组中用于进行调度, webpack处理的核心维度是"模块"
rollup核心处理的是"语句", rollup会将模块的上下文语句进行逐一分析处理, 将会从入口开始, 打包所有的模块, 并清除掉输入输出语句

#### 流程设计不同
rollup的核心在执行流上, 只提供了有限的hooks流程来支持扩展
webpack则是完全设计在可扩展性上的架构, 以至于核心的compile和compilation都是继承自Tapable的, 但这样也会造成代码可读性极差, 阅读源码中的一大堆的回调与tap流程让人摸不着头脑