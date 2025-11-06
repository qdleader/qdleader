# Context 7 mcp


有 Context7：实时更新，准确无误
## 1. 介绍

- Context 7 是一个基于 Minecraft 的多人在线游戏服务器，使用 Minecraft 的 Modpack（模组包）进行游戏。
- Context 7 的 Modpack 包含了许多 Minecraft 的模组，如建筑、生物、魔法、科技等，为玩家提供了丰富的游戏体验。    


Context7 的远程服务器 https://mcp.context7.com/mcp 目前仍然支持无API Key的访问，这是为了：

向后兼容：不破坏现有用户的配置
免费试用：让新用户能够快速体验服务
逐步迁移：给用户时间适应新的认证机制
因此，如果你想快速开始使用，也可以使用简化配置：
```js
{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```
不过，建议长期使用时注册API Key以获得更稳定的服务和避免未来可能的限制。




配置步骤
打开 Cursor，点击左下角的 “设置” 图标，在设置页面中找到 “MCP Servers” 选项；

点击 “Add new global MCP server”，选择 “手动配置”（目前 Context7 暂未上架 MCP 市场）；

在配置窗口中，粘贴以下 JSON 代码，点击 “保存”：

远程服务器连接（推荐）：

{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
本地服务器连接：

{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"]
    }
  }
}
注意：你需要先访问 context7.com/dashboard 创建账户并获取API密钥，将上述配置中的YOUR_API_KEY替换为你的实际密钥。


使用时候，在提示词或问题后面加上 use context7
