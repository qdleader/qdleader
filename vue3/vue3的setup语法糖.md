1，前言
<script setup>是在单文件组件中使用Composition API的编译时语法糖。相比于普通的<script>语法，它具有更多优势

更少的样板内容，更简洁的代码
能够使用纯 Typescript 声明 props 和抛出事件
更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)

## 2，基本语法

```
<template>
  <p>{{ name }}</p>
</template>
<script setup lang="ts">
    let name = 'qd'
</script>

```

script里面的代码会被编译成组件setup()函数的内容。这意味着与普通的<script>只在组件被首次引入的时候执行一次不同，<script setup>中的代码会在每次组件实例被创建的时候执行。

注意：当使用<script setup>的时候，任何在<script setup>声明的顶层的绑定 (包括变量，函数，以及import引入的内容) 都能在模板中直接使用，不需要return

## 2响应式
响应式状态需要使用响应式APIs来创建
```
<template>
  <p>{{ name }}</p>
  <p>{{ data.title }}</p>
</template>
<script setup lang="ts">
  import { ref, reactive } from 'vue'
  let name = ref('qd')
  let data = reactive({
    title: 'qd'
  })
</script>
```

## 3组件使用
<script setup>范围里的值也能被直接作为自定义组件的标签名使用，不需要写在conmonent对象里
```
<template>
  <MyComponent />
</template>
<script setup>
    import MyComponent from './MyComponent.vue'
</script>
```

### 3.1，动态组件
由于组件被引用为变量而不是作为字符串键来注册的，在<script setup>中要使用动态组件的时候，就应该使用动态的:is来绑定

```
<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>
<script setup>
    import Foo from './Foo.vue'
    import Bar from './Bar.vue'
</script>
```

### 3.2，递归组件
一个单文件组件可以通过它的文件名被其自己所引用。例如：文件名为Foo.vue的组件可以在其模板中用<Foo/>引用它自己。如果名称冲突了，就需要使用别名。
```
import { Foo as FooBarChild } from './components'
```

## 4，自定义指令
全局注册的自定义指令将以符合预期的方式工作，且本地注册的指令可以直接在模板中使用，就像上文所提及的组件一样。但这里有一个需要注意的限制：必须以 vNameOfDirective的形式来命名本地自定义指令，以使得它们可以直接在模板中使用

```
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>
<script setup>
    const vMyDirective = {
      beforeMount: (el) => {
        // 在元素上做些操作
      }
    }
</script>
```
**### 导入指令**
```
<script setup>
  // 导入的指令同样能够工作，并且能够通过重命名来使其符合命名规范
  import { myDirective as vMyDirective } from './MyDirective.js'
</script>
```

# 5，props
在<script setup>中必须使用defineProps来声明props，它具备完整的类型推断并且在<script setup>中是直接可用的
```
<script setup>
    const props = defineProps({
      foo: String
    })
</script>
```

defineProps 用来接收父组件传来的 props ; defineEmits 用来声明触发的事件。

```
//父组件

<template>
  <my-son foo="qd" @change="childClick" />
</template>

<script lang="ts" setup>
import MySon from "./MySon.vue";

let childClick = (e: any):void => {
  console.log(e); 
};
</script>


//子组件

<template>
  <span @click="sonClick">信息:{{ props.foo }}</span>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps} from "vue";

const emit = defineEmits(["change"]);     // 声明触发事件 change
const props = defineProps({
    foo:{
        type:String,
        default:'qd'
    },
    time:{
        type:String,
        default:'0分钟'
    },
});   // 获取props
console.log(props)

const sonClick = () =>{
    emit('change' , props.foo)
}
</script>


```

### 5.1，TypeScript支持
```
const props = defineProps<{
  foo: string
  bar?: number
}>()
默认值
interface Props {
  msg?: string
  labels?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

## 6，emit
在<script setup>中必须使用defineEmits来声明emits，它具备完整的类型推断并且在<script setup>中是直接可用的


子组件
```

