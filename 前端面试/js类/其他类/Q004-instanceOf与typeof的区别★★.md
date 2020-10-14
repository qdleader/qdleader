# Q004-instanceOf与typeof的区别★★

```
相同点：

都用来判断一个变量是否为空,或者什么类型

不同点:
	typeof返回值是一个字符串,用来说明变量的数据类型.(number,boolean,string,function,object,undefined)

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






## 当我们被问到怎么判断一个变量是否为数组时候。
可以用
```
第一种方法是：instanceof

> [] instanceof Array
true

这是es3的规定，但是这必须假定只有一个全局执行环境



第二种方法是：isArray

这是ES5的标准，被IE9+支持

> Array.isArray([])
true

```
