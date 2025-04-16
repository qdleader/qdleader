import{_ as s,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function l(i,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="v001-vue随页面改变title自动改变" tabindex="-1"><a class="header-anchor" href="#v001-vue随页面改变title自动改变"><span>V001-vue随页面改变title自动改变</span></a></h1><p>在 router.js 中需要在每一个路由下面多添加一个 meta:{title:&#39;主页&#39;}，比如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">			 <span class="token punctuation">{</span></span>
<span class="line">	            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Main&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	            <span class="token literal-property property">component</span><span class="token operator">:</span> home</span>
<span class="line">	        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	        <span class="token punctuation">{</span></span>
<span class="line">	            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;首页&#39;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	            <span class="token literal-property property">component</span><span class="token operator">:</span> home</span>
<span class="line">	        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/activity&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;activity&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;分类&#39;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token literal-property property">component</span><span class="token operator">:</span> activity<span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/my&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;my&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;我的&#39;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token literal-property property">component</span><span class="token operator">:</span> my<span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在main-js" tabindex="-1"><a class="header-anchor" href="#在main-js"><span>在main.js</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 路由发生变化修改页面title */</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span>title <span class="token operator">=</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const c=s(e,[["render",l]]),r=JSON.parse('{"path":"/vue/V001-vue%E9%9A%8F%E9%A1%B5%E9%9D%A2%E6%94%B9%E5%8F%98title%E8%87%AA%E5%8A%A8%E6%94%B9%E5%8F%98.html","title":"V001-vue随页面改变title自动改变","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"vue/V001-vue随页面改变title自动改变.md"}');export{c as comp,r as data};
