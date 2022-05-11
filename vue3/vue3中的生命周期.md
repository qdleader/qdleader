
```
setUp() {
  console.log("1-开始创建组件")

  onBeforeMount(() => {
    console.log("2.组件挂载页面之前执行------onBeforeMount")
  })

  onMounted(() => {
    console.log("3.组件挂载到页面之后执行----onMounted")
  })

  onBeforeUpdate(() => {
    console.log("4.组件更新之前------onBeforeUpdate")
  })

  onUpdated(() => {
    console.log("5.组件更新之后 --------onUpdated")
  })

  onBeforeUunmount(() => {
    console.log("组件卸载之前执行")
  })

  onUnmounted(() => {
    console.log("组件卸载之后执行")
  })

  onActivated(() => {
      console.log("活跃组件onActivated在keep-alive中使用")
  })

  onDeactivated(() => {
      console.log("离开活跃页面onDeactivated 在keep-alive组件中使用")
  })

  onErrorCaptured(() => {
      console.log("当捕获一个来自子孙组件异常时候激活的钩子函数")
  })
}








```

## vue2与vue3生命周期对比

```
// beforeCreate -> use setup()
 // created -> use setup()
 // beforeMount -> onBeforeMount
 // mounted -> onMounted
 // beforeUpdate -> onBeforeUpdate
 // updated -> onUpdated
 // beforeDestroy -> onBeforeUnmount
 // destroyed -> onUnmounted
 // errorCaptured -> onErrorCaptured
```




## vue3新增的两个函数
```
onRenderTracked((event) => {
    console.log("状态跟踪",onRenderTracked)
})

onRenderTriggered((event) => {
  console.log("状态跟踪钩子函数",onRenderTriggered)
})
```
