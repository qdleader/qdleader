


# 下载
```
npm install --save echarts-for-react
npm install --save echarts
```


# 引入

```
import ReactECharts from 'echarts-for-react';


// render echarts option.
<ReactECharts option={this.getOption()} />
```


```
getOption =()=> {
    let option = {
        title:{
          text:'用户骑行订单'
        },
        tooltip:{   //展示数据
          trigger:'axis'
        },
        xAxis:{
          data:['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis:{
          type:'value'
        },
        series:[
          {
            name:'订单量',
            type:'bar',
            data:[1000,2000,1500,3000,2000,1200,800]
          }
        ]
    }
    return option;
  }
```


echarts api https://echarts.apache.org/examples/zh/index.html#chart-type-pie

echarts-for-react api https://www.npmjs.com/package/echarts-for-react
