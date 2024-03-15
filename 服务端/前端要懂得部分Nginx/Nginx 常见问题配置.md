
# Nginx 常见问题配置

## https 请求 http 接口报错
nginx 中添加
```shell
add_header Strict-Transport-Security "max-age=31536000" always;
add_header Content-Security-Policy upgrade-insecure-requests;
```