# aspect-ratio 优雅控制宽高比

为什么使用 aspect-ratio 属性？
aspect-ratio 属性具有以下重要优点：
1. 保持一致的宽高比
响应式设计要求元素在不同的屏幕尺寸和方向下保持一致的宽高比。aspect-ratio 属性使这一目标变得更加容易，而不需要依赖JavaScript或额外的HTML结构。
2. 自适应媒体内容
对于包含图像、视频或嵌入式媒体的容器，aspect-ratio 可以确保这些内容在不同分辨率下正确显示，而不至于失真或裁剪。
3. 适应文本内容
aspect-ratio 不仅适用于媒体元素，还适用于包含文本的容器。这可以帮助确保文本内容在不同尺寸的屏幕上不至于被挤压或拉伸，保持可读性。


如果元素的宽高都不是auto时，则aspect-ratio 无效，也就是说宽高必须有一个值为 auto。


```css
.box {
    width:60%;
    height:auto;
    aspect-ratio: 16 / 9;
}
```



兼容性写法
虽然浏览器已经逐步支持了，但是支持度尚欠缺，如果想尝试使用的话，可以尝试下面的兼容性写法：
```css
.box {
  width: 4rem;
  aspect-ratio: 1 / 1;
}

@supports not (aspect-ratio: 1 / 1) {
  .box {
    height: 4rem;
    width: 4rem;
  }
}
```
