import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function o(l,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="vue版本element-form-表单多层嵌套" tabindex="-1"><a class="header-anchor" href="#vue版本element-form-表单多层嵌套"><span>vue版本element form 表单多层嵌套</span></a></h1><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code class="language-typescript"><span class="line"><span class="token operator">&lt;</span>el<span class="token operator">-</span>drawer v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;drawerVisible&quot;</span> <span class="token operator">:</span>destroy<span class="token operator">-</span>on<span class="token operator">-</span>close<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;100vw&quot;</span> <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">&quot;\`\${drawerProps.title}\`&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>el<span class="token operator">-</span>form</span>
<span class="line">      ref<span class="token operator">=</span><span class="token string">&quot;ruleFormRef&quot;</span></span>
<span class="line">      label<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">&quot;140px&quot;</span></span>
<span class="line">      width<span class="token operator">=</span><span class="token string">&quot;800px&quot;</span></span>
<span class="line">      label<span class="token operator">-</span>suffix<span class="token operator">=</span><span class="token string">&quot; :&quot;</span></span>
<span class="line">      <span class="token operator">:</span>rules<span class="token operator">=</span><span class="token string">&quot;rules&quot;</span></span>
<span class="line">      <span class="token operator">:</span>disabled<span class="token operator">=</span><span class="token string">&quot;drawerProps.isView&quot;</span></span>
<span class="line">      <span class="token operator">:</span>model<span class="token operator">=</span><span class="token string">&quot;drawerProps.row&quot;</span></span>
<span class="line">      <span class="token operator">:</span>hide<span class="token operator">-</span>required<span class="token operator">-</span>asterisk<span class="token operator">=</span><span class="token string">&quot;drawerProps.isView&quot;</span></span>
<span class="line">    <span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;formContent&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;formContentBox&quot;</span> v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(domain, index) in drawerProps.row!.formContent&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;formContentTopLine&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>el<span class="token operator">-</span>button</span>
<span class="line">                  <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;Delete&quot;</span></span>
<span class="line">                  v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;drawerProps.row!.formContent?.length &gt; 1&quot;</span></span>
<span class="line">                  <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token punctuation">.</span>prevent<span class="token operator">=</span><span class="token string">&quot;removeDomain(domain)&quot;</span></span>
<span class="line">                <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item</span>
<span class="line">            label<span class="token operator">=</span><span class="token string">&quot;问题描述&quot;</span></span>
<span class="line">            <span class="token operator">:</span>prop<span class="token operator">=</span><span class="token string">&quot;&#39;formContent.&#39; + index + &#39;.fieldName&#39;&quot;</span></span>
<span class="line">            <span class="token operator">:</span>rules<span class="token operator">=</span>&quot;<span class="token punctuation">{</span></span>
<span class="line">              required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">              message<span class="token operator">:</span> <span class="token string">&#39;输入内容不能为空&#39;</span><span class="token punctuation">,</span></span>
<span class="line">              trigger<span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span>&quot;</span>
<span class="line">          <span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>el<span class="token operator">-</span>input</span>
<span class="line">              maxlength<span class="token operator">=</span><span class="token string">&quot;50&quot;</span></span>
<span class="line">              v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;domain.fieldName&quot;</span></span>
<span class="line">              <span class="token operator">:</span>disabled<span class="token operator">=</span><span class="token string">&quot;domain.sysDefaultFieldId &amp;&amp; domain.sysDefaultFieldId != &#39;&#39;&quot;</span></span>
<span class="line">            <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span></span>
<span class="line">        </span>
<span class="line">          <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">&quot;选项内容&quot;</span> <span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>el<span class="token operator">-</span>button</span>
<span class="line">              text</span>
<span class="line">              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;textColor&quot;</span></span>
<span class="line">              <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;addOptions(domain)&quot;</span></span>
<span class="line">              <span class="token operator">:</span>disabled<span class="token operator">=</span><span class="token string">&quot;domain.sysDefaultFieldId &amp;&amp; domain.sysDefaultFieldId != &#39;&#39;&quot;</span></span>
<span class="line">              <span class="token operator">&gt;</span>添加一个选项<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button</span>
<span class="line">            <span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item1, index1) in domain?.fieldOption&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index1&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">&quot;16&quot;</span></span>
<span class="line">                <span class="token operator">&gt;</span><span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item</span>
<span class="line">                  <span class="token operator">:</span>label<span class="token operator">=</span><span class="token string">&quot;&#39;选项&#39; + (index1 + 1)&quot;</span></span>
<span class="line">                  <span class="token operator">:</span>prop<span class="token operator">=</span><span class="token string">&quot;&#39;formContent.&#39; + index + &#39;.fieldOption.&#39; + index1&quot;</span></span>
<span class="line">                  <span class="token operator">:</span>rules<span class="token operator">=</span>&quot;<span class="token punctuation">{</span></span>
<span class="line">                    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                    message<span class="token operator">:</span> <span class="token string">&#39;选项内容不能为空&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    trigger<span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span></span>
<span class="line">                  <span class="token punctuation">}</span>&quot;</span>
<span class="line">                <span class="token operator">&gt;</span></span>
<span class="line">                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>input</span>
<span class="line">                    maxlength<span class="token operator">=</span><span class="token string">&quot;20&quot;</span></span>
<span class="line">                    v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;domain.fieldOption[index1]&quot;</span></span>
<span class="line">                    <span class="token operator">:</span>disabled<span class="token operator">=</span><span class="token string">&quot;domain.sysDefaultFieldId &amp;&amp; domain.sysDefaultFieldId != &#39;&#39;&quot;</span></span>
<span class="line">                  <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item</span>
<span class="line">              <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span>el<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">&quot;4&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>el<span class="token operator">-</span>button</span>
<span class="line">                  <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;Close&quot;</span></span>
<span class="line">                  link</span>
<span class="line">                  size<span class="token operator">=</span><span class="token string">&quot;large&quot;</span></span>
<span class="line">                  v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;domain?.fieldOption?.length &gt; 1&quot;</span></span>
<span class="line">                  <span class="token operator">:</span>disabled<span class="token operator">=</span><span class="token string">&quot;domain.sysDefaultFieldId &amp;&amp; domain.sysDefaultFieldId != &#39;&#39;&quot;</span></span>
<span class="line">                  <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token punctuation">.</span>prevent<span class="token operator">=</span><span class="token string">&quot;removeDomainSingle(domain, index1)&quot;</span></span>
<span class="line">                <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>col<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>el<span class="token operator">-</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;addDomain(3)&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>单行文本<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>el<span class="token operator">-</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;addDomain(1)&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>单选题<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>el<span class="token operator">-</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;addDomain(2)&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>多选题<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">     </span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line"></span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line">    <span class="token keyword">const</span> drawerProps <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>DrawerProps<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  isView<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  formSysFieldArr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  row<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    formContent<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        fieldOption<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 删除题目</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">removeDomain</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> index <span class="token operator">=</span> drawerProps<span class="token punctuation">.</span>value<span class="token punctuation">.</span>row<span class="token operator">!</span><span class="token punctuation">.</span>formContent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">,</span> item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    drawerProps<span class="token punctuation">.</span>value<span class="token punctuation">.</span>row<span class="token operator">!</span><span class="token punctuation">.</span>formContent<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    drawerProps<span class="token punctuation">.</span>value<span class="token punctuation">.</span>row<span class="token operator">!</span><span class="token punctuation">.</span>formSysDefaultFields <span class="token operator">=</span> drawerProps<span class="token punctuation">.</span>value<span class="token punctuation">.</span>row<span class="token operator">!</span><span class="token punctuation">.</span>formSysDefaultFields<span class="token operator">?.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item1<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> item1 <span class="token operator">!=</span> item<span class="token punctuation">.</span>sysDefaultFieldId<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 删除选项</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">removeDomainSingle</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  item<span class="token punctuation">.</span>fieldOption<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">addDomain</span> <span class="token operator">=</span> <span class="token punctuation">(</span>fieldType<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> fieldType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  drawerProps<span class="token punctuation">.</span>value<span class="token punctuation">.</span>row<span class="token operator">!</span><span class="token punctuation">.</span>formContent<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    fieldType<span class="token operator">:</span> fieldType<span class="token punctuation">,</span></span>
<span class="line">    isRequired<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    fieldName<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    fieldOption<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    fieldDescription<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    key<span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">addOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>fieldOption <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>fieldOption<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    item<span class="token punctuation">.</span>fieldOption<span class="token operator">?.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    item<span class="token punctuation">.</span>fieldOption <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例2" tabindex="-1"><a class="header-anchor" href="#案例2"><span>案例2</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">    &lt;el-form :model=&quot;dynamicValidateForm&quot; ref=&quot;dynamicValidateForm&quot; label-width=&quot;100px&quot; class=&quot;demo-dynamic&quot;&gt;</span>
<span class="line"> </span>
<span class="line">  &lt;el-form-item</span>
<span class="line">    v-for=&quot;(domain, index) in dynamicValidateForm.domains&quot;</span>
<span class="line">    :label=&quot;&#39;域名&#39; + index&quot;</span>
<span class="line">    :key=&quot;domain.key&quot;</span>
<span class="line">    :prop=&quot;&#39;domains.&#39; + index + &#39;.value&#39;&quot;</span>
<span class="line">    :rules=&quot;{</span>
<span class="line">      required: true, message: &#39;域名不能为空&#39;, trigger: &#39;blur&#39;</span>
<span class="line">    }&quot;</span>
<span class="line">  &gt;</span>
<span class="line">    &lt;el-input v-model=&quot;domain.value&quot;&gt;&lt;/el-input&gt;&lt;el-button @click.prevent=&quot;removeDomain(domain)&quot;&gt;删除&lt;/el-button&gt;</span>
<span class="line">  &lt;/el-form-item&gt;</span>
<span class="line">  &lt;el-form-item&gt;</span>
<span class="line">    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm(&#39;dynamicValidateForm&#39;)&quot;&gt;提交&lt;/el-button&gt;</span>
<span class="line">    &lt;el-button @click=&quot;addDomain&quot;&gt;新增域名&lt;/el-button&gt;</span>
<span class="line">    &lt;el-button @click=&quot;resetForm(&#39;dynamicValidateForm&#39;)&quot;&gt;重置&lt;/el-button&gt;</span>
<span class="line">  &lt;/el-form-item&gt;</span>
<span class="line">&lt;/el-form&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  export default {</span>
<span class="line">    data() {</span>
<span class="line">      return {</span>
<span class="line">        dynamicValidateForm: {</span>
<span class="line">          domains: [{</span>
<span class="line">            value: &#39;&#39;</span>
<span class="line">          }]</span>
<span class="line">        }</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">      submitForm(formName) {</span>
<span class="line">        this.$refs[formName].validate((valid) =&gt; {</span>
<span class="line">          if (valid) {</span>
<span class="line">            alert(&#39;submit!&#39;);</span>
<span class="line">          } else {</span>
<span class="line">            console.log(&#39;error submit!!&#39;);</span>
<span class="line">            return false;</span>
<span class="line">          }</span>
<span class="line">        });</span>
<span class="line">      },</span>
<span class="line">      resetForm(formName) {</span>
<span class="line">        this.$refs[formName].resetFields();</span>
<span class="line">      },</span>
<span class="line">      removeDomain(item) {</span>
<span class="line">        var index = this.dynamicValidateForm.domains.indexOf(item)</span>
<span class="line">        if (index !== -1) {</span>
<span class="line">          this.dynamicValidateForm.domains.splice(index, 1)</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      addDomain() {</span>
<span class="line">        this.dynamicValidateForm.domains.push({</span>
<span class="line">          value: &#39;&#39;,</span>
<span class="line">          key: Date.now()</span>
<span class="line">        });</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">　</span>
<span class="line">\`\`\`js</span>
<span class="line"></span>
<span class="line">　其中动态表单校验中用到了:prop=&quot;&#39;domains.&#39; + index + &#39;.value&#39;&quot;  而domains 是一个数组。  常规来说这么写相当于是 domains.1.value 的写法,但这种写法肯定是有问题的。没看源码不是很理解这样的链式操作。</span>
<span class="line"></span>
<span class="line">感觉:prop=&quot;&#39;domains.&#39; + index + &#39;.value&#39;&quot;  这种写法错误的  会换成 :prop=&quot;&#39;domains[&#39; + index + &#39;].value&#39;&quot;  这种写法, 其实看了源码之后才明白 这两种写法都是正确的 </span>
<span class="line">1 . prop 接收的数据类型是String ,</span>
<span class="line"></span>
<span class="line">2. :prop=&quot;&#39;domains.&#39; + index + &#39;.value&#39;&quot;  和  :prop=&quot;&#39;domains[&#39; + index + &#39;].value&#39;&quot;    这两种传值最终都是转换成了 domains.0.value  字符串，这是一个字符串 而不是通过 domains.0 来取domains数组的第一个元素</span>
<span class="line"></span>
<span class="line">数组某一项写法</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>&lt;div
        class=&quot;form-box&quot;
        :key=&quot;domain.key&quot;
        v-for=&quot;(domain, index) in dynamicValidateForm.healthRuleConfigs[0]
          .secondHealthRuleConfigs[0].ruleConfigs&quot;
      &gt;
        &lt;el-row&gt;
          &lt;el-col :span=&quot;5&quot;&gt;
            &lt;el-form-item
              class=&quot;form-margin&quot;
              :prop=&quot;\`healthRuleConfigs.\${0}.secondHealthRuleConfigs.\${0}.ruleConfigs.\${index}.min\`&quot;
              :rules=&quot;rules.activityRule&quot;
            &gt;
              &lt;el-input
                v-model=&quot;domain.min&quot;
                placeholder=&quot;请填写&quot;
              &gt;&lt;/el-input&gt;
            &lt;/el-form-item&gt;
</code></pre><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,6)])])}const c=n(t,[["render",o]]),r=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98/vue%E7%89%88%E6%9C%ACelement%20form%20%E8%A1%A8%E5%8D%95%E5%A4%9A%E5%B1%82%E5%B5%8C%E5%A5%97.html","title":"vue版本element form 表单多层嵌套","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"项目中遇到的问题/vue版本element form 表单多层嵌套.md"}');export{c as comp,r as data};
