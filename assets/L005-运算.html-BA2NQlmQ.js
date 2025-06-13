import{_ as e,c as n,a,o as i}from"./app-DCAi24dy.js";const l={};function d(c,s){return i(),n("div",null,s[0]||(s[0]=[a(`<p>#L005 less 运算</p><p>#可以对数值和颜色进行基本的数学运算</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">@div-width:100px;</span>
<span class="line">@color:#3a9f4;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">div {</span>
<span class="line">	height:50px;</span>
<span class="line">	display:inline-block;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#left {</span>
<span class="line">	width:@div-width;</span>
<span class="line">	color:@color;</span>
<span class="line">}</span>
<span class="line">#right{</span>
<span class="line">	width:@div-width*2;</span>
<span class="line">	color:@color -100;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在css中我们可以使用100vh表示屏幕高度，我们还可以通过calc(expression)来动态计算宽高，于是便有了如下代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">height:calc(100vh - 50px);</span>
<span class="line">但出来的结果为什么是：</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">height:calc(50vh);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你来下面这样写就可以啦：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">height: calc(~&quot;100vh - 50px&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,7)]))}const r=e(l,[["render",d]]),p=JSON.parse('{"path":"/less_scss/L005-%E8%BF%90%E7%AE%97.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749778706000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"6e286535a07124482793a46188d11a3a5d47e2c7","time":1749778706000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(cursor): 添加HTML/CSS和Vue.js TypeScript最佳实践文档"}]},"filePathRelative":"less&scss/L005-运算.md"}');export{r as comp,p as data};
