async await 错误捕获

async/await很好用，帮助我们用同步的方式去处理异步请求,虽然它仅仅是Promise的语法糖。在Promise中处理错误很容易，使用catch即可，如：
```js
function task() {
  return Promise1()
    .then((res) => {
      Promise2(res)
        .then()
        .catch(() => "promise2 error");
    })
    .catch(() => "promise1 error");
}
```
但是，在async怎么处理错误呢?

```js
async function task() {
  const res1 = await fetch1();
  const res2 = await fetch2(res1);

  return res2;
}
```
我们总结后有如下几种处理方式:

集中处理
在调用的地方处理
```js
async function task() {
  const res1 = await fetch1();
  const res2 = await fetch2(res1);

  return res2;
}
task().catch(() => {
  console.log("fetch error");
});
```
TIP

使用该种方式处理的话,处理起来是比较方便的,异常处理逻辑和请求逻辑进行了拆分,但是这种方式不利于我们排查错误,只要 promise 发生了异常,就都会被 catch 到,但是我们不知道是哪个请求报错异常,难道我们还要去维护每个请求的 error 信息?

我们试着使用 try {} catch {}的方式去处理。

使用 try catch
```js
async function task() {
  try {
    const res1 = await fetch1();
    const res2 = await fetch2(res1);

    return res2;
  } catch (e) {
    console.log("fetch error");

    return "error";
  }
}
```
TIP

统一处理方式下的 try-catch 方式与在调用的方式 catch 无太大的异常都无法解决定位错误信息的问题。

单独处理
使用 try catch 单独处理
```js
async function task() {
  let res1, res2;

  try {
    res1 = await fetch1();
  } catch (e) {
    console.log("fetch1 error");
  }

  try {
    res2 = await fetch2(res1);
  } catch (e) {
    console.log("fetch2 error");
  }
}
```
TIP

使用单独的try-catch可以解决上述的定位问题,但是假如我们的请求比较多,篇幅就会很长，代码不美观、不优雅。

是否还有更加优雅的处理方式呢?

使用Promise处理async异常
我们知道 await 处理函数返回的是一个 Promise ,它等待的是 promise 的 resolve 或者 reject,因此我们可以在 await 中加入 promise 来处理结果和异常。

于是乎上面的代码就变成了这样:
```js
async function task() {
  const res1 = await fetch1()
    .then((res) => res)
    .catch((err) => err);
  const res2 = await fetch2(res1)
    .then((res) => res)
    .catch((err) => err);

  return res2;
}
```
然后我们把抛出的异常再处理一下:
```js
async function task() {
  const [err1, res1] = await fetch1()
    .then((res) => [null, res])
    .catch((err) => [err, null]);

  if (err1) {
    return "fetch1 error" + err1;
  }

  const [err2, res2] = await fetch2(res1)
    .then((res) => [null, res])
    .catch((err) => [err, null]);

  if (err2) {
    return "fetch2 error" + err2;
  }

  return res2;
}
```
这样我们就可以把错误信息和正确返回的数据都进行了处理,但是如果每个请求都这样去写的话,代码量和可阅读性就不高了。是的,通用的方法我们可以进行封装,于是又有了下面的版本:
```js

function asyncPromise(promise) {
  if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
    return new Promise((res, rej) => {
      rej(new Error("参数必须是 promise"));
    }).catch((err) => {
      return [err, null];
    });
  }

  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => {
      return [err, null];
    });
}

async function task() {
  const [err1, res1] = await asyncPromise(fetch1());

  if (err1) {
    return "fetch1 error" + err1;
  }

  const [err2, res2] = await asyncPromise(fetch2(res1));

  if (err2) {
    return "fetch2 error" + err2;
  }

  return res2;
}
```