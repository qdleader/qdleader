import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function i(r,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="react19-项目初始化提示词" tabindex="-1"><a class="header-anchor" href="#react19-项目初始化提示词"><span>react19 项目初始化提示词</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">在当前文件夹中，以下是为你生成的 React19 <span class="token operator">+</span> Vite <span class="token operator">+</span> Redux <span class="token operator">+</span> TypeScript <span class="token operator">+</span> Ant Design 初始化项目提示词，涵盖所需核心功能点：</span>
<span class="line"></span>
<span class="line">&quot;请基于 React <span class="token number">19</span>、Vite、Redux（建议使用 Redux Toolkit）、TypeScript 和 Ant Design 构建一个初始化项目，具体要求如下：</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> 项目基础配置：</span>
<span class="line"><span class="token operator">-</span> 搭建完整的 Vite 工程化环境，配置 TypeScript 类型检查及路径别名</span>
<span class="line"><span class="token operator">-</span> 集成 Ant Design 并配置主题定制入口，支持按需引入</span>
<span class="line"><span class="token operator">-</span> 配置 Redux 状态管理，包含 store 初始化、切片示例及类型定义</span>
<span class="line"><span class="token operator">-</span> 安装必要依赖（如 react<span class="token operator">-</span>router<span class="token operator">-</span>dom@<span class="token number">6</span>、axios、eslint、prettier 等）</span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> 网络请求封装：</span>
<span class="line"><span class="token operator">-</span> 基于 axios 封装共用请求工具，包含：</span>
<span class="line">  <span class="token operator">-</span> 请求<span class="token operator">/</span>响应拦截器（处理 token 携带、错误统一处理、loading 状态）</span>
<span class="line">  <span class="token operator">-</span> 基础 <span class="token constant">URL</span> 配置及环境变量区分（开发<span class="token operator">/</span>生产环境）</span>
<span class="line">  <span class="token operator">-</span> 请求方法封装（get<span class="token operator">/</span>post<span class="token operator">/</span>put<span class="token operator">/</span><span class="token keyword">delete</span>）及 TypeScript 泛型类型定义</span>
<span class="line">  <span class="token operator">-</span> 异常处理机制（网络错误、业务错误提示）</span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span> 路由配置：</span>
<span class="line"><span class="token operator">-</span> 基于 react<span class="token operator">-</span>router<span class="token operator">-</span>dom@<span class="token number">6</span> 封装路由系统：</span>
<span class="line">  <span class="token operator">-</span> 实现路由懒加载及代码分割</span>
<span class="line">  <span class="token operator">-</span> 配置路由守卫（权限控制示例）</span>
<span class="line">  <span class="token operator">-</span> 区分公共路由与私有路由，提供路由配置数组管理</span>
<span class="line">  <span class="token operator">-</span> 实现嵌套路由示例及路由参数类型定义</span>
<span class="line"></span>
<span class="line"><span class="token number">4.</span> 代码校验规范：</span>
<span class="line"><span class="token operator">-</span> 配置 ESLint <span class="token operator">+</span> Prettier 代码格式化规则，集成 Husky <span class="token operator">+</span> lint<span class="token operator">-</span>staged 实现提交校验</span>
<span class="line"><span class="token operator">-</span> 定义符合 React <span class="token operator">+</span> TypeScript 最佳实践的校验规则（如组件命名、hooks 使用规范）</span>
<span class="line"><span class="token operator">-</span> 配置 commitlint 规范提交信息格式（如 feat<span class="token operator">/</span>fix<span class="token operator">/</span>docs 类型）</span>
<span class="line"></span>
<span class="line"><span class="token number">5.</span> 页面初始化：</span>
<span class="line"><span class="token operator">-</span> 创建 index 首页，包含：</span>
<span class="line">  <span class="token operator">-</span> Ant Design 组件示例（如 Layout、Button、Card 等）</span>
<span class="line">  <span class="token operator">-</span> 简单的 Redux 状态读写示例（如计数器或用户信息展示）</span>
<span class="line">  <span class="token operator">-</span> 调用封装的请求工具示例（可模拟接口数据）</span>
<span class="line">  <span class="token operator">-</span> 响应式布局适配</span>
<span class="line"></span>
<span class="line"><span class="token number">6.</span> 工程目录结构：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/ ├── api/ # 接口请求相关 ├── assets/ # 静态资源 ├── components/ # 公共组件 ├── hooks/ # 自定义hooks ├── layouts/ # 布局组件 ├── pages/ # 页面组件（包含index首页） ├── redux/ # Redux状态管理 ├── router/ # 路由配置 ├── types/ # TypeScript类型定义 ├── utils/ # 工具函数（含请求封装） └── App.tsx, main.tsx等入口文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">请确保项目可直接运行（提供启动命令说明），所有功能模块有基础注释，符合企业级项目开发规范。&quot;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)])])}const o=n(l,[["render",i]]),c=JSON.parse('{"path":"/ai/prompt/%E9%A1%B9%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96/react19%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8F%90%E7%A4%BA%E8%AF%8D.html","title":"react19 项目初始化提示词","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"ai/prompt/项目初始化/react19初始化提示词.md"}');export{o as comp,c as data};
