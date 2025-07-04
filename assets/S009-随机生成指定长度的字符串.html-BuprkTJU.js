import{_ as s,c as e,a,o as l}from"./app-B--KPTI1.js";const i={};function t(r,n){return l(),e("div",null,n[0]||(n[0]=[a(`<p>##S009-随机生成指定长度的字符串</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function randomString(n) {</span>
<span class="line">	let str = &#39;abcdefghijklmnopqrstuvwxyz9876543210&#39;</span>
<span class="line">	let tmp = &#39;&#39;,</span>
<span class="line">	i = 0,</span>
<span class="line">	l = str.length;</span>
<span class="line">	for(i = 0; i &lt; n; i ++) {</span>
<span class="line">		tmp += str.charAt(Math.floor(Math.random()* l));</span>
<span class="line">	}</span>
<span class="line">	return tmp;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">module.exports = randomString;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(i,[["render",t]]),m=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S009-%E9%9A%8F%E6%9C%BA%E7%94%9F%E6%88%90%E6%8C%87%E5%AE%9A%E9%95%BF%E5%BA%A6%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751593802000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ed7ece53189e584b32f934a400de1f057911f25","time":1751593802000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(es6): 添加ES2025模式匹配文档示例"}]},"filePathRelative":"常见算法/S009-随机生成指定长度的字符串.md"}');export{c as comp,m as data};
