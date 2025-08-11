# 引入uni_modules后主包太大，放入分包

直接将插件导入后，将uni_modules 直接粘贴到分包文件夹中

然后通过路径引入


如封装的echartrs插件
```vue
<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
// import * as echarts from "echarts";
import lechart from "@/pages/assessment/uni_modules/lime-echart/components/l-echart/l-echart.vue";
// import echarts from "../uni_modules/lime-echart/static/echarts.min";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const echarts = require("../uni_modules/lime-echart/static/echarts.min");
const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
});



const chartRef: any = ref(null);
const myChart: any = ref(null);

// 初始化图表
const initChart = async () => {
  if (!chartRef.value) return;

  // 初始化echart
  myChart.value = await chartRef.value.init(echarts);

  // 默认获取容器尺寸
  myChart.value.resize();

  // 设置true清空echart缓存
  myChart.value?.setOption(props.options, true);
};

// 监听图表数据时候变化，重新渲染图表
watch(
  () => props.options,
  () => {
    nextTick(() => {
      initChart();
    });
  },
  { deep: true }
);

// 页面挂载，开始绘制图表
onMounted(() => {
  nextTick(() => {
    initChart();
  });
});

// 组件销毁时销毁图表实例
onBeforeUnmount(() => {
  if (myChart.value) {
    echarts.dispose(myChart.value);
  }
});
</script>

<template>
  <view>
    <lechart ref="chartRef"></lechart>
  </view>
</template>

```


引用
```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";

import MyCharts from "../echart/index.vue";

// 注册必须的组件
// 每日数据
const dailyData = ref([
  { label: "07-15", value: 14 },
  { label: "07-16", value: 16 },
  { label: "07-17", value: 16 },
  { label: "07-18", value: 11 },
  { label: "07-19", value: 15 },
  { label: "07-20", value: 18 },
  { label: "07-21", value: 16 },
]);

// 练习列表
const practiceList = ref([
  { id: 1, name: "练习卷-01", count: 20 },
  { id: 2, name: "练习卷-01", count: 20 },
  { id: 3, name: "练习卷-01", count: 20 },
]);



const chartOption = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    top: "1%",
    right: "4%",
    bottom: "24%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: dailyData.value.map((item) => item.label),
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: "value",
    data: [1, 2, 3, 4, 5, 6, 7],
  },
  series: [
    {
      name: "每日练习",
      type: "bar",
      barWidth: "60%",
      data: dailyData.value.map((item) => item.value),
      itemStyle: {
        color: "#1976d2",
      },
    },
  ],
});


</script>

<template>
        <MyCharts :options="chartOption" />
     
</template>

<style lang="scss" scoped>

</style>

```