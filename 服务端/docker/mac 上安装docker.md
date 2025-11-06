

### 用 brew 安装

```js
brew install docker --cask
```

安装 成功后会提示
🍺  docker was successfully installed!

如果此时报
```js
 Here's the output: ln: /usr/local/bin/docker: Permission denied
```

执行
```js
sudo chown -R $(whoami) /usr/local
```

然后再执行一下安装命令即可
