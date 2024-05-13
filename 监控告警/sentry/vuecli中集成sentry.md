# vuecli中集成sentry

npm install --save @sentry/vue


```js
import { createApp } from "vue";
import { createRouter } from "vue-router";
import * as Sentry from "@sentry/vue";

const app = createApp({
  // ...
});
const router = createRouter({
  // ...
});

Sentry.init({
  app,
  dsn: "https://e0652112660d35750e2be111116cbd9aa33e@o4506794266329088.ingest.us.sentry.io/4507213071384576",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router);
app.mount("#app");
```







上传source-map文件：
## 自动配置
```shell
npx @sentry/wizard@latest -i sourcemaps
```





## 手动配置的话

在根目录创建文件.sentryclirc 内容:
```js
SENTRY_AUTH_TOKEN=XXX

```

```js
// vue.config.js
const { defineConfig } = require('@vue/cli-service')
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: true, // 这一项需要为true
  // other configuration
  configureWebpack: (config) => {
    // config.devtool = "eval-source-map"
    config.devtool = "source-map"
    config.plugins.push(
      sentryWebpackPlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "vue3",
        project: "javascript-vue",
      })
    )
  },
})

```


修改npm run build命令在打包上传完成后删除source-map文件：
```js
//package.json

"scripts": {
	"build": "vue-cli-service build && rm -rf dist/js/*.map"
}

```