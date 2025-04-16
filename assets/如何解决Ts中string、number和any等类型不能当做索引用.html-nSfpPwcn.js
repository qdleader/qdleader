import{_ as n,c as a,a as e,o as t}from"./app-DFnxdJ0h.js";const p={};function o(c,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="如何解决ts中string、number和any等类型不能当做索引用" tabindex="-1"><a class="header-anchor" href="#如何解决ts中string、number和any等类型不能当做索引用"><span>如何解决Ts中string、number和any等类型不能当做索引用</span></a></h1><p>元素隐式具有“any”类型，因为类型为“number”的表达式不能用于索引类型“[***”。在类型“[ ***”上找不到具有类型为“number&quot;的参数的索引签名</p><p>解决方法</p><h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一：</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">changePhase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">const</span> phase <span class="token operator">=</span> <span class="token punctuation">(</span>phaseObj <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二：</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">changePhase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">const</span> phase <span class="token operator">=</span> phaseObj<span class="token punctuation">[</span>item <span class="token keyword">as</span> keyof <span class="token keyword">typeof</span> phaseObj<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三"><span>方法三：</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">changePhase</span> <span class="token operator">=</span>  <span class="token keyword">function</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">object</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> phaseObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const l=n(p,[["render",o]]),i=JSON.parse('{"path":"/Typescript/%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3Ts%E4%B8%ADstring%E3%80%81number%E5%92%8Cany%E7%AD%89%E7%B1%BB%E5%9E%8B%E4%B8%8D%E8%83%BD%E5%BD%93%E5%81%9A%E7%B4%A2%E5%BC%95%E7%94%A8.html","title":"如何解决Ts中string、number和any等类型不能当做索引用","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"Typescript/如何解决Ts中string、number和any等类型不能当做索引用.md"}');export{l as comp,i as data};
