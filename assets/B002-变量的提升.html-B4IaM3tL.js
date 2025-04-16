import{_ as a,c as n,a as e,o as t}from"./app-DFnxdJ0h.js";const c={};function l(o,s){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="b002-变量的提升" tabindex="-1"><a class="header-anchor" href="#b002-变量的提升"><span>B002-变量的提升</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">myVar<span class="token punctuation">;</span>  <span class="token comment">// =&gt; ???</span></span>
<span class="line">myConst<span class="token punctuation">;</span> <span class="token comment">// =&gt; ???</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> myVar <span class="token operator">=</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> myConst <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#答案：</p><blockquote><p>undefined ReferenceError</p></blockquote><p>#解析： 在var变量声明之前,myVar的结果都是undefined； 而let 和 const 声明之前，进行的变量的访问都会报错，因为let 和const都不存在变量的提升， 声明之前的区域成为TDZ，或称暂时性死区，或称时间死区</p>`,5)]))}const r=a(c,[["render",l]]),i=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B002-%E5%8F%98%E9%87%8F%E7%9A%84%E6%8F%90%E5%8D%87.html","title":"B002-变量的提升","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/变量类/B002-变量的提升.md"}');export{r as comp,i as data};
