# will-change 使用优化动画性能

will-change 属性提前通知浏览器元素即将发生的变化，使其可以提前优化资源分配。结合 transform 和 opacity 等硬件加速属性，动画性能显著提升。例如，图片悬停缩放时，通过 will-change: transform 提示浏览器提前准备 GPU 资源，减少卡顿。

```css
.image-container {
  width: 300px;
  height: 300px;
  overflow: hidden;
  will-change: transform;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.image-container:hover {
  transform: scale(1.1);
}
```

更改完成后删除
浏览器为即将发生的变化所做的优化通常会占用机器的很多资源，通常要删除这些优化尽快恢复到正常行为。然而，will-change 覆盖了这一行为，它维持优化的时间比浏览器所做的要长很多。
因此，你应该始终记得在元素变化完成后删除 will-change，这样浏览器就可以恢复优化所占用的资源。
如果在样式表中声明了 will-change，就不可能删除它，这就是为什么建议你用 JavaScript 设置和取消它。通过脚本，你可以向浏览器声明你的修改，然后在修改完成后，通过监听这些修改完成的时间来删除 will-change。
例如，就像我们在上一节的样式规则中所做的那样，你可以监听元素（或其祖先）何时被悬停，然后在鼠标进入时设置 will-change。如果你的元素正在被动画化，你可以使用 DOM 事件 animationEnd 来监听动画何时结束，然后在 animationEnd 被触发时移除 will-change。

```js
// 获取点击时将被动画化的元素，例如
var el = document.getElementById("element");

// 设置元素被悬停时的变化
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // 在动画的关键帧中要改变的可优化的属性
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```
