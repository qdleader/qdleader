import{_ as n,c as a,b as e,o}from"./app-DlOJVZry.js";const s={};function r(c,t){return o(),a("div",null,[...t[0]||(t[0]=[e("h1",{id:"前端获取utc时间戳",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前端获取utc时间戳"},[e("span",null,"前端获取UTC时间戳")])],-1),e("pre",null,[e("code",null,`\`\`\`js
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
`)],-1)])])}const d=n(s,[["render",r]]),i=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%89%8D%E7%AB%AF%E8%8E%B7%E5%8F%96UTC%E6%97%B6%E9%97%B4%E6%88%B3.html","title":"前端获取UTC时间戳","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1764899166000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"07187c6d590f64d71425d571d1a229e914859bb0","time":1764899166000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新了Vue.js、HTML/CSS和Spring Boot最佳实践文档内容"}]},"filePathRelative":"前端小tip/前端获取UTC时间戳.md"}');export{d as comp,i as data};
