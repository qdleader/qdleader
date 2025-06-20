# cursor 卸载

将 Cursor 应用移至废纸篓 或 使用终端命令强制删除：

```js
sudo rm -rf /Applications/Cursor.app
```

倾倒废纸篓

## 清理用户配置文件

执行以下终端命令删除关键目录：

（在这之前如有需要建议先备份 ~/Library/Application Support/Cursor 中的自定义配置或插件）

### 核心配置与插件存储目录

```js
rm -rf ~/Library/Application\ Support/Cursor
```

### 用户数据与缓存

```js
rm -rf ~/.cursor
```

### 自动更新缓存

```js
rm -rf ~/Library/Caches/cursor-updater
```
