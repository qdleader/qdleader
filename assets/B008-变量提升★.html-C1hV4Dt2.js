import{_ as s,c as e,a,o as i}from"./app-D_ZNEwCJ.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="b008-变量提升★" tabindex="-1"><a class="header-anchor" href="#b008-变量提升★"><span>B008-变量提升★</span></a></h1><h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1"><span>1</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function a() {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">var a;</span>
<span class="line">console.log(typeof a);  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><p>function a() {}</p><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2"><span>2</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">var c = 1;</span>
<span class="line">function c(c) {</span>
<span class="line">    console.log(c);</span>
<span class="line">}</span>
<span class="line">c(2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-1" tabindex="-1"><a class="header-anchor" href="#答案-1"><span>答案</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">报错 c is not a function</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> function fn(a,c) {</span>
<span class="line">     console.log(a)</span>
<span class="line">     var a= 123;</span>
<span class="line">     console.log(a)</span>
<span class="line">     console.log(c)</span>
<span class="line"></span>
<span class="line"> }</span>
<span class="line">fn(1,2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-2" tabindex="-1"><a class="header-anchor" href="#答案-2"><span>答案：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1</span>
<span class="line">123</span>
<span class="line">2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化时候a 为undefined，传入参数a为1，a就为1了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;script&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">输出：</span>
<span class="line">function a() {}</span>
<span class="line">123</span>
<span class="line">function c() {}</span>
<span class="line">undefined</span>
<span class="line">undefined</span>
<span class="line">function () {}</span>
<span class="line">function c() {}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入参数a为1，但是下面有个函数a,函数会把之前的覆盖因此，打印a时候就是 function a() {</p><p>}</p>`,17)]))}const r=s(l,[["render",d],["__file","B008-变量提升★.html.vue"]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B008-%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87%E2%98%85.html","title":"B008-变量提升★","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1","slug":"_1","link":"#_1","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"2","slug":"_2","link":"#_2","children":[]},{"level":2,"title":"答案","slug":"答案-1","link":"#答案-1","children":[]},{"level":2,"title":"答案：","slug":"答案-2","link":"#答案-2","children":[]}],"git":{"updatedTime":1735538705000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"前端面试/js类/变量类/B008-变量提升★.md"}');export{r as comp,p as data};
