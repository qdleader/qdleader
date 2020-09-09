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

 未完待续。。






