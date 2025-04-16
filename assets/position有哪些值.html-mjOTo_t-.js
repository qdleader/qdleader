import{_ as s,c as a,a as n,o as i}from"./app-DFnxdJ0h.js";const l={};function t(d,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="position-有哪些值" tabindex="-1"><a class="header-anchor" href="#position-有哪些值"><span>position 有哪些值</span></a></h1><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static"><span>static</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">static(没有定位)是 position 的默认值，元素处于正常的文档流中，会忽略 left、top、right、bottom 和 z-index 属性。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="relative" tabindex="-1"><a class="header-anchor" href="#relative"><span>relative</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="absolute" tabindex="-1"><a class="header-anchor" href="#absolute"><span>absolute</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">absolute</span>
<span class="line">absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：</span>
<span class="line"></span>
<span class="line">设置了 absolute 的元素如果存在有祖先元素设置了 position 属性为 relative 或者 absolute，则这时元素的定位对象为此已设置 position 属性的祖先元素。</span>
<span class="line">如果并没有设置了 position 属性的祖先元素，则此时相对于 body 进行定位。</span>
<span class="line">使用场景：跟随图标 图标使用不依赖定位父级的 absolute 和 margin 属性进行定位，这样，当文本的字符个数改变时，图标的位置可以自适应</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fixed" tabindex="-1"><a class="header-anchor" href="#fixed"><span>fixed</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">可以简单说 fixed 是特殊版的 absolute，fixed 元素总是相对于 body 定位的。</span>
<span class="line">使用场景：侧边栏或者广告图</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inherit" tabindex="-1"><a class="header-anchor" href="#inherit"><span>inherit</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"> 继承父元素的 position 属性，但需要注意的是 IE8 以及往前的版本都不支持 inherit 属性。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky"><span>sticky</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。</span>
<span class="line">当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动（相当于此时 fixed 定位）。</span>
<span class="line">使用场景：跟随窗口</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const c=s(l,[["render",t]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/css%E7%B1%BB/position%E6%9C%89%E5%93%AA%E4%BA%9B%E5%80%BC.html","title":"position 有哪些值","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/css类/position有哪些值.md"}');export{c as comp,p as data};
