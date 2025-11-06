# 简易实现

## 1. 入口

对于rollup来讲, 最核心的参数则是entry和output, 一个控制了入口, 一个控制了输出
假设我们对rollup是这样调用的
```js
const path = require('path')
const rollup = require('../../src/rollup')

const entry = path.resolve(__dirname, 'src/index.js')
rollup(entry, 'dest/bundle.js')
TypeScript
在入口中, 我们如要从入口开始进行分析 摇树和打包操作, 并输出到出口

const Bundle = require('./bundle')

function rollup(entry, filename) {
  const bundle = new Bundle({
    entry,
  })
  bundle.build(filename)
}

module.exports = rollup
```

## 1. Bundle

bundle是整个构建中的下一阶段, rollup处理完毕入参, 插件等信息后会通过bundle来启动整个的构建流程
```js
const path = require('path')

class Bundle {
  constructor(options) {
    this.entryPath = path.resolve(options.entry.replace(/\.js$/, '') + '.js')
    this.modules = {}
  }
  build(filename) {
    console.log(this.entryPath, filename)
  }
}

module.exports = Bundle
```

    bundle的核心能力是:
      获取入口文件内容, 包装成module, 生成抽象语法树
      对入口文件抽象语法树进行依赖解析
      生成目标代码
      写入目标文件
      在bundle对象中, 他们被实现在build函数中

```js
const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const Module = require('./module')
const MagicString = require('magic-string')

class Bundle {
  constructor(options) {
    this.entryPath = resolve(options.entry.replace(/\.js$/, '') + '.js')
    this.modules = {}
    this.statements = []
  }
  build(filename) {
    // 1. 获取入口文件的内容，包装成`module`，生成抽象语法树
    const entryModule = this.fetchModule(this.entryPath)
    // 2. 对入口文件抽象语法树进行依赖解析
    this.statements = entryModule.expandAllStatements()
    // 3. 生成最终代码
    const { code } = this.generate()
    // 4. 写入目标文件
    writeFileSync(filename, code)
  }
  fetchModule(importee) {
    let route = importee
    if (route) {
      const code = readFileSync(route, 'utf-8')
      const module = new Module({
        code,
        path: importee,
        bundle: this,
      })
      return module
    }
  }
  generate() {
    const ms = new MagicString.Bundle()
    this.statements.forEach(statement => {
      const source = statement._source.clone()
      ms.addSource({
        content: source,
        separator: '\n',
      })
    })
    return {
      code: ms.toString()
    }
  }
}

module.exports = Bundle
```

对于bundle来讲, 每个文件都是一个Module, rollup会将模块使用module类来进行包装处理

## 3. Module

module会将源代码解析成为抽象语法树, 然后将源代码挂载到节点上, 并提供展开修改方法

```js
const { parse } = require('acorn')
const MagicString = require('magic-string')
const analyse = require('./ast/analyse')

class Module {
  constructor({
    code,
    path,
    bundle,
  }) {
    this.code = new MagicString(code, {
      filename: path,
    })
    this.path = path
    this.bundle = bundle
    this.ast = parse(code, {
      ecmaVersion: 7,
      sourceType: 'module',
    })
    this.analyse()
  }
  analyse() {
    analyse(this.ast, this.code, this)
  }
  expandAllStatements() {
    const allStatements = []
    this.ast.body.forEach(statement => {
      const statements = this.expandStatement(statement)
      allStatements.push(...statements)
    })
    return allStatements
  }
  expandStatement(statement) {
    statement._included = true
    const result = []
    result.push(statement)
    return result
  }
}

module.exports = Module
TypeScript
module中调用了ast/analyse来对模块的内容进行解析和挂载

// ./src/ast/analyse.js
function analyse(ast, ms) {
  ast.body.forEach(statement => {
    Object.defineProperties(statement, {
      _source: {
        value: ms.snip(statement.start, statement.end)
      }
    })
  })
}

module.exports = analyse
```

这样就能够实现整个模块的解析处理, 并最终生成代码了

# 打包阶段总结

  其实从以上的流程我们可以总结出rollup的打包阶段的运行流了
  1. rollup处理好入参出参等参数后, 通过bundle的build函数启动了整个的构建流程
  2. build函数中, 会获取到入口的文件代码, 将入口文件代码内容new了一个Module对象
  3. module对象中, 会首先使用acorn来将源代码转化成为ast, 然后使用ast/analyse来将ast中的源码与ast结构进行对应起来, 将对应位置的源码文本塞入到_source中, 这样就形成了ast与源码之前的对应关系
  4. 使用module对象中expandAllStatements, 遍历所有的声明语句, 并将声明语句的数组进行返回
  5. 调用bundle的generate方法, 通过MagicString, 将_source中的代码内容进行拼接, 最终实现打包能力
  其实本质上来讲, 核心就是
  参数分析 > 通过依赖寻找模块 > 模块转AST > 进行依赖分析 > 拼接输出
