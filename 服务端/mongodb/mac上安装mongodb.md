## 使用 brew 安装

```js
brew tap mongodb/brew
brew install mongodb-community

```

安装信息：

> 配置文件：/usr/local/etc/mongod.conf
> 日志文件路径：/usr/local/var/log/mongodb
> 数据存放路径：/usr/local/var/mongodb



## 运行 MongoDB

我们可以使用 brew 命令或 mongod 命令来启动服务。



### brew 启动：
```js
brew services start mongodb-community
```

### brew 停止：
```js
brew services stop mongodb-community
```



上述如不成功，那就加上版本号
brew install mongodb-community@4.4




mongod 命令后台进程方式：

mongod --config /usr/local/etc/mongod.conf --fork这种方式启动要关闭可以进入 mongo shell 控制台来实现：
> db.adminCommand({ "shutdown" : 1 })