import{_ as n,c as e,a,o as i}from"./app-D8HvJIFE.js";const l={};function d(c,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h1 id="vue3中常见修饰符" tabindex="-1"><a class="header-anchor" href="#vue3中常见修饰符"><span>vue3中常见修饰符</span></a></h1><p>vue3 中常见的事件修饰符 vue3中的事件修饰符跟vue2是一样的。。。我们在这再过一下常用的的吧</p><h2 id="_1-stop-阻止冒泡-通俗讲就是阻止事件向上级dom元素传递" tabindex="-1"><a class="header-anchor" href="#_1-stop-阻止冒泡-通俗讲就是阻止事件向上级dom元素传递"><span>（１）. stop：阻止冒泡（通俗讲就是阻止事件向上级DOM元素传递）</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">　　　.stop</span>
<span class="line"></span>
<span class="line">&lt;div @click.stop=&quot;doS&quot;&gt;</span>
<span class="line"></span>
<span class="line">&lt;/div&gt;</span>
<span class="line">\`\`\`　</span>
<span class="line"></span>
<span class="line">## （２）. prevent：阻止默认事件的发生</span>
<span class="line"></span>
<span class="line">　　默认事件指对DOM的操作会引起自动执行的动作，比如点击超链接的时候会进行页面的跳转，点击表单提交按钮时会重新加载页面等，使用&quot;.prevent&quot;修饰符可以阻止这些事件的发生。</span>
<span class="line"></span>
<span class="line">##（３）. capture：捕获冒泡，即有冒泡发生时，有该修饰符的dom元素会先执行，如果有多个，从外到内依次执行，然后再按自然顺序执行触发的事件。</span>
<span class="line"></span>
<span class="line">　　　</span>
<span class="line">##（４）. self：将事件绑定到自身，只有自身才能触发，通常用于避免冒泡事件的影响</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">##（５）. once：设置事件只能触发一次，比如按钮的点击等。</span>
<span class="line"></span>
<span class="line">##（６）. passive：该修饰符大概意思用于对DOM的默认事件进行性能优化，根据官网的例子比如超出最大范围的滚动条滚动的。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">## （7）. native：在父组件中给子组件绑定一个原生的事件，就将子组件变成了普通的HTML标签，不加&#39;. native&#39;事件是无法触 发的。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)])])}const v=n(l,[["render",d]]),r=JSON.parse('{"path":"/vue3/vue3%E4%B8%AD%E5%B8%B8%E8%A7%81%E4%BF%AE%E9%A5%B0%E7%AC%A6.html","title":"vue3中常见修饰符","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"vue3/vue3中常见修饰符.md"}');export{v as comp,r as data};
