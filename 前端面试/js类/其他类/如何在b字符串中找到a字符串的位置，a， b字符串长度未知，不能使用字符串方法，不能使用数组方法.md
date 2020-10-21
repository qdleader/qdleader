# 如何在b字符串中找到a字符串的位置，a， b字符串长度未知，不能使用字符串方法，不能使用数组方法★


思路: 如果不能使用字符串的相应方法，我们可以把字符串转换成数组，使用递归函数不断去比对相应的数组索引，然后把满足条件的索引打印出来



```
let str1 = "gsvcxqdleaderusdcvdaqdleadersjcvdgcvhsdc";
let str2 = 'qdleader'

let arr1 = str1.split('')
let arr2 = str2.split('')

function test(arr) {
  for(let i = 0; i < arr1.length; i ++) {
    if(arr[0] == arr1[i]) {
      let num = 0;
      function findIndex(arr) {
        if(arr[num] == arr[i + num]) {
          if(num == arr.length - 1) {
            console.log("索引是：",num)
          }
          num ++;
          findIndex(arr2)
        } else {
          return;
        }
      }
      findIndex(arr2)
    }
  }
}

test(arr2)
```
