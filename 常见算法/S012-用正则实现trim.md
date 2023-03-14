# 用字符串实现trim

## 1.去除字符串收尾两端的空格

```
String.prototype.trim1 = function() {
	return this.replace(/(^\s*)|(\s*$)/g,'')
}
```

## 调用

```
console.log(" Hello world ".trim1())

// Hello world
```


## 2.去除字符串所有的空格
```
String.prototype.trim2 = function() {
	return this.replace(/\s*/g,'')
}
```


## 调用

```
console.log(" Hello world ".trim2())


// Helloworld
```




当然 es6 自带的trim在项目里是最常用到的

```
//es6
' ab '.trim()      //"ab" 
```





方法一：使用replace正则匹配的方法
```js
去除所有空格: str = str.replace(/\s*/g,"");      

去除两头空格: str = str.replace(/^\s*|\s*$/g,"");

去除左空格： str = str.replace( /^\s*/, “”);

去除右空格： str = str.replace(/(\s*$)/g, "");
```
str为要去除空格的字符串，实例如下：
```js
var str = " 23 23 ";
var str2 = str.replace(/\s*/g,"");
console.log(str2); // 2323
```


方法二：使用str.trim()方法
str.trim()局限性：无法去除中间的空格，实例如下：
```js
var str = "   xiao  ming   ";
var str2 = str.trim();
console.log(str2);   //xiao  ming 
```