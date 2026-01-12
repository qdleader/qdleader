import{_ as s,c as a,a as l,o as e}from"./app-KfnfuIf0.js";const p={};function t(i,n){return e(),a("div",null,[...n[0]||(n[0]=[l(`<h1 id="bfc-的理解和应用★★★" tabindex="-1"><a class="header-anchor" href="#bfc-的理解和应用★★★"><span>BFC 的理解和应用★★★</span></a></h1><h2 id="一、bfc概念" tabindex="-1"><a class="header-anchor" href="#一、bfc概念"><span>一、BFC概念</span></a></h2><p>BFC（Block Formatting Context）格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。</p><p>通俗的理解就是：</p><p>首先BFC是一个名词，是一个独立的布局环境，我们可以理解为一个箱子（实际上是看不见摸不着的），箱子里面物品的摆放是不受外界的影响的。转换为BFC的理解则是：BFC中的元素的布局是不受外界的影响（我们往往利用这个特性来消除浮动元素对其非浮动的兄弟元素和其子元素带来的影响。）并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。</p><h2 id="形成bfc的常见条件" tabindex="-1"><a class="header-anchor" href="#形成bfc的常见条件"><span>形成BFC的常见条件</span></a></h2><blockquote><ol><li>float 不是 none</li><li>position 是absolute 或fixed</li><li>overflow 不是 visible</li><li>display 是flex inline-block table-cell table-caption inline-flex</li></ol></blockquote><h2 id="bfc-的作用" tabindex="-1"><a class="header-anchor" href="#bfc-的作用"><span>BFC 的作用</span></a></h2><ol><li>清除内部浮动 我们在布局时经常会遇到这个问题：对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把把父元素变成一个BFC就行了。常用的办法是给父元素设置overflow:hidden。</li></ol><p>2.外边距折叠</p><p>两个兄弟盒子之间的垂直距离是由他们的外边距所决定的，但不是他们的两个外边距之和，而是以较大的为准。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">   .container {</span>
<span class="line">             overflow: hidden;</span>
<span class="line">             width: 100px;</span>
<span class="line">             height: 100px;</span>
<span class="line">             background-color: red;</span>
<span class="line">         }</span>
<span class="line"></span>
<span class="line">         .box1 {</span>
<span class="line">             height: 20px;</span>
<span class="line">             margin: 10px 0;</span>
<span class="line">             background-color: green;</span>
<span class="line">         }</span>
<span class="line"></span>
<span class="line">         .box2 {</span>
<span class="line">             height: 20px;</span>
<span class="line">             margin: 20px 0;</span>
<span class="line">             background-color: green;</span>
<span class="line">         }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我门可以看到，第一个子盒子有上边距（不会发生margin穿透的问题）；两个子盒子的垂直距离为20px而不是30px，因为垂直外边距会折叠，间距以较大的为准。</p><p>那么有没有方法让垂直外边距不折叠呢？答案是：有.bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素，同样外面的元素不会影响到BFC内的元素。所以就让box1或box2再处于另一个BFC中就行了。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">    .container {</span>
<span class="line">      overflow: hidden;</span>
<span class="line">      width: 100px;</span>
<span class="line">      height: 100px;</span>
<span class="line">      background-color: red;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .wrapper {</span>
<span class="line">      overflow: hidden;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .box1 {</span>
<span class="line">      height: 20px;</span>
<span class="line">      margin: 10px 0;</span>
<span class="line">      background-color: green;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .box2 {</span>
<span class="line">      height: 20px;</span>
<span class="line">      margin: 20px 0;</span>
<span class="line">      background-color: green;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.创建自适应两栏布局</p><p>在很多网站中，我们常看到这样的一种结构，左图片+右文字的两栏结构。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tu<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字文字文字文字文字文字文字文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">.img1 {</span>
<span class="line">       float: left;</span>
<span class="line">       width: 200px;</span>
<span class="line">       height: 300px;</span>
<span class="line">       margin-right: 10px;</span>
<span class="line">       background-color: red;</span>
<span class="line">   }</span>
<span class="line"></span>
<span class="line">   .box1 {</span>
<span class="line">       overflow: hidden;/*创建bfc */</span>
<span class="line">       height: 300px;</span>
<span class="line">       background-color: purple;</span>
<span class="line">   }</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当文字过多时候会出现文字环绕图片情况。，利用bfc可以解决这一弊端。</p><h3 id="what-s-fc" tabindex="-1"><a class="header-anchor" href="#what-s-fc"><span>What&#39;s FC？</span></a></h3><p>一定不是KFC，FC的全称是：Formatting Contexts，是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。</p><h2 id="ifc" tabindex="-1"><a class="header-anchor" href="#ifc"><span>IFC</span></a></h2><p>IFC IFC(Inline Formatting Contexts)直译为&quot;内联格式化上下文&quot;，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响) IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短。 同个ifc下的多个line box高度会不同。 IFC中时不可能有块级元素的，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。 那么IFC一般有什么用呢？ 水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。</p>`,23)])])}const o=s(p,[["render",t]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/css%E7%B1%BB/BFC%E7%9A%84%E7%90%86%E8%A7%A3%E5%92%8C%E5%BA%94%E7%94%A8%E2%98%85%E2%98%85%E2%98%85.html","title":"BFC 的理解和应用★★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/css类/BFC的理解和应用★★★.md"}');export{o as comp,u as data};
