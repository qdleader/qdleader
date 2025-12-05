import{_ as n,c as a,a as e,o as l}from"./app-DlOJVZry.js";const i={};function p(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="发布-qdleader-mcp-到-npm" tabindex="-1"><a class="header-anchor" href="#发布-qdleader-mcp-到-npm"><span>发布 QDLeader MCP 到 npm</span></a></h1><p>这个指南将帮助你将 <code>qdleader-mcp</code> 发布到 npm，让全世界的开发者都能使用。</p><h2 id="📋-发布前准备" tabindex="-1"><a class="header-anchor" href="#📋-发布前准备"><span>📋 发布前准备</span></a></h2><h3 id="_1-注册-npm-账号" tabindex="-1"><a class="header-anchor" href="#_1-注册-npm-账号"><span>1. 注册 npm 账号</span></a></h3><p>如果还没有 npm 账号：</p><ol><li>访问 https://www.npmjs.com/signup</li><li>填写用户名、邮箱、密码</li><li>验证邮箱</li></ol><h3 id="_2-登录-npm" tabindex="-1"><a class="header-anchor" href="#_2-登录-npm"><span>2. 登录 npm</span></a></h3><p>在终端中运行：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> login</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输入你的：</p><ul><li>Username（用户名）</li><li>Password（密码）</li><li>Email（邮箱）</li><li>可能需要输入 OTP（如果开启了双因素认证）</li></ul><p>验证是否登录成功：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">whoami</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-检查包名是否可用" tabindex="-1"><a class="header-anchor" href="#_3-检查包名是否可用"><span>3. 检查包名是否可用</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> view qdleader-mcp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果显示 <code>404</code>，说明包名可用。如果已被占用，需要修改 <code>package.json</code> 中的 <code>name</code> 字段。</p><p>可选的包名：</p><ul><li><code>qdleader-mcp</code></li><li><code>@your-username/qdleader-mcp</code>（scoped package）</li><li><code>qdleader-mcp-server</code></li></ul><h2 id="🚀-发布步骤" tabindex="-1"><a class="header-anchor" href="#🚀-发布步骤"><span>🚀 发布步骤</span></a></h2><h3 id="步骤-1-检查和更新版本" tabindex="-1"><a class="header-anchor" href="#步骤-1-检查和更新版本"><span>步骤 1: 检查和更新版本</span></a></h3><p>当前版本在 <code>package.json</code> 中定义：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后续更新时使用：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> version patch  <span class="token comment"># 1.0.0 -&gt; 1.0.1</span></span>
<span class="line"><span class="token function">npm</span> version minor  <span class="token comment"># 1.0.0 -&gt; 1.1.0</span></span>
<span class="line"><span class="token function">npm</span> version major  <span class="token comment"># 1.0.0 -&gt; 2.0.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤-2-构建项目" tabindex="-1"><a class="header-anchor" href="#步骤-2-构建项目"><span>步骤 2: 构建项目</span></a></h3><p>确保项目构建成功：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> /Users/icourt/github/qdleader/mcp-server</span>
<span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查 <code>dist</code> 目录是否生成了编译后的文件。</p><h3 id="步骤-3-测试本地包" tabindex="-1"><a class="header-anchor" href="#步骤-3-测试本地包"><span>步骤 3: 测试本地包</span></a></h3><p>在发布前本地测试：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 创建本地链接</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> <span class="token function">link</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在其他项目中测试</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> /path/to/test-project</span>
<span class="line"><span class="token function">npm</span> <span class="token function">link</span> qdleader-mcp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤-4-检查将要发布的文件" tabindex="-1"><a class="header-anchor" href="#步骤-4-检查将要发布的文件"><span>步骤 4: 检查将要发布的文件</span></a></h3><p>运行 dry-run 查看哪些文件会被发布：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> publish --dry-run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>确认以下文件会被包含：</p><ul><li>✅ <code>dist/</code> 目录（编译后的代码）</li><li>✅ <code>README.md</code></li><li>✅ <code>package.json</code></li><li>✅ <code>LICENSE</code></li><li>❌ <code>src/</code> 目录（会被 <code>.npmignore</code> 排除）</li><li>❌ <code>node_modules/</code></li></ul><h3 id="步骤-5-发布到-npm" tabindex="-1"><a class="header-anchor" href="#步骤-5-发布到-npm"><span>步骤 5: 发布到 npm</span></a></h3><p><strong>首次发布（公开包）：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--access</span> public</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>后续更新：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 更新版本号</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> version patch</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 发布</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> publish</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤-6-验证发布" tabindex="-1"><a class="header-anchor" href="#步骤-6-验证发布"><span>步骤 6: 验证发布</span></a></h3><ol><li>访问 npm 页面：https://www.npmjs.com/package/qdleader-mcp</li><li>测试安装：<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">npx qdleader-mcp@latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="📦-发布作为-scoped-package-可选" tabindex="-1"><a class="header-anchor" href="#📦-发布作为-scoped-package-可选"><span>📦 发布作为 Scoped Package（可选）</span></a></h2><p>如果 <code>qdleader-mcp</code> 名称被占用，可以发布为 scoped package：</p><ol><li><p>修改 <code>package.json</code>：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@your-username/qdleader-mcp&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>发布：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--access</span> public</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>用户使用时：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;mcpServers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;qdleader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-y&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@your-username/qdleader-mcp&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="🔄-更新版本流程" tabindex="-1"><a class="header-anchor" href="#🔄-更新版本流程"><span>🔄 更新版本流程</span></a></h2><p>每次更新后的发布流程：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 1. 拉取最新代码</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> /Users/icourt/github/qdleader/mcp-server</span>
<span class="line"><span class="token function">git</span> pull</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 安装依赖</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 构建项目</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 测试功能</span></span>
<span class="line"><span class="token comment"># 确保 MCP 服务器正常工作</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 更新版本号</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> version patch  <span class="token comment"># 或 minor/major</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6. 更新 CHANGELOG.md</span></span>
<span class="line"><span class="token comment"># 记录本次更新的内容</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 7. 提交更改</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;chore: bump version to x.x.x&quot;</span></span>
<span class="line"><span class="token function">git</span> push</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 8. 发布到 npm</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> publish</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 9. 创建 GitHub Release（可选）</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> tag v1.0.1</span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">--tags</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📝-版本管理最佳实践" tabindex="-1"><a class="header-anchor" href="#📝-版本管理最佳实践"><span>📝 版本管理最佳实践</span></a></h2><h3 id="语义化版本控制-semver" tabindex="-1"><a class="header-anchor" href="#语义化版本控制-semver"><span>语义化版本控制 (Semver)</span></a></h3><ul><li><strong>MAJOR (1.0.0 -&gt; 2.0.0)</strong>: 不兼容的 API 更改</li><li><strong>MINOR (1.0.0 -&gt; 1.1.0)</strong>: 向后兼容的新功能</li><li><strong>PATCH (1.0.0 -&gt; 1.0.1)</strong>: 向后兼容的错误修复</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 修复 bug</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> version patch</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1.0.0 -&gt; 1.0.1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加新功能（向后兼容）</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> version minor</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1.0.1 -&gt; 1.1.0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重大更改（不兼容旧版本）</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> version major</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1.1.0 -&gt; 2.0.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🏷️-beta-和-pre-release-版本" tabindex="-1"><a class="header-anchor" href="#🏷️-beta-和-pre-release-版本"><span>🏷️ Beta 和 Pre-release 版本</span></a></h2><p>测试新功能时发布 beta 版本：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 创建 beta 版本</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> version prerelease <span class="token parameter variable">--preid</span><span class="token operator">=</span>beta</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1.0.0 -&gt; 1.0.1-beta.0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 发布 beta 版本</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--tag</span> beta</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 用户安装 beta 版本</span></span>
<span class="line"></span>
<span class="line">npx qdleader-mcp@beta</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔐-最佳实践" tabindex="-1"><a class="header-anchor" href="#🔐-最佳实践"><span>🔐 最佳实践</span></a></h2><h3 id="_1-使用-npmignore" tabindex="-1"><a class="header-anchor" href="#_1-使用-npmignore"><span>1. 使用 .npmignore</span></a></h3><p>确保不发布不必要的文件：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">src<span class="token operator">/</span></span>
<span class="line">tsconfig<span class="token punctuation">.</span>json</span>
<span class="line"><span class="token operator">*</span><span class="token punctuation">.</span>log</span>
<span class="line"><span class="token punctuation">.</span>DS_Store</span>
<span class="line"><span class="token operator">*</span><span class="token punctuation">.</span>tsbuildinfo</span>
<span class="line">node_modules<span class="token operator">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-设置双因素认证-2fa" tabindex="-1"><a class="header-anchor" href="#_2-设置双因素认证-2fa"><span>2. 设置双因素认证 (2FA)</span></a></h3><p>为 npm 账号启用 2FA：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> profile enable-2fa auth-and-writes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-使用-npm-scripts" tabindex="-1"><a class="header-anchor" href="#_3-使用-npm-scripts"><span>3. 使用 npm scripts</span></a></h3><p>在 <code>package.json</code> 中添加：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;prepublishOnly&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;preversion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm test&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;postversion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git push &amp;&amp; git push --tags&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-添加-npmrc-可选" tabindex="-1"><a class="header-anchor" href="#_4-添加-npmrc-可选"><span>4. 添加 .npmrc（可选）</span></a></h3><p>在用户目录创建 <code>~/.npmrc</code>：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//registry.npmjs.org/:_authToken=YOUR_AUTH_TOKEN</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="📊-发布后的维护" tabindex="-1"><a class="header-anchor" href="#📊-发布后的维护"><span>📊 发布后的维护</span></a></h2><h3 id="_1-监控下载量" tabindex="-1"><a class="header-anchor" href="#_1-监控下载量"><span>1. 监控下载量</span></a></h3><p>访问 npm 统计页面：</p><ul><li>https://www.npmjs.com/package/qdleader-mcp</li></ul><h3 id="_2-处理-issues" tabindex="-1"><a class="header-anchor" href="#_2-处理-issues"><span>2. 处理 Issues</span></a></h3><p>在 GitHub 上处理用户反馈：</p><ul><li>https://github.com/qdleader/qdleader/issues</li></ul><h3 id="_3-更新文档" tabindex="-1"><a class="header-anchor" href="#_3-更新文档"><span>3. 更新文档</span></a></h3><p>每次更新后同步更新：</p><ul><li>README.md</li><li>CHANGELOG.md</li><li>使用示例</li></ul><h3 id="_4-弃用旧版本-如需要" tabindex="-1"><a class="header-anchor" href="#_4-弃用旧版本-如需要"><span>4. 弃用旧版本（如需要）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> deprecate qdleader-mcp@1.0.0 <span class="token string">&quot;请升级到 1.1.0&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-取消发布-慎用" tabindex="-1"><a class="header-anchor" href="#_5-取消发布-慎用"><span>5. 取消发布（慎用）</span></a></h3><p>⚠️ 只能在发布后 72 小时内取消：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> unpublish qdleader-mcp@1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="🎯-快速发布检查清单" tabindex="-1"><a class="header-anchor" href="#🎯-快速发布检查清单"><span>🎯 快速发布检查清单</span></a></h2><ul><li>[ ] ✅ 代码已提交到 Git</li><li>[ ] ✅ 已登录 npm (<code>npm whoami</code>)</li><li>[ ] ✅ 包名可用或已确认</li><li>[ ] ✅ 版本号已更新</li><li>[ ] ✅ README.md 内容完整</li><li>[ ] ✅ LICENSE 文件存在</li><li>[ ] ✅ 构建成功 (<code>npm run build</code>)</li><li>[ ] ✅ 本地测试通过</li><li>[ ] ✅ CHANGELOG.md 已更新</li><li>[ ] ✅ .npmignore 配置正确</li><li>[ ] ✅ package.json 信息完整（description, keywords, repository, etc.）</li></ul><h2 id="🚀-一键发布脚本" tabindex="-1"><a class="header-anchor" href="#🚀-一键发布脚本"><span>🚀 一键发布脚本</span></a></h2><p>创建 <code>publish.sh</code>：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;🚀 Starting publish process...&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1. 检查是否有未提交的更改</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> status <span class="token parameter variable">-s</span><span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">  <span class="token builtin class-name">echo</span> <span class="token string">&quot;❌ You have uncommitted changes. Please commit first.&quot;</span></span>
<span class="line">  <span class="token builtin class-name">exit</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 构建</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;📦 Building...&quot;</span></span>
<span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 询问版本类型</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;Select version bump type:&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;1) patch (x.x.X)&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;2) minor (x.X.0)&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;3) major (X.0.0)&quot;</span></span>
<span class="line"><span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter choice [1-3]: &quot;</span> choice</span>
<span class="line"></span>
<span class="line"><span class="token keyword">case</span> <span class="token variable">$choice</span> <span class="token keyword">in</span></span>
<span class="line">  <span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">npm</span> version patch <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token number">2</span><span class="token punctuation">)</span> <span class="token function">npm</span> version minor <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token number">3</span><span class="token punctuation">)</span> <span class="token function">npm</span> version major <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">  *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Invalid choice&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">esac</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 发布</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;📤 Publishing to npm...&quot;</span></span>
<span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--access</span> public</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 推送到 Git</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;⬆️  Pushing to Git...&quot;</span></span>
<span class="line"><span class="token function">git</span> push <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> push <span class="token parameter variable">--tags</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;✅ Publish complete!&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">chmod</span> +x publish.sh</span>
<span class="line">./publish.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📞-需要帮助" tabindex="-1"><a class="header-anchor" href="#📞-需要帮助"><span>📞 需要帮助？</span></a></h2><ul><li>npm 文档: https://docs.npmjs.com/</li><li>npm 支持: https://www.npmjs.com/support</li><li>GitHub Issues: https://github.com/qdleader/qdleader/issues</li></ul><hr><p><strong>祝发布顺利！🎉</strong></p>`,96)])])}const d=n(i,[["render",p]]),r=JSON.parse('{"path":"/mcp-server/PUBLISH.html","title":"发布 QDLeader MCP 到 npm","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1764899166000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"07187c6d590f64d71425d571d1a229e914859bb0","time":1764899166000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新了Vue.js、HTML/CSS和Spring Boot最佳实践文档内容"}]},"filePathRelative":"mcp-server/PUBLISH.md"}');export{d as comp,r as data};
