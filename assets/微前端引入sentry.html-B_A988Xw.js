import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="微前端-引入-sentry" tabindex="-1"><a class="header-anchor" href="#微前端-引入-sentry"><span>微前端 引入 sentry</span></a></h1><h2 id="主应用中" tabindex="-1"><a class="header-anchor" href="#主应用中"><span>主应用中</span></a></h2><p>main.ts</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code class="language-typescript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> sentryInitForVueSubApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./sentry.ts&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Sentry <span class="token keyword">from</span> <span class="token string">&quot;@sentry/vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> loadingInstance<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_SENTRY_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;prod&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  Sentry<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    app<span class="token punctuation">,</span></span>
<span class="line">    dsn<span class="token operator">:</span> <span class="token string">&quot;https://396bcb150b5e2838b08d0fe9b7b4ab8b@sentry.myserver.cn/2&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    integrations<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// Sentry.browserTracingIntegration(),</span></span>
<span class="line">      <span class="token comment">// Sentry.replayIntegration(),</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// Performance Monitoring</span></span>
<span class="line">    tracesSampleRate<span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// 禁用性能监控</span></span>
<span class="line">    autoSessionTracking<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">// 禁用会话录制</span></span>
<span class="line">    <span class="token comment">// Set &#39;tracePropagationTargets&#39; to control for which URLs distributed tracing should be enabled</span></span>
<span class="line">    <span class="token comment">// tracePropagationTargets: [&quot;localhost&quot;, /^https:\\/\\/yourserver\\.io\\/api/],</span></span>
<span class="line">    <span class="token comment">// // Session Replay</span></span>
<span class="line">    replaysSessionSampleRate<span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// 禁用会话回放采样</span></span>
<span class="line">    replaysOnErrorSampleRate<span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// 禁用错误会话回放采样</span></span>
<span class="line">    <span class="token comment">// beforeSend() {</span></span>
<span class="line">    <span class="token comment">//   const currentRoute = router.currentRoute</span></span>
<span class="line">    <span class="token comment">//   console.error(&quot;currentRoute&quot;, currentRoute.value)</span></span>
<span class="line">    <span class="token comment">//   return null</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token comment">// app name registered</span></span>
<span class="line">    entry<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_ADMIN_WEB</span><span class="token punctuation">,</span></span>
<span class="line">    container<span class="token operator">:</span> <span class="token string">&#39;#micro-app1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    activeRule<span class="token operator">:</span> <span class="token string">&#39;/rock-app1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    props<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      sentryInit<span class="token operator">:</span> sentryInitForVueSubApp<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sentry.ts</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code class="language-typescript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> attachErrorHandler<span class="token punctuation">,</span> createTracingMixins <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@sentry/vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> *  app用于传入Vue或者Vue示例</span>
<span class="line"> *  options用于传入子应用的sentry配置</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sentryInitForVueSubApp</span><span class="token punctuation">(</span>app<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// attachErrorHandler中，sentry会获取app.config.errorHandler进行处理</span></span>
<span class="line">  <span class="token function">attachErrorHandler</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;tracesSampleRate&quot;</span> <span class="token keyword">in</span> options <span class="token operator">||</span> <span class="token string">&quot;tracesSampler&quot;</span> <span class="token keyword">in</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token comment">// createTracingMixins用于在event中追加关于vue的信息，例如从抛出错误的组件到根组件形成的组件轨迹等</span></span>
<span class="line">      <span class="token comment">// 即使一个页面用了多个相同的组件，这种信息也能让我们快速定位错误抛自哪个组件实例上</span></span>
<span class="line">      <span class="token function">createTracingMixins</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>options<span class="token punctuation">,</span></span>
<span class="line">        <span class="token operator">...</span>options<span class="token punctuation">.</span>tracingOptions<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子应用" tabindex="-1"><a class="header-anchor" href="#子应用"><span>子应用</span></a></h2><p>main.ts</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code class="language-typescript"><span class="line"></span>
<span class="line"><span class="token keyword">let</span> instance<span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">    container<span class="token punctuation">,</span></span>
<span class="line">    onGlobalStateChange<span class="token punctuation">,</span></span>
<span class="line">    setGlobalState<span class="token punctuation">,</span></span>
<span class="line">    offGlobalStateChange<span class="token punctuation">,</span></span>
<span class="line">    sentryInit</span>
<span class="line">  <span class="token punctuation">}</span> <span class="token operator">=</span> props</span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 挂载路由</span></span>
<span class="line">  router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    routes<span class="token punctuation">,</span></span>
<span class="line">    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__ <span class="token operator">?</span> <span class="token string">&quot;/rock-app1&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 注册APP实例</span></span>
<span class="line">  instance <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  instance<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span></span>
<span class="line">  instance<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_SENTRY_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;prod&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    sentryInit<span class="token operator">?.</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      tracesSampleRate<span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// 禁用性能监控</span></span>
<span class="line">      autoSessionTracking<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 禁用会话录制</span></span>
<span class="line">      replaysSessionSampleRate<span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// 禁用会话回放采样</span></span>
<span class="line">      replaysOnErrorSampleRate<span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// 禁用错误会话回放采样</span></span>
<span class="line">      logErrors<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      attachProps<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  instance<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>container <span class="token operator">?</span> container<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 独立运行时</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)])])}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/%E7%9B%91%E6%8E%A7%E5%91%8A%E8%AD%A6/sentry/%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%BC%95%E5%85%A5sentry.html","title":"微前端 引入 sentry","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"监控告警/sentry/微前端引入sentry.md"}');export{o as comp,u as data};
