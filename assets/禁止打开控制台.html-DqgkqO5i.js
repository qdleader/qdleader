import{_ as s,c as a,a as e,o as t}from"./app-KfnfuIf0.js";const p={};function o(c,n){return t(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="禁止打开控制台" tabindex="-1"><a class="header-anchor" href="#禁止打开控制台"><span>禁止打开控制台</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//禁止F12键盘事件</span></span>
<span class="line">   document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">return</span> <span class="token number">123</span> <span class="token operator">!=</span> event<span class="token punctuation">.</span>keyCode <span class="token operator">||</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token comment">//禁止右键、选择、复制</span></span>
<span class="line">   document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">return</span> event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`js</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>function consoleOpenCallback2 () {
  document.body.innerHTML = &#39;年轻人，不要太好奇&#39;;
  window.close();
  window.location = &quot;about:blank&quot;;
}

setInterval(function () {
  const before = new Date();
  (function () { }).constructor(&quot;debugger&quot;)();
  // debugger;
  const after = new Date();
  const cost = after.getTime() - before.getTime();
  if (cost &gt; 100) {
    consoleOpenCallback2();
  }
}, 1000);
</code></pre><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,4)])])}const i=s(p,[["render",o]]),r=JSON.parse('{"path":"/tool/%E7%A6%81%E6%AD%A2%E6%89%93%E5%BC%80%E6%8E%A7%E5%88%B6%E5%8F%B0.html","title":"禁止打开控制台","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"tool/禁止打开控制台.md"}');export{i as comp,r as data};
