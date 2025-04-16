import{_ as s,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const t={};function o(l,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="s010-手写深度比较" tabindex="-1"><a class="header-anchor" href="#s010-手写深度比较"><span>s010-手写深度比较</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 1.判断是不是引用类型，不是引用</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> obj1 <span class="token operator">===</span> obj2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 2.比较是否为同一个内存地址</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 3.比较 key 的数量</span></span>
<span class="line">    <span class="token keyword">const</span> obj1KeysLength <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> obj2KeysLength <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1KeysLength <span class="token operator">!==</span> obj2KeysLength<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 4.比较 value 的值</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj1<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const i=s(t,[["render",o]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%89%8B%E5%86%99%E7%B1%BB/s010-%E6%89%8B%E5%86%99%E6%B7%B1%E5%BA%A6%E6%AF%94%E8%BE%83.html","title":"s010-手写深度比较","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/手写类/s010-手写深度比较.md"}');export{i as comp,u as data};
