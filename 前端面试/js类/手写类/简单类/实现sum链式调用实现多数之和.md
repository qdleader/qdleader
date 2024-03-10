
# 实现Sum函数链式调用计算多数之和

## 原型链的实现方案
```js

	function Sum(num = 0){
		this.total = num
	}
 	Sum.prototype.add = function(num) {
		this.total += num
		return this
	}
	
	let res = new Sum(1)
	res.add(2).add(3);
	console.log(res.total)

```



## 柯里化的实现方案

```js

	function Sum() {
		let allArgs = [...arguments];
		let inner = function(...args) {
			allArgs = [...allArgs,...args];
			return inner;
		}
		inner.toString = () => {
			return allArgs.reduce((prev,cur) => {
				return prev + cur
			})
		}
		return inner
	}
	
	alert(Sum(1)(2)(3))

```