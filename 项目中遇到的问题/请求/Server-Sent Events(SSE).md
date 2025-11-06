# Server-Sent Events (SSE)

## 应用场景

假设有这样一个需求：当用户触发下单操作时，需要对 B 端的管理员发送一次弹窗通知。如果想让前端源源不断地接收到后端发送的实时数据，可以使用以下技术方案：

### 技术方案对比

1. **WebSocket**
   - 一种在单个 TCP 连接上进行全双工通信的协议
   - 允许网页和后端进行双向通信
   - 适合需要双向实时通信的场景

2. **Server-Sent Events (SSE)**
   - 让服务器向浏览器推送更新的技术
   - 基于 HTTP 协议，只需服务器端发送特殊的 HTTP 响应头即可建立连接
   - 与 WebSocket 相比更加简单易用
   - 只能从服务器向客户端发送数据（单向通信）

3. **轮询 (Polling)**
   - 客户端定期向服务器发送请求以检查是否有新数据
   - 实现起来比较简单
   - 效率较低，尤其在数据更新不频繁的情况下，会造成不必要的网络流量消耗

## what is SSE

SSE（Server-Sent Events）是一种用于实现服务器主动向客户端推送数据的技术，也被称为“事件流”（Event Stream）。它基于 HTTP 协议，利用了其长连接特性，在客户端与服务器之间建立一条持久化连接，并通过这条连接实现服务器向客户端的实时数据推送。

SSE 是 HTML5 规范的一部分，该规范非常简单，主要由两部分组成：第一部分是服务端与浏览器端的通讯协议（Http 协议），第二部分是浏览器端可供 JavaScript 使用的 EventSource 对象。

严格意义上来说，Http 协议是无法做到服务器主动想浏览器发送协议，但是可以变通下，服务器向客户端发起一个声明，我下面发送的内容将是 text/event-stream 格式的，这个时候浏览器就知道了。响应文本内容是一个持续的数据流，每个数据流由不同的事件组成，并且每个事件可以有一个可选的标识符，不同事件内容之间只能通过回车符\r 和换行符\n 来分隔,每个事件可以由多行组成。目前除了 IE 和 Edge，其他浏览器均支持。

## SSE 技术的基本原理

客户端向服务器发送一个 GET 请求，带有指定的 header，表示可以接收事件流类型，并禁用任何的事件缓存。

服务器返回一个响应，带有指定的 header，表示事件的媒体类型和编码，以及使用分块传输编码（chunked）来流式传输动态生成的内容。

服务器在有数据更新时，向客户端发送一个或多个名称：值字段组成的事件，由单个换行符分隔。事件之间由两个换行符分隔。服务器可以发送事件数据、事件类型、事件 ID 和重试时间等字段。

客户端使用 EventSource 接口来创建一个对象，打开连接，并订阅 onopen、onmessage 和 onerror 等事件处理程序来处理连接状态和接收消息。

客户端可以使用 GET 查询参数来传递数据给服务器，也可以使用 close 方法来关闭连接

## SSE 适用场景的特点是：

数据更新频繁：服务器需要不断地将最新的数据推送给客户端，保持数据的实时性和准确性。

低延迟：服务器需要尽快地将数据推送给客户端，避免数据的延迟和过期。

单向通信：服务器只需要向客户端推送数据，而不需要接收客户端的数据。

eg:

```js
// 先判断当前浏览器是否支持EventSource事件
if (typeof(EventSource) !== "undefined") {
  // 用JavaScript创建了一个新的EventSource对象，它将从服务器端的/test/server-sent-events路由接收事件流
  const source = new EventSource('/test/server-sent-events', {
    withCredentials: true
  });

  每当服务器发送新的事件时，source.onmessage事件处理程序将运行，我们将事件数据解析为JSON对象
  source.onmessage = (event) => {
     const data = JSON.parse(event.data)
     console.log(data)
  }

  // close方法用于关闭 SSE 连接。
  source.close();

} else {
  console.log('不支持 EventSource')
}
```

