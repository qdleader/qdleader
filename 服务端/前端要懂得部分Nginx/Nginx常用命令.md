## 查找安装路径

## 查看nginx 目录及状态
```js
nginx -t
```

## nginx 重启
nginx -s reload

#### 停止nginx
nginx -s stop


#### 启动nginx
nginx 


#### 查看当前nginx进程

ps -ef | grep nginx



找到你的nginx的 nginx.conf文件 vim 去查看和修改这文件

vim /www/server/nginx/conf/nginx.conf

输入vim进入到文件之后，按i键进入INSERT模式，
```js
server {
        listen 80;  # 端口号
        server_name localhost; # 有域名就填域名，没有就填ip地址或者本机

        include /etc/nginx/default.d/*.conf;

        location / {
        root /www/项目目录/build;   # 打包后的文件目录
        index index.html index.htm;
        try_files $uri $uri/ @router;  # 开启了browserRouter模式就写这个
        }

        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }

```


按esc键退出输入模式，然后输入:wq保存退出之后再在命令行输入下面指令重启nginx服务

重启nginx

nginx -s reload


或者（可以看到我的安装路径是在 /www/server/nginx，默认在这个目录下，有一个sbin目录，它下面有个nginx文件，这个nginx是个可执行文件，
执行启动命令：

/www/server/nginx/sbin/nginx）




# 端口、防火墙
CentOS7默认安装了firewalld防火墙，如果系统开启了防火墙，那我们就要手动去开放端口号

查看防火墙是否开启

systemctl status firewalld

开启防火墙

systemctl start firewalld
关闭防火墙

systemctl stop firewalld
防火墙开机自启

systemctl enable firewalld
停止并且禁用防火墙

sytemctl disable firewalld


查看目前已开放端口

netstat -anp
查看指定端口是否已经开启-前提是要先开启防火墙

firewall-cmd --query-port=9090/tcp
对外开放端口号

firewall-cmd --add-port=123/tcp --permanent # permanent表示永久开放，没有此参数重启后失效
## 重新加载添加的端口
firewall-cmd --reload
关闭开放端口号

firewall-cmd --permanent --remove-port=9090/tcp




```conf

#user  nobody;
user  root;
worker_processes  1;
worker_rlimit_nofile 65535;

error_log /usr/local/webserver/nginx/logs/nginx_error.log crit;
pid /usr/local/webserver/nginx/nginx.pid;

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
    server_name project1.vuereact.com;
    location / {
        alias  /usr/local/webserver/nginx/html/home/;
        index  index.html index.html;
     }
    location /admin/ {
        alias  /usr/local/webserver/nginx/html/admin/;
        index  index.html index.html;
    }


   # 重点：解决二级目录部署时，访问css、js等静态资源报404的问题

            location /assets/ {
                   alias  /usr/local/webserver/nginx/html/admin/assets/;
            }
   }

}                               
```