# 搭建天气预报 mcp

## 链接高德地图 MCP

```js
{
  "mcpServers": {
    "amap-amap-sse": {
      "url": "https://mcp.amap.com/sse?key=e6f2b10a83287c163dd26fd868c23b9d"
    }
  }
}
```

高德官网上申请的 key [https://lbs.amap.com/]

创建新应用--》 添加 key --》 选择 web 服务 —————> 提交 ，，复制对应的 key

## 链接 quickchart-server MCP Server

它是一个基于 TypeScript 的服务器，集成了 quickchart.io 基于 URL 的图表生成服务。通过 MCP Server，用户可以通过提供数据和样式参数，使用 Chart.js 配置创建各种类型的图表，服务器会将这些配置转换为图表 URL 或可下载的图像 1。
我们的思路就是将天气反馈，让这个做一个图表
我们还是一样的步骤，将下面的代码放到创建 MCP 里面

```js
{
  "mcpServers": {
    "quickchart-server": {
      "command": "npx",
      "args": [
        "-y",
        "@gongrzhe/quickchart-mcp-server"
      ]
    }
  }
}



```

## 链接 EdgeOne Pages Deploy MCP

EdgeOne Pages Deploy MCP 是一项专用服务，能够将 HTML 内容快速部署到 EdgeOne Pages 并生成公开访问链接。这使您能够立即预览和分享 AI 生成的网页内容。
说白了就是我们可以在本地创建一个 html 文件，然后通过 EdgeOne Pages Deploy MCP 上传成一个可访问的网站页面

```js
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "command": "npx",
      "args": ["edgeone-pages-mcp"]
    }
  }
}
```

创建智能体，输入提示词

```js
# 角色
你是一位专业的气象数据分析师，能够查询任意城市的未来7天天气，并生成可视化图表。

## 技能
### 技能 1: 查询天气数据
- 使用高德MCP这个MCP服务，查询任意城市未来7天的天气数据。
- 获取的数据应包括但不限于温度、湿度、风速、降水量等关键气象指标。

### 技能 2: 生成可视化图表
- 将查询到的天气数据用QuickChart这个MCP服务转换为易于理解的可视化图表。
- 可视化图表可以是折线图、柱状图或热力图等形式，具体取决于用户的需求和数据特性。
- 确保图表清晰、美观且易于解读。

### 技能 3: 提供天气分析报告
- 根据查询到的天气数据，提供简要的天气分析报告。
- 报告应包括对未来4天天气趋势的总结，以及可能对用户活动产生影响的建议。

### 技能3 ：部署到EdgeOne Pages
- 将最后的html代码部分，将 HTML 内容快速部署到 EdgeOne Pages 并生成公开访问链接

## 限制
- 仅提供与天气相关的数据和分析。
- 生成的图表必须基于查询到的实际天气数据。
- 如果需要调用外部工具或API，请明确说明并提供相应的调用方法。
- 所有输出的内容必须准确无误，不得包含任何误导性信息。
```

那么到这里了，我们的这个智能体就用到了三个 MCP Servers 了
我来分析下，使用高德地图 MCP Servers 进行天气情况的获取操作
利用 quickchart-server MCP Server 来进行表格的创建操作
利用 EdgeOne Pages Deploy MCP 进行可视化网站的部署搭建操作

引用新建的的智能体，输入问题

```js
利用高德MCP帮我获取北京最近7天的天气，利用quickchart-server MCP Server帮我进行图标的构建，利用EdgeOne Pages Deploy MCP帮我进行网站的部署操作

代码格式为html
```
