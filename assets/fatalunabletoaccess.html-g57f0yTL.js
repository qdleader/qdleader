import{_ as s,c as a,a as n,o as i}from"./app-DFnxdJ0h.js";const l={};function t(c,e){return i(),a("div",null,e[0]||(e[0]=[n(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">fatal: unable to access &#39;https://github.com/qdleader/qdleader.git/&#39;: Failed to connect to github.com port 443: Timed out</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="fatalunabletoaccess" tabindex="-1"><a class="header-anchor" href="#fatalunabletoaccess"><span>fatalunabletoaccess</span></a></h1><p>出现这个报错：</p><p>#解决方式：</p><p>1、连接超时，首先找到git的安装目录，找到/etc/ssh/ssh_config文件</p><blockquote><p>在cmd中输入： where git 查看git的安装目录</p></blockquote><p>复制这几句到该文件最后</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Host github.com</span>
<span class="line"></span>
<span class="line">User git</span>
<span class="line"></span>
<span class="line">Hostname ssh.github.com</span>
<span class="line"></span>
<span class="line">PreferredAuthentications publickey</span>
<span class="line"></span>
<span class="line">IdentityFile ~/.ssh/id_rsa</span>
<span class="line"></span>
<span class="line">Port 443</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功解决问题。</p><h2 id="git-push时出现-fetal-unable-to-access-https-github-com-错误" tabindex="-1"><a class="header-anchor" href="#git-push时出现-fetal-unable-to-access-https-github-com-错误"><span>git push时出现 fetal:unable to access “https://github.com/...“错误</span></a></h2><p>报 443时候</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">git config --global --unset http.proxy   #取消http代理</span>
<span class="line">git config --global --unset https.proxy  #取消https代理</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后新开一个命令窗口，再push一下就可以啦</p>`,13)]))}const p=s(l,[["render",t]]),r=JSON.parse('{"path":"/git/fatalunabletoaccess.html","title":"fatalunabletoaccess","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"git/fatalunabletoaccess.md"}');export{p as comp,r as data};
