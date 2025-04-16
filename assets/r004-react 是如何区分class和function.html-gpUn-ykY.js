import{_ as s,c as a,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function c(l,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="r004-react-是如何区分class和function" tabindex="-1"><a class="header-anchor" href="#r004-react-是如何区分class和function"><span>r004-react 是如何区分class和function</span></a></h1><h2 id="react是怎么区分class和function的" tabindex="-1"><a class="header-anchor" href="#react是怎么区分class和function的"><span>React是怎么区分class和function的？</span></a></h2><p>在Component的原型上定义属性 isReactComponent = {}</p><p>当我们需要渲染Button组件的时候，直接使用即可，无需关心它是通过什么方式定义的。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>但是React内部会关心它是通过什么方式定义的。</p><p>如果是函数，React会直接调用。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// React 内部</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">Button</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;div&gt;Hello&lt;/div&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是class，React 需要先用 new 操作符将其实例化，然后调用刚才生成实例的 render 方法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// React 内部</span></span>
<span class="line"><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">// Button {}</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &lt;div&gt;Hello&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论哪种情况，React的目的是获取渲染后的Node（节点），具体获取方式取决于Button是如何定义的。</p><p>所以React是怎么区分class和function的？</p><p>单纯的判断是函数还是类，还是比较容易的。事实上，在开发中，React都会经过babel将类等新语法编译成在可在低版本浏览器上运行的代码。所以class会被编译成经过特殊处理的函数。又该如何判断？</p><p>以下为class编译后的伪代码：</p><p>function Person(name) { if (!(this instanceof Person)) { throw new TypeError(&#39;Cannot call a class as a function&#39;) } this.name = name }</p><p>new Person(&#39;Jack&#39;) // OK Person(&#39;George&#39;) // 无法把类当做函数来调用 为什么不干脆都都通过new的方式调用呢？并不可以。</p><h1 id="此外还有两个致命的问题" tabindex="-1"><a class="header-anchor" href="#此外还有两个致命的问题"><span>此外还有两个致命的问题：</span></a></h1><h2 id="第一-箭头函数。" tabindex="-1"><a class="header-anchor" href="#第一-箭头函数。"><span>第一：箭头函数。</span></a></h2><ol><li>箭头函数没有自己的this，其内部的this指向离它最近的常规函数所处的上下文。</li><li>而且箭头函数没有 prototype 属性。(那我们是不是可以通过函数是否有prototype属性来判断直接调用还是通过new方式调用？不可以！</li></ol><p>万一箭头函数被babel编译过呢。</p><p>那干脆把class和箭头函数都通过babel编译成常规函数，然后都通过new的方式不行吗？ 是的，不行！看第二个原因。)</p><h2 id="第二-不能都使用new的原因是-react支持组件返回字符串、数字等基本类型的值。" tabindex="-1"><a class="header-anchor" href="#第二-不能都使用new的原因是-react支持组件返回字符串、数字等基本类型的值。"><span>第二：不能都使用new的原因是，React支持组件返回字符串、数字等基本类型的值。</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Title</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">&#39;hello title&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Title</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;hello title&#39;</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Title</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回另一个对象的函数，在使用new调用时会覆盖其创建的实例。但是，如果一个函数的返回值不是一个对象，它会被 new 完全忽略。如果你返回了一个字符串或数字，就好像完全没有 return 一样。</p><p>此外</p><p>最初这个标记是在 React.Component 这个基类自己身上：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// React 内部</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">Component<span class="token punctuation">.</span>isReactClass <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可以这样检查</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">Greeting<span class="token punctuation">.</span>isReactClass <span class="token comment">// ok</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，某些 compile-to-js 的语言，在类的实现上有所不同，子类在继承父类的时候，会丢失静态属性，导致在子类上访问不到父类的 isReactComponent，所以保险起见，React 把标记移到了 React.Component.prototype上，选择把它作为实例属性，以确保子类能够正确继承。</p>`,28)]))}const o=s(p,[["render",c]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/react%E7%AF%87/r004-react%20%E6%98%AF%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86class%E5%92%8Cfunction.html","title":"r004-react 是如何区分class和function","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/react篇/r004-react 是如何区分class和function.md"}');export{o as comp,r as data};
