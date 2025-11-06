# Array.prototype.findLast()

## 简介

`findLast()` 是 ES2024 新增的数组方法，用于从数组的**末尾**开始查找满足条件的第一个元素。

与 `find()` 相反，`findLast()` 从数组的最后一个元素开始向前遍历，返回第一个满足条件的元素。

## 语法

```js
arr.findLast(callback(element[, index[, array]])[, thisArg])
```

## 参数

- **callback**：为数组中的每个元素执行的函数
  - `element`：当前遍历到的元素
  - `index`（可选）：当前遍历到的索引
  - `array`（可选）：调用 findLast 的数组
- **thisArg**（可选）：执行回调时用作 this 的值

## 返回值

数组中满足提供的测试函数的**最后一个**元素的值。如果没有找到，则返回 `undefined`。

## 使用示例

### 基础示例

`findLast` 方法用于从数组末尾开始查找符合条件的最后一个元素。

## 示例

```js
const tasks = [
  { id: 1, text: "买牛奶", urgent: false },
  { id: 2, text: "支付账单", urgent: true },
  { id: 3, text: "给qd打电话", urgent: false },
  { id: 4, text: "完成任务", urgent: true }
];

const lastUrgentTask = tasks.findLast(task => task.urgent);
console.log("最近的紧急任务：", lastUrgentTask.text);
// 输出：最近的紧急任务：完成任务
```

### 与 find() 的区别

```js
const numbers = [5, 12, 8, 130, 44];

// find() 从前往后查找
const found = numbers.find(num => num > 10);
console.log(found); // 12（第一个大于10的）

// findLast() 从后往前查找
const foundLast = numbers.findLast(num => num > 10);
console.log(foundLast); // 44（最后一个大于10的）
```

## 应用场景

- 查找最新的（最后添加的）符合条件的记录
- 从数组末尾开始搜索，提高某些场景下的查找效率
- 需要获取最后出现的符合条件的元素

## 浏览器兼容性

`findLast()` 是 ES2024 新特性，需要较新版本的浏览器支持。在使用前请确认目标环境的兼容性。
