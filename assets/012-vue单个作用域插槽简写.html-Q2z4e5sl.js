import{_ as e,c as a,o as s,a as n}from"./app-Bul2w5Pu.js";const t={},l=n(`<h1 id="_012-vue单个作用域插槽简写" tabindex="-1"><a class="header-anchor" href="#_012-vue单个作用域插槽简写"><span>012-vue单个作用域插槽简写</span></a></h1><h2 id="单个作用域插槽的简写" tabindex="-1"><a class="header-anchor" href="#单个作用域插槽的简写"><span>单个作用域插槽的简写</span></a></h2><p>限定范围的插槽非常有趣，但为了使用它们，您还必须使用许多模板标记。幸运的是，有一个简写可以让我们摆脱它，但只有在我们使用单个作用域槽的情况下。</p><p>你或许这样使用过</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;TableList&gt;</span>
<span class="line">  &lt;template #header=&quot;attrList&quot;&gt;</span>
<span class="line">    &lt;TableHeader v-bind=&quot;attrList&quot; /&gt;</span>
<span class="line">  &lt;/template&gt;</span>
<span class="line">&lt;/TableList&gt;</span>
<span class="line"> // 不使用 template</span>
<span class="line"></span>
<span class="line">&lt;TableList #header=&quot;attrList&quot;&gt;</span>
<span class="line">  &lt;TableHeader v-bind=&quot;attrList&quot; /&gt;</span>
<span class="line">&lt;/TableList&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[l];function d(r,c){return s(),a("div",null,i)}const u=e(t,[["render",d],["__file","012-vue单个作用域插槽简写.html.vue"]]),v=JSON.parse('{"path":"/vue/012-vue%E5%8D%95%E4%B8%AA%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD%E7%AE%80%E5%86%99.html","title":"012-vue单个作用域插槽简写","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"单个作用域插槽的简写","slug":"单个作用域插槽的简写","link":"#单个作用域插槽的简写","children":[]}],"git":{"updatedTime":1722912902000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"vue/012-vue单个作用域插槽简写.md"}');export{u as comp,v as data};
