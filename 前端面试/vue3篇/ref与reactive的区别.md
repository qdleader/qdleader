
# ref 和 reactive 区别
ref与reactive 是 Vue3 新推出的主要 API 之一，它们主要用于响应式数据的创建。

template 模板中使用的数据和方法，都需要通过 setup 函数 return 出去才可以被使用。
ref 函数创建的响应式数据，在模板中可以直接被使用，在 JS 中需要通过 .value 的形式才能使用。而reactive则不需要


ref 函数可以接收原始数据类型与引用数据类型。
reactive 函数只能接收引用数据类型。
ref 底层还是使用 reactive 来做，ref 是在 reactive 上在进行了封装，增强了其能力，使它支持了对原始数据类型的处理。
在 Vue3 中 reactive 能做的，ref 也能做，reactive 不能做的，ref 也能做。

reactive 和 ref 都是用来定义响应式数据的 reactive更推荐去定义复杂的数据类型 ref 更推荐定义基本类型

# 为什么同样是赋值对象ref不会失去响应而reactive会?

> ref 定义的数据（包括对象）时，返回的对象是一个包装过的简单值，而不是原始值的引用; 就和对象深拷贝一样,是将对象属性值的赋值
> reactive定义数据（必须是对象），reactive返回的对象是对原始对象的引用，而不是简单值的包装。
> 
> 类似对象的浅拷贝,是保存对象的栈地址,无论值怎么变还是指向原来的对象的堆地址;
> reactive就算赋值一个新的对象,reactive还是指向原来对象堆地址



## 拓展

为什么推荐使用ref而不是reactive

reactive本身具有很大局限性导致使用过程需要额外注意,如果忽视这些问题将对开发造成不小的麻烦;ref更像是vue2时代option api的data的替代,可以存放任何数据类型,而reactive声明的数据类型只能是对象;

先抛出结论,再详细说原因:非必要不用reactive! (官方文档也有对应的推荐)


1. 给reactive赋一整个普通对象/reactive对象

通常在页面数据回显时,需要将AJAX请求获取的对象直接赋值给响应式对象,如果操作不当就导致reactive声明的对象失去响应



赋值一个普通对象
```js
let state = reactive({ count: 0 })
//这个赋值将导致state失去响应
state = {count: 1}
```



赋值一个reactive对象

如果给reactive的响应式对象赋值普通对象会失去响应,那么给它赋值一个reactive的响应式对象不就行了吗?下面试试看


```js
<template>
  {{state}}
</template>    
​
<stcirpt setup>
const state = reactive({ count: 0 })
 //nextTick异步方法中修改state的值
nextTick(() => {
  //并不会触发修改DOM  ,说明失去响应了
  state = reactive({ count: 11 });
});
</stcirpt>
```

在nexTick中给state赋值一个reactive的响应式对象,但是DOM并没有更新!
解决方法:


不要直接整个对象替换,对象属性一个个赋值
```js
let state = reactive({ count: 0 })
//state={count:1}
state.conut = 1 

```

使用Object.assign
```js
let state = reactive({ count: 0 })
// state =  {count:1}   state失去响应
state = Object.assign(state , {count:1})

```

使用ref定义对象

```js
let state = ref({ count: 0 })
state.value={count:1}
```



3.直接reactive对象解构时

直接解构会失去响应

```js
let state = reactive({ count: 0 })
//普通解构count 和 state.count 失去了响应性连接
let { count } = state 
count++ // state.count值依旧是0
```
解决方案:


使用toRefs解构不会失去响应

使用toRefs解构后的属性是ref的响应式数据



```js
const state = reactive({ count: 0 })
//使用toRefs解构,后的属性为ref的响应式变量
let { count } = toRefs(state)
count.value++ // state.count值改变为1
```

