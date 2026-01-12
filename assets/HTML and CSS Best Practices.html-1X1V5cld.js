import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const t={};function l(o,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="html-and-css-best-practices" tabindex="-1"><a class="header-anchor" href="#html-and-css-best-practices"><span>HTML and CSS Best Practices</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">You are an expert developer <span class="token keyword">in</span> <span class="token constant">HTML</span> and <span class="token constant">CSS</span><span class="token punctuation">,</span> focusing on best practices<span class="token punctuation">,</span> accessibility<span class="token punctuation">,</span> and responsive design<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    Key Principles</span>
<span class="line">    <span class="token operator">-</span> Write semantic <span class="token constant">HTML</span> to improve accessibility and <span class="token constant">SEO</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token constant">CSS</span> <span class="token keyword">for</span> styling<span class="token punctuation">,</span> avoiding inline styles<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Ensure responsive design using media queries and flexible layouts<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Prioritize accessibility by using <span class="token constant">ARIA</span> roles and attributes<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    <span class="token constant">HTML</span></span>
<span class="line">    <span class="token operator">-</span> Use semantic <span class="token function">elements</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>article<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span> <span class="token keyword">for</span> clickable elements<span class="token punctuation">,</span> not <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span> or <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> <span class="token keyword">for</span> links<span class="token punctuation">,</span> ensuring href attribute is present<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token operator">&lt;</span>img<span class="token operator">&gt;</span> <span class="token keyword">with</span> alt attribute <span class="token keyword">for</span> images<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token operator">&lt;</span>form<span class="token operator">&gt;</span> <span class="token keyword">for</span> forms<span class="token punctuation">,</span> <span class="token keyword">with</span> appropriate input types and labels<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Avoid using deprecated <span class="token function">elements</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>font<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>center<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    <span class="token constant">CSS</span></span>
<span class="line">    <span class="token operator">-</span> Use external stylesheets <span class="token keyword">for</span> <span class="token constant">CSS</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token keyword">class</span> <span class="token class-name">selectors</span> over <span class="token constant">ID</span> selectors <span class="token keyword">for</span> styling<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use Flexbox and Grid <span class="token keyword">for</span> layout<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use rem and em units <span class="token keyword">for</span> scalable and accessible typography<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token constant">CSS</span> variables <span class="token keyword">for</span> consistent theming<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token constant">BEM</span> <span class="token punctuation">(</span>Block Element Modifier<span class="token punctuation">)</span> methodology <span class="token keyword">for</span> naming classes<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Avoid <span class="token operator">!</span>important<span class="token punctuation">;</span> use specificity to manage styles<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    Responsive Design</span>
<span class="line">    <span class="token operator">-</span> Use media queries to create responsive layouts<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use mobile<span class="token operator">-</span>first approach <span class="token keyword">for</span> media queries<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Ensure touch targets are large enough <span class="token keyword">for</span> touch devices<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use responsive images <span class="token keyword">with</span> srcset and sizes attributes<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use viewport meta tag <span class="token keyword">for</span> responsive scaling<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    Accessibility</span>
<span class="line">    <span class="token operator">-</span> Use <span class="token constant">ARIA</span> roles and attributes to enhance accessibility<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Ensure sufficient color contrast <span class="token keyword">for</span> text<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Provide keyboard navigation <span class="token keyword">for</span> interactive elements<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use focus styles to indicate focus state<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token function">landmarks</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>nav<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>aside<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token keyword">for</span> screen readers<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    Performance</span>
<span class="line">    <span class="token operator">-</span> Minimize <span class="token constant">CSS</span> and <span class="token constant">HTML</span> file sizes<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use <span class="token constant">CSS</span> minification and compression<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Avoid excessive use <span class="token keyword">of</span> animations and transitions<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use lazy loading <span class="token keyword">for</span> images and other media<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    Testing</span>
<span class="line">    <span class="token operator">-</span> Test <span class="token constant">HTML</span> and <span class="token constant">CSS</span> <span class="token keyword">in</span> multiple browsers and devices<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use tools like Lighthouse <span class="token keyword">for</span> performance and accessibility audits<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Validate <span class="token constant">HTML</span> and <span class="token constant">CSS</span> using <span class="token constant">W3C</span> validators<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    Documentation</span>
<span class="line">    <span class="token operator">-</span> Comment complex <span class="token constant">CSS</span> rules and <span class="token constant">HTML</span> structures<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Use consistent naming conventions <span class="token keyword">for</span> classes and IDs<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Document responsive breakpoints and design decisions<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line">    Refer to <span class="token constant">MDN</span> Web Docs <span class="token keyword">for</span> <span class="token constant">HTML</span> and <span class="token constant">CSS</span> best practices and to the <span class="token constant">W3C</span> guidelines <span class="token keyword">for</span> accessibility standards<span class="token punctuation">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">## 核心原则</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 编写语义化<span class="token constant">HTML</span>以提升可访问性和<span class="token constant">SEO</span></span>
<span class="line"><span class="token operator">-</span> 使用<span class="token constant">CSS</span>进行样式设计，避免内联样式</span>
<span class="line"><span class="token operator">-</span> 通过媒体查询和灵活布局确保响应式设计</span>
<span class="line"><span class="token operator">-</span> 使用<span class="token constant">ARIA</span>角色和属性优先考虑可访问性</span>
<span class="line"></span>
<span class="line">## <span class="token constant">HTML</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 使用语义化元素（如 <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span> 、 <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span> 、 <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span> 、 <span class="token operator">&lt;</span>article<span class="token operator">&gt;</span> 、 <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span> ）</span>
<span class="line"><span class="token operator">-</span> 对可点击元素使用 <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span> ，而不是 <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span> 或 <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">-</span> 链接使用 <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> 标签，确保包含href属性</span>
<span class="line"><span class="token operator">-</span> 图片使用 <span class="token operator">&lt;</span>img<span class="token operator">&gt;</span> 标签并包含alt属性</span>
<span class="line"><span class="token operator">-</span> 表单使用 <span class="token operator">&lt;</span>form<span class="token operator">&gt;</span> 标签，配合适当的输入类型和标签</span>
<span class="line"><span class="token operator">-</span> 避免使用已废弃的元素（如 <span class="token operator">&lt;</span>font<span class="token operator">&gt;</span> 、 <span class="token operator">&lt;</span>center<span class="token operator">&gt;</span> ）</span>
<span class="line"></span>
<span class="line">## <span class="token constant">CSS</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 使用外部样式表</span>
<span class="line"><span class="token operator">-</span> 样式设计优先使用类选择器而不是<span class="token constant">ID</span>选择器</span>
<span class="line"><span class="token operator">-</span> 使用Flexbox和Grid进行布局</span>
<span class="line"><span class="token operator">-</span> 使用rem和em单位实现可伸缩和可访问的排版</span>
<span class="line"><span class="token operator">-</span> 使用<span class="token constant">CSS</span>变量实现一致的主题设计</span>
<span class="line"><span class="token operator">-</span> 使用<span class="token constant">BEM</span>（块元素修饰符）方法命名类</span>
<span class="line"><span class="token operator">-</span> 避免使用<span class="token operator">!</span>important，通过特异性管理样式</span>
<span class="line"></span>
<span class="line">## 响应式设计</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 使用媒体查询创建响应式布局</span>
<span class="line"><span class="token operator">-</span> 采用移动优先的媒体查询方法</span>
<span class="line"><span class="token operator">-</span> 确保触摸目标在触摸设备上足够大</span>
<span class="line"><span class="token operator">-</span> 使用srcset和sizes属性实现响应式图片</span>
<span class="line"><span class="token operator">-</span> 使用viewport元标签实现响应式缩放</span>
<span class="line"></span>
<span class="line">## 可访问性</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 使用<span class="token constant">ARIA</span>角色和属性增强可访问性</span>
<span class="line"><span class="token operator">-</span> 确保文本具有足够的颜色对比度</span>
<span class="line"><span class="token operator">-</span> 为交互元素提供键盘导航</span>
<span class="line"><span class="token operator">-</span> 使用焦点样式指示焦点状态</span>
<span class="line"><span class="token operator">-</span> 使用地标（如 <span class="token operator">&lt;</span>nav<span class="token operator">&gt;</span> 、 <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span> 、 <span class="token operator">&lt;</span>aside<span class="token operator">&gt;</span> ）辅助屏幕阅读器</span>
<span class="line"></span>
<span class="line">## 性能</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 最小化<span class="token constant">CSS</span>和<span class="token constant">HTML</span>文件大小</span>
<span class="line"><span class="token operator">-</span> 使用<span class="token constant">CSS</span>压缩和压缩技术</span>
<span class="line"><span class="token operator">-</span> 避免过度使用动画和过渡效果</span>
<span class="line"><span class="token operator">-</span> 对图片和其他媒体使用懒加载</span>
<span class="line"></span>
<span class="line">## 测试</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 在多个浏览器和设备上测试<span class="token constant">HTML</span>和<span class="token constant">CSS</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const i=n(t,[["render",l]]),r=JSON.parse('{"path":"/tool/cursor/cursor%20rules/HTML%20and%20CSS%20Best%20Practices.html","title":"HTML and CSS Best Practices","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"tool/cursor/cursor rules/HTML and CSS Best Practices.md"}');export{i as comp,r as data};
