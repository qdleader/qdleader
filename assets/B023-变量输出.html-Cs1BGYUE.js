import{_ as s,c as a,a as p,o as e}from"./app-D8HvJIFE.js";const l={};function t(i,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h2 id="变量输出" tabindex="-1"><a class="header-anchor" href="#变量输出"><span>变量输出</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> bar <span class="token operator">=</span> foo<span class="token punctuation">;</span></span>
<span class="line">foo<span class="token punctuation">.</span>x <span class="token operator">=</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>x<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span>x<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// undefined</span></span>
<span class="line"><span class="token comment">// {n: 2}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    创建了一个对象字面量 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span></span>
<span class="line">    将这个对象的引用赋值给变量 foo</span>
<span class="line">    此时 foo 指向内存中地址为 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span> 的对象</span>
<span class="line">    <span class="token keyword">var</span> bar <span class="token operator">=</span> foo<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    将 foo 的引用复制给 bar</span>
<span class="line">    现在 foo 和 bar 都指向同一个对象 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span></span>
<span class="line">    修改 foo 或 bar 都会影响同一个对象</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">foo<span class="token punctuation">.</span>x <span class="token operator">=</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    这是最复杂的一行，需要分解来看：</span>
<span class="line"></span>
<span class="line">        a<span class="token punctuation">)</span> 首先，赋值操作是从右到左进行的，但属性赋值是同时发生的</span>
<span class="line">        b<span class="token punctuation">)</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span> 会将 foo 的引用改为指向新对象 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span></span>
<span class="line">        c<span class="token punctuation">)</span> 但在此之前，foo<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token operator">...</span> 会先执行，在旧对象上添加 x 属性</span>
<span class="line">        d<span class="token punctuation">)</span> 所以实际上是：先在旧对象 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span> 上添加 x 属性，值为 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>，然后将 foo 指向新对象</span>
<span class="line"></span>
<span class="line">执行后：</span>
<span class="line"></span>
<span class="line">foo 指向 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span></span>
<span class="line">bar 仍然指向旧对象，但旧对象现在变成了 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>x<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    输出 foo<span class="token punctuation">.</span>x 的值</span>
<span class="line">    由于 foo 现在指向 <span class="token punctuation">{</span><span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>，而这个对象没有 x 属性</span>
<span class="line">    所以结果是 <span class="token keyword">undefined</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">最终输出会是：<span class="token keyword">undefined</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)])])}const c=s(l,[["render",t]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B023-%E5%8F%98%E9%87%8F%E8%BE%93%E5%87%BA.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"前端面试/js类/变量类/B023-变量输出.md"}');export{c as comp,r as data};
