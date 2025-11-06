# uniapp 判断机型

```js
uni.getSystemInfo(OBJECT)

获取屏幕高度宽度
screenWidth 屏幕宽度
screenHeight 屏幕高度
windowWidth 可使用窗口宽度
windowHeight 可使用窗口高度
windowTop 可使用窗口的顶部位置 App、H5
windowBottom 可使用窗口的底部位置 App、H5
statusBarHeight 状态栏的高
onLoad() {
	let _this = this
	uni.getSystemInfo({
	    success: function (res) {
	        console.log(res.model);
        	console.log(res.pixelRatio);
	        console.log(res.windowWidth);
	        console.log(res.windowHeight);
	        console.log(res.language);
	        console.log(res.version);
	        console.log(res.platform);
	    }
	});
},

获取元素的宽度、高度、定位
bottom:
dataset，如ref
proto:
height:
id
left:
right:
top:
width:
uni.getSystemInfo({
  success: function (res) { // res - 各种参数
  	//如 <view class="box"></view>  	.select('.box')
    let obj = uni.createSelectorQuery().select('.类名')
    obj.boundingClientRect(function (data) { // data - 各种参数
      console.log(data)
    }).exec()
  }
})

```

api[https://uniapp.dcloud.io/api/system/info?id=getsysteminfo]

| 手机型号 | 尺寸 | 代码获取屏幕大小 | 屏幕分辨率 | 倍图 | 状态栏高度 |	导航栏高度| 底部安全距离 | Tabbar高度 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| iPhone | 4/4S | 3.5英寸 | 320x480	| 640x960 | @2x	| 20 | 44 | 0 | 49 |
| iPhone | 5/5S/5C/SE |	4英寸 | 320x568	| 640x1136 | @2x | 20 | 44 | 0 | 49 |
| iPhone | 6/6S/7/8 | 4.7英寸 | 375x667	| 750x1334 | @2x | 20 | 44 | 0 | 49 |
| iPhone | 6P/6sP/7P/8P | 5.5英寸 | 414x736	| 1242x2208	| @3x | 20 | 44	| 0	| 49 |
| iPhone | X/XS/11 Pro | 5.8英寸 | 375x812	| 1125x2436	| @3x | 44 | 44	| 34 | 49 |
| iPhone | 11/XR | 6.1英寸 | 414x896 | 828x1792	| @2x | 44 | 44 | 34 | 49 |
| iPhone | XS Max/11 Pro Max | 6.5英寸 | 414x896	| 1242x2688	| @3x |44 | 44 | 34	| 49 |
