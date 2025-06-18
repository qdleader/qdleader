# Playwright MCP

方式一：手动添加
在 AI 对话窗口的右上角，点击 设置 图标 > MCP。
界面上显示 MCP 窗口。

点击 + 添加 按钮。
你已进入 MCP Server 市场。

点击 手动配置。

```js
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}

```

输入
比如在 trae 中使用

输入“@”选择 Builder with MCP

输入“打开谷歌搜索 mcp”，回车
