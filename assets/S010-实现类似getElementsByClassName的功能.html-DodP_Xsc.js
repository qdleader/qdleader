import{_ as e,c as n,a,o as l}from"./app-CJxOrLyD.js";const i={};function t(d,s){return l(),n("div",null,s[0]||(s[0]=[a(`<p>##S010-实现类似getElementsByClassName的功能</p><p>#实现一个函数，查找某个DOM节点下面的包含某个class的所有DOM节点，不允许使用原生的getElementsByClassName</p><p>querySelectorAll等原生提供DOM查找函数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function queryClassName(node, name) {</span>
<span class="line">	var starts = &#39;(^|[ \\n\\r\\t\\f])&#39;,</span>
<span class="line">		ends = &#39;([\\n\\r\\t\\f]|$)&#39;;</span>
<span class="line">		</span>
<span class="line">	var array = [],</span>
<span class="line">	    regex = new RegExp(starts + name + ends),</span>
<span class="line">		elements = node.getElementsByTagName(&quot;*&quot;),</span>
<span class="line">		length = elements.length,</span>
<span class="line">		i = 0,</span>
<span class="line">		element;</span>
<span class="line">	</span>
<span class="line">	while (i &lt; length) {</span>
<span class="line">		element = element[i];</span>
<span class="line">		if(regex.test(element.className)) {</span>
<span class="line">			array.push(element);</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		i += 1;</span>
<span class="line">	}</span>
<span class="line">	return array;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function getAllClassName(attr) {</span>
<span class="line">	let  arr = [];</span>
<span class="line">	let  doms = document.getElementsByTagName(&quot;*&quot;);</span>
<span class="line">	 for(var i = 0; i &lt; doms.length; i ++) {</span>
<span class="line">		 if(doms[i].className == attr || doms[i].className.indexof(attr + &quot; &quot;) != -1 || doms[i].className.indexOf(&quot; &quot; +attr+ &quot; &quot;) != -1) {</span>
<span class="line">			 arr.push(doms[i])</span>
<span class="line">		 }</span>
<span class="line">		 return arr;</span>
<span class="line">	 }</span>
<span class="line">	 </span>
<span class="line">	 var classNames = getAllClass(&#39;ykactive&#39;);</span>
<span class="line">	 for(let i = 0; i &lt; classNames.length; i ++) {</span>
<span class="line">		 classNames[i].style.background= &#39;orange&#39;</span>
<span class="line">	 }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//未完待续。。</p>`,7)]))}const r=e(i,[["render",t]]),m=JSON.parse(`{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S010-%E5%AE%9E%E7%8E%B0%E7%B1%BB%E4%BC%BCgetElementsByClassName%E7%9A%84%E5%8A%9F%E8%83%BD.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1755237773000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"6deb5d76223f5123b8c6a909eb9b48279cf2bc9e","time":1755237773000,"email":"yk4545945@163.com","author":"qdleader","message":"Merge branch 'master' of https://github.com/qdleader/qdleader"}]},"filePathRelative":"常见算法/S010-实现类似getElementsByClassName的功能.md"}`);export{r as comp,m as data};
