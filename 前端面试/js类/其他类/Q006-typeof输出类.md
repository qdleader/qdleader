
# Q006-typeof输出类

## 1
```js
var y = 1, x = y = typeof x;
 x; 

```










答案：
```js
//"undefined"
```

表达式是从右往左的，x由于变量提升，类型不是null，而是undefined，所以x=y=”undefined”。






## 2
```js
 (function f(f){
    return typeof f();
  })(function(){ return 1; });

```










答案：
```js
//"number"
```

传入的参数为f也就是function(){ return 1; }这个函数。通过f()执行后，得到结果1，所以typeof 1返回”number”。这道题很简单，主要是区分f和f()。










## 3
```js
  var foo = {
    bar: function() { return this.baz; },
    baz: 1
  };
  (function(){
    return typeof arguments[0]();
  })(foo.bar);

```










答案：
```js
//"undefined"
```

这一题考察的是this的指向。this永远指向函数执行时的上下文，而不是定义时的（ES6的箭头函数不算）。当arguments执行时，this已经指向了window对象。所以是”undefined”。









## 4
```js
 var foo = {
    bar: function(){ return this.baz; },
    baz: 1
  }
  typeof (f = foo.bar)();

```










答案：
```js
//"undefined"
```

同上









## 5
```js
var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;

```










答案：
```js
//"number"
```

var a = (1,2,3);
document.write(a);//3,会以最后一个为准

所以上面的题目会返回2，typeof 2当然是”number”啦。








## 6
```js
  var x = 1;
  if (function f(){}) {
    x += typeof f;
  }
  x;
```










答案：
```js
//"1undefined"
```

这是一个javascript语言规范上的问题，在条件判断中加入函数声明。这个声明语句本身没有错，也会返回true，但是javascript引擎在搜索的时候却找不到该函数。所以结果为”1undefined”。










## 7
```js
 (function(foo){
    return typeof foo.bar;
  })({ foo: { bar: 1 } });
```










答案：
```js
//"undefined"
```
这题其实是一个考察心细程度的题目。形参的foo指向的是{ foo: { bar: 1 } }这个整体。相信这么说就明白了




