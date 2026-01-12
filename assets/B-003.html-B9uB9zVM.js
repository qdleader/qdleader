import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const l={};function t(i,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="b-003" tabindex="-1"><a class="header-anchor" href="#b-003"><span>B-003</span></a></h1><ol><li></li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  obj<span class="token punctuation">.</span>id <span class="token operator">=</span> i</span>
<span class="line">  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">4</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">4</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">4</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">4</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li></li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  obj<span class="token punctuation">.</span>id <span class="token operator">=</span> i</span>
<span class="line">  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)])])}const o=n(l,[["render",t]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E9%97%AD%E5%8C%85%E7%B1%BB/B-003.html","title":"B-003","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/js类/闭包类/B-003.md"}');export{o as comp,r as data};
