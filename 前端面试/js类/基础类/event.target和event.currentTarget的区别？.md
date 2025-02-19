# event.target 和 event.currentTarget 的区别？

- event.target：触发事件的元素
- event.currentTarget：绑定事件的元素

```js
<div id="div1">
  <button id="btn1">按钮</button>
</div>;

document.getElementById("div1").addEventListener("click", function (e) {
  console.log(e.target); // <button id="btn1">按钮</button>
  console.log(e.currentTarget); // <div id="div1">...</div>
});
```

当点击按钮时，e.target 指向的是按钮，而 e.currentTarget 指向的是 div1。
当点击 div1 时，e.target 和 e.currentTarget 都指向的是 div1。
所以，event.target 和 event.currentTarget 的区别就在于，event.target 指向的是触发事件的元素，而 event.currentTarget 指向的是绑定事件的元素。

另外，event.target 和 event.currentTarget 都是 DOM 元素，所以可以使用 DOM 元素的方法和属性。
