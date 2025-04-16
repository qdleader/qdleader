import{_ as s,c as a,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function c(i,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="f002-return换行后自动添加分号" tabindex="-1"><a class="header-anchor" href="#f002-return换行后自动添加分号"><span>F002-return换行后自动添加分号</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">arrayFormValue</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> </span>
<span class="line">		<span class="token punctuation">[</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">arrayFormValue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// =&gt; ???</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*答案： undefined</p><p>*解析： 这里需要注意的是return和[items]之间已经换行了，js会在换行之间自动加入分号 所以等价于：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">arrayFromValue</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">[</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">arrayFromValue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// =&gt; undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>return;函数就直接结束并返回undefined的了，所以下面结果为undefined</p>`,6)]))}const o=s(p,[["render",c]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%88%86%E5%8F%B7%E7%B1%BB/F002-return%E6%8D%A2%E8%A1%8C%E5%90%8E%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0%E5%88%86%E5%8F%B7.html","title":"F002-return换行后自动添加分号","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/分号类/F002-return换行后自动添加分号.md"}');export{o as comp,r as data};
