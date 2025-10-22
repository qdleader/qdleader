import{_ as n,c as a,a as e,o as l}from"./app-mEp1Kw32.js";const i={};function t(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<p>#s004-字符串中出现最多的字母？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function findMax(str) {</span>
<span class="line">	if(str.length == 1) {</span>
<span class="line">		return str;</span>
<span class="line">	}</span>
<span class="line">	let charObj = {};</span>
<span class="line">	for(let i = 0; i &lt; str.length; i ++) {</span>
<span class="line">		if(!charObj[str.charAt(i)]) {</span>
<span class="line">			charObj[str.charAt(i)] = 1;</span>
<span class="line">		} else {</span>
<span class="line">			charObj[str.charAt(i)] += 1;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	let maxChar = &#39;&#39;;</span>
<span class="line">	maxValue = 1;</span>
<span class="line">	for(var k in charObj) {</span>
<span class="line">		if(charObj[k] &gt;= maxValue) {</span>
<span class="line">			maxChar = k;</span>
<span class="line">			maxValue = charObj[k];</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return maxChar;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>module.exports = findMax</p>`,3)])])}const d=n(i,[["render",t]]),p=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S004%E7%BB%9F%E8%AE%A1%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%87%BA%E7%8E%B0%E6%9C%80%E5%A4%9A%E7%9A%84%E5%AD%97%E6%AF%8D.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761095462000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"679ba4f13fc41cff739ba094d48cda21a5daff13","time":1761095462000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(tool): 添加色块识别游戏设计文档，包含关卡、页面结构、计分系统等详细需求"}]},"filePathRelative":"常见算法/S004统计一个字符串出现最多的字母.md"}');export{d as comp,p as data};
