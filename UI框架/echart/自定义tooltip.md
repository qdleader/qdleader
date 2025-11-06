# 自定义tooltip
```js

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.getElementById('myChart'))
  // 绘制图表同上
  myChart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        const box = `<div><span style="font-weight:bold;">绩效总览</span><span style="border-bottom:1px solid orange;background:#FEF0E1;padding:2px 20px;border-radius:15px;color:orange;margin-left:20px">${params[0].name}</span><div style="border-bottom:1px solid #999;margin:10px 0"></div><div style="margin-bottom:10px; color:#999;font-size:12px;">部门数据</div></div>`
        const Info = params
          .map((data, index) => {
            return `<div style="text-align: left; display:flex;justify-content: space-between;">
                <div>
                  <div style="width:5px;height:5px;float:left;background:${params[index].color};margin-top:8px;margin-right:4px"></div>
                ${data.seriesName}&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div>${data.data.ratio}% (${data.data.value}人)</div>
               </div>
            <br/>`
          })
          .join('')
        return box + Info
      }
    },
    grid: {
      left: 50
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['A+', 'A', 'B']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: '客户成功中心',
        type: 'bar',
        data: [
          { ratio: 12, value: 55 },
          { ratio: 12, value: 10 },
          { ratio: 12, value: 30 }
        ]
      },
      {
        name: '渠道增长中心',
        type: 'bar',
        data: [
          { ratio: 12, value: 20 },
          { ratio: 12, value: 30 },
          { ratio: 12, value: 50 }
        ]
      },
      {
        name: '渠道增长中心1',
        type: 'bar',
        data: [
          { ratio: 12, value: 10 },
          { ratio: 12, value: 50 },
          { ratio: 12, value: 30 }
        ]
      },
      {
        name: '渠道增长中心2',
        type: 'bar',
        data: [
          { ratio: 12, value: 50 },
          { ratio: 12, value: 30 },
          { ratio: 12, value: 20 }
        ]
      },
      {
        name: '渠道增长中心3',
        type: 'bar',
        data: [
          { ratio: 12, value: 50 },
          { ratio: 12, value: 50 },
          { ratio: 12, value: 50 }
        ]
      }
    ]
  })
})
```
