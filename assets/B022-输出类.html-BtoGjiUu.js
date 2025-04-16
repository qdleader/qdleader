import{_ as n,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const t={};function l(c,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="输出类" tabindex="-1"><a class="header-anchor" href="#输出类"><span>输出类</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">[</span><span class="token operator">++</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">.</span>a<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> values <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">[</span>values<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">obj<span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//此时的obj</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token number">1</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>++a 和 a++ 的操作，学过 c 语言的都知道，他们都是对 a 自增 1，不同的是 a++ 返回的是自增前的结果，++a 返回的是自增后的结果</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">//由于 obj.a 为 0 翻译过来也就是</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//这里需要注意的，代码从左往右执行，最后赋值表达式在最后，那时候才是右边结果赋值给左侧</span></span>
<span class="line"><span class="token comment">// obj[++a] = a++  也就是，从左往右翻译表达式 obj[1] = 1</span></span>
<span class="line">obj<span class="token punctuation">[</span><span class="token operator">++</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">.</span>a<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//此时的obj</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token number">1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Object.values 罗列 values 内容，并且按照前面说的按照数字类型升序，其他按照添加顺序排列</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> values <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//参考上一步结果，下面则可以翻译为 obj[2] = 2</span></span>
<span class="line">obj<span class="token punctuation">[</span>values<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//此时的obj</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token number">1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">2</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此最后一行的结果就是</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//打印结果就是 obj 的对象，按照指定规则排列打印就是它了</span></span>
<span class="line"><span class="token comment">//由于数字这里也只能表示字符串，js打印结果还专门标出来引号怕被误解</span></span>
<span class="line"><span class="token punctuation">{</span> <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;2&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const i=n(t,[["render",l]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B022-%E8%BE%93%E5%87%BA%E7%B1%BB.html","title":"输出类","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/变量类/B022-输出类.md"}');export{i as comp,u as data};
