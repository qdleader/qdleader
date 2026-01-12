import{_ as s,c as a,a as p,o as t}from"./app-KfnfuIf0.js";const e={};function l(c,n){return t(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="dom-事件分级" tabindex="-1"><a class="header-anchor" href="#dom-事件分级"><span>DOM 事件分级</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">随着<span class="token constant">DOM</span>级别的变化，<span class="token constant">DOM</span>事件也随之分成了多个级别。</span>
<span class="line"><span class="token constant">DOM</span>事件分为<span class="token number">3</span>个级别：<span class="token constant">DOM0</span>级事件处理，<span class="token constant">DOM2</span>级事件处理和<span class="token constant">DOM3</span>级事件处理。</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> 由于<span class="token constant">DOM1</span>级中没有事件的相关内容，所以没有<span class="token constant">DOM1</span>级事件。</span>
<span class="line"></span>
<span class="line">## <span class="token number">1</span>、<span class="token constant">DOM0</span>级事件</span>
<span class="line"></span>
<span class="line"><span class="token constant">DOM0</span>级处理事件就是将一个函数赋值给一个事件处理属性。</span>
<span class="line"><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;button&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span> </span>
<span class="line"> </span>
<span class="line"><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 将一个函数赋值给了一个事件处理属性onclick 这样的方法就是DOM0级。</span></span>
<span class="line"><span class="token comment">// 可以通过给事件处理属性赋值null来解绑事件。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ## 2、DOM2级事件</span></span>
<span class="line"><span class="token constant">DOM2</span>级处理事件是在<span class="token constant">DOM0</span>级处理事件的基础上再添加了一些处理程序。</span>
<span class="line"></span>
<span class="line">可以同时绑定多个事件处理函数。</span>
<span class="line">定义了 addEventListener 和 removeEventListener 两个方法。</span>
<span class="line">element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> useCapture<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 第三个参数 useCapture：指定事件是否在捕获或冒泡阶段执行。布尔值，可选，默认false</span></span>
<span class="line"><span class="token comment">// 可能值：true - 事件句柄在捕获阶段执行；false- 默认。事件句柄在冒泡阶段执行</span></span>
<span class="line"><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;button&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span> </span>
<span class="line"> </span>
<span class="line"><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">showFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">LogFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 同时绑定多个事件处理函数</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> showFn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> LogFn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 解绑事件 </span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> showFn<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment">// ## 3、DOM3级事件</span></span>
<span class="line"></span>
<span class="line">    <span class="token constant">DOM3</span>级处理事件是在<span class="token constant">DOM2</span>级处理事件的基础上再添加了很多事件类型。</span>
<span class="line"></span>
<span class="line">    <span class="token constant">UI</span>事件，当用户与页面上的元素交互时触发，如：load、scroll</span>
<span class="line">    焦点事件，当元素获得或失去焦点时触发，如：blur、focus</span>
<span class="line">    鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup</span>
<span class="line">    滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel</span>
<span class="line">    文本事件，当在文档中输入文本时触发，如：textInput</span>
<span class="line">    键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress</span>
<span class="line">    合成事件，当为<span class="token constant">IME</span>（输入法编辑器）输入字符时触发，如：compositionstart</span>
<span class="line">    变动事件，当底层<span class="token constant">DOM</span>结构发生变化时触发，如：DOMsubtreeModified</span>
<span class="line"></span>
<span class="line">同时<span class="token constant">DOM3</span>级事件也允许使用者自定义一些事件。</span>
<span class="line"></span>
<span class="line"><span class="token comment">// ## 四、DOM事件流</span></span>
<span class="line"><span class="token constant">DOM2</span>级事件中规定了一个事件流包括<span class="token number">3</span>个阶段：事件捕获阶、处于目标阶段、事件冒泡阶段。</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>事件冒泡<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;parent&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    我是父元素</span>
<span class="line">    <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">&quot;son&quot;</span><span class="token operator">&gt;</span>我是子元素<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">var</span> parent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;parent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> son <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;son&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">parent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;父级冒泡&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">parent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;父级捕获&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">son<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;子级捕获&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">son<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;子级冒泡&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span><span class="token comment">/* 当点击父元素：父级冒泡 -&gt; 父级捕获</span>
<span class="line">当点击子元素：父级捕获 -&gt; 子级捕获 -&gt;  子级冒泡 -&gt; 父级冒泡 */</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">总结</span>
<span class="line">事件流的执行顺序是：事件捕获阶 <span class="token operator">-</span><span class="token operator">&gt;</span> 处于目标阶段 <span class="token operator">-</span><span class="token operator">&gt;</span> 事件冒泡阶段，且当事件处于目标阶段时，事件调用顺序决定于绑定事件的书写顺序。</span>
<span class="line">需要注意的是<span class="token constant">IE8</span>以下版本不支持 addEventlistener 和 removeEventListerner，需要使用attachEvent 和 detachEvent 实现：</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 绑定事件 </span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onclick&#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">// 解绑事件</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onclick&#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment">// 不需要传入第三个参数，因为IE8以下版本只支持冒泡型事件。</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const i=s(e,[["render",l]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/DOM%E7%B1%BB/DOM%E4%BA%8B%E4%BB%B6%E5%88%86%E7%BA%A7.html","title":"DOM 事件分级","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/js类/DOM类/DOM事件分级.md"}');export{i as comp,u as data};
