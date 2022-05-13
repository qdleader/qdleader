vue3里面没有了全局的时间过滤器了，我给大家提供两种解决方案。

# 1. 挂载到全局属性globalProperties上面


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5fe9a4d586242ddb7f4a1df9e92ae06~tplv-k3u1fbpfcp-watermark.image?)
在utils，新建filters文件。
里面内容

```
export default {
    formatTime(date?:any, type = 'yyyy-MM-dd hh:mm') {
        if (!date) return
        let time = new Date(date)
        let res;
        if (type === 'yyyy-MM-dd hh:mm') {
            res = `${time.getFullYear()}-${time.getMonth()+ 1}-${time.getDate()} ${addZero(time.getHours())}:${addZero(time.getMinutes())}`
        } else if(type === 'yyyy-MM-dd') {
            res = `${time.getFullYear()}-${time.getMonth()+ 1}-${time.getDate()}`
        }
        return res
    },
}
function addZero (num:number) {
    if (num < 10) { return '0' + num }
    return num
}
```

然后在main.ts 里面引入

```
import filters from './utils/filters'
const app = createApp(App)
app.config.globalProperties.$filters = filters
app.mount('#app')

```

在页面中用时候,直接用就好，还是比较方便的。
```
{{$filters.formatTime(lastEditTime)}}
```

第一种就over了

下面呢，我来看另一种


# 2. 结合 hooks来实现

新建 一个 

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96416649f3d844ffbaed140e5429dc93~tplv-k3u1fbpfcp-watermark.image?)


```
// useTime.ts
import { ref, watch } from "vue";
export function useTime(date?:any, type = 'yyyy-MM-dd hh:mm', isWrap?:Boolean) {
    const formatTime = (date:any, type = 'yyyy-MM-dd hh:mm', isWrap:Boolean) => {
    /*
            date: 传入的时间戳
            type: 传入的时间格式
            isWrap: 时间结尾处是否换行
        */
    if (!date) return
    let time = new Date(date)
        let res;
        if (type === 'yyyy-MM-dd hh:mm') {
            res = `${time.getFullYear()}-${time.getMonth()+ 1}-${time.getDate()} ${addZero(time.getHours())}:${addZero(time.getMinutes())}`
        } else if(type === 'yyyy-MM-dd') {
            res = `${time.getFullYear()}-${time.getMonth()+ 1}-${time.getDate()}`
        }
        return res
    }
    function addZero (num:number) {
        if (num < 10) { return '0' + num }
        return num
    }
    return {
        formatTime,
    };
}

```

在 .vue 中的使用
```
<template>
  <div>
     {{formatTime(lastEditTime)}}
  </div>
</template>



<script lang="ts">
import { defineComponent,onMounted,reactive,ref,toRefs} from "vue";
import {useTime} from '@/hooks/useTime' 
export default defineComponent({
  name: "User",
  setup() {
    const data = reactive({
      nameList:[],// 商品名称列表
      currentPage:1,
      pageSize:10,
      lastEditTime:1652362534412,
      formatTime:useTime().formatTime,
    })
    const refData = toRefs(data);
    return {
        ...refData
    }
  }
});
</script>
<style lang="scss" scoped>

</style>


```







