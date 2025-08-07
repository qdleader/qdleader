import{_ as n,c as e,a,o as i}from"./app-JR0DiM0i.js";const l={};function c(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>#mixins</p><blockquote><p>less允许我们将已有的class和id的样式应用到另一个不同的选择器上。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">#circle {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://lesscss.org/features/#mixins-feature" target="_blank" rel="noopener noreferrer">Mixin</a></p>`,7)]))}const p=n(l,[["render",c]]),t=JSON.parse(`{"path":"/less_scss/L003-Mixins.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1754578924000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"8368a3d830d4d39275b582b9717392562d913e18","time":1754578924000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"less&scss/L003-Mixins.md"}`);export{p as comp,t as data};
