import{_ as s,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const t={};function l(c,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="v004-vue中watch的详细用法" tabindex="-1"><a class="header-anchor" href="#v004-vue中watch的详细用法"><span>V004-vue中watch的详细用法</span></a></h1><p>####中watch的详细用法：</p><p>##watch:常规用法1</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;uerName&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">userName</span><span class="token operator">:</span><span class="token string">&#39;qdleader&#39;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">userName</span><span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//...</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以写一个监听处理函数， 当每次监听到 cityName 值发生改变时，执行函数。也可以在所监听的数据后面直接加字符串形式的方法名：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&#39;nameChange&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这样使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。</p></blockquote><p>因此当我门在子组件props首次获取父组件传过来的默认值时候，需要立即执行一次函数，这就引出第二种immediate</p><p>##2.immediate和handler</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">userName</span><span class="token operator">:</span><span class="token string">&#39;qdleader&#39;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">userName</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">//..</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler。</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-deep" tabindex="-1"><a class="header-anchor" href="#_3-deep"><span>3.deep</span></a></h2><p>还有很多时候，我们是要监听对象某一属性变化的，这时候就可以用deep</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">userInfo</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;qdleader&#39;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">handler</span> <span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">//...</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有个不太好的地方。虽然设置了deep：true，我们可以坚挺到userInfo.name的变化。但是此时会给userinfo的所有属性都加上这个监听器，当对象属性较多时，每个属性值的变化都会执行handler。如果只需要监听对象中的一个属性值，则可以做以下优化：使用字符串的形式监听对象属性：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token string-property property">&#39;userInfo.name&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">handler</span> <span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">//...</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同学问了，监听对象属性还有没有别的方法呢？</p><p>别着急呀！</p><p>监听对象属性computed也可以帮帮忙的。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>name</span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">getName</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token function-variable function">handler</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">//do something</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//延伸。。 监听路由变化：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;$route.path&#39;</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//console.log(newVal+&quot;---&quot;+oldVal);</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>newVal <span class="token operator">===</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;欢迎进入登录页面&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>newVal <span class="token operator">===</span> <span class="token string">&#39;/register&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;欢迎进入注册页面&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line">或者：</span>
<span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">$route</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const o=s(t,[["render",l]]),r=JSON.parse('{"path":"/vue/V004-vue%E4%B8%ADwatch%E7%9A%84%E8%AF%A6%E7%BB%86%E7%94%A8%E6%B3%95.html","title":"V004-vue中watch的详细用法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"vue/V004-vue中watch的详细用法.md"}');export{o as comp,r as data};
