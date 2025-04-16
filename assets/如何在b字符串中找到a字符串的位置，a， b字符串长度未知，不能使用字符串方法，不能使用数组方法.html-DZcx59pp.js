import{_ as s,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function c(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="如何在b字符串中找到a字符串的位置-a-b字符串长度未知-不能使用字符串方法-不能使用数组方法★" tabindex="-1"><a class="header-anchor" href="#如何在b字符串中找到a字符串的位置-a-b字符串长度未知-不能使用字符串方法-不能使用数组方法★"><span>如何在b字符串中找到a字符串的位置，a， b字符串长度未知，不能使用字符串方法，不能使用数组方法★</span></a></h1><p>思路: 如果不能使用字符串的相应方法，我们可以把字符串转换成数组，使用递归函数不断去比对相应的数组索引，然后把满足条件的索引打印出来</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&quot;gsvcxqdleaderusdcvdaqdleadersjcvdgcvhsdc&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">&#39;qdleader&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> arr1 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> arr2 <span class="token operator">=</span> str2<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">function</span> <span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">==</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> num<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;索引是：&quot;</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          num <span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token function">findIndex</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token function">findIndex</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">test</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const i=s(e,[["render",c]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%85%B6%E4%BB%96%E7%B1%BB/%E5%A6%82%E4%BD%95%E5%9C%A8b%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E6%89%BE%E5%88%B0a%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E4%BD%8D%E7%BD%AE%EF%BC%8Ca%EF%BC%8C%20b%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6%E6%9C%AA%E7%9F%A5%EF%BC%8C%E4%B8%8D%E8%83%BD%E4%BD%BF%E7%94%A8%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%96%B9%E6%B3%95%EF%BC%8C%E4%B8%8D%E8%83%BD%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95.html","title":"如何在b字符串中找到a字符串的位置，a， b字符串长度未知，不能使用字符串方法，不能使用数组方法★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/其他类/如何在b字符串中找到a字符串的位置，a， b字符串长度未知，不能使用字符串方法，不能使用数组方法.md"}');export{i as comp,u as data};
