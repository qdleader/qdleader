# V005-vue中$nextTick使用★★★

this.$nextTick 会在所有的dom都加载完毕后，才执行。
```
  <div ref="hello">
      <h1>qdleader</h1>
    </div>


 created() {
      console.log(this.$refs['hello']);
      this.$nextTick(() => {
        console.log(this.$refs['hello']);
      });
 }
```

## 这里打印

undefined

qdleader




2.

```
<template>
  <section>
    <h1 ref="hello">{{ value }}</h1>
    <el-button type="danger" @click="get">点击</el-button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        value: 'qdleader'
      };
    },
    methods: {
      get() {
        this.value = '你好啊';
        console.log(this.$refs['hello'].innerText);
        this.$nextTick(() => {
          console.log(this.$refs['hello'].innerText);
        });
      }
    },
    mounted() {
    },
    created() {
    }
  }
</script>
```


## 打印

qdleader 和 你好呀

> 在方法里直接打印的话， 由于dom元素还没有更新， 因此打印出来的还是未改变之前的值，而通过this.$nextTick()获取到的值为dom更新之后的值

nextTick 实现原理
将传入的回调函数包装成异步任务，异步任务又分微任务和宏任务，为了尽快执行所以优先选择微任务；
nextTick 提供了四种异步方法 Promise.then、MutationObserver、setImmediate、setTimeOut(fn,0)



// 判断当前环境优先支持的异步方法，优先选择微任务
// 优先级：Promise---> MutationObserver---> setImmediate---> setTimeout
// setTimeOut 最小延迟也要4ms，而 setImmediate 会在主线程执行完后立刻执行


先判断是否原生支持promise，如果支持，则利用promise来触发执行回调函数；
否则，如果支持MutationObserver，则实例化一个观察者对象，观察文本节点发生变化时，触发执行所有回调函数。MutationObserver他能监听一个DOM对象上发生的子节点删除、属性修改、文本内容修改等。
如果都不支持，则利用setTimeout设置延时为0。