# 微前端 引入 sentry

## 主应用中


main.ts
```ts
import { sentryInitForVueSubApp } from "./sentry.ts"

import * as Sentry from "@sentry/vue";

let loadingInstance: any = null

const app = createApp(App)

if (process.env.VUE_APP_SENTRY_ENV === "prod") {
  Sentry.init({
    app,
    dsn: "https://396bcb150b5e2838b08d0fe9b7b4ab8b@sentry.myserver.cn/2",
    integrations: [
      // Sentry.browserTracingIntegration(),
      // Sentry.replayIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 0.0, // 禁用性能监控
    autoSessionTracking: false,  // 禁用会话录制
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    // tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // // Session Replay
    replaysSessionSampleRate: 0.0, // 禁用会话回放采样
    replaysOnErrorSampleRate: 0.0, // 禁用错误会话回放采样
    // beforeSend() {
    //   const currentRoute = router.currentRoute
    //   console.error("currentRoute", currentRoute.value)
    //   return null
    // }
  });
}



registerMicroApps([
  {
    name: 'admin', // app name registered
    entry: process.env.VUE_APP_ADMIN_WEB,
    container: '#micro-app1',
    activeRule: '/rock-app1',
    props: {
      sentryInit: sentryInitForVueSubApp,
    }
  }
]
);
```

sentry.ts

```ts
import { attachErrorHandler, createTracingMixins } from "@sentry/vue";

/**
 *  app用于传入Vue或者Vue示例
 *  options用于传入子应用的sentry配置
 */
export function sentryInitForVueSubApp(app: any, options: any) {
  // attachErrorHandler中，sentry会获取app.config.errorHandler进行处理
  attachErrorHandler(app, options);

  if ("tracesSampleRate" in options || "tracesSampler" in options) {
    app.mixin(
      // createTracingMixins用于在event中追加关于vue的信息，例如从抛出错误的组件到根组件形成的组件轨迹等
      // 即使一个页面用了多个相同的组件，这种信息也能让我们快速定位错误抛自哪个组件实例上
      createTracingMixins({
        ...options,
        ...options.tracingOptions,
      })
    );
  }
}

```



## 子应用


main.ts
```ts

let instance: any
function render(props = {} as Record<string, any>) {
  const {
    container,
    onGlobalStateChange,
    setGlobalState,
    offGlobalStateChange,
    sentryInit
  } = props

  // 挂载路由
  router = createRouter({
    routes,
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/rock-app1" : "/")
  })



  // 注册APP实例
  instance = createApp(App)

  instance.use(router)
  instance.use(store)


  if (process.env.VUE_APP_SENTRY_ENV === "prod") {
    sentryInit?.(instance, {
      tracesSampleRate: 0.0, // 禁用性能监控
      autoSessionTracking: false, // 禁用会话录制
      replaysSessionSampleRate: 0.0, // 禁用会话回放采样
      replaysOnErrorSampleRate: 0.0, // 禁用错误会话回放采样
      logErrors: true,
      attachProps: true
    })
  }

  instance.mount(container ? container.querySelector("#app") : "#app")

}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

```


