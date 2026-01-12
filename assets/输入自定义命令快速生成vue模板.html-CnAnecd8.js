import{_ as n,c as a,a as t,o as p}from"./app-KfnfuIf0.js";const e={};function l(i,s){return p(),a("div",null,[...s[0]||(s[0]=[t(`<h1 id="输入自定义命令快速生成vue模板" tabindex="-1"><a class="header-anchor" href="#输入自定义命令快速生成vue模板"><span>输入自定义命令快速生成vue模板</span></a></h1><p>我们在.vue文件中输入自定义指令，快速生成vue3模板</p><ol><li></li></ol><p>首先在vscode编辑器中</p><p>文件--&gt;首选项--&gt;用户代码片段--&gt;点击新建代码片段--取名vue.json 确定</p><p>2.把代码放进去。。。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;Print to console&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue3&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;&lt;!-- $0 --&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;  &lt;div&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&lt;script lang=&#39;ts&#39;&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;import { reactive,toRefs,onBeforeMount,onMounted} from &#39;vue&#39;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;interface DataProps {}&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token string">&quot;export default {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;    name: &#39;&#39;,&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;      setup() {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          console.log(&#39;1-开始创建组件-setup&#39;)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          const data: DataProps = reactive({&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&quot;</span>            <span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          })&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          onBeforeMount(() =&gt; {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;              console.log(&#39;2.组件挂载页面之前执行----onBeforeMount&#39;)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          })&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          onMounted(() =&gt; {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;              console.log(&#39;3.-组件挂载到页面之后执行-------onMounted&#39;)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          })&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          const refData = toRefs(data);&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          return {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;              ...refData,&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;          }&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&quot;</span>  <span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;      }&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;  };&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&lt;style scoped&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&lt;/style&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Log output to console&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.成功啦。新建.vue结尾的文件试试.</p><p>输入vue3 按键盘的tab就行</p>`,9)])])}const c=n(e,[["render",l]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E8%BE%93%E5%85%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%BD%E4%BB%A4%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90vue%E6%A8%A1%E6%9D%BF.html","title":"输入自定义命令快速生成vue模板","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端小tip/输入自定义命令快速生成vue模板.md"}');export{c as comp,u as data};
