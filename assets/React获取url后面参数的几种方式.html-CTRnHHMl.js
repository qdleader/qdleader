import{_ as s,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const t={};function c(o,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="react获取url后面参数的几种方式" tabindex="-1"><a class="header-anchor" href="#react获取url后面参数的几种方式"><span>React获取url后面参数的几种方式</span></a></h1><h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1"><span>1</span></a></h2><p>使用 window.location.search 获取 URL 中的查询字符串，然后使用 JavaScript 内置的 URLSearchParams 对象来解析查询字符串。例如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> search <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">;</span> <span class="token comment">// 获取 URL 中的查询字符串，如 &quot;?foo=bar&quot;</span></span>
<span class="line"><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用 URLSearchParams 解析查询字符串</span></span>
<span class="line"><span class="token keyword">const</span> foo <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取参数 &quot;foo&quot; 的值</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2"><span>2</span></a></h2><p>使用 react-router 的 useParams hook 来获取路由中的参数。例如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取路由中的 &quot;id&quot; 参数</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3"><span>3</span></a></h2><p>使用 react-router 的 withRouter 高阶组件来获取路由信息。例如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> withRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> search <span class="token operator">=</span> props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">;</span> <span class="token comment">// 获取 URL 中的查询字符串</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4"><span>4</span></a></h2><p>split 方法</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> str <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">const</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> key <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">const</span> val <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">      res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token comment">// 解码</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> res</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 测试</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/s?ie=UTF-8&amp;wd=%7B%20user%3A%20%27qdleader%27,%20age%3A%20%2718%27%20%7D&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com?user=%E9%98%BF%E9%A12123%9E&amp;age=18&#39;</span><span class="token punctuation">)</span> <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token comment">// { user: &#39;qdleader&#39;, age: &#39;18&#39; }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,14)]))}const i=s(t,[["render",c]]),u=JSON.parse('{"path":"/react/%E5%9F%BA%E7%A1%80%E7%B1%BB/React%E8%8E%B7%E5%8F%96url%E5%90%8E%E9%9D%A2%E5%8F%82%E6%95%B0%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"React获取url后面参数的几种方式","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"react/基础类/React获取url后面参数的几种方式.md"}');export{i as comp,u as data};
