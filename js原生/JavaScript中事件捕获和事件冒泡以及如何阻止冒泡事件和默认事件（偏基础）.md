# JavaScript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件
```
<div id='div1'>
  <div id='div2'>
    <div id='div3'></div>
  </div>
</div>
```

```

div1.οnclick=function(){
	alert("div1")
}
div2.οnclick=function(){
	alert("div2")
}
div3.οnclick=function(){
	alert("div3")
}
```

当单击中间的div3时，先后弹出div3, div2, div1，此为事件冒泡的过程。



```
div1.addEventListener('click',function(obj){
	alert("div1")
},true);//如果未false则为事件冒泡，不填的话，默认false
div2.addEventListener('click',function(obj){
	alert("div2")
},true);
div3.addEventListener('click',function(obj){
	alert("div3")
},true);
```


这里将第三个参数设为true，指定事件处理机制为事件捕获。此时再次单击div3时，会依次弹出div1, div2, div3

顺序是由外到里。

而IE中只有事件冒泡，且没有addEventListener事件，取而代之的是attachEvent。



# 阻止冒泡方法1
```
function stopBubble(event) {
	if(window.event) {
		window.event.cancelBubble = true
	} else {
		event.stopPropagation()
	}
}

```



# 方法2不阻止，直接判断当前点击的是那个元素（不推荐）

```
window.onload = function() {
	document.getElementById("div1").addEventListener("click", function() {
		if(event.target == event.currentTarget) {
			console.log("我是div1被点击了")
		}
	})
	document.getElementById("div2").addEventListener("click", function() {
		if(event.target == event.currentTarget) {
			console.log("我是div2被点击了")
		}
	})
	document.getElementById("div3").addEventListener("click", function() {
		if(event.target == event.currentTarget) {
			console.log("我是div3被点击了")
		}
	})
}
```


# 方法3 div1下面的所有都在这里统一处理

```
window.onload = function() {
	document.getElementById("div").addEventListener("click", function() {
		let eTarget = event.target;
		switch(eTarget.id) {
			case "div1":
			console.log("点击的div1")
			break;
			
			case "div2":
			console.log("点击的div2")
			break;
			
			case "div3":
			console.log("点击的div3")
			break;
		}
		event.stopPropagation()
	})
}
```

> 其实这种元素本身触发事件，但是事件执行的方法不在元素本身，而是在其父元素的某个节点上，这种“偷懒”的模式，叫做事件委托。




# 拓展 (阻止默认事件)

> 像submit这类的表单元素，都会绑定默认事件，如果不阻止默认事件，则绑定的其他方法也会无效。使用方法如下（兼容IE）：


```
function stopDefaultEvent(event) {
	if(window.event) {
		window.event.returnValue = false
	} else {
		event.preventDefault()
	}
}
```