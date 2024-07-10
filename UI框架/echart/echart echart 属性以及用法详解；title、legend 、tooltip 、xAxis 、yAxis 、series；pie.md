# echart echart 属性以及用法详解；title、legend 、tooltip 、xAxis 、yAxis 、series；pie
记录一些关于echart的属性及用法

## **1、title  主副标题**
```js
title : {
    text: '主标题',//'\n'指定换行
    subtext: '副标题',//'\n'指定换行
    itemGap:5,//主副标题之间间隔，单位px，默认为10
    link:'',//主标题文本超链接,默认值true
    target: null,//打开主标题链接形式，'self' | 'blank'，默认'blank'（新窗口）
    sublink: '',//副标题文本超链接
    subtarget: null,//打开副标题链接形式，'self' | 'blank'，默认'blank'（新窗口）
    x:'left',默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
    y: 'top',//默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
    textAlign: null,//水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
    backgroundColor: '#ccc',//标题背景颜色，默认'rgba(0,0,0,0)'透明
    borderColor: '#000',//标题边框颜色,默认'#ccc'
    borderWidth:0,//标题边框线宽，单位px，默认为0（无边框）
    padding: 5,//标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
    textStyle: {//主标题样式
      fontFamily: 'Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif',
      fontSize: 14,
      // fontStyle: 'normal',
      fontWeight: 'bold',
    },
    subtextStyle: {//副标题样式
      color:'red',
      fontFamily: 'Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
},	
```



##  **2、grid 图表位置**
```js
grid: {
    top: '15%',  //如果top、left、rigt、bottom都设置成0图表就会充满画布
    left: '15%', 
    right: '15%',
    bottom: '15%',
    //  width:"300", //图表宽度
    //  height:"100", //图表高度
    containLabel: true,//grid 区域是否包含坐标轴的刻度标签
    // show:true,//设置了true下面的containLabel以下的属性才会起作用
    // backgroundColor:"pink", //网格背景色  transparent
    // borderColor:"#000", //网格的边框颜色
    // borderWidth:2, //网格边框线宽
    // shadowColor:"red", //阴影颜色
    // shadowOffsetX:0, //阴影水平方向上的偏移距离
    // shadowOffsetY:0, //阴影垂直方向上的偏移距离
    // shadowBlur:10, //阴影的模糊大小
},
```



##  **3、legend 图例**
```js
legend: {
    bottom: '5%',//top，bottom
    left: 'center',//left，right，center
	icon:'circle',//'circle',  'rect',  'roundRect',  'triangle',  'diamond',  'pin',  'arrow',  'none'
	itemHeight: 6, // 图例icon高度
    itemWidth: 6, // 图例icon宽度
	orient: "horizontal", // vertical垂直排列， horizontal 水平排列
    // type: "scroll", // 可滚动翻页的图例
	// pageIconColor: "#999", //翻页箭头颜色
    // pageIconInactiveColor: "green", //翻页（即翻页到头时箭头的颜色
    pageTextStyle: {
      color: "#ccc", //翻页数字颜色
    },
    align: "left", // 图例icon在左侧
	// formatter:function (item) {
		// 	console.log('legend',item)
		// 	return `自定义：${item}`
	// },
    selectedMode:false,//去掉鼠标点击事件 false不可点击 true可以点击
},
```



