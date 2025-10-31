import{_ as s,c as a,a as e,o as p}from"./app-D8HvJIFE.js";const l={};function t(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="vue3-ts父组件调用子组件方法" tabindex="-1"><a class="header-anchor" href="#vue3-ts父组件调用子组件方法"><span>vue3+ts父组件调用子组件方法</span></a></h1><p>父组件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">  <span class="token operator">&lt;</span>editPage ref<span class="token operator">=</span><span class="token string">&quot;sonRef&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">,</span>reactive<span class="token punctuation">,</span>toRefs<span class="token punctuation">,</span>defineComponent<span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> editPage <span class="token keyword">from</span> <span class="token string">&#39;./edit.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>displayList<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./../../http/httpUrl&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">DataProps</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">formInline1</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">formInline2</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">dataList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">current</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">pageSize</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">total</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function-variable function">handleSubmit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function-variable function">getData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">tableData</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ResProps</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">currentPage</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">totalCount</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">     editPage</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> sonRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">sendValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token comment">// 可以拿到son组件实例，并调用其setup返回的所有信息</span></span>
<span class="line">     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sonRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">     <span class="token comment">// 通过调用son组件实例的方法，向其传递数据</span></span>
<span class="line">     sonRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">acceptValue</span><span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">   <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">           sonRef</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line"></span>
<span class="line">export default defineComponent({</span>
<span class="line">    name:&#39;editPage&#39;,</span>
<span class="line">     components: {</span>
<span class="line">    },</span>
<span class="line">    setup() {</span>
<span class="line">    const data: DataProps = reactive({</span>
<span class="line">          //正常写即可</span>
<span class="line">          acceptValue:(value: string) =&gt; {</span>
<span class="line">              console.log(&quot;子组件方法被调用啦&quot;,value)</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line">        })</span>
<span class="line">        onMounted(() =&gt; {</span>
<span class="line">            data.getData()</span>
<span class="line">        })</span>
<span class="line">        const refData = toRefs(data);</span>
<span class="line">        return {</span>
<span class="line">            ...refData</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)])])}const o=s(l,[["render",t]]),r=JSON.parse('{"path":"/vue3/vue3_ts%E7%88%B6%E7%BB%84%E4%BB%B6%E8%B0%83%E7%94%A8%E5%AD%90%E7%BB%84%E4%BB%B6%E6%96%B9%E6%B3%95.html","title":"vue3+ts父组件调用子组件方法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"vue3/vue3+ts父组件调用子组件方法.md"}');export{o as comp,r as data};
