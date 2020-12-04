# Promise

## promise 的三种状态

```
pengding

resolved

rejected

```



## then 和 catch 改变状态

```
then 正常返回 resolved， 里面报错返回 rejected

catch 正常返回 resolved，里面报错返回 rejected
```


eg:
1.
```
Promise.resolve().then(() => {
  console.log(1)
}).catch(() => {
  console.log(2)
}).then(() => {
  console.log(3)
})
```

答案：
```
1,3
```
解析：
> then 里面没有报错，所以不会走catch方法，直接走then方法。打印1,3
2.
```
Promise.resolve().then(() => {
  console.log(1)
  throw new Error('error1')
}).catch(() => {
  console.log(2)
}).then(() => {
  console.log(3)
})
```

答案：
```
1,2,3
```

解析：
> then 里面有报错，返回rejected，所以会走catch方法，catch里面没有报错，返回resolved，会继续走走then方法。所以打印1,2，3

3.

```
Promise.resolve().then(() => {
  console.log(1)
  throw new Error('error1')
}).catch(() => {
  console.log(2)
}).catch(() => {
  console.log(3)
})
```

答案：
```
1,2
```

解析：
> then 里面有报错，返回rejected，所以会走catch方法，catch里面没有报错，返回resolved，所以不会走catch方法，所以打印1,2


未完待续
