

```javascript
	const getValueFromEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
		return e.target.value.replace(/(^\s*)|(\s*$)/g, "");
	};
```


```javascript
    <Form.Item label="团队名称：" getValueFromEvent={getValueFromEvent} name="tenantName" rules={[{ required: true }]}>
        <Input placeholder="请输入团队名称" maxLength={20} />
    </Form.Item>
```