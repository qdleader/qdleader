# ES11-bigInt
## BigInt

BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数。在此之前，JS 中安全的最大数字是 9009199254740991，即2^53-1，在控制台中输入 Number.MAX_SAFE_INTEGER 即可查看。超过这个值，JS 没有办法精确表示。另外，大于或等于2的1024次方的数值，JS 无法表示，会返回 Infinity。
BigInt 即解决了这两个问题。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。为了和 Number 类型进行区分，**BigInt 类型的数据必须添加后缀 n.**

```ts
//Number类型在超过9009199254740991后，计算结果即出现问题
const num1 = 90091992547409910;
console.log(num1 + 1); //90091992547409900

//BigInt 计算结果正确
const num2 = 90091992547409910n;
console.log(num2 + 1n); //90091992547409911n

//Number 类型不能表示大于 2 的 1024 次方的数值
let num3 = 9999;
for(let i = 0; i < 10; i++) {
    num3 = num3 * num3;
}
console.log(num3); //Infinity

//BigInt 类型可以表示任意位数的整数
let num4 = 9999n;
for(let i = 0n; i < 10n; i++) {
    num4 = num4 * num4;
}
console.log(num4); //一串超级长的数字，这里就不贴了
```

我们还可以使用 BigInt 对象来初始化 BigInt 实例：
```ts
console.log(BigInt(999)); // 999n 注意：没有 new 关键字！！！
```

需要说明的是，BigInt 和 Number 是两种数据类型，不能直接进行四则运算，不过可以进行比较操作。
```js
console.log(99n == 99); //true
console.log(99n === 99); //false 
console.log(99n + 1);//TypeError: Cannot mix BigInt and other types, use explicit conversionss
```
