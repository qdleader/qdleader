## Teleport是怎么实现选择性挂载的？

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

主要是通过document.querySelector实现的，Teleport 实质是一个组件，必然会经历组件的初始化，挂载与更新

1.Teleport 组件通过process初始化，查看是否禁用teleport，禁用则在初始化容器时渲染，处理HMR
2.通过resolveTarget拿要渲染teleport的容器节点，目标不存在就报错返回，存在打注释定位标记。
3.进入挂载阶段，确定内部是否是array children结构，是否配置了disabled参数，配置了就解析在默认容器中，没有配置就解析在to指定的容器中，初始化结束。
4.更新阶段，核心函数moveTeleport，能触发Teleport更新只有两种情况
   修改to或者disabled的值
   组件内部的内容发生更新


moveTeleport 用于更新
  修改to或者disabled的值分为以下情况

  disabled从false变为true，会将to指定的容器移动到默认的容器
  disabled从true为false，会将默认容器移动到to指定的容器
  to指定的容器改变，向重新传递一个选择器，重新解析，移动到新的选择器位置


  ```js

  function moveTeleport(
  vnode: VNode,
  container: RendererElement,
  parentAnchor: RendererNode | null,
  { o: { insert }, m: move }: RendererInternals,
  moveType: TeleportMoveTypes = TeleportMoveTypes.REORDER
) {
  // 确认新的目标容器，目标容器变了，将Teleport插入新的目标容器
  if (moveType === TeleportMoveTypes.TARGET_CHANGE) {
    insert(vnode.targetAnchor!, container, parentAnchor)
  }
  const { el, anchor, shapeFlag, children, props } = vnode
  const isReorder = moveType === TeleportMoveTypes.REORDER
  // 重新排序
  if (isReorder) {
    insert(el!, container, parentAnchor)
  }
  // 没有重排序或者disabled属性设置为true
  if (!isReorder || isTeleportDisabled(props)) {
    // 遍历vnode子节点，将子节点移动到
    if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      for (let i = 0; i < (children as VNode[]).length; i++) {
        move(
          (children as VNode[])[i],
          container,
          parentAnchor,
          MoveType.REORDER
        )
      }
    }
  }
  // 需要重新排序
  if (isReorder) {
    insert(anchor!, container, parentAnchor)
  }
}

  ```