##  **4、tooltip 显示提示框**
```js
tooltip: {
	trigger: 'item',//不自定义此一句即可;属性值：item数据项触发、axis坐标轴触发、none不触发
    axisPointer: {
        type: 'line',//属性值：line直线、shadow阴影、cross十字形、none
        axis: 'auto',  //指示器坐标轴，属性值：x、y、radius、angle
        snap: true,  //坐标轴指示器是否自动吸附到点上。默认自动判断，布尔值
        label: {
            show: false,  //是否显示文本标签
            precision: 'auto', //文本标签中数值小数点精度。默认根据当前轴的值自动判断
            formatter: {},  //文本标签文字格式化器
            margin:5,  //label距离轴的距离
            color: '#fff',
            fontSize: 12,  
            lineHeigh: 20,  
            width: 20,  
            height: 40, 
            textBorderColor: '',  //文字自己的描边颜色
            textBorderWidth:1,  //文字自己的描边宽度
            textBorderType: 'solid', //文字自己的描边，值：solid、dashed、dotted、number、array
            textBorderDashOffset: 0,//虚线偏移量，搭配textBorderType指定dashed、array
            textShadowColor: 'transparent',//文字自己阴影颜色
            textShadowBlur: 0,//文字本身的阴影长度
            textShadowOffsetX: 0,//文字自己的阴影 X 偏移
            textShadowOffsetY: 0,//文字自己的阴影 Y 偏移
            overflow: 'none',  //文字超出宽度是否截断或换行,配置width时有效,truncate/break/breakAll
            ellipsis: '', //如果overflow配置为'truncate'，可以通过该属性配置末尾显示的文本
            padding: 0,  
            backgroundColor: 'auto',//背景颜色
            borderColor: '',  //文本标签的边框颜色
            borderWidth: 0,  //文本标签的边框宽度
            shadowBlur: 3,  //图形阴影模糊大小，（和shadowColor,shadowOffsetX,shadowOffsetY搭配设置阴影效果）
            shadowColor:'pink', //阴影颜色
            shadowOffsetX: 0, //阴影水平方向上的偏移距离
            shadowOffsetY: 0 //阴影垂直方向上的偏移距离
        },
		lineStyle:{
		    color:'#faa12f',
            width: 1,  //线宽
            type: 'solid',//线的类型值：solid、dashed、dotted、number、array
            dashOffset: 0,//虚线偏移量（配合type的dashed、array）
            cap: 'butt',//线段末端的绘制，方butt、元round、方square（与butt不同）
            join: 'bevel',//设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性，bevel默认、round、miter
            miterLimit: 10,//设置斜接面限制比例（当join为miter才有效），值：10默认值、number
            shadowBlur: 10,//阴影模糊大小（配合shadowColor、shadowOffsetX、shadowOffsetY设置阴影效果）
            shadowColor: '',//阴影颜色
            shadowOffsetX: 0,//阴影水平方向上的偏移距离
            shadowOffsetY: 0,//阴影垂直方向上的偏移距离
            opacity: 1,
	    },
    },
	position: function (point, params, dom, rect, size) {//设置提示框的位置，如果不是蛇就是默认的
		// console.log(point)
		return [point[0]-30,point[1]-40];//retrun [x,y] 返回2点位置即可
	},
		
	backgroundColor:'none',  // 修改背景颜色（去掉默认提示框透明背景）
	borderColor:'#fff',  // 修改字体颜色
	textStyle: {//设置提示框里的文字样式
		fontSize: 12,
		color: "#fff",
	},
	formatter:function (item) {//自定义提示框里提示的内容、样式等，可以打印看item里的值
		// console.log('item',item)
		return `<div class="tipbg"><span>${item.name}：${item.percent}%</span></div>`
	},
	extraCssText:'border:none;box-shadow:none;',//这里可以设置默认提示框的样式,如果文字太长需要换行，则在这个属性中增加max-width:需要的宽度;white-space:pre-wrap
	confine:true,//解决有些提示框现实不全的问题，没有问题不设也可
},
```



##  **5、线图 x轴：xAxis  （yAxis 和 xAxis基本一致）**

```js
//x轴
xAxis: {
  name:'x轴名字',
  show: true,// 是否显示x轴
  position: 'bottom',// x轴的位置top、bottom 
  type: 'category',//坐标轴类型，值category、value，与y轴对应，如果x轴配置category则y轴配置value
  nameRotate:50,// 坐标轴名字旋转，角度值
  inverse: false,// 是否反向显示坐标轴 true反向
  boundaryGap:['10%','10%'],// 坐标轴两边留白 值:['80%','80%'],或布尔值true、false
  splitLine:{
    show: true,//去除网格线
    interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
    color: ['#ccc'], //也可设置多个 一次循环显示   
    width: 3, //线宽
    type: 'solid', // 坐标轴线:solid实线、dashed虚线、dotted点状
  },
  // splitArea : {
  //   show : true,//去除网格区域
  //   interval: '0', // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
  //   areaStyle: {
  //     color: ['rgba(234,234,234,0.6)','rgba(210,210,210,0.5)'], // 分隔区域颜色,按数组中颜色顺序循环,默认是一个深浅的间隔色
  //     opacity:1, // 图形透明度
  //   },
  // },
  axisLine: {//x轴线设置
    show: true,// 是否显示坐标轴轴线
    // symbol: ['none', 'arrow'],// 轴线两端箭头，值:none表示没有箭头，arrow表示有箭头
    // symbolSize: [15, 15],// 轴线两端箭头大小，[宽度,高度]
    lineStyle: {//x坐标轴样式设置
        type: 'solid',//solid实线、dashed虚线、dotted点状
        color: 'red',//x线颜色
        width:'1'//坐标线的宽度
    }
  },
  axisLabel: {//x轴字体颜色
    show:true,//是否显示刻度标签
    interval: '0',// 刻度标签的显示间隔，在x轴中有效.0显示所有
    inside: false,// 刻度标签是否朝内，默认朝外
    rotate: 50,// 刻度标签旋转的角度，旋转的角度从-90度到90度
    margin:20,// 刻度标签与轴线之间的距离
    fontStyle: 'normal', // 字体样式：normal无样式、italic斜体、oblique倾斜字体 
    textStyle: {//刻度文本颜色
      color: 'green',
    },
    align: 'left',// 文字水平对齐方式，默认自动 left、center、right
    verticalAlign: 'left',// 文字垂直对齐方式，默认自动 top、middle、bottom
    lineHeight: '30',// 行高
    backgroundColor: 'pink', // 文字块背景色，例：pink, rgba(0,23,11,0.3)
  },
  axisTick:{//x轴刻度
    // show: true,//是否显示刻度true显示 false不显示
    // inside: true, // 坐标轴刻度方向，默认朝外（即图表外），true朝里 false朝外
    // length:10,// 坐标轴刻度的长度
    lineStyle: {
      color: '#000',// 刻度线的颜色
      width: 1,// 坐标轴刻度线宽
      type: 'solid',// 坐标轴线类型：solid实线、dashed虚线、dotted点状
    },
  } ,   
  data: ['3月', '4月', '5月', '6月', '7月', '8月', '9月'],    
},  
//y轴
yAxis: {
   type: 'value',
   interval:0.5,//y轴间隔值
   minInterval:1,//设置最小间隔是1
   min:0,//设置y轴最小值
   max:500,//设置y轴最大值
}
```



