# async/await 和 promise 关系。

> 执行 async函数，返回的是promise对象。

> await 相当于Promise 的then

> try...catch 可捕获异常，代替Promise的catch


eg1:

```
async function fn1() {
  return 100
}

const res1 = fn1() //执行 async 函数，返回的是一个Promise对象

res1.then(data => {
    console.log('data', data)
})


结果打印：
100
```




eg2:
```
async function fn1() {
  return Promise.resolve(200)
}

const res1 = fn1() //执行 async 函数，返回的是一个Promise对象

res1.then(data => {
    console.log('data', data)
})


结果打印：
200
```

eg3:
```
!(async function() {
  const p4 = Promise.reject('err')
    try {
      const res = await p4
      console.log(res)
    } catch (ex) {
      console.error(ex) //相当于promise的catch
    }
})

```

```
!(async function () {
    const p1 = Promise.resolve(300)
    const data = await p1;
    console.log('data',data)
})()

//打印300

!(async function () {
    const data = await 400;
    console.log('data',data)
})()
//打印400



```

await 可以 跟别的async 函数

```
async function fn1() {
  return Promise.resolve(200)
}

!(async function () {
    const data2 = await fn1();
    console.log('data2',data2)
})

//打印 200
```


eg4：
```
async function fn() {
  return 100
}

(async function () {
    const a = fn()
    console.log(a)
    const b = await fn();
    console.log(b)
})()

```


答案：
```
Promise {}

100

```



如果不使用await  那么async函数返回的就是一个promise对象，

加上await后，就是返回then之后的结果了。
