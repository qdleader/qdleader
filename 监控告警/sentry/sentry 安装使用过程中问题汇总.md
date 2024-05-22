
# 记录一下Sentry安装中遇到的问题

## 1、配置HTTPS访问，解决net::ERR_SSL_PROTOCOL_ERROR 错误

修改 Self-hosted/sentry/config.yml
```js
system.url-prefix: 'https://xxx.com' // 实际访问地址，最后不加 /
```

YAML
修改Self-hosted/sentry/sentry.yml ，去掉下方代码的注释
```js
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
USE_X_FORWARDED_HOST = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SOCIAL_AUTH_REDIRECT_IS_HTTPS = True
```



## 最后重新启动compose
```shell
docker compose down
docker compose up -d
```

### 2、使用nginx反向代理sentry服务
```js
upstream sentry {
    server 127.0.0.1:9000;
}
server
{
	listen 443 ssl;
    server_name xxx.com;
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/xxx.com;
    location / {
      proxy_pass http://sentry;
      proxy_set_header Host $host:$proxy_port;
    }
    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;

    ssl_certificate    /path/to/xxx.pem;
    ssl_certificate_key    /path/to/xxx.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;
	
    access_log  /dev/null;
    error_log  /dev/null;
}
```


## sentry 设置root url地址
安装好sentry后我们查看后台会发现地址是改不了的

根据图上提示是去conifg.yml中去修改，但是我去查看配置时并没有提示或者注释过的参数配置

最后得知字段名字是 system.url-prefix

system.url-prefix: 'http://192.168.0.117:9001'
加上配置即可


ps：地址最后是没有 ‘‘/’’的，加了就会多一个，千万记得不能多，其中的地址也可以换成域名，需要自己用niginx做反向代理即可

最后修改完成后，保存 重启
```shell
docker-compose down
docker-compose up -d
```


