# http018-http有哪些新特性


HTTP/2 是 HTTP 的一个协议版本，它与 HTTP 1.1 相比，具有以下特点：
1. **多路复用（Multiplexing）**：HTTP/2 允许客户端和服务器同时发送多个请求和响应，而不需要等待上一个请求或响应的完成。这提高了客户端和服务器的性能，因为客户端可以同时发送多个请求，而不必等待每个请求的响应。
2. **HEADERS帧（Headers Frame）**：HEADERS帧用于发送请求头和响应头，这些头信息包含在帧中，而不是单独的发送。这有助于减少网络流量，因为 fewer round trips are needed to send the same amount of data. 
3. **服务器推送（Server Push）**：服务器可以主动向客户端推送资源，而不需要客户端明确请求。这有助于减少延迟，因为客户端可以提前接收到资源，而不必等待它们被请求。
4. **压缩头部（Header Compression）**：HTTP/2 使用 HPACK 压缩算法来压缩头部信息，这有助于减少网络流量，因为 fewer bytes are sent over the network. 
这些新特性使得 HTTP/2 在性能和效率方面比 HTTP 1.1 有显著改进。


## 为什么HTTP2能去掉SSL在HTTP1.x上的开销？

1.单一的长连接，减少了SSL握手的开销

2.头部被压缩，减少了数据传输量

3.多路复用能大幅提高传输效率，不用等待上一个请求的响应

4.不用像http1.x那样把多个文件或者资源弄成一个文件或者资源（http1.x常见的优化手段），这时候，缓存就能更容易命中啊（http1.x里面你揉成一团的东西怎么命中缓存？）