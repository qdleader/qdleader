import{_ as s,c as a,a as p,o as e}from"./app-kwB4dgjm.js";const l={};function t(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="echart-常用图表属性汇总" tabindex="-1"><a class="header-anchor" href="#echart-常用图表属性汇总"><span>echart 常用图表属性汇总</span></a></h1><p>​</p><h2 id="图表标题" tabindex="-1"><a class="header-anchor" href="#图表标题"><span>图表标题</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 图表标题</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    x<span class="token operator">:</span> &#39;left&#39;<span class="token punctuation">,</span>                 <span class="token comment">// 水平安放位置，默认为左对齐，可选为：</span></span>
<span class="line">    <span class="token comment">// &#39;center&#39; ¦ &#39;left&#39; ¦ &#39;right&#39;</span></span>
<span class="line">    <span class="token comment">// ¦ {number}（x坐标，单位px）</span></span>
<span class="line">    y<span class="token operator">:</span> &#39;top&#39;<span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span></span>
<span class="line">    <span class="token comment">// &#39;top&#39; ¦ &#39;bottom&#39; ¦ &#39;center&#39;</span></span>
<span class="line">    <span class="token comment">// ¦ {number}（y坐标，单位px）</span></span>
<span class="line">    <span class="token comment">//textAlign: null          // 水平对齐方式，默认根据x设置自动调整</span></span>
<span class="line">    backgroundColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span></span>
<span class="line">    borderColor<span class="token operator">:</span> &#39;#ccc&#39;<span class="token punctuation">,</span>       <span class="token comment">// 标题边框颜色</span></span>
<span class="line">    borderWidth<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 标题边框线宽，单位px，默认为0（无边框）</span></span>
<span class="line">    padding<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 标题内边距，单位px，默认各方向内边距为5，</span></span>
<span class="line">    <span class="token comment">// 接受数组分别设定上右下左边距，同css</span></span>
<span class="line">    itemGap<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 主副标题纵向间隔，单位px，默认为10，</span></span>
<span class="line">    textStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      fontSize<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">      fontWeight<span class="token operator">:</span> &#39;bolder&#39;<span class="token punctuation">,</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;          <span class="token comment">// 主标题文字颜色</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    subtextStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#aaa&#39;          <span class="token comment">// 副标题文字颜色</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图例" tabindex="-1"><a class="header-anchor" href="#图例"><span>图例</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 图例</span></span>
<span class="line">legend<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  orient<span class="token operator">:</span> &#39;horizontal&#39;<span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span></span>
<span class="line">  <span class="token comment">// &#39;horizontal&#39; ¦ &#39;vertical&#39;</span></span>
<span class="line">  x<span class="token operator">:</span> &#39;center&#39;<span class="token punctuation">,</span>               <span class="token comment">// 水平安放位置，默认为全图居中，可选为：</span></span>
<span class="line">  <span class="token comment">// &#39;center&#39; ¦ &#39;left&#39; ¦ &#39;right&#39;</span></span>
<span class="line">  <span class="token comment">// ¦ {number}（x坐标，单位px）</span></span>
<span class="line">  y<span class="token operator">:</span> &#39;top&#39;<span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span></span>
<span class="line">  <span class="token comment">// &#39;top&#39; ¦ &#39;bottom&#39; ¦ &#39;center&#39;</span></span>
<span class="line">  <span class="token comment">// ¦ {number}（y坐标，单位px）</span></span>
<span class="line">  backgroundColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span></span>
<span class="line">  borderColor<span class="token operator">:</span> &#39;#ccc&#39;<span class="token punctuation">,</span>       <span class="token comment">// 图例边框颜色</span></span>
<span class="line">  borderWidth<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 图例边框线宽，单位px，默认为0（无边框）</span></span>
<span class="line">  padding<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 图例内边距，单位px，默认各方向内边距为5，</span></span>
<span class="line">  <span class="token comment">// 接受数组分别设定上右下左边距，同css</span></span>
<span class="line">  itemGap<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span></span>
<span class="line">  <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span></span>
<span class="line">  itemWidth<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 图例图形宽度</span></span>
<span class="line">  itemHeight<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>            <span class="token comment">// 图例图形高度</span></span>
<span class="line">  textStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;          <span class="token comment">// 图例文字颜色</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="值域" tabindex="-1"><a class="header-anchor" href="#值域"><span>值域</span></a></h2><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// 值域</span>
<span class="line">dataRange: {</span>
<span class="line">  orient: &#39;vertical&#39;,        // 布局方式，默认为垂直布局，可选为：</span>
<span class="line">  // &#39;horizontal&#39; ¦ &#39;vertical&#39;</span>
<span class="line">  x: &#39;left&#39;,                 // 水平安放位置，默认为全图左对齐，可选为：</span>
<span class="line">  // &#39;center&#39; ¦ &#39;left&#39; ¦ &#39;right&#39;</span>
<span class="line">  // ¦ {number}（x坐标，单位px）</span>
<span class="line">  y: &#39;bottom&#39;,               // 垂直安放位置，默认为全图底部，可选为：</span>
<span class="line">  // &#39;top&#39; ¦ &#39;bottom&#39; ¦ &#39;center&#39;</span>
<span class="line">  // ¦ {number}（y坐标，单位px）</span>
<span class="line">  backgroundColor: &#39;rgba(0,0,0,0)&#39;,</span>
<span class="line">  borderColor: &#39;#ccc&#39;,       // 值域边框颜色</span>
<span class="line">  borderWidth: 0,            // 值域边框线宽，单位px，默认为0（无边框）</span>
<span class="line">  padding: 5,                // 值域内边距，单位px，默认各方向内边距为5，</span>
<span class="line">  // 接受数组分别设定上右下左边距，同css</span>
<span class="line">  itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，</span>
<span class="line">  // 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
<span class="line">  itemWidth: 20,             // 值域图形宽度，线性渐变水平布局宽度为该值 * 10</span>
<span class="line">  itemHeight: 14,            // 值域图形高度，线性渐变垂直布局高度为该值 * 10</span>
<span class="line">  splitNumber: 5,            // 分割段数，默认为5，为0时为线性渐变</span>
<span class="line">  color:[&#39;#1e90ff&#39;,&#39;#f0ffff&#39;],//颜色</span>
<span class="line">  //text:[&#39;高&#39;,&#39;低&#39;],         // 文本，默认为数值文本</span>
<span class="line">  textStyle: {</span>
<span class="line">    color: &#39;#333&#39;          // 值域文字颜色</span>
<span class="line">  }</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具箱" tabindex="-1"><a class="header-anchor" href="#工具箱"><span>工具箱</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 工具箱</span></span>
<span class="line">toolbox<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  orient<span class="token operator">:</span> &#39;horizontal&#39;<span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span></span>
<span class="line">  <span class="token comment">// &#39;horizontal&#39; ¦ &#39;vertical&#39;</span></span>
<span class="line">  x<span class="token operator">:</span> &#39;right&#39;<span class="token punctuation">,</span>                <span class="token comment">// 水平安放位置，默认为全图右对齐，可选为：</span></span>
<span class="line">  <span class="token comment">// &#39;center&#39; ¦ &#39;left&#39; ¦ &#39;right&#39;</span></span>
<span class="line">  <span class="token comment">// ¦ {number}（x坐标，单位px）</span></span>
<span class="line">  y<span class="token operator">:</span> &#39;top&#39;<span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span></span>
<span class="line">  <span class="token comment">// &#39;top&#39; ¦ &#39;bottom&#39; ¦ &#39;center&#39;</span></span>
<span class="line">  <span class="token comment">// ¦ {number}（y坐标，单位px）</span></span>
<span class="line">  color <span class="token operator">:</span> <span class="token punctuation">[</span>&#39;#1e90ff&#39;<span class="token punctuation">,</span>&#39;#22bb22&#39;<span class="token punctuation">,</span>&#39;#4b0082&#39;<span class="token punctuation">,</span>&#39;#d2691e&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  backgroundColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span> <span class="token comment">// 工具箱背景颜色</span></span>
<span class="line">  borderColor<span class="token operator">:</span> &#39;#ccc&#39;<span class="token punctuation">,</span>       <span class="token comment">// 工具箱边框颜色</span></span>
<span class="line">  borderWidth<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 工具箱边框线宽，单位px，默认为0（无边框）</span></span>
<span class="line">  padding<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 工具箱内边距，单位px，默认各方向内边距为5，</span></span>
<span class="line">  <span class="token comment">// 接受数组分别设定上右下左边距，同css</span></span>
<span class="line">  itemGap<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span></span>
<span class="line">  <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span></span>
<span class="line">  itemSize<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>              <span class="token comment">// 工具箱图形宽度</span></span>
<span class="line">  featureImageIcon <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 自定义图片icon</span></span>
<span class="line">  featureTitle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    mark <span class="token operator">:</span> &#39;辅助线开关&#39;<span class="token punctuation">,</span></span>
<span class="line">    markUndo <span class="token operator">:</span> &#39;删除辅助线&#39;<span class="token punctuation">,</span></span>
<span class="line">    markClear <span class="token operator">:</span> &#39;清空辅助线&#39;<span class="token punctuation">,</span></span>
<span class="line">    dataZoom <span class="token operator">:</span> &#39;区域缩放&#39;<span class="token punctuation">,</span></span>
<span class="line">    dataZoomReset <span class="token operator">:</span> &#39;区域缩放后退&#39;<span class="token punctuation">,</span></span>
<span class="line">    dataView <span class="token operator">:</span> &#39;数据视图&#39;<span class="token punctuation">,</span></span>
<span class="line">    lineChart <span class="token operator">:</span> &#39;折线图切换&#39;<span class="token punctuation">,</span></span>
<span class="line">    barChart <span class="token operator">:</span> &#39;柱形图切换&#39;<span class="token punctuation">,</span></span>
<span class="line">    restore <span class="token operator">:</span> &#39;还原&#39;<span class="token punctuation">,</span></span>
<span class="line">    saveAsImage <span class="token operator">:</span> &#39;保存为图片&#39;</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提示框" tabindex="-1"><a class="header-anchor" href="#提示框"><span>提示框</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 提示框</span></span>
<span class="line">tooltip<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  trigger<span class="token operator">:</span> &#39;item&#39;<span class="token punctuation">,</span>           <span class="token comment">// 触发类型，默认数据触发，见下图，可选为：&#39;item&#39; ¦ &#39;axis&#39;</span></span>
<span class="line">  showDelay<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 显示延迟，添加显示延迟可以避免频繁切换，单位ms</span></span>
<span class="line">  hideDelay<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>            <span class="token comment">// 隐藏延迟，单位ms</span></span>
<span class="line">  transitionDuration <span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>  <span class="token comment">// 动画变换时间，单位s</span></span>
<span class="line">  backgroundColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.7</span>)&#39;<span class="token punctuation">,</span>     <span class="token comment">// 提示背景颜色，默认为透明度为0.7的黑色</span></span>
<span class="line">  borderColor<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;<span class="token punctuation">,</span>       <span class="token comment">// 提示边框颜色</span></span>
<span class="line">  borderRadius<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>           <span class="token comment">// 提示边框圆角，单位px，默认为4</span></span>
<span class="line">  borderWidth<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 提示边框线宽，单位px，默认为0（无边框）</span></span>
<span class="line">  padding<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 提示内边距，单位px，默认各方向内边距为5，</span></span>
<span class="line">  <span class="token comment">// 接受数组分别设定上右下左边距，同css</span></span>
<span class="line">  axisPointer <span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span></span>
<span class="line">    type <span class="token operator">:</span> &#39;line&#39;<span class="token punctuation">,</span>         <span class="token comment">// 默认为直线，可选为：&#39;line&#39; | &#39;shadow&#39;</span></span>
<span class="line">    lineStyle <span class="token operator">:</span> <span class="token punctuation">{</span>          <span class="token comment">// 直线指示器样式设置</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#48b&#39;<span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    shadowStyle <span class="token operator">:</span> <span class="token punctuation">{</span>                       <span class="token comment">// 阴影指示器样式设置</span></span>
<span class="line">      width<span class="token operator">:</span> &#39;auto&#39;<span class="token punctuation">,</span>                   <span class="token comment">// 阴影大小</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;rgba(<span class="token number">150</span><span class="token punctuation">,</span><span class="token number">150</span><span class="token punctuation">,</span><span class="token number">150</span><span class="token punctuation">,</span><span class="token number">0.3</span>)&#39;  <span class="token comment">// 阴影颜色</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  textStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    color<span class="token operator">:</span> &#39;#fff&#39;</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区域缩放控制器" tabindex="-1"><a class="header-anchor" href="#区域缩放控制器"><span>区域缩放控制器</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 区域缩放控制器</span></span>
<span class="line">dataZoom<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  orient<span class="token operator">:</span> &#39;horizontal&#39;<span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span></span>
<span class="line">  <span class="token comment">// &#39;horizontal&#39; ¦ &#39;vertical&#39;</span></span>
<span class="line">  <span class="token comment">// x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：</span></span>
<span class="line">  <span class="token comment">// {number}（x坐标，单位px）</span></span>
<span class="line">  <span class="token comment">// y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：</span></span>
<span class="line">  <span class="token comment">// {number}（y坐标，单位px）</span></span>
<span class="line">  <span class="token comment">// width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配</span></span>
<span class="line">  <span class="token comment">// height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配</span></span>
<span class="line">  backgroundColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span>       <span class="token comment">// 背景颜色</span></span>
<span class="line">  dataBackgroundColor<span class="token operator">:</span> &#39;#eee&#39;<span class="token punctuation">,</span>            <span class="token comment">// 数据背景颜色</span></span>
<span class="line">  fillerColor<span class="token operator">:</span> &#39;rgba(<span class="token number">144</span><span class="token punctuation">,</span><span class="token number">197</span><span class="token punctuation">,</span><span class="token number">237</span><span class="token punctuation">,</span><span class="token number">0.2</span>)&#39;<span class="token punctuation">,</span>   <span class="token comment">// 填充颜色</span></span>
<span class="line">  handleColor<span class="token operator">:</span> &#39;rgba(<span class="token number">70</span><span class="token punctuation">,</span><span class="token number">130</span><span class="token punctuation">,</span><span class="token number">180</span><span class="token punctuation">,</span><span class="token number">0.8</span>)&#39;     <span class="token comment">// 手柄颜色</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网格" tabindex="-1"><a class="header-anchor" href="#网格"><span>网格</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 网格</span></span>
<span class="line">  grid<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    x<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span></span>
<span class="line">    y<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span></span>
<span class="line">    x2<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span></span>
<span class="line">    y2<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// width: {totalWidth} - x - x2,</span></span>
<span class="line">    <span class="token comment">// height: {totalHeight} - y - y2,</span></span>
<span class="line">    backgroundColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span></span>
<span class="line">    borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    borderColor<span class="token operator">:</span> &#39;#ccc&#39;</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类目轴" tabindex="-1"><a class="header-anchor" href="#类目轴"><span>类目轴</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 类目轴</span></span>
<span class="line">categoryAxis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  position<span class="token operator">:</span> &#39;bottom&#39;<span class="token punctuation">,</span>    <span class="token comment">// 位置</span></span>
<span class="line">  nameLocation<span class="token operator">:</span> &#39;end&#39;<span class="token punctuation">,</span>   <span class="token comment">// 坐标轴名字位置，支持&#39;start&#39; | &#39;end&#39;</span></span>
<span class="line">  boundaryGap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>     <span class="token comment">// 类目起始和结束两端空白策略</span></span>
<span class="line">  axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span></span>
<span class="line">    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#48b&#39;<span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴小标记</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// 属性show控制显示与否，默认不显示</span></span>
<span class="line">    interval<span class="token operator">:</span> &#39;auto&#39;<span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// onGap: null,</span></span>
<span class="line">    inside <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 控制小标记是否在grid里</span></span>
<span class="line">    length <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>         <span class="token comment">// 属性length控制线长</span></span>
<span class="line">    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;<span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    interval<span class="token operator">:</span> &#39;auto&#39;<span class="token punctuation">,</span></span>
<span class="line">    rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    margin<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// formatter: null,</span></span>
<span class="line">    textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔线</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span></span>
<span class="line">    <span class="token comment">// onGap: null,</span></span>
<span class="line">    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle（详见lineStyle）控制线条样式</span></span>
<span class="line">      color<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;#ccc&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  splitArea<span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔区域</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 默认不显示，属性show控制显示与否</span></span>
<span class="line">    <span class="token comment">// onGap: null,</span></span>
<span class="line">    areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性areaStyle（详见areaStyle）控制区域样式</span></span>
<span class="line">      color<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;rgba(<span class="token number">250</span><span class="token punctuation">,</span><span class="token number">250</span><span class="token punctuation">,</span><span class="token number">250</span><span class="token punctuation">,</span><span class="token number">0.3</span>)&#39;<span class="token punctuation">,</span>&#39;rgba(<span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">0.3</span>)&#39;<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数值型坐标轴默认参数" tabindex="-1"><a class="header-anchor" href="#数值型坐标轴默认参数"><span>数值型坐标轴默认参数</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 数值型坐标轴默认参数</span></span>
<span class="line">valueAxis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  position<span class="token operator">:</span> &#39;left&#39;<span class="token punctuation">,</span>      <span class="token comment">// 位置</span></span>
<span class="line">  nameLocation<span class="token operator">:</span> &#39;end&#39;<span class="token punctuation">,</span>   <span class="token comment">// 坐标轴名字位置，支持&#39;start&#39; | &#39;end&#39;</span></span>
<span class="line">  nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 坐标轴文字样式，默认取全局样式</span></span>
<span class="line">  boundaryGap<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">// 数值起始和结束两端空白策略</span></span>
<span class="line">  splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>        <span class="token comment">// 分割段数，默认为5</span></span>
<span class="line">  axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span></span>
<span class="line">    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#48b&#39;<span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴小标记</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 属性show控制显示与否，默认不显示</span></span>
<span class="line">    inside <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 控制小标记是否在grid里</span></span>
<span class="line">    length <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>         <span class="token comment">// 属性length控制线长</span></span>
<span class="line">    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;<span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    margin<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// formatter: null,</span></span>
<span class="line">    textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔线</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span></span>
<span class="line">    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle（详见lineStyle）控制线条样式</span></span>
<span class="line">      color<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;#ccc&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  splitArea<span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔区域</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 默认不显示，属性show控制显示与否</span></span>
<span class="line">    areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性areaStyle（详见areaStyle）控制区域样式</span></span>
<span class="line">      color<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;rgba(<span class="token number">250</span><span class="token punctuation">,</span><span class="token number">250</span><span class="token punctuation">,</span><span class="token number">250</span><span class="token punctuation">,</span><span class="token number">0.3</span>)&#39;<span class="token punctuation">,</span>&#39;rgba(<span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">0.3</span>)&#39;<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="极坐标系" tabindex="-1"><a class="header-anchor" href="#极坐标系"><span>极坐标系</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 极坐标系</span></span>
<span class="line">polar <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  center <span class="token operator">:</span> <span class="token punctuation">[</span>&#39;<span class="token number">50</span>%&#39;<span class="token punctuation">,</span> &#39;<span class="token number">50</span>%&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 默认全局居中</span></span>
<span class="line">  radius <span class="token operator">:</span> &#39;<span class="token number">75</span>%&#39;<span class="token punctuation">,</span></span>
<span class="line">  startAngle <span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span></span>
<span class="line">  splitNumber <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">  name <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span></span>
<span class="line">    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#ccc&#39;<span class="token punctuation">,</span></span>
<span class="line">      width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span></span>
<span class="line">    show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  splitArea <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    show <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    areaStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      color<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;rgba(<span class="token number">250</span><span class="token punctuation">,</span><span class="token number">250</span><span class="token punctuation">,</span><span class="token number">250</span><span class="token punctuation">,</span><span class="token number">0.3</span>)&#39;<span class="token punctuation">,</span>&#39;rgba(<span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">0.3</span>)&#39;<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  splitLine <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    show <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    lineStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      width <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      color <span class="token operator">:</span> &#39;#ccc&#39;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="柱形图默认参数" tabindex="-1"><a class="header-anchor" href="#柱形图默认参数"><span>柱形图默认参数</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 柱形图默认参数</span></span>
<span class="line">bar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  barMinHeight<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>          <span class="token comment">// 最小高度改为0</span></span>
<span class="line">  <span class="token comment">// barWidth: null,        // 默认自适应</span></span>
<span class="line">  barGap<span class="token operator">:</span> &#39;<span class="token number">30</span>%&#39;<span class="token punctuation">,</span>            <span class="token comment">// 柱间距离，默认为柱形宽度的30%，可设固定值</span></span>
<span class="line">  barCategoryGap <span class="token operator">:</span> &#39;<span class="token number">20</span>%&#39;<span class="token punctuation">,</span>   <span class="token comment">// 类目间柱形距离，默认为类目间距的20%，可设固定值</span></span>
<span class="line">  itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: &#39;各异&#39;,</span></span>
<span class="line">      barBorderColor<span class="token operator">:</span> &#39;#fff&#39;<span class="token punctuation">,</span>       <span class="token comment">// 柱条边线</span></span>
<span class="line">      barBorderRadius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>           <span class="token comment">// 柱条边线圆角，单位px，默认为0</span></span>
<span class="line">      barBorderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>            <span class="token comment">// 柱条边线线宽，单位px，默认为1</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span></span>
<span class="line">        <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">        <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: &#39;各异&#39;,</span></span>
<span class="line">      barBorderColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span>   <span class="token comment">// 柱条边线</span></span>
<span class="line">      barBorderRadius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                <span class="token comment">// 柱条边线圆角，单位px，默认为0</span></span>
<span class="line">      barBorderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>                 <span class="token comment">// 柱条边线线宽，单位px，默认为1</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span></span>
<span class="line">        <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">        <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="折线图默认参数" tabindex="-1"><a class="header-anchor" href="#折线图默认参数"><span>折线图默认参数</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 折线图默认参数</span></span>
<span class="line">line<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: 各异,</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span></span>
<span class="line">        <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">        <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        type<span class="token operator">:</span> &#39;solid&#39;<span class="token punctuation">,</span></span>
<span class="line">        shadowColor <span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span> <span class="token comment">//默认透明</span></span>
<span class="line">        shadowBlur<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">        shadowOffsetX<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        shadowOffsetY<span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: 各异,</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span></span>
<span class="line">        <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">        <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//smooth : false,</span></span>
<span class="line">  <span class="token comment">//symbol: null,         // 拐点图形类型</span></span>
<span class="line">  symbolSize<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>          <span class="token comment">// 拐点图形大小</span></span>
<span class="line">  <span class="token comment">//symbolRotate : null,  // 拐点图形旋转控制</span></span>
<span class="line">  showAllSymbol<span class="token operator">:</span> <span class="token boolean">false</span>    <span class="token comment">// 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k线图默认参数" tabindex="-1"><a class="header-anchor" href="#k线图默认参数"><span>K线图默认参数</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// K线图默认参数</span></span>
<span class="line">k<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// barWidth : null          // 默认自适应</span></span>
<span class="line">  <span class="token comment">// barMaxWidth : null       // 默认自适应</span></span>
<span class="line">  itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      color<span class="token operator">:</span> &#39;#fff&#39;<span class="token punctuation">,</span>          <span class="token comment">// 阳线填充颜色</span></span>
<span class="line">      color0<span class="token operator">:</span> &#39;#00aa11&#39;<span class="token punctuation">,</span>      <span class="token comment">// 阴线填充颜色</span></span>
<span class="line">      lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        color<span class="token operator">:</span> &#39;#ff3200&#39;<span class="token punctuation">,</span>   <span class="token comment">// 阳线边框颜色</span></span>
<span class="line">        color0<span class="token operator">:</span> &#39;#00aa11&#39;   <span class="token comment">// 阴线边框颜色</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: 各异,</span></span>
<span class="line">      <span class="token comment">// color0: 各异</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="散点图默认参数" tabindex="-1"><a class="header-anchor" href="#散点图默认参数"><span>散点图默认参数</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 散点图默认参数</span></span>
<span class="line">scatter<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//symbol: null,      // 图形类型</span></span>
<span class="line">  symbolSize<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>       <span class="token comment">// 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span></span>
<span class="line">  <span class="token comment">//symbolRotate : null,  // 图形旋转控制</span></span>
<span class="line">  large<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>        <span class="token comment">// 大规模散点图</span></span>
<span class="line">  largeThreshold<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span><span class="token comment">// 大规模阀值，large为true且数据量&gt;largeThreshold才启用大规模模式</span></span>
<span class="line">  itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: 各异,</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span></span>
<span class="line">        <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">        <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: &#39;各异&#39;</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span></span>
<span class="line">        <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">        <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="雷达图默认参数" tabindex="-1"><a class="header-anchor" href="#雷达图默认参数"><span>雷达图默认参数</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 雷达图默认参数</span></span>
<span class="line">radar <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: 各异,</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: 各异,</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//symbol: null,         // 拐点图形类型</span></span>
<span class="line">  symbolSize<span class="token operator">:</span> <span class="token number">2</span>           <span class="token comment">// 可计算特性参数，空数据拖拽提示图形大小</span></span>
<span class="line">  <span class="token comment">//symbolRotate : null,  // 图形旋转控制</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="饼图默认参数" tabindex="-1"><a class="header-anchor" href="#饼图默认参数"><span>饼图默认参数</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 饼图默认参数</span></span>
<span class="line">pie<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  center <span class="token operator">:</span> <span class="token punctuation">[</span>&#39;<span class="token number">50</span>%&#39;<span class="token punctuation">,</span> &#39;<span class="token number">50</span>%&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 默认全局居中</span></span>
<span class="line">  radius <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> &#39;<span class="token number">75</span>%&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  clockWise <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>          <span class="token comment">// 默认逆时针</span></span>
<span class="line">  startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span></span>
<span class="line">  minAngle<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                <span class="token comment">// 最小角度改为0</span></span>
<span class="line">  selectedOffset<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>         <span class="token comment">// 选中是扇区偏移量</span></span>
<span class="line">  itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: 各异,</span></span>
<span class="line">      borderColor<span class="token operator">:</span> &#39;#fff&#39;<span class="token punctuation">,</span></span>
<span class="line">      borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        position<span class="token operator">:</span> &#39;outer&#39;</span>
<span class="line">        <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      labelLine<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        length<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// color: 各异,</span></span>
<span class="line">          width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">          type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// color: 各异,</span></span>
<span class="line">      borderColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span></span>
<span class="line">      borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token comment">// position: &#39;outer&#39;</span></span>
<span class="line">        <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      labelLine<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        length<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// color: 各异,</span></span>
<span class="line">          width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">          type<span class="token operator">:</span> &#39;solid&#39;</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="地图" tabindex="-1"><a class="header-anchor" href="#地图"><span>地图</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 地图</span></span>
<span class="line">map<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    mapType<span class="token operator">:</span> &#39;china&#39;<span class="token punctuation">,</span>   <span class="token comment">// 各省的mapType暂时都用中文</span></span>
<span class="line">    mapLocation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      x <span class="token operator">:</span> &#39;center&#39;<span class="token punctuation">,</span></span>
<span class="line">      y <span class="token operator">:</span> &#39;center&#39;</span>
<span class="line">      <span class="token comment">// width    // 自适应</span></span>
<span class="line">      <span class="token comment">// height   // 自适应</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    showLegendSymbol <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// 显示图例颜色标识（系列标识的小圆点），存在legend时生效</span></span>
<span class="line">    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// color: 各异,</span></span>
<span class="line">        borderColor<span class="token operator">:</span> &#39;#fff&#39;<span class="token punctuation">,</span></span>
<span class="line">        borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          color<span class="token operator">:</span> &#39;#ccc&#39;<span class="token comment">//rgba(135,206,250,0.8)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          textStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            color<span class="token operator">:</span> &#39;rgba(<span class="token number">139</span><span class="token punctuation">,</span><span class="token number">69</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">1</span>)&#39;</span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>                 <span class="token comment">// 也是选中样式</span></span>
<span class="line">        <span class="token comment">// color: 各异,</span></span>
<span class="line">        borderColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span></span>
<span class="line">        borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          color<span class="token operator">:</span> &#39;rgba(<span class="token number">255</span><span class="token punctuation">,</span><span class="token number">215</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.8</span>)&#39;</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          textStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            color<span class="token operator">:</span> &#39;rgba(<span class="token number">139</span><span class="token punctuation">,</span><span class="token number">69</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">1</span>)&#39;</span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="力引导" tabindex="-1"><a class="header-anchor" href="#力引导"><span>力引导</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line">force <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 数据map到圆的半径的最小值和最大值</span></span>
<span class="line">    minRadius <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    maxRadius <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    density <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span></span>
<span class="line">    attractiveness <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 初始化的随机大小位置</span></span>
<span class="line">    initSize <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 向心力因子，越大向心力越大</span></span>
<span class="line">    centripetal <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 冷却因子</span></span>
<span class="line">    coolDown <span class="token operator">:</span> <span class="token number">0.99</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 分类里如果有样式会覆盖节点默认样式</span></span>
<span class="line">    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// color: 各异,</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">          <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        nodeStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          brushType <span class="token operator">:</span> &#39;both&#39;<span class="token punctuation">,</span></span>
<span class="line">          color <span class="token operator">:</span> &#39;#f08c2e&#39;<span class="token punctuation">,</span></span>
<span class="line">          strokeColor <span class="token operator">:</span> &#39;#5182ab&#39;</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        linkStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          strokeColor <span class="token operator">:</span> &#39;#5182ab&#39;</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// color: 各异,</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">          <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        nodeStyle <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        linkStyle <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="和弦图" tabindex="-1"><a class="header-anchor" href="#和弦图"><span>和弦图</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line">chord <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    radius <span class="token operator">:</span> <span class="token punctuation">[</span>&#39;<span class="token number">65</span>%&#39;<span class="token punctuation">,</span> &#39;<span class="token number">75</span>%&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    center <span class="token operator">:</span> <span class="token punctuation">[</span>&#39;<span class="token number">50</span>%&#39;<span class="token punctuation">,</span> &#39;<span class="token number">50</span>%&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    padding <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    sort <span class="token operator">:</span> &#39;none&#39;<span class="token punctuation">,</span> <span class="token comment">// can be &#39;none&#39;, &#39;ascending&#39;, &#39;descending&#39;</span></span>
<span class="line">    sortSub <span class="token operator">:</span> &#39;none&#39;<span class="token punctuation">,</span> <span class="token comment">// can be &#39;none&#39;, &#39;ascending&#39;, &#39;descending&#39;</span></span>
<span class="line">    startAngle <span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span></span>
<span class="line">    clockWise <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    showScale <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    showScaleText <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    itemStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      normal <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        label <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show <span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">          <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        lineStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          width <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">          color <span class="token operator">:</span> &#39;#<span class="token number">000</span>&#39;</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        chordStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          lineStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            width <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            color <span class="token operator">:</span> &#39;#<span class="token number">666</span>&#39;</span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      emphasis <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        lineStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          width <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">          color <span class="token operator">:</span> &#39;#<span class="token number">000</span>&#39;</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        chordStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          lineStyle <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            width <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">            color <span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;</span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">​</span>
<span class="line">island<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    r<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span></span>
<span class="line">    calculateStep<span class="token operator">:</span> <span class="token number">0.1</span>  <span class="token comment">// 滚轮可计算步长 0.1 = 10%</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">markPoint <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    symbol<span class="token operator">:</span> &#39;pin&#39;<span class="token punctuation">,</span>         <span class="token comment">// 标注类型</span></span>
<span class="line">    symbolSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>        <span class="token comment">// 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span></span>
<span class="line">    <span class="token comment">//symbolRotate : null, // 标注旋转控制</span></span>
<span class="line">    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// color: 各异，</span></span>
<span class="line">        <span class="token comment">// borderColor: 各异,     // 标注边线颜色，优先于color</span></span>
<span class="line">        borderWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>            <span class="token comment">// 标注边线线宽，单位px，默认为1</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          position<span class="token operator">:</span> &#39;inside&#39; <span class="token comment">// 可选为&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">          <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// color: 各异</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">          <span class="token comment">// position: &#39;inside&#39;  // &#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">          <span class="token comment">// textStyle: null     // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">markLine <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 标线起始和结束的symbol介绍类型，如果都一样，可以直接传string</span></span>
<span class="line">    symbol<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;circle&#39;<span class="token punctuation">,</span> &#39;arrow&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 标线起始和结束的symbol大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span></span>
<span class="line">    symbolSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 标线起始和结束的symbol旋转控制</span></span>
<span class="line">    <span class="token comment">//symbolRotate : null,</span></span>
<span class="line">    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      normal<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// color: 各异,           // 标线主色，线色，symbol主色</span></span>
<span class="line">        <span class="token comment">// borderColor: 随color,     // 标线symbol边框颜色，优先于color</span></span>
<span class="line">        borderWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>          <span class="token comment">// 标线symbol边框线宽，单位px，默认为2</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 可选为 &#39;start&#39;|&#39;end&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">          position<span class="token operator">:</span> &#39;inside&#39;<span class="token punctuation">,</span></span>
<span class="line">          textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>         <span class="token comment">// 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">            color<span class="token operator">:</span> &#39;#<span class="token number">333</span>&#39;</span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// color: 随borderColor, // 主色，线色，优先级高于borderColor和color</span></span>
<span class="line">          <span class="token comment">// width: 随borderWidth, // 优先于borderWidth</span></span>
<span class="line">          type<span class="token operator">:</span> &#39;solid&#39;<span class="token punctuation">,</span></span>
<span class="line">          shadowColor <span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>)&#39;<span class="token punctuation">,</span> <span class="token comment">//默认透明</span></span>
<span class="line">          shadowBlur<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">          shadowOffsetX<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">          shadowOffsetY<span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      emphasis<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// color: 各异</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          show<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">          <span class="token comment">// position: &#39;inside&#39; // &#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span></span>
<span class="line">          <span class="token comment">// textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        lineStyle <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">textStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    decoration<span class="token operator">:</span> &#39;none&#39;<span class="token punctuation">,</span></span>
<span class="line">    fontFamily<span class="token operator">:</span> &#39;Arial<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> sans-serif&#39;<span class="token punctuation">,</span></span>
<span class="line">    fontFamily2<span class="token operator">:</span> &#39;微软雅黑&#39;<span class="token punctuation">,</span>    <span class="token comment">// IE8- 字体模糊并且不支持不同字体混排，额外指定一份</span></span>
<span class="line">    fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span></span>
<span class="line">    fontStyle<span class="token operator">:</span> &#39;normal&#39;<span class="token punctuation">,</span></span>
<span class="line">    fontWeight<span class="token operator">:</span> &#39;normal&#39;</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 默认标志图形类型列表</span></span>
<span class="line">  symbolList <span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    &#39;circle&#39;<span class="token punctuation">,</span> &#39;rectangle&#39;<span class="token punctuation">,</span> &#39;triangle&#39;<span class="token punctuation">,</span> &#39;diamond&#39;<span class="token punctuation">,</span></span>
<span class="line">    &#39;emptyCircle&#39;<span class="token punctuation">,</span> &#39;emptyRectangle&#39;<span class="token punctuation">,</span> &#39;emptyTriangle&#39;<span class="token punctuation">,</span> &#39;emptyDiamond&#39;</span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  loadingText <span class="token operator">:</span> &#39;Loading...&#39;<span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 可计算特性配置，孤岛，提示颜色</span></span>
<span class="line">  calculable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>              <span class="token comment">// 默认关闭可计算特性</span></span>
<span class="line">  calculableColor<span class="token operator">:</span> &#39;rgba(<span class="token number">255</span><span class="token punctuation">,</span><span class="token number">165</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.6</span>)&#39;<span class="token punctuation">,</span>       <span class="token comment">// 拖拽提示边框颜色</span></span>
<span class="line">  calculableHolderColor<span class="token operator">:</span> &#39;#ccc&#39;<span class="token punctuation">,</span> <span class="token comment">// 可计算占位提示颜色</span></span>
<span class="line">  nameConnector<span class="token operator">:</span> &#39; &amp; &#39;<span class="token punctuation">,</span></span>
<span class="line">  valueConnector<span class="token operator">:</span> &#39; <span class="token operator">:</span> &#39;<span class="token punctuation">,</span></span>
<span class="line">  animation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  animationThreshold<span class="token operator">:</span> <span class="token number">2500</span><span class="token punctuation">,</span>       <span class="token comment">// 动画元素阀值，产生的图形原素超过2500不出动画</span></span>
<span class="line">  addDataAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>         <span class="token comment">// 动态数据接口是否开启动画效果</span></span>
<span class="line">  animationDuration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>
<span class="line">  animationEasing<span class="token operator">:</span> &#39;ExponentialOut&#39;    <span class="token comment">//BounceOut</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40)])])}const i=s(l,[["render",t]]),u=JSON.parse('{"path":"/UI%E6%A1%86%E6%9E%B6/echart/echart%20%E5%B8%B8%E7%94%A8%E5%9B%BE%E8%A1%A8%E5%B1%9E%E6%80%A7%E6%B1%87%E6%80%BB.html","title":"echart 常用图表属性汇总","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1755829357000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3c77972ffb0c40db3ecb1e7cb2c5ee087a42326d","time":1755829357000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加Vue3性能优化相关文档"}]},"filePathRelative":"UI框架/echart/echart 常用图表属性汇总.md"}');export{i as comp,u as data};
