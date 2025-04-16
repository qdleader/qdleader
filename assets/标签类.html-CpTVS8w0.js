import{_ as n,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function o(l,s){return t(),a("div",null,s[0]||(s[0]=[p(`<h1 id="标签类" tabindex="-1"><a class="header-anchor" href="#标签类"><span>标签类</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>el<span class="token operator">-</span>check<span class="token operator">-</span>tag</span>
<span class="line">      v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in dataList&quot;</span></span>
<span class="line">      v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;selectList&quot;</span></span>
<span class="line">      <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.key&quot;</span></span>
<span class="line">      <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;item.key&quot;</span></span>
<span class="line">      @change<span class="token operator">=</span><span class="token string">&quot;onChange(item.key)&quot;</span></span>
<span class="line">      <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mr10 custom-tag&quot;</span></span>
<span class="line">      <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{ active: selectList.includes(item.key) }&quot;</span></span>
<span class="line">      size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span></span>
<span class="line">    <span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>check<span class="token operator">-</span>tag<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> defineEmits<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getUniversalEnumListAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/modules/WorkOrder&quot;</span></span>
<span class="line"><span class="token keyword">const</span> emit <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">(</span>event<span class="token operator">:</span> <span class="token string">&quot;update:modelValue&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> Array <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> dataList <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">selectList</span><span class="token operator">:</span> any <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>selectList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    selectList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>selectList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    selectList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;update:modelValue&quot;</span><span class="token punctuation">,</span> selectList<span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  dataList<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUniversalEnumListAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dictCode</span><span class="token operator">:</span> <span class="token string">&quot;VISIT&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dictKey</span><span class="token operator">:</span> <span class="token string">&quot;focusModule&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  dataList<span class="token punctuation">.</span>value <span class="token operator">=</span> data</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">watch</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    formData<span class="token punctuation">.</span>modelValue <span class="token operator">=</span> props<span class="token punctuation">.</span>modelValue</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">.</span>custom<span class="token operator">-</span>tag <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">162</span><span class="token punctuation">,</span> <span class="token number">161</span><span class="token punctuation">,</span> <span class="token number">161</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  margin<span class="token operator">-</span>left<span class="token operator">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>active <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  background<span class="token operator">-</span>color<span class="token operator">:</span> #fd8207<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const i=n(e,[["render",o]]),r=JSON.parse('{"path":"/%E5%A5%BD%E7%8E%A9%E7%9A%84%E7%BB%84%E4%BB%B6/%E5%B8%B8%E7%94%A8/%E8%A1%A8%E5%8D%95%E7%B1%BB/%E6%A0%87%E7%AD%BE%E7%B1%BB.html","title":"标签类","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"好玩的组件/常用/表单类/标签类.md"}');export{i as comp,r as data};
