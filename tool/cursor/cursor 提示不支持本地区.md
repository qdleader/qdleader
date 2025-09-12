# cursor 提示不支持本地区

【cursor Model not available This model provider doesn't serve your region. Visit https://docs.cursor.com/account/regions for moreinformation.】
Model not available
This model provider doesn't serve your region. Visit https://docs.cursor.com/account/regions for moreinformation.

cmd + shift + p
->
open user settings(JSON)
->
自行添加
原理：cursor要有自己的网络Proxy
```js

  "http.proxy": "http://127.0.0.1:7890",
  "http.proxyStrictSSL": false,
  "http.proxySupport": "override",
  "http.noProxy": [],
  "cursor.general.disableHttp2": true,
```