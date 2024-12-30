# Vite 工作原理

Vite 是一种现代化的前端开发工具，其工作原理主要分为以下几个步骤：

> 基于 ESM 构建：
> Vite 作为一款基于 ESM 的前端构建工具，通过 ES 模块提供的动态导入功能来实现快速的开发和构建。

> 零配置开发：
> Vite 允许开发者在不需要任何配置的情况下启动一个服务器进行开发，通过对文件的即时编译和缓存，来提高开发效率。

> 基于浏览器原生的 ESM 加载：
> Vite 将所有文件视为 ES 模块，并且在开发时会直接从源代码加载模块，而不是打包后的文件，从而可以避免打包的过程带来的性能损失。

> 按需编译和缓存：
> Vite 会按需编译和缓存依赖项，只有当需要更新时才会进行重新编译，缓存让开发者可以忽略无关的代码变化。

> 插件化架构：
> Vite 的插件化架构可以方便地扩展其功能，例如使用插件来处理 CSS、处理图片、压缩源代码等等。

## Esbuild

Vite 底层使用 Esbuild 实现对.`ts、jsx、.`js 代码文件的转化，所以先看下什么是 es-build。

Esbuild 是一个 JavaScript`` Bundler 打包和压缩工具，它提供了与 Webpack、Rollup 等工具相似的资源打包能力。可以将 JavaScript 和 TypeScript 代码打包分发在网页上运行。但其打包速度却是其他工具的 10 ～ 100 倍。

目前他支持以下的功能：

> 加载器
> 压缩
> 打包
> Tree shaking
> Source map 生成
> esbuild 总共提供了四个函数：transform、build、buildSync、Service。有兴趣的可以移步官方文档了解。

## Rollup

在生产环境下，Vite 使用 Rollup 来进行打包

Rollup 是基于 ESM 的 JavaScript 打包工具。相比于其他打包工具如 Webpack，他总是能打出更小、更快的包。因为 Rollup 基于 ESM 模块，比 Webpack 和 Browserify 使用的 CommonJS 模块机制更高效。Rollup 的亮点在于同一个地方，一次性加载。能针对源码进行 Tree Shaking(去除那些已被定义但没被使用的代码)，以及 Scope Hoisting 以减小输出文件大小提升运行性能。

Rollup 分为 build（构建）阶段和 output generate（输出生成）阶段。主要过程如下：

> 获取入口文件的内容，包装成 module，生成抽象语法树
> 对入口文件抽象语法树进行依赖解析
> 生成最终代码
> 写入目标文件
> 如果你的项目（特别是类库）只有 JavaScript，而没有其他的静态资源文件，使用 Webpack 就有点大才小用了。因为 Webpack 打包的文件的体积略大，运行略慢，可读性略低。这时候 Rollup 也不失为一个好选择。

这里想对 Rollp 进行更深入的学习可以看看官网的介绍。

## 3 核心原理

详细阐述下：

当声明一个 script 标签类型为 module 时,如

```html
<script type="module" src="/src/main.js"></script>
```

当浏览器解析资源时，会往当前域名发起一个 GET 请求 main.js 文件

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
```

请求到了 main.js 文件，会检测到内部含有 import 引入的包，又会 import 引用发起 HTTP 请求获取模块的内容文件，如 App.vue、vue 文件
Vite 其核心原理是利用浏览器现在已经支持 ES6 的 import,碰见 import 就会发送一个 HTTP 请求去加载文件，Vite 启动一个 koa 服务器拦截这些请求，并在后端进行相应的处理将项目中使用的文件通过简单的分解与整合，然后再以 ESM 格式返回返回给浏览器。Vite 整个过程中没有对文件进行打包编译，做到了真正的按需加载，所以其运行速度比原始的 webpack 开发编译速度快出许多！
