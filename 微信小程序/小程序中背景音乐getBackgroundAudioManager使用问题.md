# 小程序中背景音乐getBackgroundAudioManager使用问题

### 1. 当你在 onPlay方法中写入计时器时候，计时器会没两秒或三秒更新一次
```js
 var manager = wx.getBackgroundAudioManager();
      manager.title = that.data.audioList[that.data.audioIndex].trackCtitle || "音频标题";
      manager.epname = that.data.playlistName || "专辑名称";
      manager.singer = audio.author || "歌手名";

      // manager.coverImgUrl = audio.poster;
      // 设置了 src 之后会自动播放
      manager.src = audio;
      manager.currentTime = 0;

      manager.onPlay(function () {
        console.log("======onPlay======");
        that.setData({
          playStatus: true,
          pausedSwitch:true,
          currentUrl:res.data.data
        })

  });

```

解决方法是把计时器提出来在别的事件中写

eg：我在播放按钮时候启动计时器

```js
//播放按钮
playOrpause: function () {
  let manager = wx.getBackgroundAudioManager();
  if (this.data.playStatus) {
    manager.pause();
    this.setData({
      playStatus: false,
    })
    clearInterval(timerLeft)
    // this.setData({
    //     num3:1
    // })
  } else {
    manager.play();
    this.setData({
      playStatus: true,
    })
    this.countTimeDownNew(manager)
  }
},

countTimeDownNew: function (manager, cancel) {
    let that = this;
      timerLeft =  setInterval(()=> {
           let num = this.data.num3 + 1
           this.setData({
             num3:num
           })
          if (that.data.playStatus) {
            console.log("that.formatTime(Math.ceil(manager.currentTime)",that.formatTime(Math.ceil(manager.currentTime)))
            that.setData({
              progress: Math.ceil(manager.currentTime),
              progressText: that.formatTime(Math.ceil(manager.currentTime)),
              progressText: that.formatTime(manager.currentTime),
              duration: Math.ceil(manager.duration),
              durationText: that.formatTime(Math.ceil(manager.duration))
            })
          }
       },1000)
  },

```

### 2.manager.onpause在暂停时候 会在手机上循环一直调用onpause方法，调试器上没事

在苹果11上表现是图标一直会闪

修复方案是在onPause方法里面加个
pausedSwitch属性开关

播放时候再打开
```js
manager.onPause(function () {
          console.log("一致获取内容222")
          if(that.data.pausedSwitch) {
            that.setData({
              pausedSwitch:false,
            })
              console.log("一致获取内容2")
              console.log("that.data.progress1",that.data.progress)
              manager.seek(that.data.progress);
              that.setData({
                progressText: that.formatTime(that.data.progress),
                progress:Math.ceil(that.data.progress),
                playStatus: false
              })
              that.changeData()
              that.startSetInter2()
              console.log("开始 that.data.num2",that.data.num2)
              console.log("开始 that.data.isReload",that.data.isReload)
              console.log("======onPause 基础方法1======");
          }

        });
```
