# js 优化小技巧 2

## 轻松将 NodeList 转换为数组

```js
const nodesArray = [...document.querySelectorAll("div")];
```

使用扩展运算符将 NodeList 转换为数组，释放数组方法的强大功能。

## 立即将文本复制到剪贴板

```js
navigator.clipboard.writeText("Text to copy");
```

需考虑浏览器兼容性。
