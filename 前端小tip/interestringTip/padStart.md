# padStart

尝试推测它的输出：

```js
const name = 'qdleader'
console.log(name.padStart(14))
console.log(name.padStart(2))
```

输出：
"         qdleader"
"qdleader"

解析：padStart 方法可以在字符串的开头填充空格。参数是新字符串的总长度，如果这个长度比原来的字符串长度短，那么不会填充。

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

padStart() 方法用另一个字符串填充当前字符串 (如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。
