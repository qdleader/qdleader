#  Number() 的存储空间是多大？如果后台发送了一个超过最大限制的数字怎么办

Number() 的存储空间是 +-(Math.pow(2, 53) - 1)；


如果后台返回超过最大限制的数字可以用bigint来计算，如果只是显示可以跟后端协商只返回字符串。


如果后台发送了一个超过这个最大限制的数字，JavaScript 会将其视为 Infinity。你可以使用 `isFinite()` 函数来检查一个数字是否是有限的，如果是 Infinity，则表示该数字超过了 JavaScript 的最大限制。

例如：

```javascript
let num = 1.7976931348623157e+308; // 最大值
console.log(num); // 1.7976931348623157e+308

let num2 = num * 2; // 超过最大值
console.log(num2); // Infinity

console.log(isFinite(num2)); // false
```
