# VC002-vue 事件中传入$event，使用 e.target 和 e.currentTarget 有什么区别.md

currentTarget：事件绑定的元素
target:鼠标触发的元素

event.currentTarget 指向事件所绑定的元素，而 event.target 始终指向事件发生时的元素。

```js
<template>
  <div>
    <select @change="handleChange($event)">
      <option value="1">选项1</option>
      <option value="2">选项2</option>
      <option value="3">选项3</option>
    </select>
  </div>
</template>
```

e.currentTarget（表示不论点击 select 内的哪个元素，都指向绑定的 select 那个元素）
e.target （表示指向 select 标签内，鼠标点击的那个元素）

```js
<template>
  <div>
    <button @click="changeColor($event)">点击按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeColor(event) {
      event.target.style.background = 'red'; // 将被点击的按钮背景颜色改为红色
    }
  }
}
</script>

```
