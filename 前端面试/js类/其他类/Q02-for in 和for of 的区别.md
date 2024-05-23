# for in 和for of 的区别

## 1.for...in
for...in可以遍历对象、数组。



#### 遍历数组：
```js
Array.prototype.method=function(){
　　console.log(this.length);
}
let arr = [1, 2, 4, 5, 7];
for (let index in arr) {
    console.log(arr[index]);
    console.log(typeof index);
}
```

有上段代码可以总结出for...in遍历数组的特点：

遍历的索引为字符串类型
遍历顺序可能不是按照数组顺序（随机顺序）
使用for in会遍历数组所有的可枚举属性，包括原型。
所以for...in更适合遍历对象，不要使用for in遍历数组。


#### 遍历对象：
```js
Object.prototype.method = function () {
    console.log(this);
}
let obj = {
    name: "张三",
    age: 22
}
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
```

## 2.for...of
for-of可以简单、正确地遍历数组（不遍历原型method和name）。
遍历数组：
```js
let myArray = [1, 2, 4, 5, 6, 7];
myArray.name = "数组";
myArray.getName = function () { return this.name; }
for (let value of myArray) {
    console.log(value);
    console.log(typeof value)
}
```


.JavaScript中可迭代对象
```js
Set
Map
String
Array
Arguments
NodeList
```

如何判断是否有迭代能力？
```js
Array.prototype.hasOwnProperty(Symbol.iterator)
```
## 4.总结

> for...in可以遍历对象和数组，for...of不能遍历对象
> for...in 循环不仅遍历数字键名，还会遍历手动添加的其它键，甚至包括原型链上的键
> for...in遍历的索引为字符串类型
> for..of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象的集合，但是不能遍历对象
> for...of与forEach()不同的是，它可以正确响应break、continue和return语句
具有迭代器对象才可以使用for...of

总结一句话就是遍历数组使用for...of，遍历对象使用for...in。

