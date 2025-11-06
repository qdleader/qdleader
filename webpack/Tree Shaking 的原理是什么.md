# Tree Shaking 的原理是什么

Tree Shaking 指基于 ES Module 进行静态分析，通过 AST 将用不到的函数进行移除，从而减小打包体积。

```js
/* TREE-SHAKING */
import { sum } from './maths.js'

console.log( sum( 5, 5 ) )  // 10
// maths.js

export function sum ( x, y ) {
  return x + y
}

// 由于 sub 函数没有引用到，最终将不会对它进行打包
export function sub ( x, y ) {
  return x - y
}
```

最终打包过程中，sub 没有被引用到，将不会对它进行打包。以下为打包后代码。
```js
// maths.js

function sum ( x, y ) {
  return x + y
}

console.log( sum( 5, 5 ) )
```

## import *

当使用语法 import * 时，Tree Shaking 依然生效。

```js
import * as maths from './maths'

// Tree Shaking 依然生效
maths.sum(3, 4)
maths['sum'](3, 4)

```

import * as maths，其中 maths 的数据结构是固定的，无复杂数据，通过 AST 分析可查知其引用关系。
```js
const maths = {
  sum () {},
  sub () {}
}
JSON TreeShaking
Tree Shaking 甚至可对 JSON 进行优化。原理是因为 JSON 格式简单，通过 AST 容易预测结果，不像 JS 对象有复杂的类型与副作用。

```

{
  "a": 3,
  "b": 4
}
import obj from './main.json'

// obj.b 由于未使用到，仍旧不会被打包
console.log(obj.a)

```js

#### 对于已经 import 但未实际使用的模块使用 webpack 还会对它打包吗？

tree shaking通过扫描所有 ES6 的 export，找出被 import 的内容并添加到最终代码中。tree shaking的使用时 源码必须遵循 ES6 的模块规范 (import & export)，如果是 CommonJS 规范 (require) 则无法使用。 
```

// .babelrc
{
    "presets": [
        ["es2015", {"modules": false}]
    ]
}
```js
tree shaking在webpack2.0里面需要进行手动设置，webpack3和webpack4里面为默认设置。

#### 一、对于方法的处理

通过tree shaking设置后，webpack里面会将没有使用的方法标记为： unused harmony export xxx，但代码仍然保留。（webpack编译后的源码里面仍然包含没有使用的方法） 随后使用UglifyJSPlugin进行第二步，将已经标记的没有使用的方法进行删除。

#### 二、对于类的处理

与标记方法不同，webpack打包时会将整个类进行标记，也就是说，即使类里面的方法没有被使用也会进行打包编译。 这表明 webpack tree shaking 只处理顶层内容，例如类和对象内部都不会再被分别处理。 综上所述，可以得出 “对于已经 import 但未实际使用的模块使用 webpack 还会对它打包” 。 当然，想要精简代码是可以实现的
模块/文件级别的 tree shaking，如果模块没有导入但是模块内的函数存在副作用(对外部变量进行读写)的话，也会被打包。解决方法是在模块所在的npm包的package.json中增加 sideEffects: false, 表示所有的模块/文件都是没有副作用的，或者有副作用的话被删了也没关系
```
