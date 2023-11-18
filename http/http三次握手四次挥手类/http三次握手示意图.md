


                   客户端                     服务端
               CLOSED|                         | LISTEN 
                     |                         |
                     |      SYN=1，seq=x       |        
             SYN_SENT|  ---------------------->|SYN_RCVD
                     |                         |
                     |                         |
                     |                         |
                     |                         |
                     | SYN=1，ACK=1,ack=x+1,seq=y,|        
        ESTABLISHED  |  <----------------------|SYN_RCVD
                     |                         |
                     |                         |
                     |                         |
                     |                         |
                     | ACK=1,ack=y+1,seq=x+1,|        
         ESTABLISHED | ----------------------> |ESTABLISHED
                     |                         |
                     |                         |
                     |                         |
                     |                         |
                     |         数据传输          |        
          ESTABLISHED| <---------------------->|ESTABLISHED
                     |                         |
                     |                         |
                     |                         |
                     |                         |    