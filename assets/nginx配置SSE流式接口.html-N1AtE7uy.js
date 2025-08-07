import{_ as a,c as t,b as e,o as r}from"./app-JR0DiM0i.js";const o={};function s(i,n){return r(),t("div",null,n[0]||(n[0]=[e("h1",{id:"nginx-配置sse流式接口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx-配置sse流式接口"},[e("span",null,"nginx 配置ssE流式接口")])],-1),e("p",null,"··· server { listen 80; server_name ai.vuereact.top;",-1),e("pre",null,[e("code",null,`location /api/xiaotao/chatPostFlux {
    proxy_pass http://124.40.216.65:8090/xiaotao/chatPostFlux;
    proxy_http_version 1.1;
    proxy_set_header Connection "";
    proxy_buffering off;
    proxy_cache off;
    proxy_read_timeout 3600s;  # 可根据流持续时间调整
}
`)],-1),e("p",null,"} ···",-1)]))}const d=a(o,[["render",s]]),c=JSON.parse(`{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/nginx%E9%85%8D%E7%BD%AESSE%E6%B5%81%E5%BC%8F%E6%8E%A5%E5%8F%A3.html","title":"nginx 配置ssE流式接口","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1754578924000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"8368a3d830d4d39275b582b9717392562d913e18","time":1754578924000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"服务端/前端要懂得部分Nginx/nginx配置SSE流式接口.md"}`);export{d as comp,c as data};
