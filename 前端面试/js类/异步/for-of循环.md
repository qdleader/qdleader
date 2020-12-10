
```
function muti(num) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(num * num)
        }, 1000)
    })
}

const nums = [1,2,3]

nums.forEach(async (i) => {
    cosnt res = await muti(i);
    console.log(res)
})

```

这个打印的结果是：过一秒后：1,4,9同时打印



```
!(async function () {
    for (let i of nums) {
      const res = await muti(i)
      console.log(res)
    }
})
```
过一秒后：1,
再过一秒打印：4,
再过一秒打印：9
