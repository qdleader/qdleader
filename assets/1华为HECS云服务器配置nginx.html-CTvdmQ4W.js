import{_ as e,c as s,a,o as i}from"./app-KfnfuIf0.js";const r={};function l(t,n){return i(),s("div",null,[...n[0]||(n[0]=[a(`<h1 id="_1华为hecs云服务器配置nginx" tabindex="-1"><a class="header-anchor" href="#_1华为hecs云服务器配置nginx"><span>1华为HECS云服务器配置nginx</span></a></h1><h2 id="一、安装开发工具和依赖库" tabindex="-1"><a class="header-anchor" href="#一、安装开发工具和依赖库"><span>一、安装开发工具和依赖库</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">make</span> zlib zlib-devel gcc-c++ libtool  openssl openssl-devel</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面命令，用于在yum软件包管理器中安装一些开发工具和依赖库。命令中各个参数的含义如下：</p><p>yum：是Linux系统常用的软件包管理工具； -y：表示在安装过程中遇到提示时默认选择&quot;yes&quot;，不需要手动确认； install：表示安装软件包； make：是一个构建工具，能够自动化地进行编译程序等操作； zlib、zlib-devel：都是提供数据压缩和解压功能的开发库，程序在编译时通常需要这两个库的支持； gcc-c++：是C++编译器，可以编译C++程序； libtool：是一个构建工具，在Linux平台上使用较多，能够简化动态库、静态库的构建流程； openssl、openssl-devel：是一个开源的加密库，提供了很多加密和解密函数。</p><h2 id="二、安装pcre" tabindex="-1"><a class="header-anchor" href="#二、安装pcre"><span>二、安装PCRE</span></a></h2><p>在nginx中，PCRE库被用来解析和匹配HTTP请求的URL、header、body等内容，并进行相关的操作，如重定向、路由转发、用户身份验证等。Nginx使用PCRE库能够实现更加灵活和高效的请求匹配和处理，同时也能节省开发者的时间和精力，提高Web应用的性能。因此，可将PCRE视为Nginx的一个重要组件。</p><h4 id="_1、进入-usr-local-src-文件夹下执行命令下载pcre8-45压缩包。" tabindex="-1"><a class="header-anchor" href="#_1、进入-usr-local-src-文件夹下执行命令下载pcre8-45压缩包。"><span>1、进入/usr/local/src/文件夹下执行命令下载pcre8.45压缩包。</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"> <span class="token builtin class-name">cd</span> /usr/local/src/</span>
<span class="line"></span>
<span class="line"><span class="token function">wget</span> http://downloads.sourceforge.net/project/pcre/pcre/8.45/pcre-8.45.tar.gz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、解压" tabindex="-1"><a class="header-anchor" href="#_2、解压"><span>2、解压</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">tar</span> zxvf pcre-8.45.tar.gz</span>
<span class="line"></span>
<span class="line"><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> pcre-8.45</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、编译安装" tabindex="-1"><a class="header-anchor" href="#_3、编译安装"><span>3、编译安装</span></a></h4><p>进入pcre-8.45目录，进行编译安装 shell复制代码# cd pcre-8.45</p><h1 id="configure" tabindex="-1"><a class="header-anchor" href="#configure"><span>./configure</span></a></h1><p>yum -y install gcc-c++</p><h1 id="make" tabindex="-1"><a class="header-anchor" href="#make"><span>make</span></a></h1><p>make install</p><h4 id="_4、安装完成" tabindex="-1"><a class="header-anchor" href="#_4、安装完成"><span>4、安装完成</span></a></h4><p>输入命令，如果显示对应版本号表示安装成功。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">pcre<span class="token operator">-</span>config <span class="token operator">--</span>version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="三、安装nginx" tabindex="-1"><a class="header-anchor" href="#三、安装nginx"><span>三、安装nginx</span></a></h2><h4 id="_1、下载" tabindex="-1"><a class="header-anchor" href="#_1、下载"><span>1、下载</span></a></h4><p>进入/usr/local/src/目录，使用以下命令下载nginx并解压。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"> <span class="token builtin class-name">cd</span> /usr/local/src/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># wget http://nginx.org/download/nginx-1.28.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span class="token function">wget</span> http://nginx.org/download/nginx-1.23.4.tar.gz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># tar zxvf nginx-1.23.4.tar.gz</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、编译安装" tabindex="-1"><a class="header-anchor" href="#_2、编译安装"><span>2、编译安装</span></a></h4><p>进入nginx-1.23.4文件夹输入下面命令编译安装。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> nginx-1.23.4</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.45</span></span>
<span class="line"><span class="token comment"># make install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>./configure：运行Nginx的配置程序。 --prefix=/usr/local/webserver/nginx：指定Nginx的安装路径为&quot;/usr/local/webserver/nginx&quot;，即Nginx服务器将会被安装到这个目录下。 --with-http_stub_status_module：启用Nginx的stub_status模块，使Nginx可以向外界提供状态信息。 --with-http_ssl_module：启用Nginx的SSL/TLS协议支持，让Nginx可以处理HTTPS请求。 --with-pcre=/usr/local/src/pcre-8.45：指定PCRE库的路径为&quot;/usr/local/src/pcre-8.45&quot;，在编译Nginx时会使用该库来支持正则表达式操作。</p><p>3、安装完成 同理输入以下代码，如果出现nginx版本号，表示安装成功。 shell复制代码# /usr/local/webserver/nginx/sbin/nginx -v</p><p>4、配置nginx 使用以下命令在Linux系统中创建一个名为&quot;ngx&quot;的用户。 shell复制代码# /usr/sbin/groupadd ngx</p><h1 id="usr-sbin-useradd-g-ngx-ngx" tabindex="-1"><a class="header-anchor" href="#usr-sbin-useradd-g-ngx-ngx"><span>/usr/sbin/useradd -g ngx ngx</span></a></h1><p>配置nginx.conf ，将/usr/local/webserver/nginx/conf/nginx.conf替换为以下内容： nginx.conf的具体内容包括： a. 全局块：包括用户和工作进程的设置、错误日志、进程ID文件路径等全局性的配置信息。 ini复制代码user ngx ngx; worker_processes auto; worker_rlimit_nofile 65535;</p><p>error_log /usr/local/webserver/nginx/logs/nginx_error.log crit; pid /usr/local/webserver/nginx/nginx.pid;</p><p>b. events块：包括连接数限制、支持的连接类型等与事件相关的配置信息。 ini复制代码events { worker_connections 1024; use epoll; }</p><p>c. http块：包括http全局块和server块，其中http全局块主要设置HTTP协议的一些属性和默认值，而server块则用于配置虚拟主机和相关的路由规则。 ini复制代码http {</p><pre><code># 设置常用的MIME类型
include       mime.types;
default_type  application/octet-stream;

# 配置访问日志
log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
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
</code></pre><p>}</p><p>检查配置文件nginx.conf的正确性命令： shell复制代码# /usr/local/webserver/nginx/sbin/nginx -t</p><p>四、启动 Nginx 输入如下命令启动Nginx： shell复制代码# /usr/local/webserver/nginx/sbin/nginx</p><p>使用浏览器访问我们配置的网站ip，页面显示 Welcome to Nginx！，恭喜您已经成功启动nginx。</p><p>// 修改配置文件 vim /usr/local/webserver/nginx/conf/nginx.conf</p><p>//停止<br> /usr/local/webserver/nginx/sbin/nginx -s stop</p><p>// 启动 /usr/local/webserver/nginx/sbin/nginx</p>`,43)])])}const p=e(r,[["render",l]]),d=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/1%E5%8D%8E%E4%B8%BAHECS%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AEnginx.html","title":"1华为HECS云服务器配置nginx","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"服务端/前端要懂得部分Nginx/1华为HECS云服务器配置nginx.md"}');export{p as comp,d as data};
