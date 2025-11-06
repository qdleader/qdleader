
# 1华为HECS云服务器配置nginx

## 一、安装开发工具和依赖库

```shell
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
```

上面命令，用于在yum软件包管理器中安装一些开发工具和依赖库。命令中各个参数的含义如下：

yum：是Linux系统常用的软件包管理工具；
-y：表示在安装过程中遇到提示时默认选择"yes"，不需要手动确认；
install：表示安装软件包；
make：是一个构建工具，能够自动化地进行编译程序等操作；
zlib、zlib-devel：都是提供数据压缩和解压功能的开发库，程序在编译时通常需要这两个库的支持；
gcc-c++：是C++编译器，可以编译C++程序；
libtool：是一个构建工具，在Linux平台上使用较多，能够简化动态库、静态库的构建流程；
openssl、openssl-devel：是一个开源的加密库，提供了很多加密和解密函数。

## 二、安装PCRE

在nginx中，PCRE库被用来解析和匹配HTTP请求的URL、header、body等内容，并进行相关的操作，如重定向、路由转发、用户身份验证等。Nginx使用PCRE库能够实现更加灵活和高效的请求匹配和处理，同时也能节省开发者的时间和精力，提高Web应用的性能。因此，可将PCRE视为Nginx的一个重要组件。

#### 1、进入/usr/local/src/文件夹下执行命令下载pcre8.45压缩包。
```shell
 cd /usr/local/src/

wget http://downloads.sourceforge.net/project/pcre/pcre/8.45/pcre-8.45.tar.gz
```

#### 2、解压
```shell
tar zxvf pcre-8.45.tar.gz

chmod -R 777 pcre-8.45
```

#### 3、编译安装

进入pcre-8.45目录，进行编译安装
shell复制代码#
 cd pcre-8.45

# ./configure

yum -y install gcc-c++

# make 

 make install

#### 4、安装完成

输入命令，如果显示对应版本号表示安装成功。

```js
pcre-config --version
```

## 三、安装nginx
#### 1、下载

进入/usr/local/src/目录，使用以下命令下载nginx并解压。
```shell
 cd /usr/local/src/

# wget http://nginx.org/download/nginx-1.28.0.tar.gz

wget http://nginx.org/download/nginx-1.23.4.tar.gz

# tar zxvf nginx-1.23.4.tar.gz
```

#### 2、编译安装

进入nginx-1.23.4文件夹输入下面命令编译安装。

```shell
cd nginx-1.23.4

# ./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.45
# make install
```

./configure：运行Nginx的配置程序。
--prefix=/usr/local/webserver/nginx：指定Nginx的安装路径为"/usr/local/webserver/nginx"，即Nginx服务器将会被安装到这个目录下。
--with-http_stub_status_module：启用Nginx的stub_status模块，使Nginx可以向外界提供状态信息。
--with-http_ssl_module：启用Nginx的SSL/TLS协议支持，让Nginx可以处理HTTPS请求。
--with-pcre=/usr/local/src/pcre-8.45：指定PCRE库的路径为"/usr/local/src/pcre-8.45"，在编译Nginx时会使用该库来支持正则表达式操作。

3、安装完成
同理输入以下代码，如果出现nginx版本号，表示安装成功。
shell复制代码# /usr/local/webserver/nginx/sbin/nginx -v

4、配置nginx
使用以下命令在Linux系统中创建一个名为"ngx"的用户。
shell复制代码# /usr/sbin/groupadd ngx 

# /usr/sbin/useradd -g ngx ngx

配置nginx.conf ，将/usr/local/webserver/nginx/conf/nginx.conf替换为以下内容：
nginx.conf的具体内容包括：
a.  全局块：包括用户和工作进程的设置、错误日志、进程ID文件路径等全局性的配置信息。
ini复制代码user  ngx ngx;
worker_processes  auto;
worker_rlimit_nofile 65535;

error_log /usr/local/webserver/nginx/logs/nginx_error.log crit;
pid /usr/local/webserver/nginx/nginx.pid;

b.  events块：包括连接数限制、支持的连接类型等与事件相关的配置信息。
ini复制代码events {
    worker_connections  1024;
    use epoll;
}

c.  http块：包括http全局块和server块，其中http全局块主要设置HTTP协议的一些属性和默认值，而server块则用于配置虚拟主机和相关的路由规则。
ini复制代码http {

    # 设置常用的MIME类型
    include       mime.types;
    default_type  application/octet-stream;

    # 配置访问日志
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    include mime.types;
    default_type application/octet-stream;

    # 设置是否允许访问隐藏文件
    location / {
        index  index.html index.htm;
        if ($request_filename ~* .(jpg|jpeg|png|gif|css|js|ico)$){
            expires 30d;
        }
        if ($request_filename ~* /(..)+/) {return 404;}
        if (-d $request_filename){rewrite ^(.*?)/+$ $1 permanent;}
        try_files $uri $uri/ /index.php?$query_string;
    }

    # 反向代理及负载均衡配置
    upstream backend_server {
        server 127.0.0.1:8080;
        server 127.0.0.1:8081;
    }

    server {
        listen       80;
        server_name  example.com;

        # 反向代理及负载均衡配置
        location / {
            proxy_pass http://backend_server;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root  /usr/local/webserver/nginx/html #站点目录
        }
    }
}

检查配置文件nginx.conf的正确性命令：
shell复制代码# /usr/local/webserver/nginx/sbin/nginx -t

四、启动 Nginx
输入如下命令启动Nginx：
shell复制代码# /usr/local/webserver/nginx/sbin/nginx

使用浏览器访问我们配置的网站ip，页面显示 Welcome to Nginx！，恭喜您已经成功启动nginx。

// 修改配置文件
vim /usr/local/webserver/nginx/conf/nginx.conf

//停止      
/usr/local/webserver/nginx/sbin/nginx -s stop

// 启动
/usr/local/webserver/nginx/sbin/nginx
