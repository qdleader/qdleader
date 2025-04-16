import{_ as s,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function l(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="一行文字居中-多行文字左对齐★★" tabindex="-1"><a class="header-anchor" href="#一行文字居中-多行文字左对齐★★"><span>一行文字居中，多行文字左对齐★★</span></a></h1><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>dsc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token comment">/*当文字为一行是，则P的宽度小于div的宽度，p标签居中显示在盒子内，文字也就居中了 ;当大于一行时，P的宽度和div的宽度是一致的 ,文字就居左对齐了*/</span></span>
<span class="line">  <span class="token selector">.content</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span>150px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/*display: inline-block使P的宽度根据文字的宽度伸缩 */</span></span>
<span class="line">  <span class="token selector">.content p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-flex-方式" tabindex="-1"><a class="header-anchor" href="#_2-flex-方式"><span>2.flex 方式</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>linetwo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>12wsd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span>
<span class="line">  &lt;!-- <span class="token property">white-space</span><span class="token punctuation">:</span>pre-wrap<span class="token punctuation">;</span> --&gt;</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.lineTwo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">text-overflow</span><span class="token punctuation">:</span> -o-ellipsis-lastline<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span>-webkit-box<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-clamp</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span>vertical<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-方式三" tabindex="-1"><a class="header-anchor" href="#_3-方式三"><span>3.方式三</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>单行居中，多行居左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">     <span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>   </span>
<span class="line">         <span class="token property">text-align</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">     <span class="token selector">span</span><span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">display</span><span class="token punctuation">:</span>-webkit-box<span class="token punctuation">;</span></span>
<span class="line">         <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span></span>
<span class="line">         <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span>vertical<span class="token punctuation">;</span></span>
<span class="line">         <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span></span>
<span class="line">         <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">     <span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line">         <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">         <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span></span>
<span class="line">         <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span></span>
<span class="line">         <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line"> </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=s(e,[["render",l]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/css%E7%B1%BB/%E4%B8%80%E8%A1%8C%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD%EF%BC%8C%E5%A4%9A%E8%A1%8C%E6%96%87%E5%AD%97%E5%B7%A6%E5%AF%B9%E9%BD%90%E2%98%85.html","title":"一行文字居中，多行文字左对齐★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/css类/一行文字居中，多行文字左对齐★.md"}');export{o as comp,u as data};
