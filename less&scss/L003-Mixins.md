#mixins

>less允许我们将已有的class和id的样式应用到另一个不同的选择器上。

```
#circle {
	background-color:#333333;
	border-radius:100%;
}

#small-circle {
	width:50px;
	height:150px;
	#circle
}
```

```
#写法2：
#circle {
	background-color:#333333;
	border-radius:100%;
}

#small-circle {
	width:50px;
	height:150px;
	#circle
}
```


#Mixin 比较酷就是可以传参

```
写法3：

#circle(@size: 25px) {
	background-color:#333333;
	border-radius:100%;
	width:@size;
	height:@size;
}

#small-circle{
	#circle
}

#big-circle {
	#circle(100px)
}



```
[Mixin](http://lesscss.org/features/#mixins-feature)