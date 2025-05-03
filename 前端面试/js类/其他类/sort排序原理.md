# sort 排序原理

有没有想过 javascript 中数组的排序方法 Array.prototype.sort()内部是使用什么排序算法实现的呢？

sort()
关于 sort 方法的使用就不多说了，很简单：

```js
sort方法可以直接调用，不传入任何参数，也可以传入一个比较函数作为参数

当不传入参数时，sort方法会调用默认的排序函数，即先调用每个数组元素的toString()转型方法，然后按照字符串的Unicode编码顺序来对字符串进行排序。

关于比较函数，函数接受两个参数，若函数返回值大于0，则执行交换，否则不交换
```

示例代码：

```js
function cmp(val1, val2) {
  return val1 - val2;
}

let arr = [5, 9, 32, 2, 18, 23];
arr.sort();
console.log(11, arr);
arr.sort(function (a, b) {
  return a - b;
});
console.log(22, arr);
```

## sort 内部的排序算法

看源码可知，sort 内部是快排的实现，但是在数据长度较小时会使用插排，即如果数组长度小于等于 22（v8 代码逻辑中是 10）的时候使用插入排序，大于这个值使用快速排序，
但是在快速排序递归调用过程中，分治的数组长度小于等于 22 也会使用插入排序。

```js
function InnerArraySort(array, length, comparefn) {
  // In-place QuickSort algorithm.
  // For short (length <= 22) arrays, insertion sort is used for efficiency.
  // chromium v8引擎array.js
}
```
