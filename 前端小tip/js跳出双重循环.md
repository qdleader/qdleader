# js跳出双重循环
```js
let bool =false
 for (let index = 0; index < config.length; index++) {
        const v = config[index]
 	for (let i = 0; i < cache.length; i++) {
 		const e = cache[i]
 		if(e.prop===i.prop){
 			bool = true
 			break //跳出里面这层
 		}
 	}
 	if (bool) {
 		break//跳出外面这层
	}	
 }

当然你可以直接。return直接终止循环，但是同一个函数里面，如果还有后续操作就行不通了

```