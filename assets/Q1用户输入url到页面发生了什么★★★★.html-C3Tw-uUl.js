import{_ as n,c as a,a as l,o as e}from"./app-KfnfuIf0.js";const i={};function p(c,s){return e(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="q1-用户输入-url-到页面发生了什么-★★★★" tabindex="-1"><a class="header-anchor" href="#q1-用户输入-url-到页面发生了什么-★★★★"><span>Q1 用户输入 url 到页面发生了什么 ★★★★</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">###用户输入url到页面发生了什么？★★★★</span>
<span class="line"></span>
<span class="line">    #<span class="token number">1.</span>域名解析</span>
<span class="line">    #<span class="token number">2.</span>发起tcp三次握手</span>
<span class="line">    #<span class="token number">3.</span>建立tcp连接后发起http请求</span>
<span class="line">    #<span class="token number">4.</span>服务器响应http请求，浏览器得到html代码</span>
<span class="line">    #<span class="token number">5.</span>浏览器解析html代码，并请求html代码中的资源</span>
<span class="line">    #<span class="token number">6.</span>浏览器对页面进行渲染呈现给用户</span>
<span class="line"></span>
<span class="line">被问道时候说上面即可，但被问道具体某一细节也要知道，比如你说的渲染是如何进行的？</span>
<span class="line"></span>
<span class="line">详细说就是</span>
<span class="line"></span>
<span class="line">地址栏输入url，</span>
<span class="line"></span>
<span class="line">要通过dns解析（浏览器是不能识别url地址的，需解析成ip地址），</span>
<span class="line">返回相对应的<span class="token constant">IP</span>地址，</span>
<span class="line">建立tcp连接，（tcp三次握手）</span>
<span class="line">发送Http请求，</span>
<span class="line">服务器进行处理并返回Http报文，</span>
<span class="line">浏览器渲染页面，</span>
<span class="line">断开连接（tcp四次挥手）</span>
<span class="line"> </span>
<span class="line"></span>
<span class="line"> 一<span class="token punctuation">.</span><span class="token constant">URL</span></span>
<span class="line"><span class="token constant">URL</span>（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源，俗称网址。</span>
<span class="line"></span>
<span class="line">二、域名解析（<span class="token constant">DNS</span>）</span>
<span class="line"><span class="token number">1.</span>域名解析：<span class="token constant">DNS</span> 协议提供通过域名查找 <span class="token constant">IP</span> 地址，或逆向从 <span class="token constant">IP</span> 地址反查域名的服务。<span class="token constant">DNS</span> 是一个网络服务器，我们的域名解析简单来说就是在 <span class="token constant">DNS</span> 上记录一条信息记录。</span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span>目的： 浏览器是不能通过url地址查找到对应的服务器，需通过ip地址。</span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span>通过域名查找<span class="token constant">IP</span>地址的过程：</span>
<span class="line"></span>
<span class="line">    浏览器缓存</span>
<span class="line">    操作系统缓存</span>
<span class="line">    路由缓存</span>
<span class="line"><span class="token number">4.</span><span class="token constant">ISP</span> 的 <span class="token constant">DNS</span> 服务器：<span class="token constant">ISP</span> <span class="token function">是互联网服务提供商</span><span class="token punctuation">(</span>Internet Service Provider<span class="token punctuation">)</span>的简称，<span class="token constant">ISP</span> 有专门的 <span class="token constant">DNS</span> 服务器应对 <span class="token constant">DNS</span> 查询请求。</span>
<span class="line"><span class="token number">5.</span>根服务器</span>
<span class="line"></span>
<span class="line">三 <span class="token punctuation">.</span>Tcp连接（三次握手）</span>
<span class="line"><span class="token number">1.</span>目的：同步客户端和服务端的序列号和确认号，并交换<span class="token constant">TCP</span>窗口大小信息。防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">四<span class="token punctuation">.</span>发送http请求</span>
<span class="line"></span>
<span class="line">请求报文 包括：请求行、请求头、请求体 。</span>
<span class="line"></span>
<span class="line">请求方法包含 <span class="token number">8</span> 种：<span class="token constant">GET</span>、<span class="token constant">POST</span>、<span class="token constant">PUT</span>、<span class="token constant">DELETE</span>、<span class="token constant">PATCH</span>、<span class="token constant">HEAD</span>、<span class="token constant">OPTIONS</span>、<span class="token constant">TRACE</span>。</span>
<span class="line"></span>
<span class="line">请求头包含请求的附加信息，由关键字<span class="token operator">/</span>值对组成，每行一对，关键字和值用英文冒号“<span class="token operator">:</span>”分隔。</span>
<span class="line"></span>
<span class="line">请求体，可以承载多个请求参数的数据，包含回车符、换行符和请求数据，并不是所有请求都具有请求数据。例：name<span class="token operator">=</span>tom<span class="token operator">&amp;</span>password<span class="token operator">=</span><span class="token number">1234</span><span class="token operator">&amp;</span>realName<span class="token operator">=</span>tomson（name、password、realName 三个请求参数）</span>
<span class="line"></span>
<span class="line"> 五、服务器处理请求并返回<span class="token constant">HTTP</span>报文</span>
<span class="line"><span class="token number">1.</span>服务器是网络环境中的高性能计算机，它侦听网络上的其他计算机（客户机）提交的服务请求，并提供相应的服务，比如网页服务、文件下载服务、邮件服务、视频服务。而客户端主要的功能是浏览网页、看视频、听音乐等等，两者截然不同。 每台服务器上都会安装处理请求的应用——web server。常见的 web server 产品有 apache、nginx、<span class="token constant">IIS</span> 或 Lighttpd 等。</span>
<span class="line"></span>
<span class="line"><span class="token number">2</span><span class="token punctuation">.</span>mvc后台处理请求：浏览器发送过来的请求先经过控制器，控制器进行逻辑处理和请求分发，接着会调用模型，这一阶段模型会获取 redis db 以及 MySQL 的数据，获取数据后将渲染好的页面，响应信息会以响应报文的形式返回给客户端，最后浏览器通过渲染引擎将网页呈现在用户面前。</span>
<span class="line"></span>
<span class="line"><span class="token number">3</span><span class="token punctuation">.</span>http响应报文 包含： 响应行、响应头、响应主体。</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">状态码规则：</span>
<span class="line"></span>
<span class="line">1xx：指示信息<span class="token operator">--</span>表示请求已接收，继续处理。</span>
<span class="line">2xx：成功<span class="token operator">--</span>表示请求已被成功接收、理解、接受。</span>
<span class="line">3xx：重定向<span class="token operator">--</span>要完成请求必须进行更进一步的操作。</span>
<span class="line">4xx：客户端错误<span class="token operator">--</span>请求有语法错误或请求无法实现。</span>
<span class="line">5xx：服务器端错误<span class="token operator">--</span>服务器未能实现合法的请求。</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">六、浏览器解析渲染页面</span>
<span class="line"><span class="token number">1.</span>概念：</span>
<span class="line"></span>
<span class="line">重绘：某个元素的背景颜色，文字颜色等，不影响元素周围或内部布局的属性，将只会引起浏览器的重绘。</span>
<span class="line"></span>
<span class="line">回流：某个元素的尺寸发生了变化，则需重新计算渲染树，重新渲染。</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span>步骤： </span>
<span class="line"></span>
<span class="line">根据 <span class="token constant">HTML</span> 解析出 <span class="token constant">DOM</span> 树</span>
<span class="line"></span>
<span class="line">根据 <span class="token constant">CSS</span> 解析生成 <span class="token constant">CSS</span> 规则树</span>
<span class="line"></span>
<span class="line">结合 <span class="token constant">DOM</span> 树和 <span class="token constant">CSS</span> 规则树，生成渲染树</span>
<span class="line"></span>
<span class="line">根据渲染树计算每一个节点的信息</span>
<span class="line"></span>
<span class="line">根据计算好的信息绘制页面</span>
<span class="line"></span>
<span class="line">七、断开连接</span>
<span class="line"> 数据传送完，需断开tcp连接，此时发起tcp四次挥手。</span>
<span class="line"></span>
<span class="line">## 简要概述</span>
<span class="line"></span>
<span class="line">### 加载资源</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> 浏览器根据<span class="token constant">DNS</span> 服务器得到域名的<span class="token constant">IP</span>地址</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span>向这个<span class="token constant">IP</span>机器发送http请求</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span>服务器收到处理并返回http请求</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> 浏览器得到返回的内容</span>
<span class="line"></span>
<span class="line">### 浏览器渲染页面</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> 根据 html 结构生成<span class="token constant">DOM</span> Tree</span>
<span class="line"><span class="token operator">&gt;</span> 根据<span class="token constant">CSS</span> 生成<span class="token constant">CSSOM</span></span>
<span class="line"><span class="token operator">&gt;</span>将<span class="token constant">DOM</span>和<span class="token constant">CSSOM</span>整合成RenderTree</span>
<span class="line"><span class="token operator">&gt;</span> 根据RenderTree开始渲染和展示</span>
<span class="line"><span class="token operator">&gt;</span> 遇到<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>时，会执行并阻塞渲染</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const d=n(i,[["render",p]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/Q1%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5url%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%E2%98%85%E2%98%85%E2%98%85%E2%98%85.html","title":"Q1 用户输入 url 到页面发生了什么 ★★★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/Q1用户输入url到页面发生了什么★★★★.md"}');export{d as comp,r as data};
