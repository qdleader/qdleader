import{_ as l,e as a,g as e,o as n}from"./app-BTXTvCFM.js";const s={};function d(i,t){return n(),a("div",null,t[0]||(t[0]=[e("h1",{id:"select设置最大选中数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#select设置最大选中数"},[e("span",null,"select设置最大选中数")])],-1),e("pre",null,[e("code",null,`\`\`\`js
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
`)],-1)]))}const o=l(s,[["render",d],["__file","select设置最大选中数.html.vue"]]),c=JSON.parse('{"path":"/UI%E6%A1%86%E6%9E%B6/antd5/select%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7%E9%80%89%E4%B8%AD%E6%95%B0.html","title":"select设置最大选中数","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1741916331000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"b62ca1fcbdbabd49c9914b486982b403c3c04a60","time":1741916331000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加JS输出类及前置自增与后置自增示例"}]},"filePathRelative":"UI框架/antd5/select设置最大选中数.md"}');export{o as comp,c as data};
