import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function i(r,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="切换npm-镜像源" tabindex="-1"><a class="header-anchor" href="#切换npm-镜像源"><span>切换npm 镜像源</span></a></h1><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code class="language-typescript"><span class="line"><span class="token operator">--</span> 查看当前地址：</span>
<span class="line">npm config <span class="token keyword">get</span> registry</span>
<span class="line">https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span></span>
<span class="line"> </span>
<span class="line">npm config <span class="token keyword">get</span> disturl</span>
<span class="line"><span class="token keyword">undefined</span></span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line"><span class="token operator">--</span> 设置当前地址（设置为淘宝镜像）</span>
<span class="line">npm config <span class="token keyword">set</span> registry http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmmirror.com</span><span class="token regex-delimiter">/</span></span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">--</span> 设置当前地址（设置为默认地址）</span>
<span class="line">npm config <span class="token keyword">set</span> registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span></span>
<span class="line"> </span>
<span class="line"><span class="token operator">--</span> 每次执行命令前加入–registry指定仓库路径</span>
<span class="line">npm <span class="token operator">--</span>registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>npmmirror<span class="token punctuation">.</span>com<span class="token operator">/</span> install</span>
<span class="line"> </span>
<span class="line"># 使用nrm工具切换淘宝源</span>
<span class="line"></span>
<span class="line">npx nrm use taobao</span>
<span class="line"> </span>
<span class="line"># 如果之后需要切换回官方源可使用</span>
<span class="line"></span>
<span class="line">npx nrm use npm</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>淘宝镜像每15分钟更新一次</p><p>https://registry.npmmirror.com</p>`,4)])])}const c=n(l,[["render",i]]),o=JSON.parse('{"path":"/npm/%E5%88%87%E6%8D%A2npm%20%E9%95%9C%E5%83%8F%E6%BA%90.html","title":"切换npm 镜像源","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"npm/切换npm 镜像源.md"}');export{c as comp,o as data};
