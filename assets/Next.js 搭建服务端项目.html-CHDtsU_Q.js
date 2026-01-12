import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(o,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">## Turbopack</span>
<span class="line"></span>
<span class="line">首先是最引入注目的，在 Next13 中加入了全新的打包工具 Turbopack， 它是出自 Webpack 作者 TobiasKoppers 之手，官方描述是：开发时更新速度比 Webpack 快 <span class="token number">700</span> 倍、比 Vite 快 <span class="token number">10</span> 倍，是不是有点迫不及待，想要熟手体验了呢？我们直接使用官方提供的 cli 创建一个 Next<span class="token punctuation">.</span>js 工程。</span>
<span class="line">npx create<span class="token operator">-</span>next<span class="token operator">-</span>app <span class="token operator">--</span>example <span class="token keyword">with</span><span class="token operator">-</span>turbopack</span>
<span class="line">复制代码</span>
<span class="line"></span>
<span class="line">这是启动后的界面，这个 demo 不是一个简单的页面，而是一个包含了深度嵌套路由的例子。</span>
<span class="line">下图我开发时的截图，Turbopack 直接在命令行中打印出了构建时间，我们看到启动时间只需要 <span class="token number">2</span><span class="token punctuation">.</span>3ms</span>
<span class="line"></span>
<span class="line">试着修改代码，程序会自动热更新，绝大多数次数更新时间都很快，但偶尔有几次更新时间却很长，图片中有一处需要 16s（我使用的是 Mac <span class="token constant">M1</span><span class="token punctuation">)</span>，这其中的原因就不得而知了，尤大也发布了测评，使用 <span class="token number">1000</span> 个节点来对比更新速度，数据显示：根组件与 vite 时间几乎相同，叶子节点比 vite 快 <span class="token number">68</span><span class="token operator">%</span>，与官方称比 vite 快 <span class="token number">10</span> 倍相差甚远。当然目前 Turbopack 还处于 alpha 阶段，期待 Turbopack 能够尽快推出正式版。</span>
<span class="line">Turbopack 特点</span>
<span class="line"></span>
<span class="line">开箱即用 TypeScript<span class="token punctuation">,</span> <span class="token constant">JSX</span><span class="token punctuation">,</span> <span class="token constant">CSS</span><span class="token punctuation">,</span> <span class="token constant">CSS</span> Modules<span class="token punctuation">,</span> WebAssembly 等</span>
<span class="line">增量计算： Turbopack 是建立在 Turbo 之上的，Turbo 是基于 Rust 的开源、增量记忆化框架，除了可以缓存代码，还可以缓存函数运行结果。</span>
<span class="line">懒编译：例如，如果访问 localhost<span class="token operator">:</span><span class="token number">3000</span>，它将仅打包 pages<span class="token operator">/</span>index<span class="token punctuation">.</span>jsx，以及导入的模块。</span>
<span class="line"></span>
<span class="line">## 创建项目</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">  npm install <span class="token operator">-</span>g create<span class="token operator">-</span>next<span class="token operator">-</span>app		<span class="token comment">//全局安装脚手架</span></span>
<span class="line">  create<span class="token operator">-</span>next<span class="token operator">-</span>app nextApp		<span class="token comment">//基于脚手架创建项目</span></span>
<span class="line">  cd nextApp</span>
<span class="line">  npm run dev		<span class="token comment">//运行项目</span></span>
<span class="line"></span>
<span class="line">#### 创建 ts 模板</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest <span class="token operator">--</span>typescript</span>
<span class="line"></span>
<span class="line">目录结构介绍：</span>
<span class="line"><span class="token operator">&gt;</span> components文件夹<span class="token operator">:</span> 这里是专门放置自己写的组件的，这里的组件不包括页面，指公用的或者有专门用途的组件。</span>
<span class="line"><span class="token operator">&gt;</span> node_modules文件夹：Next项目的所有依赖包都在这里，一般我们不会修改和编辑这里的内容。</span>
<span class="line"><span class="token operator">&gt;</span> pages文件夹：这里是放置页面的，这里边的内容会自动生成路由，并在服务器端渲染，渲染好后进行数据同步。</span>
<span class="line"><span class="token operator">&gt;</span> <span class="token keyword">static</span>文件夹： 这个是静态文件夹，比如项目需要的图片、图标和静态资源都可以放到这里。</span>
<span class="line"><span class="token operator">&gt;</span> <span class="token punctuation">.</span>gitignore文件： 这个主要是控制git提交和上传文件的，简称就是忽略提交。</span>
<span class="line"><span class="token operator">&gt;</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json文件：定义了项目所需要的文件和项目的配置信息（名称、版本和许可证），最主要的是使用npm install 就可以下载项目所需要的所有包。</span>
<span class="line"></span>
<span class="line">## 路由</span>
<span class="line"></span>
<span class="line">#### 页面跳转</span>
<span class="line"></span>
<span class="line">页面跳转一般有两种形式，第一种是利用标签<span class="token operator">&lt;</span>Link<span class="token operator">&gt;</span><span class="token punctuation">,</span>第二种是用js编程的方式进行跳转，也就是利用Router组件</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;next/router&#39;</span></span>
<span class="line"></span>
<span class="line"> <span class="token keyword">const</span> <span class="token function-variable function">goDetail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    Router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/pageDetail&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/pageDetail&quot;</span><span class="token operator">&gt;</span>详情页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>goDetail<span class="token punctuation">}</span><span class="token operator">&gt;</span>去详情页面<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">注意：用<span class="token operator">&lt;</span>Link<span class="token operator">&gt;</span>标签进行跳转是非常容易的，但是又一个小坑需要你注意一下，就是他不支持兄弟标签并列的情况。</span>
<span class="line"></span>
<span class="line">就是得加个根标签</span>
<span class="line"></span>
<span class="line">#### 参数的传递和接收</span>
<span class="line"></span>
<span class="line">在Next<span class="token punctuation">.</span>js中只能通过通过query（<span class="token operator">?</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token function">）来传递参数，而不能通过</span><span class="token punctuation">(</span>path<span class="token operator">:</span>id<span class="token punctuation">)</span>的形式传递参数。</span>
<span class="line"></span>
<span class="line">###### 拼接方式传递</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span></span>
<span class="line"><span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;next/router&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/pageDetail?bid=23&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a<span class="token operator">&gt;</span><span class="token punctuation">{</span>blog<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">goDetail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    Router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/pageDetail?bid=123&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/pageDetail&quot;</span><span class="token operator">&gt;</span>详情页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>goDetail<span class="token punctuation">}</span><span class="token operator">&gt;</span>去详情页面<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">###### 对象方式传递</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">    <span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span></span>
<span class="line">    <span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;next/router&#39;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">goDetail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      Router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/pageDetail&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;icourt&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">pathname</span><span class="token operator">:</span><span class="token string">&quot;/pageDetail&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;icourt&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>详情页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>goDetail<span class="token punctuation">}</span><span class="token operator">&gt;</span>去详情页面<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token comment">//PageDetail.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> withRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/router&#39;</span></span>
<span class="line"><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">PageDetail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>router<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>详情页获取参数<span class="token operator">:</span> <span class="token punctuation">{</span>router<span class="token punctuation">.</span>query<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>返回首页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//withRouter是Next.js框架的高级组件，用来处理路由用的</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>PageDetail<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 动态路由 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">js</span>
<span class="line"></span>
<span class="line">pages<span class="token operator">/</span>post<span class="token operator">/</span><span class="token punctuation">[</span>pid<span class="token punctuation">]</span><span class="token punctuation">.</span>js</span>
<span class="line"><span class="token literal-property property">route</span> <span class="token operator">:</span> <span class="token operator">/</span>post<span class="token operator">/</span>abc  <span class="token operator">--</span><span class="token operator">&gt;</span>  query <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abc&quot;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">pages<span class="token operator">/</span>post<span class="token operator">/</span><span class="token punctuation">[</span>pid<span class="token punctuation">]</span><span class="token operator">/</span><span class="token punctuation">[</span>comment<span class="token punctuation">]</span><span class="token punctuation">.</span>js</span>
<span class="line"><span class="token literal-property property">route</span> <span class="token operator">:</span> <span class="token operator">/</span>post<span class="token operator">/</span>abc<span class="token operator">/</span>a<span class="token operator">-</span>comment  <span class="token operator">--</span><span class="token operator">&gt;</span>  query <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-comment&quot;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">## 数据请求</span>
<span class="line"></span>
<span class="line">使用 react 的 use 函数加 fetch <span class="token constant">API</span> 来实现：静态站点生成（<span class="token constant">SSG</span>）、服务器端渲染（<span class="token constant">SSR</span>）和增量静态再生（<span class="token constant">ISR</span>）</span>
<span class="line">在 Page 页面使用 fetch：</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> use <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> name<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 支持的全类型的数据格式</span></span>
<span class="line">  <span class="token comment">// 可以返回不用序列化的格式数据</span></span>
<span class="line">  <span class="token comment">// 因此可以返回 Date, Map, Set, 等.</span></span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">fetch 的缓存策略</span>
<span class="line"><span class="token comment">// 请求被缓存</span></span>
<span class="line"><span class="token comment">// 相当于 \`getStaticProps\`.</span></span>
<span class="line"><span class="token comment">// \`force-cache\` 是默认值，可以省略</span></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">&#39;force-cache&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 每次刷新都会重新请求.</span></span>
<span class="line"><span class="token comment">// 相当于 \`getServerSideProps\`.</span></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">&#39;no-store&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 请求被缓存10s，10s 重新生成</span></span>
<span class="line"><span class="token comment">// 相当于 \`getStaticProps\` 加上 \`revalidate\` 参数.</span></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">使用这种方式的优点是，当请求数据的增加，打包后前端 JavaScript 的大小不会增加。</span>
<span class="line"></span>
<span class="line">## <span class="token constant">CSS</span><span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span><span class="token constant">JS</span></span>
<span class="line"></span>
<span class="line">可以使用任何现有的 <span class="token constant">CSS</span><span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span><span class="token constant">JS</span> 解决方案。 最简单的一种是内联样式：</span>
<span class="line"><span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>hi there<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">使用 styled<span class="token operator">-</span>jsx 的组件就像这样</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">HelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      Hello world</span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>scoped<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>style jsx<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        p {</span>
<span class="line">          color: blue;</span>
<span class="line">        }</span>
<span class="line">        div {</span>
<span class="line">          background: red;</span>
<span class="line">        }</span>
<span class="line">        @media (max-width: 600px) {</span>
<span class="line">          div {</span>
<span class="line">            background: blue;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>style global jsx<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        body {</span>
<span class="line">          background: black;</span>
<span class="line">        }</span>
<span class="line">      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> HelloWorld</span>
<span class="line"></span>
<span class="line">## @next<span class="token operator">/</span>font</span>
<span class="line"></span>
<span class="line">加入了一个新的包，可以在构建时直接引用 google 字体和本地字体，实现字体的托管和预加载，这点对英文网站很有用，中文网站一般不加载字体，图标建议使用 svg。</span>
<span class="line"></span>
<span class="line">加载谷歌字体</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@next/font/google&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span>html className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">加载本地字体</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">import</span> localFont <span class="token keyword">from</span> <span class="token string">&#39;@next/font/local&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> myFont <span class="token operator">=</span> <span class="token function">localFont</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;./my-font.woff2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span>html className<span class="token operator">=</span><span class="token punctuation">{</span>myFont<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">## next<span class="token operator">/</span>image</span>
<span class="line"></span>
<span class="line">我们知道在 Next<span class="token punctuation">.</span>js <span class="token number">12</span> 之前，使用 <span class="token operator">&lt;</span>img<span class="token operator">&gt;</span>标签，eslint 会有一个警告，提示我们必须使用 next<span class="token operator">/</span>image 组件， 因为 next<span class="token operator">/</span>image 帮我们做了几点优化</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> <span class="token number">1.</span> 自动优化图片格式</span>
<span class="line"><span class="token operator">&gt;</span> <span class="token number">2.</span> 自动缩放图片大小</span>
<span class="line"><span class="token operator">&gt;</span> <span class="token number">3.</span> 使用Intersection Observer <span class="token constant">API</span> 实现懒加载</span>
<span class="line"></span>
<span class="line">所以 image 必须加上 width 和 height 参数</span>
<span class="line">新的 Next<span class="token operator">/</span>image 使用了浏览器的 lazy<span class="token operator">-</span>loading 代替了 Intersection Observer <span class="token constant">API</span></span>
<span class="line">默认情况下需要 alt 标记，因此减少了客户端 JavaScript 代码，当然这个属性对浏览器要求较高，要求 chrome <span class="token number">77</span><span class="token operator">+</span>。</span>
<span class="line">js</span>
<span class="line"><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">&#39;next/image&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> avatar <span class="token keyword">from</span> <span class="token string">&#39;./lee.png&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 为了提高可访问性 &quot;alt&quot; 属性是必须的</span></span>
<span class="line">  <span class="token comment">// 图片可以使用放在 \`app/\`  目录下</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image alt<span class="token operator">=</span><span class="token string">&quot;leeerob&quot;</span> src<span class="token operator">=</span><span class="token punctuation">{</span>avatar<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">&quot;blur&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">ts 版本时候图片需放在 <span class="token keyword">public</span>文件夹下</span>
<span class="line">js</span>
<span class="line">如<span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>assets<span class="token operator">/</span>logo<span class="token punctuation">.</span>png</span>
<span class="line">  <span class="token operator">&lt;</span>Image alt<span class="token operator">=</span><span class="token string">&quot;leeerob&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;/assets/logo.png&quot;</span> placeholder<span class="token operator">=</span><span class="token string">&quot;blur&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">网站部署 netlify</span>
<span class="line">搭建好的next网站项目可以直接在放到github或netlify<span class="token punctuation">[</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">www.netlify.com</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span>免费部署访问</span>
<span class="line"></span>
<span class="line">新的 next<span class="token operator">/</span>image</span>
<span class="line">我们知道在 Next<span class="token punctuation">.</span>js <span class="token number">12</span> 之前，使用 <span class="token operator">&lt;</span>img<span class="token operator">&gt;</span>标签，eslint 会有一个警告，提示我们必须使用 next<span class="token operator">/</span>image 组件， 因为 next<span class="token operator">/</span>image 帮我们做了几点优化</span>
<span class="line"></span>
<span class="line">自动优化图片格式</span>
<span class="line">自动缩放图片大小</span>
<span class="line">使用Intersection Observer <span class="token constant">API</span> 实现懒加载</span>
<span class="line"></span>
<span class="line">所以 image 必须加上 width 和 height 参数</span>
<span class="line">新的 Next<span class="token operator">/</span>image 使用了浏览器的 lazy<span class="token operator">-</span>loading 代替了 Intersection Observer <span class="token constant">API</span></span>
<span class="line">默认情况下需要 alt 标记，因此减少了客户端 JavaScript 代码，当然这个属性对浏览器要求较高，要求 chrome <span class="token number">77</span><span class="token operator">+</span>。</span>
<span class="line"><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">&#39;next/image&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> avatar <span class="token keyword">from</span> <span class="token string">&#39;./lee.png&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 为了提高可访问性 &quot;alt&quot; 属性是必须的</span></span>
<span class="line">  <span class="token comment">// 图片可以使用放在 \`app/\`  目录下</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image alt<span class="token operator">=</span><span class="token string">&quot;leeerob&quot;</span> src<span class="token operator">=</span><span class="token punctuation">{</span>avatar<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">&quot;blur&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">在 Next13 中 ， 在 app 目录下，如要使用 useState 等状态管理的 hook，那么该组件只在客户端执行，需要在首行加入 <span class="token string">&#39;use client&#39;</span> 指令。</span>
<span class="line">js </span>
<span class="line"><span class="token string">&#39;use client&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>You clicked <span class="token punctuation">{</span>count<span class="token punctuation">}</span> times<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">该区分服务端组件和客户端组件，下表列出了常用使用场景</span>
<span class="line"></span>
<span class="line">使用场景服务端组件客户端组件fetch 请求数据。✅<span class="token punctuation">[</span>⚠️<span class="token punctuation">]</span>访问后端资源（直接）✅❌在服务器上保留敏感信息（访问令牌、<span class="token constant">API</span> 密钥等）✅❌保持对服务器的大量依赖<span class="token operator">/</span>减少客户端 <span class="token function">JavaScript✅❌添加交互和事件侦听器（onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token function">等）❌✅使用状态和生命周期效果（useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">useReducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 等）❌✅使用仅限浏览器的 <span class="token constant">API</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>❌✅使用依赖于状态、效果或仅浏览器 <span class="token constant">API</span> 的自定义 hooks❌✅使用React 类组件</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)])])}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/next/Next.js%20%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%A1%B9%E7%9B%AE.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"next/Next.js 搭建服务端项目.md"}');export{i as comp,r as data};
