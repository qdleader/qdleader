去除字符串里面的html标签的正则公式


```js
var filterHTMLTag = function (str) {
        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
        str=str.replace(/ /ig,'');//去掉 
        return str;
	}

```