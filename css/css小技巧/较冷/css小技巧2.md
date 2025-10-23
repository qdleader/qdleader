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


## 2. ::marker 伪元素让我们能直接控制列表符号的样式，颜色、尺寸、字体都能自定义。

```css
 /* 定制有序列表符号 */
  ol li::marker {
    color: #e91e63; /* 粉色符号 */
    font-size: 1rem; /* 放大符号 */
    font-weight: bold;
  }

  /* 定制无序列表符号（部分浏览器支持） */
  ul li::marker {
    content: "✨"; /* 用 emoji 当符号 */
  }

```


## is ()：简化多选择器重复写法

```css
/* 传统写法 */
header p,
main p,
footer p {
  margin: 8px 0;
  line-height: 1.6;
}

/* :is() 简化写法 */
:is(header, main, footer) p {
  margin: 8px 0;
  line-height: 1.6;
}

```