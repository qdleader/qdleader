# react19 项目初始化提示词

```js
在当前文件夹中，以下是为你生成的 React19 + Vite + Redux + TypeScript + Ant Design 初始化项目提示词，涵盖所需核心功能点：

"请基于 React 19、Vite、Redux（建议使用 Redux Toolkit）、TypeScript 和 Ant Design 构建一个初始化项目，具体要求如下：

1. 项目基础配置：
- 搭建完整的 Vite 工程化环境，配置 TypeScript 类型检查及路径别名
- 集成 Ant Design 并配置主题定制入口，支持按需引入
- 配置 Redux 状态管理，包含 store 初始化、切片示例及类型定义
- 安装必要依赖（如 react-router-dom@6、axios、eslint、prettier 等）

2. 网络请求封装：
- 基于 axios 封装共用请求工具，包含：
  - 请求/响应拦截器（处理 token 携带、错误统一处理、loading 状态）
  - 基础 URL 配置及环境变量区分（开发/生产环境）
  - 请求方法封装（get/post/put/delete）及 TypeScript 泛型类型定义
  - 异常处理机制（网络错误、业务错误提示）

3. 路由配置：
- 基于 react-router-dom@6 封装路由系统：
  - 实现路由懒加载及代码分割
  - 配置路由守卫（权限控制示例）
  - 区分公共路由与私有路由，提供路由配置数组管理
  - 实现嵌套路由示例及路由参数类型定义

4. 代码校验规范：
- 配置 ESLint + Prettier 代码格式化规则，集成 Husky + lint-staged 实现提交校验
- 定义符合 React + TypeScript 最佳实践的校验规则（如组件命名、hooks 使用规范）
- 配置 commitlint 规范提交信息格式（如 feat/fix/docs 类型）

5. 页面初始化：
- 创建 index 首页，包含：
  - Ant Design 组件示例（如 Layout、Button、Card 等）
  - 简单的 Redux 状态读写示例（如计数器或用户信息展示）
  - 调用封装的请求工具示例（可模拟接口数据）
  - 响应式布局适配

6. 工程目录结构：
```

src/
  ├── api/           # 接口请求相关
  ├── assets/        # 静态资源
  ├── components/    # 公共组件
  ├── hooks/         # 自定义hooks
  ├── layouts/       # 布局组件
  ├── pages/         # 页面组件（包含index首页）
  ├── redux/         # Redux状态管理
  ├── router/        # 路由配置
  ├── types/         # TypeScript类型定义
  ├── utils/         # 工具函数（含请求封装）
  └── App.tsx, main.tsx等入口文件
```js

请确保项目可直接运行（提供启动命令说明），所有功能模块有基础注释，符合企业级项目开发规范。"

```
