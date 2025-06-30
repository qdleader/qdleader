import{_ as n,c as e,a,o as i}from"./app-DbHRFhcj.js";const l={};function c(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>#mixins</p><blockquote><p>less允许我们将已有的class和id的样式应用到另一个不同的选择器上。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">#circle {</span>
<span class="line">	background-color:#333333;</span>
<span class="line">	border-radius:100%;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#small-circle {</span>
<span class="line">	width:50px;</span>
<span class="line">	height:150px;</span>
<span class="line">	#circle</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">#写法2：</span>
<span class="line">#circle {</span>
<span class="line">	background-color:#333333;</span>
<span class="line">	border-radius:100%;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#small-circle {</span>
<span class="line">	width:50px;</span>
<span class="line">	height:150px;</span>
<span class="line">	#circle</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#Mixin 比较酷就是可以传参</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">写法3：</span>
<span class="line"></span>
<span class="line">#circle(@size: 25px) {</span>
<span class="line">	background-color:#333333;</span>
<span class="line">	border-radius:100%;</span>
<span class="line">	width:@size;</span>
<span class="line">	height:@size;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#small-circle{</span>
<span class="line">	#circle</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#big-circle {</span>
<span class="line">	#circle(100px)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://lesscss.org/features/#mixins-feature" target="_blank" rel="noopener noreferrer">Mixin</a></p>`,7)]))}const p=n(l,[["render",c]]),t=JSON.parse('{"path":"/less_scss/L003-Mixins.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751247917000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c36011f17d8589a9dd4d62d0fd57f0287349de37","time":1751247917000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(css): 添加关于:is()和:where()选择器的文档"}]},"filePathRelative":"less&scss/L003-Mixins.md"}');export{p as comp,t as data};
