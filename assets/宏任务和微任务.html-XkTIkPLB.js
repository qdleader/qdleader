import{_ as s,c as a,a as n,o as l}from"./app-D8HvJIFE.js";const i={};function d(t,e){return l(),a("div",null,[...e[0]||(e[0]=[n(`<h1 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务"><span>宏任务和微任务</span></a></h1><h2 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务"><span>宏任务</span></a></h2><p>setTimeout setInterval Ajax DOM事件</p><h2 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务"><span>微任务</span></a></h2><p>Promise async/await</p><h2 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序"><span>执行顺序</span></a></h2><p>微任务执行时机比宏任务要早</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">console.log(1)</span>
<span class="line"></span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">  console.log(2)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">Promise.resolve().then(() =&gt; {</span>
<span class="line">    console.log(3)</span>
<span class="line">})</span>
<span class="line">console.log(4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案 ：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">1</span>
<span class="line">4</span>
<span class="line">3</span>
<span class="line">2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)])])}const r=s(i,[["render",d]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%BC%82%E6%AD%A5/%E5%AE%8F%E4%BB%BB%E5%8A%A1%E5%92%8C%E5%BE%AE%E4%BB%BB%E5%8A%A1.html","title":"宏任务和微任务","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"前端面试/js类/异步/宏任务和微任务.md"}');export{r as comp,p as data};
