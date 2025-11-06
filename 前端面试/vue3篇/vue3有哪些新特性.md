# vue3有哪些新特性
## 1.组合式API（composition API）

为什么使用composition API

> options API的组件，比如在A组件中定义了B/C组件的data，methods，生命周期方法，computed，各个逻辑分散在组件的不同区域，代码难以复用，使用composition API解决了这个问题，可以做到高内聚、低耦合，代码可复用性和可维护性更好

> 更好的类型推断，对Typescript更友好
> composition API看不到this的使用，解决了this指向不明的问题

## 2、生命周期变化

创建：beforeCreate和created被setup替代了

挂载：onBeforeMount onMounted

更新：onBeforeUpdate onUpdated

销毁：onBeforeUnmount onUnmounted

## 2.teleport

Teleport类似于React的Portal，可以将组件挂载在任何DOM节点上
```js
<button @click="openToast">打开toast</button>
// <!--挂载在id为dialog的节点上-->
<teleport to="#dialog">
  <div v-if="visible" class="toast-container">
    <div class="toast-msg">我是一个toast</div>
  </div>
</teleport>
```

## 3.Fragment

Fragment组件支持多个根节点，作用：减少标签层级，减少内存占用
```js
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>
```

diff算法优化

createRenderer

3、响应式原理变化

用Proxy代理配合Reflect反射代替了v2中的Object.defineProperty()实现数据的响应式

4、更好的支持TS

因为源码用TS写的

5、新增内置组件

Fragment(片段)、Teleport(瞬移)、Suspense(不确定)

6、新的脚手架工具vite

7、可以设置多个根节点

8、重写虚拟DOM的实现和Tree-Shaking，渲染速度更快、打包体积更小

9、移除了一些东西

    移除v-on的键盘修饰符
    移除过滤器filter
