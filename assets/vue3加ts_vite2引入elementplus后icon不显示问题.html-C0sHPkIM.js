import{_ as e,c as n,a,o as i}from"./app-DFnxdJ0h.js";const l={};function t(p,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="vue3加ts-vite2引入elementplus后icon不显示问题" tabindex="-1"><a class="header-anchor" href="#vue3加ts-vite2引入elementplus后icon不显示问题"><span>vue3加ts+vite2引入elementplus后icon不显示问题</span></a></h1><p>直接 vite2创建vue3项目</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">yarn create @vitejs<span class="token operator">/</span>app</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>选择vue-ts 直接引入elementplus 会发现icon 不显示</p><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1"><span>方法1</span></a></h2><p>在index.html中</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/element-plus/lib/theme-chalk/index.css&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2"><span>方法2</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">do this:</span>
<span class="line">  yarn add sass -D</span>
<span class="line">  yarn add vite-plugin-style-import -D</span>
<span class="line"></span>
<span class="line">vite：</span>
<span class="line">import { defineConfig } from &#39;vite&#39;</span>
<span class="line">import vue from &#39;@vitejs/plugin-vue&#39;</span>
<span class="line"></span>
<span class="line">import path from &#39;path&#39;</span>
<span class="line">import styleImport from &#39;vite-plugin-style-import&#39;</span>
<span class="line"></span>
<span class="line">export default defineConfig({</span>
<span class="line">plugins: [</span>
<span class="line">vue(),</span>
<span class="line">styleImport({</span>
<span class="line">libs: [{</span>
<span class="line">libraryName: &#39;element-plus&#39;,</span>
<span class="line">esModule: true,</span>
<span class="line">ensureStyleFile: true,</span>
<span class="line">resolveStyle: (name) =&gt; {</span>
<span class="line">name = name.slice(3)</span>
<span class="line">return element-plus/packages/theme-chalk/src/\${name}.scss;</span>
<span class="line">},</span>
<span class="line">resolveComponent: (name) =&gt; {</span>
<span class="line">return element-plus/lib/\${name};</span>
<span class="line">},</span>
<span class="line">}]</span>
<span class="line">}),</span>
<span class="line">],</span>
<span class="line"></span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还不生效就在引入个</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import &#39;element-plus/packages/theme-chalk/src/base.scss&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,11)]))}const c=e(l,[["render",t]]),d=JSON.parse('{"path":"/vue3/vue3%E5%8A%A0ts_vite2%E5%BC%95%E5%85%A5elementplus%E5%90%8Eicon%E4%B8%8D%E6%98%BE%E7%A4%BA%E9%97%AE%E9%A2%98.html","title":"vue3加ts+vite2引入elementplus后icon不显示问题","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"vue3/vue3加ts+vite2引入elementplus后icon不显示问题.md"}');export{c as comp,d as data};
