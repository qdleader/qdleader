# isNAN 和 Number.isNAN 的区别

## 结论

全局对象的 isNaN 在确定参数是否为 NaN 之前，会将其参数转换为 number 类型

Number.isNaN()是 ES6 的方法，函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。

代码实操

```js
isNaN("我是字符串"); // true

Number.isNaN("我是字符串"); // false
```

实现逻辑

#### isNaN

将参数转换为 number 类型
如果转换后的参数为 NaN，返回 true
否则，返回 false

#### Number.isNaN

如果参数为 number 类型，返回 false
如果参数为 NaN，返回 true
否则，返回 false

## eg

```js
isNaN(NaN);

isNaN("A String");

isNaN(undefined);

isNaN({});

Number.isNaN(NaN);

Number.isNaN("A String");

Number.isNaN(undefined);

Number.isNaN({});
```

输出

```js
true;
true;
true;
true;
true;
false;
false;
false;
```

拓展

Number.isNaN() 的 polyfill
没有 ES6 的情况下，可以采用以下 polyfill

```js
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return typeof n === "number" && window.isNaN(n);
  };
}
```

简单来看，就是在原有 isNaN() 的基础上增加了一个 type 的判断，因为 NaN 的 type 是 number。
还有一种更加简单的实现

```js
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return n !== n;
  };
}
```

利用了只有 NaN 不跟自己相等的特性。
