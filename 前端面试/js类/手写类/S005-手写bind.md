# 手写bind函数

```
Function.prototype.bind1 = function() {
  let args = Array.prototype.slice.call(arguments)
  let t = args.shift()
  let self = this;
  return function() {
    self.apply(t,arguments)
  }
}
```


```
Function.prototype.bind1 = function () { // 这块不可以使用箭头函数，因为 this 的指向不同
  // arguments 可以获取一个函数的所有参数，arguments 是一个伪数组
  // 使用 Array.from() 方法将 arguments 伪数组转化成数组
  const args = Array.from(arguments)
  // 获取 this 指向取出数组第一项，数组剩余的就是传递的参数
  const t = args.shift()
  const self = this // 当前函数 fn1.bind(...) 中的 fn1
  return () => {
    return self.apply(t, args)
  }
}

function fn1(a, b, c) {
  console.log('this', this)
  console.log(a, b, c)
}

const fn2 = fn1.bind1({x: 100}, 10, 20, 30)
const res = fn2()
```
