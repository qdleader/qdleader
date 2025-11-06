# 前端知识库 QDLeader

<div align="center">

**📚 一个系统化整理的前端知识库，涵盖面试、实战、工具等全方位内容**

[![GitHub stars](https://img.shields.io/github/stars/qdleader/qdleader?style=flat-square)](https://github.com/qdleader/qdleader/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/qdleader/qdleader?style=flat-square)](https://github.com/qdleader/qdleader/network)
[![GitHub issues](https://img.shields.io/github/issues/qdleader/qdleader?style=flat-square)](https://github.com/qdleader/qdleader/issues)

</div>

## 📖 项目简介

这是一个持续更新的前端知识库，汇集了日常开发中的实战经验、面试题解析、工具使用技巧等内容。无论你是初学者还是进阶开发者，都能在这里找到有价值的参考资料。

> 💡 **吾生也有涯，而知也无涯。** 让我们一起在有限的时间里，做自己喜欢的事，探索前端的奇妙世界！

## 💬 交流社区

欢迎关注公众号 **qdleader**，回复「**加群**」即可加入技术交流群！

- 📱 每日推送最新知识点
- 👥 与小伙伴们一起讨论技术问题
- 🎯 获取更多学习资源

## ✨ 特色内容

- 📝 **每日更新** - 持续输出面试题和知识点
- 💼 **实战经验** - 项目中真实遇到的问题及解决方案
- 🎯 **系统化整理** - 按技术栈分类，方便查阅
- 🔧 **工具技巧** - 提升开发效率的实用工具和方法
- 🎨 **组件收藏** - 好玩实用的组件和页面效果
- 🤖 **AI 增强** - 提供 MCP 服务器，让 AI 助手访问知识库

## 📂 目录结构

### 核心技术栈

- **[Vue](./vue/)** & **[Vue3](./vue3/)** - Vue 全家桶相关知识
- **[React](./react/)** - React 生态系统实践
- **[TypeScript](./Typescript/)** - TS 进阶使用
- **[ES6+](./es6/)** - 现代 JavaScript 特性

### 工程化与工具

- **[Webpack](./webpack/)** & **[Vite](./vite/)** & **[Rollup](./rollup/)** - 构建工具
- **[工程化](./工程化/)** - 代码规范、自动化配置
- **[Git](./git/)** - 版本控制最佳实践
- **[包管理](./包管理/)** - npm、pnpm 使用指南

### 样式与布局

- **[CSS](./css/)** & **[CSS3](./css3/)** - 样式基础与进阶
- **[Less & SCSS](./less&scss/)** - CSS 预处理器
- **[UI 框架](./UI框架/)** - 组件库使用技巧

### 前端面试

- **[面试题库](./前端面试/)** - 涵盖 HTML、CSS、JS、Vue、React、TS 等
  - [CSS 类](./前端面试/css类/)
  - [JS 类](./前端面试/js类/)
  - [Vue 篇](./前端面试/vue篇/) & [Vue3 篇](./前端面试/vue3篇/)
  - [React 篇](./前端面试/react篇/)
  - [TS 篇](./前端面试/TS篇/)

### 实战技巧

- **[前端小 Tips](./前端小tip/)** - 实用小技巧合集
- **[项目问题解决](./项目中遇到的问题/)** - 真实项目踩坑记录
- **[优化](./优化/)** - 性能优化方案
- **[不可不知的项目冷知识](./不可不知的项目冷知识/)** - 容易忽视的重要知识

### 移动端与小程序

- **[H5](./h5/)** - 移动端开发
- **[微信小程序](./微信小程序/)** - 小程序开发实践
- **[Uniapp](./uniapp/)** & **[Taro](./taro/)** - 跨平台方案

### 服务端相关

- **[Node.js](./node/)** - 后端 JavaScript
- **[服务端](./服务端/)** - Docker、Linux、Nginx、数据库等
- **[监控告警](./监控告警/)** - Sentry 等工具使用

### AI 相关

- **[AI](./ai/)** - AI 工具使用、Prompt 工程、本地部署等

### 其他

- **[LeetCode](./leetCode/)** - 算法练习
- **[常见算法](./常见算法/)** - 前端必备算法
- **[微前端](./微前端/)** - qiankun 等方案
- **[设计原则](./设计原则/)** - 代码设计思想

## 🚀 快速开始

```bash

# 克隆项目

git clone https://github.com/qdleader/qdleader.git

# 进入目录

cd qdleader

# 使用 VS Code 打开

code .
```

## 🤖 AI 增强 - MCP 服务器

我们提供了 **QDLeader MCP Server**，让 AI 助手（如 Cursor、Claude Desktop）能够直接访问和搜索整个知识库！

### 特性

- 🔍 智能搜索整个知识库
- 📚 按分类浏览文档
- 📖 完整读取任何文档
- 🎯 快速定位 Vue、React、面试题等内容

### 快速配置

在 Cursor 或 Claude Desktop 的 MCP 配置中添加：

```json
{
  "mcpServers": {
    "qdleader": {
      "command": "npx",
      "args": ["-y", "qdleader-mcp"]
    }
  }
}
```

### 使用示例

配置完成后，你可以这样与 AI 助手对话：

- "帮我搜索 Vue3 组合式 API 的相关文档"
- "列出所有前端面试题分类"
- "读取 React hooks 的使用指南"
- "在 TypeScript 分类中搜索泛型相关内容"

📖 详细文档请查看 [MCP Server 文档](./mcp-server/README.md)

欢迎关注公众号 **qdleader**，回复「**加群**」即可加入技术交流群！

- 📱 每日推送最新知识点
- 👥 与小伙伴们一起讨论技术问题
- 🎯 获取更多学习资源

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

如果你有：
- 发现错误或需要更正的内容
- 想要分享的优质知识点
- 好的建议和想法

请随时提交 Issue 或 PR，让我们一起完善这个知识库！

## ⭐ Star History

如果这个项目对你有帮助，欢迎 Star ⭐ 支持一下！

## 💖 赞助支持

如果觉得内容对你有帮助，可以请作者喝杯奶茶 ☕

<div align="center">

![赞助渠道](./image/pay1.jpeg)

</div>

---

<div align="center">

**Made with ❤️ by QDLeader**

一起探索前端的奇妙世界 🌟

</div>
