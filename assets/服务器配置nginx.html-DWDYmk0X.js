import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function o(t,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">/usr/local/webserver/nginx/sbin/nginx <span class="token parameter variable">-t</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span></span>
<span class="line">#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  notice<span class="token punctuation">;</span></span>
<span class="line">#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  info<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">#pid        logs<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">events <span class="token punctuation">{</span></span>
<span class="line">    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span></span>
<span class="line">     use epoll<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">http <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    # 设置常用的<span class="token constant">MIME</span>类型</span>
<span class="line">    include       mime<span class="token punctuation">.</span>types<span class="token punctuation">;</span></span>
<span class="line">    default_type  application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    # 反向代理及负载均衡配置</span>
<span class="line">    upstream backend_server <span class="token punctuation">{</span></span>
<span class="line">        server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">;</span></span>
<span class="line">        server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8081</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  # server 开始</span>
<span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    server_name admin<span class="token punctuation">.</span>vuereact<span class="token punctuation">.</span>com<span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>admin<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">     location <span class="token operator">/</span>api<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">vuereact.top:5627</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    # 重点：解决二级目录部署时，访问css、js等静态资源报<span class="token number">404</span>的问题</span>
<span class="line">    location <span class="token operator">/</span>assets<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">            alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>admin<span class="token operator">/</span>assets<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"># server 结束</span>
<span class="line"></span>
<span class="line">    server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    server_name project1<span class="token punctuation">.</span>vuereact<span class="token punctuation">.</span>top<span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>qiankun<span class="token operator">/</span>vue3main<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    location <span class="token operator">/</span>micro<span class="token operator">-</span>app<span class="token operator">-</span>demos<span class="token operator">/</span>qiankun<span class="token operator">-</span>demo<span class="token operator">/</span>vue3<span class="token operator">-</span>main<span class="token operator">/</span>assets<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">            alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>qiankun<span class="token operator">/</span>vue3main<span class="token operator">/</span>assets<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    location <span class="token operator">/</span>micro<span class="token operator">-</span>app<span class="token operator">-</span>demos<span class="token operator">/</span>qiankun<span class="token operator">-</span>demo<span class="token operator">/</span>vite<span class="token operator">-</span>child<span class="token operator">/</span>assets<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">            alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>qiankun<span class="token operator">/</span>vite<span class="token operator">/</span>assets<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const c=n(l,[["render",o]]),r=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AEnginx.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"服务端/前端要懂得部分Nginx/服务器配置nginx.md"}');export{c as comp,r as data};
