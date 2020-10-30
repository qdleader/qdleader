# vue3 中的watch


> 接受三个参数：
> 参数1：监听的数据源 （可以为一个ref或者一个函数）
> 参数2： 回调函数 （newValue, oldValue） => {}
> 参数3： 深度监听或立即执行的配置（deep: true, imediate: true）



首先展示ref 监听的常规写法：
```
<template>
  <div>
  {{qdleader}}
      <button @click="changeData"></button>
  </div>

</template>

<script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const qdleader = ref('qdleader')
    const changeData = () => {
      qdleader.value = "我变了"
    }
    watch(qdleader,(newValue,oldValue) => {
        console.log("qdleader发生变化时候",newValue,oldValue)
      })
    return {
      qdleader,
      changeData
    }
  }
}
</script>
```

2.在state 的写法中怎么用呢？
注意在这里你直接写state.qdleader是不好使的，你要写() => state.qdleader
```
<template>
  <div>
  {{qdleader}}
  <button @click="changeData"></button>
  </div>
</template>

<script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      changeData: () => {
        state.qdleader = '我变了'
      }
    }

    watch(() => state.qdleader,(newValue,oldValue) => {
        console.log("qdleader发生变化时候",newValue,oldValue)
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
```


那什么时候用第三个参数呢？怎么用呢？


```
<template>
  <div>
  {{qdleader}}
  <button @click="changeData"></button>
  </div>
</template>

<script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      a:{
        b:''
      },
      changeData: () => {
        state.a.b = '我变了'
      }
    }

    watch(() => state.a,(newValue,oldValue) => {
        console.log("qdleader发生变化时候",newValue,oldValue)
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
```
当我们监听对象属性时候，监听a，当a对象中的b发生变化时候，我们会发现，我们根本监听不到。

这时我们的第三个属性就闪亮登场了。

```
<template>
  <div>
  {{qdleader}}
  <button @click="changeData"></button>
  </div>
</template>

<script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      a:{
        b:''
      },
      changeData: () => {
        state.a.b = '我变了'
      }
    }

    watch(() => state.a,(newValue,oldValue) => {
        console.log("qdleader发生变化时候",newValue,oldValue)
    },{
        deep:true, //深度监听
        imediate:true,//一进页面就监听
      })
    return {
      ...toRefs(state)
    }
  }
}
</script>
```

那么如何监听多个属性呢？
```
<template>
  <div>
  {{qdleader}}
  <button @click="changeData"></button>
  </div>
</template>

<script>

import {ref, toRefs, watch, reactive} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      content:'',
      a:{
        b:''
      },
      changeData: () => {
        state.qdleader = '我变了'
        state.content = '我变了'
      }
    }

    watch(() => [state.qdleader,state.content],([qdleader,content]) => {
        console.log("qdleader发生变化时候",qdleader,content)
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
```


当我们要写多个监听方法时候可以写多个watch吗，会覆盖吗。。

直接在下面写就可以，不会覆盖的。

另外我们在这里介绍一个跟watch 类似的一个api

watchEffact


```
<template>
  <div>
  {{qdleader}}
  <button @click="changeData"></button>
  </div>
</template>

<script>

import {ref, toRefs, watch, reactive, watchEffact} from 'vue';

export default {
  setup() {
    const state = {
      qdleader:'qdleader',
      content:'',
      a:{
        b:''
      },
      changeData: () => {
        state.qdleader = '我变了'
        state.content = '我变了'
      }
    }

    watchEffact(() => {
      console.log(state.qdleader,'改变了')
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
```

## watchEffact与watch的区别：
> 1、watch 是需要传入侦听的数据源，而 watchEffect 是自动收集数据源作为依赖。

> 2、watch 可以访问侦听状态变化前后的值，而 watchEffect 不可。

> 3、watch 是属性改变的时候执行，而 watchEffect 是默认会执行一次，然后属性改变也会执行。
