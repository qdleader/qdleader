# Q004-instanceof与typeof的区别★★

```js
相同点：

都用来判断一个变量是否为空,或者什么类型

不同点:
	typeof返回值是一个**字符串**,用来说明变量的数据类型.(number,boolean,string,function,object,undefined)

	判断一个变量是否存在:
		if(typeof(a)!='undefined') {
			alert('ok')
		}

	 2.对于Array,null等特殊对象使用Typeof 一律返回 object 这正是typeof的局限
 instanceof用于判断一个变量是否属于某个对象的实例


 var a = new Array();
 alert(a instanceof Object)  //true
 alert(a instanceof Array)  //true

 我们用instanceOf可以判定a为数组，而typeof 是不可以的

```

```js
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写,意思是"不是一个数字"
typeof Number(1) === 'number'; // 不要这样使用!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof返回的肯定是一个字符串
typeof String("abc") === 'string'; // 不要这样使用!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 不要这样使用!

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof blabla === 'undefined'; // 一个未定义的变量,或者一个定义了却未赋初值的变量

// Objects
typeof {a:1} === 'object';

// 使用Array.isArray或者Object.prototype.toString.call方法可以从基本的对象中区分出数组类型
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑，不要这样使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) ==== 'object';
typeof new String("abc") === 'object';

// 函数
typeof function(){} === 'function';
typeof Math.sin === 'function';
```



typeof来判断数据类型其实并不准确。比如数组、正则、日期、对象的typeof返回值都是object，这就会造成一些误差。

所以在typeof判断类型的基础上，我们还需要利用Object.prototype.toString方法来进一步判断数据类型







## 当我们被问到怎么判断一个变量是否为数组时候。
可以用
```js
第一种方法是：instanceof

> [] instanceof Array
true

这是es3的规定，但是这必须假定只有一个全局执行环境



第二种方法是：isArray

这是ES5的标准，被IE9+支持

> Array.isArray([])
true

```



## 再拓展用Object.prototype.slice.call


```js
let obj = {};
let arr = [];


console.log(Object.prototype.toString.call(obj)) // [object Object]
console,log(Object.prototype.toString.call(arr)) // [object Array]
console.log(Object.prototype.toString.call(null)) // [object Null]
Object.prototype.toString.call(undefined);  // => "[object Undefined]"
Object.prototype.toString.call(true);            // => "[object Boolean]"
Object.prototype.toString.call(1);               // => "[object Number]"
Object.prototype.toString.call("");              // => "[object String]"
Object.prototype.toString.call((function() {
  return arguments;
})());                                           // => "[object Arguments]"
Object.prototype.toString.call(function(){});    // => "[object Function]"
Object.prototype.toString.call(new Error());     // => "[object Error]"
Object.prototype.toString.call(/\d+/);           // => "[object RegExp]"
Object.prototype.toString.call(new Date());      // => "[object Date]"
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
```


## 拓展 手写instanceof

```js
  function instanceof(left,right) {
    while(true) {
      if(left === null) {
        return false
      }
      if(left == right.prototype) {
        return true
      }
      left = left.__proto__
    }
  }

```