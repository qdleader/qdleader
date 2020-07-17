## 001
```
function foo1() {
	return {
		bar: 1234
	}
}

function foo2() {
	return 
	{
		bar: 4567
	}
}

console.log(foo1());
console.log(foo2());
```







result:

```
Object

undefined
```



解析:





```
//         foo2()就等价于
// 			function foo2() {
// 				return;
// 				{
// 					bar:456
// 				}
// 			}
// 			在js中,一句独占一行会默认给加个分号(;),所以直接return就退出了.所以返回object 和undefined over
```










