import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(o,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="vue3的setup语法糖" tabindex="-1"><a class="header-anchor" href="#vue3的setup语法糖"><span>vue3的setup语法糖</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token number">1</span>，前言</span>
<span class="line">js</span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>是在单文件组件中使用Composition <span class="token constant">API</span>的编译时语法糖。相比于普通的<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>语法，它具有更多优势</span>
<span class="line"></span>
<span class="line">更少的样板内容，更简洁的代码</span>
<span class="line">能够使用纯 Typescript 声明 props 和抛出事件</span>
<span class="line"><span class="token function">更好的运行时性能</span> <span class="token punctuation">(</span>其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">2</span>，基本语法</span>
<span class="line"></span>
<span class="line">vue</span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;qd&#39;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">script里面的代码会被编译成组件setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>函数的内容。这意味着与普通的<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>只在组件被首次引入的时候执行一次不同，<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>中的代码会在每次组件实例被创建的时候执行。</span>
<span class="line"></span>
<span class="line">注意：当使用<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>的时候，任何在<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span><span class="token function">声明的顶层的绑定</span> <span class="token punctuation">(</span>包括变量，函数，以及<span class="token keyword">import</span>引入的内容<span class="token punctuation">)</span> 都能在模板中直接使用，不需要<span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">2</span>响应式</span>
<span class="line"></span>
<span class="line">响应式状态需要使用响应式APIs来创建</span>
<span class="line">vue</span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> data<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line">  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;qd&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;qd&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">3</span>组件使用</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>范围里的值也能被直接作为自定义组件的标签名使用，不需要写在conmonent对象里</span>
<span class="line"></span>
<span class="line">vue</span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent.vue&#39;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">### <span class="token number">3.1</span>，动态组件</span>
<span class="line"></span>
<span class="line">由于组件被引用为变量而不是作为字符串键来注册的，在<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>中要使用动态组件的时候，就应该使用动态的<span class="token operator">:</span>is来绑定</span>
<span class="line"></span>
<span class="line">vue</span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;Foo&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;someCondition ? Foo : Bar&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">&#39;./Foo.vue&#39;</span></span>
<span class="line">    <span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">&#39;./Bar.vue&#39;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">### <span class="token number">3.2</span>，递归组件</span>
<span class="line"></span>
<span class="line">一个单文件组件可以通过它的文件名被其自己所引用。例如：文件名为Foo<span class="token punctuation">.</span>vue的组件可以在其模板中用<span class="token operator">&lt;</span>Foo<span class="token operator">/</span><span class="token operator">&gt;</span>引用它自己。如果名称冲突了，就需要使用别名。</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Foo <span class="token keyword">as</span> FooBarChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./components&#39;</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">4</span>，自定义指令</span>
<span class="line"></span>
<span class="line">全局注册的自定义指令将以符合预期的方式工作，且本地注册的指令可以直接在模板中使用，就像上文所提及的组件一样。但这里有一个需要注意的限制：必须以 vNameOfDirective的形式来命名本地自定义指令，以使得它们可以直接在模板中使用</span>
<span class="line"></span>
<span class="line">vue</span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>my<span class="token operator">-</span>directive<span class="token operator">&gt;</span>This is a Heading<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token keyword">const</span> vMyDirective <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">beforeMount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 在元素上做些操作</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">**</span>### 导入指令<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token comment">// 导入的指令同样能够工作，并且能够通过重命名来使其符合命名规范</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> myDirective <span class="token keyword">as</span> vMyDirective <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyDirective.js&#39;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"># <span class="token number">5</span>，props</span>
<span class="line"></span>
<span class="line">在<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>中必须使用defineProps来声明props，它具备完整的类型推断并且在<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>中是直接可用的</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">foo</span><span class="token operator">:</span> String</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">defineProps 用来接收父组件传来的 props <span class="token punctuation">;</span> defineEmits 用来声明触发的事件。</span>
<span class="line"></span>
<span class="line"><span class="token comment">//父组件</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>my<span class="token operator">-</span>son foo<span class="token operator">=</span><span class="token string">&quot;qd&quot;</span> @change<span class="token operator">=</span><span class="token string">&quot;childClick&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> MySon <span class="token keyword">from</span> <span class="token string">&quot;./MySon.vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> childClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//子组件</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>span @click<span class="token operator">=</span><span class="token string">&quot;sonClick&quot;</span><span class="token operator">&gt;</span>信息<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> props<span class="token punctuation">.</span>foo <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineEmits<span class="token punctuation">,</span> defineProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 声明触发事件 change</span></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;qd&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;0分钟&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 获取props</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span> <span class="token punctuation">,</span> props<span class="token punctuation">.</span>foo<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">### <span class="token number">5.1</span>，TypeScript支持</span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">foo</span><span class="token operator">:</span> string</span>
<span class="line">  bar<span class="token operator">?</span><span class="token operator">:</span> number</span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">默认值</span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span></span>
<span class="line">  msg<span class="token operator">?</span><span class="token operator">:</span> string</span>
<span class="line">  labels<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>defineProps<span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">labels</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">6</span>，emit</span>
<span class="line"></span>
<span class="line">在<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>中必须使用defineEmits来声明emits，它具备完整的类型推断并且在<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>中是直接可用的</span>
<span class="line"></span>
<span class="line">子组件</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span> 你好<span class="token operator">-</span>我是子组件<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;hander1Click&quot;</span><span class="token operator">&gt;</span>新增<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;hander2Click&quot;</span><span class="token operator">&gt;</span>删除<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token keyword">import</span> <span class="token punctuation">{</span>defineEmits<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token comment">//  使用defineEmits创建名称，接受一个数组</span></span>
<span class="line"><span class="token keyword">let</span> emit<span class="token operator">=</span><span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;myAdd&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;myDel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> hander1Click<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;myAdd&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;新增的数据&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">let</span> hander2Click<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;myDel&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;删除的数据&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">父组件</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;home&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>test<span class="token operator">-</span>com @myAdd<span class="token operator">=</span><span class="token string">&quot;myAddHander&quot;</span> @myDel<span class="token operator">=</span><span class="token string">&#39;myDelHander&#39;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>test<span class="token operator">-</span>com<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> TestCom <span class="token keyword">from</span> <span class="token string">&quot;../components/TestCom.vue&quot;</span></span>
<span class="line"><span class="token keyword">let</span> myAddHander<span class="token operator">=</span><span class="token punctuation">(</span>mess<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;新增==&gt;&#39;</span><span class="token punctuation">,</span>mess<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">let</span> myDelHander<span class="token operator">=</span><span class="token punctuation">(</span>mess<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;删除==&gt;&#39;</span><span class="token punctuation">,</span> mess<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">### <span class="token number">6.1</span>，TypeScript支持</span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> emit <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">7</span>，defineExpose暴露</span>
<span class="line"></span>
<span class="line">如果在父组件中通过ref<span class="token operator">=</span>&#39;xxx’的方法来获取子组件实例，</span>
<span class="line">子组件使用了script setup语法糖<span class="token punctuation">,</span></span>
<span class="line">则子组件的数据需要用defineExpose 的方式导出，否则不会暴露属性。</span>
<span class="line"></span>
<span class="line"><span class="token comment">//父组件</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>Daughter ref<span class="token operator">=</span><span class="token string">&quot;daughter&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Daughter <span class="token keyword">from</span> <span class="token string">&quot;./Daughter.vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> daughter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;~daughter&#39;</span><span class="token punctuation">,</span>daughter<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;~daughter&#39;</span><span class="token punctuation">,</span>daughter<span class="token punctuation">.</span>value<span class="token punctuation">.</span>msg<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;~daughter&#39;</span><span class="token punctuation">,</span>daughter<span class="token punctuation">.</span>value<span class="token punctuation">.</span>info<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//子组件</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">,</span>defineExpose<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;beautify&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> info<span class="token operator">=</span><span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">like</span><span class="token operator">:</span><span class="token string">&#39;喜欢李诗晴&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">27</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    msg<span class="token punctuation">,</span></span>
<span class="line">    info</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">8</span>，useSlots 和 useAttrs</span>
<span class="line"></span>
<span class="line">在模板中通过$slots和$attrs来访问它们</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> useSlots<span class="token punctuation">,</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line">    <span class="token keyword">const</span> slots <span class="token operator">=</span> <span class="token function">useSlots</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">## <span class="token number">9</span>，与普通的script一起使用</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>可以和普通的<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>一起使用。普通的<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>在有这些需要的情况下或许会被使用到。</span>
<span class="line"></span>
<span class="line">无法在<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>声明的选项，例如inheritAttrs或通过插件启用的自定义的选</span>
<span class="line">声明命名导出</span>
<span class="line">运行副作用或者创建只需要执行一次的对象</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token comment">// 普通 &lt;script&gt;, 在模块范围下执行(只执行一次)</span></span>
<span class="line">    <span class="token function">runSideEffectOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 声明额外的选项</span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token comment">// 在 setup() 作用域中执行 (对每个实例皆如此)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.2</span> 除了 setup 外新增的</span>
<span class="line"></span>
<span class="line">### 新增指令 v<span class="token operator">-</span>memo</span>
<span class="line"></span>
<span class="line">v<span class="token operator">-</span>memod会记住一个模板的子树<span class="token punctuation">,</span>元素和组件上都可以使用。</span>
<span class="line">该指令接收一个固定长度的数组作为依赖值进行<span class="token punctuation">[</span>记忆比对<span class="token punctuation">]</span>。</span>
<span class="line">如果数组中的每个值都和上次渲染的时候相同，则整个子树的更新会被跳过。</span>
<span class="line">即使是虚拟 <span class="token constant">DOM</span> 的 VNode 创建也将被跳过，因为子树的记忆副本可以被重用。</span>
<span class="line">因此渲染的速度会非常的快。</span>
<span class="line"><span class="token literal-property property">需要注意得是</span><span class="token operator">:</span>正确地声明记忆数组是很重要。</span>
<span class="line">开发者有责任指定正确的依赖数组，以避免必要的更新被跳过。</span>
<span class="line"><span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in listArr&quot;</span>  <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.id&quot;</span>  v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">&quot;[&#39;valueA&#39;，&#39;valueB&#39;]&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>name   <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">v<span class="token operator">-</span>memod的指令使用较少，它的作用是<span class="token operator">:</span>缓存模板中的一部分数据。</span>
<span class="line">只创建一次，以后就不会再更新了。也就是说用内存换取时间。</span>
<span class="line"></span>
<span class="line">## style v<span class="token operator">-</span>bind将span变成红色</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span> 我是红色 <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>  </span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line">  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span></span>
<span class="line">  span <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 使用v-bind绑定state中的变量 */</span></span>
<span class="line">    <span class="token literal-property property">color</span><span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;state.color&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span>  </span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/vue3/vue3%E7%9A%84setup%E8%AF%AD%E6%B3%95%E7%B3%96.html","title":"vue3的setup语法糖","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"vue3/vue3的setup语法糖.md"}');export{i as comp,r as data};
