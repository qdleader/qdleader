import{_ as s,c as a,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function c(o,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件"><span>下载文件</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  link<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&quot;file name&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  link<span class="token punctuation">.</span>href <span class="token operator">=</span> url<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态资源服务器设置响应头也能触发浏览器下载。" tabindex="-1"><a class="header-anchor" href="#静态资源服务器设置响应头也能触发浏览器下载。"><span>静态资源服务器设置响应头也能触发浏览器下载。</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">Content<span class="token operator">-</span>Disposition<span class="token operator">:</span> attachment<span class="token punctuation">;</span> filename<span class="token operator">=</span><span class="token string">&quot;filename.jpg&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,4)]))}const i=s(p,[["render",c]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7/%E6%96%87%E4%BB%B6%E7%B1%BB/%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6.html","title":"下载文件","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端小tip/常用工具/文件类/下载文件.md"}');export{i as comp,u as data};
