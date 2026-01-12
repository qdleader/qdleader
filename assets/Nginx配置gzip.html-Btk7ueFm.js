import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const i={};function l(t,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">Nginx配置Gzip</span>
<span class="line"></span>
<span class="line">#开启和关闭gzip模式</span>
<span class="line">gzip on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">#gizp压缩起点，文件大于1k才进行压缩</span>
<span class="line">gzip_min_length 1k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"># gzip 压缩级别，<span class="token number">1</span><span class="token operator">-</span><span class="token number">9</span>，数字越大压缩的越好，也越占用<span class="token constant">CPU</span>时间</span>
<span class="line"></span>
<span class="line">其中的zip_comp_level，是一项重要的性能指标，随着压缩率的提高，所消耗的<span class="token constant">CPU</span>也会越来越多。从<span class="token number">1</span><span class="token operator">-</span><span class="token number">4</span>压缩比较明显，<span class="token number">5</span>以后基本变化不大。估建议设置gzip_comp_level <span class="token number">4</span></span>
<span class="line">gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"># <span class="token function">进行压缩的文件类型。</span><span class="token punctuation">(</span>对特定的<span class="token constant">MIME</span>类型生效<span class="token punctuation">,</span>其中&#39;text<span class="token operator">/</span>html’被系统强制启用<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>javascript application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml text<span class="token operator">/</span>javascript <span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"># nginx对于静态文件的处理模块，开启后会寻找以<span class="token punctuation">.</span>gz结尾的文件，直接返回，不会占用cpu进行压缩</span>
<span class="line"></span>
<span class="line">gzip_static on</span>
<span class="line"></span>
<span class="line"># 是否在http header中添加Vary<span class="token operator">:</span> Accept<span class="token operator">-</span>Encoding，建议开启</span>
<span class="line"></span>
<span class="line">gzip_vary on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"># 设置gzip压缩针对的<span class="token constant">HTTP</span>协议版本</span>
<span class="line"></span>
<span class="line">gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="zip压缩的方案有几种" tabindex="-1"><a class="header-anchor" href="#zip压缩的方案有几种"><span>zip压缩的方案有几种？</span></a></h1><h2 id="一、服务器在线gzip压缩-nginx" tabindex="-1"><a class="header-anchor" href="#一、服务器在线gzip压缩-nginx"><span>一、服务器在线Gzip压缩（nginx）</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">#开启和关闭gzip模式</span>
<span class="line">gzip on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">#gizp压缩起点，文件大于1k才进行压缩</span>
<span class="line">gzip_min_length 1k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">其中的zip_comp_level，是一项重要的性能指标，随着压缩率的提高，所消耗的<span class="token constant">CPU</span>也会越来越多。从<span class="token number">1</span><span class="token operator">-</span><span class="token number">4</span>压缩比较明显，<span class="token number">5</span>以后基本变化不大。估建议设置gzip_comp_level <span class="token number">4</span></span>
<span class="line">gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>javascript application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml text<span class="token operator">/</span>javascript <span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">gzip_static on</span>
<span class="line"></span>
<span class="line">gzip_vary on<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、前端预生成gz文件" tabindex="-1"><a class="header-anchor" href="#二、前端预生成gz文件"><span>二、前端预生成gz文件</span></a></h2><p>前端工程项目可以在打包的时候，前端使用webpack或vite打包工作，生成gz文件。这样的目的是减少在服务器在线生成gzip的步骤。 Nginx服务器只需要配置： csharp复制代码// 静态加载本地的gz文件，需要在nginx上安装http_gzip_static_module模块 gzip_static on;</p><p>在webpack中可以使用compression-webpack-plugin来实现</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...其他配置</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 匹配需要进行Gzip压缩的文件类型</span></span>
<span class="line">      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|css|html|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 只有文件大小大于等于该值时才会生成Gzip文件</span></span>
<span class="line">      <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vite中使用vite-plugin-compression来实现</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> compressPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">compressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;.gz&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">deleteOriginFile</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gzip两种方式结合" tabindex="-1"><a class="header-anchor" href="#gzip两种方式结合"><span>Gzip两种方式结合</span></a></h2><h4 id="_1、两种方式的优缺点" tabindex="-1"><a class="header-anchor" href="#_1、两种方式的优缺点"><span>1、两种方式的优缺点</span></a></h4><p>一、前端借助构建工具，预先生成gz文件，缺点是构打包后构建的产物体积会变大，优点是不耗费服务器的性能。 二、使用nginx在线Gzip，缺点是需要实时压缩，会耗费服务器的性能，但是无需前端预先生成gz文件。</p><h4 id="_2、两种方式结合的配置" tabindex="-1"><a class="header-anchor" href="#_2、两种方式结合的配置"><span>2、两种方式结合的配置</span></a></h4><p>有gz文件的时候使用静态资源，不存在gz文件的时候进行在线压缩而不是加载源文件，需要在nginx上把两种配置都写上。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// nginx配置</span></span>
<span class="line">gzip on<span class="token punctuation">;</span></span>
<span class="line">gzip_static on<span class="token punctuation">;</span></span>
<span class="line">gzip_comp_level <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line">gzip_types text<span class="token operator">/</span>plain text<span class="token operator">/</span>html text<span class="token operator">/</span>css application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>xml application<span class="token operator">/</span>xml application<span class="token operator">/</span>xml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gzip_static的优先级高，会先加载静态gz文件，当同目录下不存在此文件的时候，会执行在线压缩命令。</p><h5 id="_3、确定请求资源是否为gzip压缩" tabindex="-1"><a class="header-anchor" href="#_3、确定请求资源是否为gzip压缩"><span>3、确定请求资源是否为gzip压缩？</span></a></h5><p>响应头的Content-Edcoding:gzip表示gzip压缩已经生效 比较文件大小，看请求资源文件大小是否比打包后的资源更小</p><h5 id="_4、确定是否请求的是预打包的gz资源" tabindex="-1"><a class="header-anchor" href="#_4、确定是否请求的是预打包的gz资源"><span>4、确定是否请求的是预打包的gz资源？</span></a></h5><p>Etag中只有简单字符表示静态资源加载，而前面带 W/ 表示启动了在线压缩。</p>`,21)])])}const o=n(i,[["render",l]]),r=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/Nginx%E9%85%8D%E7%BD%AEgzip.html","title":"zip压缩的方案有几种？","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"服务端/前端要懂得部分Nginx/Nginx配置gzip.md"}');export{o as comp,r as data};
