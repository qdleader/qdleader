import{_ as l,c as n,b as e,o as a}from"./app-B--KPTI1.js";const s={};function d(i,t){return a(),n("div",null,t[0]||(t[0]=[e("h1",{id:"select设置最大选中数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#select设置最大选中数"},[e("span",null,"select设置最大选中数")])],-1),e("pre",null,[e("code",null,`\`\`\`js
  <FormItem className={[styles.proInput, styles.redDot].join(' ')}>
        {getFieldDecorator('leaders', {
          rules: formLeaderConfig.rules || [],
        })(
          <Select onSearch={searchList}>
            {formLeaderConfigOptions
              ? formLeaderConfigOptions.map(item => (
                <Select.Option label={item.name} disabled={getFieldValue('leaders') && getFieldValue('leaders').length === 10 && getFieldValue('leaders').findIndex(i=> i === item.id) === -1} value={item.id} key={item.id}>
                  {item.name}
                </Select.Option>
                ))
              : null}
          </Select>
        )}
      </FormItem>
\`\`\`

关键 getFieldValue('leaders').findIndex(i=> i === item.id) === -1
`)],-1)]))}const o=l(s,[["render",d]]),m=JSON.parse('{"path":"/UI%E6%A1%86%E6%9E%B6/antd5/select%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7%E9%80%89%E4%B8%AD%E6%95%B0.html","title":"select设置最大选中数","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751593802000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ed7ece53189e584b32f934a400de1f057911f25","time":1751593802000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(es6): 添加ES2025模式匹配文档示例"}]},"filePathRelative":"UI框架/antd5/select设置最大选中数.md"}');export{o as comp,m as data};
