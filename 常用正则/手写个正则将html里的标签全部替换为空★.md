# 手写个正则将html里的标签全部替换为空★

```js
str.replace(/(<(.[^>]*)>)|(&nbsp;)/g,"") 

```

## 去除富文本格式

```js
      // 去除 富文本格式
	let data =document.getElementById(aa).innerHTML;
	data = data.replace(/(\n)/g, "");    
	data = data.replace(/(\t)/g, "");    
	data = data.replace(/(\r)/g, "");    
	data = data.replace(/<\/?[^>]*>/g, "");    
	data = data.replace(/\s*/g, "");  

```
