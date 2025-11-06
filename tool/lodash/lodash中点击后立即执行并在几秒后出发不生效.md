
# lodash中点击后立即执行并在几秒后出发不生效
```js
const goClueDetail = throttle(() => {
				console.log(555);
		},3000,{ leading: true, trailing:false });

```
