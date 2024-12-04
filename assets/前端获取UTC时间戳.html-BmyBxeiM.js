import{_ as n,c as o,b as t,o as a}from"./app-CeraUqgt.js";const s={};function r(c,e){return a(),o("div",null,e[0]||(e[0]=[t("h1",{id:"前端获取utc时间戳",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前端获取utc时间戳"},[t("span",null,"前端获取UTC时间戳")])],-1),t("pre",null,[t("code",null,`\`\`\`js
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
`)],-1)]))}const i=n(s,[["render",r],["__file","前端获取UTC时间戳.html.vue"]]),m=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%89%8D%E7%AB%AF%E8%8E%B7%E5%8F%96UTC%E6%97%B6%E9%97%B4%E6%88%B3.html","title":"前端获取UTC时间戳","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1733276255000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"前端小tip/前端获取UTC时间戳.md"}');export{i as comp,m as data};
