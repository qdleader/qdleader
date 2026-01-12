import{_ as a,c as n,a as r,o as t}from"./app-KfnfuIf0.js";const d={};function c(o,e){return t(),n("div",null,[...e[0]||(e[0]=[r(`<h1 id="vue3性能提升精简篇" tabindex="-1"><a class="header-anchor" href="#vue3性能提升精简篇"><span>vue3性能提升精简篇</span></a></h1><h2 id="_1-响应式原理" tabindex="-1"><a class="header-anchor" href="#_1-响应式原理"><span>1. 响应式原理</span></a></h2><pre><code>vue2中响应式原理是使用\`Object.defineProperty\`对数据进行劫持，然后通过\`getter\`和\`setter\`来监听数据的变化，从而实现响应式。但是这种方式存在一些问题，比如无法监听数组的变化，无法监听对象的新增和删除属性等。

vue3中响应式原理是使用\`Proxy\`来实现的，\`Proxy\`可以监听对象和数组的变化，包括新增和删除属性等。同时，vue3中使用了\`ES6\`的\`Map\`来存储响应式数据，这样可以提高性能。
</code></pre><h2 id="_2-编译优化" tabindex="-1"><a class="header-anchor" href="#_2-编译优化"><span>2. 编译优化</span></a></h2><pre><code>引入静态标记（PatchFlag），编译时标记模板中静态和动态内容，更新时只关注动态部分
实现了按需更新，避免了 Vue2 中全量对比虚拟 DOM 的性能开销
静态提升（HoistStatic），将静态节点提升到渲染函数外，避免重复创建
预字符串化（Stringify Static），将连续的静态节点编译为字符串，减少创建虚拟节点的开销
缓存事件处理函数，避免不必要的重新创建
</code></pre><h2 id="_3-虚拟-dom-优化" tabindex="-1"><a class="header-anchor" href="#_3-虚拟-dom-优化"><span>3. 虚拟 DOM 优化</span></a></h2><pre><code>重写了虚拟 DOM 的实现，优化了对比算法
结合编译时信息，减少了运行时对比的节点数量和复杂度
针对静态节点和纯文本节点有专门的优化处理
</code></pre><h2 id="_4-体积优化" tabindex="-1"><a class="header-anchor" href="#_4-体积优化"><span>4. 体积优化</span></a></h2><pre><code>采用 Tree-shaking 技术，只打包应用中实际使用的功能
拆分了核心功能模块，如 reactivity、compiler、runtime 等可以单独引入
相比 Vue2，未使用的 API 不会被打包，减小了最终 bundle 体积
</code></pre><h2 id="_5-其他优化" tabindex="-1"><a class="header-anchor" href="#_5-其他优化"><span>5. 其他优化</span></a></h2><pre><code>支持 Fragments（片段），允许组件返回多个根节点，减少不必要的 wrapper 节点
支持 Suspense 和异步组件，更好地处理异步加载场景
组合式 API（Composition API）的设计使代码组织更灵活，也间接提升了代码执行效率
更好的 TypeScript 支持：Vue 3.0 使用 TypeScript 重写，提供了更好的类型推断和静态分析能力，使得代码更健壮，易于维护和扩展。
</code></pre>`,11)])])}const i=a(d,[["render",c]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue3%E7%AF%87/vue3%E6%80%A7%E8%83%BD%E6%8F%90%E5%8D%87%E7%B2%BE%E7%AE%80%E7%AF%87.html","title":"vue3性能提升精简篇","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/vue3篇/vue3性能提升精简篇.md"}');export{i as comp,p as data};
