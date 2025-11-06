# Teleport是怎么实现选择性挂载的？

Teleport是vue的一个内部组件，类似于React的Portal，它可以让组件渲染在父组件以外的DOM上，主要支持
to和disabled两个参数

to 必须，Teleport目标挂在的DOM元素。

disabled 可选，用于禁用Teleport的功能，不会移动到任何位置。

使用案例：

```js
 // index.vue
<template>
    <div class="outer">
        <h3>Tooltip with Vue3 Teleport</h3>
        <button id="show-modal" @click="show">显示</button>
        <Teleport to="body">
            <modal :show="showModal" @close="hide">
                <template #header>
                    <h3>custom modal</h3>
                </template>
            </modal>
        </Teleport>
    </div>
</template>

<script setup>
   import Modal from './Modal.vue'
   import {ref} from 'vue'

   const showModal = ref(false)
   const show = ()=>{
       showModal.value = true
   }
   const hide=()=>{
       showModal.value = false
   }

</script>

// Modal.vue
<template>
<Transition name="modal">
    <div v-if="show" class="modal-mask">
       <div class="modal-wrapper">
           <div class="modal-container">
               <div class="modal-header">
               <slot name="header">default header</slot>
               </div>
               <div class="modal-body">
                   <slot name="body">default body</slot>
               </div>
               <div class="modal-footer">
                   <slot name="footer">default footer</slot>
                   <button class="modal-default-button" @click="$emit('close')">x</button>
               </div>
           </div>
       </div>
    </div>
</Transition>

</template>

<script setup>
    import {defineProps} from 'vue'
    const props=defineProps({
        show:Boolean
    })
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0 auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }
    .modal-enter-from {
        opacity: 0;
    }

    .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-from .modal-container,
    .modal-leave-to .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>

```

Teleport的to目标必须已经存在于DOM中，在挂载Teleport前，to目标的元素必须挂载完成，否则会报错。

## 实现原理

Teleport 组件在源码中实现是一个对象，对外提供了几个方法，最主要的是两个 process 和 remove 方法。代码如下：

代码语言：javascript
```js
// packages/runtime-core/src/components/Teleport.ts
const Teleport = {
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, 
  isSVG, optimized, internals) {
    if (n1 == null) {
      // 创建逻辑
    } else {
      // 更新逻辑
    }
  },

  remove(vnode, { r: remove, o: { remove: hostRemove } }) {
    // 删除逻辑
  },
  move: moveTeleport,
  hydrate: hydrateTeleport

}
```

上面代码中，process 方法负责组件的创建和更新逻辑，remove 方法负责组件删除逻辑。

## 组件创建

模版渲染会最后会转换成render函数，再调用createBlock方法，最终组件的创建都会调用 patch 方法。

```js
 // packages/runtime-core/src/renderer.ts
 const patch: PatchFn = (
    n1,
    n2,
    container,
    anchor = null,
    parentComponent = null,
    parentSuspense = null,
    isSVG = false,
    slotScopeIds = null,
    optimized = __DEV__ && isHmrUpdating ? false : !!n2.dynamicChildren
  ) => {
    ...
    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
      // 如果存在新旧节点, 且新旧节点类型不同，则销毁旧节点
    }

    const { type, ref, shapeFlag } = n2
    switch (type) {
      case Text:
           // 处理文本节点
           break
      case Comment:
          // 处理注释节点
          break
      case Static:
         // 处理静态节点
         break
      case Fragment:
        // 处理 Fragment
        break
      default:
        if (shapeFlag & ShapeFlags.ELEMENT) {
          // 处理普通 DOM 元素
        } else if (shapeFlag & ShapeFlags.COMPONENT) {
          // 处理组件
        } else if (shapeFlag & ShapeFlags.TELEPORT) {
          // 处理 TELEPORT
        } else if (__FEATURE_SUSPENSE__ && shapeFlag & ShapeFlags.SUSPENSE) {
          // 处理 SUSPENSE
        } else if (__DEV__) {
          warn('Invalid VNode type:', type, `(${typeof type})`)
        }
    }
    ...
  }
```

可以看到，在 patch 阶段，会判断如果 type 是一个 Teleport 组件，则会执行它的 process 方法，接下来我们来看 process 方法关于 Teleport 组件创建部分的逻辑：

```js
// packages/runtime-core/src/components/Teleport.ts
process(
    n1: TeleportVNode | null,
    n2: TeleportVNode,
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean,
    internals: RendererInternals
  ) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals

    const disabled = isTeleportDisabled(n2.props)
    let { shapeFlag, children, dynamicChildren } = n2
    ...
    if (n1 == null) {
      // insert anchors in the main view
      // 在主视图里插入注释节点或者空白文本节点
      const placeholder = (n2.el = __DEV__
        ? createComment('teleport start')
        : createText(''))
      const mainAnchor = (n2.anchor = __DEV__
        ? createComment('teleport end')
        : createText(''))
      insert(placeholder, container, anchor)
      insert(mainAnchor, container, anchor)
      // 获取目标移动的 DOM 节点
      const target = (n2.target = resolveTarget(n2.props, querySelector))
      const targetAnchor = (n2.targetAnchor = createText(''))
      if (target) {
        insert(targetAnchor, target)
        // #2652 we could be teleporting from a non-SVG tree into an SVG tree
        isSVG = isSVG || isTargetSVG(target)
      } else if (__DEV__ && !disabled) {
        // 查找不到 target 则报警告
        warn('Invalid Teleport target on mount:', target, `(${typeof target})`)
      }

      const mount = (container: RendererElement, anchor: RendererNode) => {
        // 挂载子节点
        if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
          mountChildren(...)
        }
      }

      if (disabled) {
      // disabled 情况就在原先的位置挂载
        mount(container, mainAnchor)
      } else if (target) {
        // 挂载到 target 的位置
        mount(target, targetAnchor)
      }
    }  
  }
```

