## 实现函数 isInteger(x) 来判断 x 是否是整数

可以将 x 转换成10进制，判断和本身是不是相等即可：

```js
function isInteger(x) { 
    return parseInt(x, 10) === x; 
}

```

ES6 对数值进行了扩展，提供了静态方法 isInteger() 来判断参数是否是整数：

```js
  Number.isInteger(25) // true
  Number.isInteger(25.0) // true
  Number.isInteger(25.1) // false
  Number.isInteger("15") // false
  Number.isInteger(true) // false
```


JavaScript能够准确表示的整数范围在 -2^53 到 2^53 之间（不含两个端点），超过这个范围，无法精确表示这个值。ES6 引入了Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限，并提供了 Number.isSafeInteger() 来判断整数是否是安全型整数。


