## vue父组件和子组件的生命周期执行顺序


##1.渲染过程顺序：
父组件beforeCreate() -> 父组件created() -> 父组件beforeMount() -> 子组件beforeCreate() ->子组件created() -> 子组件beforeMount() -> 子组件mounted() -> 父组件mounted()

##父组件更新过程：
父组件beforeUpdate() -> 父组件updated()


##子组件更新过程：
父组件beforeUpdate() -> 子组件beforeUpdate() -> 子组件updated() -> 父组件updated()


##3.销毁过程
父组件beforeDestroy() -> 子组件beforeDestroy() -> 子组件destroyed() -> 父组件destroyed()

##总结：
不管是哪种情况，都一定是父组件等待子组件完成后，才会执行自己对应完成的钩子


##拓展有同学问：

那个我要想在所有的页面渲染完毕后进行操作咋办？

你可以在mounted中：
```
this.$nextTick(() => {
	//此时页面已经渲染完毕
	...
})
```