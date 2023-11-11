## 什么是Nginx

Nginx是一个开源的高性能HTTP和反向代理服务器。它可以用于处理静态资源、负载均衡、反向代理和缓存等任务。Nginx被广泛用于构建高可用性、高性能的Web应用程序和网站。它具有低内存消耗、高并发能力和良好的稳定性，因此在互联网领域非常受欢迎。



### 为什么使用Nginx

高性能：Nginx采用事件驱动的异步架构，能够处理大量并发连接而不会消耗过多的系统资源。它的处理能力比传统的Web服务器更高，在高并发负载下表现出色。
高可靠性：Nginx具有强大的容错能力和稳定性，能够在面对高流量和DDoS攻击等异常情况下保持可靠运行。它能通过健康检查和自动故障转移来保证服务的可用性。
负载均衡：Nginx可以作为反向代理服务器，实现负载均衡，将请求均匀分发给多个后端服务器。这样可以提高系统的整体性能和可用性。
静态文件服务：Nginx对静态资源（如HTML、CSS、JavaScript、图片等）的处理非常高效。它可以直接缓存静态文件，减轻后端服务器的负载。
扩展性：Nginx支持丰富的模块化扩展，可以通过添加第三方模块来提供额外的功能，如gzip压缩、SSL/TLS加密、缓存控制等。

## 如何处理请求
```js
Nginx处理请求的基本流程如下：

接收请求：Nginx作为服务器软件监听指定的端口，接收客户端发来的请求。

解析请求：Nginx解析请求的内容，包括请求方法（GET、POST等）、URL、头部信息等。


配置匹配：Nginx根据配置文件中的规则和匹配条件，决定如何处理该请求。配置文件定义了虚拟主机、反向代理、负载均衡、缓存等特定的处理方式。


处理请求：Nginx根据配置的处理方式，可能会进行以下操作：

静态文件服务：如果请求的是静态资源文件，如HTML、CSS、JavaScript、图片等，Nginx可以直接返回文件内容，不必经过后端应用程序。


反向代理：如果配置了反向代理，Nginx将请求转发给后端的应用服务器，然后将其响应返回给客户端。这样可以提供负载均衡、高可用性和缓存等功能。
缓存：如果启用了缓存，Nginx可以缓存一些静态或动态内容的响应，在后续相同的请求中直接返回缓存的响应，减少后端负载并提高响应速度。
URL重写：Nginx可以根据配置的规则对URL进行重写，将请求从一个URL重定向到另一个URL或进行转换。
SSL/TLS加密：如果启用了SSL/TLS，Nginx可以负责加密和解密HTTPS请求和响应。
访问控制：Nginx可以根据配置的规则对请求进行访问控制，例如限制IP访问、进行身份认证等。



响应结果：Nginx根据处理结果生成响应报文，包括状态码、头部信息和响应内容。然后将响应发送给客户端。
```


## 什么是正向代理和反向代理

#### 正向代理
是指客户端通过代理服务器发送请求到目标服务器。客户端向代理服务器发送请求，代理服务器再将请求转发给目标服务器，并将服务器的响应返回给客户端。正向代理可以隐藏客户端的真实IP地址，提供匿名访问和访问控制等功能。它常用于跨越防火墙访问互联网、访问被封禁的网站等情况。

#### 反向代理
是指客户端发送请求到代理服务器，代理服务器再将请求转发给后端的多个服务器中的一个或多个，并将后端服务器的响应返回给客户端。客户端并不直接访问后端服务器，而是通过反向代理服务器来获取服务。反向代理可以实现负载均衡、高可用性和安全性等功能。它常用于网站的高并发访问、保护后端服务器、提供缓存和SSL终止等功能。


#### nginx 启动和关闭
```js
bash复制代码进入目录：/usr/local/nginx/sbin
启动命令：./nginx
重启命令：nginx -s reload
快速关闭命令：./nginx -s stop
有序地停止，需要进程完成当前工作后再停止：./nginx -s quit
直接杀死nginx进程：killall nginx
```

目录结构

