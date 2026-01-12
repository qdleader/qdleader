import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const i={};function p(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="搭建内网npm" tabindex="-1"><a class="header-anchor" href="#搭建内网npm"><span>搭建内网npm</span></a></h1><h2 id="verdaccio-搭建-npm-私有仓库" tabindex="-1"><a class="header-anchor" href="#verdaccio-搭建-npm-私有仓库"><span>Verdaccio 搭建 npm 私有仓库</span></a></h2><p>为什么要搭建私有仓库？</p><p>日常开发中我们肯定会封装一些通用组件，大部分情况下都会存在于 components 目录下；试想一下如果我们有两个系统 A 和 B，此时这两个系统都要用到的组件我们该如何封装呢？</p><p>这种情况下我们还是开发一个包托管到 npm 比较靠谱，随用随下载。但是这些组件有一定的隐私性，我们又不想让别人看到。此时 Verdaccio 的好处就体现出来了。</p><p>Verdaccio 是一个 Node.js 创建的轻量级 npm 仓库（就是一个应用支持独立部署安装）。可以快速帮助我们搭建一个类似于 npm 的网页应用程序用于托管我们的包</p><p>前置条件 本文介绍 Verdaccio 为 5.x 版本；示例演示系统为 阿里云 CentOS。由于此软件是基于 Node.js 开发，需要现在服务器安装 Node.js 并确保版本为 12.x。</p><p>提示：推荐使用 nvm 管理 node 版本；安装 nvm</p><p>安装 Verdaccio</p><h1 id="必须要加-g-全局安装" tabindex="-1"><a class="header-anchor" href="#必须要加-g-全局安装"><span>必须要加 -g 全局安装</span></a></h1><p>npm install verdaccio -g 安装成功之后随即在命令行输出 \`\` verdaccio</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">[</span>root@hecs<span class="token operator">-</span><span class="token number">3429401</span> <span class="token operator">~</span><span class="token punctuation">]</span># verdaccio</span>
<span class="line"></span>
<span class="line"> info <span class="token operator">--</span><span class="token operator">-</span> config file  <span class="token operator">-</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">root</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span>config<span class="token operator">/</span>verdaccio<span class="token operator">/</span>config<span class="token punctuation">.</span>yaml</span>
<span class="line"> info <span class="token operator">--</span><span class="token operator">-</span> using htpasswd file<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">root</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span>config<span class="token operator">/</span>verdaccio<span class="token operator">/</span>htpasswd</span>
<span class="line"> info <span class="token operator">--</span><span class="token operator">-</span> plugin successfully loaded<span class="token operator">:</span> verdaccio<span class="token operator">-</span>htpasswd</span>
<span class="line"> info <span class="token operator">--</span><span class="token operator">-</span> plugin successfully loaded<span class="token operator">:</span> verdaccio<span class="token operator">-</span>audit</span>
<span class="line"> warn <span class="token operator">--</span><span class="token operator">-</span> http address <span class="token operator">-</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">4873</span><span class="token operator">/</span> <span class="token operator">-</span> verdaccio<span class="token operator">/</span><span class="token number">5.28</span><span class="token number">.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据服务启动后信息不难得到两个重要信息</p><p>verdaccio 配置文件：/root/.config/verdaccio/config.yaml</p><p>verdaccio 默认启动：默认占用 4873 端口（使用云服务器的小伙伴记得开启安全组）。</p><p>注意： 可能有些小伙伴的启用端口前面显示的是 localhost:4873，如果出现这种情况打开安全组也是不生效的，以下附上解决方案。</p><p>使用 vim 打开配置文件。在最后一行新增 listen 0.0.0.0:4873，端口可以任意指定。0.0.0.0 就是表示当前主机的 IPV4 地址；之后再重启服务就，在浏览器输入服务器 IP 加端口就可以访问了。</p><p>使用 pm2 管理 verdaccio</p><p>下载：npm install pm2 -g</p><p>pm2 start verdaccio</p><h1 id="内存使用超过上限自动重启" tabindex="-1"><a class="header-anchor" href="#内存使用超过上限自动重启"><span>内存使用超过上限自动重启</span></a></h1><p>pm2 start verdaccio --name verdaccio --watch --max-memory-restart 16G -i 0</p><p>此时在浏览器访问 http://你服务器ip:4873 就可以看到欢迎页面了</p><h2 id="配置文件解析" tabindex="-1"><a class="header-anchor" href="#配置文件解析"><span>配置文件解析</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># This is the default config file. It allows all users to do anything,</span></span>
<span class="line"><span class="token comment"># so don&#39;t use it on production systems.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Look here for more config file examples: 这个 examples 404了。</span></span>
<span class="line"><span class="token comment"># https://github.com/verdaccio/verdaccio/tree/master/conf</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 仓库的包默认存储的位置，默认是不存在的，当发布私有包之后会在 /root/.config/verdaccio 中存在</span></span>
<span class="line"><span class="token comment"># path to a directory with all packages</span></span>
<span class="line"></span>
<span class="line">storage: ./storage</span>
<span class="line"></span>
<span class="line"><span class="token comment"># path to a directory with plugins to include</span></span>
<span class="line"></span>
<span class="line">plugins: ./plugins</span>
<span class="line"></span>
<span class="line">web:</span>
<span class="line">  <span class="token comment"># 网页 title</span></span>
<span class="line">  title: Verdaccio</span>
<span class="line">  <span class="token comment"># comment out to disable gravatar support</span></span>
<span class="line">  <span class="token comment"># gravatar: false</span></span>
<span class="line">  <span class="token comment"># 包的排序 asc 降序 desc 升序</span></span>
<span class="line">  <span class="token comment"># by default packages are ordercer ascendant (asc|desc)</span></span>
<span class="line">  <span class="token comment"># sort_packages: asc</span></span>
<span class="line">  <span class="token comment"># 是否开启暗黑模式</span></span>
<span class="line">  <span class="token comment"># convert your UI to the dark side</span></span>
<span class="line">  <span class="token comment"># darkMode: true</span></span>
<span class="line">  <span class="token comment"># 网页 logo</span></span>
<span class="line">  <span class="token comment"># logo: http://somedomain/somelogo.png</span></span>
<span class="line">  <span class="token comment"># 网页 favicon</span></span>
<span class="line">  <span class="token comment"># favicon: http://somedomain/favicon.ico | /path/favicon.ico</span></span>
<span class="line">  <span class="token comment"># 网页最大连接数</span></span>
<span class="line">  <span class="token comment"># rateLimit:</span></span>
<span class="line">  <span class="token comment">#   windowMs: 1000</span></span>
<span class="line">  <span class="token comment">#   max: 10000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># translate your registry, api i18n not available yet</span></span>
<span class="line"><span class="token comment"># i18n:</span></span>
<span class="line"><span class="token comment"># 国际化相关，同样404了。</span></span>
<span class="line"><span class="token comment"># list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 支持 zh_CN</span></span>
<span class="line">  <span class="token comment">#   web: en-US</span></span>
<span class="line"></span>
<span class="line">auth:</span>
<span class="line">  <span class="token comment"># 注册用户的信息存放位置</span></span>
<span class="line">  htpasswd:</span>
<span class="line">    file: ./htpasswd</span>
<span class="line">    <span class="token comment"># Maximum amount of users allowed to register, defaults to &quot;+inf&quot;.</span></span>
<span class="line">    <span class="token comment"># You can set this to -1 to disable registration.</span></span>
<span class="line">    <span class="token comment"># 默认可注册的用户是无限的，如果修改为 -1 则是不允许注册；限定用户方法如下</span></span>
<span class="line">    <span class="token comment"># 1，先注册 n 个用户，然后修改配置文件为 -1，后续不允许注册</span></span>
<span class="line">    <span class="token comment"># 2，开个 n 个用户注册接口</span></span>
<span class="line">    <span class="token comment"># max_users: 1000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># a list of other known repositories we can talk to</span></span>
<span class="line"><span class="token comment"># 如果私有库没有的话，去查找以下库。</span></span>
<span class="line"></span>
<span class="line">uplinks:</span>
<span class="line">  npmjs:</span>
<span class="line">    url: https://registry.npmjs.org/</span>
<span class="line"></span>
<span class="line">packages:</span>
<span class="line">  <span class="token comment"># @*/ 是包的作用域 例如 @vue/cli 那么 @vue 则是这个包的作用域，前缀一般都是某个组织或者说某个公司，证明这是个内部包</span></span>
<span class="line">  <span class="token string">&#39;@*/*&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">    <span class="token comment"># scoped packages</span></span>
<span class="line">    access: <span class="token variable">$all</span></span>
<span class="line">    publish: <span class="token variable">$authenticated</span></span>
<span class="line">    unpublish: <span class="token variable">$authenticated</span></span>
<span class="line">    <span class="token comment"># 如果私有库没有的话，去 npm 查找查找库。</span></span>
<span class="line">    proxy: npmjs</span>
<span class="line">  <span class="token comment"># 普通的 npm 包</span></span>
<span class="line">  <span class="token string">&#39;**&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">    <span class="token comment"># 允许所有用户发布和访问包</span></span>
<span class="line">    <span class="token comment"># allow all users (including non-authenticated users) to read and</span></span>
<span class="line">    <span class="token comment"># publish all packages</span></span>
<span class="line">    <span class="token comment">#</span></span>
<span class="line">    <span class="token comment"># 也可以指定指定 @xxx/xxx 类似的作用域</span></span>
<span class="line">    <span class="token comment"># you can specify usernames/groupnames (depending on your auth plugin)</span></span>
<span class="line">    <span class="token comment"># $all 所有人 $anonymous 只有匿名者可以操作（基本没用） $authenticated 认证用户（通过npm adduser 添加的用户。</span></span>
<span class="line">    <span class="token comment"># and three keywords: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span></span>
<span class="line">    access: <span class="token variable">$all</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># allow all known users to publish/publish packages</span></span>
<span class="line">    <span class="token comment"># (anyone can register by default, remember?)</span></span>
<span class="line">    publish: <span class="token variable">$authenticated</span></span>
<span class="line">    unpublish: <span class="token variable">$authenticated</span></span>
<span class="line"></span>
<span class="line">     <span class="token comment"># if package is not available locally, proxy requests to &#39;npmjs&#39; registry</span></span>
<span class="line">    proxy: npmjs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.</span></span>
<span class="line"><span class="token comment"># A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.</span></span>
<span class="line"><span class="token comment"># WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.</span></span>
<span class="line"></span>
<span class="line">server:</span>
<span class="line">  keepAliveTimeout: <span class="token number">60</span></span>
<span class="line"></span>
<span class="line">middlewares:</span>
<span class="line">  audit:</span>
<span class="line">    enabled: <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># log settings</span></span>
<span class="line"></span>
<span class="line">logs: <span class="token punctuation">{</span> type: stdout, format: pretty, level: http <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">#experiments:</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#  # support for npm token command</span></span>
<span class="line"><span class="token comment">#  token: false</span></span>
<span class="line"><span class="token comment">#  # disable writing body size to logs, read more on ticket 1912</span></span>
<span class="line"><span class="token comment">#  bytesin_off: false</span></span>
<span class="line"><span class="token comment">#  # enable tarball URL redirect for hosting tarball with a different server, the tarball_url_redirect can be a template string</span></span>
<span class="line"><span class="token comment">#  tarball_url_redirect: &#39;https://mycdn.com/verdaccio/\${packageName}/\${filename}&#39;</span></span>
<span class="line"><span class="token comment">#  # the tarball_url_redirect can be a function, takes packageName and filename and returns the url, when working with a js configuration file</span></span>
<span class="line"><span class="token comment">#  tarball_url_redirect(packageName, filename) {</span></span>
<span class="line"><span class="token comment">#    const signedUrl = // generate a signed url</span></span>
<span class="line"><span class="token comment">#    return signedUrl;</span></span>
<span class="line"><span class="token comment">#  }</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># This affect the web and api (not developed yet)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#i18n:</span></span>
<span class="line"><span class="token comment">#web: en-US</span></span>
<span class="line"></span>
<span class="line">listen: <span class="token number">0.0</span>.0.0:4873</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的配置内容我们举个</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">packages:</span>
<span class="line"> <span class="token comment"># 可以自定义包名的规则。代表 local- 开头的包，只有登录后才可以进行操作。</span></span>
<span class="line">  <span class="token string">&#39;local-*&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">    access: <span class="token variable">$authenticated</span></span>
<span class="line">    publish: <span class="token variable">$authenticated</span></span>
<span class="line">    unpublish: <span class="token variable">$authenticated</span></span>
<span class="line">    proxy: npmjs</span>
<span class="line">  <span class="token comment"># 表示私有库的所有人都可以发布，访问，撤销包。</span></span>
<span class="line">  <span class="token string">&#39;**&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">    access: <span class="token variable">$all</span></span>
<span class="line">    publish: <span class="token variable">$all</span></span>
<span class="line">    unpublish: <span class="token variable">$all</span></span>
<span class="line">    proxy: npmjs</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27)])])}const o=n(i,[["render",p]]),r=JSON.parse('{"path":"/npm/%E6%90%AD%E5%BB%BA%E5%86%85%E7%BD%91npm.html","title":"搭建内网npm","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"npm/搭建内网npm.md"}');export{o as comp,r as data};
