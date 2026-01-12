import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function t(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"># 项目背景</span>
<span class="line"></span>
<span class="line">这是一个在线旅游攻略分享平台，前端使用 React <span class="token operator">+</span> TypeScript <span class="token operator">+</span> TailwindCSS，</span>
<span class="line">后端提供 RESTful <span class="token constant">API</span>。目标是让用户能快速分享和浏览旅游日记。</span>
<span class="line"></span>
<span class="line"># 编码标准</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 所有代码必须使用 TypeScript，不允许使用 JavaScript。</span>
<span class="line"><span class="token operator">-</span> 变量命名统一使用 camelCase。</span>
<span class="line"><span class="token operator">-</span> React 组件必须使用 PascalCase。</span>
<span class="line"><span class="token operator">-</span> 自定义 Hooks 必须以 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">use</span><span class="token template-punctuation string">\`</span></span> 开头。</span>
<span class="line"></span>
<span class="line"># 库和框架约束</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 必须使用 React <span class="token number">18</span>，不要用 React <span class="token number">19</span> 新特性。</span>
<span class="line"><span class="token operator">-</span> 样式必须使用 TailwindCSS，不要写内联 style。</span>
<span class="line"><span class="token operator">-</span> 网络请求必须使用 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">fetch</span><span class="token template-punctuation string">\`</span></span>，不允许用 axios。</span>
<span class="line"></span>
<span class="line"># 文件结构</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 业务组件放在 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/components</span><span class="token template-punctuation string">\`</span></span> 下。</span>
<span class="line"><span class="token operator">-</span> <span class="token constant">API</span> 调用必须封装在 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/api</span><span class="token template-punctuation string">\`</span></span> 下。</span>
<span class="line"><span class="token operator">-</span> 所有页面文件放在 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/pages</span><span class="token template-punctuation string">\`</span></span> 下。</span>
<span class="line"><span class="token operator">-</span> 公共工具函数放在 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/utils</span><span class="token template-punctuation string">\`</span></span> 下。</span>
<span class="line"></span>
<span class="line"># 文档规范</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 导出的 <span class="token constant">API</span> 方法必须写 JSDoc 注释。</span>
<span class="line"><span class="token operator">-</span> 复杂逻辑的 Hooks 必须写注释，说明参数和返回值。</span>
<span class="line"><span class="token operator">-</span> 每个页面组件文件顶部必须有模块说明注释。</span>
<span class="line"></span>
<span class="line"># 安全规范</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 不要把明文 <span class="token constant">API</span> Key、token 写在代码里。</span>
<span class="line"><span class="token operator">-</span> 所有配置从 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.env</span><span class="token template-punctuation string">\`</span></span> 里读取，通过 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">process.env</span><span class="token template-punctuation string">\`</span></span> 使用。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)])])}const r=n(l,[["render",t]]),o=JSON.parse('{"path":"/ai/prompt/%E5%BC%80%E5%8F%91%E7%B1%BB%E6%8F%90%E7%A4%BA%E8%AF%8D/react18%20%E6%8F%90%E7%A4%BA%E8%AF%8D.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"ai/prompt/开发类提示词/react18 提示词.md"}');export{r as comp,o as data};
