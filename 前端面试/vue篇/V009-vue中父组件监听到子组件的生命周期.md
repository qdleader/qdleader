

# 8.vue中父组件能监听到子组件的生命周期吗

比如有父组件 Parent 和子组件 Child，
如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：

# 方法1 通过 $emit 触发父组件的事件，
```
// Parent.vue
<Child @mounted="doSomething"/>

// Child.vue
mounted() {
  this.$emit("mounted");
}
```
 
 
 # 方法2 可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：

```
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>

doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
},

//  Child.vue
mounted(){
   console.log('子组件触发 mounted 钩子函数 ...');
},    

// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...
1父组件能够监听到子组件的生命周期，通过@hook:进行监听代码如下：

```




（2）callHook函数源码

```
export function callHook (vm: Component, hook: string) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget()
  const handlers = vm.$options[hook] // 选项当中的生命周期函数
  const info = `${hook} hook`
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info)
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  popTarget()
}
```
即每个生命周期钩子函数执行函数为：vm.$emit('hook:' + hook)，前提条件是_hasHookEvent值为true。

（3）_hasHookEvent标志位源码

```
const hookRE = /^hook:/ // 以hook:开头
Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
  const vm: Component = this
  if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
      vm.$on(event[i], fn)
    }
  } else {
    (vm._events[event] || (vm._events[event] = [])).push(fn)
    // optimize hook:event cost by using a boolean flag marked at registration
    // instead of a hash lookup
    if (hookRE.test(event)) {
      vm._hasHookEvent = true
    }
  }
  return vm
}

```


原码解析：

eventsMixin方法是检查v-on监听的事件名是否以hook:开头，如果是则将对应生命同期的`_hasHookEvent`值设置为true；


如果_hasHookEvent为true，则会触发$emit('hook:' + 对应的生命周期钩子)

由此可见，方法二的原理跟方法一其实是一样的.