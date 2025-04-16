import{_ as n,c as a,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function l(c,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="去除富文本中的html标签" tabindex="-1"><a class="header-anchor" href="#去除富文本中的html标签"><span>去除富文本中的html标签</span></a></h1><p>去除字符串里面的html标签的正则公式</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">var</span> <span class="token function-variable function">filterHTMLTag</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;\\/?[^&gt;]*&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//去除HTML tag</span></span>
<span class="line">        str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[ | ]*\\n</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//去除行尾空白</span></span>
<span class="line">        str<span class="token operator">=</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex"> </span><span class="token regex-delimiter">/</span><span class="token regex-flags">ig</span></span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//去掉 </span></span>
<span class="line">        <span class="token keyword">return</span> str<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=n(p,[["render",l]]),i=JSON.parse('{"path":"/tool/%E5%AF%8C%E6%96%87%E6%9C%AC/%E5%8E%BB%E9%99%A4%E5%AF%8C%E6%96%87%E6%9C%AC%E4%B8%AD%E7%9A%84html%E6%A0%87%E7%AD%BE.html","title":"去除富文本中的html标签","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"tool/富文本/去除富文本中的html标签.md"}');export{r as comp,i as data};