```js
[root@localhost ~]# tree /usr/local/nginx
/usr/local/nginx

├── client_body_temp                 # POST 大文件暂存目录
├── conf                             # Nginx所有配置文件的目录
│   ├── fastcgi.conf                 # fastcgi相关参数的配置文件
│   ├── fastcgi.conf.default         # fastcgi.conf的原始备份文件
│   ├── fastcgi_params               # fastcgi的参数文件
│   ├── fastcgi_params.default      
│   ├── koi-utf
│   ├── koi-win
│   ├── mime.types                   # 媒体类型
│   ├── mime.types.default
│   ├── nginx.conf                   #这是Nginx默认的主配置文件，日常使用和修改的文件
│   ├── nginx.conf.default
│   ├── scgi_params                 # scgi相关参数文件
│   ├── scgi_params.default  
│   ├── uwsgi_params                 # uwsgi相关参数文件
│   ├── uwsgi_params.default
│   └── win-utf
├── fastcgi_temp                     # fastcgi临时数据目录
├── html                             # Nginx默认站点目录
│   ├── 50x.html                     # 错误页面优雅替代显示文件，例如出现502错误时会调用此页面
│   └── index.html                   # 默认的首页文件
├── logs                             # Nginx日志目录
│   ├── access.log                   # 访问日志文件
│   ├── error.log                   # 错误日志文件
│   └── nginx.pid                   # pid文件，Nginx进程启动后，会把所有进程的ID号写到此文件
├── proxy_temp                       # 临时目录
├── sbin                             # Nginx 可执行文件目录
│   └── nginx                       # Nginx 二进制可执行程序
├── scgi_temp                       # 临时目录
└── uwsgi_temp                       # 临时目录

```


配置文件nginx.conf
```js
# 启动进程,通常设置成和cpu的数量相等
worker_processes  1;

# 全局错误日志定义类型，[debug | info | notice | warn | error | crit]
error_log  logs/error.log;
error_log  logs/error.log  notice;
error_log  logs/error.log  info;

# 进程pid文件
pid        /var/run/nginx.pid;

# 工作模式及连接数上限
events {
    # 仅用于linux2.6以上内核,可以大大提高nginx的性能
    use   epoll;

    # 单个后台worker process进程的最大并发链接数
    worker_connections  1024;

    # 客户端请求头部的缓冲区大小
    client_header_buffer_size 4k;

    # keepalive 超时时间
    keepalive_timeout 60;

    # 告诉nginx收到一个新连接通知后接受尽可能多的连接
    # multi_accept on;
}

# 设定http服务器，利用它的反向代理功能提供负载均衡支持
http {
    # 文件扩展名与文件类型映射表义
    include       /etc/nginx/mime.types;

    # 默认文件类型
    default_type  application/octet-stream;

    # 默认编码
    charset utf-8;

    # 服务器名字的hash表大小
    server_names_hash_bucket_size 128;

    # 客户端请求头部的缓冲区大小
    client_header_buffer_size 32k;

    # 客户请求头缓冲大小
    large_client_header_buffers 4 64k;

    # 设定通过nginx上传文件的大小
    client_max_body_size 8m;

    # 开启目录列表访问，合适下载服务器，默认关闭。
    autoindex on;

    # sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，
    # 必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度
    sendfile        on;

    # 此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用
    #tcp_nopush     on;

    # 连接超时时间（单秒为秒）
    keepalive_timeout  65;


    # gzip模块设置
    gzip on;               #开启gzip压缩输出
    gzip_min_length 1k;    #最小压缩文件大小
    gzip_buffers 4 16k;    #压缩缓冲区
    gzip_http_version 1.0; #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）
    gzip_comp_level 2;     #压缩等级
    gzip_types text/plain application/x-javascript text/css application/xml;
    gzip_vary on;

    # 开启限制IP连接数的时候需要使用
    #limit_zone crawler $binary_remote_addr 10m;

    # 指定虚拟主机的配置文件，方便管理
    include /etc/nginx/conf.d/*.conf;


    # 负载均衡配置
    upstream aaa {
        # 请见上文中的五种配置
    }


   # 虚拟主机的配置
    server {

        # 监听端口
        listen 80;

        # 域名可以有多个，用空格隔开
        server_name www.aaa.com aaa.com;

        # 默认入口文件名称
        index index.html index.htm index.php;
        root /data/www/sk;

        # 图片缓存时间设置
        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)${
            expires 10d;
        }

        #JS和CSS缓存时间设置
        location ~ .*.(js|css)?${
            expires 1h;
        }

        # 日志格式设定
        #$remote_addr与 $http_x_forwarded_for用以记录客户端的ip地址；
        #$remote_user：用来记录客户端用户名称；
        #$time_local：用来记录访问时间与时区；
        #$request：用来记录请求的url与http协议；
        #$status：用来记录请求状态；成功是200，
        #$body_bytes_sent ：记录发送给客户端文件主体内容大小；
        #$http_referer：用来记录从那个页面链接访问过来的；
        log_format access '$remote_addr - $remote_user [$time_local] "$request" '
        '$status $body_bytes_sent "$http_referer" '
        '"$http_user_agent" $http_x_forwarded_for';

        # 定义本虚拟主机的访问日志
        access_log  /usr/local/nginx/logs/host.access.log  main;
        access_log  /usr/local/nginx/logs/host.access.404.log  log404;

        # 对具体路由进行反向代理
        location /connect-controller {

            proxy_pass http://127.0.0.1:88;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;

            # 后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;

            # 允许客户端请求的最大单文件字节数
            client_max_body_size 10m;

            # 缓冲区代理缓冲用户端请求的最大字节数，
            client_body_buffer_size 128k;

            # 表示使nginx阻止HTTP应答代码为400或者更高的应答。
            proxy_intercept_errors on;

            # nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_connect_timeout 90;

            # 后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据
            proxy_send_timeout 90;

            # 连接成功后，后端服务器响应的超时时间
            proxy_read_timeout 90;

            # 设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffer_size 4k;

            # 设置用于读取应答的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k
            proxy_buffers 4 32k;

            # 高负荷下缓冲大小（proxy_buffers*2）
            proxy_busy_buffers_size 64k;

            # 设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长
            # 设定缓存文件夹大小，大于这个值，将从upstream服务器传
            proxy_temp_file_write_size 64k;
        }

        # 动静分离反向代理配置（多路由指向不同的服务端或界面）
        location ~ .(jsp|jspx|do)?$ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:8080;
        }
    }
}
```

