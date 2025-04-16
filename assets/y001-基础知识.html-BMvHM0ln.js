import{_ as n,c as a,a as e,o as p}from"./app-DFnxdJ0h.js";const t={};function o(c,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="y001-基础知识" tabindex="-1"><a class="header-anchor" href="#y001-基础知识"><span>y001-基础知识</span></a></h1><p>原型规则</p><blockquote><p>所有的引用类型（数组，对象， 函数）,都具有对象特性，即可自由扩展属性（除了null 之外）</p></blockquote><h2 id="构造函数扩展" tabindex="-1"><a class="header-anchor" href="#构造函数扩展"><span>构造函数扩展</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  其实是 <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 的语法糖</span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> 其实是<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 的语法糖</span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span> 其实是 <span class="token keyword">var</span> Foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">使用 <span class="token keyword">instanceof</span> 判断一个函数 是否是一个变量的构造函数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const i=n(t,[["render",o]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%B1%BB/y001-%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html","title":"y001-基础知识","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/原型和原型链类/y001-基础知识.md"}');export{i as comp,r as data};
