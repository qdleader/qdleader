import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function i(c,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="搭建天气预报-mcp" tabindex="-1"><a class="header-anchor" href="#搭建天气预报-mcp"><span>搭建天气预报 mcp</span></a></h1><h2 id="链接高德地图-mcp" tabindex="-1"><a class="header-anchor" href="#链接高德地图-mcp"><span>链接高德地图 MCP</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;mcpServers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;amap-amap-sse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://mcp.amap.com/sse?key=e6f2b10a83287c163dd26fd868c23b9d&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高德官网上申请的 key [https://lbs.amap.com/]</p><p>创建新应用--》 添加 key --》 选择 web 服务 —————&gt; 提交 ，，复制对应的 key</p><h2 id="链接-quickchart-server-mcp-server" tabindex="-1"><a class="header-anchor" href="#链接-quickchart-server-mcp-server"><span>链接 quickchart-server MCP Server</span></a></h2><p>它是一个基于 TypeScript 的服务器，集成了 quickchart.io 基于 URL 的图表生成服务。通过 MCP Server，用户可以通过提供数据和样式参数，使用 Chart.js 配置创建各种类型的图表，服务器会将这些配置转换为图表 URL 或可下载的图像 1。 我们的思路就是将天气反馈，让这个做一个图表 我们还是一样的步骤，将下面的代码放到创建 MCP 里面</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;mcpServers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;quickchart-server&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;-y&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;@gongrzhe/quickchart-mcp-server&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链接-edgeone-pages-deploy-mcp" tabindex="-1"><a class="header-anchor" href="#链接-edgeone-pages-deploy-mcp"><span>链接 EdgeOne Pages Deploy MCP</span></a></h2><p>EdgeOne Pages Deploy MCP 是一项专用服务，能够将 HTML 内容快速部署到 EdgeOne Pages 并生成公开访问链接。这使您能够立即预览和分享 AI 生成的网页内容。 说白了就是我们可以在本地创建一个 html 文件，然后通过 EdgeOne Pages Deploy MCP 上传成一个可访问的网站页面</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;mcpServers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;edgeone-pages-mcp-server&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;edgeone-pages-mcp&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建智能体，输入提示词</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"># 角色</span>
<span class="line"></span>
<span class="line">你是一位专业的气象数据分析师，能够查询任意城市的未来<span class="token number">7</span>天天气，并生成可视化图表。</span>
<span class="line"></span>
<span class="line">## 技能</span>
<span class="line">### 技能 <span class="token number">1</span><span class="token operator">:</span> 查询天气数据</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 使用高德<span class="token constant">MCP</span>这个<span class="token constant">MCP</span>服务，查询任意城市未来<span class="token number">7</span>天的天气数据。</span>
<span class="line"><span class="token operator">-</span> 获取的数据应包括但不限于温度、湿度、风速、降水量等关键气象指标。</span>
<span class="line"></span>
<span class="line">### 技能 <span class="token number">2</span><span class="token operator">:</span> 生成可视化图表</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 将查询到的天气数据用QuickChart这个<span class="token constant">MCP</span>服务转换为易于理解的可视化图表。</span>
<span class="line"><span class="token operator">-</span> 可视化图表可以是折线图、柱状图或热力图等形式，具体取决于用户的需求和数据特性。</span>
<span class="line"><span class="token operator">-</span> 确保图表清晰、美观且易于解读。</span>
<span class="line"></span>
<span class="line">### 技能 <span class="token number">3</span><span class="token operator">:</span> 提供天气分析报告</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 根据查询到的天气数据，提供简要的天气分析报告。</span>
<span class="line"><span class="token operator">-</span> 报告应包括对未来<span class="token number">4</span>天天气趋势的总结，以及可能对用户活动产生影响的建议。</span>
<span class="line"></span>
<span class="line">### 技能<span class="token number">3</span> ：部署到EdgeOne Pages</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 将最后的html代码部分，将 <span class="token constant">HTML</span> 内容快速部署到 EdgeOne Pages 并生成公开访问链接</span>
<span class="line"></span>
<span class="line">## 限制</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 仅提供与天气相关的数据和分析。</span>
<span class="line"><span class="token operator">-</span> 生成的图表必须基于查询到的实际天气数据。</span>
<span class="line"><span class="token operator">-</span> 如果需要调用外部工具或<span class="token constant">API</span>，请明确说明并提供相应的调用方法。</span>
<span class="line"><span class="token operator">-</span> 所有输出的内容必须准确无误，不得包含任何误导性信息。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么到这里了，我们的这个智能体就用到了三个 MCP Servers 了 我来分析下，使用高德地图 MCP Servers 进行天气情况的获取操作 利用 quickchart-server MCP Server 来进行表格的创建操作 利用 EdgeOne Pages Deploy MCP 进行可视化网站的部署搭建操作</p><p>引用新建的的智能体，输入问题</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">利用高德<span class="token constant">MCP</span>帮我获取北京最近<span class="token number">7</span>天的天气，利用quickchart<span class="token operator">-</span>server <span class="token constant">MCP</span> Server帮我进行图标的构建，利用EdgeOne Pages Deploy <span class="token constant">MCP</span>帮我进行网站的部署操作</span>
<span class="line"></span>
<span class="line">代码格式为html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)])])}const r=n(l,[["render",i]]),o=JSON.parse('{"path":"/ai/mcp/%E6%90%AD%E5%BB%BA%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5mcp.html","title":"搭建天气预报 mcp","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"ai/mcp/搭建天气预报mcp.md"}');export{r as comp,o as data};
