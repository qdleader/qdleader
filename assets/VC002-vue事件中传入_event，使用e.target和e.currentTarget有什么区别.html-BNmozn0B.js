import{_ as a,c as n,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function o(l,s){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="vc002-vue-事件中传入-event-使用-e-target-和-e-currenttarget-有什么区别-md" tabindex="-1"><a class="header-anchor" href="#vc002-vue-事件中传入-event-使用-e-target-和-e-currenttarget-有什么区别-md"><span>VC002-vue 事件中传入$event，使用 e.target 和 e.currentTarget 有什么区别.md</span></a></h1><p>currentTarget：事件绑定的元素 target:鼠标触发的元素</p><p>event.currentTarget 指向事件所绑定的元素，而 event.target 始终指向事件发生时的元素。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>select @change<span class="token operator">=</span><span class="token string">&quot;handleChange($event)&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token operator">&gt;</span>选项<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token operator">&gt;</span>选项<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">&quot;3&quot;</span><span class="token operator">&gt;</span>选项<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e.currentTarget（表示不论点击 select 内的哪个元素，都指向绑定的 select 那个元素） e.target （表示指向 select 标签内，鼠标点击的那个元素）</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeColor($event)&quot;</span><span class="token operator">&gt;</span>点击按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 将被点击的按钮背景颜色改为红色</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const c=a(p,[["render",o]]),i=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/%E8%BE%83%E5%86%B7%E7%B1%BB/VC002-vue%E4%BA%8B%E4%BB%B6%E4%B8%AD%E4%BC%A0%E5%85%A5_event%EF%BC%8C%E4%BD%BF%E7%94%A8e.target%E5%92%8Ce.currentTarget%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB.html","title":"VC002-vue 事件中传入$event，使用 e.target 和 e.currentTarget 有什么区别.md","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/vue篇/较冷类/VC002-vue事件中传入$event，使用e.target和e.currentTarget有什么区别.md"}');export{c as comp,i as data};
