import{_ as s,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function o(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="v005-vue中-nexttick使用★★★" tabindex="-1"><a class="header-anchor" href="#v005-vue中-nexttick使用★★★"><span>V005-vue中$nextTick使用★★★</span></a></h1><p>this.$nextTick 会在所有的dom都加载完毕后，才执行。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">  <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>qdleader<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="这里打印" tabindex="-1"><a class="header-anchor" href="#这里打印"><span>这里打印</span></a></h2><p>undefined</p><p>qdleader</p><ol start="2"><li></li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>h1 ref<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;danger&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;get&quot;</span><span class="token operator">&gt;</span>点击<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;qdleader&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;你好啊&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打印" tabindex="-1"><a class="header-anchor" href="#打印"><span>打印</span></a></h2><p>qdleader 和 你好呀</p><blockquote><p>在方法里直接打印的话， 由于dom元素还没有更新， 因此打印出来的还是未改变之前的值，而通过this.$nextTick()获取到的值为dom更新之后的值</p></blockquote><p>nextTick 实现原理 将传入的回调函数包装成异步任务，异步任务又分微任务和宏任务，为了尽快执行所以优先选择微任务； nextTick 提供了四种异步方法 Promise.then、MutationObserver、setImmediate、setTimeOut(fn,0)</p><p>// 判断当前环境优先支持的异步方法，优先选择微任务 // 优先级：Promise---&gt; MutationObserver---&gt; setImmediate---&gt; setTimeout // setTimeOut 最小延迟也要4ms，而 setImmediate 会在主线程执行完后立刻执行</p><p>先判断是否原生支持promise，如果支持，则利用promise来触发执行回调函数； 否则，如果支持MutationObserver，则实例化一个观察者对象，观察文本节点发生变化时，触发执行所有回调函数。MutationObserver他能监听一个DOM对象上发生的子节点删除、属性修改、文本内容修改等。 如果都不支持，则利用setTimeout设置延时为0。</p>`,14)]))}const i=s(e,[["render",o]]),u=JSON.parse('{"path":"/vue/V005-vue%E4%B8%AD_nextTick%E4%BD%BF%E7%94%A8%E2%98%85%E2%98%85%E2%98%85.html","title":"V005-vue中$nextTick使用★★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"vue/V005-vue中$nextTick使用★★★.md"}');export{i as comp,u as data};
