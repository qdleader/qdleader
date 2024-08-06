import{_ as s,c as n,o as e,a as i}from"./app-Bul2w5Pu.js";const a={},l=i(`<h1 id="b007-作用域和自由变量的场景题" tabindex="-1"><a class="header-anchor" href="#b007-作用域和自由变量的场景题"><span>B007-作用域和自由变量的场景题</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let i</span>
<span class="line"></span>
<span class="line">for(i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">  setTimeout(function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 4 4 4</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">for(let i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">  setTimeout(function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> var i</span>
<span class="line"></span>
<span class="line"> for(i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">   setTimeout(function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">     })</span>
<span class="line"> }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：4 4 4</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line"> for(var i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">   setTimeout(function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">     })</span>
<span class="line"> }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：4 4 4</p><blockquote><p>我们可以看出 当在for循环外边声明时候 var 和 let 效果是一样的</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">for(var i = 1; i &lt; 4; i ++) {</span>
<span class="line">    setTimeout((function(i) {</span>
<span class="line">        return function() {</span>
<span class="line">            console.log(i)</span>
<span class="line">        }</span>
<span class="line">    })(i),0)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    var i</span>
<span class="line">          for(i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">              console.log(i)</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let i</span>
<span class="line">         for(var i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">             console.log(i)</span>
<span class="line">         }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:1 2 3</p>`,16),d=[l];function t(c,r){return e(),n("div",null,d)}const v=s(a,[["render",t],["__file","B007-作用域和自由变量的场景题.html.vue"]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B007-%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E8%87%AA%E7%94%B1%E5%8F%98%E9%87%8F%E7%9A%84%E5%9C%BA%E6%99%AF%E9%A2%98.html","title":"B007-作用域和自由变量的场景题","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1722912902000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"前端面试/js类/变量类/B007-作用域和自由变量的场景题.md"}');export{v as comp,u as data};
