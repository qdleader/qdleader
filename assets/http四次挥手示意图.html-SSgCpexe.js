import{_ as n,c as a,b as e,o as s}from"./app-B--KPTI1.js";const l={};function r(E,t){return s(),a("div",null,t[0]||(t[0]=[e("h1",{id:"http四次挥手示意图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http四次挥手示意图"},[e("span",null,"http四次挥手示意图")])],-1),e("pre",null,[e("code",null,`               客户端                     服务端
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
`)],-1),e("p",null,"（等待2MSL CLOSED）| | | | | | | |",-1)]))}const o=n(l,[["render",r]]),h=JSON.parse('{"path":"/http/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%B1%BB/http%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%A4%BA%E6%84%8F%E5%9B%BE.html","title":"http四次挥手示意图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751593802000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ed7ece53189e584b32f934a400de1f057911f25","time":1751593802000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(es6): 添加ES2025模式匹配文档示例"}]},"filePathRelative":"http/http三次握手四次挥手类/http四次挥手示意图.md"}');export{o as comp,h as data};
