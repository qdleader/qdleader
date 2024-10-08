import{_ as s,c as a,a as l,o as e}from"./app-z95KQ9dg.js";const i={};function o(d,n){return e(),a("div",null,n[0]||(n[0]=[l(`<p>1.官网下载地址：www.mongodb.com/try/downloa… 进去之后选择社区版 https://www.mongodb.com/try/download</p><p>下载 MongoDB Community Server 这个版本</p><p>2.将下载好的文件解压缩，重命名为mongodb，</p><p>3.打开访达按 ⬆️+Command+G ，在前往中输入/usr/local， 将重命名的文件放在/usr/local 目录下 4.配置环境变量，打开终端，输入“open -e .bash_profile”： 再打开的文件中输入“export PATH=\${PATH}:/usr/local/mongodb/bin”</p><p>然后输入“source .bash_profile”，使配置立即生效。</p><p>5.输入mongod --version ,看到版本号则说明安装成功。</p><p>6.在/usr/local/mongodb 目录下创建两个文件夹: data 和 log。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir data</span>
<span class="line"></span>
<span class="line">mkdir log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.在终端中，先进入data和log所在的目录，也就是/usr/local/mongodb ，然后输入&quot;mongod --dbpath data --logpath log/mongod.log --logappend&quot;，启动mongodb服务(当前终端不要关闭)</p><p>8.在新的终端中输入&quot;mongo&quot; 连接数据库</p><p>mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">第8步不生效时候</span>
<span class="line"></span>
<span class="line">重新输入 创建日志及数据存放的目录</span>
<span class="line"></span>
<span class="line">数据存放路径：</span>
<span class="line">sudo mkdir -p /usr/local/var/mongodb</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">日志文件路径：</span>
<span class="line">sudo mkdir -p /usr/local/var/log/mongodb</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">接下来要确保当前用户对以上两个目录有读写的权限：</span>
<span class="line">sudo chown root /usr/local/var/mongodb</span>
<span class="line">sudo chown root /usr/local/var/log/mongodb</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">root自己电脑用户名 需自行修改</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">接下来我们使用以下命令在后台启动 mongodb：</span>
<span class="line">mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><h3 id="_1-您不是文件-bash-profile-的所有者-因此没有权限写到该文件。" tabindex="-1"><a class="header-anchor" href="#_1-您不是文件-bash-profile-的所有者-因此没有权限写到该文件。"><span>1.您不是文件“.bash_profile”的所有者,因此没有权限写到该文件。</span></a></h3><p>.bash_profile文件被锁定了，解决办法是：先将此文件的内容给复制一下，粘在一个无关紧要的地方，修改完成后把那个文件复制回来</p>`,15)]))}const p=s(i,[["render",o],["__file","mac系统下安装mongodb的安装和启动.html.vue"]]),c=JSON.parse('{"path":"/mock%E6%95%B0%E6%8D%AE/mac%E7%B3%BB%E7%BB%9F%E4%B8%8B%E5%AE%89%E8%A3%85mongodb%E7%9A%84%E5%AE%89%E8%A3%85%E5%92%8C%E5%90%AF%E5%8A%A8.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[{"level":3,"title":"1.您不是文件“.bash_profile”的所有者,因此没有权限写到该文件。","slug":"_1-您不是文件-bash-profile-的所有者-因此没有权限写到该文件。","link":"#_1-您不是文件-bash-profile-的所有者-因此没有权限写到该文件。","children":[]}]}],"git":{"updatedTime":1728353169000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"mock数据/mac系统下安装mongodb的安装和启动.md"}');export{p as comp,c as data};
