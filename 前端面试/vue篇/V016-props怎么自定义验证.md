## props 自定义验证

```js
props: {
  num: {
    default:1,
    validator: function(val) {
      // 返回值为true 则验证不通过，报错
      return [
        1,2,3,4,5
      ].indexOf(val) !== -1
    }
  }
}
```
