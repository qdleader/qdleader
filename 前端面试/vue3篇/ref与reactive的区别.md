# ref 和 reactive 区别

ref 与 reactive  是  Vue3  新推出的主要  API  之一，它们主要用于响应式数据的创建。

template 模板中使用的数据和方法，都需要通过 setup 函数 return 出去才可以被使用。
ref 函数创建的响应式数据，在模板中可以直接被使用，在 JS 中需要通过 .value 的形式才能使用。而 reactive 则不需要

ref 函数可以接收原始数据类型与引用数据类型。
reactive 函数只能接收引用数据类型。
ref  底层还是使用  reactive  来做，ref  是在  reactive  上在进行了封装，增强了其能力，使它支持了对原始数据类型的处理。
在  Vue3  中  reactive  能做的，ref  也能做，reactive  不能做的，ref  也能做。

reactive 和 ref 都是用来定义响应式数据的 reactive 更推荐去定义复杂的数据类型 ref 更推荐定义基本类型

# 为什么同样是赋值对象 ref 不会失去响应而 reactive 会?

这是因为 ref 和 reactive 在处理对象赋值时的机制不同：

#### ref 的对象赋值机制

> ref 返回的是一个包装过的响应式对象
> 当赋值时，实际上是创建了一个新的响应式包装
> 类似于深拷贝，重新生成一个全新的响应式对象

```js
let state = ref({ count: 0 });
state.value = { count: 1 }; // 创建新的响应式对象
```

#### reactive 的对象赋值机制

> reactive 返回的是原始对象的引用
> 直接赋值会改变对象引用，导致响应性连接断开
> 类似于浅拷贝，只是改变了指针指向

```js
let state = reactive({ count: 0 });
state = { count: 1 }; // 改变对象引用,失去响应性
```

#### 深入原理

> ref 内部使用了更复杂的包装机制
> reactive 直接基于对象引用
> ref 为了保证响应性，会重新创建响应式代理

#### 推荐解决方案

1. 对于 reactive，修改属性而非整个对象

```js
let state = reactive({ count: 0 });
state.count = 1; // 保持响应性
```

2. 使用 ref 处理对象

```js
let state = ref({ count: 0 });
state.value = { count: 1 }; // 保持响应性
```

3. 使用 Object.assign()

```js
let state = reactive({ count: 0 });
state = Object.assign(state, { count: 1 }); // 保持响应性
```

总之，ref 在对象赋值时更加智能和安全，能够自动维护响应性。

> ref 定义的数据（包括对象）时，返回的对象是一个包装过的简单值，而不是原始值的引用; 就和对象深拷贝一样,是将对象属性值的赋值
> reactive 定义数据（必须是对象），reactive 返回的对象是对原始对象的引用，而不是简单值的包装。
>
> 类似对象的浅拷贝,是保存对象的栈地址,无论值怎么变还是指向原来的对象的堆地址;
> reactive 就算赋值一个新的对象,reactive 还是指向原来对象堆地址

## 拓展

为什么推荐使用 ref 而不是 reactive

reactive 本身具有很大局限性导致使用过程需要额外注意,如果忽视这些问题将对开发造成不小的麻烦;ref 更像是 vue2 时代 option api 的 data 的替代,可以存放任何数据类型,而 reactive 声明的数据类型只能是对象;

先抛出结论,再详细说原因:非必要不用 reactive! (官方文档也有对应的推荐)

1. 给 reactive 赋一整个普通对象/reactive 对象

通常在页面数据回显时,需要将 AJAX 请求获取的对象直接赋值给响应式对象,如果操作不当就导致 reactive 声明的对象失去响应

赋值一个普通对象

```js
let state = reactive({ count: 0 });
//这个赋值将导致state失去响应
state = { count: 1 };
```

赋值一个 reactive 对象

如果给 reactive 的响应式对象赋值普通对象会失去响应,那么给它赋值一个 reactive 的响应式对象不就行了吗?下面试试看

```js
<template>
  {{state}}
</template>    
​
<script setup>
const state = reactive({ count: 0 })
 //nextTick异步方法中修改state的值
nextTick(() => {
  //并不会触发修改DOM  ,说明失去响应了
  state = reactive({ count: 11 });
});
</script>
```

在 nexTick 中给 state 赋值一个 reactive 的响应式对象,但是 DOM 并没有更新!
解决方法:

不要直接整个对象替换,对象属性一个个赋值

```js
let state = reactive({ count: 0 });
//state={count:1}
state.conut = 1;
```

使用 Object.assign

```js
let state = reactive({ count: 0 });
// state =  {count:1}   state失去响应
state = Object.assign(state, { count: 1 });
```

使用 ref 定义对象

```js
let state = ref({ count: 0 });
state.value = { count: 1 };
```

3.直接 reactive 对象解构时

直接解构会失去响应

```js
let state = reactive({ count: 0 });
//普通解构count 和 state.count 失去了响应性连接
let { count } = state;
count++; // state.count值依旧是0
```

解决方案:

使用 toRefs 解构不会失去响应

使用 toRefs 解构后的属性是 ref 的响应式数据

```js
const state = reactive({ count: 0 });
//使用toRefs解构,后的属性为ref的响应式变量
let { count } = toRefs(state);
count.value++; // state.count值改变为1
```
