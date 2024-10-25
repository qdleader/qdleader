# 在 uniapp 中嵌入 h5 后通信

.因为 h5 需要向 app 发送事件，所以需要引入对应的 webview.js 文件。这是基础。uniapp 官方文档下载 uni.webview.1.5.4.js 到本地，在 h5 项目的 main.js 中全局引入

## vue2 版本 h5

h5 的 main.js

```js
import "@/mixin/uni.webview.1.5.4.js";
```

2.在 h5 页面 methods 调用 uni.webView.postMessage 向 app 传参，mounted 里通过使用监听 app 中使用的 evalJs（）方法接收 app 传过来的参数，

h5 的 index.vue

```js
  mounted() {
  //document.addEventListener() 方法用于向文档添加事件句柄，即事件监听。当相应的事件发生了，就执行对应的函数。
            document.addEventListener("getAppMsg", (e) => {
                //webview接收uniapp传过来的信息
                console.log('getAppMsg', e.detail.code)
            }, false)
        },
 methods: {
            testScan() {
               //h5向app传参，触发事件
                uni.webView.postMessage({
                    data: {
                        action: 'scanCode',
                    }
                })
            }
            }
```

## vue3 版本 h5

main.ts

```js
import * as uni from "./utils/uni/uni.webview.1.5.6.js";

document.addEventListener("UniAppJSBridgeReady", function () {
  console.log("UniAppJSBridgeReady", 2, uni, uni.webView);
  uni.webView?.getEnv(function (res) {
    console.log("当前环境：" + JSON.stringify(res));
  });
  // uni.webView.navigateTo(...)
});
```

index.vue

```js
const shareToWechat = () => {
  uni.postMessage({
    data: {
      action: "share",
      params: {
        title: "分享标题",
        desc: "分享描述",
        path: "分享路径",
        fileName: "分享文件名",
      },
    },
  });
};
```

3.app 的内嵌 webview 页面中，在 的 message 事件回调 event.detail.data 中接收 H5 发送给 App 的信息；通过拿到 webview 的内部对象，去调用系统的 evalJS 方法，传入字符串，将该方法内部的字符串在 webview 的 H5 中当做 js 代码去执行。

app 的 scanCode.vue

```js
//template
<web-view :src="src" @message="message"></web-view>

//script
onLoad() {

            let height = 0; //定义动态的高度变量
            let statusbar = 0; // 动态状态栏高度
            uni.getSystemInfo({ // 获取当前设备的具体信息
                success: (sysinfo) => {
                    statusbar = sysinfo.statusBarHeight + 55;
                    height = sysinfo.windowHeight - 65;
                    console.log("高度", statusbar, height)
                }
            });
            // #ifdef APP-PLUS
            let currentWebview = this.$mp.page.$getAppWebview(); //获取当前web-view
            let that = this
            setTimeout(function() {
                that.wv = currentWebview.children()[0];
                that.wv.setStyle({ //设置web-view距离顶部的距离以及自己的高度，单位为px
                    top: statusbar, //此处是距离顶部的高度，应该是你页面的头部
                    height: height, //webview的高度
                })
            }, 200); //如页面初始化调用需要写延迟
            // #endif
        },

methods: {
    message(e) {
        //接收 H5 发送给 app 的消息
        // e.detail.data 即为 H5 中 uni.webView.postMessage()的 data 的内容
        let mesg = e.detail.data[0]
        console.log("mesg", mesg)
        if (mesg.action == "scanCode") {
        // 允许从相机和相册扫码
            uni.scanCode({
                onlyFromCamera: true, //只允许通过相机扫码
                scanType: ['qrCode'], //调起条码扫描
                autoDecodeCharset: true,
                success: (res) => {
                    console.log(`res=${res.result}`) //res.result 为扫码结果
                    this.wv.evalJS(
                    "document.dispatchEvent(new CustomEvent('getAppMsg',{detail: {code:" +JSON.stringify(res.result) + "}}))"
                    )
                //通过 evalJS()，传入方法字符串，将该方法内部的字符串在 webview 的 H5 中当做 js 代码去执行。
                //document.dispatchEvent（）为创建自定义事件在 h5 中执行
                }
            }）
        }
    }
}
```

至此，完成了 app 与 h5 之间的动态传参通信
