# 比较 instanceof 和 typeof ？

> 相同点都用来判断一个变量是否为空，或者什么类型

typeof 返回值是一个字符串，用来说明变量的数据类型，（number、boolean，string
function，undefined，object）

判断一个变量是否存在：



```javascript
if(typeof(a) != 'undefined') {
  alert("存在")
}
```

2.对于Array,null 等特殊对象使用Typeof 一律返回object，这也是typeof的局限
instanceof用于判断一个变量是否属于某个对象的实例。




```javascript
let a = [];
alert(a instanceof Array) //true
alert(a instanceof Object) //true
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
