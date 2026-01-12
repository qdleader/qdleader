import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function i(t,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1、pm2是什么" tabindex="-1"><a class="header-anchor" href="#_1、pm2是什么"><span>1、PM2是什么</span></a></h2><p>PM2 是一个带有负载均衡功能的 Node 应用的进程管理器。我们都知道nodejs是单进程执行的，当程序出现错误死掉之后需要能够自动，这时候就需要PM2了。当然进程管理工具有很多，例如forever等等；</p><p>入门教程 挑我们最爱的express应用来举例。一般我们都是通过npm start启动应用，其实就是调用node ./bin/www。那么，换成pm2就是 注意，这里用了--watch参数，意味着当你的express应用代码发生变化时，pm2会帮你重启服务，多贴心。 pm2 start ./bin/www --watch</p><h3 id="_2、主要特性" tabindex="-1"><a class="header-anchor" href="#_2、主要特性"><span>2、主要特性</span></a></h3><p>1）启动多子进程，充分使用CPU</p><p>2）子进程之间负载均衡</p><p>3）0秒重启</p><p>4）界面友好</p><p>5）提供进程交互（例如：监控）接口</p><h3 id="_3、安装" tabindex="-1"><a class="header-anchor" href="#_3、安装"><span>3、安装</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm install pm2 <span class="token operator">-</span>g</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4、使用" tabindex="-1"><a class="header-anchor" href="#_4、使用"><span>4、使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">pm2 start app<span class="token punctuation">.</span>js <span class="token operator">-</span>i <span class="token number">4</span> <span class="token operator">-</span>n customer   <span class="token comment">//-i 4启动4个进程 -n customer指定进程名称</span></span>
<span class="line"></span>
<span class="line">pm2 list  <span class="token comment">//查看进程状态</span></span>
<span class="line"></span>
<span class="line">pm2 info customer <span class="token comment">//查看单个进程的详细启动信息</span></span>
<span class="line"></span>
<span class="line">pm2 logs customer   <span class="token comment">//查看实时日志</span></span>
<span class="line"></span>
<span class="line">pm2 restart  all <span class="token operator">||</span> customer <span class="token comment">//直接重启进程</span></span>
<span class="line"></span>
<span class="line">pm2 reload customer  <span class="token comment">//0秒停机重启进程</span></span>
<span class="line"></span>
<span class="line">pm2 gracefulReload customer  <span class="token comment">//等待网络连接处理完之后重启进程;避免请求处理中断导致可能的业务错误</span></span>
<span class="line"></span>
<span class="line">pm2 <span class="token keyword">delete</span> all<span class="token operator">|</span>customer <span class="token comment">//删除所有的或者指定的进程</span></span>
<span class="line"></span>
<span class="line">pm2 stop  all <span class="token operator">||</span>customer  <span class="token comment">//停止进程，但是进程仍然存在</span></span>
<span class="line"></span>
<span class="line">pm2 monit    <span class="token comment">//监控进程信息</span></span>
<span class="line"></span>
<span class="line">pm2 update <span class="token comment">//升级pm2之后需要升级老版本启动的进程</span></span>
<span class="line"></span>
<span class="line">pm2 start start<span class="token punctuation">.</span>json <span class="token comment">//通过配置文件启动 </span></span>
<span class="line"></span>
<span class="line">start<span class="token punctuation">.</span>json示例</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token string">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;project&quot;</span><span class="token punctuation">,</span>    <span class="token comment">//进程名称</span></span>
<span class="line"></span>
<span class="line">    <span class="token string">&quot;script&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;app.js&quot;</span><span class="token punctuation">,</span>    <span class="token comment">//入口文件</span></span>
<span class="line"></span>
<span class="line">    <span class="token string">&quot;exec_mode&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;cluster&quot;</span><span class="token punctuation">,</span> <span class="token comment">//模式</span></span>
<span class="line"></span>
<span class="line">    <span class="token string">&quot;instances&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>   <span class="token comment">//进程实例个数</span></span>
<span class="line"></span>
<span class="line">    <span class="token string">&quot;cwd&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;./project/&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//路径</span></span>
<span class="line"></span>
<span class="line">    <span class="token string">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>   <span class="token comment">//环境变量</span></span>
<span class="line"></span>
<span class="line">        <span class="token string">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> </span>
<span class="line"></span>
<span class="line">        <span class="token string">&quot;DEBUG&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token comment">//打印debug日志</span></span>
<span class="line"></span>
<span class="line">        <span class="token string">&quot;DEBUG_FD&quot;</span> <span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">//debug日志默认输出到process.stderr；该参数将日志输出到process.stdout</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)])])}const o=n(l,[["render",i]]),r=JSON.parse('{"path":"/node/pm2%E4%BB%8B%E7%BB%8D%E5%8F%8A%E5%AE%89%E8%A3%85.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"node/pm2介绍及安装.md"}');export{o as comp,r as data};
