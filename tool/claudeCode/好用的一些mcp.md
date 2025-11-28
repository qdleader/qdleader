# 好用的一些mcp

- Context7 MCP：能够从源代码直接提取最新、特定版本的文档和代码示例，并将其直接放入 prompt 中。

```js
https://github.com/upstash/context7
```

- Figma Dev Mode MCP：实现交互稿像素级还原，MasterGO 也有类似功能。注意点：Figma 的源码文件往往很长，建议逐个模块选中，让 AI 实现。

- Browse use MCP：配合工作流，完成前端研发后，让 Claude Code 查看浏览器中的实际表现。

- Vercel MCP 服务器

    为什么它很有用：Vercel MCP 服务器 允许 AI 与前端开发和托管平台进行交互。它能够：

    部署应用程序的新版本；
    获取有关应用程序的反馈，包括新功能；
    通过检查应用程序的环境变量来管理应用程序设置；
    处理新应用程序的配置。

- ref
    https://ref.tools/install

    节省令牌的文档检索： 仅返回最相关的上下文部分，避免过高的令牌成本和性能下降。
    迭代、代理友好的搜索： 在会话中适应搜索结果，对相似提示不会重复结果。
    按需上下文补充： 使 LLM 在需要时准确提取文档。
    支持公开和私有资源： 在公共文档、网页、GitHub 和私有资源（如内部仓库或 PDF）中进行搜索。
    集成会话管理： 在代理会话内跟踪搜索和阅读轨迹，以获得最佳上下文策划。

```js
"Ref": {
  "type": "http",
  "url": "https://api.ref.tools/mcp?apiKey=ref-c1xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

 Semgrep MCP 代码安全扫描： 检查代码中的安全漏洞，并生成修复建议。

 Supabase MCP： 实时数据库和存储，支持实时订阅和查询。

 Neon MCP  用嘴管理数据库？Neon MCP 服务器来了，让自然语言搞定 Postgres

 stripe 收款
