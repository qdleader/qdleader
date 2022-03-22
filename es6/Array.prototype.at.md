

## 使用Array.prototype.at()简化arr.length
Array.prototype.at()接收一个正整数或者负整数作为参数，表示获取指定位置的成员

参数正数就表示顺数第几个，负数表示倒数第几个，这可以很方便的某个数组末尾的元素

不存在-0，-0 = 0

```
var arr = [1, 2, 3, 4, 5]
// 以前获取最后一位
console.log(arr[arr.length-1]) //5
// 简化后
console.log(arr.at(-1)) // 5



ar arr = [1, 2, 5, 9, 78]

// 第0个
console.log(arr.at(0)) // 1

// 正数第一个
console.log(arr.at(1)) // 2

// 倒数第一个
console.log(arr.at(-1)) // 78

// 倒数第二个
console.log(arr.at(-2)) // 9
```
那么让你实现下呢？
```
function at(n) {
  n = Math.trunc(n) || 0; // 去掉小数点
  if (n < 0) n += this.length;
  if (n < 0 || n >= this.length) return undefined;
  return this[n];
}
```
