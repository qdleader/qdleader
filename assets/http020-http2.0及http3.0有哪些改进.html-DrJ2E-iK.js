import{_ as e,c as t,a as p,o as h}from"./app-DFnxdJ0h.js";const n={};function r(d,a){return h(),t("div",null,a[0]||(a[0]=[p(`<h1 id="http2-0-及-http3-0-有哪些改进" tabindex="-1"><a class="header-anchor" href="#http2-0-及-http3-0-有哪些改进"><span>http2.0 及 http3.0 有哪些改进</span></a></h1><h2 id="一、http-1-0" tabindex="-1"><a class="header-anchor" href="#一、http-1-0"><span>一、HTTP/1.0</span></a></h2><p>1996 年 5 月，HTTP/1.0 版本发布，为了提高系统的效率，HTTP/1.0 规定浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个 TCP 连接，服务器完成请求处理后立即断开 TCP 连接，服务器不跟踪海个客户也不记录过去的请求。 请注意上面提到的 HTTP/1.0 中浏览器与服务器只保持短暂的连接，连接无法复用。也就是说每个 TCP 连接只能发送一个请求。发送数据完毕，连接就关闭，如果还要请求其他资源，就必须再新建一个连接。 我们知道 TCP 连接的建立需要三次握手，是很耗费时间的一个过程。所以，HTTP/1.O 版本的性能比较差。现在，随便打开一个网页，上面都会有很多图片、视频等资源，HTTP/1.0 显然无法满足性能要求。</p><h2 id="二、http-1-1" tabindex="-1"><a class="header-anchor" href="#二、http-1-1"><span>二、HTTP/1.1</span></a></h2><h3 id="_1、持久连接" tabindex="-1"><a class="header-anchor" href="#_1、持久连接"><span>1、持久连接</span></a></h3><pre><code>HTTP/1.0 中一个 TCP 连接只能发送一个请求和响应，而 HTTP/1.1 进行了优化，同一个 TCP 连接可以发送多次 HTTP 请求，减少了建立和关闭连接的性能开销。
</code></pre><h3 id="_2、管道机制" tabindex="-1"><a class="header-anchor" href="#_2、管道机制"><span>2、管道机制</span></a></h3><pre><code>持久连接虽然可以多个请求复用同一个连接，但是每次都需要等到上一个请求响应完成后，才能发送下一个请求。管道机制中，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，即相当于同时发出多个请求，因而可以减少整体的响应时间。

问题：采用管道机制虽然可以发送多个请求，但是服务器必须按照接收请求的顺序依次发送对这些管道化请求的响应，以保证客户端能够区分出每次请求的响应内容。这就导致了假如服务端在处理一个请求时耗时比较长，那么后续请求的处理都会被阻塞住，会导致客户端迟迟收不到数据，这称为「队头堵塞」--在HTTP2中解决。
</code></pre><h3 id="_3、缓存控制" tabindex="-1"><a class="header-anchor" href="#_3、缓存控制"><span>3、缓存控制</span></a></h3><pre><code>HTTP/1.1 在 HTTP/1.0 基础之上，增加了一些请求响应头，以更好的实现对缓存的控制。

新增 Cache-Control 代替原先的 Expires；
新增 If-None-Match 和 Etag 代替原先的 If-Modified-Since 和 Last-Modified 。
</code></pre><h3 id="_4、断点续传" tabindex="-1"><a class="header-anchor" href="#_4、断点续传"><span>4、断点续传</span></a></h3><pre><code>利⽤ HTTP 消息头使⽤分块传输编码，将实体主体分块传输。
</code></pre><h2 id="三、http-2-0" tabindex="-1"><a class="header-anchor" href="#三、http-2-0"><span>三、HTTP/2.0</span></a></h2><h3 id="_1、头部压缩" tabindex="-1"><a class="header-anchor" href="#_1、头部压缩"><span>1、头部压缩</span></a></h3><pre><code>HTTP/1.1 中的请求头携带大量信息，而且每次都要重复发送，即使是同样的内容，每次请求都需要附带，这会造成性能的损耗。HTTP/2 进行了优化，引入了头信息压缩机制。

客户端和服务器同时维护一张头信息表，高频出现的字段会存入这个表，生成一个索引号。发送报文时直接使用索引号替代字段。另外，索引表中不存在的字段使用压缩。

同时，多个请求中，如果请求头相同，则后续请求只需要发送差异的部分，重复的部分无需再发送。
</code></pre><h3 id="_2、二进制帧" tabindex="-1"><a class="header-anchor" href="#_2、二进制帧"><span>2、二进制帧</span></a></h3><pre><code>在HTTP/2中，在应用层(HTTP2.0)和传输层(TCP或者UDP)之间加了一层：二进制分帧层。这是HTTP2中最大的改变。HTTP2之所以性能会比HTTP1.1有那么大的提高，很大程度上正是由于这一层的引入。

在二进制分帧层中，HTTP/2会将所有传输的信息分割为更小的消息和帧(frame),并对它们采用二进制格式的编码。这种单连接多资源的方式，减少了服务端的压力，使得内存占用更少，连接吞吐量更大。而且，TCP连接数的减少使得网络拥塞状况得以改善，同时慢启动时间的减少，使拥塞和丢包恢复速度更快。
</code></pre><h3 id="_3、多路复用" tabindex="-1"><a class="header-anchor" href="#_3、多路复用"><span>3、多路复用</span></a></h3><pre><code>在 HTTP/2 中定义了流（Stream）的概念，它是二进制帧的双向传输序列，一个数据流对应着一个完整的请求-响应过程，在同一个请求响应过程中，往返的帧会分配一个唯一的流编号（Stream ID）。

    在流的支持下，HTTP/2 可以在一个 TCP 连接中传输多个请求或响应，而不用按照顺序一一对应（即实现多路复用），因为它们属于不同的流，所发送的帧头部都会携带 Stream ID，可以通过此 Stream ID 有效区分不同的请求-响应。

    因而 HTTP/2 解决了 HTTP/1.1 的『队头阻塞』问题，多个请求 - 响应之间没有了顺序关系，不需要排队等待，降低了延迟，大幅度提高了连接的利用率。
</code></pre><h3 id="_4、服务器主动推送" tabindex="-1"><a class="header-anchor" href="#_4、服务器主动推送"><span>4、服务器主动推送</span></a></h3><pre><code>在 HTTP/1.1 中，只能客户端发起请求，服务器对请求进行响应。而在 HTTP/2 中，服务端可以主动给客户端推送必要的资源，以减少请求延迟时间。

    比如当客户端向服务器请求一个 HTML 文件后，服务器除了将此 HTML 文件响应给客户端外，还可以提前主动将此 HTML 中所依赖的 JS 和 CSS 文件推送给客户端，这样客户端在解析 HTML 时，无需耗费额外的请求去得到相应的 JS 和 CSS 文件。
</code></pre><h4 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展"><span>拓展</span></a></h4><blockquote><p>二进制分帧传输</p></blockquote><h5 id="二进制分帧" tabindex="-1"><a class="header-anchor" href="#二进制分帧"><span>二进制分帧</span></a></h5><p>先解释一下，就是将一条连接上所有传输的信息，分割为更小的消息和帧(消息则是由一个或者多个帧组成的)，并对他们采用二进制格式编码。首部信息放在 Headers 帧中，而主体信息被封装在 Data 帧中。而且在每个帧的首部都有一个标识位。那么问题就来了。</p><pre><code>1.为什么2.0可以对所有的内容进行二进制转换？

因为二进制分帧层是在应用层和传输层之间的中间层，所有的信息都会从中经过，进而可以转换。

2.为什要用二进制？

首先就是效率会更高，计算机最喜欢处理二进制数了。除此之外就是可以根据帧头部的八个位来定义额外的帧。除了数据帧和头部帧，实际上还有PING帧、SETTING帧、优先级帧等等，为之后的多路复用打上坚实的基础。

3.有什么其他的好处？

还可以在一个连接上实现双向数据流以及乱序发送。因为在，每一个帧上都有一个标记位。浏览器和服务端双方可以前期乱序接收消息和帧。接收完毕按照标记位的排列来拼接成一整条信息。所以，浏览器并行发送的请求，服务器可以并行返回，而不需要按照顺序返回。
</code></pre><h5 id="多路复用" tabindex="-1"><a class="header-anchor" href="#多路复用"><span>多路复用</span></a></h5><p>简单来说，多路复用技术也是可以并行发送请求，而且无需等待响应返回的一种技术。消除了不必要的延迟，减少页面的加载时间。</p><pre><code>1.和 1.0 的长连接的区别在哪？

1.0 默认开启长连接，也就是保持 tcp 的连接不中断，可以一直发送 http 请求。但是长连接只能发送串行的请求，也就是一问一答式的，如果前一个请求的响应没有被接收，那么第二个请求不会发送，就会造成阻塞。而多路复用就是在一条 tcp 连接上，请求可以并行发送，而无需等待前面的响应返回。

2.和 1.0 的管道的区别？

管道也可以并行发送请求，但是返回响应的顺序则必须是发送时候的顺序。例如，发送 A,B,C 三个请求，那么返回的顺序就是 A,B,C 哪怕 A 返回之前，B,C 已经准备好，依然要等到 A 返回，也容易造成阻塞。
</code></pre><p>实际上，多路复用的基础就是二进制分帧，因为可以乱序发送和接收，所以就不必担心接收错误消息的问题，接收完毕直接拼接。</p><h5 id="首部压缩" tabindex="-1"><a class="header-anchor" href="#首部压缩"><span>首部压缩</span></a></h5><p>首部压缩实现的一个核心预设就是，在第一次请求之后，大部分的字段可以复用的。而且随着页面越来越复杂，同一个页面发出的请求会越来越多。如果头部不压缩的话，会造成很大的流量开销。</p><pre><code>1.那么首部压缩的原理是什么呢？

支持 http2.0 的浏览器和服务器会维护一个相同的静态表和一个动态表，以及内置一个霍夫曼编码表。静态表存储的是常见的一些头部，和一些很常见的头部键值对，例如 method：get 以及 cookie。动态表开始是空的，如果头部命中静态表中的名称，那么就回将这份键值对加入动态表中，例如 cookie：xxxx。这样做的原因在于，请求或则响应头命中了静态或者动态表的时候，只需要一个字节就能表示，可想而知，这个字节就是一个地址，指向表中的数据
</code></pre><h5 id="五-服务器推送" tabindex="-1"><a class="header-anchor" href="#五-服务器推送"><span>五.服务器推送</span></a></h5><p>简单来说，服务器可以对一个客户端请求发送多个响应，例如，浏览器向服务端请求 index.html，里面包含一张样式表和一张图片。传统的方法就是会向浏览器发送三次请求。而服务端推送，则可以在一次请求内将这三个文件全部发送给浏览器，减少了请求次数，提升了网页性能。下面是网上关于 http2.0 的性能提升的，比 1.0 里面的将资源内嵌到网页中都要高</p><p>1.不同域之间可以推送吗？</p><p>不可以。服务端推送也是遵守同源策略。</p><p>2.服务端推送有什么弊端？</p><p>如果服务端推送的内容，浏览器有缓存的话，就会浪费带宽。避免的方法就是在服务端配置，只对第一次请求实现服务器的推送。</p><p>好了，至此 Http2.0 的优势可以说是比 Http1.0 进步了许多。可以看到，2.0 里面的大部分功能都是建立在二进制分帧这个基础的技术上，所以或许这也是他被称作 2.0 的理由吧。但是问题来了，Http2.0 就是无懈可击了吗？还有没有他无法解决或者回避解决的问题？答案是肯定的。接下来来到 Http3.0 的神奇世界，看一看降维打击。</p><h4 id="http3-0-相对于-http2-0-是一种脱胎换骨的改变" tabindex="-1"><a class="header-anchor" href="#http3-0-相对于-http2-0-是一种脱胎换骨的改变"><span>Http3.0 相对于 Http2.0 是一种脱胎换骨的改变！</span></a></h4><p>http 协议是应用层协议，都是建立在传输层之上的。我们也都知道传输层上面不只有 TCP 协议，还有另外一个强大的协议 UDP 协议，2.0 和 1.0 都是基于 TCP 的，因此都会有 TCP 带来的硬伤以及局限性。而 Http3.0 则是建立在 UDP 的基础上。所以其与 Http2.0 之间有质的不同。</p><h2 id="http-3-0-quic-协议" tabindex="-1"><a class="header-anchor" href="#http-3-0-quic-协议"><span>HTTP/3.0（QUIC 协议）</span></a></h2><h4 id="http3-0-特性如下" tabindex="-1"><a class="header-anchor" href="#http3-0-特性如下"><span>http3.0 特性如下</span></a></h4><blockquote><p>连接迁移 无队头阻塞 自定义的拥塞控制 前向安全和前向纠错</p></blockquote><h4 id="那么-http3-0-具体有什么特性呢" tabindex="-1"><a class="header-anchor" href="#那么-http3-0-具体有什么特性呢"><span>那么 Http3.0 具体有什么特性呢？</span></a></h4><h6 id="一-连接迁移" tabindex="-1"><a class="header-anchor" href="#一-连接迁移"><span>一，连接迁移</span></a></h6><p>先阐述一下 tcp 里面的四元组，一条 tcp 的唯一性标识，是由源 IP，源端口，目的 IP,目的端口，四元组标识。源 IP，源端口一般比较稳定，但是目的 IP,目的端口会由于网络元素等原因发生改变，一旦改变，那么此条 tcp 连接就会断开。</p><p>由于 QUIC 基于 UDP 协议，所以一条 UDP 协议不再由四元组标识，而是以客户端随机产生的一个 64 位数字作为 ID 标识。只要 ID 不变，那么这条 UDP 就会存在，维持连接，上层业务逻辑就感受不到变化。</p><h6 id="二-无队头阻塞" tabindex="-1"><a class="header-anchor" href="#二-无队头阻塞"><span>二，无队头阻塞</span></a></h6><p>我们知道，http2.0 的多路复用正好解决了 http 层的队头阻塞，但是 tcp 的队头阻塞依然存在。因为当数据包超时确认或者丢失，会等待重传，因此会阻塞当前窗口向右滑动，造成阻塞。而 QUIC 是基于 udp 的，创新点在于 QUIC 依靠一个严格的单调递增的 packet 序列，一个数据包里面还会有 streamID 和 streamoffset 偏移量，即使中途发生丢包或者超时确认，后面的数据包不会等待，等到接收完之后根据 ID 和 offset 即可完成重新拼装，从而避免了这种问题。</p><pre><code>HTTP/2 通过多路复用解决了 HTTP1.1 的『队头阻塞』问题，但其只是解决了 HTTP 这一层面的『队头阻塞』问题，底层仍然采用的 TCP 连接，HTTP/2 并没有解决 TCP 的『队头阻塞』问题。

TCP 是可靠的、面向字节流的协议。HTTP/2 的多个请求虽然可以跑在同一个 TCP 连接中，但如果出现丢包现象，TCP 就需要进行重传，这可能就会导致整个 TCP 连接上的所有流阻塞，直到丢的包重传成功，这就是 TCP 的『队头阻塞』问题。

为了解决此问题，HTTP/3 底层不再使用 TCP，而是采用 UDP！而 UDP 是无连接的，多个流互相独立，之间不再有依赖，因而即使某个流发生了丢包，只会对该流产生影响，并不会使得其他流阻塞！

这时候有的小伙伴可能会问了，HTTP/3 底层不采用 TCP，那怎么保证可靠传输呢？答案就是 HTTP/3 在应用层自己重新实现了可靠性机制。也就是说，HTTP/3 将原先 TCP 协议提供的部分功能上移至 QUIC，而且进行了改进。
</code></pre><h6 id="三-自定义的拥塞控制" tabindex="-1"><a class="header-anchor" href="#三-自定义的拥塞控制"><span>三，自定义的拥塞控制</span></a></h6><p>tcp 协议是在传输层，默认存在于系统中，而 QUIC 在应用层，当想要依据实际情况来重定义拥塞算法的时候，QUIC 显然更加灵活。Google 提出了 cubic 和 newreno 提供了许多可供编程的接口。当然，和 tcp 一样，也是默认采用 cubic 算法。</p><p>那么 tcp 的拥塞怎么控制的呢？</p><p>这一块其实知识也挺多，简单来说就是，拥塞窗口前期会指数增加，直到到达一个阈值，然后就开始线性增加，直到出现超时事件，窗口大小到达最大值 MAX。之后窗口调整为初始值，开始同样的增长，阈值减小为 MAX/2。但是超时不一定是因为拥塞，也可能是因为丢包，那怎么办呢？如果从最初开始增加，那么显然会比较慢，等到发送方连续收到 3 个接收方发出的丢包 ACK，直接让窗口大小等于阈值，再线性增长。这也有一个响亮的名字，快速恢复算法。</p><h6 id="四-前向安全和前向纠错" tabindex="-1"><a class="header-anchor" href="#四-前向安全和前向纠错"><span>四，前向安全和前向纠错</span></a></h6><p>都说 udp 不太靠谱，但是 Google 给 QUIC 加上了这个机制：每发送一组数据之后，就对这组数据进行异或运算（效率高），并将结果也发送出去，那么接收方就有两份数据版本，可以对初始数据进行纠错和校验。以此保证了可靠性。</p>`,58)]))}const c=e(n,[["render",r]]),T=JSON.parse('{"path":"/http/http020-http2.0%E5%8F%8Ahttp3.0%E6%9C%89%E5%93%AA%E4%BA%9B%E6%94%B9%E8%BF%9B.html","title":"http2.0 及 http3.0 有哪些改进","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"http/http020-http2.0及http3.0有哪些改进.md"}');export{c as comp,T as data};
