import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const p={};function t(i,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="_1如何使用" tabindex="-1"><a class="header-anchor" href="#_1如何使用"><span>1如何使用</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&gt;</span>安装</span>
<span class="line"><span class="token operator">&gt;</span> npm install <span class="token operator">-</span>g less</span>
<span class="line"></span>
<span class="line">#在项目中使用</span>
<span class="line"><span class="token operator">&gt;</span>npm install less less<span class="token operator">-</span>loader <span class="token operator">--</span>save</span>
<span class="line"></span>
<span class="line">修改webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js文件，配置loader加载依赖，让其支持外部的less<span class="token punctuation">,</span>在原来的代码上添加</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 此种方法在控制台中标签样式显示的是style标签样式</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader!css-loader!less-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    </span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可以在控制台中看到当前标签样式来自于哪个less文件,调试的时候可以设为true，上线后设为false。优化打包体积可以。</span></span>
<span class="line"><span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader!css-loader!less-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">　　</span>
<span class="line">　　 options<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;less&quot;</span> scoped<span class="token operator">&gt;</span></span>
<span class="line">	@<span class="token keyword">import</span> <span class="token string">&quot;@/static/hello.less&quot;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const o=n(p,[["render",t]]),r=JSON.parse('{"path":"/less_scss/L001-less%E4%BD%A0%E5%BF%AB%E6%94%B6%E4%BA%86%E7%A5%9E%E9%80%9A%E5%90%A7.html","title":"1如何使用","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"less&scss/L001-less你快收了神通吧.md"}');export{o as comp,r as data};
