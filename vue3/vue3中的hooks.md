


> 将可复用功能抽离为外部JS文件

> 函数名/文件名以use开头，形如：useXX

> 引用时将响应式变量或者方法显式解构暴露出来如：const {nameRef，Fn} = useXX()
（在setup函数解构出自定义hooks的变量和方法）



## 加法 hook

```
import { ref, watch } from 'vue';
const useAdd= ({ num1, num2 })  =>{
    const addNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        addFn(num1, num2)
    })
    const addFn = (num1, num2) => {
        addNum.value = num1 + num2
    }
    return {
        addNum,
        addFn
    }
}
export default useAdd


```


## 减法 hook
```
//减法功能-Hook
import { ref, watch } from 'vue';
export function useSub  ({ num1, num2 }){
    const subNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        subFn(num1, num2)
    })
    const subFn = (num1, num2) => {
        subNum.value = num1 - num2
    }
    return {
        subNum,
        subFn
    }
}

```


在组建中使用：
```
<template>
    <div>
        num1:<input v-model.number="num1" style="width:100px" />
        <br />
        num2:<input v-model.number="num2" style="width:100px" />
    </div>
    <span>加法等于:{{ addNum }}</span>
    <br />
    <span>减法等于:{{ subNum }}</span>
</template>
​
<script setup>
import { ref } from 'vue'
import useAdd from './useAdd.js'     //引入自动hook 
import { useSub } from './useSub.js' //引入自动hook 
​
const num1 = ref(2)
const num2 = ref(1)
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)


//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { subNum, subFn } = useSub({ num1, num2 })
subFn(num1.value, num2.value)
</script>
​

```


## Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量


算平均的Hook

```
//平均功能-Hook
import { ref, watch } from "vue";
export function useAverage(addNum) {
  const averageNum = ref(0);
  watch(addNum, (addNum) => {
    averageFn(addNum);
  });
  const averageFn = (addNum) => {
    averageNum.value = addNum / 2;
  };
  return {
    averageNum,
    averageFn,
  };
}

```


组件内使用
```
//组件内
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)//主动调用，返回最新addNum


//平均功能-自定义Hook- hook传入参数值来其他hook暴露出来的变量
const { averageNum, averageFn} = useAverage(addNum)
averageFn(addNum.value)

```

Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量，这提高了Vue3在抽象逻辑方面的灵活性。



### 3、Mixin同名变量会被覆盖，Vue3自定义Hook可以在引入的时候对同名变量重命名

```
Vue3自定义Hooks
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { totalNum:addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)

//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { totalNum:subNum, subFn } = useSub({ num1, num2 })
subFn(num1.value, num2.value)

```
> 在Vue3自定义Hooks中，虽然加法和减法Hooks都返回了totalNum，但是利用ES6对象解构很轻松给变量重命名