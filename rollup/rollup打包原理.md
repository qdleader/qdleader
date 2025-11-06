# Rollup概念与运行原理

## 一. 概念

rollup是基于ESM的模块打包器
目前业界的许多框架都是用的rollup作为打包工具
rollup的tree-shaking能力能使打包出来的产物包尽可能的小, 可以剔除掉一些无用的代码, 对于大型的项目能够起到一定的优化作用

## 1. 基本运行原理

  核心依赖包:
    MagicString: MagicString是一个非常轻量的操作包, 能够让rollup实现对无用的代码移除, 替换等等工作
    acorn: 是一个轻量高性能的ast解析工具, 能够将源码进行解析以生成ast对象
  基本流程
    初始化变量和参数, 初始化插件
    根据AST的import语句使用情况, 进行依赖分析, 生成moduleGraph
    处理moduleGraph的关系, 根据scope来向上查找定义域, 通过这个方式来进行tree-shaking
    将模块内容bundle到一起, 写入到目标文件

## 打包阶段总结

    其实从以上的流程我们可以总结出rollup的打包阶段的运行流了
    rollup处理好入参出参等参数后, 通过bundle的build函数启动了整个的构建流程
    build函数中, 会获取到入口的文件代码, 将入口文件代码内容new了一个Module对象
    module对象中, 会首先使用acorn来将源代码转化成为ast, 然后使用ast/analyse来将ast中的源码与ast结构进行对应起来, 将对应位置的源码文本塞入到_source中, 这样就形成了ast与源码之前的对应关系
    使用module对象中expandAllStatements, 遍历所有的声明语句, 并将声明语句的数组进行返回
    调用bundle的generate方法, 通过MagicString, 将_source中的代码内容进行拼接, 最终实现打包能力
    其实本质上来讲, 核心就是
    参数分析 > 通过依赖寻找模块 > 模块转AST > 进行依赖分析 > 拼接输出

## AST

Rollup打包的核心是对AST的解析和处理，要想深入理解打包原理，必须深入理解AST。
Rollup是通过acorn这个库进行AST的生成的，acorn的生成结果遵循estree规范。
下面是一个通过acorn生成的AST例子，来直观感受下。
```js
const { parse } = require('acorn');
const code = `import { a } from './a.js'`

console.log(parse(code, {
  ecmaVersion: 7,
  sourceType: 'module',
}))

```

```js

{
  type: 'Program',
  start: 0,
  end: 26,
  body: [
    {
      type: 'ImportDeclaration',
      start: 1,
      end: 26,
      specifiers: [
        {
          type: 'ImportSpecifier',
          start: 9,
          end: 10,
          imported: {
            type: 'Identifier',
            start: 9,
            end: 10,
            name: 'a',
          },
          local: {
            type: 'Identifier',
            start: 9,
            end: 10,
            name: 'a',
          },
        },
      ],
      source: {
        type: 'Literal',
        start: 18,
        end: 26,
        value: './a.js',
        raw: '\'./a.js\'',
      },
    },
  ],
  sourceType: 'module',
};

```

rollup 使用了 acorn 和 magic-string 两个库。为了更好的阅读 rollup 源码，必须对它们有所了解。

下面我将简单的介绍一下这两个库的作用。

acorn
acorn 是一个 JavaScript 语法解析器，它将 JavaScript 字符串解析成语法抽象树 AST。

