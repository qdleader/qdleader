# 微前端 nginx 配置

```js
 location ^~ /react-app/ {
    alias  /data/project/dev-frontend/frontend-react-app-app/;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;

    if ($request_filename ~* .*\.(?:htm|html)$) {
        add_header Cache-Control "no-store, no-cache, must-revalidate, max-age=0";
    }
}
```
