很简单其实，
比如我们来封装一个empty 空状态的组件


先写个
empty.vue
```
<template>
  <div class="empty">
    <img src="../../assets/img/empty.png" />
    <div class="text">{{ text }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.empty {
  padding: 210px 0;
  text-align: center;
}
.text{
    color: #9e9e9e;
}
</style>

```


然后在 main.ts 中 引入

```
import empty from '@/components/common/empty.vue'

const app = createApp(App)
app.component('iEmpty',empty)
```


在用的组件直接用 即可
```
<iEmpty />

```



