# css 小技巧

## 1. 更改任何输入字段的光标颜色

```css
input {
  caret-color: red;
}
```

## 2.用一行 CSS 中添加平滑滚动效果

```css
html {
  scroll-behavior: smooth;
}
```

## 3. 更改输入字段的默认颜色

```css
h1 {
  background: url("logo.png");
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

## 4 使任何元素可调整大小

```css
.resize {
  resize: both;
}
```

## 5. 添加任何图像作为光标

```css
.my-cursor {
  cursor: url("image.png"), auto;
}
```

## 设置图片的混合模式

```css
.box {
  background-image: url("image.png");
  background-blend-mode: lighten;
  background-color: purple;
}
```

```css
.pic1 {
  background-image: url("image.png"), linger-gradient(#f09, #09f, #f0f);
  background-blend-mode: lighten;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0, 0 180px;
}

.pic1:hover {
  background-position: 0 0, 0 0;
}
```

## 6. 禁止输入框输入表情

```js
<input type="text" oninput="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')">

```

## 7. 禁止输入框输入空格

```js
<input type="text" oninput="this.value=this.value.replace(/\s+/g,'')">

```

## 快读选中文字

user-select: all

```js

 .g-select-all {
    user-select: all
}
```

## 选中样式优化 -- ::selection

```css
::selection {
  background: red;
  color: white;
}
```

当然，如果你想更进一步，CSS 还有提供一个 ::selection 伪类，可以控制选中的文本的样式（只能控制 color, background, text-shadow），进一步加深效果。

## 字体优化

```css
font-family: "PingFang SC", miui, system-ui, -apple-system, BlinkMacSystemFont, Helvetica
    Neue, Helvetica, sans-serif;
github：font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
  sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
```
