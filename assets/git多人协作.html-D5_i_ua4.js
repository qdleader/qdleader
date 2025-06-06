import{_ as s,c as n,a,o as i}from"./app-B7tA7pJn.js";const l={};function t(d,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="git多人协作" tabindex="-1"><a class="header-anchor" href="#git多人协作"><span>git多人协作</span></a></h1><p>图形化工具有很多，我们下载后直接用就行，现在我们主要说一下命令行的git 的使用。</p><p>下面我们说一下，在工作常见的多人协作使用命令行场景：</p><blockquote><p>假设现在有三个人，A，B都是开发，C是负责人。 任务需求到达，A来开发登录板块。B来开发注册板块。</p></blockquote><p><strong>1</strong> A 首先把git 项目克隆到本地，（就一开始没有项目时候使用一次即可）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git clone http//XXX</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>cd 到下载的这个文件夹，进入的默认是master分支。</p><p>A 同学开发的是login板块，所以，A新建了个分支来开发。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git checkout -b feature-login</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时新建了个feature-login的分支，并且当前分支就是feature-login分支了，</p><p>当A 在分支修改完后就直接提交</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git status //看看自己改了哪些文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git add --all或 git add .</span>
<span class="line">git commit -m &quot;登录板块开发完毕&quot;</span>
<span class="line"></span>
<span class="line">git push origin feature-login</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2</strong> B 同学开发与A同理</p><p><strong>3</strong> 当A与B都已经开发完毕了，C出场了</p><p>C 合并代码</p><p>C首先合并A代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git fetch  //把线上所有的分支都下载下来</span>
<span class="line"></span>
<span class="line">git branch //查看有几条分支</span>
<span class="line"></span>
<span class="line">git checkout feature-login //转到feature-login分支</span>
<span class="line"></span>
<span class="line">git pull origin feature-login  //把feature-login代码下载下来</span>
<span class="line"></span>
<span class="line">git checkout master  //转到master分支</span>
<span class="line"></span>
<span class="line">git merge feature-login  //将feature-login代码合并到master分支上来</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理再合并B代码</p><p>merge时候有时候会冲突，就进入文件把冲突解决掉，再merge就可以了。</p><p>等都合并完了，C再正常的提交一下，master分支，即可！</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git status</span>
<span class="line">git add .</span>
<span class="line">git commit -m &quot;添加登录注册功能&quot;</span>
<span class="line">git push origin master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是多人协作啦</strong></p><h2 id="多人协作常见意外情况" tabindex="-1"><a class="header-anchor" href="#多人协作常见意外情况"><span>多人协作常见意外情况</span></a></h2><p>开发一开始，你忘了新建分支。但此时，你已经在master分支上开发了半天了，写了好多代码。</p><p>如果你现在新建分支是不可以了，你得先提交，但那不就提到master分支了吗。。。。</p><h3 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决"><span>如何解决</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git statsh //把已经修改的代码暂存到另外一个地方</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你再切换分支就可以了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git checkout -b new-feature  //切换到new-feature分支</span>
<span class="line"></span>
<span class="line">git stash pop //把修改的释放出来</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后正常那个提交即可</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git add .</span>
<span class="line">git commit -m &quot;新增XX&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,32)]))}const c=s(l,[["render",t]]),p=JSON.parse('{"path":"/git/git%E5%A4%9A%E4%BA%BA%E5%8D%8F%E4%BD%9C.html","title":"git多人协作","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749177393000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"41449d8f93f1f6d7fcfd30254be1c31d5ee23f86","time":1749177393000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(ai/prompt): 添加UI+Vue开发提示词文档"}]},"filePathRelative":"git/git多人协作.md"}');export{c as comp,p as data};