例如以下代码：
```js
export default function add(a, b) { return a + b }
将被解析为：

{
    "type": "Program",
    "start": 0,
    "end": 50,
    "body": [
        {
            "type": "ExportDefaultDeclaration",
            "start": 0,
            "end": 50,
            "declaration": {
                "type": "FunctionDeclaration",
                "start": 15,
                "end": 50,
                "id": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 27,
                    "name": "add"
                },
                "expression": false,
                "generator": false,
                "params": [
                    {
                        "type": "Identifier",
                        "start": 28,
                        "end": 29,
                        "name": "a"
                    },
                    {
                        "type": "Identifier",
                        "start": 31,
                        "end": 32,
                        "name": "b"
                    }
                ],
                "body": {
                    "type": "BlockStatement",
                    "start": 34,
                    "end": 50,
                    "body": [
                        {
                            "type": "ReturnStatement",
                            "start": 36,
                            "end": 48,
                            "argument": {
                                "type": "BinaryExpression",
                                "start": 43,
                                "end": 48,
                                "left": {
                                    "type": "Identifier",
                                    "start": 43,
                                    "end": 44,
                                    "name": "a"
                                },
                                "operator": "+",
                                "right": {
                                    "type": "Identifier",
                                    "start": 47,
                                    "end": 48,
                                    "name": "b"
                                }
                            }
                        }
                    ]
                }
            }
        }
    ],
    "sourceType": "module"
}

```

可以看到这个 AST 的类型为 program，表明这是一个程序。body 则包含了这个程序下面所有语句对应的 AST 子节点。

每个节点都有一个 type 类型，例如 Identifier，说明这个节点是一个标识符；BlockStatement 则表明节点是块语句；ReturnStatement 则是 return 语句。

如果想了解更多详情 AST 节点的信息可以看一下这篇文章《使用 Acorn 来解析 JavaScript》。

## magic-string

magic-string 也是 rollup 作者写的一个关于字符串操作的库。下面是 github 上的示例：
```js
var MagicString = require( 'magic-string' );
var s = new MagicString( 'problems = 99' );

s.overwrite( 0, 8, 'answer' );
s.toString(); // 'answer = 99'

s.overwrite( 11, 13, '42' ); // character indices always refer to the original string
s.toString(); // 'answer = 42'

s.prepend( 'var ' ).append( ';' ); // most methods are chainable
s.toString(); // 'var answer = 42;'

var map = s.generateMap({
  source: 'source.js',
  file: 'converted.js.map',
  includeContent: true
}); // generates a v3 sourcemap

require( 'fs' ).writeFile( 'converted.js', s.toString() );
require( 'fs' ).writeFile( 'converted.js.map', map.toString() );

```

从示例中可以看出来，这个库主要是对字符串一些常用方法进行了封装。这里就不多做介绍了。

#### rollup 源码结构
```js
│  bundle.js // Bundle 打包器，在打包过程中会生成一个 bundle 实例，用于收集其他模块的代码，最后再将收集的代码打包到一起。
│  external-module.js // ExternalModule 外部模块，例如引入了 'path' 模块，就会生成一个 ExternalModule 实例。
│  module.js // Module 模块，开发者自己写的代码文件，都是 module 实例。例如有 'foo.js' 文件，它就对应了一个 module 实例。
│  rollup.js // rollup 函数，一切的开始，调用它进行打包。
│
├─ast // ast 目录，包含了和 AST 相关的类和函数
│      analyse.js // 主要用于分析 AST 节点的作用域和依赖项。
│      Scope.js // 在分析 AST 节点时为每一个节点生成对应的 Scope 实例，主要是记录每个 AST 节点对应的作用域。
│      walk.js // walk 就是递归调用 AST 节点进行分析。
│
├─finalisers
│      cjs.js // 打包模式，目前只支持将代码打包成 common.js 格式
│      index.js
│
└─utils // 一些帮助函数
        map-helpers.js
        object.js
        promise.js
        replaceIdentifiers.js
```

上面是初版源码的目录结构，在继续深入前，请仔细阅读上面的注释，了解一下每个文件的作用。

# rollup 如何打包的？

在 rollup 中，一个文件就是一个模块。每一个模块都会根据文件的代码生成一个 AST 语法抽象树，rollup 需要对每一个 AST 节点进行分析。

分析 AST 节点，就是看看这个节点有没有调用函数或方法。如果有，就查看所调用的函数或方法是否在当前作用域，如果不在就往上找，直到找到模块顶级作用域为止。

如果本模块都没找到，说明这个函数、方法依赖于其他模块，需要从其他模块引入。

例如 import foo from './foo.js'，其中 foo() 就得从 ./foo.js 文件找。

在引入 foo() 函数的过程中，如果发现 foo() 函数依赖其他模块，就会递归读取其他模块，如此循环直到没有依赖的模块为止。

