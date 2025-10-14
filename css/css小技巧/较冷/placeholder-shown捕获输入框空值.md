# 6. :placeholder-shown：捕捉输入框 “空状态”

```css
 input {
  width: 100%;
  padding: 10px 36px 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* 1. 空值时占位符半透明 */
input:placeholder-shown {
  opacity: 0.5;
}

/* 2. 空值时显示提示图标 */
.tip-icon {
  display: none;/* 默认隐藏 */
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: url('data:image/svg+xml;utf8,\<svg xmlns="http://www.w3.org/2000/svg" fill="%23999" viewBox="0 0 24 24">\<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>\</svg>') no-repeat center/contain;
}
input:placeholder-shown + .tip-icon {
  display: inline-block; /* 空值时显示 */
}
```

```html
<div class="container">
  <div class="field">
    <input placeholder="请输入用户名" id="user"/>
    <span class="tip-icon" title="请输入内容"></span>
  </div>
</div>

```