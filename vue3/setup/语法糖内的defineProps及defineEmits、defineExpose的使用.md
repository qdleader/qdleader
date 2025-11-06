# 语法糖内的defineProps及defineEmits、defineExpose

## defineProps

获取父组件传值
```ts
<template>
  <h1>{{ msg }}</h1>
  <div @click="clickThis">1111</div>
</template>

<script setup lang="ts">
  defineProps<{ // 采用ts专有声明，无默认值
    msg: string,
    num?: number
  }>()
     // 采用ts专有声明，有默认值
    interface Props {
        msg?: string
        labels?: string[]
    }
    const props = withDefaults(defineProps<Props>(), {
        msg: 'hello',
        labels: () => ['one', 'two']
    })
    
  defineProps({ // 非ts专有声明
    msg: String,
    num: {
      type:Number,
      default: ''
    }
  })
</script>
```

## defineEmits

子组件向父组件事件传递

```ts
<template>
  <div @click="clickThis">点我</div>
</template>

<script setup lang="ts">
    /*ts专有*/
  const emit= defineEmits<{
    (e: 'click', num: number): void
  }>()
    /*非ts专有*/
  const emit= defineEmits(['click'])
  
  const clickThis = () => {
    emit('click',2)
  }
</script>

<style scoped lang="less">
</style>

```

## defineExpose

组件暴露自己的属性
```ts
<template>
  <div>子组件helloword.vue</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(123456)
defineExpose({
  count
})
</script>

<style scoped lang="less">
</style>

<template>
  <div @click="helloClick">父组件</div>
  <helloword ref="hello"></helloword>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import helloword from './components/HelloWorld.vue'
const hello = ref(null)
const helloClick = () => {
  console.log(hello.value.count) // 123456
}
</script>

```
