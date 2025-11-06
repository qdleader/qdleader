# async(eventLoop类问题)

下面输出什么？

eg1:

```js

async function async1 () {
  console.log('1')
  await async2();
  console.log('2')
}

saync function async2() {
  console.log("3")
}

console.log('4')
async1()
console.log('5')

```

结果:

```js
4
1
3
5
2
```

重点解析：

```js
最后输出2，（在await async2()之后的代码你可以理解为，放到了settimeOut里面执行了）执行到await async2()下面的代码会被放到event queue中，所以会先执行
同步代码，再执行event queue中的代码
```

eg2:

```js
(async function () {
  console.log('start')
  const a = await 100;
  console.log(a)
  const b = await Promise.resolve(200)
  console.log(b)
  const c = await Promise.reject(300)
  console.log(c)
  console.log('end')
})()
```

答案：

```js
start
100
200
```

解析：
```js
由于c 是返回reject的promise，所以  console.log(c)
  console.log('end')根本就不执行了。

```
