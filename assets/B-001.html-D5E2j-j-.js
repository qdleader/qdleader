import{_ as s,c as n,a,o as i}from"./app-BJH5QZKa.js";const l={};function t(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="b-001" tabindex="-1"><a class="header-anchor" href="#b-001"><span>B-001</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let i;</span>
<span class="line">for (i = 0; i &lt; 3; i ++) {</span>
<span class="line">	const log = () =&gt; {</span>
<span class="line">		console.log(i)</span>
<span class="line">	}</span>
<span class="line">	setTimeout(log,100);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#答案： 3 3 3</p><p>#解析：</p><p>for() 迭代3次，在每次迭代时候，都会创建一个新函数log，log函数捕获变量i，然后， setTimeout()调度log()的执行。</p><p>当for循环完成时候变量i的值为3.</p><p>100ms后setTimeout调用的3 个 log() 回调。log() 读取变量 i 的当前值，即 3。</p>`,7)]))}const o=s(l,[["render",t],["__file","B-001.html.vue"]]),c=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E9%97%AD%E5%8C%85%E7%B1%BB/B-001.html","title":"B-001","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1736904811000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"前端面试/js类/闭包类/B-001.md"}');export{o as comp,c as data};