```
function arrayFormValue(items) {
	return 
		[items];
}

arrayFormValue(10);  // => ???
```

*答案：
undefined

*解析：
这里需要注意的是return和[items]之间已经换行了，js会在换行之间自动加入分号
所以等价于：

```
function arrayFromValue(items) {
	return;
	[items];
}
arrayFromValue(10);  // => undefined
```

return;函数就直接结束并返回undefined的了，所以下面结果为undefined