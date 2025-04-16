import{_ as a,c as n,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function c(l,s){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="exclude和omit的区别" tabindex="-1"><a class="header-anchor" href="#exclude和omit的区别"><span>Exclude和Omit的区别</span></a></h1><p>TypeScript 中 Omit 和 Exclude 都有排除属性的能力，但是两者的使用场景和具体功能又不是完全一样</p><h2 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude"><span>Exclude</span></a></h2><p>Exclude&lt; T, U &gt; 作用：T中取T、U交集的补集</p><p>Exclude&lt;T, U&gt; 的主要作用是从 T 类型中排除出可以赋值给 U 的类型，创建出一个新的子类型。比如下面的例子：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// 结果是 &#39;c&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>在这个例子中，我们定义了两个类型 T 和 U，T 是一个包含 &#39;a&#39;, &#39;b&#39;, &#39;c&#39; 三个成员的联合类型，而 U 是包含 &#39;a&#39;, &#39;b&#39; 的联合类型。通过 Exclude&lt;T, U&gt; 我们从 T 中排除了可以赋值给 U 的类型，所以结果类型 Result 就变成了 &#39;c&#39;。</p><h2 id="omit" tabindex="-1"><a class="header-anchor" href="#omit"><span>Omit</span></a></h2><p>Omit&lt;T, K&gt; 的主要功能在于，从一个已有的对象类型 T 中排除指定的属性 K，进而创建一个新的对象类型。比如下面的例子：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">    b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">    c<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">K</span></span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// 结果是 { c: boolean }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>在这个例子中，我们定义了一个对象类型 T，包含 &#39;a&#39;, &#39;b&#39; 和 &#39;c&#39; 三个属性。我们希望经过处理后得到一个新的对象类型，这个类型只包含 T 中的 &#39;c&#39; 属性。于是我们用 Omit&lt;T, K&gt; 排除了 &#39;a&#39; 和 &#39;b&#39; 两个属性，得到的新类型 Result 就只包含了 { c: boolean } 属性。</p><h2 id="功能对比" tabindex="-1"><a class="header-anchor" href="#功能对比"><span>功能对比</span></a></h2><blockquote><p>Exclude的参数类型没有限制，可以是字面量也可以是具体的类型如string、boolean等，而Omit的第二参数则必须是第一参数的子属性</p></blockquote><blockquote><p>Omit 一般用于对象似的类型和 interface 类型；一般不用于联合类型； 而 Exclude 可以用于联合类型,一般不用于 interface 类型和对象似的类型；</p></blockquote><blockquote><p>Exclude 是针对联合类型，用于排除一些特定成员类型；Omit 是针对对象类型，用于忽略或排除某些特定属性；</p></blockquote>`,17)]))}const i=a(p,[["render",c]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/TS%E7%AF%87/Exclude%E5%92%8COmit%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"Exclude和Omit的区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/TS篇/Exclude和Omit的区别.md"}');export{i as comp,r as data};
