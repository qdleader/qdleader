我们知道，this对象在运行时基于函数的执行环境绑定的：在全局函数中，this等于window，而当this某个对象的方法调用时，this等于那个对象。



1. this的绑定形式
    1.默认绑定
    2.隐式绑定
    3.显示绑定
    4.英绑定
    5.new绑定


2.五种绑定的优先级 默认绑定 < 隐式绑定 < 显示绑定 < 硬绑定 < new绑定



3.详说每种绑定的特点
## 1.默认绑定

#### eg1
```js
function foo() {
    alert(this.a)
}

var a = 2;
foo() //2

```

this指向window并且在foo之前被赋值了所以是2，没有错


#### eg2
```js
function foo() {
    alert(this.a)
}


foo() //undefined
var a = 2;
```

    this指向undefined是非严格模式下：如果开启了严格模式this指向undefined
所以下面这





#### eg3
```js
"use strict";
var a = 10;
function foo() {
    console.log(this)
    console.log(window.a)
    console.log(this.a)
}
console.log(this)
foo()
```

答案是：
Window{...}
undefined
10
Uncaught TypeError


严格模式下 函数中的this 为undefined

#### eg4
```js
let a = 1;
const b = 2;

function foo() {
    console.log(this.a)
    console.log(this.b)
}
foo();
console.log(window.a)
```

undefined
undefined
undefined

why?
因为let和const不会把变量绑定到window 上。




#### eg5
```js
var a = 1
function foo () {
  var a = 2
  console.log(this)
  console.log(this.a)
}

foo()
```

答案
window
1
为什么是1，因为是this。a而不是a，window下的a就是1呀




同理：
var a = 1
function foo () {
  var a = 2
  function inner () {
  	 console.log(this)
    console.log(this.a)
  }
  inner()
}

foo()

答案是
window
1




## 二 隐式绑定

谁最后调用的函数，函数内的this就指向谁 也就是this永远指向最后调用它的那个对象（不包含箭头函数）

```js
 function foo() {
     console.log(this.a);
 }

 var baz = {
     a: 2,
     foo: foo
 }

 baz.foo();      // 2

 ```
作为foo函数调用对象baz，就成了this的上下文对象啦。
    隐士绑定this丢失的两中情况

#### 1.主动赋值（本质相当于为函数起了别名）
主动赋值丢失本质是将 函数的引用暴露在全局作用域下

    function foo() {
        console.log(this.a);
    }
    var baz = {
        a: 2,
        foo: foo
    }
    var bar = baz.foo;    // 主动赋值 ** 不是主动执行 ** （只是地址的一次 引用）
    bar();       // 输出 undefined




#### 2.函数传参丢失( 将函数作为参数传递 也是一次引擎的右查询 )
回调函数本质也是将函数作为参数传递，是一次隐式的赋值操作 **
```js
  function foo() {
    console.log(this.a);
  }
  var baz = {
    a: 2,
    foo: foo
  }

  var bar = baz.foo;      // 这里其实不是绑定，只是一次 地址的引用( 函数也是一个对象 )
  setTimeout(bar, 100);       // 函数传参 回调函数 丢失绑定
           // 输出 undefined
```

主动赋值操作 是因为进行了 函数地址的引用, 将函数的 上下文环境改变了 ** 区别于函数的调用执行 **

```js
function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }

obj.foo();
foo2();
obj2.foo2();
```

答案
1
2
3
obj.foo()中的this指向调用者obj
foo2()发生了隐式丢失，调用者是window，使得foo()中的this指向window
foo3()发生了隐式丢失，调用者是obj2，使得foo()中的this指向obj2




```js
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
doFoo(obj.foo)
```



答案为

window
2


这里我们将obj.foo当成参数传递到doFoo函数中，在传递的过程中，obj.foo()函数内的this发生了改变，指向了window。





```js
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)
```







答案：

{ a:3, doFoo: f }
2




```js
"use strict"
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)
```










答案
{ a:3, doFoo: f }
Uncaught TypeError: Cannot read property 'a' of undefined