import{_ as n,e as s,f as i,o as a}from"./app-Dw20wKhM.js";const l={};function t(d,e){return a(),s("div",null,e[0]||(e[0]=[i(`<h1 id="v002-v-if和v-for一起使用的弊端及解决办法" tabindex="-1"><a class="header-anchor" href="#v002-v-if和v-for一起使用的弊端及解决办法"><span>V002-v-if和v-for一起使用的弊端及解决办法</span></a></h1><blockquote><p>由于v-for的优先级比v-if高，所以导致每循环一次就会去v-if一次，而v-if是通过创建和销毁dom元素来控制元素的显示与隐藏，所以就会不停的去创建和销毁元素，造成页面卡顿，性能下降。</p></blockquote><blockquote><p>解决办法：</p></blockquote><p>1.在v-for的外层或内层包裹一个元素来使用v-if</p><p>2.用computed处理</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  &lt;ul&gt;</span>
<span class="line">		&lt;li</span>
<span class="line">		  v-for=&quot;item in qdleaderArr&quot;</span>
<span class="line">		  v-if=&quot;item.isActive&quot;</span>
<span class="line">		  :key=&quot;item.id&quot;</span>
<span class="line">		&gt;</span>
<span class="line">		  {{ item.name }}</span>
<span class="line">		&lt;/li&gt;</span>
<span class="line">  &lt;/ul&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">computed: {</span>
<span class="line">	qdleaderArrActive: function () {</span>
<span class="line">		return this.qdleaderArr.filter(function (item) {</span>
<span class="line">		  return item.isActive</span>
<span class="line">		})</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line">&lt;ul&gt;</span>
<span class="line">	&lt;li</span>
<span class="line">	  v-for=&quot;item in qdleaderArrActive&quot;</span>
<span class="line">	  :key=&quot;item.id&quot;</span>
<span class="line">	&gt;</span>
<span class="line">		{{ item.name }}</span>
<span class="line">	&lt;/li&gt;</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const v=n(l,[["render",t],["__file","V002-v-if和v-for一起使用的弊端及解决办法.html.vue"]]),c=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V002-v-if%E5%92%8Cv-for%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8%E7%9A%84%E5%BC%8A%E7%AB%AF%E5%8F%8A%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html","title":"V002-v-if和v-for一起使用的弊端及解决办法","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1740622710000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"前端面试/vue篇/V002-v-if和v-for一起使用的弊端及解决办法.md"}');export{v as comp,c as data};
