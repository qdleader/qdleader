#为 v-for 设置key

以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为。


bad
```
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```


good
```
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
data: function () {
  return {
    todos: [
      {
        id: 1,
        text: '学习使用 v-for'
      },
      {
        id: 2,
        text: '学习使用 key'
      }
    ]
  }
}
```


未完待续。。