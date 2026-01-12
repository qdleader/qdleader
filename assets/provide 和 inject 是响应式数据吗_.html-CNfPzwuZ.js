import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(o,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="provide-和-inject-是响应式数据吗" tabindex="-1"><a class="header-anchor" href="#provide-和-inject-是响应式数据吗"><span>provide 和 inject 是响应式数据吗?</span></a></h1><h2 id="vue-provide-inject-详细介绍" tabindex="-1"><a class="header-anchor" href="#vue-provide-inject-详细介绍"><span>Vue Provide / Inject 详细介绍</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">通常，当我们需要从父组件向子组件传递数据时，我们使用 props。想象一下这样的结构：有一些深度嵌套的组件，而深层的子组件只需要父组件的部分内容。在这种情况下，如果仍然将 prop 沿着组件链逐级传递下去，可能会很麻烦。</span>
<span class="line"></span>
<span class="line">对于这种情况，我们可以使用一对 provide 和 inject。无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者。</span>
<span class="line">这个特性有两个部分：父组件有一个 provide 选项来提供数据，子组件有一个 inject 选项来开始使用这些数据。</span>
<span class="line"></span>
<span class="line">## 使用</span>
<span class="line"></span>
<span class="line">假设有一个组件<span class="token constant">A</span>，<span class="token constant">A</span>组件引入<span class="token constant">B</span>组件（<span class="token constant">A</span>为<span class="token constant">B</span>的父组件） ，<span class="token constant">B</span>组件引入<span class="token constant">C</span>组件（<span class="token constant">B</span>为<span class="token constant">C</span>的父组件），即<span class="token constant">A</span>为<span class="token constant">C</span>的祖先组件，此时二者可以使用provide <span class="token operator">/</span> inject进行通信。</span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">eg</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">### <span class="token constant">A</span><span class="token punctuation">.</span>vue</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token constant">B</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">B</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">B</span> <span class="token keyword">from</span> <span class="token string">&quot;./B.vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">B</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">B</span><span class="token punctuation">.</span>vue</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">C</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">C</span> <span class="token keyword">from</span> <span class="token string">&quot;./C.vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">C</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">C</span><span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">A</span>与<span class="token constant">C</span>使用provide <span class="token operator">/</span> inject方式进行通信</span>
<span class="line"></span>
<span class="line"><span class="token constant">A</span>使用provide</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token constant">B</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">B</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">B</span> <span class="token keyword">from</span> <span class="token string">&quot;./B.vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">B</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">provide</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;leo&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">C</span>使用inject</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">此时，<span class="token constant">C</span>已经拿到<span class="token constant">A</span>中的对应的name。但是，我们可能希望：当<span class="token constant">A</span>中的name是本身某个可变化的数据时，如下：</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token constant">B</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">B</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">B</span> <span class="token keyword">from</span> <span class="token string">&quot;./B.vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">B</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">provide</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>name</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;leo&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;lion&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">我们希望当name改变时（如触发changeName方法），对应的<span class="token constant">C</span>中的name也要相应改变，但是使用以上方式时，<span class="token constant">C</span>中的name并未随着改变，此时需要我们进一步处理，即处理响应性。</span>
<span class="line"></span>
<span class="line">处理响应性</span>
<span class="line">在上面的例子中，如果我们更改了name，这个变化并不会反映在 inject 的 name property 中。这是因为默认情况下，provide<span class="token operator">/</span>inject 绑定并不是响应式的。在vue3中，我们可以通过传递一个 ref property 或 reactive 对象给 provide 来改变这种行为（下面展开）。在我们的例子（vue2）中，如果我们想对祖先组件中的更改做出响应，我们需要将 provide 传值进行改变。</span>
<span class="line"></span>
<span class="line"><span class="token constant">A</span>使用provide，此时传入的应是一个响应式对象（如以下的obj）</span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token constant">B</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">B</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">B</span> <span class="token keyword">from</span> <span class="token string">&quot;./B.vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">B</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>obj      <span class="token comment">//传入一个响应式对象</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;leo&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;lion&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token constant">C</span>使用inject</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;obj&quot;</span><span class="token punctuation">]</span>    <span class="token comment">//接收响应式对象</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">此时<span class="token constant">A</span>中的name改变，<span class="token constant">C</span>中的值也会相应跟着变化。</span>
<span class="line"></span>
<span class="line">以上为<span class="token constant">A</span>向<span class="token constant">C</span>传数据，如果<span class="token constant">C</span>向<span class="token constant">A</span>传数据（或者说<span class="token constant">C</span>需要改变<span class="token constant">A</span>中的数据），该如何做？</span>
<span class="line"></span>
<span class="line">我们这里不让<span class="token constant">C</span>直接改变<span class="token constant">A</span>中的数据，而是将<span class="token constant">A</span>改变数据的方法通过provide传给<span class="token constant">C</span>，<span class="token constant">C</span>执行该方法，触发改变<span class="token constant">A</span>中的数据。</span>
<span class="line"></span>
<span class="line"><span class="token constant">A</span>使用provide传入一个方法</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token constant">B</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">B</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">B</span> <span class="token keyword">from</span> <span class="token string">&quot;./B.vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">B</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">changeVal</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeName      <span class="token comment">//传入一个方法</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;leo&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>          <span class="token comment">//C中触发该方法执行，此时变成&quot;lion&quot;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">.</span>name <span class="token operator">=</span> val</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token constant">C</span>使用inject</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>span @click<span class="token operator">=</span><span class="token string">&quot;changeName&quot;</span><span class="token operator">&gt;</span>点击改变<span class="token constant">A</span>组件数据<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;changeVal&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">//接收一个方法</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeVal</span><span class="token punctuation">(</span><span class="token string">&quot;lion&quot;</span><span class="token punctuation">)</span>     <span class="token comment">//执行此方法，改变A中的数据</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">以上就是在vue2中对provide <span class="token operator">/</span> inject的基本使用。</span>
<span class="line"></span>
<span class="line">## vue3中使用</span>
<span class="line"></span>
<span class="line">Provide</span>
<span class="line"></span>
<span class="line">在 <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 中使用 provide 时，我们首先从 vue 显式导入 provide 方法。这使我们能够调用 provide 来定义每个 property。</span>
<span class="line"></span>
<span class="line">provide 函数允许你通过两个参数定义 property：</span>
<span class="line"></span>
<span class="line"><span class="token function">name</span> <span class="token punctuation">(</span> 类型<span class="token punctuation">)</span></span>
<span class="line">value</span>
<span class="line">使用<span class="token constant">A</span>组件，provide 的值可以按如下方式重构：</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token constant">C</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">C</span> <span class="token keyword">from</span> <span class="token string">&#39;./C.vue&#39;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">C</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;location&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;North Pole&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;geolocation&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">135</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">Inject</span>
<span class="line"></span>
<span class="line">在 <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 中使用 inject 时，也需要从 vue 显式导入。导入以后，我们就可以调用它来定义暴露给我们的组件方式。</span>
<span class="line"></span>
<span class="line">inject 函数有两个参数：</span>
<span class="line"></span>
<span class="line">要 inject 的 property 的 name</span>
<span class="line"><span class="token function">默认值</span> <span class="token punctuation">(</span>可选<span class="token punctuation">)</span></span>
<span class="line">使用<span class="token constant">C</span>组件，可以使用以下代码对其进行重构：</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> userLocation <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;location&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;The Universe&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> userGeolocation <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;geolocation&#39;</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      userLocation<span class="token punctuation">,</span></span>
<span class="line">      userGeolocation</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">上面提到，在vue3中处理响应性的方式</span>
<span class="line"></span>
<span class="line">为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 或 reactive。</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token constant">C</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">C</span> <span class="token keyword">from</span> <span class="token string">&#39;./C.vue&#39;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">C</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;North Pole&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> geolocation <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">135</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;location&#39;</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;geolocation&#39;</span><span class="token punctuation">,</span> geolocation<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">现在，如果这两个 property 中有任何更改，<span class="token constant">C</span>组件也将自动更新！</span>
<span class="line"></span>
<span class="line">同样的，需要在<span class="token constant">C</span>中修改它的祖先组件的数据，需像vue2一样在provide传入一个方法</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token constant">C</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">C</span> <span class="token keyword">from</span> <span class="token string">&#39;./C.vue&#39;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">C</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;North Pole&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> geolocation <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">135</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">updateLocation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      location<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;South Pole&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;location&#39;</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;geolocation&#39;</span><span class="token punctuation">,</span> geolocation<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;updateLocation&#39;</span><span class="token punctuation">,</span> updateLocation<span class="token punctuation">)</span>     <span class="token comment">//传入一个方法</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token constant">C</span>中使用inject</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> userLocation <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;location&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;The Universe&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> userGeolocation <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;geolocation&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> updateUserLocation <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;updateLocation&#39;</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      userLocation<span class="token punctuation">,</span></span>
<span class="line">      userGeolocation<span class="token punctuation">,</span></span>
<span class="line">      updateUserLocation      <span class="token comment">//执行该方法，触发祖先组件方法执行，从而改变数据</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">最后，如果要确保通过 provide 传递的数据不会被 inject 的组件更改，我们建议对提供者的 property 使用 readonly。</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token constant">C</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> readonly<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">C</span> <span class="token keyword">from</span> <span class="token string">&#39;./C.vue&#39;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">C</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;North Pole&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> geolocation <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">135</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">updateLocation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      location<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;South Pole&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 使用readonly，数据只读</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;location&#39;</span><span class="token punctuation">,</span> <span class="token function">readonly</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;geolocation&#39;</span><span class="token punctuation">,</span> <span class="token function">readonly</span><span class="token punctuation">(</span>geolocation<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;updateLocation&#39;</span><span class="token punctuation">,</span> updateLocation<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">总结：主要介绍了provide <span class="token operator">/</span> inject 的基本使用以及在vue2、vue3中使用的区别。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue3%E7%AF%87/provide%20%E5%92%8C%20inject%20%E6%98%AF%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%90%97_.html","title":"provide 和 inject 是响应式数据吗?","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/vue3篇/provide 和 inject 是响应式数据吗?.md"}');export{i as comp,r as data};
