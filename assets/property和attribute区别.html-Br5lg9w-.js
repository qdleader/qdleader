import{_ as s,c as n,a,o as t}from"./app-D8HvJIFE.js";const l={};function i(p,e){return t(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="property-和-attribute-的区别" tabindex="-1"><a class="header-anchor" href="#property-和-attribute-的区别"><span>property 和 attribute 的区别</span></a></h1><blockquote><p>property是DOM中的属性，是JavaScript里的对象； attribute是HTML标签上的特性，它的值只能够是字符串；</p></blockquote><p>通俗来讲： attribute 是在我们代码中将常看到的键值对，例如</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">&quot;inputBox&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;qdleader&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个input上有三个attribute</p><blockquote><p>id: inputBox type: text value: Name</p></blockquote><p>property 是 attribute 对应的DOM节点 对象属性</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> oBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;inputBox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">oBox<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">&#39;inputBox&#39;</span></span>
<span class="line">oBox<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;text&#39;</span></span>
<span class="line">oBox<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;qdleader&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里看好像差不多，那他们有什么区别？</p><h2 id="_1-特性-attribute-和属性-property-的同步" tabindex="-1"><a class="header-anchor" href="#_1-特性-attribute-和属性-property-的同步"><span>1.特性(attribute)和属性(property)的同步</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;input id=&quot;inputBox&quot; type=&quot;texo&quot; value=&quot;qdleader&quot;&gt;</span>
<span class="line"></span>
<span class="line">//页面加载后，我们输入“前端架构师”</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// attribute</span></span>
<span class="line">input<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span> <span class="token comment">// inputBox</span></span>
<span class="line">input<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span> <span class="token comment">// texo</span></span>
<span class="line">input<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token comment">// qdleader</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// property</span></span>
<span class="line">input<span class="token punctuation">.</span>id <span class="token comment">// inputBox</span></span>
<span class="line">input<span class="token punctuation">.</span>type <span class="token comment">//  text</span></span>
<span class="line">input<span class="token punctuation">.</span>value <span class="token comment">// 前端架构师</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到, 在 attribute 中, 值仍然是 html 代码中的值. 而在 property 中, type 被自动修正为了 text, 而 value 随着用户改变 input 的输入, 也变更为了 &quot;前端架构师&quot;</p><p>attribute 会始终保持 html 代码中的初始值, 而 Property 是有可能变化的</p><h2 id="eg2" tabindex="-1"><a class="header-anchor" href="#eg2"><span>eg2</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;input type=&quot;text&quot; id=&quot;oInput&quot;&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> &lt;script&gt;</span>
<span class="line"> let el = document.getElementById(&quot;oInput&quot;);</span>
<span class="line"> el.setAttribute(&#39;value&#39;, &#39;jjc&#39;);   </span>
<span class="line"> console.log(&quot;el.value&quot;,el.value)</span>
<span class="line"> console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))</span>
<span class="line"></span>
<span class="line"> el.value = &#39;newValue&#39;;   </span>
<span class="line"> console.log(&quot;el.value&quot;,el.value)</span>
<span class="line"> console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))</span>
<span class="line"></span>
<span class="line"> el.setAttribute(&#39;value&#39;, &#39;qdleader&#39;);</span>
<span class="line"> console.log(&quot;el.value&quot;,el.value)</span>
<span class="line"> console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))</span>
<span class="line"> &lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面打印：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">el.value jjc</span>
<span class="line">el.getAttribute(&#39;value&#39;)) jjc</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">el.value newValue</span>
<span class="line">el.getAttribute(&#39;value&#39;)) jjc</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">el.value newValue</span>
<span class="line">el.getAttribute(&#39;value&#39;)) qdleader</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从eg2中可以看出，当el.value没有设置时候，el.setAttribute(&#39;value&#39;, &#39;jjc&#39;); 设置了，el.value会同步，</p><p>但是当el.value设置后，再打印el.value会发现，值变了，然而el.getAttribute(&#39;value&#39;)的值，并没有变，(attribute你不讲武德呀），可以看出<b>property的改变不会导致attribute的变化</b>，并且，再继续实验。我们在再继续设置attribute ，el.setAttribute(&#39;value&#39;, &#39;qdleader&#39;); 会发现property没有变，attribute变了，</p><p>eg3：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let el = document.getElementById(&quot;oInput&quot;);</span>
<span class="line"></span>
<span class="line">el.setAttribute(&#39;value&#39;, &#39;jjc&#39;);   </span>
<span class="line">console.log(&quot;el.value&quot;,el.value)</span>
<span class="line">console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">el.setAttribute(&#39;value&#39;, &#39;qdleader&#39;);</span>
<span class="line">console.log(&quot;el.value&quot;,el.value)</span>
<span class="line">console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果打印</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">el.value jjc</span>
<span class="line">el.getAttribute(&#39;value&#39;)) jjc</span>
<span class="line"></span>
<span class="line">el.value qdleader</span>
<span class="line">el.getAttribute(&#39;value&#39;)) qdleader</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说 如果没有设置property时候，设置attribute，property会跟着改变，如果过设置了property了，他俩就分道扬镳，耗子尾汁了，attribute变化就不会影响到property了(有同学说，那我首次设置el.value=&quot;123&quot;,会发现property变了，而attribute为null)。由此，可得出结论：</p><p>property能够从attribute中得到同步； attribute不会同步property上的值； attribute和property之间的数据绑定是单向的，attribute-&gt;property； 更改property和attribute上的任意值，都会将更新反映到HTML页面中；</p><h2 id="attribute-or-property-修改class、id、name" tabindex="-1"><a class="header-anchor" href="#attribute-or-property-修改class、id、name"><span>Attribute or Property 修改class、id、name</span></a></h2><p>对于class、id、name、等属性，无论哪一方面发生改变，都会互相影响。（这一part比较直观就不演示了）</p><h2 id="对于新增加的属性" tabindex="-1"><a class="header-anchor" href="#对于新增加的属性"><span>对于新增加的属性</span></a></h2><p>eg4:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;input value=&quot;customInput&quot; qdleader=&quot;前端架构师&quot; /&gt;</span>
<span class="line"></span>
<span class="line">input.test = &#39;one&#39;</span>
<span class="line"></span>
<span class="line">console.log(input.test) //one</span>
<span class="line">console.log(input.getAttribute) //null</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg5：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;input value=&quot;customInput&quot; qdleader=&quot;前端架构师&quot; /&gt;</span>
<span class="line"></span>
<span class="line">input.getAttribute(&#39;qdleader&#39;) // 前端架构师</span>
<span class="line">input.qdleader // undefined</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到, 我们能够成功的获取自定义的 attribute, 但是无法获取 property.</p><p>其实不难理解, DOM 节点在初始化的时候会将html 规范中定义的 attribute 赋值到 property 上, 而自定义的 attribute 并不属于这个氛围内, 自然生成的 DOM 节点就没有这个 property.</p><p>好在 DOM 对象也提供了操作特性的 API：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  Element.hasAttribute(name) – 判断某个特性是否存在</span>
<span class="line">  elem.getAttribute(name) – 获取指定特性的值</span>
<span class="line">  elem.setAttribute(name, value) – 设置指定特性的值</span>
<span class="line">  elem.removeAttribute(name) – 移除指定特性</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上 API 定义在 Element 上。 根据 HTML 规范，标签以及特性名是不区分大小写的，因此以下代码是一样的：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  el.getAttribute(&#39;id&#39;)</span>
<span class="line">  el.getAttribute(&#39;ID&#39;)</span>
<span class="line">  el.getAttribute(&#39;iD&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制代码并且，特性永远都是字符串或 null。如果我们为特性设置非字符串的值，则引擎会将此值转换为字符串。属性是具有类型的： el.getAttribute(&#39;checked&#39;) === &#39;&#39; // 特性是字符串 el.checked === false // 属性是 boolean 类型的值</p><p>el.getAttribute(&#39;style&#39;) === &#39;color:blue&#39; // 特性是字符串 typeof el.style === &#39;object&#39; // 属性是 CSSStyleDeclaration 对象 复制代码即使都是字符串，属性和特性也可能不同，有一个例外就是 href： el.getAttribute(&#39;href&#39;) === &#39;#&#39; // 特性原样返回 html 设置的值 el.href === &#39;www.baidu.com&#39; // 属性返回解析后的完整 uri</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><blockquote><p>对属性Property可以赋任何类型的值，而对特性Attribute只能赋值字符串！并且setAttribute()的两个参数，都必须是字符串 class特性在变成属性时，名字改成了“className”，因此div1.className和div1.getAttrbute(&#39;class&#39;)相同。 两者都有可能引起DOM重新渲染。</p></blockquote><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><blockquote><p>1、property和attributies都是properties的子集，而每个attribute是attributies的子集； 2、attribute可以理解为特性，可以自定义，直接在html标签上添加的和使用setAttribute添加的情况一致，即html标签添加的都是attribute属性， property则是使用xx.属性进行更改，通常来讲，更改互相影响（value除外） 3、当添加新的非默认属性时，是不互通的</p></blockquote>`,45)])])}const u=s(l,[["render",i]]),c=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/DOM%E7%B1%BB/property%E5%92%8Cattribute%E5%8C%BA%E5%88%AB.html","title":"property 和 attribute 的区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"前端面试/js类/DOM类/property和attribute区别.md"}');export{u as comp,c as data};
