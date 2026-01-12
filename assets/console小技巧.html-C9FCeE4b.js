import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const l={};function c(t,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="console-小技巧" tabindex="-1"><a class="header-anchor" href="#console-小技巧"><span>console 小技巧</span></a></h1><p>console 的妙用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 1. console.group 和 console.groupEnd</span></span>
<span class="line"><span class="token comment">// console.group 方法用于创建一个分组，以便您可以将相关的日志消息分组在一起，以便更好地组织输出。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;分组1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;日志消息1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;日志消息2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;分组2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;日志消息3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;日志消息4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. console.table </span></span>
<span class="line"><span class="token comment">// console.table 方法以表格形式输出数据，以便更易读和理解。</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">35</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. console.assert</span></span>
<span class="line"><span class="token comment">// console.assert 方法用于检查某个条件是否为真。如果条件为假，则输出一条错误消息。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;条件不满足&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. console.clear</span></span>
<span class="line"><span class="token comment">// console.clear 方法用于清除控制台屏幕上的所有输出。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5. console.time 和 console.timeEnd</span></span>
<span class="line"><span class="token comment">// console.time 方法用于开始计时器，console.timeEnd 方法用于停止计时器并输出所经过的时间。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;计时器&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 想要计时的代码</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...code</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;计时器&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 6. console.count</span></span>
<span class="line"><span class="token comment">// console.count 方法用于计数，可以用来跟踪特定代码路径的执行次数。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">&#39;执行次数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">&#39;执行次数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">&#39;执行次数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 7. console.trace</span></span>
<span class="line"><span class="token comment">// console.trace 方法用于输出堆栈跟踪，可以用来跟踪代码的执行流程。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 8. console.profile 和 console.profileEnd</span></span>
<span class="line"><span class="token comment">// console.profile 方法用于开始性能分析器，console.profileEnd 方法用于停止性能分析器并输出分析结果。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">profile</span><span class="token punctuation">(</span><span class="token string">&#39;性能分析器&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 想要分析性能的代码</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...code</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">profileEnd</span><span class="token punctuation">(</span><span class="token string">&#39;性能分析器&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 9. console.timeStamp</span></span>
<span class="line"><span class="token comment">// console.timeStamp 方法用于在控制台中添加一个时间戳，以便更好地组织输出。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">timeStamp</span><span class="token punctuation">(</span><span class="token string">&#39;时间戳&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条日志消息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 10. console.error</span></span>
<span class="line"><span class="token comment">// console.error 方法用于输出错误信息。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;这是一个错误信息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 11. console.warn</span></span>
<span class="line"><span class="token comment">// console.warn 方法用于输出警告信息。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;这是一个警告信息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 12. console.info</span></span>
<span class="line"><span class="token comment">// console.info 方法用于输出一般信息。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条一般信息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 13. console.log</span></span>
<span class="line"><span class="token comment">// console.log 方法用于输出普通信息。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条普通信息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 14. console.debug</span></span>
<span class="line"><span class="token comment">// console.debug 方法用于输出调试信息。</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条调试信息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 15. console.dir</span></span>
<span class="line"><span class="token comment">// console.dir 方法用于以分层格式输出对象的属性。</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const i=s(l,[["render",c]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/console%E5%B0%8F%E6%8A%80%E5%B7%A7.html","title":"console 小技巧","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端小tip/console小技巧.md"}');export{i as comp,u as data};
