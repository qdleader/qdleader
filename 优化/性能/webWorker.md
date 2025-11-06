# Web Worker

## 为什么需要 Web Worker

由于JavaScript语言采用的是单线程，同一时刻只能做一件事，如果有多个同步计算任务执行，则在这段同步计算逻辑执行完之前，它下方的代码不会执行，从而造成了阻塞，用户的交互也可能无响应。
但如果把这段同步计算逻辑放到Web Worker执行，在这段逻辑计算运行期间依然可以执行它下方的代码，用户的操作也可以响应了。

## Web Worker 是什么

HTML5 提供并规范了 Web Worker 这样一套 API，它允许一段 JavaScript 程序运行在主线程之外的另外一个线程（Worker 线程）中。
Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程就会很流畅，不会被阻塞或拖慢。

## Web Worker 的分类

Web Worker 根据工作环境的不同，可分为专用线程 Dedicated Worker和共享线程 Shared Worker。
Dedicated Worker的Worker只能从创建该Woker的脚本中访问，而SharedWorker则可以被多个脚本所访问。
在开发中如果使用到 Web Worker，目前大部分主要还是使用 Dedicated Worker的场景多，它只能为一个页面所使用，本文讲的也是这一类；而Shared Worker可以被多个页面共享，为跨浏览器 tab 共享数据提供了一种解决方案。

## Web Worker的使用限制
### 同源限制

分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

### 文件限制

Worker 线程无法读取本地文件（file://），会拒绝使用 file 协议来创建 Worker实例，它所加载的脚本，必须来自网络。

### DOM 操作限制

Worker 线程所在的全局对象，与主线程不一样，区别是：

>无法读取主线程所在网页的 DOM 对象
>无法使用document、window、parent这些对象

## 通信限制

Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成，交互方法是postMessage和onMessage，并且在数据传递的时候， Worker 是使用拷贝的方式。

## 脚本限制

Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求，也可以使用setTimeout/setInterval等API

## 基本 API
```js
const worker = new Worker(aURL, options);

worker.postMessage: 向 worker 的内部作用域发送一个消息，消息可由任何 JavaScript 对象组成
worker.terminate: 立即终止 worker。该方法并不会等待 worker 去完成它剩余的操作；worker 将会被立刻停止
worker.onmessage:当 worker 的父级接收到来自其 worker 的消息时，会在 Worker 对象上触发 message 事件
worker.onerror: 当 worker 出现运行中错误时，它的 onerror 事件处理函数会被调用。它会收到一个扩展了 ErrorEvent 接口的名为 error 的事件

worker.addEventListener('error', function (e) {
    console.log(e.message) // 可读性良好的错误消息
    console.log(e.filename) // 发生错误的脚本文件名
    console.log(e.lineno) // 发生错误时所在脚本文件的行号
})

```

## 任务顺序        

Worker线程任务需要等待主线程任务结束才能进行。

## Worker结束  

可以主动关闭Worker线程。如果是多页应用的话，离开了Worker页面，Worker 也不会工作。

eg1:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>worker计算</title>
  </head>
  <body>

    <script>
      const worker = new Worker('./worker.js')
        function calculate() {
            worker.postMessage(10000)
        }
        calculate()
        worker.onmessage = function (e) {
            console.log(112,e.data);
        }
    </script>
  </body>
</html>

```

```js
//worker.js  worker线程
//1.监听主线程
onmessage = function(e) {
   console.log('Worker: Message received from main script');

    // 接收来自主线程发送过来的数据
    let num = e.data;
    //使用for循环模拟一个耗时、耗性能的任务。（如果这个for循环放在主线程，那么页面很可能会卡死，影响用户体验）。
    for(let i = 0;i<=num;i++){
        if(i==num){
        //2.向主线程发送数据
            postMessage('任务完成啦！')
        }
    }
    //3.worker 线程也可以调用close 方法来结束worker线程。
    // close()
}

 //4.同样的，在worker 线程中也可以监听错误信息。
onerror = function(err){
    console.log(err)
}

``` 
```
