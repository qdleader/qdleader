import{_ as s,c as n,a,o as l}from"./app-Dgmug7RJ.js";const i={};function r(c,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise"><span>Promise</span></a></h1><h2 id="promise-的三种状态" tabindex="-1"><a class="header-anchor" href="#promise-的三种状态"><span>promise 的三种状态</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">pengding</span>
<span class="line"></span>
<span class="line">resolved</span>
<span class="line"></span>
<span class="line">rejected</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="then-和-catch-改变状态" tabindex="-1"><a class="header-anchor" href="#then-和-catch-改变状态"><span>then 和 catch 改变状态</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">then 正常返回 resolved， 里面报错返回 rejected</span>
<span class="line"></span>
<span class="line">catch 正常返回 resolved，里面报错返回 rejected</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg: 1.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Promise.resolve().then(() =&gt; {</span>
<span class="line">  console.log(1)</span>
<span class="line">}).catch(() =&gt; {</span>
<span class="line">  console.log(2)</span>
<span class="line">}).then(() =&gt; {</span>
<span class="line">  console.log(3)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">1,3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>then 里面没有报错，所以不会走catch方法，直接走then方法。打印1,3</p></blockquote><ol start="2"><li></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Promise.resolve().then(() =&gt; {</span>
<span class="line">  console.log(1)</span>
<span class="line">  throw new Error(&#39;error1&#39;)</span>
<span class="line">}).catch(() =&gt; {</span>
<span class="line">  console.log(2)</span>
<span class="line">}).then(() =&gt; {</span>
<span class="line">  console.log(3)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">1,2,3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>then 里面有报错，返回rejected，所以会走catch方法，catch里面没有报错，返回resolved，会继续走走then方法。所以打印1,2，3</p></blockquote><ol start="3"><li></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Promise.resolve().then(() =&gt; {</span>
<span class="line">  console.log(1)</span>
<span class="line">  throw new Error(&#39;error1&#39;)</span>
<span class="line">}).catch(() =&gt; {</span>
<span class="line">  console.log(2)</span>
<span class="line">}).catch(() =&gt; {</span>
<span class="line">  console.log(3)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">1,2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>then 里面有报错，返回rejected，所以会走catch方法，catch里面没有报错，返回resolved，所以不会走catch方法，所以打印1,2</p></blockquote><p>未完待续</p>`,24)]))}const t=s(i,[["render",r]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%BC%82%E6%AD%A5/promise.html","title":"Promise","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"promise 的三种状态","slug":"promise-的三种状态","link":"#promise-的三种状态","children":[]},{"level":2,"title":"then 和 catch 改变状态","slug":"then-和-catch-改变状态","link":"#then-和-catch-改变状态","children":[]}],"git":{"updatedTime":1743387340000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"dc352948a1078a819107f8f0dd0301e2a24fa1a8","time":1743387340000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加数组交集并集差集操作示例"}]},"filePathRelative":"前端面试/js类/异步/promise.md"}');export{t as comp,p as data};
