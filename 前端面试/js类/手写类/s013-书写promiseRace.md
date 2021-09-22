
```
static PromiseRace(arr) {
  return new Promise((resolve,reject) => {
      if(!Array.isArray(arr)) {
        reject(throw new Error('请输入数组'))
      }
      for(let i = 0;i < arr.length; i ++) {
        Promise.resolve(arr[i]).then(res => {
            resolve(res)
        },err => {
            reject(err)
        })
      }
  })
}
```
