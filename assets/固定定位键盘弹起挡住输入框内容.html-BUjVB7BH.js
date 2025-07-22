import{_ as n,c as e,a,o as i}from"./app-BIm5By0_.js";const l={};function t(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="固定定位键盘弹起挡住输入框内容" tabindex="-1"><a class="header-anchor" href="#固定定位键盘弹起挡住输入框内容"><span>固定定位键盘弹起挡住输入框内容</span></a></h1><p>12.固定定位布局键盘挡住输入框内容？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div class=&quot;submit&quot;&gt;</span>
<span class="line">     &lt;button type=&quot;button&quot; class=&quot;btn&quot;&gt;提交信息&lt;/button&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">.submit {</span>
<span class="line">    display: flex;</span>
<span class="line">    width: 100%;</span>
<span class="line">    justify-content: center;</span>
<span class="line">    position: fixed;</span>
<span class="line">    bottom: 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过resize函数监听窗口变化，然后把fixed属性改为static即可解决</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var windheight = $(window).height();  /*未唤起键盘时当前窗口高度*/</span>
<span class="line"></span>
<span class="line">$(window).resize(function(){</span>
<span class="line">   var docheight = $(window).height();  /*唤起键盘时当前窗口高度*/        </span>
<span class="line">   if(docheight &lt; windheight){            /*当唤起键盘高度小于未唤起键盘高度时执行*/</span>
<span class="line">      $(&quot;.submit&quot;).css(&quot;position&quot;,&quot;static&quot;);</span>
<span class="line">   }else{</span>
<span class="line">      $(&quot;.submit&quot;).css(&quot;position&quot;,&quot;fixed&quot;);</span>
<span class="line">   }           </span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(l,[["render",t]]),p=JSON.parse('{"path":"/h5/%E5%9B%BA%E5%AE%9A%E5%AE%9A%E4%BD%8D%E9%94%AE%E7%9B%98%E5%BC%B9%E8%B5%B7%E6%8C%A1%E4%BD%8F%E8%BE%93%E5%85%A5%E6%A1%86%E5%86%85%E5%AE%B9.html","title":"固定定位键盘弹起挡住输入框内容","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1753148857000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"ac1cf3212b41ab3aca8f411ac8167254f5e148f8","time":1753148857000,"email":"yk4545945@163.com","author":"qdleader","message":"feat: 增加复制文案的兼容写法"}]},"filePathRelative":"h5/固定定位键盘弹起挡住输入框内容.md"}');export{r as comp,p as data};
