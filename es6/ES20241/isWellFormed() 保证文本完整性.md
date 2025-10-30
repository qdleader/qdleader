# isWellFormed() 保证文本完整性

## 介绍 
```js
function validateMessage(message) {
  if (message.isWellFormed()) {
    console.log("正在发送消息：", message);
    // 发送消息的代码
  } else {
    console.log("无法发送。消息包含无效字符。");
    // 处理错误的代码
  }
}

validateMessage("Hello! 😊"); // "正在发送消息：Hello! 😊"
validateMessage("Broken message \uD800"); // "无法发送。消息包含无效字符。"

```

避免 encodeURI() 错误

如果传递的字符串格式不正确， encodeURI 会抛出错误。可以通过使用 isWellFormed() 在将字符串传递给 encodeURI() 之前测试字符串来避免这种情况。