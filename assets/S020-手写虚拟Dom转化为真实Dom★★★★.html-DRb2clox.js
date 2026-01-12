import{_ as s,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="s020-手写虚拟dom转化为真实dom★★★★" tabindex="-1"><a class="header-anchor" href="#s020-手写虚拟dom转化为真实dom★★★★"><span>S020-手写虚拟Dom转化为真实Dom★★★★</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">tag</span><span class="token operator">:</span><span class="token string">&quot;DIV&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">attrs</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;app&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">tag</span><span class="token operator">:</span><span class="token string">&#39;SPAN&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">tag</span><span class="token operator">:</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">tag</span><span class="token operator">:</span><span class="token string">&#39;SPAN&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">tag</span><span class="token operator">:</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">Tag</span><span class="token operator">:</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">转化为真实dom</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div id="app"><span><a></a></span><span><a></a><a></a></span></div> \`\`\`js <div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">// 真正的渲染函数</span>
<span class="line">function _render(vnode) {</span>
<span class="line">  // 如果是数字类型转化为字符串</span>
<span class="line">  if (typeof vnode === &quot;number&quot;) {</span>
<span class="line">    vnode = String(vnode);</span>
<span class="line">  }</span>
<span class="line">  // 字符串类型直接就是文本节点</span>
<span class="line">  if (typeof vnode === &quot;string&quot;) {</span>
<span class="line">    return document.createTextNode(vnode);</span>
<span class="line">  }</span>
<span class="line">  // 普通DOM</span>
<span class="line">  const dom = document.createElement(vnode.tag);</span>
<span class="line">  if (vnode.attrs) {</span>
<span class="line">    // 遍历属性</span>
<span class="line">    Object.keys(vnode.attrs).forEach((key) =&gt; {</span>
<span class="line">      const value = vnode.attrs[key];</span>
<span class="line">      dom.setAttribute(key, value);</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  // 子数组进行递归操作 这一步是关键</span>
<span class="line">  vnode.children.forEach((child) =&gt; dom.appendChild(_render(child)));</span>
<span class="line">  return dom;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">\`\`\`js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)])])}const o=s(l,[["render",i]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%89%8B%E5%86%99%E7%B1%BB/S020-%E6%89%8B%E5%86%99%E8%99%9A%E6%8B%9FDom%E8%BD%AC%E5%8C%96%E4%B8%BA%E7%9C%9F%E5%AE%9EDom%E2%98%85%E2%98%85%E2%98%85%E2%98%85.html","title":"S020-手写虚拟Dom转化为真实Dom★★★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/js类/手写类/S020-手写虚拟Dom转化为真实Dom★★★★.md"}');export{o as comp,r as data};
