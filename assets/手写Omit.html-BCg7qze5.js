import{_ as n,c as a,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function l(c,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="手写omit" tabindex="-1"><a class="header-anchor" href="#手写omit"><span>手写Omit</span></a></h1><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">K</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span>Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">K</span><span class="token operator">&gt;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h2><p>这个定义中，使用了 TypeScript 的类型推导机制和 Exclude 操作符。 首先，我们声明了两个泛型类型参数 T 和 K，其中 T 表示要操作的类型，K 表示要删去的属性名。 然后，使用了 keyof T 操作符，获取了 T 类型的所有属性名组成的联合类型。接着，使用 Exclude 操作符将 K 从这个联合类型中排除掉，得到一个新的属性名联合类型。最后，使用 Pick 操作符从 T 类型中选取删去了属性 K 后的属性集合。 例如，假设我们有以下类型：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  address<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    city<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">    street<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">PersonNameAndAge</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&quot;address&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PersonNameAndAge 将会是一个新的类型，它只包含 Person 中的 name 和 age 两个属性</p>`,6)]))}const i=n(p,[["render",l]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/TS%E7%AF%87/%E6%89%8B%E5%86%99%E7%AF%87/%E6%89%8B%E5%86%99Omit.html","title":"手写Omit","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/TS篇/手写篇/手写Omit.md"}');export{i as comp,r as data};
