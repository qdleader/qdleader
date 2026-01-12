import{_ as a,c as n,a as e,o as i}from"./app-KfnfuIf0.js";const l={};function p(t,s){return i(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="git打版本标签" tabindex="-1"><a class="header-anchor" href="#git打版本标签"><span>git打版本标签</span></a></h1><h2 id="一、什么是tag" tabindex="-1"><a class="header-anchor" href="#一、什么是tag"><span>一、什么是tag</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">tag是git版本库的一个标记，指向某个commit的指针。</span>
<span class="line"></span>
<span class="line">tag主要用于发布版本的管理，一个版本发布之后，我们可以为git打上 v<span class="token punctuation">.</span><span class="token number">1.0</span><span class="token number">.1</span> v<span class="token punctuation">.</span><span class="token number">1.0</span><span class="token number">.2</span> <span class="token operator">...</span>这样的标签。</span>
<span class="line"></span>
<span class="line">tag感觉跟branch有点相似，但是本质上和分工上是不同的：</span>
<span class="line"></span>
<span class="line">tag 对应某次commit<span class="token punctuation">,</span> 是一个点，是不可移动的。</span>
<span class="line">branch 对应一系列commit，是很多点连成的一根线，有一个<span class="token constant">HEAD</span> 指针，是可以依靠 <span class="token constant">HEAD</span> 指针移动的。</span>
<span class="line">所以，两者的区别决定了使用方式，改动代码用 branch <span class="token punctuation">,</span>不改动只查看用 tag。</span>
<span class="line">tag 和 branch 的相互配合使用，有时候起到非常方便的效果，例如：已经发布了 v1<span class="token punctuation">.</span><span class="token number">0</span> v2<span class="token punctuation">.</span><span class="token number">0</span> v3<span class="token punctuation">.</span><span class="token number">0</span> 三个版本，这个时候，我突然想不改现有代码的前提下，在 v2<span class="token punctuation">.</span><span class="token number">0</span> 的基础上加个新功能，作为 v4<span class="token punctuation">.</span><span class="token number">0</span> 发布。就可以检出 v2<span class="token punctuation">.</span><span class="token number">0</span> 的代码作为一个 branch ，然后作为开发分支。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、tag的简单使用" tabindex="-1"><a class="header-anchor" href="#二、tag的简单使用"><span>二、tag的简单使用</span></a></h2><h3 id="_1-创建tag" tabindex="-1"><a class="header-anchor" href="#_1-创建tag"><span>1.创建tag：</span></a></h3><p>创建 tag 是基于本地分支的 commit，而且与分支的推送是两回事，就是说分支已经推送到远程了，但是你的 tag 并没有，如果把 tag 推送到远程分支上，需要另外执行 tag 的推送命令。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> tag <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span> //创建本地tag</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push origin <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span> //推送到远程仓库</span>
<span class="line"></span>
<span class="line">若存在很多未推送的本地标签，你想一次全部推送的话：</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">--tags</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是基于本地当前分支的最后的一个commit 创建的 tag ，但是如果不想以最后一个，只想以某一个特定的提交为tag ，也是可以的，只要你知道commit 的id。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline //查看当前分支的提交历史 里面包含 commit <span class="token function">id</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>commitId<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查看标签" tabindex="-1"><a class="header-anchor" href="#_2-查看标签"><span>2.查看标签</span></a></h3><p>查看本地某个 tag 的详细信息：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> show <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">查看本地所有 tag：</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> tag 或者 <span class="token function">git</span> tag <span class="token parameter variable">-l</span></span>
<span class="line"></span>
<span class="line">查看远程所有 tag：</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> ls-remote <span class="token parameter variable">--tags</span> origin</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-删除标签" tabindex="-1"><a class="header-anchor" href="#_3-删除标签"><span>3.删除标签</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">本地 tag 的删除：</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">远程 tag 的删除：</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push origin :<span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-检出标签" tabindex="-1"><a class="header-anchor" href="#_4-检出标签"><span>4.检出标签</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">因为 tag 本身指向的就是一个 commit，所以和根据commit <span class="token function">id</span> 检出分支是一个道理。</span>
<span class="line"></span>
<span class="line">但是需要特别说明的是，如果我们想要修改 tag检出代码分支，那么虽然分支中的代码改变了，但是 tag标记的 commit还是同一个，标记的代码是不会变的，这个要格外的注意。</span>
<span class="line"></span>
<span class="line">其它</span>
<span class="line"></span>
<span class="line">命令git tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;XXX...&quot;</span> 可以指定标签信息。</span>
<span class="line"></span>
<span class="line">命令git tag <span class="token parameter variable">-a</span> v0.1.0 <span class="token parameter variable">-m</span> <span class="token string">&quot;release 0.1.0 version&quot;</span> 创建附注标签。</span>
<span class="line"></span>
<span class="line">命令git checkout <span class="token punctuation">[</span>tagname<span class="token punctuation">]</span> 切换标签。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)])])}const r=a(l,[["render",p]]),o=JSON.parse('{"path":"/git/git%E6%89%93%E7%89%88%E6%9C%AC%E6%A0%87%E7%AD%BE.html","title":"git打版本标签","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"git/git打版本标签.md"}');export{r as comp,o as data};
