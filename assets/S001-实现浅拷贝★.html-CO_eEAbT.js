import{_ as a,c as s,a as n,o as i}from"./app-BIm5By0_.js";const l={};function t(c,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h1 id="s001-实现浅拷贝★" tabindex="-1"><a class="header-anchor" href="#s001-实现浅拷贝★"><span>S001-实现浅拷贝★</span></a></h1><h2 id="_01-实现浅拷贝" tabindex="-1"><a class="header-anchor" href="#_01-实现浅拷贝"><span>01.实现浅拷贝</span></a></h2><p>如果一个变量复制一个对象，那么两者的值会是同一个引用，其中一个改变，另一方也会相应改变。针对引用类型我们需要实现数据的拷贝。</p><p>1.用...实现</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const copy = {...{x:1}}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-用oject-assign-实现" tabindex="-1"><a class="header-anchor" href="#_2-用oject-assign-实现"><span>2.用Oject.assign 实现</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const copy = Object.assign({},{x:1})</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展运算符跟Object.assign({},obj)是一样的，对于对象中的值修改，是深拷贝，而里面的对象则是浅拷贝</p><p>但是呢</p><p>Object.assign(obj) 这么写就是单纯的引用了，无论里面是值还是对象</p><h2 id="_3-用slice-或concat-实现" tabindex="-1"><a class="header-anchor" href="#_3-用slice-或concat-实现"><span>3.用slice(或concat([]))实现</span></a></h2><pre><code>\`\`\`
let arr = [1,3,{
	x:1
}]
let copy = arr.slice();
\`\`\`
</code></pre><p>数组中的值的变化是，深拷贝，对象变化就是浅拷贝同1，2</p><h2 id="_4-新建对象-循环添加" tabindex="-1"><a class="header-anchor" href="#_4-新建对象-循环添加"><span>4.新建对象，循环添加</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">	let obj2 = {}</span>
<span class="line">	for(let key in obj){</span>
<span class="line">			obj2[key] = obj[key]</span>
<span class="line">	}</span>
<span class="line">	obj2.name = &#39;CCC&#39;</span>
<span class="line"></span>
<span class="line">	\`\`\`</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const r=a(l,[["render",t]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%89%8B%E5%86%99%E7%B1%BB/S001-%E5%AE%9E%E7%8E%B0%E6%B5%85%E6%8B%B7%E8%B4%9D%E2%98%85.html","title":"S001-实现浅拷贝★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1753148857000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"ac1cf3212b41ab3aca8f411ac8167254f5e148f8","time":1753148857000,"email":"yk4545945@163.com","author":"qdleader","message":"feat: 增加复制文案的兼容写法"}]},"filePathRelative":"前端面试/js类/手写类/S001-实现浅拷贝★.md"}');export{r as comp,p as data};
