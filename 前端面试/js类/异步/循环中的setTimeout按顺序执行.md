```
let list = [1,2,3];

const square = num => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}
function test() {
    list.forEach(async x => {
        const res = await square(x);
        console.log(res)
    })
}
test()
```
一秒时候，同时输出 1 4 9


为什么会这样呢？

因为 forEach 中的函数 相当在while 循环里执行多个匿名函数

(async (x) => {
    const res = await = square(x);
    console.log(res)
})(1)

(async (x) => {
    const res = await = square(x);
    console.log(res)
})(2)

(async (x) => {
    const res = await = square(x);
    console.log(res)
})(3)

他们之间是相互不影响的，所以会同时输出1，4，9


那么如何让改写呢？



方1

```
async function test() {
    for(let i = 0; i < list.length; i ++){
        const res = await square(list[i])
        console.log(res)
    }
}
await test()
```


方法 2

```
async function test() {
    for(let i in list){
        const res = await square(i)
        console.log(res)
    }
}
await test()
```



方法3

```
let promise = Promise.resolve();
function test(i) {
    if(i === list.length) return;
    promise = promise.then(async() => {
        const res = await square(list[i]);
        console.log(res)
    })
    test(i + 1)
}
test(0)

```