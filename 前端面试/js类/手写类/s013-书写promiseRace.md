
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




let p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(1)
  },1000)
})

let p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject(2)
  },200)
})



PromiseRace([p1,p2]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

```

二、Promise.race的使用
顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。


返回只返回最快的那个（无论对错），但是也都执行一遍的
