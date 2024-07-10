
# echart绘制地图

echart 绘制 地图数据

中国及省份地图数据获取
https://geojson.cn/




```ts

<template>
  <div class="charBox">
    <div id="charChina" class="china-map"></div>
  </div>
</template>

<script lang="tsx" setup>
import { onMounted, ref, defineProps, watch } from "vue"
import { ECharts, init, registerMap } from "echarts"
import chinaJson from "@/utils/map/china.json"
const props = defineProps<{
  province: string
}>()

const dataList = ref([
  { name: "南海诸岛" },
  { ename: "beijing", name: "北京市" },
  { ename: "tianjin", name: "天津市" },
  { ename: "shanghai", name: "上海市" },
  { ename: "chongqing", name: "重庆市" },
  { ename: "hebei", name: "河北省" },
  { ename: "henan", name: "河南省" },
  { ename: "yunnan", name: "云南省" },
  { ename: "liaoning", name: "辽宁省" },
  { ename: "heilongjiang", name: "黑龙江省" },
  { ename: "hunan", name: "湖南省" },
  { ename: "anhui", name: "安徽省" },
  { ename: "shandong", name: "山东省" },
  { ename: "xinjiang", name: "新疆省" },
  { ename: "jiangsu", name: "江苏省" },
  { ename: "zhejiang", name: "浙江省" },
  { ename: "jiangxi", name: "江西省" },
  { ename: "hubei", name: "湖北省" },
  { ename: "guangxi", name: "广西省" },
  { ename: "gansu", name: "甘肃省" },
  { ename: "shanxi", name: "山西省" },
  { ename: "neimenggu", name: "内蒙古自治区" },
  { ename: "shanxi1", name: "陕西省" },
  { ename: "jilin", name: "吉林省" },
  { ename: "fujian", name: "福建省" },
  { ename: "guizhou", name: "贵州省" },
  { ename: "guangdong", name: "广东省" },
  { ename: "qinghai", name: "青海省" },
  { ename: "xizang", name: "西藏省" },
  { ename: "sichuan", name: "四川省" },
  { ename: "ningxia", name: "宁夏省" },
  { ename: "hainan", name: "海南省" },
  { name: "台湾省" },
  { ename: "xianggang", name: "香港" },
  { ename: "aomen", name: "澳门" }
])

const initEchart = async () => {
  const charEle = document.getElementById("charChina") as HTMLElement
  const charEch: ECharts = init(charEle)
  // const chinaJson = require(`@/utils/map/省份数据/json(省份)/${props.province}.json`)
  const chinaJson = await fetch(`@/utils/map/省份数据/json(省份)/${props.province}.json`).then((resp) => resp.json())
  registerMap("china", chinaJson)
  const option = {
    tooltip: {
      formatter: function (params) {
        return params.seriesName + "<br />" + params.name + "：" + params.value
      }
    },
    visualMap: {
      min: 0,
      max: 100,
      left: "left",
      top: "bottom",
      text: ["高", "低"],
      inRange: {
        color: ["#e0ffff", "orange"]
      },
      show: true // 图注
    },
    geo: {
      map: "china", // 引入地图数据
      zoom: 1, // 当前视角的缩放比例
      roam: true, // 是否开启平游或缩放
      scaleLimit: {
        // 滚轮缩放的极限控制
        min: 1,
        max: 2
      },
      label: {
        normal: {
          show: true,
          fontSize: "10",
          color: "rgba(0,0,0,0.7)"
        }
      },
      itemStyle: {
        normal: {
          borderColor: "rgba(0, 0, 0, 0.2)"
        },
        emphasis: {
          // 高亮的显示设置
          areaColor: "skyblue", // 鼠标选择区域颜色
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    },
    // 鼠标悬浮提示框
    series: [
      {
        name: "省份",
        type: "map",
        geoIndex: 0,
        data: dataList
      }
    ]
  }
  charEch.setOption(option)
}




onMounted(() => {
  initEchart()
})
</script>

<style lang="scss" scoped>
.china-map {
  width: 1000px;
  height: 600px;
  margin: 0 auto;
}
</style>


```