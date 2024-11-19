# 通用 navBar

```vue
<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  onClickLeft: {
    type: Function,
    default: () => {
      window.history.back(); // 返回上一页
    },
  },
  isAppBack: {
    type: Boolean,
    default: false,
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  isFixed: {
    type: Boolean,
    default: true,
  },
  isShowLine: {
    type: Boolean,
    default: false,
  },
});

const isFixed = ref(props.isFixed === false ? false : true);

const backgroundColor = ref(props.backgroundColor || "#fff");
// 设置默认的返回按钮点击函数
const defaultOnClickLeft = () => {
  window.history.back(); // 返回上一页
};

// 使用传入的函数或默认函数
const onClickLeft = ref(props.onClickLeft || defaultOnClickLeft);

// 获取屏幕边界到安全区域距离
const paddingTop = ref(0);
paddingTop.value = window.visualViewport?.offsetTop || 0;
</script>

<template>
  <van-nav-bar
    :class="{
      'nav-bar-h5': true,
      'nav-bar-h5-safe': true,
      'is-fixed': isFixed,
    }"
    :title="props.title"
    :style="{
      paddingTop: `${paddingTop}px`,
      backgroundColor: backgroundColor,
      borderBottom: 'none',
      fontWeight: 'bold',
    }"
    @click-left="onClickLeft">
    <template #left>
      <img class="back-icon" src="/new/返回箭头.png" alt="logo" />
    </template>
    <template #right>
      <slot name="rightBox" />
    </template>
  </van-nav-bar>
  <div :class="{ 'safe-box-none': true, 'safe-box': isFixed }" />
  <div v-show="isShowLine" class="line" />
</template>

<style scoped lang="less">
.line {
  height: 1px;
  width: 100%;
  background: #f5f5f5;
  position: fixed;
  z-index: 9;
}
.nav-bar-h5 {
  /deep/.van-nav-bar__title {
    color: #171717;
    font-size: 16px;
  }
}
.nav-bar-h5 .van-nav-bar__content::after {
  border: none;
}
.nav-bar-h5-safe {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
.back-icon {
  width: 18px;
  height: 18px;
}
.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
}
.safe-box-none {
  display: none;
}
.safe-box {
  // height: constant(safe-area-inset-top);
  height: 44px;
  width: 100%;
  display: block;
}
</style>
```
