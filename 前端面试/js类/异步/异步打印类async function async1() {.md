

```
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
 
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
```






答案：

```
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```


首先，事件循环从宏任务（macrostack）队列开始，这个时候，宏任务(整体script、setTimeout、setInterval)队列中，只有一个 script (整体代码)任务 ()。
首先执行 console.log('script start')，输出 ‘script start'
遇到 setTimeout 把 console.log('setTimeout') 放到 macrotask 队列中
执行 aync1() 输出 ‘async1 start' 和 'async2' ,把 console.log('async1 end') 放到 micro 队列中
执行到 promise ，输出 'promise1' ，把 console.log('promise2') 放到  micro 队列中
执行 console.log('script end')，输出 ‘script end'
macrotask 执行完成会执行 microtask ，把 microtask quene 里面的 microtask 全部拿出来一次性执行完，所以会输出 'async1 end' 和 ‘promise2'
开始新一轮的事件循环，去除执行一个 macrotask 执行，所以会输出 ‘setTimeout'
 

## 涉及知识点：
    Promise 优先于 setTimeout 宏任务，所以 setTimeout 回调会最后执行
    Promise 一旦被定义就会立即执行
    Promise 的 resolve 和 reject  是异步执行的回调。所以 resolve() 会被放到回调队列中，在主函数执行完和 setTimeout 之前调用
    await 执行完后，会让出线程。async 标记的函数会返回一个 Promise 对象




同理下面这个:

```
    async function async1() {
    console.log('async1 start')
    await new Promise(resolve => {
      console.log('promise1')
    })
    console.log('async1 success')
    return 'async1 end'
  }
  console.log('srcipt start')
  async1().then(res => console.log(res))
  console.log('srcipt end')
```






<!-- 答案： -->
// srcipt start
// async1 start
// promise1
// srcipt end

提醒一点是
await new Promise 没有resolve 所以它后边代码，是不执行的。