import{_ as n,c as l,a as i,o as a}from"./app-8qbk9tLK.js";const e={};function d(c,s){return a(),l("div",null,s[0]||(s[0]=[i(`<h1 id="c003-双飞翼★★★" tabindex="-1"><a class="header-anchor" href="#c003-双飞翼★★★"><span>c003-双飞翼★★★</span></a></h1><h2 id="已知容器高度已知-左右宽度分别为300-中间自适应。有几种方法" tabindex="-1"><a class="header-anchor" href="#已知容器高度已知-左右宽度分别为300-中间自适应。有几种方法"><span>已知容器高度已知，左右宽度分别为300，中间自适应。有几种方法？</span></a></h2><p>1.float</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div class=&quot;box&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">.box {</span>
<span class="line">  width:100%;</span>
<span class="line">}</span>
<span class="line">.box div{</span>
<span class="line">  height:100px;</span>
<span class="line">}</span>
<span class="line">.left {</span>
<span class="line">  float:left;</span>
<span class="line">  width:300px;</span>
<span class="line">}</span>
<span class="line">.center {</span>
<span class="line">  margin-left:300px;</span>
<span class="line">  margin-right:300px;</span>
<span class="line">}</span>
<span class="line">.right {</span>
<span class="line">  float:right;</span>
<span class="line">  width:300px;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.absolute</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div class=&quot;box&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">.box {</span>
<span class="line">  width:100%;</span>
<span class="line">  position:relative;</span>
<span class="line">}</span>
<span class="line">.box div{</span>
<span class="line">  height:100px;</span>
<span class="line">  position:absolute;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.left {</span>
<span class="line">  width:300px;</span>
<span class="line">  left:0;</span>
<span class="line">}</span>
<span class="line">.right {</span>
<span class="line">  right:0;</span>
<span class="line">  width:300px;</span>
<span class="line">}</span>
<span class="line">.center {</span>
<span class="line">  left:300px;</span>
<span class="line">  right:300px;</span>
<span class="line">}</span>
<span class="line">或</span>
<span class="line">.center {</span>
<span class="line">  margin-left:300px;</span>
<span class="line">  margin-right:300px;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.flex</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div class=&quot;box&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">.box {</span>
<span class="line">  width:100%;</span>
<span class="line">  display:flex;</span>
<span class="line">}</span>
<span class="line">.box div{</span>
<span class="line">  height:100px;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.left {</span>
<span class="line">  flex: 0 1 300px;</span>
<span class="line">}</span>
<span class="line">.right {</span>
<span class="line">    flex: 0 1 300px;</span>
<span class="line">}</span>
<span class="line">.center {</span>
<span class="line">  flex:1;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.table</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div class=&quot;box&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">.box {</span>
<span class="line">  width:100%;</span>
<span class="line">  display:table;</span>
<span class="line">}</span>
<span class="line">.box div{</span>
<span class="line">  height:100px;</span>
<span class="line">  display:table-cell;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.left {</span>
<span class="line">  width:300px;</span>
<span class="line">}</span>
<span class="line">.right {</span>
<span class="line">  width:300px;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.grid</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div class=&quot;box&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">.box {</span>
<span class="line">  width:100%;</span>
<span class="line">  display:grid;</span>
<span class="line">  grid-template-columns:300px auto 300px;</span>
<span class="line">  grid-template-rows:100px;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.圣杯</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">1：HTML部分一定先写main中间盒子，必须先渲染。</span>
<span class="line">2：三个盒子设置float： left</span>
<span class="line">3：中间盒子宽度width： 100%独占一行</span>
<span class="line">4：使用margin-left属性将左右两边的盒子拉回与中间盒子同一行</span>
<span class="line">.left{ margin-left: -100%};向左走一个父盒子的宽度</span>
<span class="line">.right{ margin-left: 负的自身宽度}</span>
<span class="line">5： 父盒子设置padding给两边盒子留出位置(设置box-sizing)</span>
<span class="line">6：左右盒子使用相对定位占据padding部分，都需要左移自身宽度，避免遮挡中间盒子的内容。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">      &lt;div class=&quot;parent&quot;&gt;</span>
<span class="line">        &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;</span>
<span class="line">        &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;</span>
<span class="line">        &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;  </span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"> &lt;style&gt;</span>
<span class="line">        *{</span>
<span class="line">            padding: 0;</span>
<span class="line">            margin: 0;</span>
<span class="line">        }</span>
<span class="line">      .parent{</span>
<span class="line">            /* 父盒子设置padding为左右两个盒子空出位置，以免遮挡中间盒子的内容 */</span>
<span class="line">            padding: 0 200px;</span>
<span class="line">            box-sizing: border-box;</span>
<span class="line">        }</span>
<span class="line">        .left {</span>
<span class="line">            width: 200px;</span>
<span class="line">            height: 200px;</span>
<span class="line">            background-color: blue;</span>
<span class="line">            float: left;</span>
<span class="line">            /* 使其去上一行 */</span>
<span class="line">            margin-left: -100%;</span>
<span class="line">            /* 定位到正确的位置 */</span>
<span class="line">            position: relative;</span>
<span class="line">            left: -200px;</span>
<span class="line">        }</span>
<span class="line">        .main {</span>
<span class="line">            width:100%;</span>
<span class="line">            height: 200px;</span>
<span class="line">            float: left;</span>
<span class="line">            background-color: red;</span>
<span class="line">        }</span>
<span class="line">        .right {</span>
<span class="line">            width:200px;</span>
<span class="line">            float: left;</span>
<span class="line">            height: 200px;</span>
<span class="line">            background-color: yellow;</span>
<span class="line">            /* 使其去上一行 */</span>
<span class="line">            margin-left: -200px;</span>
<span class="line">            /* 定位到正确的位置 */</span>
<span class="line">            position: relative;</span>
<span class="line">            left: 200px;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const v=n(e,[["render",d]]),t=JSON.parse(`{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/css%E7%B1%BB/c003-%E5%8F%8C%E9%A3%9E%E7%BF%BC%E2%98%85%E2%98%85%E2%98%85.html","title":"c003-双飞翼★★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1750296722000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"2308b320062a9b64e8c3dfbe2f9f1a938c998e3d","time":1750296722000,"email":"yk4545945@163.com","author":"qdleader","message":"Merge branch 'master' of https://github.com/qdleader/qdleader"}]},"filePathRelative":"前端面试/css类/c003-双飞翼★★★.md"}`);export{v as comp,t as data};
