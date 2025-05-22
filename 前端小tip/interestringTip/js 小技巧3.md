# js 小技巧 3

## Array.includes() 快速判断数组是否包含元素，告别循环遍历

```js
// 定义一个水果数组
const fruits = ["apple", "banana", "cherry", "orange"];
// 使用includes()方法判断数组中是否包含'banana'
const hasBanana = fruits.includes("banana");
console.log(hasBanana); // true
```

## Object.keys()、Object.values()、Object.entries() 快速获取对象的键、值、键值对

```js
// 定义一个对象
const person = {
  name: "qdleader",
  age: 30,
  occupation: "developer",
};

// 使用Object.keys()获取对象的键
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "occupation"]

// 使用Object.values()获取对象的值
const values = Object.values(person);
console.log(values); // ["qdleader", 30, "developer"]

// 使用Object.entries()获取对象的键值对
const entries = Object.entries(person);
console.log(entries); // [["name", "qdleader"], ["age", 30], ["occupation", "developer"]]
```
