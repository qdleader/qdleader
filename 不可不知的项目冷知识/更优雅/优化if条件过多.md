

```js
// 多条件判断开始，如下

if (obj.radio1 || obj.checkbox1.length > 0 || obj.input1 || obj.inputNumber1 > 0 || obj.select1 || obj.select2.length > 0 || obj.switch1 || obj.radio2 || obj.checkbox2.length > 0 || obj.input2 || obj.inputNumber2 > 0 || obj.select3 || obj.select4.length > 0 || obj.switch2  ...) {
  // do something
} else {
  // 条件不符，提示
  this.$message({
    message: '请选择条件后重试',
    type: 'warning'
  })
  return false
} 

```

优化后的代码如下：

```js
// 多条件判断开始，如下

const arr = [
  obj.radio1,
  obj.checkbox1.length,
  obj.input1,
  obj.inputNumber1,
  obj.select1,
  obj.select2.length,
  obj.switch1,
  obj.radio2,
  obj.checkbox2.length,
  obj.input2,
  obj.inputNumber2,
  obj.select3,
  obj.select4.length,
  obj.switch2 
  ...
]

const arr1 = arr.map(item => Boolean(item))
if (arr1.includes(true)) {
  // do something
} else {
  // 条件不符，提示
  this.$message({
    message: '请选择条件后重试',
    type: 'warning'
  })
  return false
} 

```

## 封装条件语句以及ts的类型守卫

错误的写法
```js
if (fsm.state === 'fetching' && isEmpty(listNode)) {
 // ...
}

```

正确的写法

```js
function shouldShowSpinner(fsm, listNode) {
     return fsm.state === 'fetching' && isEmpty(listNode);
}

   if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
     // ...
   }
```

    在正确的写法中我们封装了条件判断的逻辑成一个独立函数。这种写法比较可读，我们从函数名就能知道做了一个什么判断。
