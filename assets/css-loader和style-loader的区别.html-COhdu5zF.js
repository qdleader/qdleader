import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(c,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="css-loader和style-loader的区别" tabindex="-1"><a class="header-anchor" href="#css-loader和style-loader的区别"><span>css-loader和style-loader的区别</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">webpack是用<span class="token constant">JS</span>写的，运行在node环境，所以默认webpack打包的时候只会处理<span class="token constant">JS</span>之间的依赖关系。</span>
<span class="line"></span>
<span class="line">因为像 <span class="token punctuation">.</span>css 这样的文件不是一个 JavaScript 模块，你需要配置 webpack 使用 css<span class="token operator">-</span>loader 和 style<span class="token operator">-</span>loader 去合理地处理它们。</span>
<span class="line"></span>
<span class="line">如果在<span class="token constant">JS</span>中导入了css，那么就需要使用 css<span class="token operator">-</span>loader 来识别这个模块，通过特定的语法规则进行转换内容最后导出。</span>
<span class="line"></span>
<span class="line">css<span class="token operator">-</span>loader会处理 <span class="token keyword">import</span> <span class="token operator">/</span> require @<span class="token keyword">import</span> <span class="token operator">/</span> url 引入的内容。</span>
<span class="line">js</span>
<span class="line"><span class="token comment">// base.css</span></span>
<span class="line"><span class="token punctuation">.</span>bg <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token number">000</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./base.css&#39;</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>style<span class="token punctuation">,</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">css<span class="token operator">-</span>loader处理之后导出的是一个数组</span>
<span class="line"></span>
<span class="line">但是这并不是我们想要的，因为是个数组，页面是无法直接使用，这时我们需要用到零外一个style<span class="token operator">-</span>loader来处理</span>
<span class="line"></span>
<span class="line">style<span class="token operator">-</span>loader 是通过一个<span class="token constant">JS</span>脚本创建一个style标签，里面包含一些样式。style<span class="token operator">-</span>loader是不能单独使用的，应为它并不负责解析 css 之前的依赖关系，每个loader的功能都是单一的，各自拆分独立。</span>
<span class="line"></span>
<span class="line">## style<span class="token operator">-</span>loader和css<span class="token operator">-</span>loader作用是不同的。</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span>  <span class="token number">1</span>、css<span class="token operator">-</span>loader<span class="token operator">:</span> 加载<span class="token punctuation">.</span>css文件</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span>  <span class="token number">2</span>、style<span class="token operator">-</span>loader：使用<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>将css<span class="token operator">-</span>loader内部样式注入到我们的<span class="token constant">HTML</span>页面</span>
<span class="line"></span>
<span class="line">由于webpack只能处理js相关的文件，所以像图片和css资源是处理不了的，css<span class="token operator">-</span>loader的作用是将css文件转换成webpack能够处理的资源，而style<span class="token operator">-</span>loader就是帮我们直接将css<span class="token operator">-</span>loader解析后的内容挂载到html页面当中。</span>
<span class="line"></span>
<span class="line"> css<span class="token operator">-</span>loader帮助我们解析css成为js对象</span>
<span class="line"> sytle<span class="token operator">-</span>loader可以从css<span class="token operator">-</span>loader解析的对象中提取css样式挂载到页面当中</span>
<span class="line"></span>
<span class="line"> ### less<span class="token operator">-</span>loader</span>
<span class="line"></span>
<span class="line">Less是<span class="token constant">CSS</span>预处理语言，扩展了<span class="token constant">CSS</span>语言，增加了变量、Mixin、函数等特性，Less<span class="token operator">-</span>loader的作用就是将less代码转译为浏览器可以识别的<span class="token constant">CSS</span>代码。</span>
<span class="line">less</span>
<span class="line"><span class="token comment">// demo.less</span></span>
<span class="line">@base<span class="token operator">:</span> #f938ab<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>box<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span>@style<span class="token punctuation">,</span> @c<span class="token punctuation">)</span> <span class="token function">when</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token function">iscolor</span><span class="token punctuation">(</span>@c<span class="token punctuation">)</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>shadow<span class="token operator">:</span> @style @c<span class="token punctuation">;</span></span>
<span class="line">  box<span class="token operator">-</span>shadow<span class="token operator">:</span>         @style @c<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>box<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span>@style<span class="token punctuation">,</span> @alpha<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">when</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token function">isnumber</span><span class="token punctuation">(</span>@alpha<span class="token punctuation">)</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span>box<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span>@style<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> @alpha<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>box <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>@base<span class="token punctuation">,</span> <span class="token number">5</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  border<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span>@base<span class="token punctuation">,</span> <span class="token number">30</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  div <span class="token punctuation">{</span> <span class="token punctuation">.</span>box<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span> 5px<span class="token punctuation">,</span> <span class="token number">30</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">上面的less代码会被less<span class="token operator">-</span>loader转译为：</span>
<span class="line">css</span>
<span class="line"><span class="token comment">// demo.css</span></span>
<span class="line"><span class="token punctuation">.</span>box <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #fe33ac<span class="token punctuation">;</span></span>
<span class="line">  border<span class="token operator">-</span>color<span class="token operator">:</span> #fdcdea<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>box div <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">所以less<span class="token operator">-</span>loader的原理很简单，就是调用less库提供的方法，转译less语法后输出，如下：</span>
<span class="line">js</span>
<span class="line"><span class="token comment">// less-loader实现（经简化）</span></span>
<span class="line"><span class="token keyword">const</span> less <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转译比较耗时，采用异步方式</span></span>
<span class="line">  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取配置文件中less-loader的options</span></span>
<span class="line">  </span>
<span class="line">  less<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">    content<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">createOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// less转译的配置</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> output</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> output<span class="token punctuation">.</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将生成的css代码传递给下一个loader</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">### css<span class="token operator">-</span>loader</span>
<span class="line"></span>
<span class="line">Css<span class="token operator">-</span>loader的作用主要是解析css文件中的@<span class="token keyword">import</span>和url语句，处理css<span class="token operator">-</span>modules，并将结果作为一个js模块返回。</span>
<span class="line">假如我们有a<span class="token punctuation">.</span>css、b<span class="token punctuation">.</span>css、c<span class="token punctuation">.</span>css：</span>
<span class="line"></span>
<span class="line"><span class="token comment">// a.css</span></span>
<span class="line">css</span>
<span class="line"></span>
<span class="line">@<span class="token keyword">import</span> <span class="token string">&#39;./b.css&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 导入b.css</span></span>
<span class="line"><span class="token punctuation">.</span>a <span class="token punctuation">{</span></span>
<span class="line">  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// b.css</span></span>
<span class="line">css</span>
<span class="line"></span>
<span class="line">@<span class="token keyword">import</span> <span class="token string">&#39;./c.css&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 导入c.css</span></span>
<span class="line"><span class="token punctuation">.</span>b <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// c.css</span></span>
<span class="line">css</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>c <span class="token punctuation">{</span></span>
<span class="line">  font<span class="token operator">-</span>weight<span class="token operator">:</span> bolder<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">来看看css<span class="token operator">-</span>loader对a<span class="token punctuation">.</span>css的编译输出：</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"></span>
<span class="line"><span class="token comment">// css-loader输出</span></span>
<span class="line"></span>
<span class="line">exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;../../../node_modules/css-loader/lib/css-base.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// imports</span></span>
<span class="line"><span class="token comment">// 文件需要的依赖js模块，这里为空</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// module</span></span>
<span class="line">exports<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token comment">// 模块导出内容</span></span>
<span class="line">  module<span class="token punctuation">.</span>id<span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string">&quot;.src-components-Home-index__c--3riXS {\\n  font-weight: bolder;\\n}\\n.src-components-Home-index__b--I-yI3 {\\n  color: red;\\n}\\n.src-components-Home-index__a--3EFPE {\\n  font-size: 16px;\\n}\\n&quot;</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment">// exports</span></span>
<span class="line">exports<span class="token punctuation">.</span>locals <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// css-modules的类名映射</span></span>
<span class="line">  <span class="token string-property property">&quot;c&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src-components-Home-index__c--3riXS&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src-components-Home-index__b--I-yI3&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src-components-Home-index__a--3EFPE&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">可以理解为css<span class="token operator">-</span>loader将a<span class="token punctuation">.</span>css、b<span class="token punctuation">.</span>css和c<span class="token punctuation">.</span>css的样式内容以字符串的形式拼接在一起，并将其作为js模块的导出内容。</span>
<span class="line"></span>
<span class="line">####  css<span class="token operator">-</span>loader源码（经简化）</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token comment">// https://github.com/webpack-contrib/css-loader/blob/master/src/index.js</span></span>
<span class="line"><span class="token keyword">import</span> postcss <span class="token keyword">from</span> <span class="token string">&#39;postcss&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取配置</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 转译源码所需的postcss插件</span></span>
<span class="line">  <span class="token function">shouldUseModulesPlugins</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>modulesPlugins<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理css-modules</span></span>
<span class="line">  <span class="token function">shouldUseImportPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>importPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理@import语句</span></span>
<span class="line">  <span class="token function">shouldUseURLPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>urlPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理url()语句</span></span>
<span class="line">  <span class="token function">shouldUseIcssPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>icssPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理icss相关逻辑</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>meta <span class="token operator">&amp;&amp;</span> meta<span class="token punctuation">.</span>ast<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 复用前面loader生成的CSS AST（如postcss-loader）</span></span>
<span class="line">    content <span class="token operator">=</span> meta<span class="token punctuation">.</span>ast<span class="token punctuation">.</span>root<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">postcss</span><span class="token punctuation">(</span>plugins<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用postcss转译源码</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> importCode <span class="token operator">=</span> <span class="token function">getImportCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 需要导入的依赖语句</span></span>
<span class="line">  <span class="token keyword">const</span> moduleCode <span class="token operator">=</span> <span class="token function">getModuleCode</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 模块导出内容</span></span>
<span class="line">  <span class="token keyword">const</span> exportCode <span class="token operator">=</span> <span class="token function">getExportCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 其他需要导出的信息，如css-modules的类名映射等</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 异步返回</span></span>
<span class="line">  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>importCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>moduleCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>exportCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">## style<span class="token operator">-</span>loader</span>
<span class="line"></span>
<span class="line">经过css<span class="token operator">-</span>loader的转译，我们已经得到了完整的css样式代码，style<span class="token operator">-</span>loader的作用就是将结果以style标签的方式插入<span class="token constant">DOM</span>树中。</span>
<span class="line">直觉上似乎我们只需要像下面这样返回一段js代码，将css<span class="token operator">-</span>loader返回的结果插入<span class="token constant">DOM</span>就行：</span>
<span class="line">js</span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    const style = document.createElement(&#39;style&#39;);</span>
<span class="line">    style.innerHTML = &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;;</span>
<span class="line">    document.head.appendChild(style);</span>
<span class="line">  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">但css<span class="token operator">-</span>loader返回的不是css样式代码的文本，而是一个js模块的代码，将这些js代码直接放进style标里显然是不行的。</span>
<span class="line">我们来看看style<span class="token operator">-</span>loader的实现：</span>
<span class="line"> style<span class="token operator">-</span>loader</span>
<span class="line"></span>
<span class="line"> js</span>
<span class="line"><span class="token keyword">import</span> loaderUtils <span class="token keyword">from</span> <span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// do nothing</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">pitch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">remainingRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/*</span>
<span class="line">  * 用require语句获取css-loader返回的js模块的导出</span>
<span class="line">  * 用&#39;!!&#39;前缀跳过配置中的loader，避免重复执行</span>
<span class="line">  * 用remainingRequest参数获取loader链的剩余部分，在本例中是css-loader、less-loader</span>
<span class="line">  * 用loaderUtils的stringifyRequest方法将request语句中的绝对路径转为相对路径</span>
<span class="line">  */</span></span>
<span class="line">  <span class="token keyword">const</span> requestPath <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">stringifyRequest</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;!!&#39;</span> <span class="token operator">+</span> remainingRequest<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 本例中requestPath为:</span></span>
<span class="line">  <span class="token comment">// &#39;!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!src/styles/index.less&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    const content = require(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>requestPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span>
<span class="line">    const style = document.createElement(&#39;style&#39;);</span>
<span class="line">    style.innerHTML = content;</span>
<span class="line">    document.head.appendChild(style);</span>
<span class="line">  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">### style<span class="token operator">-</span>loader的几个设计思路：</span>
<span class="line"></span>
<span class="line">css<span class="token operator">-</span>loader返回的样式只能通过其js模块的运行时得到，故使用require语句取得</span>
<span class="line">normal方法实际上什么都没做，在pitch方法里中断loader链的执行，再以inline方式调用了后方的loader来加载当前的less文件</span>
<span class="line">如果将pitch中的实现放到normal方法里，就会造成loader链执行两遍</span>
<span class="line">如果requestPath中没有<span class="token string">&#39;!!&#39;</span>前缀，就会造成loader链被无限循环调用</span>
<span class="line"></span>
<span class="line">style<span class="token operator">-</span>loader的实现逻辑比较绕，也是一个比较经典的pitch应用，理解了它的原理，就可以是说对loader的调用链、执行顺序和模块化输出等有了一个比较全面的认识，推荐细细体会。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const i=n(t,[["render",l]]),u=JSON.parse('{"path":"/webpack/css-loader%E5%92%8Cstyle-loader%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"css-loader和style-loader的区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"webpack/css-loader和style-loader的区别.md"}');export{i as comp,u as data};
