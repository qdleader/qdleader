## 什么是NAN

NaN 是 Not a Number 的缩写，JavaScript 的一种特殊数值，其类型是 Number，可以通过 isNaN(param) 来判断一个值是否是 NaN：


```js
console.log(isNaN(NaN)); //true
console.log(isNaN(53)); //false
console.log(isNaN('ds')); //true
console.log(isNaN('32131sdas32d')); //true
console.log(NaN === NaN); //false
console.log(NaN === undefined); //false
console.log(undefined === undefined); //false
console.log(typeof NaN); //number
console.log(Object.prototype.toString.call(NaN)); //[object Number]
```
ES6 中，isNaN() 成为了 Number 的静态方法：Number.isNaN().
