import{_ as s,c as n,a,o as i}from"./app-CJxOrLyD.js";const l={};function t(d,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="v001-vuerouter是怎么传值的" tabindex="-1"><a class="header-anchor" href="#v001-vuerouter是怎么传值的"><span>V001-vuerouter是怎么传值的</span></a></h1><ol><li></li></ol><blockquote><p>在路由处配置</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">path:&#39;/detail/:id&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">调用：</span>
<span class="line">this.$router.push({</span>
<span class="line">	path:&#39;/home/\${id}&#39;</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件内通过this.$route.params.id即可获取。</p><p>2.在router-link标签中传递参数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;router-link :to = {</span>
<span class="line">	params:{</span>
<span class="line">		id:1</span>
<span class="line">	}</span>
<span class="line">}/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可通过： this.$route.params.id获取</p><blockquote><p>这里通过router-link传参方式是隐形传参</p></blockquote><p>3.另一种params的是通过params传参，通过name配置路由。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//路由处：</span>
<span class="line"></span>
<span class="line">{</span>
<span class="line">	path：&#39;/home&#39;,</span>
<span class="line">	name:&#39;Home&#39;,</span>
<span class="line">	component:Home</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">调用：</span>
<span class="line"></span>
<span class="line">this.$router.push({</span>
<span class="line">	name:&#39;Home&#39;,</span>
<span class="line">	params:{</span>
<span class="line">		id:id</span>
<span class="line">	}</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取： this.$route.params.id</p><p>4.通过query来传递参数，参数会在url后边的?id=?中显示</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//路由处：</span>
<span class="line"></span>
<span class="line">{</span>
<span class="line">	path：&#39;/home&#39;,</span>
<span class="line">	name:&#39;Home&#39;,</span>
<span class="line">	component:Home</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">调用：</span>
<span class="line"></span>
<span class="line">this.$router.push({</span>
<span class="line">	path:&#39;/home&#39;,</span>
<span class="line">	query:{</span>
<span class="line">		id:id</span>
<span class="line">	}</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取： this.$route.query.id</p>`,18)]))}const p=s(l,[["render",t]]),c=JSON.parse(`{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V001-vuerouter%E6%98%AF%E6%80%8E%E4%B9%88%E4%BC%A0%E5%80%BC%E7%9A%84.html","title":"V001-vuerouter是怎么传值的","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1755237773000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"6deb5d76223f5123b8c6a909eb9b48279cf2bc9e","time":1755237773000,"email":"yk4545945@163.com","author":"qdleader","message":"Merge branch 'master' of https://github.com/qdleader/qdleader"}]},"filePathRelative":"前端面试/vue篇/V001-vuerouter是怎么传值的.md"}`);export{p as comp,c as data};
