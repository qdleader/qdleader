# 顶部navbar组件

```ts
<script setup lang="ts">
import { BACK_IMG_BLACK } from '@/constants';
const props = defineProps({
  title: {
    type: String,
    default: '',
  }, // title
  background: {
    type: String,
    default: '#fff',
  }, // 背景色
  imgIcon: {
    type: String,
    default: BACK_IMG_BLACK,
  }, // 返回图标
  isSelfBack: {
    type: Boolean,
    default: false,
  }, // 是否是自定义返回，（自定义返回的话，传入 clickBack）
  isPageCanTop: {
    type: Boolean,
    default: false,
  }, // 页面是否到顶
});

const emit = defineEmits<{
  (event: 'clickBack', value?: boolean): void;
}>();

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

// console.log(11, uni.getSystemInfoSync());
const goBack = () => {
  if (props.isSelfBack) {
    emit('clickBack');
  } else {
    uni.navigateBack();
  }
};
</script>

<template>
  <view
    class="pub-nav-safe-area"
    :style="{
      paddingTop: `${safeAreaInsets?.top}px`,
      display: `${props.isPageCanTop ? 'none' : 'block'}`,
    }"
  ></view>
  <view
    class="pub-nav"
    :style="{
      paddingTop: `${safeAreaInsets?.top}px`,
      background: `${props.background}`,
    }"
  >
    <image
      class="pub-nav-img"
      :src="props.imgIcon"
      mode="scaleToFill"
      @click="goBack"
    />
    <view class="pub-nav-tittle"> {{ props.title }} </view>
  </view>
</template>

<style scoped lang="scss">
.pub-nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 6;
  width: 100%;
  height: 88rpx;
}
.pub-nav-img {
  position: absolute;
  left: 8rpx;
  bottom: 0rpx;
  padding: 24rpx;
  width: 40rpx;
  height: 40rpx;
}
.pub-nav-tittle {
  width: 100%;
  line-height: 88rpx;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 32rpx;
  color: rgba(0, 0, 0, 0.9);
}
.pub-nav-safe-area {
  height: 88rpx;
}
</style>

```