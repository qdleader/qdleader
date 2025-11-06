
# echart 图表横坐标展示不全

文字倾斜
```js

xAxis: {
    type: "category",
    data: ['小明','小红','小亮','小李','小王'],
    axisLabel: {
        interval: 0,
        rotate: -80,
    },
},
```

 当字数超出10个的时候，选取前接省略五个字然后拼号

 ```js
 axisLabel:{
    formatter: function (value, index) {
        if(value.length>10){
            return value.substr(0,5)+'...'
        }else{
            return value
        }
    }
},
 ```

```js
xAxis: {
    type: "category",
    data: ['小明','小红','小亮','小李','小王'],
    axisLabel: {
        rotate: -80,
        formatter: function (value) {
            if (value.length > 10) {
                return value.substr(0, 5) + "..."
            } else {
                return value
            }
        },
    },
},

```

## 加滚动条
```js
//  echarts 为x轴、y轴添加滚动条

// dataZoom    

// type: 'slider'，内置型数据区域缩放组件（dataZoomInside）

// start ，数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。
// end，数据窗口范围的结束百分比。范围是：0 ~ 100。

// 以y轴为例：

dataZoom: [
    {
        type: 'slider',
        show: true,
        yAxisIndex: [0],
        left: '93%',
        start: 0, //数据窗口范围的起始百分比
        end: 36
    },
    {
        type: 'inside',
        yAxisIndex: [0],
        start: 0,
        end: 36
    }
]

```
