import{_ as n,c as a,a as e,o as p}from"./app-CJxOrLyD.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="配置提交规范" tabindex="-1"><a class="header-anchor" href="#配置提交规范"><span>配置提交规范</span></a></h2><p>npm i -D husky</p><p>npx husky install</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// @see: https://cz-git.qbenben.com/zh/guide</span></span>
<span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;cz-git&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span> */</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token parameter">commit</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> commit<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// @see: https://commitlint.js.org/#/reference-rules</span></span>
<span class="line">    <span class="token string-property property">&#39;body-leading-blank&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;footer-leading-blank&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;header-max-length&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;subject-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;type-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;ci&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;wip&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;workflow&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;types&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;release&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;Select the type of change that you&#39;re committing:&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">&#39;Denote the SCOPE of this change (optional):&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&#39;Denote the SCOPE of this change:&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;Write a SHORT, IMPERATIVE tense description of the change:\\n&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;Provide a LONGER description of the change (optional). Use &quot;|&quot; to break new line:\\n&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">breaking</span><span class="token operator">:</span></span>
<span class="line">        <span class="token string">&#39;List any BREAKING CHANGES (optional). Use &quot;|&quot; to break new line:\\n&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">footerPrefixsSelect</span><span class="token operator">:</span></span>
<span class="line">        <span class="token string">&#39;Select the ISSUES type of changeList by this change (optional):&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customFooterPrefixs</span><span class="token operator">:</span> <span class="token string">&#39;Input ISSUES prefix:&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;List any ISSUES by this change. E.g.: #31, #34:\\n&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&#39;Are you sure you want to proceed with the commit above?&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 中文版</span></span>
<span class="line">      <span class="token comment">// type: &quot;选择你要提交的类型 :&quot;,</span></span>
<span class="line">      <span class="token comment">// scope: &quot;选择一个提交范围（可选）:&quot;,</span></span>
<span class="line">      <span class="token comment">// customScope: &quot;请输入自定义的提交范围 :&quot;,</span></span>
<span class="line">      <span class="token comment">// subject: &quot;填写简短精炼的变更描述 :\\n&quot;,</span></span>
<span class="line">      <span class="token comment">// body: &#39;填写更加详细的变更描述（可选）。使用 &quot;|&quot; 换行 :\\n&#39;,</span></span>
<span class="line">      <span class="token comment">// breaking: &#39;列举非兼容性重大的变更（可选）。使用 &quot;|&quot; 换行 :\\n&#39;,</span></span>
<span class="line">      <span class="token comment">// footerPrefixsSelect: &quot;选择关联issue前缀（可选）:&quot;,</span></span>
<span class="line">      <span class="token comment">// customFooterPrefixs: &quot;输入自定义issue前缀 :&quot;,</span></span>
<span class="line">      <span class="token comment">// footer: &quot;列举关联issue (可选) 例如: #31, #I3244 :\\n&quot;,</span></span>
<span class="line">      <span class="token comment">// confirmCommit: &quot;是否提交或修改commit ?&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;feat:     🚀  A new feature&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🚀&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fix:      🧩  A bug fix&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🧩&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;docs:     📚  Documentation only changes&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;📚&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;style:    🎨  Changes that do not affect the meaning of the code&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🎨&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;refactor: ♻️   A code change that neither fixes a bug nor adds a feature&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;♻️&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;perf:     ⚡️  A code change that improves performance&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;⚡️&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test:     ✅  Adding missing tests or correcting existing tests&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;✅&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;build:    📦️   Changes that affect the build system or external dependencies&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;📦️&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;ci&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ci:       🎡  Changes to our CI configuration files and scripts&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🎡&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;chore:    🔨  Other changes that don&#39;t modify src or test files&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🔨&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;revert:   ⏪️  Reverts a previous commit&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;⏪️&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 中文版</span></span>
<span class="line">      <span class="token comment">// { value: &quot;特性&quot;, name: &quot;特性:   🚀  新增功能&quot;, emoji: &quot;🚀&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;修复&quot;, name: &quot;修复:   🧩  修复缺陷&quot;, emoji: &quot;🧩&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;文档&quot;, name: &quot;文档:   📚  文档变更&quot;, emoji: &quot;📚&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;格式&quot;, name: &quot;格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）&quot;, emoji: &quot;🎨&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;重构&quot;, name: &quot;重构:   ♻️  代码重构（不包括 bug 修复、功能新增）&quot;, emoji: &quot;♻️&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;性能&quot;, name: &quot;性能:   ⚡️  性能优化&quot;, emoji: &quot;⚡️&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;测试&quot;, name: &quot;测试:   ✅  添加疏漏测试或已有测试改动&quot;, emoji: &quot;✅&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;构建&quot;, name: &quot;构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）&quot;, emoji: &quot;📦️&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;集成&quot;, name: &quot;集成:   🎡  修改 CI 配置、脚本&quot;, emoji: &quot;🎡&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;回退&quot;, name: &quot;回退:   ⏪️  回滚 commit&quot;, emoji: &quot;⏪️&quot; },</span></span>
<span class="line">      <span class="token comment">// { value: &quot;其他&quot;, name: &quot;其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）&quot;, emoji: &quot;🔨&quot; }</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">themeColorCode</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowEmptyScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customScopesAlign</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customScopesAlias</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">emptyScopesAlias</span><span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">upperCaseSubject</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowBreakingChanges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fix&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">breaklineNumber</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">breaklineChar</span><span class="token operator">:</span> <span class="token string">&#39;|&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">issuePrefixs</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;closed&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;closed:   ISSUES has been processed&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customIssuePrefixsAlign</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">emptyIssuePrefixsAlias</span><span class="token operator">:</span> <span class="token string">&#39;skip&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customIssuePrefixsAlias</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowCustomIssuePrefixs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowEmptyIssuePrefixs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">confirmColorize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxHeaderLength</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxSubjectLength</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">minSubjectLength</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">scopeOverrides</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultBody</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultIssues</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultScope</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultSubject</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用 Husky 启用 commitlint：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>commit<span class="token operator">-</span>msg <span class="token string">&#39;npx --no -- commitlint --edit &quot;$1&quot;&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置代码检查" tabindex="-1"><a class="header-anchor" href="#配置代码检查"><span>配置代码检查</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm install lint<span class="token operator">-</span>staged <span class="token operator">--</span>save<span class="token operator">-</span>dev</span>
<span class="line">npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>pre<span class="token operator">-</span>commit <span class="token string">&quot;npm run lint&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line">  &quot;scripts<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    ...</span>
<span class="line">     <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目根目录下新建 lint-staged.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;*.{js,jsx,ts,tsx}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;{!(package)*.json,*.code-snippets,.!(browserslist)*rc}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&#39;prettier --write--parser json&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;package.json&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;*.{css,scss,less,styl}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;*.md&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line"></span>
<span class="line">代码格式化和质量工具</span>
<span class="line">为了设定一个标准，供项目的所有贡献者使用，以保持代码风格一致并遵循基本的最佳实践，我们将使用两个工具：</span>
<span class="line"></span>
<span class="line">eslint - 代码规范的最佳实践</span>
<span class="line">prettier - 自动格式化代码文件</span>
<span class="line"></span>
<span class="line">### ESLint</span>
<span class="line">我们从 ESLint 开始，它非常简单因为在我们创建 Next.js 项目的时候已经自动安装好并且有了默认配置。</span>
<span class="line">我们仅需要添加少部分额外的配置就可以让它比默认配置更加严格。如果你不同意其中的任何一条规则配置，不用担心，我们可以非常简单的手动关闭这些规则。我们将所有的 ESLint 配置都写在 .eslintrc.json 文件中，这个文件已经存在于我们项目的根目录。</span>
<span class="line"></span>
<span class="line">.eslintrc.json</span>
<span class="line">\`\`\`json</span>
<span class="line"></span>
<span class="line">{</span>
<span class="line">  &quot;globals&quot;: {</span>
<span class="line">    &quot;React&quot;: &quot;readonly&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;settings&quot;: {</span>
<span class="line">    &quot;react&quot;: {</span>
<span class="line">      &quot;version&quot;: &quot;detect&quot;</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;root&quot;: true,</span>
<span class="line">  &quot;env&quot;: {</span>
<span class="line">    &quot;browser&quot;: true,</span>
<span class="line">    &quot;node&quot;: true,</span>
<span class="line">    &quot;es6&quot;: true</span>
<span class="line">  },</span>
<span class="line">  /* 指定如何解析语法 */</span>
<span class="line">  &quot;parser&quot;: &quot;@typescript-eslint/parser&quot;,</span>
<span class="line">  /* 优先级低于 parse 的语法解析配置 */</span>
<span class="line">  &quot;parserOptions&quot;: {</span>
<span class="line">    &quot;ecmaVersion&quot;: 2020,</span>
<span class="line">    &quot;sourceType&quot;: &quot;module&quot;,</span>
<span class="line">    &quot;jsxPragma&quot;: &quot;React&quot;,</span>
<span class="line">    &quot;ecmaFeatures&quot;: {</span>
<span class="line">      &quot;jsx&quot;: true</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;plugins&quot;: [&quot;react&quot;, &quot;@typescript-eslint&quot;, &quot;react-hooks&quot;, &quot;prettier&quot;],</span>
<span class="line">  /*</span>
<span class="line">   * &quot;off&quot; 或 0    ==&gt;  关闭规则</span>
<span class="line">   * &quot;warn&quot; 或 1   ==&gt;  打开的规则作为警告（不影响代码执行）</span>
<span class="line">   * &quot;error&quot; 或 2  ==&gt;  规则作为一个错误（代码不能执行，界面报错）</span>
<span class="line">   */</span>
<span class="line">  &quot;rules&quot;: {</span>
<span class="line">    // eslint (http://eslint.cn/docs/rules)</span>
<span class="line">    &quot;no-var&quot;: &quot;error&quot;, // 要求使用 let 或 const 而不是 var</span>
<span class="line">    &quot;no-multiple-empty-lines&quot;: [&quot;error&quot;, { &quot;max&quot;: 1 }], // 不允许多个空行</span>
<span class="line">    &quot;no-use-before-define&quot;: &quot;error&quot;, // 禁止在 函数/类/变量 定义之前使用它们</span>
<span class="line">    &quot;prefer-const&quot;: &quot;error&quot;, // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const</span>
<span class="line">    &quot;no-irregular-whitespace&quot;: &quot;error&quot;, // 禁止不规则的空白</span>
<span class="line"></span>
<span class="line">    // typeScript (https://typescript-eslint.io/rules)</span>
<span class="line">    &quot;@typescript-eslint/no-unused-vars&quot;: &quot;warn&quot;, // 禁止定义未使用的变量</span>
<span class="line">    &quot;@typescript-eslint/no-inferrable-types&quot;: &quot;warn&quot;, // 可以轻松推断的显式类型可能会增加不必要的冗长</span>
<span class="line">    &quot;@typescript-eslint/no-namespace&quot;: &quot;warn&quot;, // 禁止使用自定义 TypeScript 模块和命名空间。</span>
<span class="line">    &quot;@typescript-eslint/no-explicit-any&quot;: &quot;warn&quot;, // 禁止使用 any 类型</span>
<span class="line">    &quot;@typescript-eslint/ban-ts-ignore&quot;: &quot;off&quot;, // 禁止使用 @ts-ignore</span>
<span class="line">    &quot;@typescript-eslint/ban-types&quot;: &quot;warn&quot;, // 禁止使用特定类型</span>
<span class="line">    &quot;@typescript-eslint/explicit-function-return-type&quot;: &quot;warn&quot;, // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明</span>
<span class="line">    &quot;@typescript-eslint/no-var-requires&quot;: &quot;warn&quot;, // 不允许在 import 语句中使用 require 语句</span>
<span class="line">    &quot;@typescript-eslint/no-empty-function&quot;: &quot;warn&quot;, // 禁止空函数</span>
<span class="line">    &quot;@typescript-eslint/no-use-before-define&quot;: &quot;warn&quot;, // 禁止在变量定义之前使用它们</span>
<span class="line">    &quot;@typescript-eslint/ban-ts-comment&quot;: &quot;warn&quot;, // 禁止 @ts-&lt;directive&gt; 使用注释或要求在指令后进行描述</span>
<span class="line">    &quot;@typescript-eslint/no-non-null-assertion&quot;: &quot;warn&quot;, // 不允许使用后缀运算符的非空断言(!)</span>
<span class="line">    &quot;@typescript-eslint/explicit-module-boundary-types&quot;: &quot;warn&quot;, // 要求导出函数和类的公共类方法的显式返回和参数类型</span>
<span class="line">    // react (https://github.com/jsx-eslint/eslint-plugin-react)</span>
<span class="line">    &quot;react-hooks/rules-of-hooks&quot;: &quot;error&quot;,</span>
<span class="line">    &quot;react-hooks/exhaustive-deps&quot;: &quot;error&quot;,</span>
<span class="line">    &quot;no-debugger&quot;: &quot;error&quot;,</span>
<span class="line">    &quot;no-console&quot;: &quot;warn&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm run lint 你会得到类型的提示 ✔ No ESLint warnings or errors ✨ Done in 3.48s.</p><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier"><span>Prettier</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm i <span class="token operator">-</span><span class="token constant">D</span> prettier</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>同时我也推荐你安装 Prettier VS Code 插件 ，这样你不用依赖命令行工具就可以在 VS Code 中进行文件格式化。在你的项目中安装和配置它意味着 VSCode 将使用你项目的设置，因此仍然有必要在此处添加它。 我们将在根目录添加两个文件：</p><p>.prettierrc.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token comment">// @see: https://www.prettier.cn</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 超过最大值换行</span></span>
<span class="line">	<span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 缩进字节数</span></span>
<span class="line">	<span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 使用制表符而不是空格缩进行</span></span>
<span class="line">	<span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 结尾不用分号(true有，false没有)</span></span>
<span class="line">	<span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 使用单引号(true单双引号，false双引号)</span></span>
<span class="line">	<span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 更改引用对象属性的时间 可选值&quot;&lt;as-needed|consistent|preserve&gt;&quot;</span></span>
<span class="line">	<span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;</span></span>
<span class="line">	<span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值&quot;&lt;none|es5|all&gt;&quot;，默认none</span></span>
<span class="line">	<span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 在JSX中使用单引号而不是双引号</span></span>
<span class="line">	<span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">//  (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号</span></span>
<span class="line">	<span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 如果文件顶部已经有一个 doclock，这个选项将新建一行注释，并打上@format标记。</span></span>
<span class="line">	<span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 指定要使用的解析器，不需要写文件开头的 @prettier</span></span>
<span class="line">	<span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行</span></span>
<span class="line">	<span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 在html中空格是否是敏感的 &quot;css&quot; - 遵守CSS显示属性的默认值， &quot;strict&quot; - 空格被认为是敏感的 ，&quot;ignore&quot; - 空格被认为是不敏感的</span></span>
<span class="line">	<span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 换行符使用 lf 结尾是 可选值&quot;&lt;auto|lf|crlf|cr&gt;&quot;</span></span>
<span class="line">	<span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码</span></span>
<span class="line">	<span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">// Vue文件脚本和样式标签缩进</span></span>
<span class="line">	<span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.prettierignore</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.prettierignore</span>
<span class="line">.next</span>
<span class="line">dist</span>
<span class="line">node_modules</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个文件中我列了一些目录，我不希望 prettier 在这些目录中浪费任何资源去进行格式化。你也可以使用类似 *.html 这样的方式去忽略你选择的文件类似 现在我们在 package.json 添加新的 script ，然后我们就可以运行 Prettier： package.json</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"></span>
<span class="line">  &quot;scripts<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    ...</span>
<span class="line">    <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write .&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以运行</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm run prettier</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>chmod ug+x .husky/*</p>`,25)]))}const c=n(t,[["render",l]]),r=JSON.parse(`{"path":"/%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%BF%AB%E9%80%9F%E5%B7%A5%E7%A8%8B%E5%8C%96%E6%A0%A1%E9%AA%8C.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1755237773000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"6deb5d76223f5123b8c6a909eb9b48279cf2bc9e","time":1755237773000,"email":"yk4545945@163.com","author":"qdleader","message":"Merge branch 'master' of https://github.com/qdleader/qdleader"}]},"filePathRelative":"工程化/快速工程化校验.md"}`);export{c as comp,r as data};
