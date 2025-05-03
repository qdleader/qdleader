# ios 滑动后跳转下一页面，点击返回后页面有白屏

```js
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual"; // 改为manual之后，就不会记录滚动位置
}
```
