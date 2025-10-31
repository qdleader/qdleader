import{_ as s,c as a,a as e,o as l}from"./app-D8HvJIFE.js";const p={};function i(c,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="e005-执行打印005" tabindex="-1"><a class="header-anchor" href="#e005-执行打印005"><span>e005-执行打印005</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;D&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;E&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;G&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;G2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;H&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 同步代码</span></span>
<span class="line"><span class="token constant">D</span></span>
<span class="line"><span class="token constant">A</span></span>
<span class="line"><span class="token constant">C</span></span>
<span class="line"><span class="token constant">F</span></span>
<span class="line"><span class="token constant">H</span></span>
<span class="line"><span class="token comment">//微任务执行</span></span>
<span class="line"><span class="token constant">B</span></span>
<span class="line"><span class="token keyword">undefined</span></span>
<span class="line"><span class="token comment">// 宏任务执行</span></span>
<span class="line"><span class="token constant">E</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;D&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;E&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;G&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;G2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;H&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-1" tabindex="-1"><a class="header-anchor" href="#答案-1"><span>答案</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 同步代码</span></span>
<span class="line"><span class="token constant">D</span></span>
<span class="line"><span class="token constant">A</span></span>
<span class="line"><span class="token constant">C</span></span>
<span class="line"><span class="token constant">F</span></span>
<span class="line"><span class="token constant">H</span></span>
<span class="line"><span class="token comment">//微任务执行</span></span>
<span class="line"><span class="token constant">B</span></span>
<span class="line"><span class="token constant">G</span></span>
<span class="line"><span class="token keyword">undefined</span></span>
<span class="line"><span class="token comment">// 宏任务执行</span></span>
<span class="line"><span class="token constant">E</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3"><span>3</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">setTimeout(function () {</span>
<span class="line">  console.log(&quot;1&quot;);</span>
<span class="line">}, 0);</span>
<span class="line">async function async1() {</span>
<span class="line">  console.log(&quot;2&quot;);</span>
<span class="line">  const data = await async2();</span>
<span class="line">  console.log(&quot;3&quot;);</span>
<span class="line">  return data;</span>
<span class="line">}</span>
<span class="line">async function async2() {</span>
<span class="line">  return new Promise((resolve) =&gt; {</span>
<span class="line">    console.log(&quot;4&quot;);</span>
<span class="line">    resolve(&quot;async2的结果&quot;);</span>
<span class="line">  }).then((data) =&gt; {</span>
<span class="line">    console.log(&quot;5&quot;);</span>
<span class="line">    return data;</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">async1().then((data) =&gt; {</span>
<span class="line">  console.log(&quot;6&quot;);</span>
<span class="line">  console.log(data);</span>
<span class="line">});</span>
<span class="line">new Promise(function (resolve) {</span>
<span class="line">  console.log(&quot;7&quot;);</span>
<span class="line">  // resolve()</span>
<span class="line">}).then(function () {</span>
<span class="line">  console.log(&quot;8&quot;);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意8那的 // resolve() 注掉了</p><p>输出</p><p>247536 async2 的结果 1</p><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4"><span>4.</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">setTimeout(function () {</span>
<span class="line">  console.log(&quot;1&quot;);</span>
<span class="line">}, 0);</span>
<span class="line">async function async1() {</span>
<span class="line">  console.log(&quot;2&quot;);</span>
<span class="line">  const data = await async2();</span>
<span class="line">  console.log(&quot;3&quot;);</span>
<span class="line">  return data;</span>
<span class="line">}</span>
<span class="line">async function async2() {</span>
<span class="line">  return new Promise((resolve) =&gt; {</span>
<span class="line">    console.log(&quot;4&quot;);</span>
<span class="line">    resolve(&quot;async2的结果&quot;);</span>
<span class="line">  }).then((data) =&gt; {</span>
<span class="line">    console.log(&quot;5&quot;);</span>
<span class="line">    return data;</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">async1().then((data) =&gt; {</span>
<span class="line">  console.log(&quot;6&quot;);</span>
<span class="line">  console.log(data);</span>
<span class="line">});</span>
<span class="line">new Promise(function (resolve) {</span>
<span class="line">  console.log(&quot;7&quot;);</span>
<span class="line">   resolve()</span>
<span class="line">}).then(function () {</span>
<span class="line">  console.log(&quot;8&quot;);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><p>2475836 async2 的结果 1</p>`,16)])])}const o=s(p,[["render",i]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/eventLoop%E7%B1%BB/e005-%E6%89%A7%E8%A1%8C%E6%89%93%E5%8D%B0005.html","title":"e005-执行打印005","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"前端面试/js类/eventLoop类/e005-执行打印005.md"}');export{o as comp,u as data};
