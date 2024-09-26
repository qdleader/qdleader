# VC002-vue事件中传入$event，使用e.target和e.currentTarget有什么区别.md

event.currentTarget始终指向事件所绑定的元素,
而event.target指向事件发生时的元素。


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



e.currentTarget（表示不论点击select内的哪个元素，都指向绑定的select那个元素）
e.target （表示指向select标签内，鼠标点击的那个元素）

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