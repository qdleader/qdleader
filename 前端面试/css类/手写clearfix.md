# 手写clearfix
```css
.clearfix:after {
  content:'';
  display:table;
  clear:both;
}

<!-- 兼容IE 低版本 -->
.clearfix {
  *zoom:1
}

```
