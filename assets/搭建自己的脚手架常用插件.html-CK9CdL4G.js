import{_ as s,c as a,a as e,o as p}from"./app-DFnxdJ0h.js";const t={};function i(l,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>新建qdleader-cli 文件夹 进入文件夹</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在 demo 下创建 bin 文件夹，并在里面创建 node 入口文件 enter</p><p>编辑 enter 文件，并将其配置到 package.json 中的 bin 字段</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token shebang important">#! /usr/bin/env node</span></span>
<span class="line">console.log<span class="token punctuation">(</span><span class="token string">&quot;hello demo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token comment">// bin 字段也支持对象模式配置</span></span>
<span class="line"><span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/enter&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm link 到全局</p><p>在 demo 文件目录下运行 npm link 将项目链接到本地环境，就可以临时实现 demo 指令全局调用。(--force 参数可以强制覆盖原有指令)</p><p>运行 qdleader-cli 命令，命令行成功打印出 hello demo。 demo 项目配置成功。</p><h2 id="commander-——-命令行指令配置" tabindex="-1"><a class="header-anchor" href="#commander-——-命令行指令配置"><span>commander —— 命令行指令配置</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">npm install commander</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>enter 文件内容如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">const <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&#39;commander&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">const program <span class="token operator">=</span> new Command<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">// const program <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&quot;commander&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">program.parse<span class="token punctuation">(</span>process.argv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 解析用户执行时输入的参数 // process.argv 是 nodejs 提供的属性 // npm run server --port 3000 // 后面的 --port 3000 就是用户输入的参数</p><p>Step2: version 方法可以配置版本信息提示</p><p>Step3: name 和 usage 方法分别配置 cli 名称和 --help 第一行提示</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">program.name<span class="token punctuation">(</span><span class="token string">&quot;icourt-cli&quot;</span><span class="token punctuation">)</span>.usage<span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span>icourt-cli <span class="token function">v</span><span class="token variable">\`</span></span><span class="token punctuation">)</span>.version<span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token number">1.0</span>.0<span class="token variable">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chalk-——-命令行美化工具" tabindex="-1"><a class="header-anchor" href="#chalk-——-命令行美化工具"><span>chalk —— 命令行美化工具</span></a></h2><p>npm i chalk@4.0.0</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">const chalk <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&quot;chalk&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">console.log<span class="token punctuation">(</span></span>
<span class="line">  chalk.green<span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&quot;Hello!&quot;</span> +<span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>+<span class="token string">&quot;Welcome to use&quot;</span> +</span>
<span class="line">      chalk.blue.underline.bold<span class="token punctuation">(</span><span class="token string">&quot;前端项目模版&quot;</span><span class="token punctuation">)</span> +</span>
<span class="line">      <span class="token string">&quot; enjoy it!&quot;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inquirer-——-命令行交互工具" tabindex="-1"><a class="header-anchor" href="#inquirer-——-命令行交互工具"><span>inquirer —— 命令行交互工具</span></a></h2><p>npm install --save inquirer@^8.0.0</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">new Inquirer.prompt<span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    name: <span class="token string">&quot;vue&quot;</span>,</span>
<span class="line">    // 多选交互功能</span>
<span class="line">    // 单选将这里修改为 list 即可</span>
<span class="line">    type: <span class="token string">&quot;checkbox&quot;</span>,</span>
<span class="line">    message: <span class="token string">&quot;Check the features needed for your project:&quot;</span>,</span>
<span class="line">    choices: <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        name: <span class="token string">&quot;Babel&quot;</span>,</span>
<span class="line">        checked: true,</span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        name: <span class="token string">&quot;TypeScript&quot;</span>,</span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        name: <span class="token string">&quot;Progressive Web App (PWA) Support&quot;</span>,</span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        name: <span class="token string">&quot;Router&quot;</span>,</span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token punctuation">]</span>,</span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span>.then<span class="token punctuation">((</span>data<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console.log<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ora-——-命令行-loading-效果" tabindex="-1"><a class="header-anchor" href="#ora-——-命令行-loading-效果"><span>ora —— 命令行 loading 效果</span></a></h2><p>ora 使用非常简单，可以直接看下面的案例</p><p>利用 ora 来实现一个简单的命令行 loading 效果。</p><p>npm install ora@4.0.0</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> ora <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;ora&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 定义一个loading</span></span>
<span class="line"><span class="token keyword">const</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span><span class="token string">&quot;Loading unicorns&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 启动loading</span></span>
<span class="line">spinner<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  spinner<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  spinner<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&quot;Loading rainbows&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// loading 成功</span></span>
<span class="line">spinner<span class="token punctuation">.</span><span class="token function">succeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// loading 失败</span></span>
<span class="line">spinner<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="艺术字" tabindex="-1"><a class="header-anchor" href="#艺术字"><span>艺术字</span></a></h2><p>npm install figlet</p><p>var figlet = require(&quot;figlet&quot;);</p><p>figlet(&quot;Hello World!!&quot;, function (err, data) { if (err) { console.log(&quot;Something went wrong...&quot;); console.dir(err); return; } console.log(data); });</p><h2 id="download-git-repo-——-命令行下载工具" tabindex="-1"><a class="header-anchor" href="#download-git-repo-——-命令行下载工具"><span>download-git-repo —— 命令行下载工具</span></a></h2><p>npm i download-git-repo</p><p>download(repository, destination, options, callback) 下载一个 git repository 到 destination 文件夹，配置参数 options, 和 callback回调.</p><p>repository</p><p>一、可以采用下面简写方式</p><p>GitHub - github:owner/name 或者 owner/name GitLab - gitlab:owner/name Bitbucket - bitbucket:owner/name 1、默认是 master 分枝, 但你可以指定分枝和tag ，如 owner/name#my-branch.</p><p>2、你还可以指定自定义来源，如 gitlab:custom.com:owner/name. 自定义来源默认为 https 或 git@ , 你也可以自己之定义协议.</p><h2 id="下载自己的gitlab-如果没有生效-可以使用-node-的模块" tabindex="-1"><a class="header-anchor" href="#下载自己的gitlab-如果没有生效-可以使用-node-的模块"><span>下载自己的gitlab 如果没有生效 可以使用 node 的模块</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">var</span> child_process <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;child_process&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">child_process<span class="token punctuation">.</span><span class="token function">execSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">git clone -b master https://mygitlab.cn/phoenix/phoenix-web.git name</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要你的git clone 好使这个就好使</p>`,42)]))}const o=s(t,[["render",i]]),u=JSON.parse('{"path":"/%E5%B7%A5%E7%A8%8B%E5%8C%96/%E8%84%9A%E6%89%8B%E6%9E%B6/%E6%90%AD%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E8%84%9A%E6%89%8B%E6%9E%B6%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"工程化/脚手架/搭建自己的脚手架常用插件.md"}');export{o as comp,u as data};
