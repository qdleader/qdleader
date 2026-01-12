import{_ as s,c as a,a as e,o as t}from"./app-KfnfuIf0.js";const l={};function p(i,n){return t(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="taro中的视频播放组件" tabindex="-1"><a class="header-anchor" href="#taro中的视频播放组件"><span>taro中的视频播放组件</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token number">1</span>、使用</span>
<span class="line">     <span class="token operator">&lt;</span>Video </span>
<span class="line">        src<span class="token operator">=</span><span class="token string">&#39;https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&amp;bizid=1023&amp;hy=SH&amp;fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400&#39;</span></span>
<span class="line">        controls<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
<span class="line">        poster<span class="token operator">=</span><span class="token string">&#39;https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg&#39;</span></span>
<span class="line">        id<span class="token operator">=</span><span class="token string">&#39;video&#39;</span></span>
<span class="line">        enablePlayGesture</span>
<span class="line">     <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">     </span>
<span class="line"><span class="token number">2</span>、属性</span>
<span class="line">	src	要播放视频的资源地址</span>
<span class="line">	duration	指定视频时长</span>
<span class="line">	controls	是否显示默认播放控件（播放<span class="token operator">/</span>暂停按钮、播放进度、时间）</span>
<span class="line">	danmuList	弹幕列表</span>
<span class="line">	danmuBtn	是否显示弹幕按钮，只在初始化时有效，不能动态变更</span>
<span class="line">	enableDanmu	是否展示弹幕，只在初始化时有效，不能动态变更</span>
<span class="line">	autoplay	是否自动播放</span>
<span class="line">	loop	是否循环播放</span>
<span class="line">	muted	是否静音播放</span>
<span class="line">	initialTime	指定视频初始播放位置</span>
<span class="line">	pageGesture	在非全屏模式下，是否开启亮度与音量调节手势</span>
<span class="line">	direction	设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 <span class="token number">0</span>（正常竖向）<span class="token punctuation">,</span> <span class="token number">90</span>（屏幕逆时针<span class="token number">90</span>度）<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">90</span>（屏幕顺时针<span class="token number">90</span>度）</span>
<span class="line">	showProgress	若不设置，宽度大于<span class="token number">240</span>时才会显示</span>
<span class="line">	showFullscreenBtn	是否显示全屏按钮</span>
<span class="line">	showPlayBtn	是否显示视频底部控制栏的播放按钮</span>
<span class="line">	showCenterPlayBtn	是否显示视频中间的播放按钮</span>
<span class="line">	enableProgressGesture	是否开启控制进度的手势</span>
<span class="line">	objectFit	当视频大小与 video 容器大小不一致时，视频的表现形式</span>
<span class="line">	poster	视频封面的图片网络资源地址，如果 controls 属性值为 <span class="token boolean">false</span> 则设置 poster 无效</span>
<span class="line">	showMuteBtn	是否显示静音按钮</span>
<span class="line">	title	视频的标题，全屏时在顶部展示</span>
<span class="line">	playBtnPosition	<span class="token string">&quot;bottom&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;center&quot;</span>播放按钮的位置</span>
<span class="line">	enablePlayGesture	是否开启播放手势，即双击切换播放<span class="token operator">/</span>暂停</span>
<span class="line">	autoPauseIfNavigate	当跳转到其它小程序页面时，是否自动暂停本页面的视频</span>
<span class="line">	autoPauseIfOpenNative	当跳转到其它微信原生页面时，是否自动暂停本页面的视频</span>
<span class="line">	vslideGesture	在非全屏模式下，是否开启亮度与音量调节手势（同</span>
<span class="line">	vslideGestureInFullscreen	在全屏模式下，是否开启亮度与音量调节手势</span>
<span class="line">	adUnitId	视频前贴广告单元<span class="token constant">ID</span>，更多详情可参考开放能力视频前贴广告</span>
<span class="line">	posterForCrawler	用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址</span>
<span class="line">	showCastingButton	显示投屏按钮。只安卓且同层渲染下生效，支持 <span class="token constant">DLNA</span> 协议</span>
<span class="line">	onPlay	当开始<span class="token operator">/</span>继续播放时触发 play 事件</span>
<span class="line">	onPause	当暂停播放时触发 pause 事件</span>
<span class="line">	onEnded	当播放到末尾时触发 ended 事件</span>
<span class="line">	onTimeUpdate	播放进度变化时触发<span class="token punctuation">,</span> 触发频率 250ms 一次</span>
<span class="line">		event<span class="token punctuation">.</span>detail <span class="token operator">=</span> <span class="token punctuation">{</span>currentTime<span class="token punctuation">,</span> duration<span class="token punctuation">}</span></span>
<span class="line">	onFullscreenChange	当视频进入和退出全屏是触发</span>
<span class="line">		event<span class="token punctuation">.</span>detail <span class="token operator">=</span> <span class="token punctuation">{</span>fullScreen<span class="token punctuation">,</span> direction<span class="token punctuation">}</span>，direction取为 vertical 或 horizontal</span>
<span class="line">	onWaiting	当视频进入和退出全屏是触发</span>
<span class="line">		event<span class="token punctuation">.</span>detail <span class="token operator">=</span> <span class="token punctuation">{</span>fullScreen<span class="token punctuation">,</span> direction<span class="token punctuation">}</span>，direction 取为 vertical 或 horizontal</span>
<span class="line">	onError	视频播放出错时触发</span>
<span class="line">	onProgress	加载进度变化时触发，只支持一段加载</span>
<span class="line">	onLoadedMetaData	视频元数据加载完成时触发。event<span class="token punctuation">.</span>detail <span class="token operator">=</span> <span class="token punctuation">{</span>width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> duration<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3</span>、Video对象</span>
<span class="line">	<span class="token keyword">let</span> videoContext <span class="token operator">=</span> Taro<span class="token punctuation">.</span><span class="token function">createVideoContext</span><span class="token punctuation">(</span><span class="token string">&#39;Video的id值&#39;</span><span class="token punctuation">)</span></span>
<span class="line">	</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">exitFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	退出全屏</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">hideStatusBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	隐藏状态栏，仅在iOS全屏下有效</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">playbackRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	设置倍速播放</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">requestFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>			进入全屏</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	跳转到指定位置</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">sendDanmu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	发送弹幕</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">showStatusBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	显示状态栏，仅在iOS全屏下有效</span>
<span class="line">	VideoContext<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	停止视频</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const o=s(l,[["render",p]]),u=JSON.parse('{"path":"/taro/taro%E4%B8%AD%E7%9A%84%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E7%BB%84%E4%BB%B6.html","title":"taro中的视频播放组件","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"taro/taro中的视频播放组件.md"}');export{o as comp,u as data};
