# 快速开始 - 发布到 npm

## 🚀 三步发布你的 MCP 到 npm

### 第一步：登录 npm

```bash
npm login
```

输入你的 npm 账号信息。如果还没有账号，访问 https://www.npmjs.com/signup 注册。

### 第二步：构建项目

```bash
cd /Users/icourt/github/qdleader/mcp-server
npm run build
```

### 第三步：发布

使用自动化脚本（推荐）：

```bash
./publish.sh
```

或手动发布：

```bash
npm publish --access public
```

## ✅ 完成！

发布成功后，其他人就可以这样使用：

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

## 📖 详细文档

查看完整发布指南：[PUBLISH.md](./PUBLISH.md)

## 🔄 后续更新

每次更新代码后：

```bash

# 1. 构建

npm run build

# 2. 更新版本并发布

./publish.sh
```

## ⚡ 常见问题

### Q: 包名被占用怎么办？

修改 `package.json` 中的 `name`：

```json
{
  "name": "@your-username/qdleader-mcp"
}
```

然后发布：

```bash
npm publish --access public
```

### Q: 如何撤销发布？

只能在发布后 72 小时内撤销：

```bash
npm unpublish qdleader-mcp@1.0.0
```

### Q: 如何更新已发布的包？

```bash

# 修复 bug

npm version patch && npm publish

# 新功能

npm version minor && npm publish

# 重大更新

npm version major && npm publish
```

## 🎯 下一步

1. ✅ 发布包到 npm
2. 📢 在 README 中添加使用说明
3. 🐦 在社交媒体分享
4. 📝 收集用户反馈
5. 🔄 持续改进和更新

---

**祝发布成功！🎉**
