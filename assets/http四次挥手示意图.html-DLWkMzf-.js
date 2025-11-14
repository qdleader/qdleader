import{_ as n,c as a,b as t,o as r}from"./app-CStdj4-p.js";const l={};function s(h,e){return r(),a("div",null,[...e[0]||(e[0]=[t("h1",{id:"http四次挥手示意图",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#http四次挥手示意图"},[t("span",null,"http四次挥手示意图")])],-1),t("pre",null,[t("code",null,`               客户端                     服务端
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
`)],-1),t("p",null,"（等待2MSL CLOSED）| | | | | | | |",-1)])])}const E=n(l,[["render",s]]),c=JSON.parse('{"path":"/http/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%B1%BB/http%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%A4%BA%E6%84%8F%E5%9B%BE.html","title":"http四次挥手示意图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1763085116000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"5723f9442b3bbe63786d07e1f9bb8d0b65e86140","time":1763085116000,"email":"yk4545945@163.com","author":"qdleader","message":"chore: 添加中文交流规则配置文件"}]},"filePathRelative":"http/http三次握手四次挥手类/http四次挥手示意图.md"}');export{E as comp,c as data};
