# safari 浏览器打不开 localhost(http)本地环境,将资源指向了 https

### 解决方案：

注释掉如下 mate 标签

```js
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests"
/>
```

### 原理解析:

HTTP Content-Security-Policy(CSP) upgrade-insecure-requests 指令指示用户代理将站点的所有不安全 URL（通过 HTTP 提供的 URL）视为已替换为安全 URL（通过 HTTPS 提供的 URL）。该指令适用于具有大量需要重写的不安全遗留 URL 的网站。
