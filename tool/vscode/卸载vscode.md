## 完整卸载 MAC 上面的 VSCode


**操作有风险，请谨慎操作。**


## 第一步：退出 VSCode 应用

## 第二步：输入如下指令，删除 VSCode 的设置和配置

```ts
sudo rm -rf $HOME/Library/Application\ Support/Code
```

## 第三步：输入如下指令，删除 VSCode 的插件

```ts
sudo rm -rf $HOME/.vscode
```

第四步：从 Application 中移除 VSCode
