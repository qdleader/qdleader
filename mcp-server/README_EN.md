# QDLeader MCP Server

[![npm version](https://img.shields.io/npm/v/qdleader-mcp.svg)](https://www.npmjs.com/package/qdleader-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Model Context Protocol (MCP) server that provides AI assistants access to QDLeader's comprehensive front-end knowledge base.

[中文文档](./README.md) | English

## 🌟 Features

- 🔍 **Smart Search**: Quickly search through the entire knowledge base
- 📚 **Category Browsing**: Browse documents by tech stack and topics
- 📖 **Document Reading**: Read full content of any document
- 🎯 **Precise Targeting**: Quickly find Vue, React, TypeScript, interview questions, etc.
- 🚀 **Zero Configuration**: Works out of the box with automatic document indexing

## 📦 Installation

### Use in Cursor (Recommended)

1. Open Cursor and click the "Settings" icon in the bottom left
2. Find "MCP Servers" in the settings page
3. Click "Add new global MCP server"
4. Select "Manual configuration"
5. Paste the following configuration:

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

### Use in Claude Desktop

Edit Claude's configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following configuration:

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

### Local Development Configuration

If you've cloned the repository and want to develop locally:

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

## 🎯 Available Tools

### 1. search_knowledge

Search for documents in the knowledge base.

**Parameters:**
- `query` (required): Search keyword
- `category` (optional): Filter by category

**Examples:**
```
Search for Vue related documents
Find React hooks content
Search for Promise in interview category
```

### 2. read_document

Read the full content of a specific document.

**Parameters:**
- `path` (required): Relative path to the document (returned from search_knowledge)

**Examples:**
```
Read vue/vue生命周期.md
Read react/hooks/useState.md
```

### 3. list_categories

List all available categories with document counts.

**Parameters:** None

**Examples:**
```
List all categories
Show all tech stack categories
```

### 4. get_category_contents

Get a list of all documents in a specific category.

**Parameters:**
- `category` (required): Category name

**Examples:**
```
Get all documents in vue category
List contents in interview category
```

## 💡 Usage Examples

When chatting with AI assistants:

1. **Search Knowledge**
   ```
   Help me search for Vue3 Composition API documentation
   ```

2. **View Categories**
   ```
   List all available tech categories
   ```

3. **Read Documents**
   ```
   Read the TypeScript generics documentation
   ```

4. **Interview Prep**
   ```
   Search for JavaScript questions in the interview category
   ```

5. **Learn New Tech**
   ```
   Get all documents in React category, I want to learn systematically
   ```

## 📚 Knowledge Domains

- **Frameworks**: Vue2/3, React, Next.js, Taro, Uniapp
- **Languages**: JavaScript, TypeScript, ES6+
- **Styling**: CSS, CSS3, Less, SCSS
- **Engineering**: Webpack, Vite, Rollup, Code Standards
- **Mobile**: H5, WeChat Mini Programs, Cross-platform
- **Backend**: Node.js, Docker, Linux, Nginx, Databases
- **Interviews**: HTML/CSS/JS/Vue/React/TS Question Bank
- **Algorithms**: LeetCode, Common Algorithms
- **Practice**: Project Issues, Optimization, Tips
- **AI**: AI Tools, Prompts, Local Deployment

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/qdleader/qdleader.git
cd qdleader/mcp-server

# Install dependencies
npm install

# Build
npm run build

# Development mode (watch for changes)
npm run dev

# Run
npm start
```

## 📝 Technical Architecture

- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Protocol**: Model Context Protocol (MCP)
- **Dependencies**: 
  - `@modelcontextprotocol/sdk` - MCP SDK
  - `glob` - File searching

## 🔧 How It Works

1. **Index Building**: Automatically scans all Markdown documents in the repository on startup
2. **Smart Search**: Supports fuzzy search across filenames, titles, and paths
3. **Category Management**: Automatically organizes documents based on directory structure
4. **Secure Access**: Ensures access only to documents within the repository

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

MIT License - See [LICENSE](../LICENSE) file for details

## 🔗 Related Links

- [QDLeader Knowledge Base Repository](https://github.com/qdleader/qdleader)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Cursor Official Site](https://cursor.sh/)

## ⭐ Star History

If this MCP server helps you, please give the main repository a Star!

---

**Made with ❤️ by QDLeader**

Explore front-end knowledge with AI as your best learning companion 🚀

