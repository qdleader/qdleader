import{_ as s,c as a,a as t,o as e}from"./app-BJH5QZKa.js";const p={};function l(c,n){return e(),a("div",null,n[0]||(n[0]=[t(`<h1 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate"><span>useState</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> <span class="token function-variable function">do1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;qdleader&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		<span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是更改后的的name&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token keyword">return</span> name<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	</span>
<span class="line"></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我还是更改前的name&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">		</span>
<span class="line">				<span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>do1<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token number">1111</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">		</span>
<span class="line">	<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(p,[["render",l],["__file","useState.html.vue"]]),u=JSON.parse('{"path":"/react/hooks/%E5%9F%BA%E7%A1%80%E7%B1%BB/useState.html","title":"useState","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1736904811000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"react/hooks/基础类/useState.md"}');export{o as comp,u as data};