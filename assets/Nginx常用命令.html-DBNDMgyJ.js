import{_ as s,c as a,a as e,o as i}from"./app-KfnfuIf0.js";const l={};function p(c,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="查找安装路径" tabindex="-1"><a class="header-anchor" href="#查找安装路径"><span>查找安装路径</span></a></h2><h2 id="查看nginx-目录及状态" tabindex="-1"><a class="header-anchor" href="#查看nginx-目录及状态"><span>查看nginx 目录及状态</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">nginx <span class="token operator">-</span>t</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="nginx-重启" tabindex="-1"><a class="header-anchor" href="#nginx-重启"><span>nginx 重启</span></a></h2><p>nginx -s reload</p><h4 id="停止nginx" tabindex="-1"><a class="header-anchor" href="#停止nginx"><span>停止nginx</span></a></h4><p>nginx -s stop</p><h4 id="启动nginx" tabindex="-1"><a class="header-anchor" href="#启动nginx"><span>启动nginx</span></a></h4><p>nginx</p><h4 id="查看当前nginx进程" tabindex="-1"><a class="header-anchor" href="#查看当前nginx进程"><span>查看当前nginx进程</span></a></h4><p>ps -ef | grep nginx</p><p>找到你的nginx的 nginx.conf文件 vim 去查看和修改这文件</p><p>vim /www/server/nginx/conf/nginx.conf</p><p>输入vim进入到文件之后，按i键进入INSERT模式，</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">        listen <span class="token number">80</span><span class="token punctuation">;</span>  # 端口号</span>
<span class="line">        server_name localhost<span class="token punctuation">;</span> # 有域名就填域名，没有就填ip地址或者本机</span>
<span class="line"></span>
<span class="line">        include <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span><span class="token keyword">default</span><span class="token punctuation">.</span>d<span class="token comment">/*.conf;</span>
<span class="line"></span>
<span class="line">        location / {</span>
<span class="line">        root /www/项目目录/build;   # 打包后的文件目录</span>
<span class="line">        index index.html index.htm;</span>
<span class="line">        try_files $uri $uri/ @router;  # 开启了browserRouter模式就写这个</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        error_page 404 /404.html;</span>
<span class="line">        location = /404.html {</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        error_page 500 502 503 504 /50x.html;</span>
<span class="line">        location = /50x.html {</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按esc键退出输入模式，然后输入:wq保存退出之后再在命令行输入下面指令重启nginx服务</p><p>重启nginx</p><p>nginx -s reload</p><p>或者（可以看到我的安装路径是在 /www/server/nginx，默认在这个目录下，有一个sbin目录，它下面有个nginx文件，这个nginx是个可执行文件， 执行启动命令：</p><p>/www/server/nginx/sbin/nginx）</p><h1 id="端口、防火墙" tabindex="-1"><a class="header-anchor" href="#端口、防火墙"><span>端口、防火墙</span></a></h1><p>CentOS7默认安装了firewalld防火墙，如果系统开启了防火墙，那我们就要手动去开放端口号</p><p>查看防火墙是否开启</p><p>systemctl status firewalld</p><p>开启防火墙</p><p>systemctl start firewalld 关闭防火墙</p><p>systemctl stop firewalld 防火墙开机自启</p><p>systemctl enable firewalld 停止并且禁用防火墙</p><p>systemctl disable firewalld</p><p>查看目前已开放端口</p><p>netstat -anp 查看指定端口是否已经开启-前提是要先开启防火墙</p><p>firewall-cmd --query-port=9090/tcp 对外开放端口号</p><p>firewall-cmd --add-port=123/tcp --permanent # permanent表示永久开放，没有此参数重启后失效</p><h2 id="重新加载添加的端口" tabindex="-1"><a class="header-anchor" href="#重新加载添加的端口"><span>重新加载添加的端口</span></a></h2><p>firewall-cmd --reload 关闭开放端口号</p><p>firewall-cmd --permanent --remove-port=9090/tcp</p><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf"><pre><code class="language-conf"><span class="line"></span>
<span class="line">#user  nobody;</span>
<span class="line">user  root;</span>
<span class="line">worker_processes  1;</span>
<span class="line">worker_rlimit_nofile 65535;</span>
<span class="line"></span>
<span class="line">error_log /usr/local/webserver/nginx/logs/nginx_error.log crit;</span>
<span class="line">pid /usr/local/webserver/nginx/nginx.pid;</span>
<span class="line"></span>
<span class="line">#error_log  logs/error.log;</span>
<span class="line">#error_log  logs/error.log  notice;</span>
<span class="line">#error_log  logs/error.log  info;</span>
<span class="line"></span>
<span class="line">#pid        logs/nginx.pid;</span>
<span class="line"></span>
<span class="line">events {</span>
<span class="line">    worker_connections  1024;</span>
<span class="line">     use epoll;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">http {</span>
<span class="line"></span>
<span class="line">    # 设置常用的MIME类型</span>
<span class="line">    include       mime.types;</span>
<span class="line">    default_type  application/octet-stream;</span>
<span class="line"></span>
<span class="line">    # 反向代理及负载均衡配置</span>
<span class="line">    upstream backend_server {</span>
<span class="line">        server 127.0.0.1:8080;</span>
<span class="line">        server 127.0.0.1:8081;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">  # server 开始</span>
<span class="line">server {</span>
<span class="line">    listen       80;</span>
<span class="line">    server_name admin.vuereact.com;</span>
<span class="line">    location / {</span>
<span class="line">        alias  /usr/local/webserver/nginx/html/admin/;</span>
<span class="line">        index  index.html index.html;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">     location /api/ {</span>
<span class="line">        proxy_pass http://vuereact.top:5627/;</span>
<span class="line">    }</span>
<span class="line">    # 重点：解决二级目录部署时，访问css、js等静态资源报404的问题</span>
<span class="line">    location /assets/ {</span>
<span class="line">            alias  /usr/local/webserver/nginx/html/admin/assets/;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># server 结束</span>
<span class="line"></span>
<span class="line">    server {</span>
<span class="line">    listen       80;</span>
<span class="line">    server_name project1.vuereact.com;</span>
<span class="line">    location / {</span>
<span class="line">        alias  /usr/local/webserver/nginx/html/home/;</span>
<span class="line">        index  index.html index.html;</span>
<span class="line">     }</span>
<span class="line">    location /admin/ {</span>
<span class="line">        alias  /usr/local/webserver/nginx/html/admin/;</span>
<span class="line">        index  index.html index.html;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">   # 重点：解决二级目录部署时，访问css、js等静态资源报404的问题</span>
<span class="line"></span>
<span class="line">            location /assets/ {</span>
<span class="line">                   alias  /usr/local/webserver/nginx/html/admin/assets/;</span>
<span class="line">            }</span>
<span class="line">   }</span>
<span class="line"></span>
<span class="line">}                               </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37)])])}const d=s(l,[["render",p]]),v=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/Nginx%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"端口、防火墙","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"服务端/前端要懂得部分Nginx/Nginx常用命令.md"}');export{d as comp,v as data};
