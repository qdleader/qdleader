import{_ as n,c as a,a as e,o as l}from"./app-DFnxdJ0h.js";const c={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="伪类和伪元素区别" tabindex="-1"><a class="header-anchor" href="#伪类和伪元素区别"><span>伪类和伪元素区别</span></a></h1><p>伪类是用于向选择器指定特殊状态的关键词，如:hover、:active、:first-child等。</p><p>伪元素是用于向选择器添加生成的内容的关键词，如::before、::after、::first-line等。伪元素表示的是元素的特定部分或位置，允许开发者在指定元素的前后、内部的第一行等位置插入虚拟的元素。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结:</span></a></h2><p>伪类是以冒号作为前缀,被添加到了一个选择器末尾的关键字,当你希望在特定状态才被呈现到指定的元素时,你可以添加伪类. 伪元素用于创建一些不再文档书中的元素,并为其添加样式,虽然用户可以看见文本,但文本不在文档树中.</p><h2 id="区别-他们是否创建了新元素" tabindex="-1"><a class="header-anchor" href="#区别-他们是否创建了新元素"><span>区别:他们是否创建了新元素</span></a></h2><blockquote><p>伪类是通过元素选择器加入伪类改变元素状态 伪元素通过元素的操作进行元素的改变</p></blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span>#000<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.div:hover</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token property">color</span><span class="token punctuation">:</span>red</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.div::after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;haha&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const o=n(c,[["render",p]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/css%E7%B1%BB/%E4%BC%AA%E7%B1%BB%E5%92%8C%E4%BC%AA%E5%85%83%E7%B4%A0%E5%8C%BA%E5%88%AB.html","title":"伪类和伪元素区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/css类/伪类和伪元素区别.md"}');export{o as comp,r as data};