##  **5饼图 pie :series**

```js
series: [
    {
        name: '图标实例',
		type: 'pie',
		radius: ['30%', '90%'],//数组设置2个环形，不设置或设置一个['100%'] 整个一个圆
		avoidLabelOverlap: false,
        hoverAnimation:false, //鼠标悬浮是否有区域弹出动画
		itemStyle: {//设置边框、圆角等
			// borderRadius:[0,0,9,9],//左下、右下、左上、右上
			borderColor: '#fff',
			borderWidth:1
		},
		label: {//文本标签
			show: false,
			position: 'inside',//居中center，图表里inside，外部outer
			textStyle: {
				fontWeight: 300,
				fontSize: 16    //文字的字体大小
			},
			// formatter: function (d) {//定义内容
			// 	return Math.round(d.percent) + '%'
			// }
		},
 
		emphasis: {
			itemStyle: {//鼠标悬停有阴影
				shadowBlur: 10,
				shadowOffsetX: 0,
			    shadowColor: 'rgba(0, 0, 0, 0.5)'
			},
            label: {//鼠标悬停时中心显示对应内容
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
       },
        /*
       //如果要有多行 emphasis 要设置 ，因为它不支持返回标签形式 所以写法和tip等不太一样
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          // fontSize: '20',
          // fontWeight: 'bold'
          color:'#333',
          formatter:function (item) {
            //console.log('item',item)
            let str = `{sty1|${Math.round(item.percent) + '%'}}\n {sty2|${item.name}}`; //这里的sty1  sty2  就是设置不同行的  ，有种不同class的意思
            return str;
            // return Math.round(item.percent) + '%\n'+item.name
          },
          rich: {// 通过上面设置的sty1、sty2来设置不同的css即可，必须有rich 要不然直接return是不行的
            sty1: { fontSize:16,},
            sty2: { fontSize:10,}
          },
        */
        }
      },
       //
	   data:pieData,
    }
]
```






