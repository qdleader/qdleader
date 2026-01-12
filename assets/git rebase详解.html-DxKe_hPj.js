import{_ as n,c as a,a as e,o as i}from"./app-KfnfuIf0.js";const l={};function p(c,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="git-rebase详解" tabindex="-1"><a class="header-anchor" href="#git-rebase详解"><span>git rebase详解</span></a></h1><h2 id="merge-和rebase什么关系" tabindex="-1"><a class="header-anchor" href="#merge-和rebase什么关系"><span>merge 和rebase什么关系</span></a></h2><blockquote><p>git rebase 和git merge 做的事其实是一样的。它们都被设计来将一个分支的更改并入另一个分支，只不过方式有些不同。</p></blockquote><h4 id="merge" tabindex="-1"><a class="header-anchor" href="#merge"><span>merge</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> checkout feature</span>
<span class="line"><span class="token function">git</span> merge master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样feature 分支中新的合并提交（merge commit）将两个分支的历史连在了一起 Merge 好在它是一个安全的操作。现有的分支不会被更改 每次合并上游更改时 feature 分支都会引入一个外来的合并提交。如果上游分支 非常活跃的话，这或多或少会污染你的分支历史</p><h4 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase"><span>Rebase</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> checkout feature</span>
<span class="line"><span class="token function">git</span> rebase master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>它会把整个 feature 分支移动到 master 分支的后面，有效地把所有 master 分支上新的提交并入过来 但是，rebase 为原分支上每一个提交创建一个新的提交，重写了项目历史，并且不会带来合并提交。</p><h2 id="rebase的优点和缺点" tabindex="-1"><a class="header-anchor" href="#rebase的优点和缺点"><span>rebase的优点和缺点</span></a></h2><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h4><p><strong>rebase最大的好处是你的项目历史会非常整洁</strong><strong>rebase 导致最后的项目历史呈现出完美的线性——你可以从项目终点到起点浏览而不需要任何的 fork。这让你更容易使用 git log、git bisect 和 gitk 来查看项目历史</strong></p><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h4><p><strong>安全性，如果你违反了 rebase 黄金法则，重写项目历史可能会给你的协作工作流带来灾难性的影响</strong><strong>可跟踪性，rebase 不会有合并提交中附带的信息——你看不到 feature 分支中并入了上游的哪些更改交互式的rebase</strong><strong>交互式的 rebase 允许你更改并入新分支的提交。这比自动的 rebase 更加强大,因为它提供了对分支上提交历史完整的控制</strong></p><p>一般来说，这被用于将 feature 分支并入 master 分支之前，清理混乱的历史。</p><p>命令示例：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> checkout feature</span>
<span class="line"><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>它会打开一个文本编辑器，显示所有将被移动的提交：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">pick 33d5b7a Message <span class="token keyword">for</span> commit #<span class="token number">1</span></span>
<span class="line">pick 9480b3d Message <span class="token keyword">for</span> commit #<span class="token number">2</span></span>
<span class="line"></span>
<span class="line">pick 5c67e61 Message <span class="token keyword">for</span> commit #<span class="token number">3</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里可以编辑提交的记录，具体可以怎么编辑先不详说，见下文</p><p>保存后关闭文件，Git 会根据你的指令来执行 rebase</p><p>忽略不重要的提交会让你的 feature 分支的历史更清晰易读。这是 git merge 做不到的</p><h2 id="rebase黄金法则" tabindex="-1"><a class="header-anchor" href="#rebase黄金法则"><span>rebase黄金法则</span></a></h2><p><strong>绝不要在公共的分支上使用它！</strong> 在你运行 git rebase 之前，一定要问问你自己「有没有别人正在这个分支上工作？」。如果答案是肯定的，那就不能rebase</p><h4 id="强制推送" tabindex="-1"><a class="header-anchor" href="#强制推送"><span>强制推送</span></a></h4><p>如果你想把 rebase 之后的 master 分支推送到远程仓库，Git 会阻止你这么做，因为两个分支包含冲突。但你可以传入 –force 标记来强行推送</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> push <span class="token parameter variable">--force</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>rebase在开发中的使用场景 rebase 可以或多或少应用在你们团队的 Git 工作流中 下面的命令对最新的 3 次提交进行了交互式 rebase：</p><p>git checkout feature git rebase -i HEAD~3</p><p>你实际上没有移动分支——你只是将之后的 3 次提交合并了</p><p>交互式 rebase 是在你工作流中引入 git rebase 的的好办法，因为它只影响本地分支。其他开发者只能看到你已经完成的结果，那就是一个非常整洁、易于追踪的分支历史。</p><p>但同样的，这只能用在私有分支上。如果你在同一个 feature 分支和其他开发者合作的话，这个分支是公开的，你不能重写这个历史。</p><h4 id="如何选择使用merge还是rebase" tabindex="-1"><a class="header-anchor" href="#如何选择使用merge还是rebase"><span>如何选择使用merge还是rebase</span></a></h4><p>你使用 rebase 之前需要知道的知识点都在这了。如果你想要一个干净的、线性的提交历史，没有不必要的合并提交，你应该使用 git rebase 而不是 git merge 来并入其他分支上的更改。</p><p>另一方面，如果你想要保存项目完整的历史，并且避免重写公共分支上的 commit， 你可以使用 git merge。两种选项都很好用，但至少你现在多了 git rebase 这个选择。</p><h3 id="交互式rebase的操作" tabindex="-1"><a class="header-anchor" href="#交互式rebase的操作"><span>交互式rebase的操作</span></a></h3><p>例如开启交互式rebase合并最近三次提交</p><p>git checkout feature git rebase -i HEAD~3</p><p>这是一个交互式rebase界面：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">pick 07c5abd Introduce OpenPGP and teach basic usage</span>
<span class="line">pick de9b1eb Fix PostChecker::Post<span class="token comment">#urls</span></span>
<span class="line"></span>
<span class="line">pick 3e7ee36 Hey kids, stop all the highlighting</span>
<span class="line"></span>
<span class="line">pick fa20af3 <span class="token function">git</span> interactive rebase, squash, amend</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Rebase 8db7e8b..fa20af3 onto 8db7e8b</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Commands:</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># p, pick = use commit</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># r, reword = use commit, but edit the commit message</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># e, edit = use commit, but stop for amending</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># s, squash = use commit, but meld into previous commit</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># f, fixup = like &quot;squash&quot;, but discard this commit&#39;s log message</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># x, exec = run command (the rest of the line) using shell</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># These lines can be re-ordered; they are executed from top to bottom.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># If you remove a line here THAT COMMIT WILL BE LOST.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># However, if you remove everything, the rebase will be aborted.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Note that empty commits are commented out</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的互动界面，先列出当前分支最新的4个commit（越下面越新）。每个commit前面有一个操作命令，默认是pick，表示该行commit被选中，要进行rebase操作。4个commit的下面是一大堆注释，列出可以使用的命令。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code class="language-markdown"><span class="line"><span class="token list punctuation">*</span> pick：正常选中</span>
<span class="line"><span class="token list punctuation">*</span> reword：选中，并且修改提交信息；</span>
<span class="line"><span class="token list punctuation">*</span> edit：选中，rebase时会暂停，允许你修改这个commit（参考这里）</span>
<span class="line"><span class="token list punctuation">*</span> squash：选中，会将当前commit与上一个commit合并</span>
<span class="line"><span class="token list punctuation">*</span> fixup：与squash相同，但不会保存当前commit的提交信息</span>
<span class="line"><span class="token list punctuation">*</span> exec：执行其他shell命令</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这6个命令当中，squash和fixup可以用来合并commit。先把需要合并的commit前面的动词，改成squash（或者s）</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">pick 07c5abd Introduce OpenPGP and teach basic usage</span>
<span class="line">s de9b1eb Fix PostChecker::Post<span class="token comment">#urls</span></span>
<span class="line"></span>
<span class="line">s 3e7ee36 Hey kids, stop all the highlighting</span>
<span class="line"></span>
<span class="line">pick fa20af3 <span class="token function">git</span> interactive rebase, squash, amend</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一改，执行后，当前分支只会剩下两个commit。第二行和第三行的commit，都会合并到第一行的commit。提交信息会同时包含，这三个commit的提交信息。</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"></span>
<span class="line"># This is a combination of 3 commits.</span>
<span class="line"># The first commit&#39;s message <span class="token property">is</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">Introduce OpenPGP and teach basic usage</span>
<span class="line"></span>
<span class="line"># This is the 2nd commit <span class="token property">message</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">Fix <span class="token property">PostChecker</span><span class="token punctuation">:</span><span class="token punctuation">:</span>Post#urls</span>
<span class="line"></span>
<span class="line"># This is the 3rd commit <span class="token property">message</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">Hey kids<span class="token punctuation">,</span> stop all the highlighting</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果将第三行的squash命令改成fixup命令。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">pick 07c5abd Introduce OpenPGP and teach basic usage</span>
<span class="line">s de9b1eb Fix PostChecker::Post<span class="token comment">#urls</span></span>
<span class="line"></span>
<span class="line">f 3e7ee36 Hey kids, stop all the highlighting</span>
<span class="line"></span>
<span class="line">pick fa20af3 <span class="token function">git</span> interactive rebase, squash, amend</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果相同，还是会生成两个commit，第二行和第三行的commit，都合并到第一行的commit。但是，新的提交信息里面，第三行commit的提交信息，会被注释掉</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"></span>
<span class="line">Introduce OpenPGP and teach basic usage</span>
<span class="line"></span>
<span class="line">Fix <span class="token property">PostChecker</span><span class="token punctuation">:</span><span class="token punctuation">:</span>Post#urls</span>
<span class="line"></span>
<span class="line"># Hey kids<span class="token punctuation">,</span> stop all the highlighting</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pony Foo提出另外一种合并commit的简便方法，就是先撤销过去5个commit，然后再建一个新的。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ <span class="token function">git</span> reset HEAD~5</span>
<span class="line">$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line">$ <span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;Here&#39;s the bug fix that closes #28&quot;</span></span>
<span class="line"></span>
<span class="line">$ <span class="token function">git</span> push <span class="token parameter variable">--force</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>squash和fixup命令，还可以当作命令行参数使用，自动合并commit。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ <span class="token function">git</span> commit <span class="token parameter variable">--fixup</span></span>
<span class="line">$ <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> <span class="token parameter variable">--autosquash</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推送到远程仓库 合并commit后，就可以推送当前分支到远程仓库了</p><p>$ git push --force origin myfeature</p><p>git push命令要加上force参数，因为rebase以后，分支历史改变了，跟远程分支不一定兼容，有可能要强行推送</p><p>提交到远程仓库以后，就可以发出 Pull Request 到master分支，然后请求别人进行代码review，确认可以合并到master。</p><p>如果你从 master 分支拉了个feature分支出来，然后你提交了几个commit，这时候刚好有人把他的分支和到了master，</p><p>这时候master 分支就比你拉的分支多了几个commit，如果你这时候在feature分支rebase master的话</p><p>就会把你当前的这几个commit 放到那人的commit后面。</p>`,61)])])}const r=n(l,[["render",p]]),d=JSON.parse('{"path":"/git/git%20rebase%E8%AF%A6%E8%A7%A3.html","title":"git rebase详解","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"git/git rebase详解.md"}');export{r as comp,d as data};
