# Flex 布局下文字省略不生效

```html
<div class="wrap">
  <div class="infos">
    <div>Soccer</div>
    <div class="self">QDLEADERQDLEADERQDLEADERQDLEADERQDLEADERQDLEADERQDLEADER</div>
  </div>
  <div class="live">Live</div>
</div>

```

```css
.wrap {
  display: flex;
  align-items: center;
  width: 350px;
  border: 1px dashed #ccc;
  gap: 16px;
}

.infos {
  flex: 1;
  display: flex;
  gap: 8px;
}

.self {
  flex: 1;

   /* 文字超出隐藏 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

在 Flex 布局中，子元素的默认 min-width 是 auto，意味着它会根据内容宽度确定最小值，导致内容不会被压缩。

因此，当 .wrap 的空间不足时，.infos 会拒绝被压缩，从而让内部的 .self 也失去“省略”的机会。
要让 .self 的 text-overflow: ellipsis 生效，必须确保它在空间不足时可以被压缩。
解决方案也很简单：给 .infos 设置 min-width: 0 即可。
这告诉浏览器，“.infos 可以比它内容更窄”，从而允许内部 .self 根据空间自动裁切。

```css
.infos {
  flex: 1;
  display: flex;
  gap: 8px;
  min-width: 0;
}
```
