# user-valid 表单验证

传统的:valid/:invalid 伪类会在页面加载时就触发验证反馈（比如空输入框直接显示红色边框），容易打扰用户。而:user-valid 和:user-invalid 只会在用户与表单交互后（比如输入内容、点击提交）才触发样式，既及时提示错误，又不会过度干扰。

## 1. 基本用法

```css
input {
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #bbb;
  border-radius: 4px;
  transition: border-color .2s, box-shadow .2s;
}

/* 合法 */
input:user-valid {
  border-color: #4caf50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, .2);
}
/* 非法 */
input:user-invalid {
  border-color: #f44336;
  box-shadow: 0 0 0 2px rgba(244, 67, 54, .2);
}

```
