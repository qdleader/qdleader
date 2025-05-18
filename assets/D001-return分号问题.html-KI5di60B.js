import{_ as s,c as e,a,o as i}from"./app-CKfc45Zi.js";const l={};function t(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="d001-return分号问题" tabindex="-1"><a class="header-anchor" href="#d001-return分号问题"><span>D001-return分号问题</span></a></h1><h2 id="_001" tabindex="-1"><a class="header-anchor" href="#_001"><span>001</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function foo1() {</span>
<span class="line">	return {</span>
<span class="line">		bar: 1234</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function foo2() {</span>
<span class="line">	return </span>
<span class="line">	{</span>
<span class="line">		bar: 4567</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">console.log(foo1());</span>
<span class="line">console.log(foo2());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Object</span>
<span class="line"></span>
<span class="line">undefined</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//         foo2()就等价于</span>
<span class="line">// 			function foo2() {</span>
<span class="line">// 				return;</span>
<span class="line">// 				{</span>
<span class="line">// 					bar:456</span>
<span class="line">// 				}</span>
<span class="line">// 			}</span>
<span class="line">// 			在js中,一句独占一行会默认给加个分号(;),所以直接return就退出了.所以返回object 和undefined over</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=s(l,[["render",t]]),p=JSON.parse(`{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%E6%B1%87%E6%80%BB/D001-return%E5%88%86%E5%8F%B7%E9%97%AE%E9%A2%98.html","title":"D001-return分号问题","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1747530378000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"35946fb0727bfe016751f2fe179132b69c4f3fda","time":1747530378000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"前端面试/js类/常见面试题精选汇总/D001-return分号问题.md"}`);export{c as comp,p as data};
