import{_ as s,c as e,a,o as i}from"./app-ChbYw63X.js";const l={};function t(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="javascript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件" tabindex="-1"><a class="header-anchor" href="#javascript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件"><span>JavaScript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;div id=&#39;div1&#39;&gt;</span>
<span class="line">  &lt;div id=&#39;div2&#39;&gt;</span>
<span class="line">    &lt;div id=&#39;div3&#39;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">div1.οnclick=function(){</span>
<span class="line">	alert(&quot;div1&quot;)</span>
<span class="line">}</span>
<span class="line">div2.οnclick=function(){</span>
<span class="line">	alert(&quot;div2&quot;)</span>
<span class="line">}</span>
<span class="line">div3.οnclick=function(){</span>
<span class="line">	alert(&quot;div3&quot;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当单击中间的div3时，先后弹出div3, div2, div1，此为事件冒泡的过程。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">div1.addEventListener(&#39;click&#39;,function(obj){</span>
<span class="line">	alert(&quot;div1&quot;)</span>
<span class="line">},true);//如果未false则为事件冒泡，不填的话，默认false</span>
<span class="line">div2.addEventListener(&#39;click&#39;,function(obj){</span>
<span class="line">	alert(&quot;div2&quot;)</span>
<span class="line">},true);</span>
<span class="line">div3.addEventListener(&#39;click&#39;,function(obj){</span>
<span class="line">	alert(&quot;div3&quot;)</span>
<span class="line">},true);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里将第三个参数设为true，指定事件处理机制为事件捕获。此时再次单击div3时，会依次弹出div1, div2, div3</p><p>顺序是由外到里。</p><p>而IE中只有事件冒泡，且没有addEventListener事件，取而代之的是attachEvent。</p><h1 id="阻止冒泡方法1" tabindex="-1"><a class="header-anchor" href="#阻止冒泡方法1"><span>阻止冒泡方法1</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function stopBubble(event) {</span>
<span class="line">	if(window.event) {</span>
<span class="line">		window.event.cancelBubble = true</span>
<span class="line">	} else {</span>
<span class="line">		event.stopPropagation()</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="方法2不阻止-直接判断当前点击的是那个元素-不推荐" tabindex="-1"><a class="header-anchor" href="#方法2不阻止-直接判断当前点击的是那个元素-不推荐"><span>方法2不阻止，直接判断当前点击的是那个元素（不推荐）</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">window.onload = function() {</span>
<span class="line">	document.getElementById(&quot;div1&quot;).addEventListener(&quot;click&quot;, function() {</span>
<span class="line">		if(event.target == event.currentTarget) {</span>
<span class="line">			console.log(&quot;我是div1被点击了&quot;)</span>
<span class="line">		}</span>
<span class="line">	})</span>
<span class="line">	document.getElementById(&quot;div2&quot;).addEventListener(&quot;click&quot;, function() {</span>
<span class="line">		if(event.target == event.currentTarget) {</span>
<span class="line">			console.log(&quot;我是div2被点击了&quot;)</span>
<span class="line">		}</span>
<span class="line">	})</span>
<span class="line">	document.getElementById(&quot;div3&quot;).addEventListener(&quot;click&quot;, function() {</span>
<span class="line">		if(event.target == event.currentTarget) {</span>
<span class="line">			console.log(&quot;我是div3被点击了&quot;)</span>
<span class="line">		}</span>
<span class="line">	})</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="方法3-div1下面的所有都在这里统一处理" tabindex="-1"><a class="header-anchor" href="#方法3-div1下面的所有都在这里统一处理"><span>方法3 div1下面的所有都在这里统一处理</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">window.onload = function() {</span>
<span class="line">	document.getElementById(&quot;div&quot;).addEventListener(&quot;click&quot;, function() {</span>
<span class="line">		let eTarget = event.target;</span>
<span class="line">		switch(eTarget.id) {</span>
<span class="line">			case &quot;div1&quot;:</span>
<span class="line">			console.log(&quot;点击的div1&quot;)</span>
<span class="line">			break;</span>
<span class="line">			</span>
<span class="line">			case &quot;div2&quot;:</span>
<span class="line">			console.log(&quot;点击的div2&quot;)</span>
<span class="line">			break;</span>
<span class="line">			</span>
<span class="line">			case &quot;div3&quot;:</span>
<span class="line">			console.log(&quot;点击的div3&quot;)</span>
<span class="line">			break;</span>
<span class="line">		}</span>
<span class="line">		event.stopPropagation()</span>
<span class="line">	})</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>其实这种元素本身触发事件，但是事件执行的方法不在元素本身，而是在其父元素的某个节点上，这种“偷懒”的模式，叫做事件委托。</p></blockquote><h1 id="拓展-阻止默认事件" tabindex="-1"><a class="header-anchor" href="#拓展-阻止默认事件"><span>拓展 (阻止默认事件)</span></a></h1><blockquote><p>像submit这类的表单元素，都会绑定默认事件，如果不阻止默认事件，则绑定的其他方法也会无效。使用方法如下（兼容IE）：</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function stopDefaultEvent(event) {</span>
<span class="line">	if(window.event) {</span>
<span class="line">		window.event.returnValue = false</span>
<span class="line">	} else {</span>
<span class="line">		event.preventDefault()</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const v=s(l,[["render",t]]),r=JSON.parse('{"path":"/js%E5%8E%9F%E7%94%9F/JavaScript%E4%B8%AD%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7%E5%92%8C%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E9%98%BB%E6%AD%A2%E5%86%92%E6%B3%A1%E4%BA%8B%E4%BB%B6%E5%92%8C%E9%BB%98%E8%AE%A4%E4%BA%8B%E4%BB%B6%EF%BC%88%E5%81%8F%E5%9F%BA%E7%A1%80%EF%BC%89.html","title":"JavaScript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1743991208000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"06ae3da64ec05c046ab6f8fcadaec095931d7383","time":1743991208000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加chat表格样式修改解决方案"}]},"filePathRelative":"js原生/JavaScript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件（偏基础）.md"}');export{v as comp,r as data};
