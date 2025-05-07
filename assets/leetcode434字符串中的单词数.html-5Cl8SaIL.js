import{_ as n,c as s,a,o as l}from"./app-BKjY4pef.js";const i={};function t(r,e){return l(),s("div",null,e[0]||(e[0]=[a(`<p>统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。</p><p>请注意，你可以假定字符串里不包括任何不可打印的字符。</p><p>示例:</p><p>输入: &quot;Hello, my name is John&quot; 输出: 5 解释: 这里的单词是指连续的不是空格的字符，所以 &quot;Hello,&quot; 算作 1 个单词。</p><p>思路：</p><p>1.首先排除&#39;&#39; 2.排除连续空串情况&#39; &#39; (因为 &#39; &#39;这种你被split(&#39; &#39;)分割成数组时候,会成为[&#39;&#39;,&#39;&#39;,&#39;&#39;]所以把数组中的&#39;&#39;数量去掉就是单词数了)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var countSegments = function(s) {</span>
<span class="line">  if(s == &#39;&#39;) {</span>
<span class="line">    return 0</span>
<span class="line">  }</span>
<span class="line">  let num = 0,arr = s.split(&#39; &#39;)</span>
<span class="line">  for(let i = 0; i &lt; arr.length; i ++) {</span>
<span class="line">    if(arr[i] == &#39;&#39;) {</span>
<span class="line">      num ++;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  return arr.length -num</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const d=n(i,[["render",t]]),p=JSON.parse('{"path":"/leetCode/leetcode434%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%8D%95%E8%AF%8D%E6%95%B0.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1746588582000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"f53a9e30eceb36748e69fb1c3e69f877ff4e0264","time":1746588582000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加cursor vip使用及安装指南"}]},"filePathRelative":"leetCode/leetcode434字符串中的单词数.md"}');export{d as comp,p as data};
