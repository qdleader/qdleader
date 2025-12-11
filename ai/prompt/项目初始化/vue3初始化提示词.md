# Vue3 + Vite + TypeScript 项目初始化提示词

请帮我创建一个完整的 Vue3 项目，包含以下技术栈和配置：

## 技术栈
- Vue 3 (Composition API)
- Vite (最新版本)
- TypeScript
- Pinia (状态管理)
- SCSS (样式预处理器)
- Ant Design Vue (UI 组件库)

## 功能要求

### 1. 项目初始化
- 使用 Vite 创建 Vue3 + TypeScript 项目
- 安装并配置所有依赖包

### 2. 请求封装
- 使用 axios 封装 HTTP 请求
- 配置请求拦截器（添加 token、loading 等）
- 配置响应拦截器（统一错误处理、数据解构等）
- 支持 TypeScript 类型定义
- 创建一个完整的请求示例（如：用户登录或获取用户列表）

### 3. 代码规范配置
- 配置 ESLint（Vue3 + TypeScript 规则）
- 配置 Prettier（代码格式化）
- 配置 Husky（Git hooks）
- 配置 lint-staged（提交前代码检查）
- 配置 commitlint（提交信息规范）

### 4. 编辑器配置
- 创建 .vscode/settings.json，配置保存时自动格式化
- 配置 ESLint 和 Prettier 自动修复

## 项目结构要求
```js
src/
├── api/              # API 接口
├── assets/           # 静态资源
├── components/       # 公共组件
├── stores/           # Pinia 状态管理
├── utils/            # 工具函数
│   └── request.ts    # axios 封装
├── views/            # 页面组件
├── router/           # 路由配置
├── styles/           # 全局样式
└── App.vue
```

## 输出内容
1. 完整的项目初始化命令
2. 所有配置文件的完整代码（package.json, vite.config.ts, tsconfig.json, .eslintrc.cjs, .prettierrc, .husky/, .vscode/settings.json 等）
3. axios 请求封装的完整代码（包含 TypeScript 类型定义）
4. 一个完整的 API 请求示例（包括接口定义、类型定义、在组件中的调用）
5. 详细的使用说明

请提供完整可运行的代码，确保所有配置都能正常工作。



1. 开发体验优化

添加 Vue DevTools 支持 - 方便调试
配置路径别名 (@/表示src目录)
添加 unplugin-auto-import 和 unplugin-vue-components - 自动导入API和组件,减少import语句

项目中增加单文件大小限制，单文件组件最大不能超过600行