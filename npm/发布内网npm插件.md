# 发布内网npm插件

## 发布包

### 1. 切换公司的源地址 
### 2. 创建本地npm用户

使用npm adduser创建用户，输入用户名、密码、邮箱。

```shell
npm adduser
```

名字尽量用自己的真名哈（后续使用者，有问题可以向您请教）

### 3. 发布包

发布内网npm 插件跟 正常的npm 包发布流程一致

```shell

npm login

npm publish

```

刷新本地链接，可以看到npm包已经发布成功。

发布包常用命令

## 登录 npm： 
```js
npm login // 然后根据提示一步步的操作。
```

## 发布包：
```js
npm publish // 项目的根目录下 npm publish 即可，根据公司私有库的配置，可能会需要登录。
```

### 登出 npm：
```js
npm logout 
```

### 删除发布的包：
```js
npm unpublish [packageName] // 如果不可以加上参数 --force 。注意：此指令仅适用于 24小时内发布的包
```

### 如果不维护此包可以使用 
```js
npm deprecate <pkg>[@<version>] <message> // 此后如果下载此包会包含一些警告信息。

```
