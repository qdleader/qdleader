import{_ as n,c as e,a,o as i}from"./app-ChbYw63X.js";const l={};function c(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="async-eventloop类问题" tabindex="-1"><a class="header-anchor" href="#async-eventloop类问题"><span>async(eventLoop类问题)</span></a></h1><p>下面输出什么？</p><p>eg1:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">async function async1 () {</span>
<span class="line">  console.log(&#39;1&#39;)</span>
<span class="line">  await async2();</span>
<span class="line">  console.log(&#39;2&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">saync function async2() {</span>
<span class="line">  console.log(&quot;3&quot;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">console.log(&#39;4&#39;)</span>
<span class="line">async1()</span>
<span class="line">console.log(&#39;5&#39;)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">4</span>
<span class="line">1</span>
<span class="line">3</span>
<span class="line">5</span>
<span class="line">2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点解析：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">最后输出2，（在await async2()之后的代码你可以理解为，放到了settimeOut里面执行了）执行到await async2()下面的代码会被放到event queue中，所以会先执行</span>
<span class="line">同步代码，再执行event queue中的代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>eg2:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">(async function () {</span>
<span class="line">  console.log(&#39;start&#39;)</span>
<span class="line">  const a = await 100;</span>
<span class="line">  console.log(a)</span>
<span class="line">  const b = await Promise.resolve(200)</span>
<span class="line">  console.log(b)</span>
<span class="line">  const c = await Promise.reject(300)</span>
<span class="line">  console.log(c)</span>
<span class="line">  console.log(&#39;end&#39;)</span>
<span class="line">})()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">start</span>
<span class="line">100</span>
<span class="line">200</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">由于c 是返回reject的promise，所以  console.log(c)</span>
<span class="line">  console.log(&#39;end&#39;)根本就不执行了。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const r=n(l,[["render",c]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%BC%82%E6%AD%A5/async(eventLoop%E7%B1%BB%E9%97%AE%E9%A2%98).html","title":"async(eventLoop类问题)","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1743991208000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"06ae3da64ec05c046ab6f8fcadaec095931d7383","time":1743991208000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加chat表格样式修改解决方案"}]},"filePathRelative":"前端面试/js类/异步/async(eventLoop类问题).md"}');export{r as comp,p as data};
