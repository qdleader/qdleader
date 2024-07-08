# S047-多tab通信

## 在本地实现一个聊天室，多个tab页相互通信，不能用websocket，有哪些方法？

## 1、使用LocalStorage或SessionStorage：
这两个Web存储API可在浏览器的不同标签页之间共享数据。当一个标签页发送消息时，将消息存储在LocalStorage或SessionStorage中。其他标签页可以监听该存储区的变化，并读取最新的消息内容来实现通信效果。

```js

window.onload = () => {
  // 设置
  window.localStorage.setItem("watchName", 1);
  
  setTimeout(() => {
    // 修改
    window.localStorage.setItem("watchName", 2);
  }, 2000);
  
  // 监听变化
  window.addEventListener("storage", (e) => {
		// todo ...
  });
};

```
当localStorage变化时就会触发storage的监听，然后进行对应的业务逻辑处理，具体的逻辑便不再赘述，小伙伴可自行实现

注意：若是只打开一个tab，那么监听storage是不起效果的，需要在多个tab中方可以看到效果

## 使用Broadcast Channel API
Broadcast Channel API 可以在浏览器的不同上下文（包括不同的标签页）之间进行双向通信。当一个标签页发送消息到广播频道时，其他标签页可以通过监听相同的广播频道来接收和响应消息。

```js
// 创建一个名为 "my_channel" 的广播频道
const myChannel = new BroadcastChannel("my_channel");

// 向该频道发送消息
myChannel.postMessage("Hello world!");
然后在其他窗口中监听该频道，以接收来自该频道的消息。以下是一个简单的例子：

// 监听名为 "my_channel" 的广播频道
const myChannel = new BroadcastChannel("my_channel");

// 监听该频道并处理消息
myChannel.onmessage = function (event) {
  console.log(event.data);
};
```

Broadcast Channel API 优缺点

#### 优点：

    传递数据：提供了一种可靠的方法，使独立的 JavaScript 应用程序在同一浏览器同一站点内传递数据。
    传输速度快：以高速连接，提供更快的数据传输速度。
    实时性：提供了实时，低延迟的数据传输。
    可靠性：能够在小的数据包丢失或意外丢失时进行恢复。
    不过，Broadcast Channel API 也存在以下缺点：

#### 缺点
仅限同源：Broadcast Channel API 只能在同一浏览器同一站点内进行通信。这意味着，虽然不同的站点可以在同一浏览器内打开，但无法使用 Broadcast Channel API 进行通信。

受浏览器支持限制：与大多数 Web API 一样，Broadcast Channel API 受到不同浏览器和平台的支持和兼容性限制。

需要共性的 API 使用：不同的 JavaScript 应用程序需要知道如何使用 Broadcast Channel API 来共享数据。如果开发人员没有必要的知识，那么 API 就可能不如预期地使用。

## SharedWorker：
SharedWorker 是一种在多个浏览器上下文之间共享脚本执行的机制，它可以在不同的标签页之间进行通信。可以创建一个SharedWorker，然后在各个标签页中连接到该SharedWorker，使它们能够共享数据和通信。

需要注意的是，这些方法只适用于本地通信，无法实现跨网络的实时通信效果，若需要实现更复杂的聊天室功能，WebSocket仍是更常用的选择。


```js
// 连接到worker
const worker = new SharedWorker('worker.js','my-worker');
const port = worker.port;
// 发送消息
port.postMessage('你想要发送的消息')
// 连接后的回调
// onconnect = (e) => {
//   const port = e.ports[0];
//   console.log('这是已连接的port',port);
// }
// 接收消息
port.onmessage = (e) => {
    console.log('这是接收到的消息：',e.data)
}

```
下面是worker.js文件里面的全部内容。

```js
const connections = []; // 创建一个连接池
onconnect = function(e) {
  const port = e.ports[0];
  connections.push(port);// 连接后就把新的链接放到connections数组
  // 监听消息
  port.onmessage = function(e) {
    // 转发消息
    console.log('worker接收到消息！')
    connections.forEach(function(connection) {
      connection.postMessage(e.data);
    });
  };
};

```
