import{_ as n,c as a,a as e,o as i}from"./app-KfnfuIf0.js";const l={};function c(t,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="git-用不同账号提交不同的仓库" tabindex="-1"><a class="header-anchor" href="#git-用不同账号提交不同的仓库"><span>git 用不同账号提交不同的仓库</span></a></h1><p>其实很简单，在每个仓库里面修改成局部的相应的username和email即可</p><p>git config user.name “Your_username”</p><p>git config user.email “Your_email”</p><p>这个是不会影响全局的，这样你就可以在这个仓库用这个账号直接提交，别的仓库用别的账号直接提交，不用来回登录换账号了，很好用</p><p>设置全局</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 1.查看git配置信息</span></span>
<span class="line"></span>
<span class="line">$ <span class="token function">git</span> config <span class="token parameter variable">--list</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2.查看git用户名、密码、邮箱的配置</span></span>
<span class="line"></span>
<span class="line">$ <span class="token function">git</span> config user.name</span>
<span class="line">$ <span class="token function">git</span> config user.password</span>
<span class="line">$ <span class="token function">git</span> config user.email</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3.设置git用户名、密码、邮箱的配置</span></span>
<span class="line"></span>
<span class="line">$ <span class="token function">git</span> config user.name <span class="token string">&quot;freedom&quot;</span></span>
<span class="line">$ <span class="token function">git</span> config user.password <span class="token string">&quot;123456&quot;</span></span>
<span class="line">$ <span class="token function">git</span> config user.email <span class="token string">&quot;1548429568@qq.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3.设置git用户名、密码、邮箱的配置（全局配置）</span></span>
<span class="line"></span>
<span class="line">$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name 用户命</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)])])}const r=n(l,[["render",c]]),o=JSON.parse('{"path":"/git/git%20%E7%94%A8%E4%B8%8D%E5%90%8C%E8%B4%A6%E5%8F%B7%E6%8F%90%E4%BA%A4%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BB%93%E5%BA%93.html","title":"git 用不同账号提交不同的仓库","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"git/git 用不同账号提交不同的仓库.md"}');export{r as comp,o as data};
