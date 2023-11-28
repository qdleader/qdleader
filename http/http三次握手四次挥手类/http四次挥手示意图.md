


                   客户端                     服务端
         ESTABLISTHED|                         | ESTABLISTHED 
                     |                         |
                     |      FIN=1，seq=u       |        
            FIN_WAIT1|  ---------------------->|CLOSE_WAIT
                     |                         |
                     |                         |
                     |                         |
                     |                         |
                     |    ACK=1,ack=u+1,seq=v, |        
            FIN_WAIT2|  <----------------------|CLOSE_WAIT
                     |                         |
                     |                         |
                     |                         |
                     |                         |
                     |FIN=1,ACK=1,ack=u+1,seq=w|        
           FIN_WAIT2 | <---------------------- |LAST_ACK
                     |                         |
                     |                         |
                     |                         |
                     |                         |
                     |  ACK=1,seq=u+1,ack=w+1  |        
            FIN_WAIT2| ----------------------> |CLOSED
   （等待2MSL CLOSED）|                         |
                     |                         |
                     |                         |
                     |                         |    
