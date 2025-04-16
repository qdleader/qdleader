import{_ as n,c as a,a as e,o as p}from"./app-DFnxdJ0h.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="type-和-interface的区别" tabindex="-1"><a class="header-anchor" href="#type-和-interface的区别"><span>type 和 interface的区别</span></a></h1><p>相同点 都可以描述一个对象或者函数</p><h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span>interface</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string</span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> number</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">SetUser</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">type User <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string</span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> number</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">type <span class="token function-variable function">SetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都允许拓展（extends） interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。 <strong>interface extends interface</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>type extends type</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">type Name <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">type User <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>interface extends type</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">type Name <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>type extends interface</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">type User <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点"><span>不同点：</span></a></h4><p>type类型别名，可以定义基础类型，元组等 type不会创建一个真正的新的类名 类型别名无法被实现implements，而接口可以被派生类实现 类型别名重名会抛出错误，接口重名是会产生合并</p><p>type 可以而 interface 不行</p><p>type 可以声明基本类型别名，联合类型，元组等类型</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// 基本类型别名</span></span>
<span class="line"></span>
<span class="line">type Name <span class="token operator">=</span> string</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 联合类型</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">wong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">miao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">type Pet <span class="token operator">=</span> Dog <span class="token operator">|</span> Cat</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 具体定义数组每个位置的类型</span></span>
<span class="line">type PetList <span class="token operator">=</span> <span class="token punctuation">[</span>Dog<span class="token punctuation">,</span> Pet<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type 语句中还可以使用 typeof 获取实例的 类型进行赋值</p><p>当你想获取一个变量的类型时，使用 typeof</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">type <span class="token constant">B</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> div</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>其他</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">type StringOrNumber <span class="token operator">=</span> string <span class="token operator">|</span> number<span class="token punctuation">;</span>  </span>
<span class="line">type Text <span class="token operator">=</span> string <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">;</span>  </span>
<span class="line">type NameLookup <span class="token operator">=</span> Dictionary<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>  </span>
<span class="line">type Callback<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token constant">T</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>  </span>
<span class="line">type Pair<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  </span>
<span class="line">type Coordinates <span class="token operator">=</span> Pair<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">;</span>  </span>
<span class="line">type Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interface-可以而-type-不行" tabindex="-1"><a class="header-anchor" href="#interface-可以而-type-不行"><span>interface 可以而 type 不行</span></a></h2><p>interface 能够声明合并</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string</span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> number</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">sex</span><span class="token operator">:</span> string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line">User 的接口为 {</span>
<span class="line">  name: string</span>
<span class="line">  age: number</span>
<span class="line">  sex: string </span>
<span class="line">}</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>相同点：</p><pre><code>&gt; 都可以描述对象或者函数 
&gt; 都允许扩展（extends）
</code></pre><p>不同点：</p><pre><code>&gt; 类型别名可以为任何类型引入名称，例如基本类型，联合类型等。
&gt; 类型别名不支持继承
&gt; 类型别名不会创建一个类型的名字
&gt; 类型别名无法被实现implements，而接口可以被派生类实现
&gt; 类型别名重名会抛出错误，接口重名是会产生合并
</code></pre><p>一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 。其他更多详情参看 官方规范文档</p>`,33)]))}const r=n(t,[["render",l]]),o=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/TS%E7%AF%87/interface%E5%92%8Ctype%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"type 和 interface的区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/TS篇/interface和type的区别.md"}');export{r as comp,o as data};
