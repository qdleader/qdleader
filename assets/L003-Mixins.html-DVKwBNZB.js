import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function i(c,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<p>#mixins</p><blockquote><p>less允许我们将已有的class和id的样式应用到另一个不同的选择器上。</p></blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token selector">#circle</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span>#333333<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-radius</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">#small-circle</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span>150px<span class="token punctuation">;</span></span>
<span class="line">	#circle</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token selector">#写法2：</span>
<span class="line">#circle</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span>#333333<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-radius</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">#small-circle</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span>150px<span class="token punctuation">;</span></span>
<span class="line">	#circle</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#Mixin 比较酷就是可以传参</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line">写法3：</span>
<span class="line"></span>
<span class="line">#<span class="token function">circle</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span>#333333<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-radius</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">width</span><span class="token punctuation">:</span><span class="token atrule"><span class="token rule">@size</span><span class="token punctuation">;</span></span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span><span class="token atrule"><span class="token rule">@size</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">#small-circle</span><span class="token punctuation">{</span></span>
<span class="line">	#circle</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">#big-circle</span> <span class="token punctuation">{</span></span>
<span class="line">	#<span class="token function">circle</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://lesscss.org/features/#mixins-feature" target="_blank" rel="noopener noreferrer">Mixin</a></p>`,7)])])}const o=n(l,[["render",i]]),u=JSON.parse('{"path":"/less_scss/L003-Mixins.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"less&scss/L003-Mixins.md"}');export{o as comp,u as data};
