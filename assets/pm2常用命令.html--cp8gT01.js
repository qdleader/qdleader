import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const i={};function p(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 安装 pm2</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pm2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出所有实例</span></span>
<span class="line"></span>
<span class="line">pm2 list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># fork模式，无法处理并发</span></span>
<span class="line"><span class="token comment"># 启动一个实例，实例名myapi</span></span>
<span class="line"></span>
<span class="line">pm2 start index.js <span class="token parameter variable">--name</span> myapi</span>
<span class="line"></span>
<span class="line"><span class="token comment"># cluster模式，可处理并发，启动4个实例</span></span>
<span class="line"></span>
<span class="line">pm2 start index.js <span class="token parameter variable">--name</span> myapi <span class="token parameter variable">-i</span> <span class="token number">4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动一个实例，并监视应用目录的变化，一旦发生变化，自动重启</span></span>
<span class="line"></span>
<span class="line">pm2 start index.js <span class="token parameter variable">--name</span> myapi <span class="token parameter variable">--watch</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 内存使用超过上限自动重启</span></span>
<span class="line"></span>
<span class="line">pm2 start index.js <span class="token parameter variable">--name</span> myapi --max-memory-restart 20M</span>
<span class="line">pm2 start index.js <span class="token parameter variable">--name</span> myapi --node-args<span class="token operator">=</span><span class="token string">&quot;--max-old-space-size=4096&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 把名称为myapi的应用增加3个实例</span></span>
<span class="line"></span>
<span class="line">pm2 scale myapi +3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 把名称为myapi的应用增加到10个实例</span></span>
<span class="line"></span>
<span class="line">pm2 scale myapi <span class="token number">10</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重置重启次数</span></span>
<span class="line"></span>
<span class="line">pm2 reset myapi</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 监视所有进程</span></span>
<span class="line"></span>
<span class="line">pm2 monit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示所有进程的日志</span></span>
<span class="line"></span>
<span class="line">pm2 logs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止所有进程</span></span>
<span class="line"></span>
<span class="line">pm2 stop all</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启所有进程</span></span>
<span class="line"></span>
<span class="line">pm2 restart all</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重载所有进程，0秒停机</span></span>
<span class="line"></span>
<span class="line">pm2 reload all</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 杀死所有进程</span></span>
<span class="line"></span>
<span class="line">pm2 delete all</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看某个进程的信息</span></span>
<span class="line"></span>
<span class="line">pm2 describe ID号</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用pm2设置nodejs开机自启</span></span>
<span class="line"></span>
<span class="line">pm2 save <span class="token operator">&amp;&amp;</span> pm2 startup</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开启api访问，http://ip:9615</span></span>
<span class="line"></span>
<span class="line">pm2 web</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cluster-mode" tabindex="-1"><a class="header-anchor" href="#cluster-mode"><span>cluster mode</span></a></h2><p>cluster mode 就是在单台服务器上，开启多个相同 node.js项目 进程，共同处理网络请求服务，让 node.js项目 处理并发和响应速度达到最高性能。</p><p>二、解决方案</p><h2 id="法一-命令启动" tabindex="-1"><a class="header-anchor" href="#法一-命令启动"><span>法一：命令启动</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 启动多个 node.js项目进程（进程数量 = cpu核数量）</span></span>
<span class="line"></span>
<span class="line">pm2 start app.js <span class="token parameter variable">-i</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="法二-配置文件启动" tabindex="-1"><a class="header-anchor" href="#法二-配置文件启动"><span>法二：配置文件启动</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 1、配置文件(processes.json)，设置如下</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">apps</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&quot;api.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token string">&quot;max&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">exec_mode</span><span class="token operator">:</span> <span class="token string">&quot;cluster&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 开启进程间的负载均衡模式</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"> <span class="token comment"># 2、用配置文件启动 node.js 项目</span></span>
<span class="line">  pm2 start processes.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、其他重要说明" tabindex="-1"><a class="header-anchor" href="#三、其他重要说明"><span>三、其他重要说明</span></a></h2><h4 id="i-后面的数字说明" tabindex="-1"><a class="header-anchor" href="#i-后面的数字说明"><span>-i 后面的数字说明</span></a></h4><blockquote><p>0/max ：开启进程数量 == cpu核数量 -1：进程数量 == cpu核数量 - 1</p></blockquote><h4 id="pm2更改instances配置不起作用解决办法" tabindex="-1"><a class="header-anchor" href="#pm2更改instances配置不起作用解决办法"><span>pm2更改instances配置不起作用解决办法</span></a></h4><p>有时候改了pm2 start app.js -i 0 改了模式没有生效，那就因为现在有正在运行的node进程，需要pm2 delete all 杀死所有进程，然后再次启动。即可！</p>`,14)])])}const r=n(i,[["render",p]]),t=JSON.parse('{"path":"/node/pm2%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"node/pm2常用命令.md"}');export{r as comp,t as data};
