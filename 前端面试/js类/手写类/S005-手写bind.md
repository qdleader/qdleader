# 手写bind函数

```
Function.prototype.bind1 = function() {
  let args = Function.prototype.slice().call(argumrnts)
  let t = args.shift()
  let self = this;
  return function() {
    self.apply(t,argumrnts)
  }
}
```
