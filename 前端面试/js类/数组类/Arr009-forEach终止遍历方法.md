# Arr009-forEach终止遍历方法

使用 Error 终止 forEach

```js
const numbers = [1, 2, 3, 4, 5];  
try {  
  numbers.forEach(number => {  
    if (number > 3) {  
      throw new Error('循环停止');  
    }  
    console.log(number);  
  });  
} catch (e) {  
  console.log('出现异常，循环已停止');  
}  
// 输出: 1, 2, 3, 出现异常，循环已停止

```

for of 可以通过 break 终止

```ts
const numbers = [1, 2, 3, 4, 5];  
  
for (const number of numbers) {  
  if (number > 3) {  
    break; // 成功终止循环  
  }  
  console.log(number); // 1 2 3  
}

```
