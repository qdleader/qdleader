import{_ as n,c as a,a as t,o as e}from"./app-DFnxdJ0h.js";const p={};function o(c,s){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="object-groupby" tabindex="-1"><a class="header-anchor" href="#object-groupby"><span>Object.groupBy()</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> students <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token string">&quot;B&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Charlie&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;David&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> studentsByGrade <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">groupBy</span><span class="token punctuation">(</span>students<span class="token punctuation">,</span> <span class="token parameter">student</span> <span class="token operator">=&gt;</span> student<span class="token punctuation">.</span>grade<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>studentsByGrade<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 输出：</span></span>
<span class="line"><span class="token comment">// {</span></span>
<span class="line"><span class="token comment">//   A: [{ name: &quot;Alice&quot;, grade: &quot;A&quot; }, { name: &quot;Charlie&quot;, grade: &quot;A&quot; }],</span></span>
<span class="line"><span class="token comment">//   B: [{ name: &quot;Bob&quot;, grade: &quot;B&quot; }],</span></span>
<span class="line"><span class="token comment">//   C: [{ name: &quot;David&quot;, grade: &quot;C&quot; }]</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(p,[["render",o]]),i=JSON.parse('{"path":"/es6/es2024/Object.groupBy().html","title":"Object.groupBy()","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"es6/es2024/Object.groupBy().md"}');export{r as comp,i as data};
