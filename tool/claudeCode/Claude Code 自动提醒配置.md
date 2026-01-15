# Claude Code 自动提醒配置


Claude Code 自动提醒配置：让 AI 主动找你，不再盯屏等待


brew install terminal-notifier



sudo vim ~/.claude/settings.json



```js
{
  "env": {

  },
  "hooks": {
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "terminal-notifier -message '需要您的输入确认...' -title 'Claude Code' -sender com.apple.Terminal"
          }
        ]
      }
    ],

    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "terminal-notifier -message '已完成，请检查结果' -title 'Claude Code' -sender com.apple.Terminal"
          }
        ]
      }
    ]
  }
}

```