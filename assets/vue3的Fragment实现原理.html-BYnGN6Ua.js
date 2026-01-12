import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="vue3的fragment实现原理" tabindex="-1"><a class="header-anchor" href="#vue3的fragment实现原理"><span>vue3的Fragment实现原理</span></a></h1><p>在 Vue 2 中，每个组件必须有一个根元素。而在 Vue 3 中，引入了 Fragment 特性，允许组件具有多个根节点。这为开发人员提供了更多灵活性，简化了组件模板的结构。</p><h2 id="vue3支持多个根节点-通过fragment来实现-原理比较容易" tabindex="-1"><a class="header-anchor" href="#vue3支持多个根节点-通过fragment来实现-原理比较容易"><span>Vue3支持多个根节点，通过Fragment来实现，原理比较容易</span></a></h2><p>我们用一个Fragment容器来渲染多个节点</p><h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h3><ol><li>首先，在runtime-core模块中的vnode.ts里文件里新加一个类型Fragment</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> Fragment <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;v-fgt&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> any <span class="token keyword">as</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">__isFragment</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">$props</span><span class="token operator">:</span> VNodeProps</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>那么我在调runtime-core中的在我们调用render方法时，又会走到patch方法里，</li><li>如果老的虚拟节点不存在，那么就是创建操作，否则就走更新流程</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">  <span class="token keyword">const</span> <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token function-variable function">RootRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> namespace</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">unmount</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span></span>
<span class="line">        container<span class="token punctuation">.</span>_vnode <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">        vnode<span class="token punctuation">,</span></span>
<span class="line">        container<span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">        namespace<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    container<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isFlushing<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      isFlushing <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token function">flushPreFlushCbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">flushPostFlushCbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      isFlushing <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>走到patch 方法里</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">  <span class="token keyword">const</span> <span class="token literal-property property">patch</span><span class="token operator">:</span> <span class="token function-variable function">PatchFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token parameter">n1<span class="token punctuation">,</span></span>
<span class="line">    n2<span class="token punctuation">,</span></span>
<span class="line">    container<span class="token punctuation">,</span></span>
<span class="line">    anchor <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    parentComponent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    parentSuspense <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    namespace <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">    slotScopeIds <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    optimized <span class="token operator">=</span> __DEV__ <span class="token operator">&amp;&amp;</span> isHmrUpdating <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>n2<span class="token punctuation">.</span>dynamicChildren<span class="token punctuation">,</span></span></span>
<span class="line">  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">===</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// patching &amp; not same type, unmount old tree</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isSameVNodeType</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      anchor <span class="token operator">=</span> <span class="token function">getNextHostNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">      n1 <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>patchFlag <span class="token operator">===</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">BAIL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      optimized <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">      n2<span class="token punctuation">.</span>dynamicChildren <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> shapeFlag <span class="token punctuation">}</span> <span class="token operator">=</span> n2</span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token literal-property property">Text</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">processText</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token literal-property property">Comment</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">processCommentNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token literal-property property">Static</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">mountStaticNode</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> namespace<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">patchStaticNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> namespace<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token literal-property property">Fragment</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">processFragment</span><span class="token punctuation">(</span></span>
<span class="line">          n1<span class="token punctuation">,</span></span>
<span class="line">          n2<span class="token punctuation">,</span></span>
<span class="line">          container<span class="token punctuation">,</span></span>
<span class="line">          anchor<span class="token punctuation">,</span></span>
<span class="line">          parentComponent<span class="token punctuation">,</span></span>
<span class="line">          parentSuspense<span class="token punctuation">,</span></span>
<span class="line">          namespace<span class="token punctuation">,</span></span>
<span class="line">          slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">          optimized<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">processElement</span><span class="token punctuation">(</span></span>
<span class="line">            n1<span class="token punctuation">,</span></span>
<span class="line">            n2<span class="token punctuation">,</span></span>
<span class="line">            container<span class="token punctuation">,</span></span>
<span class="line">            anchor<span class="token punctuation">,</span></span>
<span class="line">            parentComponent<span class="token punctuation">,</span></span>
<span class="line">            parentSuspense<span class="token punctuation">,</span></span>
<span class="line">            namespace<span class="token punctuation">,</span></span>
<span class="line">            slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">            optimized<span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">processComponent</span><span class="token punctuation">(</span></span>
<span class="line">            n1<span class="token punctuation">,</span></span>
<span class="line">            n2<span class="token punctuation">,</span></span>
<span class="line">            container<span class="token punctuation">,</span></span>
<span class="line">            anchor<span class="token punctuation">,</span></span>
<span class="line">            parentComponent<span class="token punctuation">,</span></span>
<span class="line">            parentSuspense<span class="token punctuation">,</span></span>
<span class="line">            namespace<span class="token punctuation">,</span></span>
<span class="line">            slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">            optimized<span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token punctuation">;</span><span class="token punctuation">(</span>type <span class="token keyword">as</span> <span class="token keyword">typeof</span> TeleportImpl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span></span>
<span class="line">            n1 <span class="token keyword">as</span> TeleportVNode<span class="token punctuation">,</span></span>
<span class="line">            n2 <span class="token keyword">as</span> TeleportVNode<span class="token punctuation">,</span></span>
<span class="line">            container<span class="token punctuation">,</span></span>
<span class="line">            anchor<span class="token punctuation">,</span></span>
<span class="line">            parentComponent<span class="token punctuation">,</span></span>
<span class="line">            parentSuspense<span class="token punctuation">,</span></span>
<span class="line">            namespace<span class="token punctuation">,</span></span>
<span class="line">            slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">            optimized<span class="token punctuation">,</span></span>
<span class="line">            internals<span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token punctuation">;</span><span class="token punctuation">(</span>type <span class="token keyword">as</span> <span class="token keyword">typeof</span> SuspenseImpl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span></span>
<span class="line">            n1<span class="token punctuation">,</span></span>
<span class="line">            n2<span class="token punctuation">,</span></span>
<span class="line">            container<span class="token punctuation">,</span></span>
<span class="line">            anchor<span class="token punctuation">,</span></span>
<span class="line">            parentComponent<span class="token punctuation">,</span></span>
<span class="line">            parentSuspense<span class="token punctuation">,</span></span>
<span class="line">            namespace<span class="token punctuation">,</span></span>
<span class="line">            slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">            optimized<span class="token punctuation">,</span></span>
<span class="line">            internals<span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid VNode type:&#39;</span><span class="token punctuation">,</span> type<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">typeof</span> type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// set ref</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> parentComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setRef</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>ref<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> n2 <span class="token operator">||</span> n1<span class="token punctuation">,</span> <span class="token operator">!</span>n2<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在patch里我们增加一个Fragment类型的判断 命中Fragment类型后，我们写一个processFragment方法来进行处理</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">     <span class="token keyword">case</span> <span class="token literal-property property">Fragment</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">processFragment</span><span class="token punctuation">(</span></span>
<span class="line">          n1<span class="token punctuation">,</span></span>
<span class="line">          n2<span class="token punctuation">,</span></span>
<span class="line">          container<span class="token punctuation">,</span></span>
<span class="line">          anchor<span class="token punctuation">,</span></span>
<span class="line">          parentComponent<span class="token punctuation">,</span></span>
<span class="line">          parentSuspense<span class="token punctuation">,</span></span>
<span class="line">          namespace<span class="token punctuation">,</span></span>
<span class="line">          slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">          optimized<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>processFragment方法</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">processFragment</span> <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token parameter"><span class="token literal-property property">n1</span><span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">n2</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">container</span><span class="token operator">:</span> RendererElement<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">anchor</span><span class="token operator">:</span> RendererNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">parentSuspense</span><span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">namespace</span><span class="token operator">:</span> ElementNamespace<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">slotScopeIds</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">optimized</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span></span>
<span class="line">  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> fragmentStartAnchor <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1 <span class="token operator">?</span> n1<span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token function">hostCreateText</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">    <span class="token keyword">const</span> fragmentEndAnchor <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>anchor <span class="token operator">=</span> n1 <span class="token operator">?</span> n1<span class="token punctuation">.</span>anchor <span class="token operator">:</span> <span class="token function">hostCreateText</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> patchFlag<span class="token punctuation">,</span> dynamicChildren<span class="token punctuation">,</span> <span class="token literal-property property">slotScopeIds</span><span class="token operator">:</span> fragmentSlotScopeIds <span class="token punctuation">}</span> <span class="token operator">=</span> n2</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span></span>
<span class="line">      __DEV__ <span class="token operator">&amp;&amp;</span></span>
<span class="line">      <span class="token comment">// #5523 dev root fragment may inherit directives</span></span>
<span class="line">      <span class="token punctuation">(</span>isHmrUpdating <span class="token operator">||</span> patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">DEV_ROOT_FRAGMENT</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// HMR updated / Dev root fragment (w/ comments), force full diff</span></span>
<span class="line">      patchFlag <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">      optimized <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">      dynamicChildren <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// check if this is a slot fragment with :slotted scope ids</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>fragmentSlotScopeIds<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      slotScopeIds <span class="token operator">=</span> slotScopeIds</span>
<span class="line">        <span class="token operator">?</span> slotScopeIds<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>fragmentSlotScopeIds<span class="token punctuation">)</span></span>
<span class="line">        <span class="token operator">:</span> fragmentSlotScopeIds</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//如果老的虚拟节点为null，那么我们就把新虚拟节点里的children挂载到容器中</span></span>
<span class="line">      <span class="token function">hostInsert</span><span class="token punctuation">(</span>fragmentStartAnchor<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">hostInsert</span><span class="token punctuation">(</span>fragmentEndAnchor<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// a fragment can only have array children</span></span>
<span class="line">      <span class="token comment">// since they are either generated by the compiler, or implicitly created</span></span>
<span class="line">      <span class="token comment">// from arrays.</span></span>
<span class="line">      <span class="token function">mountChildren</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token comment">// #10007</span></span>
<span class="line">        <span class="token comment">// such fragment like \`&lt;&gt;&lt;/&gt;\` will be compiled into</span></span>
<span class="line">        <span class="token comment">// a fragment which doesn&#39;t have a children.</span></span>
<span class="line">        <span class="token comment">// In this case fallback to an empty array</span></span>
<span class="line">        <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">as</span> VNodeArrayChildren<span class="token punctuation">,</span></span>
<span class="line">        container<span class="token punctuation">,</span></span>
<span class="line">        fragmentEndAnchor<span class="token punctuation">,</span></span>
<span class="line">        parentComponent<span class="token punctuation">,</span></span>
<span class="line">        parentSuspense<span class="token punctuation">,</span></span>
<span class="line">        namespace<span class="token punctuation">,</span></span>
<span class="line">        slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">        optimized<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span></span>
<span class="line">        patchFlag <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span></span>
<span class="line">        patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">STABLE_FRAGMENT</span> <span class="token operator">&amp;&amp;</span></span>
<span class="line">        dynamicChildren <span class="token operator">&amp;&amp;</span></span>
<span class="line">        <span class="token comment">// #2715 the previous fragment could&#39;ve been a BAILed one as a result</span></span>
<span class="line">        <span class="token comment">// of renderSlot() with no valid children</span></span>
<span class="line">        n1<span class="token punctuation">.</span>dynamicChildren</span>
<span class="line">      <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// a stable fragment (template root or &lt;template v-for&gt;) doesn&#39;t need to</span></span>
<span class="line">        <span class="token comment">// patch children order, but it may contain dynamicChildren.</span></span>
<span class="line">        <span class="token function">patchBlockChildren</span><span class="token punctuation">(</span></span>
<span class="line">          n1<span class="token punctuation">.</span>dynamicChildren<span class="token punctuation">,</span></span>
<span class="line">          dynamicChildren<span class="token punctuation">,</span></span>
<span class="line">          container<span class="token punctuation">,</span></span>
<span class="line">          parentComponent<span class="token punctuation">,</span></span>
<span class="line">          parentSuspense<span class="token punctuation">,</span></span>
<span class="line">          namespace<span class="token punctuation">,</span></span>
<span class="line">          slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// necessary for HMR</span></span>
<span class="line">          <span class="token function">traverseStaticChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token comment">// #2080 if the stable fragment has a key, it&#39;s a &lt;template v-for&gt; that may</span></span>
<span class="line">          <span class="token comment">//  get moved around. Make sure all root level vnodes inherit el.</span></span>
<span class="line">          <span class="token comment">// #2134 or if it&#39;s a component root, it may also get moved around</span></span>
<span class="line">          <span class="token comment">// as the component is being moved.</span></span>
<span class="line">          n2<span class="token punctuation">.</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span></span>
<span class="line">          <span class="token punctuation">(</span>parentComponent <span class="token operator">&amp;&amp;</span> n2 <span class="token operator">===</span> parentComponent<span class="token punctuation">.</span>subTree<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">traverseStaticChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* shallow */</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// keyed / unkeyed, or manual fragments.</span></span>
<span class="line">        <span class="token comment">// for keyed &amp; unkeyed, since they are compiler generated from v-for,</span></span>
<span class="line">        <span class="token comment">// each child is guaranteed to be a block so the fragment will never</span></span>
<span class="line">        <span class="token comment">// have dynamicChildren.</span></span>
<span class="line">        <span class="token function">patchChildren</span><span class="token punctuation">(</span></span>
<span class="line">          n1<span class="token punctuation">,</span></span>
<span class="line">          n2<span class="token punctuation">,</span></span>
<span class="line">          container<span class="token punctuation">,</span></span>
<span class="line">          fragmentEndAnchor<span class="token punctuation">,</span></span>
<span class="line">          parentComponent<span class="token punctuation">,</span></span>
<span class="line">          parentSuspense<span class="token punctuation">,</span></span>
<span class="line">          namespace<span class="token punctuation">,</span></span>
<span class="line">          slotScopeIds<span class="token punctuation">,</span></span>
<span class="line">          optimized<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">)</span> <span class="token comment">// ，走的是diff算法</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果老的虚拟节点为null，那么我们就把新虚拟节点里的children挂载到容器中 否则我们就对比新老虚拟节点的children，走的是diff算法</p><p>Fragment的原理比较简单，其实底层就是新增加了一个类型，用一个函数去处理初始挂载或diff更新。</p><p>在 Vue3 的编译过程中，如果组件的模板存在多个节点，Vue3 会将这些节点放入一个片段中，然后作为组件的根节点。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>Vue3 之所以能够支持多节点的 Fragment，是因为在内部采用了 Virtual DOM 和片段的机制。Vue3 会将多个节点放入一个片段中，然后作为组件的根节点进行 Virtual DOM 操作。使用片段的方式，可以方便地处理多节点的情况，并提高渲染效率</p><blockquote><p>实际 DOM 更新时遵循单个根元素规则： 虽然 Vue 3 允许组件具有多个根节点，但在实际的 DOM 结构中，每个组件仍然需要遵循单个根元素的规则。因此，在将虚拟 DOM 更新到实际的 DOM 时，Vue 会确保每个组件的多个根节点都被插入到正确的位置，且符合 DOM 规范。</p></blockquote><h4 id="fragment-的优点" tabindex="-1"><a class="header-anchor" href="#fragment-的优点"><span>Fragment 的优点</span></a></h4><p>通过这种方式，Vue 3 的 Fragment 实现了对多个根节点的支持，同时保持了与 DOM 规范的兼容性。这使得开发人员能够编写更简洁、灵活的组件模板，提高了组件的可维护性和可读性。</p>`,23)])])}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue3%E7%AF%87/vue3%E7%9A%84Fragment%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html","title":"vue3的Fragment实现原理","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/vue3篇/vue3的Fragment实现原理.md"}');export{o as comp,u as data};
