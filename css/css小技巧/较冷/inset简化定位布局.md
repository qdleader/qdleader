# inset 简化定位布局

## 基本用法

inset 可以同时设置四个方向的值，并且可以单独设置某一个方向的值，例如：

```css
.box {
  position: absolute;
  inset: 10px;
}
```

等同于：

```css
.box {
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
}
```
