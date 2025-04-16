import{_ as n,c as a,a as e,o as p}from"./app-DFnxdJ0h.js";const t={};function i(l,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="nginx配置root、alias、try-files、proxy-pass指令分析" tabindex="-1"><a class="header-anchor" href="#nginx配置root、alias、try-files、proxy-pass指令分析"><span>Nginx配置root、alias、try_files、proxy_pass指令分析</span></a></h2><p>摘要：本文主要介绍root、alias指令在配置前端项目的时候的区别，下面的配置都是基于react或者vue项目配置的，不是静态服务器文件方式，因为加了try_files参数。</p><h2 id="root指令" tabindex="-1"><a class="header-anchor" href="#root指令"><span>root指令</span></a></h2><h4 id="示例一" tabindex="-1"><a class="header-anchor" href="#示例一"><span>示例一</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        root <span class="token operator">/</span>data<span class="token punctuation">;</span></span>
<span class="line">        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span>
<span class="line">        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问路径：http://127.0.0.1:80/index.html 实际访问/data/index.html 访问路径：http://127.0.0.1:80/a/index.html 实际访问/data/a/index.html</p><h2 id="示例二" tabindex="-1"><a class="header-anchor" href="#示例二"><span>示例二</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">location <span class="token operator">/</span>a <span class="token punctuation">{</span></span>
<span class="line">  root <span class="token operator">/</span>data<span class="token punctuation">;</span></span>
<span class="line">  index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span>
<span class="line">  try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问路径：http://127.0.0.1:80/a/index.html 实际访问/data/a/index.html 访问路径：http://127.0.0.1:80/aaab/index.html 实际访问/data/aaab/index.html</p><h1 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h1><p>root指令实际访问的文件路径是root路径+location路径</p><h1 id="alias指令" tabindex="-1"><a class="header-anchor" href="#alias指令"><span>alias指令</span></a></h1><p>我个人建议alias指令后面的路径都加上/，因为大多数我们配置的都是指定到固定文件夹，除非你的location匹配的是固定的文件，那么你alias也可以指定固定文件路径</p><h2 id="示例一-1" tabindex="-1"><a class="header-anchor" href="#示例一-1"><span>示例一</span></a></h2><p>配置指定的文件路径</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>index<span class="token punctuation">.</span>html <span class="token punctuation">{</span></span>
<span class="line">      alias <span class="token operator">/</span>data<span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问路径：http://127.0.0.1:80/index.html 实际访问/data/index.html 访问其他地址都会报<code>404 Not Found</code></p><h2 id="示例二-1" tabindex="-1"><a class="header-anchor" href="#示例二-1"><span>示例二</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>a <span class="token punctuation">{</span></span>
<span class="line">        alias <span class="token operator">/</span>data<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span>
<span class="line">        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问路径：http://192.168.137.110:8060/a/index.html 实际访问/data/index.html 访问路径：http://192.168.137.110:8060/a/a/index.html 实际访问/data/a/index.html</p><h2 id="结论-1" tabindex="-1"><a class="header-anchor" href="#结论-1"><span>结论</span></a></h2><p>alias指令会把location上配置的值去掉，然后把后缀拼接到alias指令后面，就像上面访问/a/index.html，而location是/a，最终的访问文件地址是/data/index.html。</p><h1 id="try-files指令" tabindex="-1"><a class="header-anchor" href="#try-files指令"><span>try_files指令</span></a></h1><p>按指定的file顺序查找存在的文件，并使用第一个找到的文件进行请求处理。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>a<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        root <span class="token operator">/</span>data<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span>
<span class="line">        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如请求http://192.168.137.110:8060/a/qdleader.html</p><h3 id="uri" tabindex="-1"><a class="header-anchor" href="#uri"><span>$uri</span></a></h3><p>查找文件/data/a/qdleader.html</p><h3 id="uri-1" tabindex="-1"><a class="header-anchor" href="#uri-1"><span>$uri/</span></a></h3><p>查找文件夹/data/a/qdleader.html/qdleader.html文件</p><h3 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html"><span>/index.html</span></a></h3><p>请求http://192.168.137.110:8060/index.html路径</p><p>针对alias的多个location指令的try_files配置 为什么要加try_files指令，因为路由由前端控制了，页面刷新的时候路由重新到后端，找不到该文件，我们就把它重定向到index.html文件，交给前端解析。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>mobile<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        alias <span class="token operator">/</span>data<span class="token operator">-</span>mobile<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span>
<span class="line">        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>mobile<span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    location <span class="token operator">/</span>pc<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        alias <span class="token operator">/</span>data<span class="token operator">-</span>pc<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span></span>
<span class="line">        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>pc<span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy-pass指令" tabindex="-1"><a class="header-anchor" href="#proxy-pass指令"><span>proxy_pass指令</span></a></h2><p>该指令用于反向代理使用</p><h4 id="案例一-有-结尾" tabindex="-1"><a class="header-anchor" href="#案例一-有-结尾"><span>案例一( 有/结尾)</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>apis<span class="token operator">-</span>config1<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">    	proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">192.168.137.2:5021</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问<code>http://192.168.137.110:8060/apis-config1/abc</code> 实际访问的是<code>http://192.168.137.2:5021/abc</code></p><h4 id="案例二-无-结尾" tabindex="-1"><a class="header-anchor" href="#案例二-无-结尾"><span>案例二（无/结尾）</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>apis<span class="token operator">-</span>config2<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.137</span><span class="token number">.2</span><span class="token operator">:</span><span class="token number">5021</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问<code>http://192.168.137.110:8060/apis-config2/abc</code> 实际访问的是<code>http://192.168.137.2:5021/apis-config2/abc</code></p><h4 id="案例三" tabindex="-1"><a class="header-anchor" href="#案例三"><span>案例三</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>apis<span class="token operator">-</span>config3<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.137</span><span class="token number">.2</span><span class="token operator">:</span><span class="token number">5021</span><span class="token operator">/</span>apis<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问<code>http://192.168.137.110:8060/apis-config3/abc</code> 实际访问的是<code>http://192.168.137.2:5021/apis/abc</code></p><h4 id="案例四" tabindex="-1"><a class="header-anchor" href="#案例四"><span>案例四</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>apis<span class="token operator">-</span>config4<span class="token operator">-</span><span class="token number">1</span><span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.137</span><span class="token number">.2</span><span class="token operator">:</span><span class="token number">5021</span><span class="token operator">/</span>apis<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    location <span class="token operator">/</span>apis<span class="token operator">-</span>config4<span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.137</span><span class="token number">.2</span><span class="token operator">:</span><span class="token number">5021</span><span class="token operator">/</span>apis<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问<code>http://192.168.137.110:8060/apis-config4-1/abc</code> 实际访问的是<code>http://192.168.137.2:5021/apisabc</code></p><p>访问<code>http://192.168.137.110:8060/apis-config4-2/abc</code> 实际访问的是<code>http://192.168.137.2:5021/apis/abc</code></p><h4 id="案例五" tabindex="-1"><a class="header-anchor" href="#案例五"><span>案例五</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">/</span>apis<span class="token operator">-</span>config5<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">192.168.137.2:5021</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    location <span class="token operator">/</span>apis<span class="token operator">-</span>config5<span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.137</span><span class="token number">.2</span><span class="token operator">:</span><span class="token number">5021</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 访问<code>http://192.168.137.110:8060/apis-config5-1/abc</code> 实际访问的是<code>http://192.168.137.2:5021//abc</code></p><p>访问<code>http://192.168.137.110:8060/apis-config5-2/abc</code> 实际访问的是<code>http://192.168.137.2:5021/apis-config5-2/abc</code></p><p>结论 对于这个没啥好说的，按需选取配置，不过我个人推荐都加上/符号，就按照案例一配置就能不变应万变。</p>`,54)]))}const c=n(t,[["render",i]]),r=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/Nginx%E9%85%8D%E7%BD%AEroot%E3%80%81alias%E3%80%81try_files%E3%80%81proxy_pass%E6%8C%87%E4%BB%A4%E5%88%86%E6%9E%90.html","title":"结论","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"服务端/前端要懂得部分Nginx/Nginx配置root、alias、try_files、proxy_pass指令分析.md"}');export{c as comp,r as data};
