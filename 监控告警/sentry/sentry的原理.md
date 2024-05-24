# sentry的原理


window.onerror劫持，监听unhandledrejection事件，监听vue ErrorHandler方法
如何上报

sentry.init()时会创建hub，并在其上绑定一个客户端client和一个空白作用域scope。
client 创建事件分发给transport
transport 统一处理ajax上报请求



```js
const client = new BrowserClient({
  dsn: 'https://<key>@sentry.io/<project>',
});
 
const hub = new Hub(client);
 hub.configureScope(function(scope) {
  scope.setTag("a", "b");
});
 
hub.addBreadcrumb({ message: "crumb 1" });
hub.captureMessage("test");
 
try {
  a = b;
} catch (e) {
  hub.captureException(e);
}
 
hub.withScope(function(scope) {
  hub.addBreadcrumb({ message: "crumb 2" });
  hub.captureMessage("test2");
});

```