
使用 --esModuleInterop 支持在 CommonJs 模块下使用 import d from 'cjs'
TypeScript 之前对于 CommonJs/AMD/UMD 模块与 ES6 模块处理方式相同，这就导致了一系列的问题。

问题1
假如 foo 模块的模块规范是CommonJS/AMD/UMD 模块其中的一种，在 ts 文件中使用语句 import * as foo from "foo"，TypeScript 会将其等同于 const foo = require("foo")。
看起来很简单，但是它们不能确定要导入的主要对象是原语、类还是函数。ECMAScript 规范规定命名空间记录是一个普通对象，命名空间导入（上面例子中的foo）是不可调用的，尽管 TypeScript允许这样做。

问题2
假如 foo 模块的模块规范是CommonJS/AMD/UMD 模块其中的一种，在 ts 文件中使用语句 import d from "foo"，TypeScript 会将其等同于 const d = require("foo")。但是 CommonJS/AMD/UMD 模块至今没有一个默认导出，造成这个导入模式在非 ES 模块下不能使用。例如 import fs from "fs" 是不被允许的。

// 像下面这样使用基本上会报错，文件名是 index.ts
```js
import Koa from 'koa';
const app = new Koa();
```

基于 --esModuleInterop 这两种问题都会被解决：

> 命名空间导入 (即： import * as foo from "foo")现在会被正确标记为不可调用，调用就会报错。
> 支持从 CommonJS/AMD/UMD 默认导入，并且可以正常工作。
>
> 
例子：
使用 --esModuleInterop 会生成两个辅助方法 __importStar 和 __importDefault 用于 import * 和 import default。

```js
import * as foo from "foo";
import b from "bar";
```

编译后：

```js
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
exports.__esModule = true;
var foo = __importStar(require("foo"));
var bar_1 = __importDefault(require("bar"));
```
