import{_ as n,e as a,g as e,o}from"./app-Co8h00Iv.js";const c={};function r(s,t){return o(),a("div",null,t[0]||(t[0]=[e("h1",{id:"前端获取utc时间戳",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前端获取utc时间戳"},[e("span",null,"前端获取UTC时间戳")])],-1),e("pre",null,[e("code",null,`\`\`\`js
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
`)],-1)]))}const m=n(c,[["render",r],["__file","前端获取UTC时间戳.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%89%8D%E7%AB%AF%E8%8E%B7%E5%8F%96UTC%E6%97%B6%E9%97%B4%E6%88%B3.html","title":"前端获取UTC时间戳","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1741399874000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ce85b6f1a0c68b01a72154877ae80006272306c","date":1741399874000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加方法顺序执行示例及老版本写法说明","commitUrl":"qdleader/qdleader/commit/3ce85b6f1a0c68b01a72154877ae80006272306c"}]},"filePathRelative":"前端小tip/前端获取UTC时间戳.md"}');export{m as comp,d as data};
