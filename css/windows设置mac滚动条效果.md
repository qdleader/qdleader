# windows 设置 mac 滚动条效果

```css
body {
  margin: 0;
  overflow: overplay;
  background-color: transparent;
  transition: 0.3s background-color;
}
::-webkit-scrollbar {
  background-color: transparent;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background-color: inherit;
  border-radius: 8px;
  background-clip: content-box;
  border: 2px solid transparent;
}
body[scroll],
::-webkit-scrollbar-thumb:hover {
  transition: 0s;
  background-color: rgba;
}
```

```js
window.addEventListener("scroll", function () {
  this.document.body.toggleAttribute("scroll", true);
  this.timer && this.clearTimeout(this.timer);
  this.timer = setTimeout(() => {
    document.body.toggleAttribute("scroll");
  }, 500);
});
```
