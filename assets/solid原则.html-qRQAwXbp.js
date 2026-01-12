import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(o,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="solid原则" tabindex="-1"><a class="header-anchor" href="#solid原则"><span>solid原则</span></a></h1><h2 id="s-o-l-i-d" tabindex="-1"><a class="header-anchor" href="#s-o-l-i-d"><span>S.O.L.I.D.</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">本文就通过面向对象编程中，最基本的五种设计模式<span class="token constant">S</span><span class="token punctuation">.</span><span class="token constant">O</span><span class="token punctuation">.</span><span class="token constant">L</span><span class="token punctuation">.</span><span class="token constant">I</span><span class="token punctuation">.</span><span class="token constant">D</span><span class="token punctuation">.</span>，如何在React当中应用，来告诉大家，其实他们是很简单的。</span>
<span class="line"></span>
<span class="line">## <span class="token constant">S</span> <span class="token operator">-</span> <span class="token constant">SRP</span> 单一职责原则</span>
<span class="line"></span>
<span class="line">基本含义：一个类只应该负责一件事</span>
<span class="line">在React当中，可以简单理解为一个组件、Hook只应该做一件事</span>
<span class="line"></span>
<span class="line">下面的代码中，是一个正常React组件：</span>
<span class="line">你不必看完这个低码，粗略看一下即可</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Bad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>products<span class="token punctuation">,</span> setProducts<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>filterRate<span class="token punctuation">,</span> setFilterRate<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">fetchProducts</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://fakestoreapi.com/products&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>response <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token function">setProducts</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleRating</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">rate</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setFilterRate</span><span class="token punctuation">(</span>rate<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> filteredProducts <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> products<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">product</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> product<span class="token punctuation">.</span>rating<span class="token punctuation">.</span>rate <span class="token operator">&gt;</span> filterRate<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span>products<span class="token punctuation">,</span> filterRate<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex flex-col h-full&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex flex-col justify-center items-center&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">&quot;font-semibold&quot;</span><span class="token operator">&gt;</span>Minimum Rating <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>Rating</span>
<span class="line">          initialValue<span class="token operator">=</span><span class="token punctuation">{</span>filterRate<span class="token punctuation">}</span></span>
<span class="line">          SVGclassName<span class="token operator">=</span><span class="token string">&quot;inline-block&quot;</span></span>
<span class="line">          onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleRating<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;h-full flex flex-wrap justify-center&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">{</span>filteredProducts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">product</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">...</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">看起来也还不错，但实际上，他其实做了很多事情</span>
<span class="line"></span>
<span class="line">获取数据</span>
<span class="line">进行筛选 和 渲染产品列表</span>
<span class="line"></span>
<span class="line">严格上来说，这不符合<span class="token constant">SRP</span>，来让我们稍微改造一下</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可以看到，我封装了</span></span>
<span class="line"><span class="token comment">// Product商品组件，这是个纯UI组件</span></span>
<span class="line"><span class="token comment">// useProducts custom hook</span></span>
<span class="line"><span class="token comment">// useRateFilter custom hook</span></span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Good</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> products <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> filterRate<span class="token punctuation">,</span> handleRating <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRateFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex flex-col h-full&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Filter</span>
<span class="line">        filterRate<span class="token operator">=</span><span class="token punctuation">{</span>filterRate <span class="token keyword">as</span> number<span class="token punctuation">}</span></span>
<span class="line">        handleRating<span class="token operator">=</span><span class="token punctuation">{</span>handleRating<span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;h-full flex flex-wrap justify-center&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token function">filterProducts</span><span class="token punctuation">(</span>products<span class="token punctuation">,</span> filterRate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">product</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token operator">&lt;</span>Product product<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">首先说明一个点，当在写React 代码的时候</span>
<span class="line"></span>
<span class="line">如果遇到 useState 和 useEffect 来获取数据的时候，应该首先去考虑封装成一个custom hook</span>
<span class="line">如果遇到map去遍历一个比较长的组件时，应该首先考虑封装成一个纯<span class="token constant">UI</span>组件</span>
<span class="line"></span>
<span class="line">在上面的代码中，数据获取在一个custom hook中，筛选数据也被单独放到了hook中，渲染产品列表也被单独封装为一个dummy component ， 即纯<span class="token constant">UI</span>组件。</span>
<span class="line">怎么样是不是代码干净可读多了？</span>
<span class="line"></span>
<span class="line">## <span class="token constant">O</span> <span class="token operator">-</span> <span class="token constant">OCP</span> 开闭原则</span>
<span class="line"></span>
<span class="line">基本含义：类允许被扩展，但不允许被修改</span>
<span class="line">听起来有些矛盾，但理解了他的意思之后，就会变的很简单。</span>
<span class="line">考虑以下代码</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IMyButtonProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">&#39;back&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;forward&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyFuncyButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IMyButtonProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">...</span><span class="token punctuation">.</span></span>
<span class="line">	<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">在上面的例子当中，按钮分为了三种类型，包括前进、后退、返回主页。一切良好，但如果有一天我想添加一个比如支付的按钮，那该怎么办么？</span>
<span class="line"><span class="token operator">**</span>恐怕得有去改代码内部，这显然是与<span class="token constant">OCP</span>原则不符的。<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line">所以我们看主流的<span class="token constant">UI</span>框架，他们的按钮主题都是按照颜色维度去区分的，而不是业务类型，而内部的文案由props传入。这样足够满足各种需求。</span>
<span class="line">js</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 可以看到element<span class="token operator">-</span>ui是如何抽象按钮类型的 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>主要按钮<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;success&quot;</span><span class="token operator">&gt;</span>成功按钮<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;info&quot;</span><span class="token operator">&gt;</span>信息按钮<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;warning&quot;</span><span class="token operator">&gt;</span>警告按钮<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;danger&quot;</span><span class="token operator">&gt;</span>危险按钮<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">这里还要说明一点，开闭原则有一个超级经典的使用场景，就是装饰器</span>
<span class="line">@<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Blog</span> <span class="token punctuation">{</span></span>
<span class="line">  @<span class="token function">PrimaryGeneratedColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">复制代码</span>
<span class="line">以上是Nest<span class="token punctuation">.</span>js的一个实体类，对于这个Blog类，如果我不添加@<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>注解，那么这就是一个普通的类，但如果我添加了这个注解，他就是一个map到数据库的实体类。即为该类添加了功能，但并没有改变类本身的源代码</span>
<span class="line">我还可添加更多的注解，比如打印日志等等，可以实现同样的目的。</span>
<span class="line"></span>
<span class="line">## <span class="token constant">L</span> <span class="token operator">-</span> <span class="token constant">LSP</span> 里氏替换原则</span>
<span class="line"></span>
<span class="line">基本含义： 基类设定一系列的规范和契约，子类需要遵守</span>
<span class="line">这个原则比较抽象，但个人感觉，这无疑是强类型语言的基石。</span>
<span class="line">我举一个最简单的例子。</span>
<span class="line"><span class="token function">试想，在Javascript当中，对于任何一个对象，我们是不是都可以调用toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法。这是为什么？</span>
<span class="line"><span class="token function">可能大家会说，原型链的顶端定义了toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，其实这已经回答了里氏替换原则。</span>
<span class="line"><span class="token class-name">因为我们可以认为，原型链顶端，也就是Object</span><span class="token punctuation">.</span>prototype这个原型对象，他就是<span class="token constant">JS</span>当中所有对象的父类，或说超类。他身上的属性方法就像是一个契约，所有的子类都满足这个契约。</span>
<span class="line">这一点非常重要，比如</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">class</span> 猿人 <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">吃饭</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我会吃饭&#39;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token function">睡觉</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> 你 <span class="token keyword">extends</span> 猿人 <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">xxx</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">listYourBehaviors</span><span class="token punctuation">(</span>person<span class="token operator">:</span> 猿人<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"></span>
<span class="line">上述代码中listYourBehaviors方法接受一个猿人类型，但因为你继承自猿人，所以如果我入参传入你，那么也不会报错。</span>
<span class="line">显然这是一种契约，需要开发者去遵守。</span>
<span class="line">说的有点多。在React当中，我们经常会封装组件，比如</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyFuncyInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">假设你封装了一下input组件。可能你的组件很牛<span class="token operator">~</span>，很多技术小伙伴都在用，但有一天，一个人和你说，我使用组件的时候，传入了一个placeholder，发现并没有生效，这是怎么回事？</span>
<span class="line">额，当然不会生效，因为你没有把placeholder添加到iinput上<span class="token operator">...</span></span>
<span class="line">在这里，你可以认为input就是父类，而你封装的MyFuncyInput就是子类，那么父类具备的属性placeholder，子类也应该去实现，当然，如果挨个写会很麻烦，所以可以这样写</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IMyFuncyInputProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>HTMLInputAttributes</span><span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">isLargeInput</span><span class="token operator">:</span> boolean</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyFuncyInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IMyFuncyInputProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">{</span>isLargeInput<span class="token punctuation">,</span> <span class="token operator">...</span>restProps<span class="token punctuation">}</span> </span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">{</span>isLargeInput <span class="token operator">?</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>restProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token punctuation">{</span><span class="token operator">...</span>restProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">每当我们封装一个组件的时候，都应该想到，对于父组件本身原有的属性，我们应该怎样处理，去符合里氏替换原则。</span>
<span class="line"></span>
<span class="line">## <span class="token constant">I</span> <span class="token operator">-</span> <span class="token constant">ISP</span> 接口分离原则</span>
<span class="line"></span>
<span class="line">基本含义：客户端不应依赖于他不使用的接口</span>
<span class="line">这个是非常简单的，在React当中，他的意思一个不应向组件传入其不使用的Props</span>
<span class="line">有人可能觉得为什么要这样干？</span>
<span class="line">考虑一下代码</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>Thumbnail product<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">thumbnail就是产品缩略图的意思，当上面的组件如果被其他任何人使用，是否会觉得会不清楚，为什么我需要传入一个完整的product对象进行。缩略图不应该是需要一个图片地址么？</span>
<span class="line">所以可以调整如下</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>Thumbnail imageUrl<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">.</span>imgUrl<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">这是不是就清楚多了，其实很多时候，代码的干净整洁都是一点点积累出来的。关注每一个小点，可以最终让你的应用更容易维护。比如上边的情况，如果用户获取不到product对象，他只能获取到订单对象，订单上也包含缩略图，那么他就不能使用你的组件了么？</span>
<span class="line"></span>
<span class="line">## <span class="token constant">D</span> <span class="token operator">-</span> <span class="token constant">DIP</span> 依赖倒转原则</span>
<span class="line"></span>
<span class="line">基本含义：接口依赖于抽象，而不是具体实现</span>
<span class="line">我记得这里有个经典的例子，就是计算机各部件的组成，比如，<span class="token constant">USB</span>接口，无论你是摄像机，鼠标，键盘，无论实现了什么样的功能，这些具体功能对于电脑而言是隐藏的。对外暴露的只是通过<span class="token constant">USB</span>这个接口去进行数据传递。</span>
<span class="line">试想如果一个鼠标需要对各种类型的电脑适配不同的接口，那绝对是个灾难。</span>
<span class="line">在React当中，我们其实已经会不知觉的大量使用了，因为react的是一门函数式的库，他的<span class="token constant">UI</span>函数是通过Props去传递的，Props就是所谓的接口。比如</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">SubmitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> onSubmit <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		api<span class="token punctuation">.</span><span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token string">&#39;https://xxx.com/api/product&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&lt;</span>Form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>onSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>From<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">对于上边的表单提交组件，如果有一天，我希望能够将其复用到其他地方，但提交的<span class="token constant">URL</span>不一样，那么显然，对不不同使用这个表单的地方，都应该只关注该表单的接口。即，他可以改成下面这样</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ISubmitFrom</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function-variable function">onSubmit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">SubmitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> ISubmitFrom</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> onSubmit <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		props<span class="token punctuation">.</span><span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&lt;</span>Form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>onSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>From<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">如上，即定义了一个接口，他会指定一个回调函数，就是onSubmit，任何使用这个组件的人，是需要是实现回调的逻辑就可以了。也就是所谓的面向接口编程</span>
<span class="line">其实，我们想象一下，在前后端开发联调的过程中，大家都是按照接口文档是实现。比如前端开发，你会去注意后端逻辑是怎么实现的么，你会关注，比如产品列表，后台是直接读MySQL数据库，还是走Redis缓存<span class="token operator">?</span></span>
<span class="line"></span>
<span class="line">### good Demo</span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>ipenywis<span class="token operator">/</span>react<span class="token operator">-</span>solid<span class="token operator">/</span>tree<span class="token operator">/</span>main<span class="token operator">/</span>src<span class="token operator">/</span>principles</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99/solid%E5%8E%9F%E5%88%99.html","title":"solid原则","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"设计原则/solid原则.md"}');export{i as comp,r as data};
