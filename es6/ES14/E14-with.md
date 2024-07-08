# E14-with
## Array with()


// 以 Array.with() 为例， 之前如果想修改数组某个元素的值需要 arr[2] = 3;

// 这会带来突变，这不纯！

而有了无突变的数组方法后，可以这样写

```js
const arr = [5, 4, 7, 2, 1];
const replaced = arr.with(2, 3);

console.log(replaced);  // [5, 4, 3, 2, 1]
```
