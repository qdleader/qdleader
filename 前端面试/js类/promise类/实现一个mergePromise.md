# 实现一个mergePromise

请实现一个mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。

```ts
const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

const mergePromise = ajaxArray => {
    // 在这里实现你的代码

};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
```


```ts
const mergePromise = ajaxArray => {
  let data = [];
  let sequence = Promise.resolve();
  ajaxArray.forEach(item => {
    sequence = sequence.then(item).then(res => {
      data.push(res);
      return data
    })
  })
  return sequence;
}

```

## 解释

```js
const mergePromise = ajaxArray => {
  // 在这里实现你的代码
  // 保存数组中的函数执行后的结果
  var data = [];

  // Promise.resolve方法调用时不带参数，直接返回一个resolved状态的 Promise 对象。
  var sequence = Promise.resolve();

  ajaxArray.forEach(item => {
    // 第一次的 then 方法用来执行数组中的每个函数，
    // 第二次的 then 方法接受数组中的函数执行后返回的结果，
    // 并把结果添加到 data 中，然后把 data 返回。
    sequence = sequence.then(item).then(res => {
      data.push(res);
      return data;
    });
  });

// 遍历结束后，返回一个 Promise，也就是 sequence， 他的 [[PromiseValue]] 值就是 data，
// 而 data（保存数组中的函数执行后的结果） 也会作为参数，传入下次调用的 then 方法中。
  return sequence;
};

```

