import{_ as n,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const t={};function o(l,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="转动的cd" tabindex="-1"><a class="header-anchor" href="#转动的cd"><span>转动的cd</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"> <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;middle-box&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;player-needle&#39;</span> src<span class="token operator">=</span><span class="token string">&quot;./player-needle.png&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{&#39;pic-box&#39;:true,&#39;pic-box-move&#39;:isPlay}&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./img-test.jpg&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;album-pic&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// 音频播放开始</span></span>
<span class="line"><span class="token punctuation">.</span>middle<span class="token operator">-</span>box <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// overflow: hidden;</span></span>
<span class="line">        <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token operator">-</span>1rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>player<span class="token operator">-</span>needle <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">18</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token operator">-</span>1rem<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">45</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>pic<span class="token operator">-</span>box <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">top</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">;</span></span>
<span class="line">    padding<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">border</span><span class="token operator">:</span> 10px solid <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span></span>
<span class="line">    margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">9</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// transition:5s linear 1s normal none infinite rotate;</span></span>
<span class="line">        <span class="token comment">// animation: circling 20s linear infinite;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>pic<span class="token operator">-</span>box<span class="token operator">-</span>move <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">top</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">;</span></span>
<span class="line">    padding<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">border</span><span class="token operator">:</span> 10px solid <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span></span>
<span class="line">    margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">9</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// transition:5s linear 1s normal none infinite rotate;</span></span>
<span class="line">    <span class="token literal-property property">animation</span><span class="token operator">:</span> circling 20s linear infinite<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>pic<span class="token operator">-</span>box <span class="token punctuation">.</span>album<span class="token operator">-</span>pic <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">75</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">    max<span class="token operator">-</span>height<span class="token operator">:</span> 250px<span class="token punctuation">;</span></span>
<span class="line">    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">15</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>pic<span class="token operator">-</span>box div <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">105</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">105</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token operator">-</span>3px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token operator">-</span>3px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>coverall<span class="token punctuation">.</span>png<span class="token punctuation">)</span> no<span class="token operator">-</span>repeat<span class="token punctuation">;</span></span>
<span class="line">    background<span class="token operator">-</span>position<span class="token operator">:</span> <span class="token operator">-</span>5px <span class="token operator">-</span>7px<span class="token punctuation">;</span></span>
<span class="line">    background<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">102</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">@keyframes rotate <span class="token punctuation">{</span></span>
<span class="line">    from <span class="token punctuation">{</span><span class="token literal-property property">transform</span><span class="token operator">:</span><span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">    to<span class="token punctuation">{</span><span class="token literal-property property">transform</span><span class="token operator">:</span><span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">@<span class="token operator">-</span>webkit<span class="token operator">-</span>keyframes rotate<span class="token punctuation">{</span></span>
<span class="line">    from <span class="token punctuation">{</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token operator">:</span><span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line">    to <span class="token punctuation">{</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token operator">:</span><span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@keyframes circling <span class="token punctuation">{</span></span>
<span class="line">    <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    to <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=n(t,[["render",o]]),i=JSON.parse('{"path":"/css3/%E6%92%AD%E6%94%BE%E9%9F%B3%E4%B9%90%E8%BD%AC%E5%8A%A8%E7%9A%84cd/%E8%BD%AC%E5%8A%A8%E7%9A%84cd.html","title":"转动的cd","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"css3/播放音乐转动的cd/转动的cd.md"}');export{r as comp,i as data};
