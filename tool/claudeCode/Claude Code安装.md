# Claude Code 安装

官方文档(https://code.claude.com/docs/zh-CN/quickstart)
```js
brew install --cask claude-code
```

或 在bash下通过 npm 安装
```json
npm install -g @anthropic-ai/claude-code
```


sudo vim ~/.claude/settings.json


```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.codemirror.codes/",
    "ANTHROPIC_AUTH_TOKEN": "你的API_KEY"
  }
}
```

获取API_KEY(https://api.codemirror.codes/register?aff=Tzb3)
