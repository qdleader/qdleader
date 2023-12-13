
1. ## 下载
```js
npm install unplugin-auto-import@0.16.1
```





2. ## vue.config.js 中引入
```js

// 自动按需加载
const AutoImport = require("unplugin-auto-import/webpack")

module.exports = defineConfig({
 
  configureWebpack: (config) => {
    config.output.library = `${packageName}-[name]`
    config.output.libraryTarget = "umd"
    config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`
    config.plugins = [
      ...config.plugins,
      AutoImport({
        imports: ["vue", "vue-router", "vuex"],
        dts: true,
        eslintrc: {
          enabled: true, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
          filepath: "./.eslintrc-auto-import.json", // 生成json文件,eslintrc中引入
          globalsPropValue: true
        }
      })
    ]

 
  },
  devServer: {
  
  }
})

```


3. ## .eslintrc
```js
module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "@vue/typescript/recommended",
    "./.eslintrc-auto-import.json"
  ],
```

4. ## ts.config.json
ts.config.json文件引入声明文件: include中引入auto-imports.d.ts

{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "auto-imports.d.ts" // 此处引入该声明文件
  ],
  "references": [{ "path": "./tsconfig.node.json" }]
}




https://github.com/unplugin/unplugin-auto-import