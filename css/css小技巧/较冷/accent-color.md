
#  accent-color：一键美化表单元素

原生复选框、单选按钮的默认样式呆板又难改，曾是很多开发者的 “审美痛点”。不过，随着浏览器对 CSS 新特性的支持度越来越好，现在我们可以通过 `accent-color` 来快速美化表单元素，让页面看起来更美观、更现代。
兼容性： Chrome 86+、Firefox 75+、Safari 14+，主流浏览器均支持，可放心使用。

```css
input[type="checkbox"] {
  accent-color: #ff4488; /* 品牌粉色 */
}

/* 美化单选按钮 */
input[type="radio"] {
  accent-color: #2196f3; /* 品牌蓝色 */
}
```

```js
<div class="container">
    <input type="checkbox" name="" id="">
    <input type="radio" name="" id="">
  </div>
```