location
location指令的作用就是根据用户请求的URI来执行不同的应用
语法
```js
location [ = | ~ | ~* | ^~ ] uri {...}

```

[ = | ~ | ~* | ^~ ]：匹配的标识

~与~*的区别是：~区分大小写，~*不区分大小写
^~：进行常规字符串匹配后，不做正则表达式的检查



uri：匹配的网站地址


{...}：匹配uri后要执行的配置段


举例
```js
location = / {
    [ configuration A ]
}
location / {
    [ configuration B ]
}
location /sk/ {
    [ configuration C ]
}
location ^~ /img/ {
    [ configuration D ]
}
location ~* .(gif|jpg|jpeg)$ {
    [ configuration E ]
}

```

= / 请求 / 精准匹配A，不再往下查找
/ 请求/index.html匹配B。首先查找匹配的前缀字符，找到最长匹配是配置B，接着又按照顺序查找匹配的正则。结果没有找到，因此使用先前标记的最长匹配，即配置B。

/sk/ 请求/sk/abc 匹配C。首先找到最长匹配C，由于后面没有匹配的正则，所以使用最长匹配C。

~* .(gif|jpg|jpeg)$ 请求/sk/logo.gif 匹配E。首先进行前缀字符的查找，找到最长匹配项C，继续进行正则查找，找到匹配项E。因此使用E。

^~ 请求/img/logo.gif匹配D。首先进行前缀字符查找，找到最长匹配D。但是它使用了^~修饰符，不再进行下面的正则的匹配查找，因此使用D。

## 单页面应用刷新404问题
```js
    location / {
        try_files $uri $uri/ /index.html;
    }
```
## 配置跨域请求

```js
server {
    listen   80;
    location / {
        # 服务器默认是不被允许跨域的。
        # 配置`*`后，表示服务器可以接受所有的请求源（Origin）,即接受所有跨域的请求
        add_header Access-Control-Allow-Origin *;
        
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
        
        # 发送"预检请求"时，需要用到方法 OPTIONS ,所以服务器需要允许该方法
        # 给OPTIONS 添加 204的返回，是为了处理在发送POST请求时Nginx依然拒绝访问的错误
        if ($request_method = 'OPTIONS') {
            return 204;
        }
    }
}

```

## 开启gzip压缩

```js
    # gzip模块设置
    gzip on;               #开启gzip压缩输出
    gzip_min_length 1k;    #最小压缩文件大小
    gzip_buffers 4 16k;    #压缩缓冲区
    gzip_http_version 1.0; #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）
    gzip_comp_level 2;     #压缩等级
    
    # 设置什么类型的文件需要压缩
    gzip_types text/plain application/x-javascript text/css application/xml;
    
    # 用于设置使用Gzip进行压缩发送是否携带“Vary:Accept-Encoding”头域的响应头部
    # 主要是告诉接收方，所发送的数据经过了Gzip压缩处理
    gzip_vary on;
```

总体而言，Nginx是一款轻量级、高性能、可靠性强且扩展性好的服务器软件，适用于搭建高可用性、高性能的Web应用程序和网站。

