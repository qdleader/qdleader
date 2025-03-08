import{_ as n,e as a,g as e,o as r}from"./app-Co8h00Iv.js";const c={};function l(E,t){return r(),a("div",null,t[0]||(t[0]=[e("h1",{id:"http三次握手示意图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http三次握手示意图"},[e("span",null,"http三次握手示意图")])],-1),e("pre",null,[e("code",null,`               客户端                     服务端
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
`)],-1)]))}const o=n(c,[["render",l],["__file","http三次握手示意图.html.vue"]]),s=JSON.parse('{"path":"/http/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%B1%BB/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%A4%BA%E6%84%8F%E5%9B%BE.html","title":"http三次握手示意图","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1741399874000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ce85b6f1a0c68b01a72154877ae80006272306c","date":1741399874000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加方法顺序执行示例及老版本写法说明","commitUrl":"qdleader/qdleader/commit/3ce85b6f1a0c68b01a72154877ae80006272306c"}]},"filePathRelative":"http/http三次握手四次挥手类/http三次握手示意图.md"}');export{o as comp,s as data};
