# input 只能输入数字

```js
<Form.Item
  name="phoneNumber"
  rules={[{ required: true, message: "请输入手机号" }]}>
  <Input
    placeholder="请输入手机号"
    maxLength={20}
    onKeyUp={(e) => {
      e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/g, "");
    }}
    prefix={<UserOutlined />}
  />
</Form.Item>
```