Teleport 组件创建部分主要分为三个步骤，第一步在主视图里插入注释节点或者空白文本节点，第二步获取目标元素节点，第三步调用mount方法创建子节点往目标元素插入 Teleport 组件的子节点。

### 组件更新
```js
// packages/runtime-core/src/components/Teleport.ts
 process(
    n1: TeleportVNode | null,
    n2: TeleportVNode,
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean,
    internals: RendererInternals
  ) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals

    const disabled = isTeleportDisabled(n2.props)
    let { shapeFlag, children, dynamicChildren } = n2

    // #3302
    // HMR updated, force full diff
    if (__DEV__ && isHmrUpdating) {
      optimized = false
      dynamicChildren = null
    }

    if (n1 == null) {
      // 组件创建
    } else {
      // update content
      n2.el = n1.el
      const mainAnchor = (n2.anchor = n1.anchor)!
      const target = (n2.target = n1.target)!
      const targetAnchor = (n2.targetAnchor = n1.targetAnchor)!
      // 之前是不是 disabled 状态
      const wasDisabled = isTeleportDisabled(n1.props)
      const currentContainer = wasDisabled ? container : target
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor
      isSVG = isSVG || isTargetSVG(target)
      // 更新子节点
      if (dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(
          n1.dynamicChildren!,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        )
        traverseStaticChildren(n1, n2, true)
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          false
        )
      }

      if (disabled) {
        if (!wasDisabled) {
          // 把子节点移动回主容器
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            TeleportMoveTypes.TOGGLE
          )
        }
      } else {
        // 目标元素改变
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = (n2.target = resolveTarget(
            n2.props,
            querySelector
          ))
          if (nextTarget) {
            // enabled -> disabled
            // 移动到新的目标元素
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              TeleportMoveTypes.TARGET_CHANGE
            )
          } else if (__DEV__) {
            warn(
              'Invalid Teleport target on update:',
              target,
              `(${typeof target})`
            )
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // 移动到目标元素位置
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            TeleportMoveTypes.TOGGLE
          )
        }
      }
    }
  }
```

Teleport 组件更新无非就是做几件事情：更新子节点，处理 disabled 属性变化的情况，处理 to 属性变化的情况。

首先，是更新 Teleport 组件的子节点，这里更新分为优化更新和普通的全量比对更新两种情况。

接着，是判断 Teleport 组件新节点配置 disabled 属性的情况，如果满足新节点 disabled 为 true，且旧节点的 disabled 为 false 的话，说明我们需要把 Teleport 的子节点从目标元素内部移回到主视图内部了。

如果新节点 disabled 为 false，那么先通过 to 属性是否改变来判断目标元素 target 有没有变化，如果有变化，则把 Teleport 的子节点移动到新的 target 内部；如果目标元素没变化，则判断旧节点的 disabled 是否为 true，如果是则把 Teleport 的子节点从主视图内部移动到目标元素内部了。

### 组件移除

当组件移除的时候会执行 unmount 方法，它的内部会判断如果移除的组件是一个 Teleport 组件，就会执行组件的 remove 方法。

```js
 // packages/runtime-core/src/renderer.ts
 const unmount: UnmountFn = (
    vnode,
    parentComponent,
    parentSuspense,
    doRemove = false,
    optimized = false
  ) => {
    const {
      type,
      props,
      ref,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode
      ...
      if (shapeFlag & ShapeFlags.TELEPORT) {
        ;(vnode.type as typeof TeleportImpl).remove(
          vnode,
          parentComponent,
          parentSuspense,
          optimized,
          internals,
          doRemove
        )
      } 
      ...
  }
```

可以看到，在 unmount 阶段，会判断如果 ShapeFlags 是一个 Teleport 组件，则会执行它的 remove 方法，接下来我们来看 remove 方法关于 Teleport 组件删除逻辑：

```js
// packages/runtime-core/src/components/Teleport.ts
 remove(
    vnode: VNode,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    optimized: boolean,
    { um: unmount, o: { remove: hostRemove } }: RendererInternals,
    doRemove: Boolean
  ) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode

    if (target) {
      hostRemove(targetAnchor!)
    }

    // an unmounted teleport should always remove its children if not disabled
    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor!)
      if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        for (let i = 0; i < (children as VNode[]).length; i++) {
          const child = (children as VNode[])[i]
          unmount(
            child,
            parentComponent,
            parentSuspense,
            true,
            !!child.dynamicChildren
          )
        }
      }
    }
  },
```

Teleport 的 remove 方法实现很简单，首先通过 hostRemove 移除主视图渲染的锚点 teleport start 注释节点，然后再去遍历 Teleport 的子节点执行 unmount 移除。

执行完 Teleport 的 unmount 方法，会执行 hostRemove 方法移除 Teleport 主视图的元素 teleport end 注释节点，至此，Teleport 组件完成了移除。
