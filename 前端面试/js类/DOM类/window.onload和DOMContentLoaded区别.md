
## window.onload和DOMContentLoaded区别？

## 解析
```
window.addEventListener('load', function () {
    // 页面的全部资源加载完才会执行，包括图片视频等
})



document.addEventListener('DOMContentLoaded', function () {
    //DOM 渲染完即可执行，此时的图片视频可能还没有加载完
})

```



### 补充

当页面加载script时候会等到script里面内容加载完，再执行之后的dom的，

而页面加载到img时候，会直接执行后面的dom，不会等img里面资源加载完了再执行的。