最后将所有引入的代码打包在一起。

接下来我们从一个具体的示例开始，一步步分析 rollup 是如何打包的。

以下两个文件是代码文件。
```js
// main.js
import { foo1, foo2 } from './foo'

foo1()

function test() {
    const a = 1
}

console.log(test())
// foo.js
export function foo1() {}
export function foo2() {}
下面是测试代码：

const rollup = require('../dist/rollup')

rollup(__dirname + '/main.js').then(res => {
    res.wirte('bundle.js')
})

```

## 1. rollup 读取 main.js 入口文件。

rollup() 首先生成一个 Bundle 实例，也就是打包器。然后根据入口文件路径去读取文件，最后根据文件内容生成一个 Module 实例。
```js
fs.readFile(path, 'utf-8', (err, code) => {
    if (err) reject(err)
    const module = new Module({
        code,
        path,
        bundle: this, // bundle 实例
    })
})
```

## 2. new Moudle() 过程

在 new 一个 Module 实例时，会调用 acorn 库的 parse() 方法将代码解析成 AST。
```js
this.ast = parse(code, {
    ecmaVersion: 6, // 要解析的 JavaScript 的 ECMA 版本，这里按 ES6 解析
    sourceType: 'module', // sourceType值为 module 和 script。module 模式，可以使用 import/export 语法
})
```

接下来需要对生成的 AST 进行分析。

第一步，分析导入和导出的模块，将引入的模块和导出的模块填入对应的对象。

每个 Module 实例都有一个 imports 和 exports 对象，作用是将该模块引入和导出的对象填进去，代码生成时要用到。

上述例子对应的 imports 和 exports 为：
```js
// key 为要引入的具体对象，value 为对应的 AST 节点内容。
imports = {
  foo1: { source: './foo', name: 'foo1', localName: 'foo1' },
  foo2: { source: './foo', name: 'foo2', localName: 'foo2' }
}

// 由于没有导出的对象，所以为空
exports = {}
第二步，分析每个 AST 节点间的作用域，找出每个 AST 节点定义的变量。

每遍历到一个 AST 节点，都会为它生成一个 Scope 实例。

// 作用域
class Scope {
	constructor(options = {}) {
		this.parent = options.parent // 父作用域
		this.depth = this.parent ? this.parent.depth + 1 : 0 // 作用域层级
		this.names = options.params || [] // 作用域内的变量
		this.isBlockScope = !!options.block // 是否块作用域
	}

	add(name, isBlockDeclaration) {
		if (!isBlockDeclaration && this.isBlockScope) {
			// it's a `var` or function declaration, and this
			// is a block scope, so we need to go up
			this.parent.add(name, isBlockDeclaration)
		} else {
			this.names.push(name)
		}
	}

	contains(name) {
		return !!this.findDefiningScope(name)
	}

	findDefiningScope(name) {
		if (this.names.includes(name)) {
			return this
		}

		if (this.parent) {
			return this.parent.findDefiningScope(name)
		}

		return null
	}
}
```

Scope 的作用很简单，它有一个 names 属性数组，用于保存这个 AST 节点内的变量。 例如下面这段代码：
```js
function test() {
    const a = 1
}
```

    打断点可以看出来，它生成的作用域对象，names 属性就会包含 a。并且因为它是模块下的一个函数，所以作用域层级为 1（模块顶级作用域为 0）。

第三步，分析标识符，并找出它们的依赖项。

    什么是标识符？如变量名，函数名，属性名，都归为标识符。当解析到一个标识符时，rollup 会遍历它当前的作用域，看看有没这个标识符。如果没有找到，就往它的父级作用域找。如果一直找到模块顶级作用域都没找到，就说明这个函数、方法依赖于其它模块，需要从其他模块引入。如果一个函数、方法需要被引入，就将它添加到 Module 的 _dependsOn 对象里。

    例如 test() 函数中的变量 a，能在当前作用域找到，它就不是一个依赖项。foo1() 在当前模块作用域找不到，它就是一个依赖项。

    打断点也能发现 Module 的 _dependsOn 属性里就有 foo1。
