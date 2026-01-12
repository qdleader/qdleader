import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const p={};function i(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="require加载原理" tabindex="-1"><a class="header-anchor" href="#require加载原理"><span>require加载原理</span></a></h1><h2 id="require-模块引入与处理" tabindex="-1"><a class="header-anchor" href="#require-模块引入与处理"><span>require 模块引入与处理</span></a></h2><blockquote><p>CommonJS 模块同步加载并执行模块文件，CommonJS 模块在执行阶段分析模块依赖，采用深度优先遍历（depth-first traversal），执行顺序是父 -&gt; 子 -&gt; 父；</p></blockquote><p>eg:</p><p>a.js文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> getMes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./b&#39;</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 a 文件&#39;</span><span class="token punctuation">)</span></span>
<span class="line">exports<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">getMes</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.js文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> say <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span>  object <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;《React进阶实践指南》&#39;</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token literal-property property">author</span><span class="token operator">:</span><span class="token string">&#39;我不是外星人&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 b 文件&#39;</span><span class="token punctuation">)</span></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> object</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主文件main.js</p><div class="language-const line-numbers-mode" data-highlighter="prismjs" data-ext="const"><pre><code class="language-const"><span class="line">const b = require(&#39;./b&#39;)</span>
<span class="line"></span>
<span class="line">console.log(&#39;node 入口文件&#39;)</span>
<span class="line"></span>
<span class="line">\`\`\`js</span>
<span class="line"></span>
<span class="line">接下来终端输入 node main.js 运行 main.js，效果如下：</span>
<span class="line"></span>
<span class="line">从上面的运行结果可以得出以下结论：</span>
<span class="line"></span>
<span class="line">main.js 和 a.js 模块都引用了 b.js 模块，但是 b.js 模块只执行了一次。</span>
<span class="line">a.js 模块 和 b.js 模块互相引用，但是没有造成循环引用的情况。</span>
<span class="line">执行顺序是父 -&gt; 子 -&gt; 父；</span>
<span class="line"></span>
<span class="line"># require 加载原理</span>
<span class="line"></span>
<span class="line">** 首先为了弄清楚上述两个问题。我们要明白两个感念，那就是 module 和 Module。</span>
<span class="line">module ：在 Node 中每一个 js 文件都是一个 module ，module 上保存了 exports 等信息之外，还有一个 loaded 表示该模块是否被加载。</span>
<span class="line"></span>
<span class="line">为 false 表示还没有加载；</span>
<span class="line">为 true 表示已经加载</span>
<span class="line"></span>
<span class="line">Module ：以 nodejs 为例，整个系统运行之后，会用 Module 缓存每一个模块加载的信息。**</span>
<span class="line"></span>
<span class="line">require 的源码大致长如下的样子：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// id 为路径标识符 function require(id) { /* 查找 Module 上有没有已经加载的 js 对象*/ const cachedModule = Module._cache[id]</p><p>/* 如果已经加载了那么直接取走缓存的 exports 对象 */ if(cachedModule){ return cachedModule.exports }</p><p>/* 创建当前模块的 module */ const module = { exports: {} ,loaded: false , ...}</p><p>/* 将 module 缓存到 Module 的缓存属性中，路径标识符作为 id <em>/<br> Module._cache[id] = module /</em> 加载文件 <em>/ runInThisContext(wrapper(&#39;module.exports = &quot;123&quot;&#39;))(module.exports, require, module, __filename, __dirname) /</em> 加载完成 <em>// module.loaded = true /</em> 返回值 */ return module.exports }</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">从上面我们总结出一次 require 大致流程是这样的；</span>
<span class="line"></span>
<span class="line"><span class="token operator">**</span>require 会接收一个参数——文件标识符，然后分析定位文件，分析过程我们上述已经讲到了，加下来会从 Module 上查找有没有缓存，如果有缓存，那么直接返回缓存的内容。<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">**</span>如果没有缓存，会创建一个 module 对象，缓存到 Module 上，然后执行文件，加载完文件，将 loaded 属性设置为 <span class="token boolean">true</span> ，然后返回 module<span class="token punctuation">.</span>exports 对象。借此完成模块加载流程。<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">**</span>模块导出就是 <span class="token keyword">return</span> 这个变量的其实跟 a <span class="token operator">=</span> b 赋值一样， 基本类型导出的是值， 引用类型导出的是引用地址。<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">**</span>exports 和 module<span class="token punctuation">.</span>exports 持有相同引用，因为最后导出的是 module<span class="token punctuation">.</span>exports， 所以对 exports 进行赋值会导致 exports 操作的不再是 module<span class="token punctuation">.</span>exports 的引用。<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line">### require 避免重复加载</span>
<span class="line"></span>
<span class="line">从上面我们可以直接得出，require 如何避免重复加载的，首先加载之后的文件的 module 会被缓存到 Module 上，比如一个模块已经 require 引入了 a 模块，如果另外一个模块再次引用 a ，那么会直接读取缓存值 module ，所以无需再次执行模块。</span>
<span class="line">对应 demo 片段中，首先 main<span class="token punctuation">.</span>js 引用了 a<span class="token punctuation">.</span>js ，a<span class="token punctuation">.</span>js 中 require 了 b<span class="token punctuation">.</span>js 此时 b<span class="token punctuation">.</span>js 的 module 放入缓存 Module 中，接下来 main<span class="token punctuation">.</span>js 再次引用  b<span class="token punctuation">.</span>js ，那么直接走的缓存逻辑。所以 b<span class="token punctuation">.</span>js 只会执行一次，也就是在 a<span class="token punctuation">.</span>js 引入的时候。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)])])}const o=n(p,[["render",i]]),r=JSON.parse('{"path":"/es6/commonjs%E4%B8%8Eesmodule/require%E5%8A%A0%E8%BD%BD%E5%8E%9F%E7%90%86.html","title":"require加载原理","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"es6/commonjs与esmodule/require加载原理.md"}');export{o as comp,r as data};
