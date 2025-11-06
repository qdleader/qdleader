

```shell
/usr/local/webserver/nginx/sbin/nginx -t
```

```js
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
     use epoll;
}

http {

    # 设置常用的MIME类型
    include       mime.types;
    default_type  application/octet-stream;

    # 反向代理及负载均衡配置
    upstream backend_server {
        server 127.0.0.1:8080;
        server 127.0.0.1:8081;
    }

  # server 开始
server {
    listen       80;
    server_name admin.vuereact.com;
    location / {
        alias  /usr/local/webserver/nginx/html/admin/;
        index  index.html index.html;
    }

     location /api/ {
        proxy_pass http://vuereact.top:5627/;
    }
    # 重点：解决二级目录部署时，访问css、js等静态资源报404的问题
    location /assets/ {
            alias  /usr/local/webserver/nginx/html/admin/assets/;
    }
}

# server 结束

    server {
    listen       80;
    server_name project1.vuereact.top;
    location / {
        alias  /usr/local/webserver/nginx/html/qiankun/vue3main/;
        index  index.html index.html;
     }

    location /micro-app-demos/qiankun-demo/vue3-main/assets/ {
            alias  /usr/local/webserver/nginx/html/qiankun/vue3main/assets/;
    }

    location /micro-app-demos/qiankun-demo/vite-child/assets/ {
            alias  /usr/local/webserver/nginx/html/qiankun/vite/assets/;
    }
   }
}

```
