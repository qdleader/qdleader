# v-model 原理
```js
v-model 的本质是语法糖
v-model 本质上不过是语法糖。什么是语法糖？ 语法糖，简单来说就是“便捷写法‘’，计算机只认得 0 和 1 的机器指令，为了方便操作，发明了汇编语言通过汇编指令操作计算机。
javascript复制代码操作：寄存器BX的内容送到AX中
1000100111011000              机器指令
mov ax,bx                     汇编指令

那么相对于机器指令，汇编语言就是语法糖，基于此，我们可以认为所有的高级编程语言都是语法糖，都是为了方便我们操作使用。通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会。比如我们 JavaScript  中的 async 和 await。
我们通过上一篇《12. 组件 v-model 的封装实现原理及 Input 组件的核心实现》文章就可以知道 v-model 的本质是进行双向数据绑定，而为了进行双向数据绑定，还需要进行大量的操作，简单来说就是通过监听用户的输入事件来更新对应的数据的。而不同的表单元素对应的输入事件则是不一样的，比如 input 标签可以监听 input、change，但 select 标签则没有 input 事件。通过 v-model 我们可以忽视这些不同标签元素的不同 API 的差异性，全部交给 Vue 底层去处理。那么从这个角度来说 v-model 确实是语法糖，它可以很方便我们去进行双向数据绑定。
此外 v-model 并不能应用到所有的 HTML 标签元素，它只能应用在一些特定的表单元素上，例如：input、select、textarea。接下来我们就对 v-model 应用在不同原生 HTML 元素上后编译后的 render 函数进行分析，看看 v-model 的背后 Vue 底层到底做了些什么。
普通文本输入框 input：
html复制代码<input v-model="state">

编译后的 render 函数：
javascript复制代码import { vModelText as _vModelText, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _withDirectives((_openBlock(), _createElementBlock("input", {
    "onUpdate:modelValue": $event => ((_ctx.state) = $event)
  }, null, 8 /* PROPS */, ["onUpdate:modelValue"])), [
    [_vModelText, _ctx.state]
  ])
}

textarea 文本域输入框
html复制代码<textarea v-model="state"></textarea>

编译后的 render 函数：
javascript复制代码import { vModelText as _vModelText, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _withDirectives((_openBlock(), _createElementBlock("textarea", {
    "onUpdate:modelValue": $event => ((_ctx.state) = $event)
  }, null, 8 /* PROPS */, ["onUpdate:modelValue"])), [
    [_vModelText, _ctx.state]
  ])
}

单项选择框 radio
html复制代码<input type="radio" v-model="state">

编译后的 render 函数：
javascript复制代码import { vModelRadio as _vModelRadio, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _withDirectives((_openBlock(), _createElementBlock("input", {
    type: "radio",
    "onUpdate:modelValue": $event => ((_ctx.state) = $event)
  }, null, 8 /* PROPS */, ["onUpdate:modelValue"])), [
    [_vModelRadio, _ctx.state]
  ])
}

复选框 checkbox：
html复制代码<input type="checkbox" v-model="state">

编译后的 render 函数：
javascript复制代码import { vModelCheckbox as _vModelCheckbox, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _withDirectives((_openBlock(), _createElementBlock("input", {
    type: "checkbox",
    "onUpdate:modelValue": $event => ((_ctx.state) = $event)
  }, null, 8 /* PROPS */, ["onUpdate:modelValue"])), [
    [_vModelCheckbox, _ctx.state]
  ])
}

下拉选择框 select：
html复制代码<select v-model="state"></select>

编译后的 render 函数：
javascript复制代码import { vModelSelect as _vModelSelect, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _withDirectives((_openBlock(), _createElementBlock("select", {
    "onUpdate:modelValue": $event => ((_ctx.state) = $event)
  }, null, 8 /* PROPS */, ["onUpdate:modelValue"])), [
    [_vModelSelect, _ctx.state]
  ])
}

我们可以看到如果标签元素使用了 v-model 指令则在编译后的 render 函数中需要使用 withDirectives 函数进行处理相关指令，也就是往虚拟 DOM 中添加指令。具体是 input 和 textarea 表单元素使用的指令都是 vModelText，单项选择框 radio 使用的指令是 vModelRadio，复选框 checkbox 使用的指令是 vModelCheckbox，下拉选择框 select 使用的指令是 vModelSelect。
我们在不同原生表单标签上只需要使用 v-model 指令就可以很方便实现双向数据绑定，但通过观察编译出来的 render 函数就可以看到不同的表单标签使用的指令是不一样的。但通过 v-model 我们就可以全部交给 Vue 底层去处理这些不同标签元素的不同 API 的差异，所以说从这个角度来说  v-model 的本质就是一个语法糖，它可以很方便我们去进行双向数据绑定。
如果我们不使用 v-model 则我们需要自己手动去实现双向数据绑定，而怎么手动实现双向数据绑定我们已经在上一篇文章《12. 组件 v-model 的封装实现原理及 Input 组件的核心实现》中进行了详细讲解。
指令的运行原理
如果特定标签元素使用了 v-model 指令则在编译后的 render 函数中需要使用 withDirectives 函数进行处理相关指令，也就是往虚拟 DOM 中添加指令。
接来下我们对 withDirectives 函数的原理进行分析。
javascript复制代码// packages\runtime-core\src\directives.ts
export function withDirectives(
  vnode,
  directives
): T {
  // 当前渲染的实例对象
  const internalInstance = currentRenderingInstance
  // 通过代理对象可以访问到 setup 的返回值、props 等
  const instance = internalInstance.proxy
  // 这个赋值很意思，充分利用了引用地址相同的原理
  const bindings = vnode.dirs || (vnode.dirs = [])
  for (let i = 0; i < directives.length; i++) {
    // dir 指令对象，value 指令对应的值，arg 参数，modifiers 修饰符(v-model.trim)
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i]
    if (isFunction(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      }
    }
    // 把指令对象绑定到 vnode.dirs 数组中
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    })
  }
  return vnode
}

withDirectives 拥有两个参数，vnode 就是当前节点的虚拟 DOM 对象；directives 是一个由不同指令构成的数组，因为一个元素节点上可以应用多个指令；具体一个数组中的元素按顺序分别对应，dir 指令对象，value 指令对应的值，arg 参数，modifiers 修饰符(v-model.trim)。withDirectives 函数的核心功能就是给当前节点的 vnode 添加一个 dirs 属性，属性值就是这个元素所有应用的指令构成的对象数组。
比如我们上述的普通文本输入框 input 应用 v-model 之后编译的 render 函数中 withDirectives  函数中的第二个参数中的就是一个包含了 vModelText 指令对象的数组。同样其他表单标签对应指令对象分别有 vModelRadio、 vModelCheckbox、vModelSelect。我们下面以 vModelText 指令对象为例，先忽略它的具体实现只是简单看一下它的构成。
javascript复制代码// packages\runtime-dom\src\directives\vModel.ts
export const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
		// ...
    },
    mounted() {
        // ...
    },
    beforeUpdate() {
	    // ...
    }
}

我们可以看到所谓指令本质上就是一个 JavaScript 对象，对象上挂着一些生命周期的钩子函数。这些钩子函数将来在不同的时期被调用执行。从钩子的名称上我们也可以得知它们将在什么时期被执行。
我们知道组件生成了虚拟 DOM 之后就需要进行挂载，那么在挂载的过程中就会在对应的时刻执行对应的指令钩子函数。
指令 created、beforeMount、mounted 生命周期的执行过程
我们前面说过通过指令生命周期钩子函数的名称我们就可以知道它们的执行时期了。很明显 created、beforeMount、mounted 是在元素挂载的时候执行。
我们知道在 Vue3 中元素的挂载函数是 mountElement，我们就可以来看看元素指令调 created、beforeMount、mounted 生命周期函数的用相关的调用执行的过程。
javascript复制代码// packages\runtime-core\src\renderer.ts  
function mountElement(vnode: any, container: any, parentComponent, anchor) {
    // 创建 DOM 元素节点
    const el = (vnode.el = hostCreateElement(vnode.type))
    const { props, children, shapeFlag, dirs } = vnode
    if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
      // 处理子节点是纯文本的情况
      el.textContent = children
    } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      // 处理子节点是数组的情况
      mountChildren(vnode.children, el, parentComponent, anchor)
    }
    if (dirs) {
      /** 执行指令的 created 生命周期的函数 **/
      invokeDirectiveHook(vnode, null, parentComponent, 'created')
    }
    // 处理 props，比如 class、style、event 等属性
    if (props) {
      for (const key in props) {
        const val = props[key]
        hostPatchProp(el, key, null, val)
      }
    }
    if (dirs) {
      /** 执行指令的 beforeMount 生命周期的函数 **/ 
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount')
    }
    // container.append(el)
    // 把创建的 DOM 元素挂载到对应的根节点 container 上
    hostInsert(el, container, anchor)
    
    if (dirs) {
      queuePostFlushCb(() => {
        /** 执行指令的 mounted 生命周期的函数 **/
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted')
      })
    }
 }

这是我 GitHub 上实现的一个 mini-vue3 库中实现，也基本还原了 Vue3 实现过程，但剥离其他繁琐的细节，只实现主流程。GitHub 地址：github.com/amebyte/min…
我们在前面已经知道在 render 函数中已经通过 withDirectives 函数将相关指令对象设置到了 vnode 的 dirs 属性上。所以在元素 vnode 挂载的过程中又会从 vnode 的 dirs 属性中取出来相关的指令对象进行执行。
我们通过上述代码可以清楚看到，元素 vnode 在挂载的时候，先会创建一个真实 DOM 节点引用 el，然后会去判断子节点的情况，如果是文本则去赋值，如果是数组则循环数组节点进行处理。接着就是处理元素的 props，在处理元素的 props 之前，会执行指令的 created 生命周期的函数，在处理完元素的 props 且在元素插入到容器之前，会执行指令的 beforeMount 生命周期的函数，在元素插入容器之后，会通过一个异步函数来执行指令的 mounted 生命周期的函数。总结如下：

created：在绑定元素的 attribute 或事件侦听器被应用之前调用。当指令需要添加一些事件侦听器，且这些事件侦听器需要在普通的 v-on 事件侦听器前调用时，可以利用此钩子函数。
beforeMount：当指令第一次绑定到元素，在挂载到父节点之前调用。
mounted：在绑定元素的被挂载到父节点后调用且是异步调用执行。

我们还看到指令的生命周期函数的执行是通过调用 invokeDirectiveHook 函数完成的，我们接下来看看它的实现。
javascript复制代码// packages\runtime-core\src\directives.ts
export function invokeDirectiveHook(
    vnode, // 当前 vnode
    prevVNode, // 旧 vnode
    instance, // 组件实例
    name // 指令钩子函数的名称
  ) {
    const bindings = vnode.dirs!
    // 获取旧的指令对象
    const oldBindings = prevVNode && prevVNode.dirs!
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i]
      if (oldBindings) {
        // 把旧的指令对象上 value 值赋值给 oldValue
        binding.oldValue = oldBindings[i].value
      }
      let hook = binding.dir[name]
      if (hook) {
        // 在执行指令生命周期钩子函数之前，先会组装钩子函数的参数，然后传递过去
        const args = [
            vnode.el,
            binding,
            vnode,
            prevVNode
          ]
          hook(...args)
      }
    }
}

invokeDirectiveHook 函数主要是根据指令钩子的函数名称把当前节点的 vnode 上的指令取出来执行一遍。具体就是通过遍历 vnode.dirs 数组，找到每一个指令对应 binding 对象，然后从 binding 对象中根据 name 找到指令定义的钩子函数，如果定义了这个钩子函数则执行它。
在执行指令生命周期钩子函数之前，先会组装钩子函数的参数，然后传递过去，这样在每个指令生命周期的钩子函数里面都可以获取到对应的参数了。按照顺序分别对应第一个参数是当前节点的真实 DOM 的引用，第二个参数则是 withDirectives 函数中封装的包含指令对象相关的参数，比如指令的参数，指令的修饰符等等，第三个则是当前节点的虚拟 DOM，第四个是旧虚拟 DOM。
指令 beforeUpdate、updated 生命周期执行的过程
指令的 beforeUpdate、updated 生命周期函数顾名思义就可以知道它们是在元素更新的时候执行的，具体是因为 v-model 所绑定的状态数据是响应式的，所以状态数据发生了变化就会引起组件的重新渲染。而在 Vue3 中一个元素的更新是通过 patchElement 实现的，所以我们就分析 patchElement 函数中是如何执行指令的钩子函数的。
javascript复制代码  function patchElement(n1, n2, parentComponent, anchor) {
    const { dirs } = n2
    /** 执行指令 beforeUpdate 生命周期函数 **/ 
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate')
    }
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 需要把 el 挂载到新的 vnode
    const el = (n2.el = n1.el)
    // 对比 children，也就是 diff 发生的地方
    patchChildren(n1, n2, el, parentComponent, anchor)
    // 对比 props
    patchProps(el, oldProps, newProps)

    if (dirs) {
      queuePostFlushCb(() => {
        /** 执行指令 updated 生命周期函数 **/ 
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated')
      })
    }
  }

通过上述代码我们可以清楚看到，在更新子节点之前，会执行指令的 beforeUpdate 钩子函数，在更新完子节点之后，会通过异步函数执行指令的 updated 函数。总结如下：

beforeUpdate：在更新包含此指令元素的 vnode 之前调用。
updated：在包含此指令元素的 vnode 及其子元素的 vnode 更新后调用。

指令 beforeUnmount、unmounted 生命周期的执行过程
指令的 beforeUnmount、unmounted 生命周期函数顾名思义就可以知道它们是在元素卸载的时候执行的，而 Vue3 元素的卸载是在 unmount 方法中完成的，我们接下来看看具体的实现过程。
javascript复制代码  const unmount = (
    vnode,
    parentComponent,
    parentSuspense,
    doRemove = false,
    optimized = false
  ) => {
    const { 
        type ,props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs
    } = vnode
	// 是否是元素，是否有指令
    const shouldInvokeDirs = shapeFlag & ShapeFlags.ELEMENT && dirs

    if (shapeFlag & ShapeFlags.COMPONENT) {
      unmountComponent(vnode.component!, parentSuspense, doRemove)
    } else {
	  /** 执行指令 beforeUnmount 生命周期函数 **/ 
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount')
      }

      // 一系列删除节点操作
    }

    if (shouldInvokeDirs) {
      queuePostFlushCb(() => {
        /** 执行指令 unmounted 生命周期函数 **/ 
        shouldInvokeDirs &&
          invokeDirectiveHook(vnode, null, parentComponent, 'unmounted')
      })
    }
  }

unmount 函数的主要作用就是通过递归的方式去遍历删除自身的节点和子节点。
可以看到，在移除元素的子节点之前会执行指令的 beforeUnmount 生命周期函数，在移除子节点和当前节点之后，会通过异步的方式执行指令的 unmounted 生命周期函数。总结如下：

beforeUnmount：在卸载绑定元素的父组件之前调用。
unmounted：在指令与元素解除绑定且父组件已卸载时调用。

小结
我们从一个更宏观的角度来理解指令的执行流程。首先我们简单回顾一下 Vue3 的运行原理，首先 template 是需要被编译成 render 函数，然后在执行 Vue 组件的时候最重要的步骤就是通过执行 render 函数取得 vnode，再通过 vnode 渲染成真实 DOM。如果我们在特定的元素上使用了 v-model 指令之后，在 render 函数中会通过withDirectives 函数将相关指令对象设置到 vnode 的 dirs 属性上，在元素 vnode 挂载的过程中又会从 vnode 的 dirs 属性中取出来相关的指令对象进行执行。
组件挂载过程是同步的，但挂载的生命周期 onMounted 函数的执行则是异步的；组件的更新和生命周期 updated 函数则全是异步的，需要通过 Scheduler 来处理。因为在 onMounted 中有可能去获取其他组件的状态信息，通过异步执行 onMounted 能够确保所有的节点已经全部挂载完毕，而组件的更新通过异步的方式则是为了性能考虑。
同样地我们上面看到指令的 mounted、updated、unmounted 生命周期函数的执行全部通过异步的方式也是基于相同的原理，通过 Scheduler 来处理能更好平衡 Vue 组件本身的生命周期函数的执行顺序。
关于 Vue3 的调度器原理可以查看我这篇《Vue3生命周期Hooks的原理及其与调度器(Scheduler)的关系》文章。
v-model 指令的实现详解
我们通过上文知道 v-model 应用在特定的表单元素标签上会绑定不同的指令对象，具体是 input 和 textarea 表单元素使用的指令都是 vModelText，单项选择框 radio 使用的指令是 vModelRadio，复选框 checkbox 使用的指令是 vModelCheckbox，下拉选择框 select 使用的指令是 vModelSelect。
vModelText 指令
接下来我们进行详细分析  vModelText 指令。vModelTex 指令源码如下：
javascript复制代码export const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        // 获取当前节点 props 中的 onUpdate:modelValue 更新函数
        el._assign = getModelAssigner(vnode)
        // 判断是否数字
        const castToNumber = number || el.type === 'number'
        // 监听当前节点，如果存在 lazy 修饰符则监听 change 事件否则就监听 input 事件。
        addEventListener(el, lazy ? 'change' : 'input', e => {
            // 如果存在 e.target.composing 存在则返回
            if ((e.target as any).composing) return
            let domValue = el.value
            if (trim) {
                // 如果存在 trim 修饰符则执行 trim() 方法去除字符串的头尾空格
                domValue = domValue.trim()
            } else if (castToNumber) {
                // 如果存在 number 修饰符或者是 number 类型的 input 表单则把值转换成数字
                domValue = toNumber(domValue)
            }
            // 更新状态值，也就是用户操作 DOM 后是通过此来反向影响状态值的变化
            el._assign(domValue)
        })
        if (trim) {
            // 如果存在 trim 修饰符则监听 change 事件并且把值通过 trim 方法去除字符串的头尾空格
            addEventListener(el, 'change', () => {
                el.value = el.value.trim()
            })
        }
        if (!lazy) {
            // 利用 compositionstart 和 compositionend 控制中文输入的开始和结束动作
            addEventListener(el, 'compositionstart', onCompositionStart)
            addEventListener(el, 'compositionend', onCompositionEnd)
            addEventListener(el, 'change', onCompositionEnd)
        }
    },
    mounted(el, { value }) {
        // 更新当前节点真实 DOM 的值
        el.value = value == null ? '' : value
    },
    beforeUpdate(el, { value, modifiers: { trim, number } }, vnode) {
        // 获取当前节点 props 中的 onUpdate:modelValue 更新函数
        el._assign = getModelAssigner(vnode)
        // 如果处于中文输入法的控制状态则不进行更新
        if ((el as any).composing) return
        // 通过 document.activeElement 可以获取哪个元素获取到了焦点
        // focus() 方法可以使某个元素获取焦点
        // 如果当前节点是正在被操作也就是获得了焦点就进行相关操作，主要是如果新旧值如果一样则不进行更新操作以节省性能开销
        if (document.activeElement === el) {
            if (trim && el.value.trim() === value) {
                return
            }
            if ((number || el.type === 'number') && toNumber(el.value) === value) {
                return
            }
        }
        const newValue = value == null ? '' : value
            if (el.value !== newValue) {
                // 将状态值更新到真实 DOM 中
                el.value = newValue
        }
    }
}

首先我们通过前文知道指令的 created 生命周期函数是在元素 vnode 创建真实 DOM 引用之后通过 invokeDirectiveHook 函数调用执行的。在调用指令的 created 生命周期函数之前会构造指令生命周期函数所需的参数并传递过来。
按照顺序分别对应第一个参数是当前节点的真实 DOM 的引用，第二个参数则是 withDirectives 函数中封装的包含指令对象相关的参数，比如指令的参数，指令的修饰符等等，第三个则是当前节点的虚拟 DOM，第四个是旧虚拟 DOM。
这样我们就可以在指令的生命周期函数里面获取到当前节点的相关信息了。
created 函数
在指令的 created 函数中我们首先执行这  el._assign = getModelAssigner(vnode) 一行代码，这一行代码主要是获取当前节点 props 中的 v-model 绑定的状态更新函数，我们回顾上文，每一个应用了 v-model 的元素标签，编译成 render 函数之后都会有一个 "onUpdate:modelValue": $event => ((_ctx.state) = $event) 的 props，这个就是当前节点 v-model 绑定的状态更新函数。
javascript复制代码const getModelAssigner = (vnode) => {
    const fn = vnode.props!['onUpdate:modelValue']
    return isArray(fn) ? value => invokeArrayFns(fn, value) : fn
}

有可能存在多个状态更新函数，如果是多个状态更新函数则则封装一个高级函数进行调用处理。
在 Vue 官网中对 v-model 的 lazy 修饰符有以下的介绍：

在默认情况下，v-model 在 input 事件中同步输入框的值与数据 (除了 上述 IME 部分)，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步。

我们通过观察源码可以更深刻理解 lazy 修饰符的作用。当存在  lazy 修饰符则监听当前元素实例的 change 事件，否则就监听 input 事件。input 事件是实时触发的，就是当输入框里的值发生改变就会立即触发，而 change 事件则需要等到失去焦点才触发。
在监听的回调函数中最终目的就是为了去更新 v-model 绑定的状态数据，简单来说就是通过当前真实节点的引用也就是 el 的 value 值来获取最新的 DOM 值，然后再通过上面已经赋值给 el._assign 的 props 中的 onUpdate:modelValue 状态更新函数来进行更新应用状态。这就是用户操作 DOM 后状态数据的变化的流程，也就是从 DOM 到数据的变化过程原理。
此外在更新之前会对当前节点的真实 DOM 的值也就是 el.value，进行判断处理作对应的处理。比如，如果存在 trim 修饰符则执行 trim() 方法去除字符串的头尾空格；如果存在 number 修饰符或者是 number 类型的 input 表单则把值转换成数字。
当不存在 lazy 修饰符的时候，也就是需要实时监听输入的时候，需要利用 compositionstart 和 compositionend 监听控制中文输入的开始和结束动作。因为默认输入框并不知道中文输入法的开始和结束。这个问题在上一篇《12.组件 v-model 的封装实现原理及 Input 组件的核心实现》中也详细探讨过。
具体的做法就是在 compositionstart 事件的回调函数中对当前节点的真实 DOM 引用的 target 属性上设置一个 composing 开关，当 composing 为 true 时，在 input 的事件回调函数中就不去把真实 DOM 的值更新到状态数据上。在 compositionend 事件的回调函数中设置 composing 为 false，并且通过手动触发 input 自定义事件，这样再次触发 input 事件的回调函数时，因为 composing 为 false，所以就会去把真实 DOM 的值更新到状态数据上。
mounted 函数
我们通过上文可以知道 mounted 函数是在绑定元素的被挂载到父节点后通过异步调用执行的，主要是因为组件本身的生命周期函数 onMounted 也是异步执行的，所以元素的指令 mounted 函数也需要异步进行执行，这样才能确保所有的节点都已经被挂载完毕，指令做所用的状态数据是最新的。
vModelText 指令中 mounted 函数所做的事情很简单，就是把 v-model 绑定的状态数据赋值给绑定的表单元素。我们从前面对 withDirectives 函数的分析中可以知道指令生命周期函数的第二个参数中的 value 属性就是 v-model 所绑定的状态数据。
这个也就是初始化的时候 v-model 绑定的数据是怎么被赋值到所绑定的表单元素上的原理。
beforeUpdate 函数
如果我们在程序里面更改了 v-model 所绑定的状态数据，那么最新的状态数据就是通过指令的 beforeUpdate 生命周期函数更新到所绑定的元素上的。具体是因为 v-model 所绑定的状态数据是响应式的，所以其发生了变化就会引起组件的重新渲染。通过上文我们知道元素的更新是通过 patchElement 函数执行的，在 patchElement 函数内部就会去执行指令的 beforeUpdate 生命周期函数。
beforeUpdate 最终做的事情其实跟 mounted 是一样的，就是把数据更新到真实 DOM 上。而 beforeUpdate 中在把数据更新到真实 DOM 上之前会做一系列的性能优化操作，主要是如果状态数据和真实 DOM 的值相同则不进行更新操作。
以上便是 vModelText 指令的实现原理分析总结，接下来我们分析 vModelRadio 指令，有了 vModelText 指令的基础，后面的我们就不进行十分详细的分析了，只做简单的分析。
vModelRadio 指令
vModelRadio 指令源码如下：
javascript复制代码export const vModelRadio = {
    created(el, { value }, vnode) {
      // 给真实 DOM 的 checked 属性赋值
      el.checked = looseEqual(value, vnode.props!.value)
      // 获取当前节点 props 中的 onUpdate:modelValue 更新函数
      el._assign = getModelAssigner(vnode)
      // 单项选择只需要监听 change 事件
      addEventListener(el, 'change', () => {
        // 更新状态值，也就是用户操作 DOM 后是通过此来反向影响状态值的变化
        el._assign(getValue(el))
      })
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
      // 获取当前节点 props 中的 onUpdate:modelValue 更新函数
      el._assign = getModelAssigner(vnode)
      // 新老值是否相等
      if (value !== oldValue) {
        // 将状态值更新到真实 DOM 中
        el.checked = looseEqual(value, vnode.props!.value)
      }
    }
 }

vModelRadio 指令的实现相对还是比较简单的，只需要 created 和 beforeUpdate 两个生命周期就实现了。
created 函数
在分析 created 函数之前，我们先回顾一下单项选择框的使用：
html复制代码<input type="radio" value="1" v-model="state">

我们先会给单项选择表单设置一个 value 值，当 state 的值等于 value 的值的时候，单项选择框处于选中状态，也就是 checked 属性值为 true。
所以在初始化的时候，首先是通过 looseEqual 函数进行处理当前节点真实 DOM 的 checked 属性值，其中第一个参数 value，从前文我们可以知道是 v-model 绑定的值，也就是上面的 state，而 vnode.props.value 则是表单设置的 value 值。也就是判断这两个值是否相等，如果相等就返回 true 赋值给真实 DOM 的 checked 属性上，从而单项选择框处于选中状态。
单项选择只需要监听 change 事件，然后在回调函数中通过获取到的当前节点 props 中的 onUpdate:modelValue 更新函数进行更新状态值，也就是用户点击选项选择表单之后，从真实 DOM 的变化到数据变化的流程。
这里有一个点需要值得说明的是 getValue 函数的实现。
javascript复制代码function getValue(el) {
    return '_value' in el ? (el as any)._value : el.value
}

我们可以看到 getValue 函数中是通过判断真实 DOM 引用 el 中是否存在  _value 属性，如果存在就获取  _value 属性值，否则就获取 el 本身的 value 值。这是为什么呢？我们来看看下面的代码：
javascript复制代码// packages\runtime-dom\src\modules\props.ts
export function patchDOMProp(el, key, value) 
{
     if (key === 'value') {
          el._value = value
     }
}

从上面代码我们可以看到在 Vue3 中在元素上设置绑定 value 值时会被设置到一个自定义属性 _value 上，此外还有 select 标签中 option 选项中设置的 value 值也是同样的处理。
此外，
当我们在普通文本输入框进行以上操作时：
html复制代码<input type="text" :value="val" v-model="state">

这个时候编译器会报错：
vbnet复制代码 Internal server error: Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.

所以在 vModelText 指令中是不需要对获取真实 DOM 的 value 进行特别处理的。
beforeUpdate 函数
从前文我们可以知道如果我们在程序里面更改了 v-model 所绑定的状态数据，那么最新的状态数据就是通过指令的 beforeUpdate 生命周期函数更新到所绑定的元素上的。
vModelRadio 指令的 beforeUpdate 函数的实现很简单，通过前文的学习我们可以很容易看懂，没有太多好说的。
vModelCheckbox 指令
复选框的使用方式
使用 true-value 和 false-value 自定义 checkbox 的布尔绑定值
html复制代码<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" />

true-value 和 false-value 是 Vue 特有的 attributes，仅支持和 v-model 配套使用。这里 toggle 属性的值会在选中时被设为 'yes'，取消选择时设为 'no'。
上述例子来自 Vue 官网，更多详细请查看官网例子。
此外还有将多个复选框绑定到同一个数组或集合的值：
html复制代码<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">

如果选中了，复选框表单中设置的值就会添加到状态变量 checkedNames 数组中，也可以说状态变量 checkedNames 数组中存在哪些元素值，那么哪些复选框则是选中状态。
还有单一的复选框，绑定布尔类型值：
html复制代码<input type="checkbox" id="checkbox" v-model="checked" />

如果选中，状态变量 checked 为 true，未选中则为 false。
以上就是复选框在 Vue 中使用方式以及特别的使用方式 “使用 true-value 和 false-value 自定义 checkbox 的布尔绑定值”，所以我们需要先了解这些前置知识。
vModelCheckbox 指令的特别地方
了解完了这些我们再来看看 vModelCheckbox 指令的源码：
javascript复制代码export const vModelCheckbox = {
    created(el, _, vnode) {
      // 获取当前节点 props 中的 onUpdate:modelValue 更新函数
      el._assign = getModelAssigner(vnode)
      addEventListener(el, 'change', () => {
        // _modelValue 就是 v-model 绑定的状态数据
        const modelValue = (el as any)._modelValue
        // 获取 DOM 实例上 value 值
        const elementValue = getValue(el)
        // 选中状态
        const checked = el.checked
        const assign = el._assign
        // 处理 modelValue 是数组的情况
        if (isArray(modelValue)) {
          // 获取当前选项在 modelValue 数组中的位置
          const index = looseIndexOf(modelValue, elementValue)
          const found = index !== -1
          if (checked && !found) {
            // 如果是选中状态且 modelValue 里不存在当前 DOM 实例上 value 值，就往 modelValue 上添加，并且更新状态数据
            assign(modelValue.concat(elementValue))
          } else if (!checked && found) {
            // 如果是不是选中状态，又在 modelValue 中找到当前选项的值，则需要把当前选项的值从 modelValue 中删除，并且更新状态数据
            const filtered = [...modelValue]
            filtered.splice(index, 1)
            assign(filtered)
          }
        } else if (isSet(modelValue)) {
          // 如果是 Set 的数据类型的处理方案
          const cloned = new Set(modelValue)
          if (checked) {
            // 如果是选中状态则添加
            cloned.add(elementValue)
          } else {
            // 如果是未选中状态则删除
            cloned.delete(elementValue)
          }
          assign(cloned)
        } else {
          // 不是多个复选项的情况，处理的过程就跟单项选择框 Radio 一样。
          assign(getCheckboxValue(el, checked))
        }
      })
    },
    // 这里需要在 mounted 生命周期里初始化是因为需要等 true-value/false-value 的 props 设置完毕
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
      // 获取当前节点 props 中的 onUpdate:modelValue 更新函数
      el._assign = getModelAssigner(vnode)
      // 更新过程跟初始化过程一样
      setChecked(el, binding, vnode)
    }
}

由于复选框的使用方式不同，所以 vModelCheckbox 指令需要真监听的 change 事件的回调函数中使用 v-model 绑定的状态数据，如果是通过 created 生命周期中参数中获取 v-model 绑定的状态数据，则会是一个闭包变量，且每次重新渲染更新生产的 vnode 都会重新创建新的 v-model 绑定的状态数据，所以通过 created 生命周期中参数中获取 v-model 绑定的状态数据将不会是最新的数据，所以需要把  v-model 绑定的状态数据设置到一个全局变量中去。 vModelCheckbox 指令中的处理方案则是在 mounted 钩子函数和 beforeUpdate 钩子函数中把  v-model 绑定的状态数据设置到节点元素 DOM 的实例对象 el 上的 _modelValue 属性上。
created 函数
复选框只需要监听 change 事件，在 change 事件的回调函数中，获取 v-model 绑定的状态数据也就是 modelValue，获取复选框 DOM 实例上 value 值，以及 复选框 DOM 实例的 checked 属性值。然后根据 modelValue 的数据类型进行不同的处理。
modelValue 的数据类型是数组
通过获取当前选项在 modelValue 数组中的位置判断当前复选框的选项是否存在 modelValue 数组中。如果不存在且当前复选框是选中状态则需要把当前复选框的选项值添加到 modelValue 数组中，然后通过更新函数更新 v-model 中绑定的状态数据。如果当前选项存在 modelValue 数组中且当前复选框是未选中状态则需要把当前复选框的选项值从 modelValue 数组中删除，然后通过更新函数更新 v-model 中绑定的状态数据。
modelValue 的数据类型是 Set
由于 Set 类型具体天然的去重功能，所以 modelValue 的数据类型是 Set 的情况处理起来比数据类型是数组的情况要简单很多，也就是如果复选框是选中状态则把复选框的选项值添加到 modelValue 中，如果复选框不是选中状态则把复选框的选项值从 modelValue 中删除，然后通过更新函数更新 v-model 中绑定的状态数据。
如果是单一的复选框
modelValue 的数据类型不是数组也不是 Set 那么就是单一的复选框情况。如果是单一的复选框就通过 getCheckboxValue 函数进行处理，通过上文我们知道在 Vue 中可以使用 true-value 和 false-value 自定义 checkbox 的布尔绑定值。这时就需要在 getCheckboxValue 函数中进行处理了。
getCheckboxValue 函数源码：
javascript复制代码function getCheckboxValue(el, checked) {
  const key = checked ? '_trueValue' : '_falseValue'
  // 如果 _trueValue 或者 _falseValue 存在 el 实例中则使用 _trueValue 或 _falseValue 的值
  return key in el ? el[key] : checked
}

首先根据复选框的选中状态是判断是获取 _trueValue 还是 _falseValue 作为 key，然后判断复选框 DOM 实例 el 上有没有存在这两个属性，如果存在就返回这两个属性对应的属性值，否则返回当前复选框的选中状态。
值得注意的是当我们使用使用 true-value 和 false-value 自定义 checkbox 的布尔绑定值时，Vue3 底层会在设置元素实例的 attributes 时会把 true-value 和 false-value 属性设置成  _trueValue 还是 _falseValue 挂在元素实例对象上。以下是 Vue3 中具体的代码实现的地方。
javascript复制代码// packages\runtime-dom\src\patchProp.ts
export const patchProp = (
  el,
  key,
  prevValue,
  nextValue,
  // ...
) => {
  if (key === 'class') {
    // ...
  } else if (key === 'style') {
    // ...
  } else {
    if (key === 'true-value') {
      ;(el as any)._trueValue = nextValue
    } else if (key === 'false-value') {
      ;(el as any)._falseValue = nextValue
    }
    // ...
  }
}

以上就是用户点击复选框之后，从真实 DOM 的变化到数据变化的流程。
mounted 函数
复选框的数据初始化是需要通过 mounted 函数来实现的，因为需要等待 true-value 和 false-value 的 props 设置完毕。我们可以回顾一下前面的指令的执行流程中的知识。created 函数是在创建元素 DOM 实例之后执行的，此时还没设置元素 DOM 实例中的  attributes 数据，所以在 created 函数是获取不到  true-value 和 false-value 的值的。mounted 函数是已经完全初始化了元素的 DOM 实例之后，并且通过异步执行确保所有的应用节点都挂载完成后执行的，所以在 mounted 函数中是可以获取到  true-value 和 false-value 的值的。
同时需要在 mounted 函数中把 v-model 绑定的状态数据设置到元素实例对象 el 的 _modelValue 属性上，以供在 created 函数中监听的 change 事件的回调函数中使用。
mounted 函数的具体实现是通过封装一个 setChecked 函数来实现的，因为 mounted 函数和 beforeUpdate 函数是实现过程是一致的，所以通过封装共同的函数达到共享逻辑的目的。以下是 setChecked 函数的源码：
javascript复制代码function setChecked(el, { value, oldValue }, vnode) {
  // 把 v-model 的状态变量设置到 el._modelValue 上，相当于是一个全局变量
  ;(el as any)._modelValue = value
  if (isArray(value)) {
    // 如果是数组则判断 v-model 绑定是状态数据中是否存在当前复选框中的选项值也就是 value 值
    el.checked = looseIndexOf(value, vnode.props!.value) > -1
  } else if (isSet(value)) {
    // 如果是 Set 数据则判断 v-model 绑定是状态数据中是否存在当前复选框中的设置的 value 值
    el.checked = value.has(vnode.props!.value)
  } else if (value !== oldValue) {
    // 如果是单一的复选框的情况，还需要处理使用 true-value 和 false-value 自定义 checkbox 的布尔绑定值的情况
    el.checked = looseEqual(value, getCheckboxValue(el, true))
  }
}

具体是根据 v-model 中绑定的状态数据 value 的类型来分别做不同的处理。
value 是数组则通过 looseIndexOf 函数判断 value 中是否存在当前复选框中的选项值也就是 value 值，存在为 true，不存在为 false。
value 是 Set 则通过 Set 的 has 方法判断 value 中是否存在当前复选框中的选项值也就是 value 值，存在为 true，不存在为 false
如果 value 既不是数组又不是 Set 类型，那么就去判断新老 value 值是否相同，如果不相同则通过 looseEqual 函数判断 value 值与真实 DOM 实例对象的选项值是否相同。
旧 value 值是在调用指令钩子函数的方法 invokeDirectiveHook 中实现赋值的。
javascript复制代码export function invokeDirectiveHook(
    vnode,
    prevVNode,
    instance,
    name
  ) {
    const bindings = vnode.dirs!
    const oldBindings = prevVNode && prevVNode.dirs!
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i]
      if (oldBindings) {
        // 把老虚拟 DOM 的指令对象上 value 赋值给新指令对象上 oldValue 属性。 
        binding.oldValue = oldBindings[i].value
      }
	  // ...
    }
}

beforeUpdate 函数
beforeUpdate 函数的处理过程跟 mounted 函数一致，这里就不再进行赘述了。
至此 vModelCheckbox 指令就分析完毕了。
vModelSelect 指令
在分析 vModelSelect 指令实现的原理之前，我们先对 select 表单选择器做一些了解，select 表单选择器既可以单选又可以多选，要实现多选的话只需要要在 selected 标签上设置 multiple 属性即可。
html复制代码<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>

当 select 是多选的情况下，v-model 绑定的状态数据可以是数组也可以是 Set。有了这些前置知识我们开始分析 vModelSelect 指令实现的原理。
vModelSelect 指令的源码如下：
javascript复制代码export const vModelSelect = {
  created(el, { value, modifiers: { number } }, vnode) {
    // 判断 v-model 绑定的状态数据是否 Set 类型
    const isSetModel = isSet(value)
    addEventListener(el, 'change', () => {
      // 通过 Array.prototype.filter.call 方法筛选选中的选项数据，返回值是数组
      const selectedVal = Array.prototype.filter
        .call(el.options, (o: HTMLOptionElement) => o.selected)
        .map(
          (o: HTMLOptionElement) =>
            // 如果存在 number 修饰器则对返回值进行数字化处理
            number ? toNumber(getValue(o)) : getValue(o)
        )
      // 更新 v-model 绑定的状态数据
      el._assign(
        el.multiple
          ? isSetModel
            ? new Set(selectedVal) // 如果多选且是 Set 类型则返回 Set 类型数据
            : selectedVal // 如果是多选其是数组
          : selectedVal[0] // 因为上面经过处理返回的数据是数组
      )
    })
    // 获取当前节点 props 中的 onUpdate:modelValue 更新函数
    el._assign = getModelAssigner(vnode)
  },
  // 设置 value 值需要在 mounted 方法和 updated 方法中，因为需要等待子元素 option 也渲染完毕
  mounted(el, { value }) {
    setSelected(el, value)
  },
  beforeUpdate(el, _binding, vnode) {
    // 更新当前节点 props 中的 onUpdate:modelValue 更新函数
    el._assign = getModelAssigner(vnode)
  },
  updated(el, { value }) {
    setSelected(el, value)
  }
}

跟单项框和复选框一样，select 选择器也是只监听 change 事件。通过上文我们知道当 select 是多选的情况下，v-model 绑定的状态数据可以是数组也可以是 Set，所以我们需要针对 v-model 绑定的状态数据的类型进行不同的处理。
created 函数
首先设置 isSetModel 判断 v-model 绑定的状态数据是否 Set 类型，在 change 事件的回调函数中通过 Array.prototype.filter.call 方法筛选选中的选项数据，因为返回值是数组，所以继续使用 map 通过链式调用处理返回的数组内容，主要是使用 getValue 函数获取 option 选项中 value 值，因为跟单选框一样 select 中 option 标签中设置的 value 值最终会被 Vue3 处理成 _value 属性挂载 option 元素实例对象 el 上。再判断是否存在 number 修饰符，如果存在则还需要把 option 上的值转成 number 类型。
最后通过 props 中的 onUpdate:modelValue 更新函数更新状态值，对更新的值还需要根据不同的情况进行处理。如果是多选且更新的值是 Set 类型则返回 Set 类型数据，如果是多选且更新的值是数组则不用做额外处理，如果是单项，则把数组的第0项返回即可，因为上面经过处理返回的数据是数组。
以上就是用户点击 select 选择器之后，从真实 DOM 的变化到数据变化的流程。
mounted 函数
在 mounted 函数中主要做的工作就是初始化，也就是设置 select 的 option 标签哪个处于被选中状态。由于 option 标签是 select 标签的子元素，所以需要等 option 标签也渲染完毕才能进行设置，所以就需要在 mounted 方法里设置了，同样更新也一样，跟文本框指令、单选框指令、复选框指令的更新是在 beforeUpdate 函数中处理不同，选择器指令的更新需要在 updated 函数中处理。因为 mounted 和 updated 都是通过异步调用执行的，所以根据 Vue3 运行流程 mounted 和 updated 方法执行的时候当前所有的节点挂载或更新完毕了。
因为 mounted 和 updated 的处理逻辑是一样的所以封装了一个 setSelected 方法，统一在一个方法里面处理。
setSelected 源码：
javascript复制代码function setSelected(el, value) {
  // 是否多选
  const isMultiple = el.multiple
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i]
    // 通过 getValue 函数获取 value 值，因为 select 的 option 选项的 value 也会被设置为 _value
    const optionValue = getValue(option)
    if (isMultiple) { // 多选的情况
      if (isArray(value)) {
        // 数组的情况处理
        option.selected = looseIndexOf(value, optionValue) > -1
      } else {
        // Set 类型的处理
        option.selected = value.has(optionValue)
      }
    } else { // 单选的情况
      if (looseEqual(getValue(option), value)) {
        // selectIndex 为被选中 option 元素的索引值，通过 selectIndex 可设置选中项、获取索引值、删除指定项和修改指定项文本
        el.selectedIndex = i
        return
      }
    }
  }
  // 单选时且没有选中任何 options 则把 select.selectedIndex 置为 -1
  if (!isMultiple) {
    // selectedIndex 为 -1 则没有选项被选中
    el.selectedIndex = -1
  }
}

setSelected 函数的处理逻辑也很简单，通过循环选择器实例 el.options 数据进行进行判断哪一项是选中状态的，然后设置选中状态。具体就是通 getValue 函数获取 select 标签的后代 option 的 value 值，因为 select 的 option 选项的 value 也会被 Vue3 设置为 _value。
如果是多选的情况，不管是 v-model 绑定的数据是数组还是 Set 类型都通过判断当前 option 选项的 value 值是否存在 v-model 绑定的数据中，存在就会设置 option 实例对象的 selected 属性值为 true，否则就设置为 false。如果是单选的情况则通过当前的 option 选项的 value 值是否等于 v-model 绑定的数据，如果等于则通过设置 selectedIndex 属性值为当前 option 的索引，这样达到和设置 option 实例对象的 selected 属性值为 true 一样的效果
最后单选时且没有选中任何 options 则把 select.selectedIndex 置为 -1，selectedIndex 为 -1 则没有选项被选中。
最后我们来看看 selectedIndex 的定义：

HTML DOM中 的 Select selectedIndex 属性用于在下拉列表中设置或返回所选选项的索引。下拉列表的索引通常以 0 开头，如果未选择任何选项，则返回 -1。如果下拉列表允许多个选择，则此属性返回第一个选项的索引。

beforeUpdate 函数
beforeUpdate 函数中只是去更新当前节点 props 中的 onUpdate:modelValue 更新函数
updated 函数
updated 函数所做的事情跟 mounted 一样，且封装成了一个相同的函数 setSelected，关于 setSelected 函数的实现我们已经在上文已经分析了，这里就不再赘述了。
自定义指令的实现原理
我们从上文 v-model 指令的分析中可以总结出，指令的主要作用就是提供让我们去操作 DOM 的能力，当然除此之外我们还可以通过模板引用来操作。
自定义指令的定义
从上文中还可以知道所谓指令本质上就是一个 JavaScript 对象，对象上挂着一些生命周期的钩子函数。
来自 Vue 官网对指令的定义：
javascript复制代码const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
  // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}

这些钩子函数将来在不同的时期被调用执行，自定义指令跟 Vue3 底层内置的指令运行原理是一致的。

组件中的 v-model 实现原理
我们在上一篇文章《12. 组件 v-model 的封装实现原理及 Input 组件的核心实现》中就已经进行详细讲解在组件中应用 v-model 的实现原理了。这里我们再次回顾一下，作一下总结。
当 v-model 指令应用在组件上的时候，就等于是给组件传入了一个名为 modelValue 的 prop，它的值是组件传入的状态变量，此外还会在组件上传入一个名为 onUpdate:modelValue 的监听事件，事件的回调函数拥有一个参数 $event，执行的时候会把参数 $event 赋值给状态变量。
基于此，我们在一个自定义组件上封装 v-model 的基本思路就是，定义一个名为 modelValue 的 prop，然后在数据发生改变的时候，派发一个名为 onUpdate:modelValue 的事件。这样我们就可以在组件上使用 v-model 来实现双向数据绑定了。
此外还有一个值得注意的是在组件上可以进行多个 v-model 绑定，而在元素上则不可以。

```

<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```css

## 总结

v-model 并不能应用在所有的元素标签中，只能应用在特定的元素标签上，比如 input、textarea、select、单选框 radio、复选框 checkbox，而且应用在这些不同的元素标签上，底层都是通过不通过的标签指令来分别进行不通过的处理。所以 v-model 本质上是一个语法糖，通过 v-model 我们可以很方便快捷地实现数据的双向绑定，也就是数据变化会引起 DOM 的变化，反过来亦然，DOM 的变化也会引起数据的变化。
此外当 v-model 应用在组件上的时候，其实是在传递了一个名为 modelValue 的自定义 props 属性，同时传递一个监听事件 onUpdate:modelValue 的事件，在事件的回调函数中进行数绑定的状态数据的修改。所以说 v-model 也是父子组件数据传输的一种方式，本质上还是通过 props 和 监听事件进行传输的。
此外还可以在组件上应用多个 v-model，而在元素中则不可以。
在组件上 v-model 本质也是一个打通父子组件双向数据通讯的语法糖，

```
