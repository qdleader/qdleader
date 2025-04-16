import{_ as s,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const t={};function c(l,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="s002-数字转化为逗号金钱格式★" tabindex="-1"><a class="header-anchor" href="#s002-数字转化为逗号金钱格式★"><span>S002-数字转化为逗号金钱格式★</span></a></h1><h2 id="将数字12345678转化成rmb形式-12-345-678" tabindex="-1"><a class="header-anchor" href="#将数字12345678转化成rmb形式-12-345-678"><span>将数字12345678转化成RMB形式：12,345,678</span></a></h2><p>思路：将字符串切割成数组再反转，遍历数组，加入辅助数组，当数组长度为3的倍数，再向辅助数组加入 &quot;,&quot;。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"></span>
<span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;131243512361&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">num</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> con <span class="token operator">=</span> newArr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> con<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>con<span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> newArr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">num</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-正则版" tabindex="-1"><a class="header-anchor" href="#_2-正则版"><span>2 正则版</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function formatNumber(str) {</span>
<span class="line">  return str.replace(/\\B(?=(\\d{3})+(?!\\d))/g, &#39;,&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">console.log(formatNumber(&quot;1234567890&quot;)) // 1,234,567,890</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面简单分析下正则/\\B(?=(\\d{3})+(?!\\d))/g：</p><p>/\\B(?=(\\d{3})+(?!\\d))/g：正则匹配边界\\B，边界后面必须跟着(\\d{3})+(?!\\d); (\\d{3})+：必须是1个或多个的3个连续数字; (?!\\d)：第2步中的3个数字不允许后面跟着数字; (\\d{3})+(?!\\d)：所以匹配的边界后面必须跟着3*n（n&gt;=1）的数字。 最终把匹配到的所有边界换成,即可达成目标。</p><h2 id="_3-tolocalestring" tabindex="-1"><a class="header-anchor" href="#_3-tolocalestring"><span>3 toLocaleString</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">(123456789).toLocaleString(&#39;en-US&#39;)  // 1,234,567,890</span>
<span class="line"></span>
<span class="line">(123456789).toLocaleString()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const i=s(t,[["render",c]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%89%8B%E5%86%99%E7%B1%BB/S002-%E6%95%B0%E5%AD%97%E8%BD%AC%E5%8C%96%E4%B8%BA%E9%80%97%E5%8F%B7%E9%87%91%E9%92%B1%E6%A0%BC%E5%BC%8F%E2%98%85.html","title":"S002-数字转化为逗号金钱格式★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/手写类/S002-数字转化为逗号金钱格式★.md"}');export{i as comp,u as data};
