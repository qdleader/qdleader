# Array.prototype.at

## 使用Array.prototype.at()简化arr.length

Array.prototype.at()接收一个正整数或者负整数作为参数，表示获取指定位置的成员

参数正数就表示顺数第几个，负数表示倒数第几个，这可以很方便的某个数组末尾的元素

不存在-0，-0 = 0

```js
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
```js
function at(n) {
  n = Math.trunc(n) || 0; // 去掉小数点
  if (n < 0) n += this.length;
  if (n < 0 || n >= this.length) return undefined;
  return this[n];
}
```

取数组最后一位元素，
Array.prototype.slice 方法，通过传递负索引，从右往左定位到最后一个元素：
```js
const lastUser = rollbackUserList.slice(-1)[0]; // 4
// 或者使用解构赋值
const [lastUser] = rollbackUserList.slice(-1); // 4
```

注意 slice 方法返回的是一个 新数组 而不是元素本身，需要手动从数组中取出元素
