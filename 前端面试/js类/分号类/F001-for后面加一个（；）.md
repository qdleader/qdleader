```
const length = 4;
const number = [];
for(var i = 0; i < length; i ++); {
	numbers.push(i + 1)
}

number;  // => ?
```

#答案是:
[5]


#解析：

>上面for后面加上分号，js会认为语句结束，所以for循环执行了四次空语句，当退出循环的时候，此时的i值为4.
>然后执行{ numbers.push(i + 1)};最终numbers内容只有一个数字5.



相当于：

```
const length = 4;
const numbers = [];
for(var i = 0; i < length; i ++) {
	//do nothing
}


{
	numbers.push(i + 1)
}


numbers; //=> [5]
```