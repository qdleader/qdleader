# 任意写一个 Closure（闭包）

```js
// 闭包
function closure() {
  let count = 0;
  return {
    add: function () {
      count++;
      console.log(count);
    },
    reduce: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      return count;
    },
  };
}

let c = closure();
c.add(); // 1
c.add(); // 2
c.reduce(); // 1
console.log(c.getCount()); // 1
```
