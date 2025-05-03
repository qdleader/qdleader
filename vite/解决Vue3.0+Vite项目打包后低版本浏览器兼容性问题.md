# 解决 Vue3.0+Vite 项目打包后低版本浏览器兼容性问题

## 1. 官方解决方案：使用@vitejs/plugin-legacy 插件

它将自动生成传统版本的 chunk 及与其相对应 ES 语言特性方面的 polyfill。兼容版的 chunk 只会在不支持原生 ESM 的浏览器中进行按需加载。

安装插件：

```bash
npm i @vitejs/plugin-legacy -D
```

```js
// vite.config.js
import legacy from "@vitejs/plugin-legacy";

export default {
  plugins: [
    legacy({
      targets: ["Chrome 64"],
      modernPolyfills: true,
    }),
    // legacy({
    //   targets: ["defaults", "ie >= 11", "chrome 52"], //需要兼容的目标列表，可以设置多个
    //   additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    //   renderLegacyChunks: true,
    //   polyfills: [
    //     "es.symbol",
    //     "es.array.filter",
    //     "es.promise",
    //     "es.promise.finally",
    //     "es/map",
    //     "es/set",
    //     "es.array.for-each",
    //     "es.object.define-properties",
    //     "es.object.define-property",
    //     "es.object.get-own-property-descriptor",
    //     "es.object.get-own-property-descriptors",
    //     "es.object.keys",
    //     "es.object.to-string",
    //     "web.dom-collections.for-each",
    //     "esnext.global-this",
    //     "esnext.string.match-all",
    //   ],
    // }),
  ],
};
```

## 2. @vitejs/plugin-legacy 插件，在打包过程中做了什么？

打包过程中使用@babel/preset-env 转换浏览器不支持的语法和新 API，为包中的每个块生成相应的转化块；
生成一个包含 SystemJS 运行时的 polyfill 块；
在打包文件中生成带有 legacy 名的文件，每个 js 脚本文件都有一个与其对应的转化版本；
html 文件中新增了一些 script-nomodule 脚本，这些脚本根据浏览器的支持程度来动态的引入正常版本文件还是带有 legacy 字样的转化版本文件
