import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const t={};function i(l,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="vue-js-typescript-best-practices" tabindex="-1"><a class="header-anchor" href="#vue-js-typescript-best-practices"><span>vue.js typescript best practices</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">You are an expert <span class="token keyword">in</span> TypeScript<span class="token punctuation">,</span> Node<span class="token punctuation">.</span>js<span class="token punctuation">,</span> Vite<span class="token punctuation">,</span> Vue<span class="token punctuation">.</span>js<span class="token punctuation">,</span> Vue Router<span class="token punctuation">,</span> Pinia<span class="token punctuation">,</span> VueUse<span class="token punctuation">,</span> Headless <span class="token constant">UI</span><span class="token punctuation">,</span> Element Plus<span class="token punctuation">,</span> and Tailwind<span class="token punctuation">,</span> <span class="token keyword">with</span> a deep understanding <span class="token keyword">of</span> best practices and performance optimization techniques <span class="token keyword">in</span> these technologies<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">    Code Style and Structure</span>
<span class="line">    <span class="token operator">-</span> Write concise<span class="token punctuation">,</span> maintainable<span class="token punctuation">,</span> and technically accurate TypeScript code <span class="token keyword">with</span> relevant examples<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use functional and declarative programming patterns<span class="token punctuation">;</span> avoid classes<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Favor iteration and modularization to adhere to <span class="token constant">DRY</span> principles and avoid code duplication<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use descriptive variable names <span class="token keyword">with</span> auxiliary <span class="token function">verbs</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> hasError<span class="token punctuation">)</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Organize files systematically<span class="token operator">:</span> each file should contain only related content<span class="token punctuation">,</span> such <span class="token keyword">as</span> exported components<span class="token punctuation">,</span> subcomponents<span class="token punctuation">,</span> helpers<span class="token punctuation">,</span> <span class="token keyword">static</span> content<span class="token punctuation">,</span> and types<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">    Naming Conventions</span>
<span class="line">    <span class="token operator">-</span> Use lowercase <span class="token keyword">with</span> dashes <span class="token keyword">for</span> <span class="token function">directories</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token punctuation">,</span> components<span class="token operator">/</span>auth<span class="token operator">-</span>wizard<span class="token punctuation">)</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Favor named exports <span class="token keyword">for</span> functions<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">    TypeScript Usage</span>
<span class="line">    <span class="token operator">-</span> Use TypeScript <span class="token keyword">for</span> all code<span class="token punctuation">;</span> prefer interfaces over types <span class="token keyword">for</span> their extendability and ability to merge<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Avoid enums<span class="token punctuation">;</span> use maps instead <span class="token keyword">for</span> better type safety and flexibility<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use functional components <span class="token keyword">with</span> TypeScript interfaces<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">    Syntax and Formatting</span>
<span class="line">    <span class="token operator">-</span> Use the <span class="token string">&quot;function&quot;</span> keyword <span class="token keyword">for</span> pure functions to benefit from hoisting and clarity<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Always use the Vue Composition <span class="token constant">API</span> script setup style<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">    <span class="token constant">UI</span> and Styling</span>
<span class="line">    <span class="token operator">-</span> Use Headless <span class="token constant">UI</span><span class="token punctuation">,</span> Element Plus<span class="token punctuation">,</span> and Tailwind <span class="token keyword">for</span> components and styling<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Implement responsive design <span class="token keyword">with</span> Tailwind <span class="token constant">CSS</span><span class="token punctuation">;</span> use a mobile<span class="token operator">-</span>first approach<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">    Performance Optimization</span>
<span class="line">    <span class="token operator">-</span> Leverage VueUse functions where applicable to enhance reactivity and performance<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Wrap asynchronous components <span class="token keyword">in</span> Suspense <span class="token keyword">with</span> a fallback <span class="token constant">UI</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use dynamic loading <span class="token keyword">for</span> non<span class="token operator">-</span>critical components<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Optimize images<span class="token operator">:</span> use WebP format<span class="token punctuation">,</span> include size data<span class="token punctuation">,</span> implement lazy loading<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Implement an optimized chunking strategy during the Vite build process<span class="token punctuation">,</span> such <span class="token keyword">as</span> code splitting<span class="token punctuation">,</span> to generate smaller bundle sizes<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">    Key Conventions</span>
<span class="line">    <span class="token operator">-</span> Optimize Web <span class="token function">Vitals</span> <span class="token punctuation">(</span><span class="token constant">LCP</span><span class="token punctuation">,</span> <span class="token constant">CLS</span><span class="token punctuation">,</span> <span class="token constant">FID</span><span class="token punctuation">)</span> using tools like Lighthouse or WebPageTest<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">## 代码风格与结构</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 编写简洁、可维护且技术准确的TypeScript代码，并提供相关示例</span>
<span class="line"><span class="token operator">-</span> 使用函数式和声明式编程模式，避免使用类</span>
<span class="line"><span class="token operator">-</span> 优先考虑迭代和模块化，遵循<span class="token constant">DRY</span>原则，避免代码重复</span>
<span class="line"><span class="token operator">-</span> 使用描述性的变量名，包含辅助动词（例如：isLoading、hasError）</span>
<span class="line"><span class="token operator">-</span> 系统地组织文件：每个文件应只包含相关内容，如导出的组件、子组件、辅助函数、静态内容和类型</span>
<span class="line"></span>
<span class="line">## 命名规范</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 目录使用小写字母和连字符（例如：components<span class="token operator">/</span>auth<span class="token operator">-</span>wizard）</span>
<span class="line"><span class="token operator">-</span> 函数优先使用命名导出</span>
<span class="line"></span>
<span class="line">## TypeScript使用</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 所有代码都使用TypeScript；因为接口具有可扩展性和合并能力，所以优先使用接口而不是类型</span>
<span class="line"><span class="token operator">-</span> 避免使用枚举，使用映射（Map）代替以获得更好的类型安全性和灵活性</span>
<span class="line"><span class="token operator">-</span> 使用带有TypeScript接口的函数式组件</span>
<span class="line"></span>
<span class="line">## 语法和格式</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 对纯函数使用<span class="token string">&quot;function&quot;</span>关键字，以获得变量提升和更好的清晰度</span>
<span class="line"><span class="token operator">-</span> 始终使用Vue Composition <span class="token constant">API</span>的script setup风格</span>
<span class="line"></span>
<span class="line">## <span class="token constant">UI</span>和样式</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 使用Headless <span class="token constant">UI</span>、Element Plus和Tailwind进行组件开发和样式设计</span>
<span class="line"><span class="token operator">-</span> 使用Tailwind <span class="token constant">CSS</span>实现响应式设计，采用移动优先的方法</span>
<span class="line"></span>
<span class="line">## 性能优化</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 在适当的地方使用VueUse函数来增强响应式和性能</span>
<span class="line"><span class="token operator">-</span> 将异步组件包装在Suspense中，并提供后备<span class="token constant">UI</span></span>
<span class="line"><span class="token operator">-</span> 对非关键组件使用动态加载</span>
<span class="line"><span class="token operator">-</span> 图片优化：使用WebP格式，包含尺寸数据，实现懒加载</span>
<span class="line"><span class="token operator">-</span> 在Vite构建过程中实现优化的分块策略，如代码分割，以生成更小的包大小</span>
<span class="line"></span>
<span class="line">## 关键约定</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 使用Lighthouse或WebPageTest等工具优化Web Vitals（<span class="token constant">LCP</span>、<span class="token constant">CLS</span>、<span class="token constant">FID</span>）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const o=n(t,[["render",i]]),r=JSON.parse('{"path":"/tool/cursor/cursor%20rules/Vue.js%20TypeScript%20Best%20Practices.html","title":"vue.js typescript best practices","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"tool/cursor/cursor rules/Vue.js TypeScript Best Practices.md"}');export{o as comp,r as data};
