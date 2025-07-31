# Object.fromEntries()

```js
// 假设后端返回的用户信息是键值对数组
const userArray = [
  ["name", "qdleader"],
  ["age", 28],
  ["email", "tom@example.com"],
];
// 使用Object.fromEntries()将键值对数组转为对象
const userObject = Object.fromEntries(userArray);
console.log(userObject);
// {name: 'qdleader', age: 28, email: 'tom@example.com'}
```
