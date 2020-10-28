# vue3中如何封装组件

> 比如封装一个时间组件
## 新建一个nowTime.ts的文件
```
import { ref } from 'vue'

const nowTime = ref("00:00:00")

const getNowTime = () => {
  const now = new Date();
  const h = now.getHours() < 10 ? '0' + now.getHours():now.getHours()
  const m = now.getMinutes() < 10? '0' + now.getMinutes():now.getMinutes()
  const s = now.getSeconds() < 10? '0' + now.getSeconds():now.getSeconds()
  nowTime.value = h + ":" + m +":" + s
  setTimeout(getNowTime,1000)
}

export {
  nowTime,
  getNowTime
}
```

## 在组件中引用

```
<template>
  <div class="about">
    <div>
        {{nowTime}}
    </div>
      <div @click="getNowTime">
            显示当前时间
        </div>
  </div>

</template>

<script lang="ts">
import { ref } from 'vue'
import {nowTime,getNowTime} from '../hocks/useNowTime'

import useUrlAxios from '../hocks/http'
export default {
    name:'about',
    setup() {
        return {
            nowTime,
            getNowTime,
        }
    }
}
</script>

```
