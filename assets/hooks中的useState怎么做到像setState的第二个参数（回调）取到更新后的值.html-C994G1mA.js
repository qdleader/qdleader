import{_ as n,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function o(c,s){return t(),a("div",null,s[0]||(s[0]=[p(`<h1 id="hooks中的usestate怎么做到像setstate的第二个参数-回调-取到更新后的值" tabindex="-1"><a class="header-anchor" href="#hooks中的usestate怎么做到像setstate的第二个参数-回调-取到更新后的值"><span>hooks中的useState怎么做到像setState的第二个参数（回调）取到更新后的值</span></a></h1><h2 id="自定hook方式" tabindex="-1"><a class="header-anchor" href="#自定hook方式"><span>自定hook方式</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token comment">// 使用自定义hook结合useState，模拟class组件的setState的第二个参数-回调函数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useSimulationCbWithUseStateCustom</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">initState</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> setNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initState<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> cbRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">cbFc</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setNum</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span></span>
<span class="line">    cbRef<span class="token punctuation">.</span>current <span class="token operator">=</span> cbFc</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">typeof</span> cbRef<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> cbRef<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span></span>
<span class="line">    cbRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> setState<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">SimulationCbWithUseStateCustom</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> setNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSimulationCbWithUseStateCustom</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">addNumCustom</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setNum</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">res</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;faith=============&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      SimulationCbWithUseStateCustom模式</span>
<span class="line">      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span>addNumCustom<span class="token punctuation">}</span><span class="token operator">&gt;</span>addNum<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>num<span class="token operator">:</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> SimulationCbWithUseStateCustom</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise结合usestate实现" tabindex="-1"><a class="header-anchor" href="#promise结合usestate实现"><span>Promise结合useState实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token comment">// 使用promise结合useState，模拟class组件的setState的第二个参数-回调函数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">SimulationCbWithUseState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> setNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">addNum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setNum</span><span class="token punctuation">(</span><span class="token parameter">preNum</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">resolve</span><span class="token punctuation">(</span>preNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> preNum <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;faith=============&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      SimulationCbWithUseStatePromise模式</span>
<span class="line">      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span>addNum<span class="token punctuation">}</span><span class="token operator">&gt;</span>addNum<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>num<span class="token operator">:</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> SimulationCbWithUseState</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const i=n(e,[["render",o]]),u=JSON.parse('{"path":"/react/hooks/hooks%E4%B8%AD%E7%9A%84useState%E6%80%8E%E4%B9%88%E5%81%9A%E5%88%B0%E5%83%8FsetState%E7%9A%84%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%88%E5%9B%9E%E8%B0%83%EF%BC%89%E5%8F%96%E5%88%B0%E6%9B%B4%E6%96%B0%E5%90%8E%E7%9A%84%E5%80%BC.html","title":"hooks中的useState怎么做到像setState的第二个参数（回调）取到更新后的值","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"react/hooks/hooks中的useState怎么做到像setState的第二个参数（回调）取到更新后的值.md"}');export{i as comp,u as data};
