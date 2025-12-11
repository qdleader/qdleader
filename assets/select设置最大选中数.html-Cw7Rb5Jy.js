import{_ as l,c as n,b as e,o as a}from"./app-CuVPMbR-.js";const r={};function s(d,t){return a(),n("div",null,[...t[0]||(t[0]=[e("h1",{id:"select设置最大选中数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#select设置最大选中数"},[e("span",null,"select设置最大选中数")])],-1),e("pre",null,[e("code",null,`\`\`\`js
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
`)],-1)])])}const o=l(r,[["render",s]]),c=JSON.parse('{"path":"/UI%E6%A1%86%E6%9E%B6/antd5/select%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7%E9%80%89%E4%B8%AD%E6%95%B0.html","title":"select设置最大选中数","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1765417373000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"64567220df48362c664260517a0db9488c94f669","time":1765417373000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加Vue3项目初始化和Cursor使用指南文档"}]},"filePathRelative":"UI框架/antd5/select设置最大选中数.md"}');export{o as comp,c as data};
