import{_ as t,c as a,a as o,o as n}from"./app-BJH5QZKa.js";const s={};function c(r,e){return n(),a("div",null,e[0]||(e[0]=[o(`<h1 id="object-hasown" tabindex="-1"><a class="header-anchor" href="#object-hasown"><span>Object.hasOwn</span></a></h1><h3 id="object-hasown-obj-propkey" tabindex="-1"><a class="header-anchor" href="#object-hasown-obj-propkey"><span>Object.hasOwn(obj, propKey)</span></a></h3><p>Object.hasOwn() 方法是比 Object.prototype.hasOwnProperty() 方法更加 便捷 和 安全 的策略。 例如 Object.create(null) 创建一个不继承自 Object.prototype 的对象，使 hasOwnProperty 方法无法访问。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Object.create(null).hasOwnProperty(&quot;foo&quot;)</span>
<span class="line">// Uncaught TypeError: Object.create(...).hasOwnProperty is not a function</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Object.hasOwn(obj, propKey) 使用案例。 let object = { foo: false } Object.hasOwn(object, &quot;foo&quot;) // true</p><p>let object2 = Object.create({ foo: true }) Object.hasOwn(object2, &quot;foo&quot;) // false</p><p>let object3 = Object.create(null) Object.hasOwn(object3, &quot;foo&quot;) // false</p>`,7)]))}const p=t(s,[["render",c],["__file","Object.hasOwn.html.vue"]]),b=JSON.parse('{"path":"/es6/Object.hasOwn.html","title":"Object.hasOwn","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"Object.hasOwn(obj, propKey)","slug":"object-hasown-obj-propkey","link":"#object-hasown-obj-propkey","children":[]}],"git":{"updatedTime":1736904811000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"es6/Object.hasOwn.md"}');export{p as comp,b as data};