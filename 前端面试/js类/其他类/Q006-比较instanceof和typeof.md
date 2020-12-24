# 比较 instanceof 和 typeof ？

> 相同点都用来判断一个变量是否为空，或者什么类型

typeof 返回值是一个字符串，用来说明变量的数据类型，（number、boolean，string
function，undefined，object）

判断一个变量是否存在：

```
if(typeof(a) != 'undefined') {
  alert("存在")
}
```

2.对于Array,null 等特殊对象使用Typeof 一律返回object，这也是typeof的局限

instanceof用于判断一个变量是否属于某个对象的实例。



```
let a = [];
alert(a instanceof Array) //true
alert(a instanceof Object) //true
```

```

```