## 注意事项

1、nginx 配置
使用 nginx 做反向代理时需要将 proxy_buffering 关闭

```js
proxy_buffering off
```

或者加上响应头部 x-accel-buffering，这样 nginx 就不会给后端响应数据加 buffer

```js
x-accel-buffering: no
```

2、EventSource
连接关闭后会自动重连
需要显示的调用 close 方法

## Spring Boot 中使用 SSE

Server-Sent Events (SSE) 是 HTML5 引入的一种轻量级的服务器向浏览器客户端单向推送实时数据的技术。在 Spring Boot 框架中，我们可以很容易地集成并利用 SSE 来实现实时通信

```java
        <!-- 集成beetl -->
        <dependency>
            <groupId>com.ibeetl</groupId>
            <artifactId>beetl-framework-starter</artifactId>
            <version>1.2.30.RELEASE</version>
        </dependency>

        <!-- 集成hutool工具类简便操作 -->
        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.3.10</version>
        </dependency>
```

核心的 SSE Client 代码

```java
@Slf4j
@Component
public class SseClient {
private static final Map<String, SseEmitter> sseEmitterMap = new ConcurrentHashMap<>();

public SseEmitter createSse(String uid) {
//默认 30 秒超时,设置为 0L 则永不超时
SseEmitter sseEmitter = new SseEmitter(0l);
//完成后回调
sseEmitter.onCompletion(() -> {
    log.info("[{}]结束连接...................", uid);
    sseEmitterMap.remove(uid);
});
//超时回调
sseEmitter.onTimeout(() -> {
    log.info("[{}]连接超时...................", uid);
});
//异常回调
sseEmitter.onError(
    throwable -> {
        try {
            log.info("[{}]连接异常,{}", uid, throwable.toString());
            sseEmitter.send(SseEmitter.event()
            .id(uid)
            .name("发生异常！")
            .data("发生异常请重试！")
            .reconnectTime(3000));
            sseEmitterMap.put(uid, sseEmitter);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
);

    try {
        sseEmitter.send(SseEmitter.event().reconnectTime(5000));
    } catch (IOException e) {
        e.printStackTrace();
    }
        sseEmitterMap.put(uid, sseEmitter);
        log.info("[{}]创建 sse 连接成功！", uid);
        return sseEmitter;
    }

    /**
     * 给指定用户发送消息
     *
     */
    public boolean sendMessage(String uid,String messageId, String message) {
        if (StrUtil.isBlank(message)) {
            log.info("参数异常，msg为null", uid);
            return false;
        }
        SseEmitter sseEmitter = sseEmitterMap.get(uid);
        if (sseEmitter == null) {
            log.info("消息推送失败uid:[{}],没有创建连接，请重试。", uid);
            return false;
        }
        try {
            sseEmitter.send(SseEmitter.event().id(messageId).reconnectTime(1*60*1000L).data(message));
            log.info("用户{},消息id:{},推送成功:{}", uid,messageId, message);
            return true;
        }catch (Exception e) {
            sseEmitterMap.remove(uid);
            log.info("用户{},消息id:{},推送异常:{}", uid,messageId, e.getMessage());
            sseEmitter.complete();
            return false;
        }
    }

    /**
     * 断开
     * @param uid
     */
    public void closeSse(String uid){
        if (sseEmitterMap.containsKey(uid)) {
            SseEmitter sseEmitter = sseEmitterMap.get(uid);
            sseEmitter.complete();
            sseEmitterMap.remove(uid);
        }else {
            log.info("用户{} 连接已关闭",uid);
        }

    }

}
```

这里可以看到在业务端需要维护用户 id 和 SSE Client 的对应关系

当客户端断开连接时，SseEmitter 会抛出 IOException，所以务必捕获并处理这种异常，通常情况下我们会调用 emitter.complete 或 emitter.completeWithError 来关闭 SseEmitter

SSE 连接是持久性的，长时间保持连接可能需要处理超时和重连问题
