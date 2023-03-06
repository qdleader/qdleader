# 手写-setTimeout 模拟实现 setInterval




## 为什么使用 setTimeout 模拟 setInterval
setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。

针对 setInterval 的这个缺点，我们可以使用 setTimeout 递归调用来模拟 setInterval，这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了 setInterval 的问题。

### setInterval 有两个缺点：

> 使用 setInterval 时，某些间隔会被跳过；
> 可能多个定时器会连续执行；


**
可以这么理解：每个 setTimeout 产生的任务会直接 push 到任务队列中；而 setInterval 在每次把任务 push 到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。
**






```js
function mySetInterval(fn, timeout) {
  function interval() {
    fn();
    setTimeout(interval, timeout);
  }
  setTimeout(interval, timeout);
}


```



```js
function mySetInterval(fn, timeout) {
  // 控制器，控制定时器是否继续执行
  var timer = {
    flag: true,
  };

  // 设置递归函数，模拟定时器执行。
  function interval() {
    if (timer.flag) {
      fn();
      setTimeout(interval, timeout);
    }
  }
  // 启动定时器
  setTimeout(interval, timeout);
  // 返回控制器
  return timer;
}
```










```js

function mySetInterval(fn, time = 1000) {
  let timer = null,
    isClear = false;
  function interval() {
    if (isClear) {
      isClear = false;
      clearTimeout(timer);
      return;
    }
    fn();
    timer = setTimeout(interval, time);
  }
  timer = setTimeout(interval, time);
  return () => {
    isClear = true;
  };
}

```



### 2、用setInterval实现setTimeout


function mySetInterval(fn, delay) {
    const timer = setInterval(() => {
        fn()
        clearInterval(timer)
    }, delay)
}
// 测试
mySetInterval(() => console.log(888), 1000)

