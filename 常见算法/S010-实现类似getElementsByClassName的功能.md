##S010-实现类似getElementsByClassName的功能

#实现一个函数，查找某个DOM节点下面的包含某个class的所有DOM节点，不允许使用原生的getElementsByClassName

querySelectorAll等原生提供DOM查找函数。

```
function queryClassName(node, name) {
	var starts = '(^|[ \n\r\t\f])',
		ends = '([\n\r\t\f]|$)';
		
	var array = [],
	    regex = new RegExp(starts + name + ends),
		elements = node.getElementsByTagName("*"),
		length = elements.length,
		i = 0,
		element;
	
	while (i < length) {
		element = element[i];
		if(regex.test(element.className)) {
			array.push(element);
		}
		
		i += 1;
	}
	return array;
}
```

方式2：

```
function getAllClassName(attr) {
	let  arr = [];
	let  doms = document.getElementsByTagName("*");
	 for(var i = 0; i < doms.length; i ++) {
		 if(doms[i].className == attr || doms[i].className.indexof(attr + " ") != -1 || doms[i].className.indexOf(" " +attr+ " ") != -1) {
			 arr.push(doms[i])
		 }
		 return arr;
	 }
	 
	 var classNames = getAllClass('ykactive');
	 for(let i = 0; i < classNames.length; i ++) {
		 classNames[i].style.background= 'orange'
	 }
}
```

//未完待续。。