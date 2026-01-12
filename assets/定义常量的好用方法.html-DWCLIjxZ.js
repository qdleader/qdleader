import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="定义常量的好用方法" tabindex="-1"><a class="header-anchor" href="#定义常量的好用方法"><span>定义常量的好用方法</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 使用次数：可根据「每个用户」「公司」两个维度进行选择</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">GPT_SELECT_ARR</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;每个用户&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;公司&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 注意</span>
<span class="line"> * 这个map数组 和 数组是一一对应的</span>
<span class="line"> * 增删的时候需要等号两边同时改</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token constant">GPT_SELECT_ARR_MAP</span></span>
<span class="line"><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token constant">GPT_SELECT_ARR</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">status</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> status<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    pre<span class="token punctuation">[</span>cur<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span>label<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> pre<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">GPT_SELECT_ARR</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">GPT_SELECT_ARR_MAP</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98/review/%E5%AE%9A%E4%B9%89%E5%B8%B8%E9%87%8F%E7%9A%84%E5%A5%BD%E7%94%A8%E6%96%B9%E6%B3%95.html","title":"定义常量的好用方法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"项目中遇到的问题/review/定义常量的好用方法.md"}');export{o as comp,u as data};
