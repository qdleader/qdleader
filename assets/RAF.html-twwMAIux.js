import{_ as s,c as e,a,o as l}from"./app-D8HvJIFE.js";const i={};function d(c,n){return l(),e("div",null,[...n[0]||(n[0]=[a(`<p>RAF 是 what ？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">RAF 是 HTML5新增的定时器requestAnimationFrame</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>一些关于动画的知识</p><blockquote><p>要想动画流畅，更新频率要60帧/s,即16.67ms</p></blockquote><blockquote><p>setTimeout 要手动控制频率，而RAF浏览器会自动控制</p></blockquote><blockquote><p>后台标签或隐藏在iframe中，RAF 会暂停， 而setTimeout依然可以执行</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//settimeout 写法</span>
<span class="line">let oDiv = document.getElementById(&#39;oDiv&#39;);</span>
<span class="line"></span>
<span class="line">let cWidth = 100;</span>
<span class="line">let maxWidth = 500;</span>
<span class="line"></span>
<span class="line">function animate() {</span>
<span class="line">  let cWidth = cWidth + 3;</span>
<span class="line">  oDiv.style.width = cWidth;</span>
<span class="line">  if(cWidth &lt; maxWidth) {</span>
<span class="line">    setTimeout(aminmate,16.7)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">animate()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setTimeout 时间需要自己调整，调整不好会有卡顿。。</p><p>RAF会自动匹配浏览器最流畅模式。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// RAF</span>
<span class="line">let oDiv = document.getElementById(&#39;oDiv&#39;);</span>
<span class="line"></span>
<span class="line">let cWidth = 100;</span>
<span class="line">let maxWidth = 500;</span>
<span class="line"></span>
<span class="line">function animate() {</span>
<span class="line">  let cWidth = cWidth + 3;</span>
<span class="line">  oDiv.style.width = cWidth;</span>
<span class="line">  if(cWidth &lt; maxWidth) {</span>
<span class="line">    window.requestAnimationFrame(animate)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">animate()</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有关RAF的面试题</p><p>用js实现一个无限循环的动画。</p><p>定时器 写法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let e = document.getElementById(&#39;e&#39;);</span>
<span class="line">let flag = true;</span>
<span class="line">let left = 0;</span>
<span class="line"></span>
<span class="line">function render() {</span>
<span class="line">  if(flag) {</span>
<span class="line">    if(left &gt;= 100) {</span>
<span class="line">      flag = false</span>
<span class="line">    }</span>
<span class="line">    e.style.left = \`\${left++}px\`</span>
<span class="line">  } else {</span>
<span class="line">    if(left &lt;= 0) {</span>
<span class="line">      flag = true</span>
<span class="line">    }</span>
<span class="line">    e.style.left = \`\${left --}px\`</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">setInterval(function() {</span>
<span class="line">    render()</span>
<span class="line">},1000/6)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RAF 写法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let e = document.getElementById(&#39;e&#39;);</span>
<span class="line">let flag = true;</span>
<span class="line">let left = 0;</span>
<span class="line"></span>
<span class="line">function render() {</span>
<span class="line">  if(flag) {</span>
<span class="line">    if(left &gt;= 100) {</span>
<span class="line">      flag = false</span>
<span class="line">    }</span>
<span class="line">    e.style.left = \`\${left++}px\`</span>
<span class="line">  } else {</span>
<span class="line">    if(left &lt;= 0) {</span>
<span class="line">      flag = true</span>
<span class="line">    }</span>
<span class="line">    e.style.left = \`\${left --}px\`</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">(function loop() {</span>
<span class="line">  render()</span>
<span class="line">  window.requestAnimationFrame(loop)</span>
<span class="line">})()</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##requestAnimationFrame 比起 setTimeout、setInterval的优势</p><blockquote><p>1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。 2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。</p></blockquote><p>1、怎么停止requestAnimationFrame？是否有类似clearInterval这样的类似方法？</p><p>第一个问题：答案是确定的 必须有：cancelAnimationFrame()接收一个参数 requestAnimationFrame默认返回一个id，cancelAnimationFrame只需要传入这个id就可以停止了。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">let e = document.getElementById(&#39;e&#39;);</span>
<span class="line">let flag = true;</span>
<span class="line">let left = 0;</span>
<span class="line"></span>
<span class="line">function render() {</span>
<span class="line">  if(flag) {</span>
<span class="line">    if(left &gt;= 100) {</span>
<span class="line">      flag = false</span>
<span class="line">    }</span>
<span class="line">    e.style.left = \`\${left++}px\`</span>
<span class="line">  } else {</span>
<span class="line">    if(left &lt;= 0) {</span>
<span class="line">      flag = true</span>
<span class="line">    }</span>
<span class="line">    e.style.left = \`\${left --}px\`</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">(function animloop() {</span>
<span class="line">     render();</span>
<span class="line">     rafId = window.requestAnimationFrame(animloop);</span>
<span class="line">     //如果left等于50 停止动画</span>
<span class="line">     if(left == 50){</span>
<span class="line">         window.cancelAnimationFrame(rafId)</span>
<span class="line">     }</span>
<span class="line"> })();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容"><span>兼容</span></a></h2><blockquote><p>主流浏览器都支持 requestAnimationFrame ，但是有的仍需前缀。写本文的时候，加前缀的情况如下：</p></blockquote><blockquote><p>Opera: Opera 15 以后无前缀 Chrome: Chrome 24+ 无前缀 Safari: 有前缀 Firefox: 有前缀，Firefox 23+ 无前缀 IE: IE 10 以后无前缀</p></blockquote>`,24)])])}const t=s(i,[["render",d]]),r=JSON.parse('{"path":"/%E4%B8%8D%E5%8F%AF%E4%B8%8D%E7%9F%A5%E7%9A%84%E9%A1%B9%E7%9B%AE%E5%86%B7%E7%9F%A5%E8%AF%86/RAF.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"不可不知的项目冷知识/RAF.md"}');export{t as comp,r as data};
