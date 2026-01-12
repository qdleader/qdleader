import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const i={};function c(p,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="_100vh-不能撑满" tabindex="-1"><a class="header-anchor" href="#_100vh-不能撑满"><span>100vh 不能撑满</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">## 原因</span>
<span class="line"></span>
<span class="line">在 <span class="token constant">PC</span> 端，浏览器窗口大小是相对固定的，所以 100vh 就是浏览器窗口的可见高度，这没有问题。</span>
<span class="line">但在移动端，情况变得复杂了。为了在有限的屏幕空间里提供更好的浏览体验，手机浏览器（尤其是 Safari 和 Chrome）的地址栏和底部工具栏是动态变化的。</span>
<span class="line"></span>
<span class="line">初始状态：当你刚进入页面时，地址栏和工具栏是完全显示的。</span>
<span class="line">滚动时：当你向下滚动页面，这些 <span class="token constant">UI</span> 元素会自动收缩，甚至隐藏，以腾出更多空间展示网页内容。</span>
<span class="line"></span>
<span class="line">关键点来了：大多数移动端浏览器将 100vh 定义为“最大视口高度”，也就是当地址栏和工具栏完全收起时的高度。</span>
<span class="line">这就导致了：</span>
<span class="line"></span>
<span class="line">在页面初始加载、地址栏还未收起时，100vh 的实际计算高度 <span class="token operator">&gt;</span> 屏幕当前可见区域的高度。</span>
<span class="line"></span>
<span class="line">于是，那个恼人的滚动条就出现了。</span>
<span class="line"></span>
<span class="line">## 解决方案</span>
<span class="line"></span>
<span class="line"><span class="token function">svh</span> <span class="token punctuation">(</span>Small Viewport Height<span class="token punctuation">)</span><span class="token operator">:</span> 最小视口高度。对应于地址栏和工具栏完全展开时的可见高度。</span>
<span class="line"><span class="token function">lvh</span> <span class="token punctuation">(</span>Large Viewport Height<span class="token punctuation">)</span><span class="token operator">:</span> 最大视口高度。对应于地址栏和工具栏完全收起时的高度（这其实就等同于旧的 100vh）。</span>
<span class="line"><span class="token function">dvh</span> <span class="token punctuation">(</span>Dynamic Viewport Height<span class="token punctuation">)</span><span class="token operator">:</span> 动态视口高度。这是最智能、最实用的单位！它的值会随着浏览器 <span class="token constant">UI</span> 元素（地址栏）的出现和消失而动态改变。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token comment">/* 1. 给 body 设置一个最小高度，这样就可以撑满了 */</span></span>
<span class="line"><span class="token comment">/* 使用 100dvh，当地址栏收起时，元素高度会平滑地增加以填满屏幕；当地址栏滑出时，元素高度又会平滑地减小。整个过程如丝般顺滑，没有任何滚动条，完美！ */</span></span>
<span class="line"><span class="token property">height</span><span class="token punctuation">:</span> 100dvh<span class="token punctuation">;</span> <span class="token comment">/* 如果你希望元素能动态地撑满整个可见区域 */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)])])}const d=n(i,[["render",c]]),r=JSON.parse('{"path":"/%E7%A7%BB%E5%8A%A8%E7%AB%AF/100vh%E4%B8%8D%E8%83%BD%E6%92%91%E6%BB%A1.html","title":"100vh 不能撑满","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"移动端/100vh不能撑满.md"}');export{d as comp,r as data};
