# split 分割多个字符

比如同时用中文，和英文, 分割字符串

```js
const arr = inputValue.split(/[，]|;|[,]/);

```

需要转义的使用[]来转换，比如[+]
