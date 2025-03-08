import{_ as n,e,f as i,o as a}from"./app-Co8h00Iv.js";const l={};function c(d,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>#mixins</p><blockquote><p>less允许我们将已有的class和id的样式应用到另一个不同的选择器上。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#circle {</span>
<span class="line">	background-color:#333333;</span>
<span class="line">	border-radius:100%;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#small-circle {</span>
<span class="line">	width:50px;</span>
<span class="line">	height:150px;</span>
<span class="line">	#circle</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#写法2：</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#Mixin 比较酷就是可以传参</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">写法3：</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://lesscss.org/features/#mixins-feature" target="_blank" rel="noopener noreferrer">Mixin</a></p>`,7)]))}const p=n(l,[["render",c],["__file","L003-Mixins.html.vue"]]),t=JSON.parse('{"path":"/less_scss/L003-Mixins.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1741399874000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ce85b6f1a0c68b01a72154877ae80006272306c","date":1741399874000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加方法顺序执行示例及老版本写法说明","commitUrl":"qdleader/qdleader/commit/3ce85b6f1a0c68b01a72154877ae80006272306c"}]},"filePathRelative":"less&scss/L003-Mixins.md"}');export{p as comp,t as data};
