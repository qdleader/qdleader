```js
var hero = {
	_name: 'john Doe',
	getSelectIdentify: function() {
		return this._name
	}
}
var stoleSecretIdentify = hero.getSelectIdentify;
console.log(stoleSecretIdentify());
console.log(hero.getSelectIdentify());
```



























答案:
```
undefined

'john Doe'
```

解析:

```
因为我们在hero中提取的getSelectIdentify方法,在_name属性不存在的全局上下文中被调用,所以为undefined

那我们能否改进能
当然:
赋值时候绑定一下this即可:
var stoleSecretIdentify = hero.getSelectIdentify.bind(hero);

```