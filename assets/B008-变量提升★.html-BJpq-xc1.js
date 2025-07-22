import{_ as s,c as a,a as e,o as i}from"./app-BIm5By0_.js";const l={};function c(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="b008-变量提升★" tabindex="-1"><a class="header-anchor" href="#b008-变量提升★"><span>B008-变量提升★</span></a></h1><h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1"><span>1</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function a() {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">var a;</span>
<span class="line">console.log(typeof a);  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><p>function a() {}</p><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2"><span>2</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var c = 1;</span>
<span class="line">function c(c) {</span>
<span class="line">    console.log(c);</span>
<span class="line">}</span>
<span class="line">c(2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-1" tabindex="-1"><a class="header-anchor" href="#答案-1"><span>答案</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">报错 c is not a function</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> function fn(a,c) {</span>
<span class="line">     console.log(a)</span>
<span class="line">     var a= 123;</span>
<span class="line">     console.log(a)</span>
<span class="line">     console.log(c)</span>
<span class="line"></span>
<span class="line"> }</span>
<span class="line">fn(1,2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-2" tabindex="-1"><a class="header-anchor" href="#答案-2"><span>答案：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">1</span>
<span class="line">123</span>
<span class="line">2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化时候a 为undefined，传入参数a为1，a就为1了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script&gt;</span>
<span class="line">   function fn(a,c) {</span>
<span class="line">    console.log(a)</span>
<span class="line">    var a= 123;</span>
<span class="line">    console.log(a)</span>
<span class="line">    console.log(c)</span>
<span class="line"></span>
<span class="line">    function a() {}</span>
<span class="line"></span>
<span class="line">    if(false) {</span>
<span class="line">        var d = 678</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    console.log(d)</span>
<span class="line">    console.log(b)</span>
<span class="line"></span>
<span class="line">    var b = function() {};</span>
<span class="line"></span>
<span class="line">    console.log(b)</span>
<span class="line"></span>
<span class="line">    function c() {}</span>
<span class="line">    console.log(c)</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">fn(1,2)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输出：</span>
<span class="line">function a() {}</span>
<span class="line">123</span>
<span class="line">function c() {}</span>
<span class="line">undefined</span>
<span class="line">undefined</span>
<span class="line">function () {}</span>
<span class="line">function c() {}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入参数a为1，但是下面有个函数a,函数会把之前的覆盖因此，打印a时候就是 function a() {</p><p>}</p>`,17)]))}const p=s(l,[["render",c]]),t=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B008-%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87%E2%98%85.html","title":"B008-变量提升★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1753148857000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"ac1cf3212b41ab3aca8f411ac8167254f5e148f8","time":1753148857000,"email":"yk4545945@163.com","author":"qdleader","message":"feat: 增加复制文案的兼容写法"}]},"filePathRelative":"前端面试/js类/变量类/B008-变量提升★.md"}');export{p as comp,t as data};
