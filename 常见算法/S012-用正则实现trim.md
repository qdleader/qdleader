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


##2.去除字符串所有的空格
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





