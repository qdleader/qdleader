import{_ as e,c as s,a as l,o as i}from"./app-z95KQ9dg.js";const a={};function t(d,n){return i(),s("div",null,n[0]||(n[0]=[l(`<h1 id="d008-dom绑定事件的几种方式★★" tabindex="-1"><a class="header-anchor" href="#d008-dom绑定事件的几种方式★★"><span>D008-DOM绑定事件的几种方式★★</span></a></h1><h2 id="_1-在dom元素中直接绑定" tabindex="-1"><a class="header-anchor" href="#_1-在dom元素中直接绑定"><span>1.在DOM元素中直接绑定</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;input type=&quot;button&quot; onclick=&quot;fn()&quot;/&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">function fn() {</span>
<span class="line">  console.log(&quot;执行方法1&quot;)</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-在js中直接绑定" tabindex="-1"><a class="header-anchor" href="#_2-在js中直接绑定"><span>2.在js中直接绑定</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">document.getElementById(&#39;btn&#39;).onclick = function() {</span>
<span class="line">  console.log(&quot;方法2&quot;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绑定事件监听函数" tabindex="-1"><a class="header-anchor" href="#绑定事件监听函数"><span>绑定事件监听函数</span></a></h2><blockquote><p>事件监听函数addEventListener() 或attachEvent()</p></blockquote><p>事件监听分别定义了三个时间阶段，依次是：捕获阶段，目标阶段，和冒泡阶段</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">element.addEventListener(event, function, useCapture)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">event:(必需)事件名，支持所有的Dom事件。</span>
<span class="line">function:(必需)指定要事件触发时候执行的函数</span>
<span class="line">useCapture:（可选）指定事件是否在捕获或冒泡阶段执行。true，捕获。false，冒泡。默认false。</span>
<span class="line"></span>
<span class="line">element.addEventListener(DOM事件名,事件触发时执行函数,指定是否是冒泡执行 不填时候默认为false false为冒泡)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">document.getElementById(&#39;btn&#39;).addEventListener(&#39;onclick&#39;,&#39;aaa&#39;)</span>
<span class="line"></span>
<span class="line">function aaa() {</span>
<span class="line">  console.log(&#39;123&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ie中，dom事件名必须加on</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">element.attachEvent(&#39;onclick&#39;,aaa)</span>
<span class="line"></span>
<span class="line">function aaa() {</span>
<span class="line">  console.log(&#39;aaaa&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以封装一个通用的就是</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//绑定监听事件</span>
<span class="line">function listen(ele,type,fn) {</span>
<span class="line">  if(ele.addEventListener) {</span>
<span class="line">    ele.addEventListener(type,fn)</span>
<span class="line">  } else {</span>
<span class="line">    ele.attachEvent(&#39;on&#39;+ type,fn)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//解除事件监听</span>
<span class="line">function removeEventHandler(ele,type,fn) {</span>
<span class="line">  if(ele.removeEventListener) {</span>
<span class="line">    ele.removeEventListener(type,fn)</span>
<span class="line">  } else {</span>
<span class="line">    ele.detachEvent(&#39;on&#39; + type,fn)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let btnInput = document.getElementById(&#39;btn&#39;);</span>
<span class="line"></span>
<span class="line">listen(btnInput,&#39;click&#39;,hello1);//添加事件 hello1</span>
<span class="line">listen(btnInput,&#39;click&#39;,hello2);//添加事件 hello2</span>
<span class="line"></span>
<span class="line">removeEventHandler(btnInput,&#39;click&#39;,hello1) //移除事件hello1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我们正常写，然后绑定多个事件时候：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let btn1 = document.getElementById(&#39;btn1&#39;);</span>
<span class="line">btn1.onclick = function() {</span>
<span class="line">  console.log(&#39;hello1&#39;)</span>
<span class="line">}</span>
<span class="line">btn1.onclick = function() {</span>
<span class="line">  console.log(&#39;hello2&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会发现：常规的事件绑定只执行最后绑定的事件。</p><p>所以事件监听的一大优点就是</p><blockquote><p>可以绑定多个事件，并可以解除相应的绑定</p></blockquote><h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托"><span>事件委托</span></a></h2><p>事件委托就是利用冒泡的原理，把事件加到父元素或祖先元素上，触发执行效果。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let btn6 = document.getElementById(&#39;btn6&#39;)</span>
<span class="line">document.onclick = function(event) {</span>
<span class="line">  let event = event || window.event;</span>
<span class="line">  let target = event.target || event.srcElement</span>
<span class="line">  if(target == btn6) {</span>
<span class="line">    alert(&quot;我是按钮6&quot;)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过下面两个例子</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let btn1 = document.getElementById(&#39;btn1&#39;)</span>
<span class="line">let btn2 = document.getElementById(&#39;btn2&#39;)</span>
<span class="line">let btn3 = document.getElementById(&#39;btn3&#39;)</span>
<span class="line"></span>
<span class="line">item1.onclick = function() {</span>
<span class="line">  console.log(&#39;btn1&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">item2.onclick = function() {</span>
<span class="line">  console.log(&#39;btn2&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">item3.onclick = function() {</span>
<span class="line">  console.log(&#39;btn3&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但通过事件委托ne</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let btn1 = document.getElementById(&#39;btn1&#39;)</span>
<span class="line">let btn2 = document.getElementById(&#39;btn2&#39;)</span>
<span class="line">let btn3 = document.getElementById(&#39;btn3&#39;)</span>
<span class="line"></span>
<span class="line">document.addEventListener(&#39;click&#39;,function(event) {</span>
<span class="line">    let target = event.target</span>
<span class="line">    if(target == btn1) {</span>
<span class="line">      console.log(&#39;btn1&#39;)</span>
<span class="line">    } else if(target == btn2) {</span>
<span class="line">        console.log(&#39;btn2&#39;)</span>
<span class="line">    } else if(target == btn3) {</span>
<span class="line">        console.log(&#39;btn3&#39;)</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此呢，得出</p><h2 id="事件委托优点" tabindex="-1"><a class="header-anchor" href="#事件委托优点"><span>事件委托优点</span></a></h2><blockquote><p>1.提高JavaScript性能。事件委托可以显著的提高事件的处理速度，减少内存的占用。</p></blockquote><p>那么还有优点吗？</p><p>看下面这两个例子：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;ul id=&quot;list&quot;&gt;</span>
<span class="line"> &lt;li id=&quot;item1&quot; &gt;item1&lt;/li&gt;</span>
<span class="line"> &lt;li id=&quot;item2&quot; &gt;item2&lt;/li&gt;</span>
<span class="line"> &lt;li id=&quot;item3&quot; &gt;item3&lt;/li&gt;</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">let oUl = document.getElementById(&quot;list&quot;);</span>
<span class="line">let oLi = oUl.getElementsByTagName(&quot;li&quot;);</span>
<span class="line"></span>
<span class="line">for(var i = 0; i &lt; oLi.length; i ++) {</span>
<span class="line">  (function(i) {</span>
<span class="line">    oLi[i].onclick = function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">    }</span>
<span class="line">  }(i))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let newLi = document.createElement(&#39;li&#39;)</span>
<span class="line">let newText = document.createTextNode(&#39;item4&#39;)</span>
<span class="line">newLi.appendChild(newText);</span>
<span class="line">oLi.appendChild(newLi)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会发现点击第四个按钮时候是不生效的。。。</p><p>但你用事件监听写呢</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let oUl = document.getElementById(&quot;list&quot;);</span>
<span class="line"></span>
<span class="line">document.addEventListener(&#39;click&#39;,function(event) {</span>
<span class="line">    let target = event.target;</span>
<span class="line">    if(target == &#39;Li&#39;) {</span>
<span class="line">      console.log(target.innerHTML)</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  let newLi = document.createElement(&#39;li&#39;);</span>
<span class="line">  let newText = document.createTextNode(&#39;item4&#39;);</span>
<span class="line"></span>
<span class="line">  newLi.appendChild(newText)</span>
<span class="line">  oUl.appendChild(newLi)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>item4有事件响应。说明事件委托可以为新添加的DOM元素动态的添加事件。</p><p>所以得出</p><h2 id="事件委托第二个优点" tabindex="-1"><a class="header-anchor" href="#事件委托第二个优点"><span>事件委托第二个优点</span></a></h2><blockquote><p>可以对动态创建的DOM元素进行事件绑定:</p></blockquote>`,39)]))}const p=e(a,[["render",t],["__file","D008-DOM绑定事件的几种方式★★.html.vue"]]),v=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%E6%B1%87%E6%80%BB/D008-DOM%E7%BB%91%E5%AE%9A%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F%E2%98%85%E2%98%85.html","title":"D008-DOM绑定事件的几种方式★★","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.在DOM元素中直接绑定","slug":"_1-在dom元素中直接绑定","link":"#_1-在dom元素中直接绑定","children":[]},{"level":2,"title":"2.在js中直接绑定","slug":"_2-在js中直接绑定","link":"#_2-在js中直接绑定","children":[]},{"level":2,"title":"绑定事件监听函数","slug":"绑定事件监听函数","link":"#绑定事件监听函数","children":[]},{"level":2,"title":"事件委托","slug":"事件委托","link":"#事件委托","children":[]},{"level":2,"title":"事件委托优点","slug":"事件委托优点","link":"#事件委托优点","children":[]},{"level":2,"title":"事件委托第二个优点","slug":"事件委托第二个优点","link":"#事件委托第二个优点","children":[]}],"git":{"updatedTime":1728353169000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"前端面试/js类/常见面试题精选汇总/D008-DOM绑定事件的几种方式★★.md"}');export{p as comp,v as data};