这就是 rollup 的 tree-shaking 原理。

rollup 不看你引入了什么函数，而是看你调用了什么函数。如果调用的函数不在此模块中，就从其它模块引入。
换句话说，如果你手动在模块顶部引入函数，但又没调用。rollup 是不会引入的。从我们的示例中可以看出，一共引入了 foo1() foo2() 两个函数，_dependsOn 里却只有 foo1()，因为引入的 foo2() 没有调用。
_dependsOn 有什么用呢？后面生成代码时会根据 _dependsOn 里的值来引入文件。

## 3. 根据依赖项，读取对应的文件。

从 _dependsOn 的值可以发现，我们需要引入 foo1() 函数。

这时第一步生成的 imports 就起作用了：
```js
imports = {
  foo1: { source: './foo', name: 'foo1', localName: 'foo1' },
  foo2: { source: './foo', name: 'foo2', localName: 'foo2' }
}

```

rollup 将 foo1 当成 key，找到它对应的文件。然后读取这个文件生成一个新的 Module 实例。由于 foo.js 文件导出了两个函数，所以这个新 Module 实例的 exports 属性是这样的：
```js
exports = {
  foo1: {
    node: Node {
      type: 'ExportNamedDeclaration',
      start: 0,
      end: 25,
      declaration: [Node],
      specifiers: [],
      source: null
    },
    localName: 'foo1',
    expression: Node {
      type: 'FunctionDeclaration',
      start: 7,
      end: 25,
      id: [Node],
      expression: false,
      generator: false,
      params: [],
      body: [Node]
    }
  },
  foo2: {
    node: Node {
      type: 'ExportNamedDeclaration',
      start: 27,
      end: 52,
      declaration: [Node],
      specifiers: [],
      source: null
    },
    localName: 'foo2',
    expression: Node {
      type: 'FunctionDeclaration',
      start: 34,
      end: 52,
      id: [Node],
      expression: false,
      generator: false,
      params: [],
      body: [Node]
    }
  }
}
```

这时，就会用 main.js 要导入的 foo1 当成 key 去匹配 foo.js 的 exports 对象。如果匹配成功，就把 foo1() 函数对应的 AST 节点提取出来，放到 Bundle 中。如果匹配失败，就会报错，提示 foo.js 没有导出这个函数。

## 4. 生成代码。

由于已经引入了所有的函数。这时需要调用 Bundle 的 generate() 方法生成代码。

同时，在打包过程中，还需要对引入的函数做一些额外的操作。

移除额外代码

例如从 foo.js 中引入的 foo1() 函数代码是这样的：export function foo1() {}。rollup 会移除掉 export ，变成 function foo1() {}。因为它们就要打包在一起了，所以就不需要 export 了。

重命名

例如两个模块中都有一个同名函数 foo()，打包到一起时，会对其中一个函数重命名，变成 _foo()，以避免冲突。

好了，回到正文。

还记得文章一开始提到的 magic-string 库吗？在 generate() 中，会将每个 AST 节点对应的源代码添加到 magic-string 实例中：
```js
magicString.addSource({
    content: source,
    separator: newLines
})
这个操作本质上相当于拼字符串：

str += '这个操作相当于将每个 AST 的源代码当成字符串拼在一起，就像现在这样'
最后将拼在一起的代码返回。

return { code: magicString.toString() }

```

到这就已经结束了，如果你想把代码生成文件，可以调用 write() 方法生成文件：
```js
rollup(__dirname + '/main.js').then(res => {
    res.wirte('dist.js')
})
```

这个方法是写在 rollup() 函数里的。
```js
function rollup(entry, options = {}) {
    const bundle = new Bundle({ entry, ...options })
    return bundle.build().then(() => {
        return {
            generate: options => bundle.generate(options),
            wirte(dest, options = {}) {
                const { code } = bundle.generate({
					dest,
					format: options.format,
				})

				return fs.writeFile(dest, code, err => {
                    if (err) throw err
                })
            }
        }
    })
}
```
