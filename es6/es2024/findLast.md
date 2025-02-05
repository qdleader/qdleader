# findLast

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