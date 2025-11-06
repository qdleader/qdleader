# element 小技巧

### 1.el-table 表格内容超出省略
```js
当表格内容过长时，手动添加样式比较麻烦，偷偷告诉你，只需要添加一个 show-overflow-tooltip 就可以搞定。
<el-table-column
  prop="address"
  label="地址"
  width="180"
  show-overflow-tooltip
>
</el-table-column>
```

### 2.el-form 只校验表单其中一个字段
```js
有时候我们需要单独校验一些字段，比如发送验证码，单独对手机号进行校验，可以这样做：
this.$refs.form.validateField('name', valid => {
    if (valid) {
        console.log('send!');
    } else {
        console.log('error send!');
        return false;
    }
})
```

### 3.el-input type=number 输入中文，焦点上移

```js
<style scoped>
::v-deep .el-input__inner {
    line-height: 1px !important;
}
</style>
```

### 4.el-input type=number 去除聚焦时的上下箭头

```js
<el-input class="clear-number-input" type="number"></el-input>

<style scoped>
.clear-number-input ::v-deep input[type="number"]::-webkit-outer-spin-button,
.clear-number-input ::v-deep input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
}
</style>

```
