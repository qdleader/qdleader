import{_ as n,c as e,a,o as i}from"./app-8qbk9tLK.js";const l={};function d(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="w002-微信公众号开发之sdk" tabindex="-1"><a class="header-anchor" href="#w002-微信公众号开发之sdk"><span>W002-微信公众号开发之SDK</span></a></h1><p>当我们做微信登录授权，微信公众号的分享，微信的h5支付等等等等的时候难免会用到微信sdk，当我们用react或vue做的spa应用，直接引入后会发现，在按安卓上可以正常调试，而ios上一直报签名错误（但你发现你刷新一下又可以了。。），等各种问题。在我连连续续踩了各种坑之后，含泪写此文。。。闲话不多说，上代码！（再说一句句，希望获取前端进步的可以关注下qdleader）</p><p><strong>引入sdk</strong></p><p>首先在main.js中引入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 每次切换路由时候，注册config(并解决ios的兼容问题)</span>
<span class="line">import { bUrlH5 } from &quot;@/http/httpUrl.js&quot;;</span>
<span class="line">router.afterEach((to, from) =&gt; {</span>
<span class="line">    let basicPath = bUrlH5</span>
<span class="line">    let path = to.fullPath.slice(1) // 去除&#39;/&#39;</span>
<span class="line"></span>
<span class="line">    if (!sessionStorage.getItem(&#39;initLink&#39;)) {</span>
<span class="line">        // 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。</span>
<span class="line">        sessionStorage.setItem(&#39;initLink&#39;, document.URL)</span>
<span class="line">    }</span>
<span class="line">    let url</span>
<span class="line">    if (!!window.__wxjs_is_wkwebview) {</span>
<span class="line">        // ios</span>
<span class="line">        url = sessionStorage.getItem(&#39;initLink&#39;)</span>
<span class="line">    } else {</span>
<span class="line">        // 安卓 process.env.BASE_URL 自己定义各个环境下域名变量</span>
<span class="line">        url = basicPath + path</span>
<span class="line">    }</span>
<span class="line">    store.commit(&#39;URLLINK&#39;, url)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里引入的bUrlH5就是的网站的地址，比如http://www.baidu.com</p><p>ios签名错误的根源就是，你传给服务器的地址是你首次进来的根地址，跟你的当前地址不同。这是微信浏览器在ios下的一个bug。</p><p>我把url存到了vuex中，vuex不太懂的可以看我之前的一篇文章。</p><p>在vuex中 首先维护types文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const URLLINK = &#39;URLLINK&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后在mutations文件中：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {</span>
<span class="line">    URLLINK,</span>
<span class="line">} from &#39;./types&#39;</span>
<span class="line">import getters from &#39;./getters&#39;</span>
<span class="line"></span>
<span class="line">const state = {</span>
<span class="line"></span>
<span class="line">    urlLink:&#39;&#39;,//存储ios首次进来的链接</span>
<span class="line"></span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const mutations = {</span>
<span class="line">    //存储url解决ios的sdk问题</span>
<span class="line">    [URLLINK](state, urllink) {</span>
<span class="line">        state.urlLink = urllink</span>
<span class="line">    },</span>
<span class="line">};</span>
<span class="line">export default {</span>
<span class="line">	state,</span>
<span class="line">	mutations,</span>
<span class="line">	getters</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点来啦 在项目中建一个wxSdk.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// import wx from &#39;weixin-js-sdk&#39;</span>
<span class="line">import wx from &#39;weixin-jsapi&#39;</span>
<span class="line">import store from &#39;@/store&#39;</span>
<span class="line">import { bUrl } from &quot;@/http/httpUrl.js&quot;;</span>
<span class="line">import { Base64 } from &#39;js-base64&#39;;</span>
<span class="line">import axios from &#39;axios&#39;;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">    /* 初始化wxjsdk各种接口 */</span>
<span class="line">    init(apiList = [], url) {</span>
<span class="line">        //需要使用的api列表</span>
<span class="line">        let urlWx = bUrl + &#39;V1/wechat/sharesign&#39;</span>
<span class="line">        return new Promise((resolve, reject) =&gt; {</span>
<span class="line">            let url = Base64.encode(store.state.mutations.urlLink);</span>
<span class="line">            axios({</span>
<span class="line">                method: &#39;get&#39;,</span>
<span class="line">                url: urlWx,</span>
<span class="line">                params: {</span>
<span class="line">                    url: url,</span>
<span class="line">                }</span>
<span class="line">            }).then(function (res) {</span>
<span class="line">                if (res.data.appId) {</span>
<span class="line">                    wx.config({</span>
<span class="line">                        debug: false, </span>
<span class="line">                        appId: res.data.appId,</span>
<span class="line">                        timestamp: res.data.timestamp,</span>
<span class="line">                        nonceStr: res.data.nonceStr,</span>
<span class="line">                        signature: res.data.signature,</span>
<span class="line">                        jsApiList: apiList</span>
<span class="line">                    })</span>
<span class="line">                    wx.ready(res =&gt; {</span>
<span class="line">                        // 微信SDK准备就绪后执行的回调。</span>
<span class="line">                        resolve(wx, res)</span>
<span class="line">                    })</span>
<span class="line">                } else {</span>
<span class="line">                    reject(res)</span>
<span class="line">                }</span>
<span class="line">            }).catch(function (err) {</span>
<span class="line">                reject(err)</span>
<span class="line">                console.log(&quot;报错处理&quot;)</span>
<span class="line">            });</span>
<span class="line">        })</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>要说明几个坑</strong></p><ul><li>1.引入sdk时候要npm weixin-jsapi 而不要用weixin-js-sdk，因为weixin-js-sdk不支持es6语法import 引入后，你打印wx会发现为undefined。</li><li>2你传给后台的url要进行一次编码encodeURIComponent呀，base64呀都可以。</li></ul><p>好了，我都封装好了，那怎么调用呢。</p><p>来喽来喽。。。</p><p>调用的时候只需要在相应的页面引入你写的这个插件，</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import wechatUtil from &#39;@/common/js/wxSdk.js&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        setL() {</span>
<span class="line">            let _this = this;</span>
<span class="line">              wechatUtil</span>
<span class="line">                    .init([</span>
<span class="line">                    &#39;updateAppMessageShareData&#39;,</span>
<span class="line">                    &#39;onMenuShareAppMessage&#39;,</span>
<span class="line">                    &#39;onMenuShareTimeline&#39;,</span>
<span class="line">                    &#39;updateTimelineShareData&#39;,</span>
<span class="line">                    &quot;openLocation&quot;,</span>
<span class="line">                    ])</span>
<span class="line">                    .then((wx, res) =&gt; {</span>
<span class="line">                        // 这里写微信的接口</span>
<span class="line">                        console.log(111,wx)</span>
<span class="line">                                    //地理位置</span>
<span class="line">                        wx.openLocation({</span>
<span class="line">                            latitude: Number(_this.detailInfo.lat), // 纬度，浮点数，范围为90 ~ -90</span>
<span class="line">                            longitude: Number(_this.detailInfo.lon), // 经度，浮点数，范围为180 ~ -180。</span>
<span class="line">                            name: _this.detailInfo.place_name, // 位置名</span>
<span class="line">                            address: _this.detailInfo.place_address, // 地址详情说明</span>
<span class="line">                            scale: 28, // 地图缩放级别,整形值,范围从1~28。默认为最大</span>
<span class="line">                            infoUrl: &quot;&quot; // 在查看位置界面底部显示的超链接,可点击跳转</span>
<span class="line">                        });</span>
<span class="line">                    })</span>
<span class="line">        },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后对照着，微信官网，直接粘锅来用，就可以啦，ios，android都ok啦。</p><p>当你发现ios，android怎么都是签名错误呀，你先看看你的公众号上有没有配置安全域名呀，你服务器的ip有没有加到公众号的白名单呀。没配好，代码再怎么改也ok不了。。</p><p>最后，前端有兴趣的可以关注下，也可以加群，一起成长。还有github<a href="https://github.com/qdleader/qdleader" target="_blank" rel="noopener noreferrer">https://github.com/qdleader/qdleader</a>每日更新</p><p><img src="https://user-gold-cdn.xitu.io/2020/5/24/17244bedd6ec15e5?w=972&amp;h=902&amp;f=jpeg&amp;s=102579" alt=""></p>`,24)]))}const r=n(l,[["render",d]]),t=JSON.parse(`{"path":"/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E5%BC%80%E5%8F%91/W002-%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E5%BC%80%E5%8F%91%E4%B9%8BSDK.html","title":"W002-微信公众号开发之SDK","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1750296722000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"2308b320062a9b64e8c3dfbe2f9f1a938c998e3d","time":1750296722000,"email":"yk4545945@163.com","author":"qdleader","message":"Merge branch 'master' of https://github.com/qdleader/qdleader"}]},"filePathRelative":"微信公众号开发/W002-微信公众号开发之SDK.md"}`);export{r as comp,t as data};
