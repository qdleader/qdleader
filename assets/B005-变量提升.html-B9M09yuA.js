import{_ as n,c as s,a,o as i}from"./app-DFnxdJ0h.js";const l={};function r(t,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="b005-变量提升" tabindex="-1"><a class="header-anchor" href="#b005-变量提升"><span>B005-变量提升</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var b =1;</span>
<span class="line">function outer() {</span>
<span class="line">	var b = 2</span>
<span class="line">	function inner() {</span>
<span class="line">		b++;</span>
<span class="line">		var b = 3;</span>
<span class="line">		console.log(b)</span>
<span class="line">	}</span>
<span class="line">	inner()</span>
<span class="line">}</span>
<span class="line">outer()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h1><p>首先执行outer(),因为outer 里面的b是重新声明并被赋值的，这里的b为2，</p><p>然后走里面的inner方法，由于inner 里面也有个b的声明所以这里面的b跟外面的b是两回事了。就等价于</p><p>function inner() { var b; // 此时b为undefined b ++; // 此时b为NaN b = 3 // 此时b为3 }</p>`,8)]))}const c=n(l,[["render",r]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B005-%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87.html","title":"B005-变量提升","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/变量类/B005-变量提升.md"}');export{c as comp,p as data};
