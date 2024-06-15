# 微前端sentry 上传sourcemap

## 主应用

vue.config.js
```ts

const { defineConfig } = require('@vue/cli-service')
const {sentryWebpackPlugin} = require('@sentry/webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: true, // 这一项需要为true
  configureWebpack: (config) => {
    config.devtool = "source-map"
    if (process.env.VUE_APP_SENTRY_ENV === "prod") {
      config.plugins.push(
        sentryWebpackPlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: "sentry",
          project: "admin-main",
          url: "https://sentry.yourserver.cn",
        })
      )
    }
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  
  },
})

```

.env.sentry-build-plugin
```js
SENTRY_AUTH_TOKEN=sntrys_token
```


## 子应用
vue.config.js
```js
const { defineConfig } = require("@vue/cli-service")
const packageName = require("./package.json").name
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin")



module.exports = defineConfig({
  publicPath: isLocal ? "/" : "/cem-app/",
  transpileDependencies: true,
  productionSourceMap: true,
  configureWebpack: (config) => {
    config.devtool = "source-map"
    config.output.library = `${packageName}-[name]`
    config.output.libraryTarget = "umd"
    config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`
    if (process.env.VUE_APP_SENTRY_ENV === "prod") {
      config.plugins.push(
        sentryWebpackPlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: "sentry",
          project: "admin-main",
          url: "https://sentry.alphalawyer.cn",
          urlPrefix: "~/son-app/"
        })
      )
    }
  },

})

```

.env.sentry-build-plugin
```js
SENTRY_AUTH_TOKEN=sntrys_token
```