<template>
  <!-- <Viewer :value="currentValue" :plugins="plugins"></Viewer> -->
  <div ref="viewDomRef" class="morphed-markdown-body" />
</template>

<script setup>
import morphdom from "morphdom";
import { Viewer } from "@bytemd/vue-next";
import { onMounted, h, watch, toRefs, ref, createApp, onUnmounted } from "vue";
import { findLastTextNode } from "./utils";

const props = defineProps(["value", "plugins", "blink"]);
const { value, plugins, blink } = toRefs(props);

// 使用的元素
const viewDomRef = ref();

// 停止监听
let stopWtach = null;
onUnmounted(() => stopWtach && stopWtach());

// 开始增量渲染
const startWatchRender = function () {
  let renderId = 0;

  const createVNodeToRenderEl = () => {
    return new Promise(resolve => {
      // 每次vnode新生成的元素都放在这里
      const renderEl = document.createElement("div");
      // 虚拟dom渲染
      let app = null;
      const clearApp = () => app && app.unmount();
      const vnode = h(Viewer, { value: value.value, plugins: plugins.value }); // <Viewer :value="currentValue" :plugins="plugins"></Viewer>
      app = createApp({
        mounted() {
          resolve({
            renderEl: renderEl.cloneNode(true), // 需要克隆dom, 否则会收到后续虚拟dom的影响
            clearApp
          });
        },
        render: () => vnode
      });
      app.mount(renderEl);
    });
  };

  stopWtach = watch(
    value,
    async (newValue, oldValue) => {
      if (oldValue === newValue) return;

      // 当前渲染的ID
      renderId = renderId + 1;
      let selfRenderId = renderId;

      // 第一次变动的情况
      if (!viewDomRef.value?.firstChild) {
        const { renderEl, clearApp } = await createVNodeToRenderEl();
        const markdownBody = renderEl.firstChild;
        // 防止dom到可以查看的层级
        if (markdownBody) {
          if (selfRenderId !== renderId) return false;
          viewDomRef.value.appendChild(markdownBody);
        }
        // 清除虚拟dom渲染
        clearApp();
      }

      // 而后变动的情况，增量更新
      else {
        const { renderEl, clearApp } = await createVNodeToRenderEl();
        const markdownBody = renderEl.firstChild;
        if (selfRenderId !== renderId) return false;
        // 添加blink
        setBlinkToLastEl(markdownBody);
        // 合并内容
        morphdom(viewDomRef.value.firstChild, markdownBody);
        clearApp();
      }
    },
    { immediate: true }
  );
};

/** 设置输入光标 */
const CLASS_NAME = "blink";
const setBlinkToLastEl = (rootEl = viewDomRef.value) => {
  const isBlink = blink.value;
  if (!isBlink) return true;

  // 为末尾元素添加class
  const lastEl = findLastTextNode(rootEl);

  // 删除除当前外所有blink class
  removeAllBlink(rootEl, lastEl);

  // 添加新的blinkClass
  if (!lastEl.className.includes(CLASS_NAME)) {
    lastEl.classList.add(CLASS_NAME);
  }
};

const removeAllBlink = (rootEl, ignoreEl) => {
  // debugger
  const el = rootEl;
  const els = [el, ...Array.from(el.querySelectorAll(`.${CLASS_NAME}`))].filter(
    item => item !== ignoreEl
  );
  els.map(el => {
    if (el !== ignoreEl) el.classList.remove(CLASS_NAME);
  });
};

onMounted(() => startWatchRender());
</script>
