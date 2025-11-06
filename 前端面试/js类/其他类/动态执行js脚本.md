# 动态执行js脚本

```js
function dynamicFn(code) {
    // 如何将字符串当成js代码执行
}

dynamicFn("console.log(123)")
```

## eval

遇到这样的问题，或许我们首先想到就是 eval 方法

eval() 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。如果参数是一个表达式，eval() 函数将执行表达式。如果参数是Javascript语句，eval()将执行 Javascript 语句。

那么 dynamicFn 方法可修改如下

```js
function dynamicFn(code) {
    eval(code); // 123
}
dynamicFn("console.log(123)")
```

很简单，另外我们从 同步/异步 、作用域 两个方面来拓展一下吧。
```js
var a = 10;
function dynamicFn(code) {
    var a =20;
    eval(code);
}

dynamicFn("console.log(a)")
console.log(30)

// 执行结果
// 20
// 30
```

我们可以看出 eval 方法是同步执行，其作用域为当前执行作用域

## setTimeout

setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。

setTimeout 的第一个参数，可以是一个函数，也可以是一个代码串，那么我们就可以利用其特点来实现动态js脚本
```js
var a = 10;
function dynamicFn(code) {
    var a = 20;
    setTimeout(code, 0)
}

dynamicFn("console.log(a)")
console.log(30)

// 执行结果
// 30
// 10
```

我们可以看出 setTimeout 方法是异步执行，其作用域为全局作用域

## 动态script标签

动态script标签 方法就是我们创建一个script标签元素对象，将其插入到当前Dom里

```js
var a = 10;
function dynamicFn(code) {
    var a = 20;
    var script = document.createElement('script');
    script.innerHTML = code;
    document.body.appendChild(script)；
}

dynamicFn("console.log(a)")
console.log(30)

// 执行结果
// 10
// 30
```

我们可以看出 动态script标签 方法是同步执行，其作用域为全局作用域

## new Function()

所有函数方法的原型对象是 Function ，我们可以通过 new Function() 示例来生成一个方法，再执行就可动态执行js了
```js
var a = 10;
function dynamicFn(code) {
    var a = 20;
    var fn = new Function(code);
    fn();
}

dynamicFn("console.log(a)")
console.log(30)
console.log(Object.getPrototypeOf(dynamicFn)) // ƒ () { [native code] }

// 执行结果
// 10
// 30
```

我们可以看出，new Function() 方法是同步执行，其作用域为全局作用域
