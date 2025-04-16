import{_ as s,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function c(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="文字聚光灯效果" tabindex="-1"><a class="header-anchor" href="#文字聚光灯效果"><span>文字聚光灯效果</span></a></h1><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line">  <span class="token selector">&lt;div id=&quot;app&quot;&gt;qdleader&lt;/div&gt;</span>
<span class="line"> #app</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> max-content<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">#app::after</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;qdleader&quot;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">inset</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>236<span class="token punctuation">,</span> 72<span class="token punctuation">,</span> 153<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>239<span class="token punctuation">,</span> 68<span class="token punctuation">,</span> 68<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>234<span class="token punctuation">,</span> 179<span class="token punctuation">,</span> 8<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>100px 100px at 0 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">animation</span><span class="token punctuation">:</span> qd 3s ease-in infinite<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token atrule"><span class="token rule">@keyframes</span> qd</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token selector">50%</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>100px 100px at 100% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token selector">to</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>100px 100px at 0% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(e,[["render",c]]),u=JSON.parse('{"path":"/css3/%E6%96%87%E5%AD%97%E8%81%9A%E5%85%89%E7%81%AF%E6%95%88%E6%9E%9C.html","title":"文字聚光灯效果","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"css3/文字聚光灯效果.md"}');export{o as comp,u as data};