```js
 
let pieData=[
  { value: 1048, name: 'PUSH'},
  { value: 148, name: '内容'},
  { value: 735, name: '短信'},
	// { value: 1048, name: 'PUSH2'},
  // { value: 148, name: '内容2'},
  // { value: 735, name: '短信2'},
	// { value: 1048, name: 'PUSH3'},
  // { value: 148, name: '内容3'},
  // { value: 735, name: '短信3'}
]
pieFun(pieData,'echartBox')
function pieFun(pieData,ele){
 
	let dom = document.getElementById(ele);
	let myChart = echarts.init(dom);
	let app = {};
	option = null;
	option = {
		color:['#FF633B','#FFCA00','#3399FF','#FF9300','FF5812','#ff9933','#cbcbcb'],
		legend: {
			top: '5%',
			left: 'left',
			icon:'circle',//'circle',  'rect',  'roundRect',  'triangle',  'diamond',  'pin',  'arrow',  'none'
			itemHeight: 6, // 图例icon高度
			itemWidth: 6, // 图例icon宽度
			orient: "vertical", // vertical垂直排列 horizontal 水平排列
			// type: "scroll", // 可滚动翻页的图例
			// pageIconColor: "#999", //翻页箭头颜色
			// pageIconInactiveColor: "green", //翻页（即翻页到头时箭头的颜色
			pageTextStyle: {
				color: "#ccc", //翻页数字颜色
			},
			align: "left", // 图例icon在左侧
			// formatter:function (item) {
			// 	console.log('legend',item)
			// 	return `自定义：${item}`
			// }
		},
		tooltip: {
			trigger: 'item',
			position: function (point, params, dom, rect, size) {
				// console.log(point)
				return [point[0]-30,point[1]-40];
			},
			
			backgroundColor:'none',  // 修改背景颜色
			borderColor:'#fff',  // 修改字体颜色
			textStyle: {
				fontSize: 12,
				color: "#fff",
			},
			formatter:function (item) {
				// console.log('item',item)
				return `<div class="tipbg"><span>${item.name}：${item.percent}%</span></div>`
			},
			extraCssText:'border:none;box-shadow:none;',
			confine:true,
		},
		
		series: [
			{
				name: '图标实例',
				type: 'pie',
				radius: ['30%', '90%'],
				avoidLabelOverlap: false,
                hoverAnimation:false, //鼠标悬浮是否有区域弹出动画
				itemStyle: {
					// borderRadius:[0,0,9,9],//左下、右下、左上、右上
					borderColor: '#fff',
					borderWidth:1
				},
				label: {//文本标签
					show: false,
					position: 'inside',//居中center，图表里inside，外部outer
			        textStyle: {
				        fontWeight: 300,
				        fontSize: 16    //文字的字体大小
			        },
			        // formatter: function (d) {//定义内容
			        // 	return Math.round(d.percent) + '%'
			        // }
				},
				// labelLine: {
				// 	show: false
				// },
				emphasis: {
					itemStyle: {//鼠标悬停有阴影
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					},
					label: {//鼠标悬停时中心显示对应内容
						show: false,
						fontSize: '40',
						fontWeight: 'bold'
					}
				},
				data:pieData,
			}
		]
 
	};
		
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	window.addEventListener('resize', myChart.resize);
}
 
</script>	

```


**简单折线图完整代码**




```js

option = {
	title : {
        // text: 'Monthly Repayment (estimated)',
        subtext: 'Renta：$/qft2',
        x:'left',
        top:10
    },	
//  tooltip: {//鼠标悬停浮层
// 		axisPointer: {//鼠标经过显示
//          type: 'shadow'
//      }
//  },     
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'line',
			lineStyle:{
				color:'#faa12f'
			},
			z:1
		},
		backgroundColor:'rgb(255,255,255)',
		extraCssText:'box-shadow:0 0 3px 3px rgba(0, 0, 0, 0.3)',
		textStyle:{
			color:'#333'
		},
	},
 
    //x轴
    xAxis: {
        type: 'category',
//      boundaryGap: false,
//      splitLine:{show: false},//去除网格线
//      splitArea : {show : false},//去除网格区域
 
        data: ['3mth', '4mth', '5mth', '6mth', '7mth', '8mth', '9mth'],
        
        axisLine: {//x轴线设置
            lineStyle: {
                type: 'solid',
                color: '#f0f0f0',//x线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisLabel: {//x轴字体颜色
            textStyle: {
                color: '#949494',
            }
        },
        axisTick:{//去掉x轴刻度
        	show: false
        }        
    },
    yAxis: {
        type: 'value',
//      name: 'Renta：$/qft2',   
        splitLine:{//保留网格线
        	show: true,
			lineStyle:{//y轴网格线设置
                color: '#f9f9f9',
                width: 1,
                type: 'solid'
            }        	
        },
        splitArea : {show :false},//去除网格区域
        axisLine: {//y轴线设置
            lineStyle: {
                type: 'solid',
                color:'#f0f0f0',
                width:'1'
            }
        },
        axisLabel: {//y轴字体颜色
            textStyle: {
               color: '#949494'
            }
        },  
        axisTick:{//去掉Y轴刻度
        	show: false
        }
  
    },
    series: [{
        data: [1800, 2200, 3600, 3000, 2000, 2900, 2500],
        type: 'line',
        symbol:"circle",//设定为实心点  类型 ： 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        symbolSize:6,//圆点大小
//      showSymbol:true,
        hoverAnimation:true,
        animation: true,
	    itemStyle: {
	        normal: {
	            color: "#faa12f",//圆点颜色
				borderColor:'rgba(251,222,153,0.5)',
				borderWidth:8,	            
	            
	            lineStyle: {//折线颜色大小
	            	type:'solid',  //'dotted'虚线 'solid'实线
	                color: "#faa12f",
	                width:1,
	                borderColor:'#faa12f',  //拐点边框颜色
	            }
	        }
	    },
	    
//      textStyle:{//x、y轴字体颜色大小
//	        fontSize:12,
//	        color:'#949494'
//      },    
                
                      
    }],
 
   
};
```