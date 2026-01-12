import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function t(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="http004-http和https的区别" tabindex="-1"><a class="header-anchor" href="#http004-http和https的区别"><span>http004-http和https的区别</span></a></h1><blockquote><p>HTTP 的URL 以http:// 开头，而HTTPS 的URL 以https:// 开头 <br> HTTP 是不安全的，而 HTTPS 是安全的 <br> HTTP 标准端口是80 ，而 HTTPS 的标准端口是443<br> 在OSI 网络模型中，HTTP工作于应用层，而HTTPS 的安全传输机制工作在传输层<br> HTTP 无法加密，而HTTPS 对传输的数据进行加密 <br> HTTP无需证书，而HTTPS 需要CA机构wosign的颁发的SSL证书<br></p></blockquote><h2 id="https和http的区别主要如下" tabindex="-1"><a class="header-anchor" href="#https和http的区别主要如下"><span>HTTPS和HTTP的区别主要如下：</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">　　<span class="token number">1</span>、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。</span>
<span class="line"></span>
<span class="line">　　<span class="token number">2</span>、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。</span>
<span class="line"></span>
<span class="line">　　<span class="token number">3</span>、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是<span class="token number">80</span>，后者是<span class="token number">443</span>。</span>
<span class="line"></span>
<span class="line">　　<span class="token number">4</span>、http的连接很简单，是无状态的；<span class="token constant">HTTPS</span>协议是由<span class="token constant">SSL</span><span class="token operator">+</span><span class="token constant">HTTP</span>协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="https的工作原理" tabindex="-1"><a class="header-anchor" href="#https的工作原理"><span>HTTPS的工作原理</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">　客户端在使用<span class="token constant">HTTPS</span>方式与Web服务器通信时有以下几个步骤，如图所示。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">1</span>）客户使用https的<span class="token constant">URL</span>访问Web服务器，要求与Web服务器建立<span class="token constant">SSL</span>连接。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">2</span>）Web服务器收到客户端请求后，会将网站的证书信息（证书中包含公钥）传送一份给客户端。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">3</span>）客户端的浏览器与Web服务器开始协商<span class="token constant">SSL</span>连接的安全等级，也就是信息加密的等级。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">4</span>）客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">5</span>）Web服务器利用自己的私钥解密出会话密钥。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">6</span>）Web服务器利用会话密钥加密与客户端之间的通信。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="https的优点" tabindex="-1"><a class="header-anchor" href="#https的优点"><span>HTTPS的优点</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">　　尽管<span class="token constant">HTTPS</span>并非绝对安全，掌握根证书的机构、掌握加密算法的组织同样可以进行中间人形式的攻击，但<span class="token constant">HTTPS</span>仍是现行架构下最安全的解决方案，主要有以下几个好处：</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">1</span>）使用<span class="token constant">HTTPS</span>协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">2</span>）<span class="token constant">HTTPS</span>协议是由<span class="token constant">SSL</span><span class="token operator">+</span><span class="token constant">HTTP</span>协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">3</span>）<span class="token constant">HTTPS</span>是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">4</span>）谷歌曾在<span class="token number">2014</span>年<span class="token number">8</span>月份调整搜索引擎算法，并称“比起同等<span class="token constant">HTTP</span>网站，采用<span class="token constant">HTTPS</span>加密的网站在搜索结果中的排名将会更高”。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="https的缺点" tabindex="-1"><a class="header-anchor" href="#https的缺点"><span>HTTPS的缺点</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">　　虽然说<span class="token constant">HTTPS</span>有很大的优势，但其相对来说，还是存在不足之处的：</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">1</span>）<span class="token constant">HTTPS</span>协议握手阶段比较费时，会使页面的加载时间延长近<span class="token number">50</span><span class="token operator">%</span>，增加<span class="token number">10</span><span class="token operator">%</span>到<span class="token number">20</span><span class="token operator">%</span>的耗电；</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">2</span>）<span class="token constant">HTTPS</span>连接缓存不如<span class="token constant">HTTP</span>高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响；</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">3</span>）<span class="token constant">SSL</span>证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。</span>
<span class="line"></span>
<span class="line">　   （<span class="token number">4</span>）<span class="token constant">SSL</span>证书通常需要绑定<span class="token constant">IP</span>，不能在同一<span class="token constant">IP</span>上绑定多个域名，IPv4资源不可能支撑这个消耗。</span>
<span class="line"></span>
<span class="line">　　（<span class="token number">5</span>）<span class="token constant">HTTPS</span>协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用。最关键的，<span class="token constant">SSL</span>证书的信用链体系并不安全，</span>
<span class="line">特别是在某些国家可以控制<span class="token constant">CA</span>根证书的情况下，中间人攻击一样可行。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>13.总结HTTPS和HTTP的区别 HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理。 http和https使用连接方式不同，默认端口也不一样，http是80，https是443。</p><p>HTTP(端口号80)和HTTPS(端口号443)的主要区别在于安全性和数据传输方式。 HTTP（超文本传输协议）是一种用于分布式、协作式和超媒体信息系统的应用层协议。它以明文方式发送内容，不提供任何方式的数据加密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息。 HTTPS（超文本传输安全协议）是一种透过计算机网络进行安全通信的传输协议，需要CA证书。HTTPS经由HTTP进行通信，但利用SSL/TLS来加密数据包。HTTPS的主要目的是提供对网站服务器的身份认证，保护交换数据的隐私与完整性。</p>`,12)])])}const r=n(l,[["render",t]]),d=JSON.parse('{"path":"/http/http004-http%E5%92%8Chttps%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"http004-http和https的区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"http/http004-http和https的区别.md"}');export{r as comp,d as data};
