import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const l={};function t(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="proxy-中为什么使用reflect的" tabindex="-1"><a class="header-anchor" href="#proxy-中为什么使用reflect的"><span>proxy 中为什么使用Reflect的</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">## Reflect 有返回值</span>
<span class="line"></span>
<span class="line">对于某个对象，赋值并不总是成功的。</span>
<span class="line"></span>
<span class="line">例如，我们把 input 的name属性设置为只读，如下：</span>
<span class="line">js</span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">传统的使用等于号进行的属性赋值并不能知道最后是否执行成功，需要开发者自己进行进一步的检测。</span>
<span class="line"></span>
<span class="line">例如：</span>
<span class="line">js</span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">上面一行赋值返回值是<span class="token string">&#39;qdleader&#39;</span>，至于改变输入框的type属性值是否成功，不得而知。</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token comment">// 输出 false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">但是下面一行语句使用的Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法，就可以知道是否设置成功，因为Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>的返回值是<span class="token boolean">true</span>或者<span class="token boolean">false</span>（只要参数类型准确）。</span>
<span class="line"></span>
<span class="line">##  Reflect方法还有个好处，不会因为报错而中断正常的代码逻辑执行</span>
<span class="line"></span>
<span class="line"><span class="token function">js</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> frozen <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yyy&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>frozen<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    frozen<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;no log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">会出现下面的TypeError错误：</span>
<span class="line"></span>
<span class="line">Uncaught TypeError<span class="token operator">:</span> Cannot assign to read only property ‘name’ <span class="token keyword">of</span> object ‘#<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span>’</span>
<span class="line">后面的语句console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;no log&#39;</span><span class="token punctuation">)</span>就没有被执行。</span>
<span class="line"></span>
<span class="line">但是如果使用Reflect方法，则console语句是可以执行的，例如：</span>
<span class="line"></span>
<span class="line"><span class="token function">js</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> frozen <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yyy&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>frozen<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>frozen<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;no log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">## receiver参数</span>
<span class="line"></span>
<span class="line">receiver是接受者的意思，表示调用对应属性或方法的主体对象，通常情况下，receiver参数是无需使用的，但是如果发生了继承，为了明确调用主体，receiver参数就需要出马了。</span>
<span class="line"></span>
<span class="line">比方说下面这个例子：</span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;外星人&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> peopleQD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> threePeople <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">__proto__</span><span class="token operator">:</span> peopleQD<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;三体人&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 结果是外星人</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>threePeople<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">实际上，这里预期显示应该是“三体人”，而不是“外星人”。</span>
<span class="line"></span>
<span class="line">这个时候，就需要使用receiver参数了，代码变化部分参见下面标红的那一行：</span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;外星人&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> peopleQD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 也可以简写为 Reflect.get(...arguments) </span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> threePeople <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">__proto__</span><span class="token operator">:</span> peopleQD<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;三体人&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 结果是三体人 </span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>threePeople<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">此时，运行结果就是预期的“三体人”了</span>
<span class="line"></span>
<span class="line">实际上 Reflect 的函数可以接收第三个参数，即函数调用过程中的 <span class="token keyword">this</span></span>
<span class="line">比如：</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Ben&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;18&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出 18Ben</span></span>
<span class="line"></span>
<span class="line">### Reflect对象经常和Proxy代理一起使用，原因有三点：</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> Reflect提供的所有静态方法和Proxy第<span class="token number">2</span>个handle参数方法是一模一样的。具体见后面的对比描述。</span>
<span class="line"><span class="token operator">&gt;</span> Proxy get<span class="token operator">/</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法需要的返回值正是Reflect的get<span class="token operator">/</span><span class="token keyword">set</span>方法的返回值，可以天然配合使用，比直接对象赋值<span class="token operator">/</span>获取值要更方便和准确。</span>
<span class="line"><span class="token operator">&gt;</span> receiver参数具有不可替代性。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/vue3/vue3%E6%BA%90%E7%A0%81%E7%B1%BB/proxy%20%E4%B8%AD%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8Reflect%E7%9A%84.html","title":"proxy 中为什么使用Reflect的","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"vue3/vue3源码类/proxy 中为什么使用Reflect的.md"}');export{o as comp,u as data};
