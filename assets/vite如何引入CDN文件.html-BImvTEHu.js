import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(o,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="vite如何引入cdn文件" tabindex="-1"><a class="header-anchor" href="#vite如何引入cdn文件"><span>vite如何引入CDN文件</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">前端构建打包工具，在运行 build 的时候，会默认把项目中所有用到的第三方资源、库文件打包成一个 js 文件中 vendor<span class="token punctuation">.</span>js，如果不加以拆分，这个文件将会很大导致首屏加载速度变慢。这时可以把一些第三方库文件用 cdn 加载（优化手段之一），优化包大小和首屏加载速度</span>
<span class="line"></span>
<span class="line">Vue2 <span class="token operator">+</span> Webpack</span>
<span class="line">我们回顾以前使用 vue2 <span class="token operator">+</span> webpack 构建的时候，可以在 index<span class="token punctuation">.</span>html 中用 script 标签加载第三方库资源，推荐这个 cdn 资源网站： https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">www.jsdelivr.com</span><span class="token regex-delimiter">/</span></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue@2.5.20/dist/vue.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/axios@0.18.1/dist/axios.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/headroom.js@0.9.4/dist/headroom.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">然后在 webpack 里配置 externals：防止将某些 <span class="token keyword">import</span> 的包打包到 bundle 中，而是在运行时再去从外部获取这些扩展依赖</span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;vue&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;vuex&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Vuex&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;axios&#39;</span><span class="token operator">:</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;vue-router&#39;</span><span class="token operator">:</span> <span class="token string">&#39;VueRouter&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;headroom&#39;</span><span class="token operator">:</span> <span class="token string">&#39;headroom&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">上面 externals 属性里的键值对：</span>
<span class="line"></span>
<span class="line">属性名就是包名，比如 <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> 里面的 vue</span>
<span class="line"></span>
<span class="line">属性值就是导出的名字，比如 <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> 里面的 Vue</span>
<span class="line"></span>
<span class="line"><span class="token keyword">package</span><span class="token punctuation">.</span>json 无需安装这些第三方包，可直接运行项目和打包了</span>
<span class="line"></span>
<span class="line">Vue3 <span class="token operator">+</span> Vite</span>
<span class="line">为什么 Vite 不能 直接 在 index<span class="token punctuation">.</span>html 导入 <span class="token constant">CDN</span> 资源，首先我们要了解其原理</span>
<span class="line"></span>
<span class="line">Vite 是基于浏览器原生 <span class="token constant">ES</span> imports 的开发服务器。开发环境下不需要打包，是利用浏览器去解析 imports，在服务器端按需编译返回。所以能达到秒速模块热更新（<span class="token constant">HMR</span>）</span>
<span class="line"></span>
<span class="line">就是这样：</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> sub <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./index.js&#39;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">开发环境下走的是浏览器 script 标签原生 <span class="token constant">ESM</span> 导入，dev server 是不会使用 index<span class="token punctuation">.</span>html 的 <span class="token constant">CDN</span> 资源，而是使用源码里 <span class="token keyword">import</span> node_modules 里的依赖包</span>
<span class="line"></span>
<span class="line">安装插件标识 <span class="token constant">CDN</span></span>
<span class="line">上面说的是 开发环境下不会使用 index<span class="token punctuation">.</span>html 的 <span class="token constant">CDN</span> 资源，而我们关注的是 生产环境，所以能在生产环境中使用 <span class="token constant">CND</span> 资源且打包时排除此资源即可</span>
<span class="line"></span>
<span class="line">Vite 的打包是通过 Rollup，打包时使用 <span class="token constant">CDN</span> 需要安装一个插件：rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>external<span class="token operator">-</span>globals</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> externalGlobals <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-external-globals&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// other config</span></span>
<span class="line">  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token function">externalGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">vuex</span><span class="token operator">:</span> <span class="token string">&#39;Vuex&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string-property property">&#39;vue-router&#39;</span><span class="token operator">:</span> <span class="token string">&#39;VueRouter&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">external 是 <span class="token constant">CDN</span> 的包名</span>
<span class="line"></span>
<span class="line">externalGlobals 里的键值对与 webpack externals 的解释一致</span>
<span class="line"></span>
<span class="line">然后在 index<span class="token punctuation">.</span>html 加入 <span class="token constant">CDN</span> 文件</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue@3.2.20/dist/vue.global.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue-router@4.0.12/dist/vue-router.global.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">开发环境下，<span class="token keyword">package</span><span class="token punctuation">.</span>json 依然需要保留安装这些 <span class="token constant">CDN</span> 资源的包，不能删除，dev server 需要引用</span>
<span class="line"></span>
<span class="line">打包即可实现 <span class="token constant">CDN</span> 加载资源</span>
<span class="line"></span>
<span class="line">alias 配置项加载 <span class="token constant">CDN</span></span>
<span class="line">alias 除了可以用来配置别名，还可以配置 <span class="token constant">CDN</span>（本质也是别名的引用）</span>
<span class="line"></span>
<span class="line">先来写一下试试：</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// other config</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">mitt</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/mitt@3.0.0/dist/mitt.min.js&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">这里先配置了 axios、mitt 的别名 <span class="token constant">CDN</span>，结果浏览器报错：</span>
<span class="line"></span>
<span class="line">Uncaught SyntaxError<span class="token operator">:</span> The requested module ‘https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>cdn<span class="token punctuation">.</span>jsdelivr<span class="token punctuation">.</span>net<span class="token operator">/</span>npm<span class="token operator">/</span>axios@<span class="token number">0.24</span><span class="token number">.0</span><span class="token operator">/</span>dist<span class="token operator">/</span>axios<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js’ does not provide an <span class="token keyword">export</span> named ‘<span class="token keyword">default</span>’</span>
<span class="line"></span>
<span class="line">说这个 <span class="token constant">CDN</span> 资源没有一个名为 <span class="token keyword">default</span> <span class="token keyword">export</span>。看报错信息应该也明白，它需要支持 <span class="token constant">ESM</span> 编译的 <span class="token constant">CDN</span></span>
<span class="line">而在 GitHub 上也有专门的 issues：https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>vitejs<span class="token operator">/</span>vite<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">2204</span></span>
<span class="line"></span>
<span class="line">尤大有在下面解答：</span>
<span class="line">WechatIMG229<span class="token punctuation">.</span>jpeg</span>
<span class="line"></span>
<span class="line">意思就是：Vite 不会重写从外部文件导入的内容，需要使用支持 <span class="token constant">ESM</span> 编译的 <span class="token constant">CDN</span></span>
<span class="line"></span>
<span class="line">还很细心地贴出两个支持 <span class="token constant">ESM</span> 编译的 <span class="token constant">CDN</span> <span class="token literal-property property">资源地址：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>skypack<span class="token punctuation">.</span>dev<span class="token operator">/</span> or https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>jsdelivr<span class="token punctuation">.</span>com<span class="token operator">/</span>esm</span>
<span class="line"></span>
<span class="line">那么我们把上面 <span class="token constant">CDN</span> 资源改好再试试<span class="token operator">~</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// other config</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">mitt</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/mitt@3.0.0/+esm&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token string">&#39;https://esm.sh/axios@0.21.4&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">运行成功<span class="token operator">~</span></span>
<span class="line"></span>
<span class="line">可以查看这个 <span class="token constant">CDN</span> 资源，发现其内容是 <span class="token keyword">export</span> 一个最终的包文件的 js 代码</span>
<span class="line"></span>
<span class="line"><span class="token comment">/* esm.sh - axios@0.21.4 */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&quot;https://cdn.esm.sh/v55/axios@0.21.4/es2021/axios.js&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://cdn.esm.sh/v55/axios@0.21.4/es2021/axios.js&quot;</span><span class="token punctuation">;</span></span>
<span class="line">查看浏览器 Network，其实是加载了两个资源</span>
<span class="line">WechatIMG228<span class="token punctuation">.</span>jpeg</span>
<span class="line"></span>
<span class="line">而且使用 alias 加载 <span class="token constant">CDN</span> 还有个好处，它是按需加载。意思是如果只是在某个 Vue 文件中 <span class="token keyword">import</span> 了这个库，那么进入到这个 Vue 文件的页面，才会加载此 <span class="token constant">CDN</span> 资源</span>
<span class="line"></span>
<span class="line">但需要注意的是，<span class="token keyword">import</span> 时不能解构，只能直接引入，因为支持 <span class="token constant">ESM</span> 编译的资源文件都是 <span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> from <span class="token operator">...</span>，没有单个 <span class="token keyword">export</span></span>
<span class="line">例如我配置了 mavon<span class="token operator">-</span>editor 的 <span class="token constant">ESM</span> <span class="token constant">CDN</span> 资源</span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;mavon-editor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;https://esm.sh/mavon-editor@next&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">页面使用，如果还是按照常规解构引入方式：</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mavonEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mavon-editor&#39;</span></span>
<span class="line">控制台报错，且页面无法渲染该组件</span>
<span class="line">WechatIMG338<span class="token punctuation">.</span>png</span>
<span class="line">所以使用支持 <span class="token constant">ESM</span> <span class="token constant">CDN</span> 资源 alias 配置加载时，引入资源只能直接引入</span>
<span class="line">这也说明这种方式不适合那些需要解构资源的 <span class="token constant">CDN</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;mitt&#39;</span></span>
<span class="line">总结</span>
<span class="line">第一种方案：</span>
<span class="line"></span>
<span class="line">采用 rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>external<span class="token operator">-</span>globals 插件标识是外部引入的资源，在 index<span class="token punctuation">.</span>html 用 script 标签引入 <span class="token constant">CDN</span> 资源</span>
<span class="line">缺点：进入首屏就加载全部 <span class="token constant">CDN</span> 资源；开发环境不可用（这也不算缺点哈哈）</span>
<span class="line"></span>
<span class="line">第二种方案：</span>
<span class="line"></span>
<span class="line">alias 配置项加载 支持 <span class="token constant">ESM</span> 编译的 <span class="token constant">CDN</span>，<span class="token keyword">package</span><span class="token punctuation">.</span>json 可删除 <span class="token constant">CDN</span> 资源的依赖包</span>
<span class="line">优点：按需加载；开发环境也可使用</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const c=n(t,[["render",l]]),r=JSON.parse('{"path":"/vite/vite%E5%A6%82%E4%BD%95%E5%BC%95%E5%85%A5CDN%E6%96%87%E4%BB%B6.html","title":"vite如何引入CDN文件","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"vite/vite如何引入CDN文件.md"}');export{c as comp,r as data};
