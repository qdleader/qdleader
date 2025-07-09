import{_ as n,c as a,a as e,o as i}from"./app-C-PIe5GM.js";const l={};function t(r,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>#s004-字符串中出现最多的字母？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function findMax(str) {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>module.exports = findMax</p>`,3)]))}const d=n(l,[["render",t]]),p=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S004%E7%BB%9F%E8%AE%A1%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%87%BA%E7%8E%B0%E6%9C%80%E5%A4%9A%E7%9A%84%E5%AD%97%E6%AF%8D.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752024824000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"09b8c9c8ada68b61d7ad3afa473ae10bdbf30f27","time":1752024824000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(Vue): 详细说明Vue 2/3响应式原理及示例"}]},"filePathRelative":"常见算法/S004统计一个字符串出现最多的字母.md"}');export{d as comp,p as data};
