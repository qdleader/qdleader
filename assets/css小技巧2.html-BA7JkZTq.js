import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function c(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="css-小技巧2" tabindex="-1"><a class="header-anchor" href="#css-小技巧2"><span>css 小技巧2</span></a></h1><h2 id="_1-currentcolor-颜色继承" tabindex="-1"><a class="header-anchor" href="#_1-currentcolor-颜色继承"><span>1. currentColor：颜色继承</span></a></h2><p>它会自动继承元素的 color 属性值，让边框、背景等样式与文字颜色同步，完美遵循 “DRY（Don&#39;t Repeat Yourself）” 原则，后续修改颜色时也只需改一处。</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token selector">.container button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #0066cc<span class="token punctuation">;</span> <span class="token comment">/* 主色调 */</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid currentColor<span class="token punctuation">;</span> <span class="token comment">/* 边框继承文字颜色 */</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* hover时同步变色 */</span></span>
<span class="line"><span class="token selector">.container button:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #f99<span class="token punctuation">;</span> <span class="token comment">/* 加深主色调 */</span></span>
<span class="line">  <span class="token comment">/* 边框会自动变成 #f99，无需重复定义 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-marker-伪元素让我们能直接控制列表符号的样式-颜色、尺寸、字体都能自定义。" tabindex="-1"><a class="header-anchor" href="#_2-marker-伪元素让我们能直接控制列表符号的样式-颜色、尺寸、字体都能自定义。"><span>2. ::marker 伪元素让我们能直接控制列表符号的样式，颜色、尺寸、字体都能自定义。</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"> <span class="token comment">/* 定制有序列表符号 */</span></span>
<span class="line">  <span class="token selector">ol li::marker</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #e91e63<span class="token punctuation">;</span> <span class="token comment">/* 粉色符号 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span> <span class="token comment">/* 放大符号 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* 定制无序列表符号（部分浏览器支持） */</span></span>
<span class="line">  <span class="token selector">ul li::marker</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;✨&quot;</span><span class="token punctuation">;</span> <span class="token comment">/* 用 emoji 当符号 */</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="is-简化多选择器重复写法" tabindex="-1"><a class="header-anchor" href="#is-简化多选择器重复写法"><span>is ()：简化多选择器重复写法</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token comment">/* 传统写法 */</span></span>
<span class="line"><span class="token selector">header p,</span>
<span class="line">main p,</span>
<span class="line">footer p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 8px 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* :is() 简化写法 */</span></span>
<span class="line"><span class="token selector">:is(header, main, footer) p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 8px 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)])])}const o=n(l,[["render",c]]),r=JSON.parse('{"path":"/css/css%E5%B0%8F%E6%8A%80%E5%B7%A7/%E8%BE%83%E5%86%B7/css%E5%B0%8F%E6%8A%80%E5%B7%A72.html","title":"css 小技巧2","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"css/css小技巧/较冷/css小技巧2.md"}');export{o as comp,r as data};
