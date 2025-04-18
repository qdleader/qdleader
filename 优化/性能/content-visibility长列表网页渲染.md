# content-visibility 长列表网页渲染

content-visibility。只需要一行 CSS 代码，就可以实现可见网页只加载可见区域内容，使网页的渲染性能得到数倍的提升！

content-visibility 属性有三个可选值:

visible: 默认值。对布局和呈现不会产生什么影响。
hidden: 元素跳过其内容的呈现。用户代理功能（例如，在页面中查找，按 Tab 键顺序导航等）不可访问已跳过的内容，也不能选择或聚焦。类似于对其内容设置了 display: none 属性。
auto: 对于用户可见区域的元素，浏览器会正常渲染其内容；对于不可见区域的元素，浏览器会暂时跳过其内容的呈现，等到其处于用户可见区域时，浏览器在渲染其内容。

## 兼容性

content-visibility 是 chrome85 版本开始支持的。

## 问题

当元素的部分内容如<img />标签这种，元素的高度是有图片内容决定的，因此在这种情况下，如果使用 content-visibility，则可见视图外的 img 初始未渲染，高度为 0，随着滚动条向下滑动，页面高度增加，会导致滚动条的滚动有问题。

## 解决办法

果在已知元素高度的情况下，可以使用 contains-intrinsic-size 属性，为上面的 card 添加：contains-intrinsic-size：312px;，这会给内容附一个初始高度值。（如果高度不固定也可以附一个大致的初始高度值，会使滚动条问题相对减少）。
修改代码如下:

```html
<style type="text/css">
  .card {
    margin-bottom: 10px;
    content-visibility: auto;
    contain-intrinsic-size: 312px; // 添加此行
  }
</style>
```

部分场景下它对浏览器的滚动条影响问题，如果你的列表项高度相同，那么可以通过 contain-intrinsic-size 来设置一个初始高度解决。如果列表项高度不固定而又非常重视用户的滚动条体验，那么不建议使用此属性
