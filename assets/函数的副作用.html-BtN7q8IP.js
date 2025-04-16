import{_ as a,c as s,a as e,o as p}from"./app-DFnxdJ0h.js";const t={};function c(o,n){return p(),s("div",null,n[0]||(n[0]=[e(`<h1 id="函数的副作用" tabindex="-1"><a class="header-anchor" href="#函数的副作用"><span>函数的副作用</span></a></h1><h2 id="什么是函数的副作用——理解js编程中函数的副作用" tabindex="-1"><a class="header-anchor" href="#什么是函数的副作用——理解js编程中函数的副作用"><span>什么是函数的副作用——理解js编程中函数的副作用</span></a></h2><h3 id="什么是-函数副作用" tabindex="-1"><a class="header-anchor" href="#什么是-函数副作用"><span>什么是 函数副作用？</span></a></h3><p>函数副作用是指当调用函数时，除了返回函数值之外，还对主调用函数产生附加的影响。副作用的函数不仅仅只是返回了一个值，而且还做了其他的事情，比如： 1、修改了一个变量2、直接修改数据结构3、设置一个对象的成员4、抛出一个异常或以一个错误终止5、打印到终端或读取用户输入 函数副作用会给程序设计带来不必要的麻烦，给程序带来十分难以查找的错误，并且降低程序的可读性，严格的函数式语言要求函数必须无副作用。</p><h4 id="纯函数-pure-function" tabindex="-1"><a class="header-anchor" href="#纯函数-pure-function"><span>纯函数 ( Pure Function )</span></a></h4><p>流全是显式（Explicit）的。 显式（Explicit）的意思是，函数与外界交换数据只有一个唯一渠道——参数和返回值。函数从函数外部接受的所有输入信息都通过参数传递到该函数内部。函数输出到函数外部的所有信息都通过返回值传递到该函数外部。</p><h4 id="非纯函数-impure-function" tabindex="-1"><a class="header-anchor" href="#非纯函数-impure-function"><span>非纯函数 ( Impure Function )</span></a></h4><p>与之相反。 隐式（Implicit）的意思是，函数通过参数和返回值以外的渠道，和外界进行数据交换。比如读取/修改全局变量，都叫作以隐式的方式和外界进行数据交换。</p><h4 id="引用透明-referential-transparent" tabindex="-1"><a class="header-anchor" href="#引用透明-referential-transparent"><span>引用透明 ( Referential Transparent )</span></a></h4><p>引用透明的概念与函数的副作用相关，且受其影响。 如果程序中两个相同值得表达式能在该程序的任何地方互相替换，而不影响程序的动作，那么该程序就具有引用透明性。它的优点是比非引用透明的语言的语义更容易理解，不那么晦涩。纯函数式语言没有变量，所以它们都具有引用透明性。</p><p>以下示例说明了引用透明与函数副作用的结合， 代码如下:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">result1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">temp <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">result2 <span class="token operator">=</span> <span class="token punctuation">(</span>temp <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>temp <span class="token operator">-</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果函数没有副作用，那么result1和result2将是等价的。然而如果fun有副作用，比如让b或c加1，那么result1和result2将不相等。因此，副作用违背了引用透明性。 在 JavaScript中，引入了函数。但显然 js中的函数可以访问、修改全局变量（或定义在函数外的变量），如下</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> </span>
<span class="line">  a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a 变成了10</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js中要想保证函数无副作用这项特性，只能依靠编程人员的习惯，即</p><p>1，函数入口使用参数运算，而不修改它 2，函数内不修改函数外的变量，如全局变量 3，运算结果通过函数返回给外部（出口）</p>`,16)]))}const l=a(t,[["render",c]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%87%BD%E6%95%B0%E7%B1%BB/%E5%87%BD%E6%95%B0%E7%9A%84%E5%89%AF%E4%BD%9C%E7%94%A8.html","title":"函数的副作用","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/函数类/函数的副作用.md"}');export{l as comp,r as data};
