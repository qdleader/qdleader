import{_ as n,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const t={};function o(l,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="表格排序" tabindex="-1"><a class="header-anchor" href="#表格排序"><span>表格排序</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">            el<span class="token operator">-</span>table</span>
<span class="line">              <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">&quot;tableData&quot;</span></span>
<span class="line">              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;y_table&quot;</span></span>
<span class="line">              border</span>
<span class="line">              stripe</span>
<span class="line">               @sort<span class="token operator">-</span>change<span class="token operator">=</span><span class="token string">&quot;changeTableSort&quot;</span></span>
<span class="line">               show<span class="token operator">-</span>summary</span>
<span class="line">               sum<span class="token operator">-</span>text<span class="token operator">=</span><span class="token string">&quot;总和&quot;</span></span>
<span class="line">              style<span class="token operator">=</span><span class="token string">&quot;width: 100%&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column</span>
<span class="line">                      label<span class="token operator">=</span><span class="token string">&quot;用户数&quot;</span></span>
<span class="line">                      prop<span class="token operator">=</span><span class="token string">&quot;user_count&quot;</span></span>
<span class="line">                      <span class="token operator">:</span>sortable<span class="token operator">=</span><span class="token string">&quot;&#39;custom&#39;&quot;</span></span>
<span class="line">                      <span class="token operator">&gt;</span></span>
<span class="line">                      <span class="token operator">&lt;</span>template slot<span class="token operator">-</span>scope<span class="token operator">=</span><span class="token string">&quot;scope&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                          <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span></span>
<span class="line">                              <span class="token punctuation">{</span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>user_count<span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">                          <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">                      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line">                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">//选择指定列进行排序</span></span>
<span class="line"><span class="token function">changeTableSort</span><span class="token punctuation">(</span><span class="token parameter">column</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>column<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>prop <span class="token operator">==</span> <span class="token string">&#39;course_title&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>order <span class="token operator">==</span> <span class="token string">&#39;ascending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>order <span class="token operator">==</span> <span class="token string">&#39;descending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">9</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>prop <span class="token operator">==</span> <span class="token string">&#39;total_count&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>order <span class="token operator">==</span> <span class="token string">&#39;ascending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line">     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>order <span class="token operator">==</span> <span class="token string">&#39;descending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">4</span></span>
<span class="line">     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">9</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>prop <span class="token operator">==</span> <span class="token string">&#39;valid_count&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>order <span class="token operator">==</span> <span class="token string">&#39;ascending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line">     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>order <span class="token operator">==</span> <span class="token string">&#39;descending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">6</span></span>
<span class="line">     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">9</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>prop <span class="token operator">==</span> <span class="token string">&#39;user_count&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>order <span class="token operator">==</span> <span class="token string">&#39;ascending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">7</span></span>
<span class="line">     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span>order <span class="token operator">==</span> <span class="token string">&#39;descending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">8</span></span>
<span class="line">     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">this</span><span class="token punctuation">.</span>order_type <span class="token operator">=</span> <span class="token number">9</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const i=n(t,[["render",o]]),r=JSON.parse('{"path":"/UI%E6%A1%86%E6%9E%B6/element/%E8%A1%A8%E6%A0%BC%E6%8E%92%E5%BA%8F.html","title":"表格排序","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"UI框架/element/表格排序.md"}');export{i as comp,r as data};
