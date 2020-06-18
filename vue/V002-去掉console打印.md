##方法1
```
如果你用的是vscode
全局替换console.log为//console.log

这种方法有点emmmmmm。。。。不太优雅
```

###方法二
```
替换window的console方法为{}，
在main.js里面

// window['console']['log'] =  console.log() //打开默认设置
window['console']['log'] = function() {}; //关闭默认设置
```



###方法3
```
在util写一个控制console.log的函数

let env = 'pro';  //this is a switch
function selfLog(x) {
	if(env === 'dev') {
		console.log(x)
	}
}
export default selfLog;
```



在mainjs里面应用
```
import selfLog from './utils/selfLog'

Vue.prototype.selfLog = selfLog;
```

使用时候
```
this.selfLog()就等效于console.log()
```



### 方法四
>在vue webpack打包时候去掉
在 webpack.pro.conf.js中(35行左右)将设置改为：

```
new UglifyJsPlugin({
  uglifyOptions: {
    compress: {
      warnings: false,
      drop_debugger: true,
      drop_console: true
    }
  },
  sourceMap: config.build.productionSourceMap,
  parallel: true
})
```
