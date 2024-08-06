import{_ as n,c as s,o as e,a}from"./app-Bul2w5Pu.js";const i={},l=a(`<h1 id="d001-return分号问题" tabindex="-1"><a class="header-anchor" href="#d001-return分号问题"><span>D001-return分号问题</span></a></h1><h2 id="_001" tabindex="-1"><a class="header-anchor" href="#_001"><span>001</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function foo1() {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Object</span>
<span class="line"></span>
<span class="line">undefined</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//         foo2()就等价于</span>
<span class="line">// 			function foo2() {</span>
<span class="line">// 				return;</span>
<span class="line">// 				{</span>
<span class="line">// 					bar:456</span>
<span class="line">// 				}</span>
<span class="line">// 			}</span>
<span class="line">// 			在js中,一句独占一行会默认给加个分号(;),所以直接return就退出了.所以返回object 和undefined over</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function d(r,c){return e(),s("div",null,t)}const u=n(i,[["render",d],["__file","D001-return分号问题.html.vue"]]),v=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%E6%B1%87%E6%80%BB/D001-return%E5%88%86%E5%8F%B7%E9%97%AE%E9%A2%98.html","title":"D001-return分号问题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"001","slug":"_001","link":"#_001","children":[]}],"git":{"updatedTime":1722912902000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"前端面试/js类/常见面试题精选汇总/D001-return分号问题.md"}');export{u as comp,v as data};
