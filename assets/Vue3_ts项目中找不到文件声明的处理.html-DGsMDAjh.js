import{_ as n,c as a,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function l(o,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="vue3-ts项目中找不到文件声明的处理" tabindex="-1"><a class="header-anchor" href="#vue3-ts项目中找不到文件声明的处理"><span>Vue3+ts项目中找不到文件声明的处理</span></a></h1><p>.d.ts文件放置的目录与tsconfig.json文件指定的includes匹配列表路径一致</p><p>我的是放到src 下面 新建一个 vite-env.d.ts文件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;*.vue&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> Component<span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> defineComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> Component<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;*.ts&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const i=n(p,[["render",l]]),r=JSON.parse('{"path":"/vue3/Vue3_ts%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%89%BE%E4%B8%8D%E5%88%B0%E6%96%87%E4%BB%B6%E5%A3%B0%E6%98%8E%E7%9A%84%E5%A4%84%E7%90%86.html","title":"Vue3+ts项目中找不到文件声明的处理","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"vue3/Vue3+ts项目中找不到文件声明的处理.md"}');export{i as comp,r as data};
