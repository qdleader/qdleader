import{_ as e,e as n,f as a,o as i}from"./app-Dw20wKhM.js";const l={};function p(r,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="vb002-props定义详细一些" tabindex="-1"><a class="header-anchor" href="#vb002-props定义详细一些"><span>Vb002-props定义详细一些</span></a></h1><p>###prop定义尽量详细，</p><blockquote><p>细致的 prop 定义有两个好处：</p></blockquote><blockquote><p>它们写明了组件的 API，所以很容易看懂组件的用法； 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。</p></blockquote><p>#bad</p><p>props:[&#39;status&#39;],</p><p>#good:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">props:{</span>
<span class="line">	status:String</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#better:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 更好的做法！</span>
<span class="line">props: {</span>
<span class="line">  status: {</span>
<span class="line">    type: String,</span>
<span class="line">    required: true,</span>
<span class="line">    validator: function (value) {</span>
<span class="line">      return [</span>
<span class="line">        &#39;syncing&#39;,</span>
<span class="line">        &#39;synced&#39;,</span>
<span class="line">        &#39;version-conflict&#39;,</span>
<span class="line">        &#39;error&#39;</span>
<span class="line">      ].indexOf(value) !== -1</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###注意 props 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里，诸如 data、computed 或 methods 等实例属性还无法使用。</p>`,11)]))}const d=e(l,[["render",p],["__file","Vb002-props定义详细一些.html.vue"]]),c=JSON.parse('{"path":"/vue/vue%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/Vb002-props%E5%AE%9A%E4%B9%89%E8%AF%A6%E7%BB%86%E4%B8%80%E4%BA%9B.html","title":"Vb002-props定义详细一些","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1740622710000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"vue/vue最佳实践/Vb002-props定义详细一些.md"}');export{d as comp,c as data};
