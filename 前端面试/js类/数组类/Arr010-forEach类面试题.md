# Arr010-forEach类面试题

```js
let numbersTwo = [1,2,3];
numbersTwo.forEach((number, index) => {
  console.log(number);
  numbersTwo.pop()
})

console.log('numbersTwo的最终结果',numbersTwo)
```
结果是[1], 循环了两次



在循环里面删除是会影响遍历次数的，
原理：

forEach，在在遍历的开始就确定了要遍历的次数，也就是numbersTwo.length 长度3次，并存在一个变量len中，

每次进行回调时候，都会进行判断当前要执行的数组的索引存不存在，不存在就不会之行callback函数了，
当执行第一遍，第二遍遍历时候索引0，1是存在的，当执行到最后一次时候索引2不存在了，所以就不再执行了。


forEach 的实现

```js
Array.prototype.myForEach = function (callbackfn, thisArg) {
  if(this === null || this=== undefined) {
    throw new TypeError('this 不能是null 或者undefined')
  }
  let O = this;
  let len = O.length;
  if(typeof callbackfn !== 'function') {
    thorw new TypeError('callback 不是个函数')
  }
  for(let k = 0; k < len; k ++) {
  // hasOwnProperty 判断索引是否存在
    let kValue = O[k]
    callbackfn.call(thisArg,kValue,k,O)
  }
  return undefined
}
```