import{_ as t,c as a,a as s,o as i}from"./app-DFnxdJ0h.js";const n={};function l(r,e){return i(),a("div",null,e[0]||(e[0]=[s(`<h1 id="git恢复刚才修改的代码" tabindex="-1"><a class="header-anchor" href="#git恢复刚才修改的代码"><span>git恢复刚才修改的代码</span></a></h1><ol><li>丢弃刚才修改代码 （git status 查出的那些）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">git checkout -- ./</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2.丢弃本分支的修改</p><p>下面的方法直接将当前分支相对上一次提交时的修改丢弃，从而可以从当前分支切换至其他分支</p><p>通过 git checkout -f 命令强制切换分支</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">  git checkout -f test        //强制切换至 test 分支，丢弃当前分支的修改</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,7)]))}const d=t(n,[["render",l]]),o=JSON.parse('{"path":"/git/git%E6%81%A2%E5%A4%8D%E5%88%9A%E6%89%8D%E4%BF%AE%E6%94%B9%E7%9A%84%E4%BB%A3%E7%A0%81.html","title":"git恢复刚才修改的代码","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"git/git恢复刚才修改的代码.md"}');export{d as comp,o as data};