<template>
    <div>
        <h2> 你好-我是子组件</h2>
        <button @click="hander1Click">新增</button>
        <button @click="hander2Click">删除</button>
    </div>
</template>
 
<script lang="ts" setup>
 import {defineEmits} from 'vue'
//  使用defineEmits创建名称，接受一个数组
let emit=defineEmits(['myAdd','myDel'])
let hander1Click=():void=>{
    emit('myAdd','新增的数据')
}
 
let hander2Click=():void=>{
    emit('myDel','删除的数据')
}
</script>
```



父组件
```
<template>
  <div class="home">
    <test-com @myAdd="myAddHander" @myDel='myDelHander'></test-com>
  </div>
</template>
<script lang="ts" setup>
import TestCom from "../components/TestCom.vue"
let myAddHander=(mess):void=>{
  console.log('新增==>',mess);
}
 
let myDelHander=(mess):void=>{
  console.log('删除==>', mess);
}
</script>
```



### 6.1，TypeScript支持
```
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```

## 7，defineExpose暴露
如果在父组件中通过ref='xxx’的方法来获取子组件实例，
子组件使用了script setup语法糖,
则子组件的数据需要用defineExpose 的方式导出，否则不会暴露属性。
```
//父组件

<template>
  <Daughter ref="daughter" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Daughter from "./Daughter.vue";

const daughter = ref(null)
console.log('~daughter',daughter)
console.log('~daughter',daughter.value.msg)
console.log('~daughter',daughter.value.info)
</script>


//子组件

<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts" setup>
import { ref ,defineExpose} from "vue";
const msg = ref('beautify')
let info=reactive({
    like:'喜欢李诗晴',
    age:27
})
defineExpose({
    msg,
    info
})
</script>


```

## 8，useSlots 和 useAttrs
在模板中通过$slots和$attrs来访问它们
```
<script setup>
    import { useSlots, useAttrs } from 'vue'
    const slots = useSlots()
    const attrs = useAttrs()
</script>
```


## 9，与普通的script一起使用
<script setup>可以和普通的<script>一起使用。普通的<script>在有这些需要的情况下或许会被使用到。

无法在<script setup>声明的选项，例如inheritAttrs或通过插件启用的自定义的选
声明命名导出
运行副作用或者创建只需要执行一次的对象
```
<script>
    // 普通 <script>, 在模块范围下执行(只执行一次)
    runSideEffectOnce()
    // 声明额外的选项
    export default {
      inheritAttrs: false,
      customOptions: {}
    }
</script>
<script setup>
    // 在 setup() 作用域中执行 (对每个实例皆如此)
</script>
```



3.2 除了 setup 外新增的


### 新增指令 v-memo
```
v-memod会记住一个模板的子树,元素和组件上都可以使用。
该指令接收一个固定长度的数组作为依赖值进行[记忆比对]。
如果数组中的每个值都和上次渲染的时候相同，则整个子树的更新会被跳过。
即使是虚拟 DOM 的 VNode 创建也将被跳过，因为子树的记忆副本可以被重用。
因此渲染的速度会非常的快。
需要注意得是:正确地声明记忆数组是很重要。
开发者有责任指定正确的依赖数组，以避免必要的更新被跳过。
<li v-for="item in listArr"  :key="item.id"  v-memo="['valueA'，'valueB']">
    {{ item.name   }}
</li>
v-memod的指令使用较少，它的作用是:缓存模板中的一部分数据。
只创建一次，以后就不会再更新了。也就是说用内存换取时间。

```


## style v-bind将span变成红色
```
<template>
  <span> 我是红色 </span>  
</template>
<script setup>
  import { reactive } from 'vue'
  const state = reactive({
    color: 'red'
  })
</script>
<style scoped>
  span {
    /* 使用v-bind绑定state中的变量 */
    color: v-bind('state.color');
  }  
</style>
```
