## 手写 promiseAll

```
function promiseAll(arr) {
  return new Promise((resolve,reject) =>{
      if(!Array.isArray(arr)) {
        return reject(new Error('请传入数组'))
      }

      let data = [],count = 0,arrNum = arr.length;
      for(let i = 0; i < arrNum; i ++) {
        Promise.resolve(arr[i]).then(res => {
          data[i] = res
          count ++
          if(count == arrNum) {
            resolve(data)
          }
        })
        .catch(e => reject(e))
      }
  })
}


// 测试

let pro1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(1)
    },1000)
})
let pro2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(2)
    },2000)
})
let pro3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(3)
    },3000)
})
let data1 = [pro1,pro2,pro3]
promiseAll(data1).then(res => {
    console.log(res)
})

```
