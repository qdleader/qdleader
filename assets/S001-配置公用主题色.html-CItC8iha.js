import{_ as s,c as e,a,o as l}from"./app-BKjY4pef.js";const i={};function c(d,n){return l(),e("div",null,n[0]||(n[0]=[a(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">// 默认主题的变量集合</span>
<span class="line">$default-theme : (</span>
<span class="line">  base-color: #2A2B2E,//背景色</span>
<span class="line">  btn-color: #383A3D, // 按钮背景色</span>
<span class="line">  btn1-color:#4B4D52, // 编辑按钮背景色</span>
<span class="line">  text-color:#fff,//字体颜色</span>
<span class="line">  text1-color:#AFB0B3,//字体色灰色颜色</span>
<span class="line">  text2-color:#ff9800,//字体高亮色颜色</span>
<span class="line"></span>
<span class="line">);</span>
<span class="line">// 后台主题的变量集合</span>
<span class="line">$ht-theme : (</span>
<span class="line">  base-color: gray,//背景色</span>
<span class="line">  btn-color: rgb(221, 195, 195), // 按钮背景色</span>
<span class="line">  btn1-color:#4B4D52, // 编辑按钮背景色</span>
<span class="line">  text-color:#fff,//字体颜色</span>
<span class="line">  text1-color:#AFB0B3,//字体色灰色颜色</span>
<span class="line">  text2-color:#ff9800,//字体高亮色颜色</span>
<span class="line">);</span>
<span class="line">//定义主题对象</span>
<span class="line">$themes: (// key为主题  value为主题的变量集合</span>
<span class="line">  default-theme: $default-theme,</span>
<span class="line">  ht-theme: $ht-theme</span>
<span class="line">);</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 生成主题背景色样式</span>
<span class="line">@mixin base-background(){</span>
<span class="line">    @each $themename , $theme in $themes {</span>
<span class="line">        [data-theme = &#39;#{$themename}&#39;] &amp; {</span>
<span class="line">            background-color: map-get($map: $theme, $key: base-color );</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">// 按钮背景色</span>
<span class="line">@mixin btn-background(){</span>
<span class="line">    @each $themename , $theme in $themes {</span>
<span class="line">        [data-theme = &#39;#{$themename}&#39;] &amp; {</span>
<span class="line">            background-color: map-get($map: $theme, $key: btn-color );</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">// 按钮背景高亮色</span>
<span class="line">@mixin  btn1-background(){</span>
<span class="line">    @each $themename , $theme in $themes {</span>
<span class="line">        [data-theme = &#39;#{$themename}&#39;] &amp; {</span>
<span class="line">            background-color: map-get($map: $theme, $key: text2-color );</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">// 编辑按钮背景色</span>
<span class="line">@mixin  btn1-color(){</span>
<span class="line">  @each $themename , $theme in $themes {</span>
<span class="line">      [data-theme = &#39;#{$themename}&#39;] &amp; {</span>
<span class="line">          background-color: map-get($map: $theme, $key: btn1-color );</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">// 生成主题字体色样式</span>
<span class="line">@mixin text-color(){</span>
<span class="line">    @each $themename , $theme in $themes {</span>
<span class="line">        [data-theme = &#39;#{$themename}&#39;] &amp; {</span>
<span class="line">            color: map-get($map: $theme, $key: text-color ) !important;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">@mixin text1-color(){</span>
<span class="line">  @each $themename , $theme in $themes {</span>
<span class="line">      [data-theme = &#39;#{$themename}&#39;] &amp; {</span>
<span class="line">          color: map-get($map: $theme, $key: text1-color ) !important;</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">@mixin text2-color(){</span>
<span class="line">  @each $themename , $theme in $themes {</span>
<span class="line">      [data-theme = &#39;#{$themename}&#39;] &amp; {</span>
<span class="line">          color: map-get($map: $theme, $key: text2-color ) !important;</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">// 边框色</span>
<span class="line">@mixin border-color(){</span>
<span class="line">  @each $themename , $theme in $themes {</span>
<span class="line">      [data-theme = &#39;#{$themename}&#39;] &amp; {</span>
<span class="line">          border-color: map-get($map: $theme, $key: btn-color ) !important;</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@function getVal($theme, $keyPath) {</span>
<span class="line">  @return map-get($map: $theme, $key: $keyPath);</span>
<span class="line">}</span>
<span class="line">@mixin withColor($attribute, $keyPath) {</span>
<span class="line">  @each $themename, $theme in $themes {</span>
<span class="line">    [data-theme=&quot;#{$themename}&quot;] &amp; {</span>
<span class="line">      #{$attribute}: map-get($map: $theme, $key: $keyPath);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 使用</span>
<span class="line">.actuary{</span>
<span class="line">  @include base-background()</span>
<span class="line">}</span>
<span class="line">.ibox-title{</span>
<span class="line">   @include text-color();</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">.aqcu-li-ri-line {</span>
<span class="line">  @include withColor(&quot;color&quot;, &quot;text-color&quot;);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>background:#2A2B2E; 就可以换成 @include base-background()</p><p>在根节点的div 上面挂上</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;div</span>
<span class="line">  class=&quot;block&quot;</span>
<span class="line">  data-theme=&quot;default-theme&quot;</span>
<span class="line">&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以使用啦</p>`,5)]))}const m=s(i,[["render",c]]),v=JSON.parse('{"path":"/less_scss/S001-%E9%85%8D%E7%BD%AE%E5%85%AC%E7%94%A8%E4%B8%BB%E9%A2%98%E8%89%B2.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1746588582000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"f53a9e30eceb36748e69fb1c3e69f877ff4e0264","time":1746588582000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加cursor vip使用及安装指南"}]},"filePathRelative":"less&scss/S001-配置公用主题色.md"}');export{m as comp,v as data};
