import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="vue3中的toref和torefs" tabindex="-1"><a class="header-anchor" href="#vue3中的toref和torefs"><span>vue3中的toRef和toRefs</span></a></h1><h2 id="_1-ref的使用" tabindex="-1"><a class="header-anchor" href="#_1-ref的使用"><span>1. ref的使用</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&gt;</span> ref 接受一个原始值，返回一个具有响应式的对象，对象有一个value属性，其值就是所传递的原始值。</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> ref是做的一个拷贝关系，修改对象msg的值，不会影响对象obj，视图会发生变化。</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;你好&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 你好</span></span>
<span class="line">    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// ref 可以是任何类型 也可以是对象</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">change1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      msg<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;世界&quot;</span><span class="token punctuation">;</span> </span>
<span class="line">      <span class="token comment">//修改msg1数据的时候必须要加 .value 渲染数据的时候就不用加了</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// {name: &quot;你好&quot;, age: 16} &#39;世界&#39; </span></span>
<span class="line">      <span class="token comment">// 数据此时没改变 但是页面的数据改变了</span></span>
<span class="line">      </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">change1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">     <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        obj<span class="token punctuation">,</span></span>
<span class="line">        msg<span class="token punctuation">,</span></span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">     </span>
<span class="line"></span>
<span class="line"> ## 如果给dom上加ref 就是当前的dom元素</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;home-new&quot;</span><span class="token operator">&gt;</span>  </span>
<span class="line">      <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;target&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">       </span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HomeNew&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 懒加载</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      target<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">## <span class="token number">2.</span> toRef的使用</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> toRef用来给抽离响应式对象中的某一个属性，并把该属性包裹成ref对象，使其和原对象产生链接</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> toRef是做的一种引用关系，修改msg2的值，会影响对象msg，但视图不会发生变化</span>
<span class="line"></span>
<span class="line">    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    	<span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> msg2 <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>	<span class="token comment">// zs</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">change2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            msg2<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;ww&#39;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> msg2<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// {name: &quot;ww&quot;, age: 16} ww</span></span>
<span class="line">            <span class="token comment">//此时 msg.ww 数据变了 但是视图上的是不会变的</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">change2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span> msg2<span class="token punctuation">,</span>change2 <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">3.</span> toRefs的使用</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span>  toRefs用来把响应式对象转换成普通对象，把对象中的每一个属性，包裹成ref对象</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> toRefs就是toRef的升级版，只是toRefs是把响应式对象进行转换，其余的特性和toRef无二</span>
<span class="line"></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> msg3 <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// { name:ref, age:ref }  ref代指ref对象</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">change3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      msg3<span class="token punctuation">.</span>name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;zl&#39;</span></span>
<span class="line">      msg3<span class="token punctuation">.</span>age<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> msg3<span class="token punctuation">)</span> <span class="token comment">// {name: &quot;zl&quot;, age: 20} { name:ref, age:ref }</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">change3</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> msg3<span class="token punctuation">,</span> change3 <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"> 请求过来的数据封装了一下</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getBanner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span><span class="token function">getBan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getBan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> bannerList <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// 模板中直接 写入 list 就可以了</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">getBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    bannerList<span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bannerList<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> bannerList<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">### 这样写模板中直接写入 <span class="token punctuation">{</span><span class="token punctuation">{</span> list <span class="token punctuation">}</span><span class="token punctuation">}</span>  就可以了 ， 不用 <span class="token punctuation">{</span><span class="token punctuation">{</span> obj<span class="token punctuation">.</span>list <span class="token punctuation">}</span><span class="token punctuation">}</span>，修改数据的时候还是 obj<span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token string">&#39;aaa&#39;</span> </span>
<span class="line"></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">newS</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">moods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">4.</span>总结</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> ref、toRef、toRefs 都可以将某个对象中的属性变成响应式数据</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> ref的本质是拷贝，修改响应式数据，不会影响到原始数据，视图会更新</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> toRef、toRefs的本质是引用，修改响应式数据，会影响到原始数据，视图不会更新</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> toRef 一次仅能设置一个数据，接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> toRefs接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用toRef执行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const i=s(t,[["render",l]]),u=JSON.parse('{"path":"/vue3/vue3%E4%B8%AD%E7%9A%84toRef%E5%92%8CtoRefs.html","title":"vue3中的toRef和toRefs","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"vue3/vue3中的toRef和toRefs.md"}');export{i as comp,u as data};
