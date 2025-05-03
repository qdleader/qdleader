# js单例模式

概述: 使生成的对象只有一个（他生成的对象永远只有一个）


```js
function Person(){
	
}
let person1 = new Person()
let person2 = new Person()
console.log(person1===person2) //生成的俩个对象 地址不是一个 false
```
实现
1.用一个变量来判断是否存在这个对象
2.如果不存在 创建 这个变量要重新赋值
3.如果存在 直接返回这个变量

## 闭包实现单例
```js
function Person(){
	
}
//利用闭包来实现单例
function CreatePerson(){
	let instance
	return function(){
        if(!instance){
            instance = new Person()
        }
        return instance
	}
}
let created = CreatePerson()
let person = created() //产生一个新的对象
let person1 = created() //产生一个新的对象
console.log(person === person1) //true
```



原型实现单例
```js
function Person(){
	
}
//用原型来实现单例
function CreatedPerson(){
    if(!Person.instance){
        Person.instance = new Person()
    }
    return Person.instance
}
let person2 = CreatedPerson()
let person3 = CreatedPerson()
console.log(person2 === person3);

```
