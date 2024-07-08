# vite的热更新怎么实现的
## vite热更新


那么，vite 的热更新怎么实现呢？
我们可以使用chokidar库来监听某个文件夹的变更，只要监听到有文件变更，就用websocket通知浏览器重新发一个请求，浏览器就会在代码每次变更之后立刻重新请求这份资源。


### 安装chokidar库：

```js
yarn add chokidar -D
```
（2） 之后去新建一个文件夹chokidar，在其中新建 handleHMRUpdate.js 用于实现监听：
```js
const chokidar = require('chokidar');

export function watch() {
  const watcher = chokidar.watch('../src', {
    ignored: ['**/node_modules/**', '**/.git/**'],  //不监听哪些文件
    ignorePermissionErrors: true,
    disableGlobbing: true
  })
  return watcher
}

export function handleHMRupdate(opts) {   //创建websocket连接 客户端不给服务端发请求，服务端可以通过websocket来发数据
  const { file, ws } = opts
  const shortFile = getShortName(file, appRoot)
  const timestamp = Date.now()
  let updates;
  if (shortFile.endsWith('.css')) {  //css文件的热更新
    updates = [
      {
        type: 'js-update',
        timestamp,
        path: `${shortFile}`,
        acceptPath: `${shortFile}`
      }
    ]
  }

  ws.send({
    type: 'update',
    updates
  })
}
```

