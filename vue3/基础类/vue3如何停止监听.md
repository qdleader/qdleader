# vue3 watch 停止监听以及重新开始监听

vue3的watch终止监听，只需要将watch赋值给一个变量，当达到条件调用watch赋值的那个变量就可以终止监听了。
```js
<template>
  <div>
    {{ data.val }}
    <button @click="add">加一</button>
  </div>
</template>
<script setup lang="ts">
import { watch, reactive } from "vue";
let data = reactive({
  val: 2,
});
const flag = watch(
  () => data.val,
  (val: any) => {
    console.log(val); // 3456
    if (val >= 6) {
      // 只要将 flag 声明的函数调用就可以结束监听了
      flag();
    }
  },
  { deep: true }
);
 
function add() {
  data.val++;
}
</script>
```

开启监听：把监听器重新赋值给变量
```js
flag = watch(
  () => data.val,
  (val: any) => {
    console.log(val); // 3456
  },
  { deep: true }

```

## vue2 中
```js
export default {
  data() {
    return {
      formData: {
        name: '',
        age: 0
      }
    }
  },
  created() {
    this.$_loadData()
  },
  methods: {
    // 模拟异步请求数据
    $_loadData() {
      setTimeout(() => {
        // 先赋值
        this.formData = {
          name: '子君',
          age: 18
        }
        // 等表单数据回填之后，监听数据是否发生变化
        const unwatch = this.$watch(
          'formData',
          () => {
            console.log('数据发生了变化')
          },
          {
            deep: true
          }
        )
        // 模拟数据发生了变化
        setTimeout(() => {
          this.formData.name = '张三'
        }, 1000)
      }, 1000)
    }
  }
}
```

根据上例可以看到，我们可以在需要的时候通过this.$watch来监听数据变化。那么如何取消监听呢，上例中this.$watch返回了一个值unwatch,是一个函数，在需要取消的时候，执行 unwatch()即可取消
