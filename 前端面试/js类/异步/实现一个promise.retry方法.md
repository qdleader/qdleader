
## 实现一个promise.retry 方法  

在规定的次数内，没成功就重复调用异步方法




```


function fn() {
    let n = Math.random();
   return new Promise((resolve,reject) => {
       setTimeout(() => {
          if (n > 0.7) {
               resolve(n)
           } else {
               reject(n)
           }
       },1000)
    })
}

Promise.retry = (fn,wait) => {
        new Promise(async (resolve, reject) => {
            while (wait--) {
                try {
                    let res = await fn()
                    console.log('执行成功',res);
                    resolve(res)
                    break;
                } catch (err) {
                    console.log('失败一次',err)
                    if(!wait) {
                        reject('全部失败')
                    }
                }
            }
        }).catch(err => {
            console.log('全部失败')
        })
}
Promise.retry(fn, 10)

```