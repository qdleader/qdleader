# ES2024 使用 RegExp v 标志处理文本

```js
const nameRegex = /^\p{Letter}+$/u;

function validateName(name) {
  if (nameRegex.test(name)) {
    console.log(`${name} 是一个有效的姓名。`);
  } else {
    console.log(`${name} 包含无效字符。`);
  }
}

validateName("John"); // "John 是一个有效的姓名。"
validateName("María"); // "María 是一个有效的姓名。"
validateName("杰克"); // "杰克 是一个有效的姓名。"
validateName("John123"); // "John123 包含无效字符。"
```
