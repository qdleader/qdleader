import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const i={};function c(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="css-module的global用法" tabindex="-1"><a class="header-anchor" href="#css-module的global用法"><span>css Module的global用法</span></a></h1><p>css Module的global用法</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"></span>
<span class="line">&lt;div className=<span class="token string">&quot;noDisplay&quot;</span>&gt;1111&lt;/div&gt;</span>
<span class="line"><span class="token comment">/* .playing 会被提升为全局样式 */</span></span>
<span class="line">  <span class="token selector">:global(.noDisplay)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  </span>
<span class="line"><span class="token selector">&lt;div className=</span><span class="token punctuation">{</span>styles.noDisplay<span class="token punctuation">}</span>&gt;1111&lt;/div&gt;</span>
<span class="line">  <span class="token comment">/* .playing仍未局部样式，rotate确不会被加上hash */</span></span>
<span class="line">  <span class="token selector">.noDisplay :global</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const o=n(i,[["render",c]]),d=JSON.parse('{"path":"/react/css%20Module%E7%9A%84global%E7%94%A8%E6%B3%95.html","title":"css Module的global用法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"react/css Module的global用法.md"}');export{o as comp,d as data};
