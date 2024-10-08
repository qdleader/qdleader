import{_ as n,c as e,a as i,o as a}from"./app-z95KQ9dg.js";const l={};function d(t,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="朝花夕拾之-盒模型宽度的计算" tabindex="-1"><a class="header-anchor" href="#朝花夕拾之-盒模型宽度的计算"><span>朝花夕拾之---盒模型宽度的计算</span></a></h1><blockquote><p>难度：很简单不到一星</p></blockquote><blockquote><p>重要程度： 星级拉满</p></blockquote><h2 id="offsetwidth-内容宽度-内边距-边框-无外边距" tabindex="-1"><a class="header-anchor" href="#offsetwidth-内容宽度-内边距-边框-无外边距"><span>offsetWidth = (内容宽度 + 内边距 + 边框)， 无外边距</span></a></h2><p>eg：</p><h3 id="_1-计算-div1的offsetwith是多少" tabindex="-1"><a class="header-anchor" href="#_1-计算-div1的offsetwith是多少"><span>1.计算#div1的offsetWith是多少？</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#div {</span>
<span class="line">  width:100px;</span>
<span class="line">  padding:10px;</span>
<span class="line">  border:1px solid #ccc;</span>
<span class="line">  margin:20px;</span>
<span class="line">}</span>
<span class="line">&lt;div id=&quot;div1&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是：</p><p>122</p><h3 id="_2-追问如果让offsetwidth-100-我们要怎么做" tabindex="-1"><a class="header-anchor" href="#_2-追问如果让offsetwidth-100-我们要怎么做"><span>2.追问如果让offsetWidth =100，我们要怎么做？</span></a></h3><p>加上怪异盒子模型即可</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#div {</span>
<span class="line">  width:100px;</span>
<span class="line">  padding:10px;</span>
<span class="line">  border:1px solid #ccc;</span>
<span class="line">  margin:0;</span>
<span class="line">  box-sizing:border-box;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-两个盒子的距离" tabindex="-1"><a class="header-anchor" href="#_3-两个盒子的距离"><span>3.两个盒子的距离</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;style&gt;</span>
<span class="line">  .div1 {</span>
<span class="line">    width: 100px;</span>
<span class="line">    height: 30px;</span>
<span class="line">    margin: 20px 0 30px;</span>
<span class="line">    background: red;</span>
<span class="line">  }</span>
<span class="line">  .div2 {</span>
<span class="line">    width: 100px;</span>
<span class="line">    height: 100px;</span>
<span class="line">    margin: 10px 0 30px;</span>
<span class="line">    background: pink;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;div&gt;</span>
<span class="line">  &lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;div2&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">30</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>上下间距重叠了，按大的间距算</p></blockquote><h3 id="_4-两个盒子的距离" tabindex="-1"><a class="header-anchor" href="#_4-两个盒子的距离"><span>4.两个盒子的距离</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;style&gt;</span>
<span class="line">		.div1 {</span>
<span class="line">			width: 10px;</span>
<span class="line">			height: 30px;</span>
<span class="line">			margin: 20px 10px 30px;</span>
<span class="line">			background: red;</span>
<span class="line">			display: inline-block;</span>
<span class="line">		}</span>
<span class="line">		.div2 {</span>
<span class="line">			width: 100px;</span>
<span class="line">			height: 100px;</span>
<span class="line">			margin: 10px 10px 30px;</span>
<span class="line">			background: pink;</span>
<span class="line">			display: inline-block;</span>
<span class="line">		}</span>
<span class="line">	&lt;/style&gt;</span>
<span class="line">	&lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;</span>
<span class="line">	&lt;div class=&quot;div2&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>左右间距正常加减</p></blockquote><h3 id="_5-两个盒子的距离" tabindex="-1"><a class="header-anchor" href="#_5-两个盒子的距离"><span>5.两个盒子的距离</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  &lt;style&gt;</span>
<span class="line">  .div1 {</span>
<span class="line">    width: 10px;</span>
<span class="line">    height: 30px;</span>
<span class="line">    margin: 20px 10px 30px;</span>
<span class="line">    background: red;</span>
<span class="line">    float: left;</span>
<span class="line">  }</span>
<span class="line">  .div2 {</span>
<span class="line">    width: 100px;</span>
<span class="line">    height: 100px;</span>
<span class="line">    margin: 10px 10px 30px;</span>
<span class="line">    background: pink;</span>
<span class="line">    float: left;</span>
<span class="line">  }</span>
<span class="line">  .divfa {</span>
<span class="line">    width: 100px;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;div class=&quot;divfa&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;div2&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">40</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>浮动后就不会出现上下间距叠加问题，可以正常相加</p></blockquote>`,30)]))}const c=n(l,[["render",d],["__file","盒模型宽度计算★.html.vue"]]),v=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/css%E7%B1%BB/%E7%9B%92%E6%A8%A1%E5%9E%8B%E5%AE%BD%E5%BA%A6%E8%AE%A1%E7%AE%97%E2%98%85.html","title":"朝花夕拾之---盒模型宽度的计算","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"offsetWidth = (内容宽度 + 内边距 + 边框)，   无外边距","slug":"offsetwidth-内容宽度-内边距-边框-无外边距","link":"#offsetwidth-内容宽度-内边距-边框-无外边距","children":[{"level":3,"title":"1.计算#div1的offsetWith是多少？","slug":"_1-计算-div1的offsetwith是多少","link":"#_1-计算-div1的offsetwith是多少","children":[]},{"level":3,"title":"2.追问如果让offsetWidth =100，我们要怎么做？","slug":"_2-追问如果让offsetwidth-100-我们要怎么做","link":"#_2-追问如果让offsetwidth-100-我们要怎么做","children":[]},{"level":3,"title":"3.两个盒子的距离","slug":"_3-两个盒子的距离","link":"#_3-两个盒子的距离","children":[]},{"level":3,"title":"4.两个盒子的距离","slug":"_4-两个盒子的距离","link":"#_4-两个盒子的距离","children":[]},{"level":3,"title":"5.两个盒子的距离","slug":"_5-两个盒子的距离","link":"#_5-两个盒子的距离","children":[]}]}],"git":{"updatedTime":1728353169000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"前端面试/css类/盒模型宽度计算★.md"}');export{c as comp,v as data};
