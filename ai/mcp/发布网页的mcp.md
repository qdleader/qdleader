# 发布网页的 mcp

edgeone-pages-mcp-server

项目地址：https://github.com/TencentEdgeOne/edgeone-pages-mcp

## 配置方式一：使用 npx

### Tencent Cloud International（默认）

```json
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "timeout": 600,
      "command": "npx",
      "args": ["edgeone-pages-mcp-fullstack@latest"]
    }
  }
}
```

### Tencent Cloud China

```json
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "timeout": 600,
      "command": "npx",
      "args": ["edgeone-pages-mcp-fullstack@latest", "--region", "china"]
    }
  }
}
```

## 配置方式二：使用 URL

```json
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "url": "https://mcp-on-edge.edgeone.site/mcp-server"
    }
  }
}
```
