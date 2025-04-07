import{_ as n,c as e,a,o as l}from"./app-ChbYw63X.js";const i={};function t(u,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="输入自定义命令快速生成vue模板" tabindex="-1"><a class="header-anchor" href="#输入自定义命令快速生成vue模板"><span>输入自定义命令快速生成vue模板</span></a></h1><p>我们在.vue文件中输入自定义指令，快速生成vue3模板</p><ol><li></li></ol><p>首先在vscode编辑器中</p><p>文件--&gt;首选项--&gt;用户代码片段--&gt;点击新建代码片段--取名vue.json 确定</p><p>2.把代码放进去。。。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;Print to console&quot;: {</span>
<span class="line">      &quot;prefix&quot;: &quot;vue3&quot;,</span>
<span class="line">      &quot;body&quot;: [</span>
<span class="line">        &quot;&lt;!-- $0 --&gt;&quot;,</span>
<span class="line">        &quot;&lt;template&gt;&quot;,</span>
<span class="line">        &quot;  &lt;div&gt;&lt;/div&gt;&quot;,</span>
<span class="line">        &quot;&lt;/template&gt;&quot;,</span>
<span class="line">        &quot;&quot;,</span>
<span class="line">        &quot;&lt;script lang=&#39;ts&#39;&gt;&quot;,</span>
<span class="line">        &quot;import { reactive,toRefs,onBeforeMount,onMounted} from &#39;vue&#39;&quot;,</span>
<span class="line">        &quot;interface DataProps {}&quot;,</span>
<span class="line"></span>
<span class="line">        &quot;export default {&quot;,</span>
<span class="line">        &quot;    name: &#39;&#39;,&quot;,</span>
<span class="line">        &quot;      setup() {&quot;,</span>
<span class="line">        &quot;          console.log(&#39;1-开始创建组件-setup&#39;)&quot;,</span>
<span class="line">        &quot;          const data: DataProps = reactive({&quot;,</span>
<span class="line">        &quot;&quot;            ,</span>
<span class="line">        &quot;          })&quot;,</span>
<span class="line">        &quot;          onBeforeMount(() =&gt; {&quot;,</span>
<span class="line">        &quot;              console.log(&#39;2.组件挂载页面之前执行----onBeforeMount&#39;)&quot;,</span>
<span class="line">        &quot;          })&quot;,</span>
<span class="line">        &quot;          onMounted(() =&gt; {&quot;,</span>
<span class="line">        &quot;              console.log(&#39;3.-组件挂载到页面之后执行-------onMounted&#39;)&quot;,</span>
<span class="line">        &quot;          })&quot;,</span>
<span class="line">        &quot;          const refData = toRefs(data);&quot;,</span>
<span class="line">        &quot;          return {&quot;,</span>
<span class="line">        &quot;              ...refData,&quot;,</span>
<span class="line">        &quot;          }&quot;,</span>
<span class="line">        &quot;&quot;  ,</span>
<span class="line">        &quot;      }&quot;,</span>
<span class="line">        &quot;  };&quot;,</span>
<span class="line">        &quot;&lt;/script&gt;&quot;,</span>
<span class="line">        &quot;&lt;style scoped&gt;&quot;,</span>
<span class="line">        &quot;&lt;/style&gt;&quot;,</span>
<span class="line">    ],</span>
<span class="line">      &quot;description&quot;: &quot;Log output to console&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.成功啦。新建.vue结尾的文件试试.</p><p>输入vue3 按键盘的tab就行</p>`,9)]))}const c=n(i,[["render",t]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E8%BE%93%E5%85%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%BD%E4%BB%A4%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90vue%E6%A8%A1%E6%9D%BF.html","title":"输入自定义命令快速生成vue模板","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1743991208000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"06ae3da64ec05c046ab6f8fcadaec095931d7383","time":1743991208000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加chat表格样式修改解决方案"}]},"filePathRelative":"前端小tip/输入自定义命令快速生成vue模板.md"}');export{c as comp,d as data};
