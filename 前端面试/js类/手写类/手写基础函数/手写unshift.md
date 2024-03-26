
# 手写unshift

简单写法

```js
Array.prototype.myUnshift = function() {
	for(let i = arguments.length - 1; i >= 0; i --) {
		this.splice(0,0,arguments[i])
	}
	return this.length;
}

let arr = [1,2,3,4]
let len = arr.myUnshift(-2)
console.log(111,arr,len)
```