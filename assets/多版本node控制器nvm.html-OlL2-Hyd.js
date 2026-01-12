import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const l={};function o(t,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token constant">NVM</span>：可以随时切换你电脑的node版本，方便的不得了呀！</span>
<span class="line"></span>
<span class="line">## 安装</span>
<span class="line"></span>
<span class="line">github上下载nvm<span class="token operator">-</span>setup<span class="token punctuation">.</span>zip安装包。</span>
<span class="line">下载地址 https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>coreybutler<span class="token operator">/</span>nvm<span class="token operator">-</span>windows<span class="token operator">/</span>releases</span>
<span class="line">安装包说明：</span>
<span class="line">nvm<span class="token operator">-</span>noinstall<span class="token punctuation">.</span>zip：绿色免安装版，但使用时需进行配置。</span>
<span class="line">nvm<span class="token operator">-</span>setup<span class="token punctuation">.</span>zip：安装版，推荐使用</span>
<span class="line">选择nvm<span class="token operator">-</span>setup<span class="token punctuation">.</span>zip进行下载安装</span>
<span class="line"></span>
<span class="line">## 注意事项：</span>
<span class="line"></span>
<span class="line"><span class="token operator">&gt;</span> 安装路径不要有空格</span>
<span class="line"></span>
<span class="line">## 正常安装过程</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span>在安装nvm 之前呢，首先把你电脑上的node都删掉，找到node安装目录，把node的文件夹删掉，或在搜索栏里面搜node，有个node uninstall 点击卸载，然后再把环境变量中的node的路径和npm的路径都删掉</span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span>安装nvm 下载nvm<span class="token operator">-</span>setup<span class="token punctuation">.</span>zip 然后在c盘直接新建一个nvm文件夹，点击下一步出来的node路径也选这个nvm文件夹，然后直接安装。（我们直接在c盘或d盘装，会把nvm的路径直接自动加到系统path里面，也会避免一些权限不够的坑）</span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span>然后你用管理员身份运行cmd，输入nvm，出来一大串就说明你安装成功了</span>
<span class="line"></span>
<span class="line"><span class="token number">4</span><span class="token punctuation">.</span>nvm install <span class="token number">16.11</span><span class="token number">.1</span>    下载成功后 nvm use <span class="token number">16.11</span><span class="token number">.1</span> 就ok了</span>
<span class="line"></span>
<span class="line">## 使用</span>
<span class="line"></span>
<span class="line">shell</span>
<span class="line">nvm install <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>：下载相应版本node</span>
<span class="line">nvm list：列出已有node版本</span>
<span class="line">nvm use <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token operator">:</span> 使用特定node版本</span>
<span class="line">nvm on：开启node<span class="token punctuation">.</span>js版本管理</span>
<span class="line">nvm off：关闭node<span class="token punctuation">.</span>js版本管理</span>
<span class="line">nvm node_mirror <span class="token punctuation">[</span>url<span class="token punctuation">]</span>：设置node镜像，默认是https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nodejs<span class="token punctuation">.</span>org<span class="token operator">/</span>dist<span class="token operator">/</span>。如果不写url，则使用默认url<span class="token punctuation">,</span>设置后可至安装目录settins<span class="token punctuation">.</span>txt中查看<span class="token punctuation">,</span><span class="token literal-property property">国内镜像地址https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>node<span class="token operator">/</span></span>
<span class="line">nvm npm_mirror <span class="token punctuation">[</span>url<span class="token punctuation">]</span>：设置npm镜像地址，默认是https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>npm<span class="token operator">/</span>cli<span class="token operator">/</span>archive<span class="token operator">/</span><span class="token punctuation">,</span><span class="token literal-property property">国内镜像地址：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>npm<span class="token operator">/</span></span>
<span class="line">nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>： 卸载指定版本node</span>
<span class="line">nvm use <span class="token punctuation">[</span>version<span class="token punctuation">]</span> 使用指定版本node</span>
<span class="line">nvm versoin<span class="token operator">:</span> 显示nvm版本</span>
<span class="line"></span>
<span class="line">## 常见问题</span>
<span class="line">### <span class="token number">1</span>、nvm安装node成功，但下载npm失败</span>
<span class="line"></span>
<span class="line">原因：网络下载地址默认用国外的服务器</span>
<span class="line">解决：修改nvm安装路径下，settings<span class="token punctuation">.</span>txt中添加两行镜像地址：</span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">node_mirror</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>node<span class="token operator">/</span></span>
<span class="line"><span class="token literal-property property">npm_mirror</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>npm<span class="token operator">/</span></span>
<span class="line"></span>
<span class="line">### <span class="token number">2</span>、nvm use <span class="token punctuation">[</span>version<span class="token punctuation">]</span>命令使用报 exit status <span class="token number">1</span><span class="token operator">:</span>xxxx</span>
<span class="line"></span>
<span class="line">原因： 安装目录中存在空格</span>
<span class="line">解决：卸载重装，注意nvm安装路径中不要有空格出现</span>
<span class="line"></span>
<span class="line">### <span class="token number">3</span>、nvm use切换node成功，但执行node <span class="token operator">-</span>v不是内部名外部命令</span>
<span class="line"></span>
<span class="line">原因： nvm中node安装目录在环境变量中配置不正确</span>
<span class="line">解决：</span>
<span class="line">在nvm安装目录下新建nodejs空文件夹： <span class="token constant">D</span><span class="token operator">:</span>\\nvm\\nodejs</span>
<span class="line">在环境变量中，将<span class="token operator">%</span><span class="token constant">NVM_SYMLINK</span><span class="token operator">%</span>指向地址改为上述地址</span>
<span class="line">再次打开cmd， nvm use <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>使用特定特定版本node<span class="token punctuation">,</span>测试node <span class="token operator">-</span>v是否可行</span>
<span class="line"><span class="token function">配置环境变量</span><span class="token punctuation">(</span>可通过 window<span class="token operator">+</span>r —<span class="token operator">&gt;</span> sysdm<span class="token punctuation">.</span>cpl —<span class="token operator">&gt;</span> 高级 —<span class="token operator">&gt;</span>环境变量<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">### <span class="token number">4</span>、nvm use <span class="token punctuation">[</span>version<span class="token punctuation">]</span>命令使用报 exit status <span class="token number">145</span><span class="token operator">:</span>xxxx</span>
<span class="line"></span>
<span class="line">解决</span>
<span class="line"></span>
<span class="line">把之前的node和nvm都卸了，按照安装流程方法再走一遍即可</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)])])}const c=s(l,[["render",o]]),r=JSON.parse('{"path":"/node/%E5%A4%9A%E7%89%88%E6%9C%ACnode%E6%8E%A7%E5%88%B6%E5%99%A8nvm.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"node/多版本node控制器nvm.md"}');export{c as comp,r as data};
