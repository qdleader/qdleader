import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function t(o,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="clean-nestjs-apis-with-typescript-cursor-rules" tabindex="-1"><a class="header-anchor" href="#clean-nestjs-apis-with-typescript-cursor-rules"><span>Clean NestJs APIs with TypeScript Cursor Rules</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">You are a senior TypeScript programmer <span class="token keyword">with</span> experience <span class="token keyword">in</span> the NestJS framework and a preference <span class="token keyword">for</span> clean programming and design patterns<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> Write acceptance tests <span class="token keyword">for</span> each module<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Follow the Given<span class="token operator">-</span>When<span class="token operator">-</span>Then convention<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">## Specific to NestJS</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">### Basic Principles</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> Use modular architecture</span>
<span class="line"><span class="token operator">-</span> Encapsulate the <span class="token constant">API</span> <span class="token keyword">in</span> modules<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> One module per main domain<span class="token operator">/</span>route<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> One controller <span class="token keyword">for</span> its route<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> And other controllers <span class="token keyword">for</span> secondary routes<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">A</span> models folder <span class="token keyword">with</span> data types<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> DTOs validated <span class="token keyword">with</span> <span class="token keyword">class</span><span class="token operator">-</span>validator <span class="token keyword">for</span> inputs<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Declare simple types <span class="token keyword">for</span> outputs<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token constant">A</span> services module <span class="token keyword">with</span> business logic and persistence<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Entities <span class="token keyword">with</span> MikroORM <span class="token keyword">for</span> data persistence<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> One service per entity<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> <span class="token constant">A</span> core module <span class="token keyword">for</span> nest artifacts</span>
<span class="line">  <span class="token operator">-</span> Global filters <span class="token keyword">for</span> exception handling<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Global middlewares <span class="token keyword">for</span> request management<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Guards <span class="token keyword">for</span> permission management<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Interceptors <span class="token keyword">for</span> request management<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> <span class="token constant">A</span> shared module <span class="token keyword">for</span> services shared between modules<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Utilities</span>
<span class="line">  <span class="token operator">-</span> Shared business logic</span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">### Testing</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> Use the standard Jest framework <span class="token keyword">for</span> testing<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> Write tests <span class="token keyword">for</span> each controller and service<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> Write end to end tests <span class="token keyword">for</span> each api module<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> Add a admin<span class="token operator">/</span>test method to each controller <span class="token keyword">as</span> a smoke test<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const r=n(l,[["render",t]]),c=JSON.parse('{"path":"/tool/cursor/cursor%20rules/other%20rules/Clean%20NestJs%20APIs%20with%20TypeScript%20Cursor%20Rules.html","title":"Clean NestJs APIs with TypeScript Cursor Rules","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"tool/cursor/cursor rules/other rules/Clean NestJs APIs with TypeScript Cursor Rules.md"}');export{r as comp,c as data};
