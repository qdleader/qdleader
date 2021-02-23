## 下面输出结果
```
console.log(100)
setTimeout(() => {
  console.log(200)
})
Promise.resolve().then(() => {
  console.log(300)
})
console.log(400)
```

## 答案

```
100
400
300
200
```
