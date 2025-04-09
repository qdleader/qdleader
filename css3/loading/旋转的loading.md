# 旋转的 loading

```vue
<template>
  <div>
    <div class="loading-container-circle">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.loading-container-circle {
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 20px;

  .bubble {
    position: absolute;
    border-radius: 50%;
    background-color: #919191;
    transform-origin: 20px 20px;
    animation: rotate 1.5s linear infinite;
  }

  /* 创建8个气泡，均匀分布在圆周上，由大到小排列 */
  .bubble:nth-child(1) {
    width: 12px;
    height: 12px;
    transform: rotate(0deg) translateX(20px);
    animation-delay: -0s;
  }

  .bubble:nth-child(2) {
    width: 11px;
    height: 11px;
    transform: rotate(45deg) translateX(20px);
    animation-delay: -0.1875s;
  }

  .bubble:nth-child(3) {
    width: 10px;
    height: 10px;
    transform: rotate(90deg) translateX(20px);
    animation-delay: -0.375s;
  }

  .bubble:nth-child(4) {
    width: 9px;
    height: 9px;
    transform: rotate(135deg) translateX(20px);
    animation-delay: -0.5625s;
  }

  .bubble:nth-child(5) {
    width: 8px;
    height: 8px;
    transform: rotate(180deg) translateX(20px);
    animation-delay: -0.75s;
  }

  .bubble:nth-child(6) {
    width: 7px;
    height: 7px;
    transform: rotate(225deg) translateX(20px);
    animation-delay: -0.9375s;
  }

  .bubble:nth-child(7) {
    width: 6px;
    height: 6px;
    transform: rotate(270deg) translateX(20px);
    animation-delay: -1.125s;
  }

  .bubble:nth-child(8) {
    width: 4.5px;
    height: 4.5px;
    transform: rotate(315deg) translateX(20px);
    animation-delay: -1.3125s;
  }
}

@keyframes rotate {
  0% {
    opacity: 1;
    transform: rotate(0deg) translateX(20px) scale(1);
  }

  50% {
    opacity: 0.7;
    transform: rotate(180deg) translateX(20px) scale(0.9);
  }

  100% {
    opacity: 1;
    transform: rotate(360deg) translateX(20px) scale(1);
  }
}
</style>
```
