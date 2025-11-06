# taro中的视频播放组件
```js
1、使用
     <Video 
        src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
        controls={true}
        poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
        id='video'
        enablePlayGesture
     />
     
2、属性
	src	要播放视频的资源地址
	duration	指定视频时长
	controls	是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
	danmuList	弹幕列表
	danmuBtn	是否显示弹幕按钮，只在初始化时有效，不能动态变更
	enableDanmu	是否展示弹幕，只在初始化时有效，不能动态变更
	autoplay	是否自动播放
	loop	是否循环播放
	muted	是否静音播放
	initialTime	指定视频初始播放位置
	pageGesture	在非全屏模式下，是否开启亮度与音量调节手势
	direction	设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）
	showProgress	若不设置，宽度大于240时才会显示
	showFullscreenBtn	是否显示全屏按钮
	showPlayBtn	是否显示视频底部控制栏的播放按钮
	showCenterPlayBtn	是否显示视频中间的播放按钮
	enableProgressGesture	是否开启控制进度的手势
	objectFit	当视频大小与 video 容器大小不一致时，视频的表现形式
	poster	视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效
	showMuteBtn	是否显示静音按钮
	title	视频的标题，全屏时在顶部展示
	playBtnPosition	"bottom" | "center"播放按钮的位置
	enablePlayGesture	是否开启播放手势，即双击切换播放/暂停
	autoPauseIfNavigate	当跳转到其它小程序页面时，是否自动暂停本页面的视频
	autoPauseIfOpenNative	当跳转到其它微信原生页面时，是否自动暂停本页面的视频
	vslideGesture	在非全屏模式下，是否开启亮度与音量调节手势（同
	vslideGestureInFullscreen	在全屏模式下，是否开启亮度与音量调节手势
	adUnitId	视频前贴广告单元ID，更多详情可参考开放能力视频前贴广告
	posterForCrawler	用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址
	showCastingButton	显示投屏按钮。只安卓且同层渲染下生效，支持 DLNA 协议
	onPlay	当开始/继续播放时触发 play 事件
	onPause	当暂停播放时触发 pause 事件
	onEnded	当播放到末尾时触发 ended 事件
	onTimeUpdate	播放进度变化时触发, 触发频率 250ms 一次
		event.detail = {currentTime, duration}
	onFullscreenChange	当视频进入和退出全屏是触发
		event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal
	onWaiting	当视频进入和退出全屏是触发
		event.detail = {fullScreen, direction}，direction 取为 vertical 或 horizontal
	onError	视频播放出错时触发
	onProgress	加载进度变化时触发，只支持一段加载
	onLoadedMetaData	视频元数据加载完成时触发。event.detail = {width, height, duration}

3、Video对象
	let videoContext = Taro.createVideoContext('Video的id值')
	
	VideoContext.exitFullScreen()	退出全屏
	VideoContext.hideStatusBar()	隐藏状态栏，仅在iOS全屏下有效
	VideoContext.pause()
	VideoContext.play()	
	VideoContext.playbackRate()	设置倍速播放
	VideoContext.requestFullScreen()			进入全屏
	VideoContext.seek()	跳转到指定位置
	VideoContext.sendDanmu()	发送弹幕
	VideoContext.showStatusBar()	显示状态栏，仅在iOS全屏下有效
	VideoContext.stop()	停止视频
```
