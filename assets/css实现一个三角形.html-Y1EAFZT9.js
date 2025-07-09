import{_ as e,c as a,a as n,o as i}from"./app-C-PIe5GM.js";const l={};function t(d,s){return i(),a("div",null,s[0]||(s[0]=[n(`<h1 id="css实现一个三角形" tabindex="-1"><a class="header-anchor" href="#css实现一个三角形"><span>css实现一个三角形</span></a></h1><p>向上的 等腰 三角形</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.box {</span>
<span class="line">  width:0;</span>
<span class="line">  height:0;</span>
<span class="line">  border-left:50px solid transparent;</span>
<span class="line">  border-right:50px solid transparent;</span>
<span class="line">  border-bottom:100px solid red;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等边三角形呢？</p><p>对于等边三角形我们知道，高是边的sqrt(3)/2倍，所以如果高为40的话，两边就是差不多23</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.triangle {</span>
<span class="line">				border-left: 23px solid transparent;  </span>
<span class="line">				border-right: 23px solid transparent;  </span>
<span class="line">				border-bottom: 40px solid red;  </span>
<span class="line">				width: 0px;</span>
<span class="line">				height: 0px;</span>
<span class="line">			}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const c=e(l,[["render",t]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/css%E7%B1%BB/css%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E4%B8%89%E8%A7%92%E5%BD%A2.html","title":"css实现一个三角形","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752024824000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"09b8c9c8ada68b61d7ad3afa473ae10bdbf30f27","time":1752024824000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(Vue): 详细说明Vue 2/3响应式原理及示例"}]},"filePathRelative":"前端面试/css类/css实现一个三角形.md"}');export{c as comp,p as data};
