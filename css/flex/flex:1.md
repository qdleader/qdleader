# flex:1

flex:1 是 CSS 中用于设置弹性盒子（flex box）布局的属性。它表示弹性盒子容器中的项目将占据剩余的可用空间。

## 语法

```css
flex: 1;
```

## 示例

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

一个值的情况

```css
.item {
  flex: 1;
  /* flex: 1 1 0px */
}
```

上面默认对应的值是 1 1 0，也就是 flex-grow: 1，flex-shrink:1, flex-basic: 0。

两个值的情况

```css
.item {
  flex: 1 1;
  /* flex: 1 1 0px */
}
```

上面对应的值是 1 1 0，也就是 flex-grow: 1，flex-shrink:1, flex-basic: 0。

一个长度值
如果 flex 值是一个长度值，这会作用于 flex-basis。flex-grow 和 flex-shrink 默认为 1。

```css
.item {
  flex: 100px;
  /* flex: 1 1 100px */
}
```

使用无单位 0
有时，你想把 flex-basis 设置为 0，你可能会这样写：

```css
.item {
  flex: 0;
}
```

不建议这样做，因为让开发人员和浏览器感到困惑。你到底是要把 flex-grow 或者 flex-shrink 设置为 0，还是将 flex-basis 设置为 0。

所以，你应该添加一个单位，如 px 或%。

```css
.item {
  flex: 0%;
  /* flex: 1 1 0% */
}
```

flex:initial
等同于设置 flex: 0 1 auto，可以理解为 flex 属性的默认值。

flex:none
等同于设置 flex: 0 0 auto，可以理解为 flex 属性的最小值。

可以看到应用了 flex:0 的元素全部高高耸起，一柱擎天，表现为最小内容宽度；而应用了 flex:none 的元素则无视容器的尺寸限制，直接溢出容器，没有换行，表现为最大内容宽度。
