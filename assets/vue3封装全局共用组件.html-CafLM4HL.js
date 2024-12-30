import{_ as n,c as e,a,o as l}from"./app-D_ZNEwCJ.js";const i={};function t(p,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="vue3封装全局共用组件" tabindex="-1"><a class="header-anchor" href="#vue3封装全局共用组件"><span>vue3封装全局共用组件</span></a></h1><p>很简单其实， 比如我们来封装一个empty 空状态的组件</p><p>先写个 empty.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;empty&quot;&gt;</span>
<span class="line">    &lt;img src=&quot;../../assets/img/empty.png&quot; /&gt;</span>
<span class="line">    &lt;div class=&quot;text&quot;&gt;{{ text }}&lt;/div&gt;</span>
<span class="line">    &lt;slot /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">export default {</span>
<span class="line">  props: {</span>
<span class="line">    text: {</span>
<span class="line">      type: String</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;scss&quot; scoped&gt;</span>
<span class="line">.empty {</span>
<span class="line">  padding: 210px 0;</span>
<span class="line">  text-align: center;</span>
<span class="line">}</span>
<span class="line">.text{</span>
<span class="line">    color: #9e9e9e;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 main.ts 中 引入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import empty from &#39;@/components/common/empty.vue&#39;</span>
<span class="line"></span>
<span class="line">const app = createApp(App)</span>
<span class="line">app.component(&#39;iEmpty&#39;,empty)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在用的组件直接用 即可</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;iEmpty /&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const c=n(i,[["render",t],["__file","vue3封装全局共用组件.html.vue"]]),r=JSON.parse('{"path":"/vue3/vue3%E5%B0%81%E8%A3%85%E5%85%A8%E5%B1%80%E5%85%B1%E7%94%A8%E7%BB%84%E4%BB%B6.html","title":"vue3封装全局共用组件","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1735538705000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"vue3/vue3封装全局共用组件.md"}');export{c as comp,r as data};
