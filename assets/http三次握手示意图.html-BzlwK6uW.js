import{_ as n,c as a,b as t,o as E}from"./app-D8HvJIFE.js";const r={};function d(s,e){return E(),a("div",null,[...e[0]||(e[0]=[t("h1",{id:"http三次握手示意图",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#http三次握手示意图"},[t("span",null,"http三次握手示意图")])],-1),t("pre",null,[t("code",null,`               客户端                     服务端
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
`)],-1)])])}const o=n(r,[["render",d]]),c=JSON.parse('{"path":"/http/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%B1%BB/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%A4%BA%E6%84%8F%E5%9B%BE.html","title":"http三次握手示意图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"http/http三次握手四次挥手类/http三次握手示意图.md"}');export{o as comp,c as data};
