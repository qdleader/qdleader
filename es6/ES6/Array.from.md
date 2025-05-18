# Array.from

Array.from()
将两类对象转为真正的数组：类似数组的对象和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

```js
let arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组

```js
Array.from([1, 2, 3], (x) => x * x);
// [1, 4, 9]
```
