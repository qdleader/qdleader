
sudo vim ~/.claude/settings.json

ggvG d


```json
{
  "env": {
        "ANTHROPIC_BASE_URL": "https://shell.wyzai.top",    "ANTHROPIC_AUTH_TOKEN": "sk-jLVBE9LmGbFL8dUJcvZSZUVPQoDwHIZ6zcUrcBIyvIDLXvR3"
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