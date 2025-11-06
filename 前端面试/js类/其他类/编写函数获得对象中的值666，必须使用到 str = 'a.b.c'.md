# 编写函数获得对象中的值666，必须使用到 str = 'a.b.c'

```js
const obj = {
    a:{
        b:{
            c:666
        }
    }
}

var str = 'a.b.c';
```

## 方法一

```js
let getData = (obj,str) => {
  let arr = str.split('.');
  arr.map(item => {
      obj = obj.item
  })
  return obj
}

```
