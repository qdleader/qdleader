# QDLeader MCP Server

[![npm version](https://img.shields.io/npm/v/qdleader-mcp.svg)](https://www.npmjs.com/package/qdleader-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一个基于 Model Context Protocol (MCP) 的前端知识库服务器，让 AI 助手能够访问 QDLeader 的完整前端知识库。

## 🌟 功能特点

- 🔍 **智能搜索**: 在整个知识库中快速搜索相关文档
- 📚 **分类浏览**: 按技术栈和主题浏览文档
- 📖 **文档阅读**: 完整读取任何文档内容
- 🎯 **精准定位**: 快速找到 Vue、React、TypeScript、面试题等内容
- 🚀 **零配置**: 开箱即用，自动索引所有文档

## 📦 安装

### 在 Cursor 中使用（推荐）

1. 打开 Cursor，点击左下角的 "设置" 图标
2. 在设置页面中找到 "MCP Servers" 选项
3. 点击 "Add new global MCP server"
4. 选择 "手动配置"
5. 粘贴以下配置：

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

### 在 Claude Desktop 中使用

编辑 Claude 的配置文件：

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

添加以下配置：

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

### 本地开发配置

如果你克隆了仓库并想本地开发：

```json
{
  "mcpServers": {
    "qdleader": {
      "command": "node",
      "args": ["/path/to/qdleader/mcp-server/dist/index.js"]
    }
  }
}
```

## 🎯 可用工具

### 1. search_knowledge

在知识库中搜索文档。

**参数:**
- `query` (必需): 搜索关键词
- `category` (可选): 按分类过滤

**示例:**
```js
搜索 Vue 相关的文档
搜索 React hooks 的内容
在前端面试分类中搜索 Promise
```

### 2. read_document

读取特定文档的完整内容。

**参数:**
- `path` (必需): 文档的相对路径（从 search_knowledge 返回）

**示例:**
```js
读取 vue/vue生命周期.md
读取 react/hooks/useState.md
```

### 3. list_categories

列出所有可用的分类及其文档数量。

**参数:** 无

**示例:**
```js
列出所有分类
显示所有技术栈分类
```

### 4. get_category_contents

获取特定分类下的所有文档列表。

**参数:**
- `category` (必需): 分类名称

**示例:**
```js
获取 vue 分类下的所有文档
列出前端面试分类的内容
```

## 💡 使用示例

与 AI 助手对话时，可以这样使用：

1. **搜索知识点**
   ```
   帮我搜索 Vue3 组合式 API 的相关文档
   ```

2. **查看分类**
   ```
   列出所有可用的技术分类
   ```

3. **读取文档**
   ```
   读取 TypeScript 泛型的文档内容
   ```

4. **准备面试**
   ```
   在前端面试分类中搜索 JavaScript 相关的题目
   ```

5. **学习新技术**
   ```
   获取 React 分类下的所有文档，我想系统学习
   ```

## 📚 包含的知识领域

- **框架**: Vue2/3, React, Next.js, Taro, Uniapp
- **语言**: JavaScript, TypeScript, ES6+
- **样式**: CSS, CSS3, Less, SCSS
- **工程化**: Webpack, Vite, Rollup, 代码规范
- **移动端**: H5, 微信小程序, 跨平台开发
- **后端**: Node.js, Docker, Linux, Nginx, 数据库
- **面试**: HTML/CSS/JS/Vue/React/TS 面试题库
- **算法**: LeetCode, 常见算法
- **实战**: 项目问题、优化方案、实用技巧
- **AI**: AI 工具、Prompt、本地部署

## 🛠️ 本地开发

```bash

# 克隆仓库

git clone https://github.com/qdleader/qdleader.git
cd qdleader/mcp-server

# 安装依赖

npm install

# 构建

npm run build

# 开发模式（监听文件变化）

npm run dev

# 运行

npm start
```

## 📝 技术架构

- **运行时**: Node.js 18+
- **语言**: TypeScript
- **协议**: Model Context Protocol (MCP)
- **依赖**: 
  - `@modelcontextprotocol/sdk` - MCP SDK
  - `glob` - 文件搜索

## 🔧 工作原理

1. **索引构建**: 启动时自动扫描仓库中的所有 Markdown 文档
2. **智能搜索**: 支持文件名、标题、路径的模糊搜索
3. **分类管理**: 基于目录结构自动组织文档分类
4. **安全访问**: 确保只能访问仓库内的文档

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](../LICENSE) 文件

## 🔗 相关链接

- [QDLeader 知识库主仓库](https://github.com/qdleader/qdleader)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Cursor 官网](https://cursor.sh/)

## ⭐ Star History

如果这个 MCP 服务器对你有帮助，欢迎给主仓库一个 Star！

---

**Made with ❤️ by QDLeader**

探索前端知识，让 AI 成为你的最佳学习伙伴 🚀
