import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const l={};function t(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="decorator装饰器" tabindex="-1"><a class="header-anchor" href="#decorator装饰器"><span>decorator装饰器</span></a></h1><h2 id="decorator-即装饰器-从名字上很容易让我们联想到装饰者模式" tabindex="-1"><a class="header-anchor" href="#decorator-即装饰器-从名字上很容易让我们联想到装饰者模式"><span>Decorator，即装饰器，从名字上很容易让我们联想到装饰者模式</span></a></h2><p>一、介绍 Decorator，即装饰器， 简单来说，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。 ES6中Decorator函数亦如此，其本质也不是什么高大上的结构，只是一个普通的函数，用于扩展类属性和类方法</p><p>eg: 这里定义了一个baby，这个时候他什么技能都没有</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">baby</span><span class="token punctuation">{</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 定义一个获得talk技能的函数，即装饰器</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">talk</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    target<span class="token punctuation">.</span>canTalk <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 使用该装饰器对baby进行强化</span></span>
<span class="line"></span>
<span class="line">@talk</span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">baby</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 这个时候baby已经拥有了Talk技能了</span></span>
<span class="line"></span>
<span class="line">baby<span class="token punctuation">.</span>canTalk <span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码虽然简单，但也能够清晰地看到使用的Decorator优点：</p><blockquote><p>代码的吸引力变强了，装饰器源自一个注释 在不改变原有代码的情况下，对原有功能进行扩展</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">@decorator</span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 等同于</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token constant">A</span> <span class="token operator">=</span> <span class="token function">decorator</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token constant">A</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//下面@testable是一个装饰器，target就是建立的类，即MyTestableClass，实现了为类添加静态属性</span></span>
<span class="line"></span>
<span class="line">@testable</span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">MyTestableClass<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span></span>
<span class="line"><span class="token comment">// 如果需要传递参数，可以在装饰器外层再封装底层函数</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">isTestable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> isTestable<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">testable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">MyTestableClass<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">testable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">MyClass<span class="token punctuation">.</span>isTestable <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>装饰类属性 当对类属性进行装饰的时候，能够接受三个参数：</p><p>类的原型对象 需要装饰的属性名 装饰属性名称的描述对象 首先定义一个readonly装饰器</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 将可写属性设为false</span></span>
<span class="line">  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 使用readonly装饰类的name方法</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  @readonly</span>
<span class="line">  <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 以下引用</span></span>
<span class="line"></span>
<span class="line"><span class="token function">readonly</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;evaluated&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;executed&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span></span>
<span class="line">    @<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    @<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// evaluated 1</span></span>
<span class="line"><span class="token comment">// evaluated 2</span></span>
<span class="line"><span class="token comment">// executed 2</span></span>
<span class="line"><span class="token comment">// executed 1</span></span>
<span class="line">外层装饰器@<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>先进入，但内层装饰器@<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>先执行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 <strong>装饰器不能用于修饰函数，因为函数存在变量声明情况</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  counter<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">@add</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">编译阶段，变成下面</span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> counter<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> add<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">@add</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  counter<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">结果是执行后counter等于<span class="token number">1</span>，但是实际结果counter等于<span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、使用场景" tabindex="-1"><a class="header-anchor" href="#三、使用场景"><span>三、使用场景</span></a></h2><p>基于Decorator强大的作用，我们能够完成各种场景的需求，下面简单列举几下：</p><p>使用react-redux的时候，如果写成下面这种形式，既不雅观也很麻烦</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyReactComponent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">通过装饰器就简洁多了</span>
<span class="line"></span>
<span class="line">@<span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">将mixins，也可以写成装饰器，让使用更加简洁了</span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">mixins</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">mixins</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;foo&quot;</span></span>
<span class="line">下面再讲core<span class="token operator">-</span>decorators<span class="token punctuation">.</span>js几个常见的装饰器</span>
<span class="line"></span>
<span class="line">@antobind</span>
<span class="line">autobind装饰器使得方法中的<span class="token keyword">this</span>对象，绑定原始对象</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> autobind <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  @autobind</span>
<span class="line">  <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> getPerson <span class="token operator">=</span> person<span class="token punctuation">.</span>getPerson<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> person<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">@readonly</span>
<span class="line">readonly装饰器使得属性或方法不可写</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> readonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Meal</span> <span class="token punctuation">{</span></span>
<span class="line">  @readonly</span>
<span class="line">  entree <span class="token operator">=</span> <span class="token string">&#39;steak&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> dinner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Meal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">dinner<span class="token punctuation">.</span>entree <span class="token operator">=</span> <span class="token string">&#39;salmon&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Cannot assign to read only property &#39;entree&#39; of [object Object]</span></span>
<span class="line">@deprecate</span>
<span class="line">deprecate或deprecated装饰器在控制台显示一条警告，表示该方法将被废除</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> deprecate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  @deprecate</span>
<span class="line">  <span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">deprecate</span><span class="token punctuation">(</span><span class="token string">&#39;功能废除了&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">facepalmHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">person<span class="token punctuation">.</span><span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// DEPRECATION Person#facepalm: This function will be removed in future versions.</span></span>
<span class="line"></span>
<span class="line">person<span class="token punctuation">.</span><span class="token function">facepalmHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// DEPRECATION Person#facepalmHard: 功能废除了</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考文献 https://es6.ruanyifeng.com/#docs/decorator</p>`,20)])])}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/es6/decorator%E8%A3%85%E9%A5%B0%E5%99%A8.html","title":"decorator装饰器","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"es6/decorator装饰器.md"}');export{o as comp,u as data};
