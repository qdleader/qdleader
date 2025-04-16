import{_ as s,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="截图不完整问题" tabindex="-1"><a class="header-anchor" href="#截图不完整问题"><span>截图不完整问题</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> html2canvas <span class="token keyword">from</span> <span class="token string">&quot;html2canvas&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">           <span class="token keyword">let</span> num <span class="token operator">=</span> window<span class="token punctuation">.</span>pageYOffset <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop</span>
<span class="line"></span>
<span class="line">            <span class="token keyword">var</span> device <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">var</span> isAndroid <span class="token operator">=</span> device<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Android&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> device<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Adr&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//android终端</span></span>
<span class="line">            <span class="token keyword">var</span> isiOS <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>device<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\(i[^;]+;( U;)? CPU.+Mac OS X</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ios终端</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>isiOS<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                num <span class="token operator">=</span> num <span class="token operator">+</span><span class="token number">50</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>isAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                num <span class="token operator">=</span> num <span class="token operator">-</span><span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">       </span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                     <span class="token keyword">let</span> ref <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>faultTree<span class="token punctuation">;</span> <span class="token comment">// 截图区域</span></span>
<span class="line">                      <span class="token keyword">const</span> targetDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#imageToFile&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                     <span class="token function">html2canvas</span><span class="token punctuation">(</span>targetDom<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">width</span><span class="token operator">:</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>availWidth<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">height</span><span class="token operator">:</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>availHeight <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">windowWidth</span><span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollWidth<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">windowHeight</span><span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight <span class="token operator">-</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">y</span><span class="token operator">:</span>num<span class="token punctuation">,</span></span>
<span class="line">                           <span class="token literal-property property">useCORS</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">canvas</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">let</span> dataURL <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&quot;image/png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token comment">//获取海报地址</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span>dataURL <span class="token operator">=</span> dataURL</span>
<span class="line">                            <span class="token comment">// // 打开保存海报的子组件的</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>savePic<span class="token punctuation">.</span><span class="token function">openShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截图工具，我们会用到，但会发现一些异步数据图片啥的我么拿不到，截取不完整。</p><p>加上这个属性就可以啦 useCORS: true</p>`,4)]))}const i=s(e,[["render",o]]),u=JSON.parse('{"path":"/tool/%E6%88%AA%E5%9B%BE%E4%B8%8D%E5%AE%8C%E6%95%B4%E9%97%AE%E9%A2%98.html","title":"截图不完整问题","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"tool/截图不完整问题.md"}');export{i as comp,u as data};
