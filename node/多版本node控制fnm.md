# 多版本 node 控制 fnm

## 安装 fnm

所有系统（推荐使用 curl 安装）

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

## 使用 Homebrew（macOS）

```bash
brew install fnm
// 可以将初始化命令添加到 .bashrc或.zshrc中
// .bashrc
eval "$(fnm env --use-on-cd --shell bash)"
// .zshrc
eval "$(fnm env --use-on-cd --shell zsh)"
// PowerShell
fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression
// 安装完成后，若有如下报错
![Snipaste_2025-06-12_09-12-14.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/76a3d98265fd49808acddf9c5da8155e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YWG6YO95aSn5bid:q75.awebp?rk3s=f64ab15b&x-expires=1750320952&x-signature=1DCxer%2BUJ%2BYcz9Pns7WZGA7%2F81c%3D)
// 则需要执行以下命令
fnm env --use-on-cd | Out-String | Invoke-Expression
```

windows 可以通过 Shell 安装

```bash
winget install Schniz.fnm 或 scoop install fnm 、choco install fnm
// 安装完成后需要配置环境变量（可以去网上搜一下非常多）
// 配置完环境变量后，查看是否成功
fnm --version
```

## 为什么推荐使用 fnm ？

极速性能：启动与切换版本几乎瞬时完成，对于频繁构建与切换项目的开发者及其友好
更好的跨平台支持：无需为 Windows 安装额外版本管理工具，一套搞定
自动切换版本：识别 .nvmrc、.node-version 等文件，自动切换版本
简洁配置：安装后只需 eval "$(fnm env)" 便无需其他配置
