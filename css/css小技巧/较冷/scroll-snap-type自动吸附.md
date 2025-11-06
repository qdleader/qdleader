# scroll-snap-type自动吸附

## 介绍

`scroll-snap-type`属性用于定义滚动容器的滚动捕捉类型，可以控制滚动容器的滚动行为，使得滚动停止时自动吸附到最近的滚动项。

## 使用

```css
.container {
  scroll-snap-type: x mandatory;
}
```

## 示例

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

```css
.container {
  width: 300px;
  height: 200px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.item {
  width: 100px;
  height: 100px;
    scroll-snap-align: start;
}
```

## 注意事项

1. `scroll-snap-type`属性只对滚动容器生效，对滚动项无效。
2. `scroll-snap-type`属性可以接受两个值：`x`和`y`，分别表示水平滚动和垂直滚动。
3. `scroll-snap-type`属性可以接受两个关键字：`mandatory`和`proximity`，分别表示强制吸附和接近吸附。强制吸附表示滚动停止时必须吸附到最近的滚动项，接近吸附表示滚动停止时可以吸附到最近的滚动项。
