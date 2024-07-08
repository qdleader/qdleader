# W002-微信公众号开发之SDK

当我们做微信登录授权，微信公众号的分享，微信的h5支付等等等等的时候难免会用到微信sdk，当我们用react或vue做的spa应用，直接引入后会发现，在按安卓上可以正常调试，而ios上一直报签名错误（但你发现你刷新一下又可以了。。），等各种问题。在我连连续续踩了各种坑之后，含泪写此文。。。闲话不多说，上代码！（再说一句句，希望获取前端进步的可以关注下qdleader）

**引入sdk**

首先在main.js中引入


```
// 每次切换路由时候，注册config(并解决ios的兼容问题)
import { bUrlH5 } from "@/http/httpUrl.js";
router.afterEach((to, from) => {
    let basicPath = bUrlH5
    let path = to.fullPath.slice(1) // 去除'/'

    if (!sessionStorage.getItem('initLink')) {
        // 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
        sessionStorage.setItem('initLink', document.URL)
    }
    let url
    if (!!window.__wxjs_is_wkwebview) {
        // ios
        url = sessionStorage.getItem('initLink')
    } else {
        // 安卓 process.env.BASE_URL 自己定义各个环境下域名变量
        url = basicPath + path
    }
    store.commit('URLLINK', url)
})
```
这里引入的bUrlH5就是的网站的地址，比如http://www.baidu.com

ios签名错误的根源就是，你传给服务器的地址是你首次进来的根地址，跟你的当前地址不同。这是微信浏览器在ios下的一个bug。

我把url存到了vuex中，vuex不太懂的可以看我之前的一篇文章。

在vuex中
首先维护types文件

```
export const URLLINK = 'URLLINK';
```
然后在mutations文件中：

```
import {
    URLLINK,
} from './types'
import getters from './getters'

const state = {

    urlLink:'',//存储ios首次进来的链接

};

const mutations = {
    //存储url解决ios的sdk问题
    [URLLINK](state, urllink) {
        state.urlLink = urllink
    },
};
export default {
	state,
	mutations,
	getters
}
```

重点来啦
在项目中建一个wxSdk.js


```
// import wx from 'weixin-js-sdk'
import wx from 'weixin-jsapi'
import store from '@/store'
import { bUrl } from "@/http/httpUrl.js";
import { Base64 } from 'js-base64';
import axios from 'axios';

export default {
    /* 初始化wxjsdk各种接口 */
    init(apiList = [], url) {
        //需要使用的api列表
        let urlWx = bUrl + 'V1/wechat/sharesign'
        return new Promise((resolve, reject) => {
            let url = Base64.encode(store.state.mutations.urlLink);
            axios({
                method: 'get',
                url: urlWx,
                params: {
                    url: url,
                }
            }).then(function (res) {
                if (res.data.appId) {
                    wx.config({
                        debug: false, 
                        appId: res.data.appId,
                        timestamp: res.data.timestamp,
                        nonceStr: res.data.nonceStr,
                        signature: res.data.signature,
                        jsApiList: apiList
                    })
                    wx.ready(res => {
                        // 微信SDK准备就绪后执行的回调。
                        resolve(wx, res)
                    })
                } else {
                    reject(res)
                }
            }).catch(function (err) {
                reject(err)
                console.log("报错处理")
            });
        })

    }
}
```

**要说明几个坑**

* 1.引入sdk时候要npm weixin-jsapi  而不要用weixin-js-sdk，因为weixin-js-sdk不支持es6语法import 引入后，你打印wx会发现为undefined。
* 2你传给后台的url要进行一次编码encodeURIComponent呀，base64呀都可以。



好了，我都封装好了，那怎么调用呢。

来喽来喽。。。

调用的时候只需要在相应的页面引入你写的这个插件，


```
import wechatUtil from '@/common/js/wxSdk.js'


        setL() {
            let _this = this;
              wechatUtil
                    .init([
                    'updateAppMessageShareData',
                    'onMenuShareAppMessage',
                    'onMenuShareTimeline',
                    'updateTimelineShareData',
                    "openLocation",
                    ])
                    .then((wx, res) => {
                        // 这里写微信的接口
                        console.log(111,wx)
                                    //地理位置
                        wx.openLocation({
                            latitude: Number(_this.detailInfo.lat), // 纬度，浮点数，范围为90 ~ -90
                            longitude: Number(_this.detailInfo.lon), // 经度，浮点数，范围为180 ~ -180。
                            name: _this.detailInfo.place_name, // 位置名
                            address: _this.detailInfo.place_address, // 地址详情说明
                            scale: 28, // 地图缩放级别,整形值,范围从1~28。默认为最大
                            infoUrl: "" // 在查看位置界面底部显示的超链接,可点击跳转
                        });
                    })
        },
```
然后对照着，微信官网，直接粘锅来用，就可以啦，ios，android都ok啦。





当你发现ios，android怎么都是签名错误呀，你先看看你的公众号上有没有配置安全域名呀，你服务器的ip有没有加到公众号的白名单呀。没配好，代码再怎么改也ok不了。。


最后，前端有兴趣的可以关注下，也可以加群，一起成长。还有github[https://github.com/qdleader/qdleader](https://github.com/qdleader/qdleader)每日更新


![](https://user-gold-cdn.xitu.io/2020/5/24/17244bedd6ec15e5?w=972&h=902&f=jpeg&s=102579)
