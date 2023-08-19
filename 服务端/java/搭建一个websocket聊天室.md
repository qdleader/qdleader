pom.xml 中引入 spring-boot-starter-websocket

```xml
 <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-websocket</artifactId>
      <version>2.7.0</version>
  </dependency>
```

往spring容器中注入 ServerEndpointExporter
新建WebSocketConfig.java 文件

```java

package com.adminapi.adminapi.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

@Configuration
@EnableWebSocket
public class WebSocketConfig {

    @Bean
    public ServerEndpointExporter serverEndpoint() {
        return new ServerEndpointExporter();
    }
}

```

Endpoint 具体实现
新建 ChatRoomServerEndpoint.java 文件

```java
package com.adminapi.adminapi.webSocket;


import jakarta.websocket.*;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint("/ws/chatRoom/{userName}")
@Component
public class ChatRoomServerEndpoint {
    private static Map<String, Session> livingSessions = new ConcurrentHashMap<>();

    @OnOpen
    public void onOpen(Session session, @PathParam("userName") String userName) {
        livingSessions.put(session.getId(),session);
        sendMessageToAll(userName + "加入聊天室");
    }



    /**
     * 收到客户端消息的回调方法
     *
     * @param message 客户端传过来的消息
     * @param session 对应的session
     */
    @OnMessage
    public void onMessage(String message, Session session, @PathParam("userName") String userName) {
        sendMessageToAll(userName + " : " + message);
    }


    /**
     * 发生错误的回调方法
     *
     * @param session
     * @param error
     */
    @OnError
    public void onError(Session session, Throwable error) {
        System.out.println("发生错误");
        error.printStackTrace();
    }

    /**
     * 关闭连接的回调方法
     */
    @OnClose
    public void onClose(Session session, @PathParam("userName") String userName) {
        livingSessions.remove(session.getId());
        sendMessageToAll(userName + " 退出聊天室");
    }


    /**
     * 单独发送消息
     *
     * @param session
     * @param message
     */

    public void sendMessage(Session session, String message) {
        try {
            session.getBasicRemote().sendText(message);
        } catch(IOException e) {
            e.printStackTrace();
        }
    }


    /**
     * 群发消息
     *
     * @param message
     */
    public void sendMessageToAll(String message) {
        livingSessions.forEach((sessionId,session) -> {
            sendMessage(session, message);
        });
    }

}

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>聊天室</title>
    <script src="http://code.jquery.com/jquery-1.8.0.min.js"></script>
</head>
<body>
<h1>聊天室</h1>

<textarea id="chat_content" readonly="readonly" cols="100" rows="9">

</textarea>

<br>

用户：<input type="text" id="user_name" value="" name="userName"/>
<button id="btn_join">加入聊天室</button>
<button id="btn_exit">退出聊天室</button>

<br>

消息：<input type="text" id="send_text" value="" name="sendText"/>
<button id="btn_send">发送</button>

</body>
</html>

<script>
    $(function () {

        var prefixUrl = 'ws://127.0.0.1:8080/ws/chatRoom/';

        var ws;//WebSocket连接对象

        //判断当前浏览器是否支持WebSocket
        if (!('WebSocket' in window)) {
            alert('Not support websocket');
        }

        $('#btn_join').click(function () {

            var userName = $('#user_name').val();

            //创建WebSocket连接对象
            ws = new WebSocket(prefixUrl + userName);

            //连接成功建立的回调方法
            ws.onopen = function (event) {
                console.log('建立连接')
            }

            //接收到消息的回调方法
            ws.onmessage = function (event) {
                console.log('接收到内容：' + event.data)
                $('#chat_content').append(event.data + '\n')
            }

            //连接发生错误的回调方法
            ws.onerror = function (event) {
                console.log('发生错误')
            }

            //连接关闭的回调方法
            ws.onclose = function (event) {
                console.log('关闭连接')
            }

        })

        //发送消息
        function sendMessage(message) {
            ws.send(message);
        }

        //关闭连接
        function closeWebSocket() {
            ws.close();
        }

        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function () {
            wx.close();
        }


        //发送消息
        $('#btn_send').click(function () {
            sendMessage($('#send_text').val())
        })

        //点击退出聊天室
        $('#btn_exit').click(function () {
            closeWebSocket();
        })
    })
</script>
```



