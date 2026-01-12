import{_ as n,c as a,a as e,o as i}from"./app-KfnfuIf0.js";const l={};function p(d,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="项目中使用视频插件" tabindex="-1"><a class="header-anchor" href="#项目中使用视频插件"><span>项目中使用视频插件</span></a></h1><p>以vue 中使用视频插件为例：</p><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm install vue<span class="token operator">-</span>video<span class="token operator">-</span>player <span class="token operator">--</span>save<span class="token operator">-</span>dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">import</span> VueVideoPlayer <span class="token keyword">from</span> <span class="token string">&#39;vue-video-player&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// require videojs style</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&#39;video.js/dist/video-js.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// import &#39;vue-video-player/src/custom-theme.css&#39;</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueVideoPlayer<span class="token punctuation">,</span> <span class="token comment">/* {</span>
<span class="line">    options: global default options,</span>
<span class="line">    events: global videojs events</span>
<span class="line">  } */</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件中使用" tabindex="-1"><a class="header-anchor" href="#组件中使用"><span>组件中使用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;!--在视频外面加一个容器--&gt;</span>
<span class="line">    &lt;div class=&quot;input_video&quot;&gt;</span>
<span class="line">    &lt;video-player  class=&quot;video-player vjs-custom-skin&quot;</span>
<span class="line">                   ref=&quot;videoPlayer&quot;</span>
<span class="line">                   :playsinline=&quot;true&quot;</span>
<span class="line">                   :options=&quot;playerOptions&quot;</span>
<span class="line">    &gt;&lt;/video-player&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    export default {</span>
<span class="line">        name : &#39;BusImg&#39;,</span>
<span class="line">        data () {</span>
<span class="line">            return {</span>
<span class="line">                // 视频播放</span>
<span class="line">                playerOptions : {</span>
<span class="line">                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度</span>
<span class="line">                    autoplay : false, //如果true,浏览器准备好时开始回放。</span>
<span class="line">                    muted : false, // 默认情况下将会消除任何音频。</span>
<span class="line">                    loop : false, // 视频一结束就重新开始。</span>
<span class="line">                    preload : &#39;auto&#39;, // 建议浏览器在&lt;video&gt;加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）</span>
<span class="line">                    language : &#39;zh-CN&#39;,</span>
<span class="line">                    aspectRatio : &#39;16:9&#39;, // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如&quot;16:9&quot;或&quot;4:3&quot;）</span>
<span class="line">                    fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。</span>
<span class="line">                    sources : [ {</span>
<span class="line">                        type : &quot;&quot;,</span>
<span class="line">                        src : &#39;http://www.html5videoplayer.net/videos/madagascar3.mp4&#39;//url地址</span>
<span class="line">                    } ],</span>
<span class="line">                    poster : &quot;&quot;, //你的封面地址</span>
<span class="line">                    // width: document.documentElement.clientWidth,</span>
<span class="line">                    notSupportedMessage : &#39;此视频暂无法播放，请稍后再试&#39;, //允许覆盖Video.js无法播放媒体源时显示的默认信息。</span>
<span class="line">                    controlBar : {</span>
<span class="line">                        timeDivider : true,//当前时间和持续时间的分隔符</span>
<span class="line">                        durationDisplay : true,//显示持续时间</span>
<span class="line">                        remainingTimeDisplay : false,//是否显示剩余时间功能</span>
<span class="line">                        fullscreenToggle : true  //全屏按钮</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style&gt;</span>
<span class="line">    .input_video{</span>
<span class="line">        width: 400px;</span>
<span class="line">        height: 400px;</span>
<span class="line">        margin: 0 auto;</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line">\`\`\`css</span>
<span class="line"></span>
<span class="line">##  闭坑小技巧</span>
<span class="line">### tip1:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们要控制播放进度时候要设置currentTime，你会发现this.$refs.videoPlayer.duration在一些浏览器上会打印（至少现在是ios的微信浏览器是这样）undefined或NAN，你可以用下面这个方法：</p><p>let stop = setInterval(() =&gt; { _this.duration = document.getElementsByClassName(&quot;vjs-tech&quot;)[0].duration; if (_this.duration) { console.log(&quot;打印时长&quot;,document.getElementsByClassName(&quot;vjs-tech&quot;)[0].duration) document.getElementsByClassName(&quot;vjs-tech&quot;)[0].currentTime = currentTime clearInterval(stop); } }, 150);</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,11)])])}const c=n(l,[["render",p]]),r=JSON.parse('{"path":"/video_audio/%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8%E8%A7%86%E9%A2%91%E6%8F%92%E4%BB%B6.html","title":"项目中使用视频插件","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"video&audio/项目中使用视频插件.md"}');export{c as comp,r as data};
