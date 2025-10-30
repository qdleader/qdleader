
```js
# 项目背景
这是一个在线旅游攻略分享平台，前端使用 React + TypeScript + TailwindCSS，
后端提供 RESTful API。目标是让用户能快速分享和浏览旅游日记。

# 编码标准
- 所有代码必须使用 TypeScript，不允许使用 JavaScript。
- 变量命名统一使用 camelCase。
- React 组件必须使用 PascalCase。
- 自定义 Hooks 必须以 `use` 开头。

# 库和框架约束
- 必须使用 React 18，不要用 React 19 新特性。
- 样式必须使用 TailwindCSS，不要写内联 style。
- 网络请求必须使用 `fetch`，不允许用 axios。

# 文件结构
- 业务组件放在 `src/components` 下。
- API 调用必须封装在 `src/api` 下。
- 所有页面文件放在 `src/pages` 下。
- 公共工具函数放在 `src/utils` 下。

# 文档规范
- 导出的 API 方法必须写 JSDoc 注释。
- 复杂逻辑的 Hooks 必须写注释，说明参数和返回值。
- 每个页面组件文件顶部必须有模块说明注释。

# 安全规范
- 不要把明文 API Key、token 写在代码里。
- 所有配置从 `.env` 里读取，通过 `process.env` 使用。

```