# element 中 el-select 下拉框位置错乱问题

el-select 下拉框默认插入到 body 中的，出现这个问题就不能插入到 body 中，官网提供了一个属性 popper-append-to-body（当下拉框样式出现问题时设置为 false）：

```js
:popper-append-to-body="false"
```

只是设置属性不插入到 body 中显然不能解决问题，所以还需要调整 css 样式

```css
/deep/.el-select-dropdown {
  position: absolute !important;
  top: 50px !important;
  left: 0 !important;
}
```

修改两个地方解决下拉框位置错乱
