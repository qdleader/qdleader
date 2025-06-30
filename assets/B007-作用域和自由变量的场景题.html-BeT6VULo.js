import{_ as n,c as e,a,o as i}from"./app-DbHRFhcj.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="b007-作用域和自由变量的场景题" tabindex="-1"><a class="header-anchor" href="#b007-作用域和自由变量的场景题"><span>B007-作用域和自由变量的场景题</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let i</span>
<span class="line"></span>
<span class="line">for(i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">  setTimeout(function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 4 4 4</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">for(let i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">  setTimeout(function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> var i</span>
<span class="line"></span>
<span class="line"> for(i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">   setTimeout(function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">     })</span>
<span class="line"> }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：4 4 4</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line"> for(var i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">   setTimeout(function() {</span>
<span class="line">      console.log(i)</span>
<span class="line">     })</span>
<span class="line"> }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：4 4 4</p><blockquote><p>我们可以看出 当在for循环外边声明时候 var 和 let 效果是一样的</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">for(var i = 1; i &lt; 4; i ++) {</span>
<span class="line">    setTimeout((function(i) {</span>
<span class="line">        return function() {</span>
<span class="line">            console.log(i)</span>
<span class="line">        }</span>
<span class="line">    })(i),0)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">    var i</span>
<span class="line">          for(i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">              console.log(i)</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let i</span>
<span class="line">         for(var i = 1; i &lt;=3; i ++ ) {</span>
<span class="line">             console.log(i)</span>
<span class="line">         }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:1 2 3</p>`,16)]))}const t=n(l,[["render",d]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B007-%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E8%87%AA%E7%94%B1%E5%8F%98%E9%87%8F%E7%9A%84%E5%9C%BA%E6%99%AF%E9%A2%98.html","title":"B007-作用域和自由变量的场景题","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751247917000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c36011f17d8589a9dd4d62d0fd57f0287349de37","time":1751247917000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(css): 添加关于:is()和:where()选择器的文档"}]},"filePathRelative":"前端面试/js类/变量类/B007-作用域和自由变量的场景题.md"}');export{t as comp,p as data};
