# 手写bind函数

```
Function.prototype.bind1 = function() {
  let args = Function.prototype.slice().call(arguments)
  let t = args.shift()
  let self = this;
  return function() {
    self.apply(t,arguments)
  }
}
```
