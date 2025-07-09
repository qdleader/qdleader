import{_ as n,c as a,b as e,o}from"./app-C-PIe5GM.js";const s={};function c(r,t){return o(),a("div",null,t[0]||(t[0]=[e("h1",{id:"前端获取utc时间戳",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前端获取utc时间戳"},[e("span",null,"前端获取UTC时间戳")])],-1),e("pre",null,[e("code",null,`\`\`\`js
function getUtcTimestamp() {
    const now = new Date();
    const utcTimestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds()
    );
    return \`\${parseInt(utcTimestamp / 1000, 10)}\`;
}
\`\`\`
`)],-1)]))}const d=n(s,[["render",c]]),m=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%89%8D%E7%AB%AF%E8%8E%B7%E5%8F%96UTC%E6%97%B6%E9%97%B4%E6%88%B3.html","title":"前端获取UTC时间戳","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752024824000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"09b8c9c8ada68b61d7ad3afa473ae10bdbf30f27","time":1752024824000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(Vue): 详细说明Vue 2/3响应式原理及示例"}]},"filePathRelative":"前端小tip/前端获取UTC时间戳.md"}');export{d as comp,m as data};
