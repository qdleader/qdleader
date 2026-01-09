# Figma-Context-MCP


[github] https://github.com/GLips/Figma-Context-MCP?tab=readme-ov-file

```js
// MacOS / Linux
{
  "mcpServers": {
    "Framelink MCP for Figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=figma-api-key", "--stdio"]
    }
  }
}
```

```js
// Windows
{
  "mcpServers": {
    "Framelink MCP for Figma": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY", "--stdio"]
    }
  }
}
```


## token 的获取

```js
在 Figma网页/桌面App版本 中进行登录，点击【用户头像】->【Settings】->【Security】->【Personal access tokens】，点击【Generate new token】创建一个新token。

权限都够选上，然后复制生成的token，粘贴到上面的配置文件中即可。
```

## 获取Figma设计稿链接

右键【Copy/Paste as】->【Copy link to selection】，拷贝备用 



Figma UI设计稿：@https://www.figma.com/design/KZSQ8ijCp9YPTkHLOmqJns/Plugins-for-Dev-Mode-Playground--Copy-?node-id=1507-135&m=dev
你是一个大厂资深前端研发工程师，根据我提供的Figma UI设计稿，使用 HTML、Tailwind CSS实现前端页面
## 限制
- 为了演示效果将全部生成的页面都放到一个HTML中展示