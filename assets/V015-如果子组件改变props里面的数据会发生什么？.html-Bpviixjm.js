import{_ as n,c as a,a as e,o as p}from"./app-DFnxdJ0h.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="v015-如果子组件改变props里面的数据会发生什么" tabindex="-1"><a class="header-anchor" href="#v015-如果子组件改变props里面的数据会发生什么"><span>V015-如果子组件改变props里面的数据会发生什么？</span></a></h1><h2 id="改变的props数据是基本类型" tabindex="-1"><a class="header-anchor" href="#改变的props数据是基本类型"><span>改变的props数据是基本类型</span></a></h2><blockquote><p>如果修改的是基本类型，则会报错</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">num</span><span class="token operator">:</span> Number<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">999</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改变的props数据是引用类型" tabindex="-1"><a class="header-anchor" href="#改变的props数据是引用类型"><span>改变的props数据是引用类型</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 不报错，并且父级数据会跟着变</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 会报错，跟基础类型报错一样</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">=</span> <span class="token string">&#39;sss&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=n(t,[["render",l]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V015-%E5%A6%82%E6%9E%9C%E5%AD%90%E7%BB%84%E4%BB%B6%E6%94%B9%E5%8F%98props%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%EF%BC%9F.html","title":"V015-如果子组件改变props里面的数据会发生什么？","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/vue篇/V015-如果子组件改变props里面的数据会发生什么？.md"}');export{o as comp,r as data};
