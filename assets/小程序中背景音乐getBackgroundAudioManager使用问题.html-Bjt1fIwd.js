import{_ as n,c as s,a as e,o as i}from"./app-ChbYw63X.js";const l={};function d(t,a){return i(),s("div",null,a[0]||(a[0]=[e(`<h1 id="小程序中背景音乐getbackgroundaudiomanager使用问题" tabindex="-1"><a class="header-anchor" href="#小程序中背景音乐getbackgroundaudiomanager使用问题"><span>小程序中背景音乐getBackgroundAudioManager使用问题</span></a></h1><h2 id="小程序中背景音乐getbackgroundaudiomanager使用问题-1" tabindex="-1"><a class="header-anchor" href="#小程序中背景音乐getbackgroundaudiomanager使用问题-1"><span>小程序中背景音乐getBackgroundAudioManager使用问题</span></a></h2><h3 id="_1-当你在-onplay方法中写入计时器时候-计时器会没两秒或三秒更新一次" tabindex="-1"><a class="header-anchor" href="#_1-当你在-onplay方法中写入计时器时候-计时器会没两秒或三秒更新一次"><span>1. 当你在 onPlay方法中写入计时器时候，计时器会没两秒或三秒更新一次</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"> var manager = wx.getBackgroundAudioManager();</span>
<span class="line">      manager.title = that.data.audioList[that.data.audioIndex].trackCtitle || &quot;音频标题&quot;;</span>
<span class="line">      manager.epname = that.data.playlistName || &quot;专辑名称&quot;;</span>
<span class="line">      manager.singer = audio.author || &quot;歌手名&quot;;</span>
<span class="line"></span>
<span class="line">      // manager.coverImgUrl = audio.poster;</span>
<span class="line">      // 设置了 src 之后会自动播放</span>
<span class="line">      manager.src = audio;</span>
<span class="line">      manager.currentTime = 0;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      manager.onPlay(function () {</span>
<span class="line">        console.log(&quot;======onPlay======&quot;);</span>
<span class="line">        that.setData({</span>
<span class="line">          playStatus: true,</span>
<span class="line">          pausedSwitch:true,</span>
<span class="line">          currentUrl:res.data.data</span>
<span class="line">        })</span>
<span class="line"></span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法是把计时器提出来在别的事件中写</p><p>eg：我在播放按钮时候启动计时器</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//播放按钮</span>
<span class="line">playOrpause: function () {</span>
<span class="line">  let manager = wx.getBackgroundAudioManager();</span>
<span class="line">  if (this.data.playStatus) {</span>
<span class="line">    manager.pause();</span>
<span class="line">    this.setData({</span>
<span class="line">      playStatus: false,</span>
<span class="line">    })</span>
<span class="line">    clearInterval(timerLeft)</span>
<span class="line">    // this.setData({</span>
<span class="line">    //     num3:1</span>
<span class="line">    // })</span>
<span class="line">  } else {</span>
<span class="line">    manager.play();</span>
<span class="line">    this.setData({</span>
<span class="line">      playStatus: true,</span>
<span class="line">    })</span>
<span class="line">    this.countTimeDownNew(manager)</span>
<span class="line">  }</span>
<span class="line">},</span>
<span class="line"></span>
<span class="line">countTimeDownNew: function (manager, cancel) {</span>
<span class="line">    let that = this;</span>
<span class="line">      timerLeft =  setInterval(()=&gt; {</span>
<span class="line">           let num = this.data.num3 + 1</span>
<span class="line">           this.setData({</span>
<span class="line">             num3:num</span>
<span class="line">           })</span>
<span class="line">          if (that.data.playStatus) {</span>
<span class="line">            console.log(&quot;that.formatTime(Math.ceil(manager.currentTime)&quot;,that.formatTime(Math.ceil(manager.currentTime)))</span>
<span class="line">            that.setData({</span>
<span class="line">              progress: Math.ceil(manager.currentTime),</span>
<span class="line">              progressText: that.formatTime(Math.ceil(manager.currentTime)),</span>
<span class="line">              progressText: that.formatTime(manager.currentTime),</span>
<span class="line">              duration: Math.ceil(manager.duration),</span>
<span class="line">              durationText: that.formatTime(Math.ceil(manager.duration))</span>
<span class="line">            })</span>
<span class="line">          }</span>
<span class="line">       },1000)</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-manager-onpause在暂停时候-会在手机上循环一直调用onpause方法-调试器上没事" tabindex="-1"><a class="header-anchor" href="#_2-manager-onpause在暂停时候-会在手机上循环一直调用onpause方法-调试器上没事"><span>2.manager.onpause在暂停时候 会在手机上循环一直调用onpause方法，调试器上没事</span></a></h3><p>在苹果11上表现是图标一直会闪</p><p>修复方案是在onPause方法里面加个 pausedSwitch属性开关</p><p>播放时候再打开</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">manager.onPause(function () {</span>
<span class="line">          console.log(&quot;一致获取内容222&quot;)</span>
<span class="line">          if(that.data.pausedSwitch) {</span>
<span class="line">            that.setData({</span>
<span class="line">              pausedSwitch:false,</span>
<span class="line">            })</span>
<span class="line">              console.log(&quot;一致获取内容2&quot;)</span>
<span class="line">              console.log(&quot;that.data.progress1&quot;,that.data.progress)</span>
<span class="line">              manager.seek(that.data.progress);</span>
<span class="line">              that.setData({</span>
<span class="line">                progressText: that.formatTime(that.data.progress),</span>
<span class="line">                progress:Math.ceil(that.data.progress),</span>
<span class="line">                playStatus: false</span>
<span class="line">              })</span>
<span class="line">              that.changeData()</span>
<span class="line">              that.startSetInter2()</span>
<span class="line">              console.log(&quot;开始 that.data.num2&quot;,that.data.num2)</span>
<span class="line">              console.log(&quot;开始 that.data.isReload&quot;,that.data.isReload)</span>
<span class="line">              console.log(&quot;======onPause 基础方法1======&quot;);</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line">        });</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const c=n(l,[["render",d]]),p=JSON.parse('{"path":"/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%AD%E8%83%8C%E6%99%AF%E9%9F%B3%E4%B9%90getBackgroundAudioManager%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98.html","title":"小程序中背景音乐getBackgroundAudioManager使用问题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"小程序中背景音乐getBackgroundAudioManager使用问题","slug":"小程序中背景音乐getbackgroundaudiomanager使用问题-1","link":"#小程序中背景音乐getbackgroundaudiomanager使用问题-1","children":[{"level":3,"title":"1. 当你在 onPlay方法中写入计时器时候，计时器会没两秒或三秒更新一次","slug":"_1-当你在-onplay方法中写入计时器时候-计时器会没两秒或三秒更新一次","link":"#_1-当你在-onplay方法中写入计时器时候-计时器会没两秒或三秒更新一次","children":[]},{"level":3,"title":"2.manager.onpause在暂停时候 会在手机上循环一直调用onpause方法，调试器上没事","slug":"_2-manager-onpause在暂停时候-会在手机上循环一直调用onpause方法-调试器上没事","link":"#_2-manager-onpause在暂停时候-会在手机上循环一直调用onpause方法-调试器上没事","children":[]}]}],"git":{"updatedTime":1743991208000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"06ae3da64ec05c046ab6f8fcadaec095931d7383","time":1743991208000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加chat表格样式修改解决方案"}]},"filePathRelative":"微信小程序/小程序中背景音乐getBackgroundAudioManager使用问题.md"}');export{c as comp,p as data};
