# Object.getPrototypeOf()的使用



Object.getPrototypeOf() 方法用于获取指定对象的原型对象（也就是__proto__的指向）

```js

function Obj() {
	this.name = 'qd'
}
Obj.prototype.fullName = 'qdleader';


let obj = new Obj();
console.log( obj.__proto__.fullName );  // qdleader
console.log(obj.__proto__ === Object.getPrototypeOf(obj))

```