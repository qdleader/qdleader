import{_ as n,c as e,a,o as i}from"./app-DbHRFhcj.js";const l={};function r(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>#S001-判断一个单词是否是回文？ 回文是指把相同的词汇或句子，在上下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。比如redivider</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function checkPalindrom(str) {</span>
<span class="line">	return str == str.split(&#39;&#39;).reverse().join(&#39;&#39;);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 去掉代码中空格</span>
<span class="line">function checkPalindrom(str) {</span>
<span class="line">  str = str.replace(/\\W/g, &#39;&#39;).toLowerCase();</span>
<span class="line">  return (str == str.split(&#39;&#39;).reverse().join(&#39;&#39;));</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#方法2：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">思路：将单词换成字符串A，从后往前循环字符串A，将循环出来的字符拼接成新的字符串B，比较字符串A和B，得出结论。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">function isPalindrome(x) {</span>
<span class="line">	let str = x + &#39;&#39;;</span>
<span class="line">	let newStr = &#39;&#39;;</span>
<span class="line">	for(let i = str.length - 1; i &gt;= 0; i --) {</span>
<span class="line">		newStr += str[i]</span>
<span class="line">	}</span>
<span class="line">	return newStr === str;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#方法3：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 以中间数为节点，判断左右两边首尾是否相等</span>
<span class="line"> * @param {number} x</span>
<span class="line"> * @return {boolean}</span>
<span class="line"> */</span>
<span class="line">function isPalindrome(x) {</span>
<span class="line">  x = &#39;&#39; + x</span>
<span class="line">  for(let i = 0 ; i &lt; x.length/2; i++) {</span>
<span class="line">    if (x[i] !== x[x.length - i - 1]) {</span>
<span class="line">      return false</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  return true</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=n(l,[["render",r]]),p=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S001-%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E5%8D%95%E8%AF%8D%E6%98%AF%E5%90%A6%E5%9B%9E%E6%96%87.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751247917000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c36011f17d8589a9dd4d62d0fd57f0287349de37","time":1751247917000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(css): 添加关于:is()和:where()选择器的文档"}]},"filePathRelative":"常见算法/S001-判断一个单词是否回文.md"}');export{c as comp,p as data};
