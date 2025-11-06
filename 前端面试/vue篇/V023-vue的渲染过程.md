# V023-vue的渲染过程

调用 compile 函数,生成 render 函数字符串 ,编译过程如下:

parse 函数解析 template,生成 ast(抽象语法树)
optimize 函数优化静态节点 (标记不需要每次都更新的内容,diff 算法会直接跳过静态节点,从而减少比较的过程,优化了 patch 的性能)
generate 函数生成 render 函数字符串

调用 new Watcher 函数,监听数据的变化,当数据发生变化时，Render 函数执行生成 vnode 对象
调用 patch 方法,对比新旧 vnode 对象,通过 DOM diff 算法,添加、修改、删除真正的 DOM 元素

## 1. 初始化（Initialization）

在 Vue 实例被创建时，它会执行一系列的初始化操作：

数据劫持（Reactivity System）：Vue 使用 Object.defineProperty 或 Proxy（在 Vue 3 中）将数据对象转换为 getter/setter，以便在数据变化时能够触发视图更新。
事件系统（Event System）：初始化事件系统，用于处理自定义事件。
生命周期钩子（Lifecycle Hooks）：在这个过程中，Vue 会调用 beforeCreate 和 created 钩子函数。

## 2. 模板编译（Template Compilation）

如果 Vue 实例中存在 template 选项，Vue 会将模板编译为渲染函数（render function）。

编译（Compile）：模板字符串会被编译为渲染函数。这个过程可以在构建阶段通过 vue-loader 完成，也可以在浏览器中完成。
渲染函数（Render Function）：编译后的渲染函数将生成虚拟 DOM（VNode）。

## 3. 虚拟 DOM（Virtual DOM）

虚拟 DOM 是 Vue 的一个核心概念，用于描述视图的结构和内容。

创建 VNode：渲染函数会创建虚拟节点（VNode），这些节点是普通的 JavaScript 对象，描述了真实 DOM 的结构。
diff 算法：在每次数据更新时，Vue 会使用 diff 算法比较新旧 VNode，以确定需要更新的部分。

## 4. 渲染（Render）

将虚拟 DOM 渲染为真实 DOM。

初次渲染（Initial Render）：Vue 会将 VNode 转换为真实 DOM，并插入到页面中。此时会调用 beforeMount 和 mounted 生命周期钩子。
更新渲染（Update Render）：当数据发生变化时，Vue 会重新执行渲染函数生成新的 VNode，并使用 diff 算法比较新旧 VNode，计算出最小的变化，并应用到真实 DOM。此时会调用 beforeUpdate 和 updated 生命周期钩子。

## 5. 销毁（Destroy）

当 Vue 实例被销毁时，会进行清理工作。

清理事件监听器：移除所有事件监听器。
清理子组件：递归销毁所有子组件。
调用生命周期钩子：调用 beforeDestroy 和 destroyed 钩子函数。
Vue 渲染过程的简要示意图
```js
1. Initialization
   - Reactivity System
   - Event System
   - Lifecycle Hooks: beforeCreate, created

2. Template Compilation
   - Compile Template to Render Function
   - Generate Virtual DOM (VNode)

3. Virtual DOM
   - Create VNode
   - Diff Algorithm

4. Render
   - Initial Render
     - beforeMount, mounted
   - Update Render
     - beforeUpdate, updated

5. Destroy
   - Clean up event listeners
   - Destroy child components
   - Lifecycle Hooks: beforeDestroy, destroyed
```

## 代码示例

以下是一个简单的 Vue 实例，展示了初始化、模板编译、渲染和更新的过程：

```js
<div id="app"></div>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script>
  new Vue({
    el: '#app',
    data() {
      return {
        message: 'Hello, Vue!'
      };
    },
    template: '<div>{{ message }}</div>',
    mounted() {
      console.log('Component mounted');
      // Simulate data update
      setTimeout(() => {
        this.message = 'Hello, World!';
      }, 2000);
    },
    updated() {
      console.log('Component updated');
    },
    beforeDestroy() {
      console.log('Component before destroy');
    },
    destroyed() {
      console.log('Component destroyed');
    }
  });
</script>
```

这个简单的示例展示了 Vue 实例的创建、模板编译为渲染函数、数据变化时的视图更新以及组件的生命周期钩子函数。
