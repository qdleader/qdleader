# css 小技巧2

## 1. currentColor：颜色继承

它会自动继承元素的 color 属性值，让边框、背景等样式与文字颜色同步，完美遵循 “DRY（Don't Repeat Yourself）” 原则，后续修改颜色时也只需改一处。

```css
.container button {
  color: #0066cc; /* 主色调 */
  border: 2px solid currentColor; /* 边框继承文字颜色 */
  background: transparent;
}

/* hover时同步变色 */
.container button:hover {
  color: #f99; /* 加深主色调 */
  /* 边框会自动变成 #f99，无需重复定义 */
}
```