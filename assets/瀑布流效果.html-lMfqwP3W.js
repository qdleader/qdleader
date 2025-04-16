import{_ as s,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const l={};function t(c,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="瀑布流效果" tabindex="-1"><a class="header-anchor" href="#瀑布流效果"><span>瀑布流效果</span></a></h1><h2 id="方法一-column实现" tabindex="-1"><a class="header-anchor" href="#方法一-column实现"><span>方法一：column实现</span></a></h2><p>column-count: 定义屏幕分为多少列 column-gap: 定义列与列之间的距离</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"> <span class="token selector">#box</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">margin</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">column-count</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#box &gt; li &gt; img</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：</p><p>兼容性差 排列规律永远都是先上下在左右，无法控制</p><h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex"><span>flex</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">#box</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">flex-flow</span><span class="token punctuation">:</span> column wrap<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 2000px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#box &gt; li</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% / 4 - 20px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#box &gt; li &gt; img</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：</p><p>高度是固定的</p>`,10)]))}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/css/%E7%80%91%E5%B8%83%E6%B5%81%E6%95%88%E6%9E%9C.html","title":"瀑布流效果","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"css/瀑布流效果.md"}');export{o as comp,u as data};
