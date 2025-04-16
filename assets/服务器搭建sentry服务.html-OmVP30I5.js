import{_ as s,c as n,a,o as r}from"./app-DFnxdJ0h.js";const t={};function p(i,e){return r(),n("div",null,e[0]||(e[0]=[a(`<h1 id="部署-sentry" tabindex="-1"><a class="header-anchor" href="#部署-sentry"><span>部署 Sentry</span></a></h1><h2 id="部署在我们自己的服务器上。" tabindex="-1"><a class="header-anchor" href="#部署在我们自己的服务器上。"><span>部署在我们自己的服务器上。</span></a></h2><p>在这篇文章中，我们将逐步介绍在我们自己的服务器上部署 Sentinel 的步骤。</p><p>最低要求 Docker 19.03.6+ Compose 1.28.0+ 4 CPU Cores 8 GB RAM 20 GB Free Disk Space</p><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><p>先让我们尝试输入命令 docker ，会得到“命令未找到”的提示，还有如何安装的建议：</p><p>Command &#39;docker&#39; not found, but can be installed with: sudo apt install docker.io 所以，你只需要按照系统的提示，“照葫芦画瓢”输入命令，安装 docker.io 就可以了。为了方便，你还可以使用 -y 参数来避免确认，实现自动化操作：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> docker.io <span class="token comment">#安装Docker Engine</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>刚才说过，Docker Engine不像Docker Desktop那样可以安装后就直接使用，必须要做一些手工调整才能用起来，所以你还要在安装完毕后执行下面的两条命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> start         <span class="token comment">#启动docker服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token variable">\${<span class="token environment constant">USER</span>}</span>   <span class="token comment">#当前用户加入docker组</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个 service docker start 是启动 Docker 的后台服务，第二个 usermod -aG 是把当前的用户加入 Docker 的用户组。这是因为操作 Docker 必须要有 root 权限，而直接使用 root 用户不够安全，加入 Docker 用户组是一个比较好的选择，这也是 Docker 官方推荐的做法。当然，如果只是为了图省事，你也可以直接切换到 root 用户来操作 Docker。</p><h2 id="安装-docker-composer" tabindex="-1"><a class="header-anchor" href="#安装-docker-composer"><span>安装 Docker Composer</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-SL</span> https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-linux-x86_64 <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose</span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose</span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过 docker-compose version 来查看版本。</p><p>docker-compose version</p><p>Docker Compose version v2.20.2</p><h1 id="安装-sentry" tabindex="-1"><a class="header-anchor" href="#安装-sentry"><span>安装 Sentry</span></a></h1><p>使用脚本安装是最快的方法，如果需要自定义配置可以更改官方提供的脚本。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>getsentry<span class="token operator">/</span>self<span class="token operator">-</span>hosted sentry</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面的代码会将库克隆到名为 Sentry 的文件夹中。可以通过将命令末尾的 Sentry 更改为想要的名称来更改。然后 cd 进入刚刚创建的目录并运行以下命令开始安装过程：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">./install</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装过程中，会出现提示询问我们是否要创建用户。如果想要安装不会被提示终端，可以运行：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">./install.sh --skip-user-prompt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装需要一段时间，如果安装成功你应该看到以下内容</p><p>现在我们可以运行提示的命令并且启动 Sentry</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>命令执行完毕之后我们可以通过 http://{server_ip}:9000/ 来访问 Sentry</p><h2 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h2><p>如果在运行安装命令时使用了 --skip-user-prompt，则需要通过终端创建用户。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">sentry</span><span class="token operator">=</span><span class="token string">&quot;docker-compose run --rm web&quot;</span></span>
<span class="line">sentry createuser</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决cspf跨域访问错误" tabindex="-1"><a class="header-anchor" href="#解决cspf跨域访问错误"><span>解决CSPF跨域访问错误</span></a></h2><p>此时直接访问sentry 可以访问，但是登陆时候，会报 CSRF验证失败</p><h3 id="方案1" tabindex="-1"><a class="header-anchor" href="#方案1"><span>方案1</span></a></h3><p>从版本 24.1.0 开始，Sentry 迁移到 Django 4，其中包含更严格的 CSRF 保护。默认情况下，受信任的 CSRF 源设置为您的system.url-prefix，但在某些情况下，可以从多个域访问您的 Sentry 部署，您将需要CSRF_TRUSTED_ORIGINS在sentry.conf.py文件上进行配置。</p><p>cd sentry</p><p>vim sentry.conf.py</p><p>把你的ip 或服务器域名放到CSRF_TRUSTED_ORIGINS中</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python"><pre><code><span class="line"></span>
<span class="line"># Assuming your Sentry instance can be accessed from sentry.example.com, 10.100.10.10 and 127.0.0.1.</span>
<span class="line">CSRF_TRUSTED_ORIGINS = [&quot;https://sentry.example.com&quot;, &quot;http://10.100.10.10&quot;, &quot;http://127.0.0.1:9000&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案2" tabindex="-1"><a class="header-anchor" href="#方案2"><span>方案2</span></a></h3><p>默认安装完成以后通过http://ip:9000端口去访问sentry的时候只要一登录就会报错CSPF跨域访问失败，需要修改一些配置。</p><p>打开你的sentry/sentry/config/config.yml文件，在文件的最后增加以下内容：</p><p>system.url-prefix: &quot;http://你的sentry部署主机IP地址:9000&quot;</p><p>上面的两个配置，第一个指定了sentry的访问前置，例如http://192.168.1.100:9000 。</p><p>打开sentry/sentry/config/sentry.conf.py文件，在文件的最后增加以下内容关闭允许用户自己注册功能：</p><p>SENTRY_FEATURES[&#39;auth:register&#39;] = False</p><h2 id="重启服务" tabindex="-1"><a class="header-anchor" href="#重启服务"><span>重启服务</span></a></h2><p>docker-compose down docker-compose up -d</p><p>sudo shutdown -r now</p><h2 id="避免-sentry-引发雪崩-504-gateway-timeout" tabindex="-1"><a class="header-anchor" href="#避免-sentry-引发雪崩-504-gateway-timeout"><span>避免 Sentry 引发雪崩（504 Gateway Timeout）</span></a></h2><p>引入新的技术或者工具，或多或少都会增加系统的复杂度和运行风险。某个求量高的的服务发生故障，大量的错误信息涌向 Sentry 服务器，导致 Sentry 响应严重延迟，其 Redis 队列内存容量接近占满，而 Nginx 也全都响应 504 Gateway Timeout。恰好该故障的服务由于请求 Sentry 服务端未设置超时时间，导致 HTTP 请求同步阻塞，反倒拖垮了服务本身。</p><p>为了规避此类问题，有以下做法：</p><h4 id="保障-sentry-服务端高可用" tabindex="-1"><a class="header-anchor" href="#保障-sentry-服务端高可用"><span>保障 Sentry 服务端高可用</span></a></h4><p>这点最重要，但实际我们并未做好。目前我们自部署的 Sentry 是一个单点，并没有集群或冗余。如果要实现高可用，那么付出的金钱成本会较高，甚至可能超过了使用 Sentry SaaS 付费服务的成本。由于 Sentry 官方并未提供中国区的服务，HTTP 请求到国外的速度并不理想，使用官方 SaaS 服务也不见得是太好的选择。</p><h4 id="设置-timeout" tabindex="-1"><a class="header-anchor" href="#设置-timeout"><span>设置 timeout</span></a></h4><p>使用 Sentry SDK 时，一定要设置向 Sentry 服务器发送请求的超时时间，建议 3 秒以下。</p><h4 id="设置-sample-rate" tabindex="-1"><a class="header-anchor" href="#设置-sample-rate"><span>设置 sample_rate</span></a></h4><p>使用 Sentry SDK 时，可以设置采样率，0.00 表示拒绝发送任何事件，1.00 表示发送全部事件。建议前期设置较小的值，然后视应用的 PV 大小进行调整。使用采样率可能会带来这样的负面影响：零星的错误可能未上报，导致一直未被发现。</p><h4 id="及时熔断" tabindex="-1"><a class="header-anchor" href="#及时熔断"><span>及时熔断</span></a></h4><p>假如当 Sentry 服务器不堪重负时，应该避免应用继续请求 Sentry 了。比如：可以手动将采样率设置为 0.00。</p><p>使用异步方式（async）发送请求 如果 SDK 支持异步发送请求，那就使用，避免同步阻塞。</p><p>隔离生产环境的 Sentry 运维同事隔离部署了两套 Sentry，一套是体验环境，供开发环境/测试环境/预发布环境的应用接入使用；另外一套是正式环境，供生产环境/私有化环境的应用接入使用。如果要试验 Sentry 的功能或调整 Sentry 的配置，那我们会先在体验环境的 Sentry 中进行，确认没有问题后，才会调整生产环境的 Sentry，借此保障生产环境 Sentry 的稳定性。</p><h4 id="通过队列来缓冲请求至-sentry-的并发压力" tabindex="-1"><a class="header-anchor" href="#通过队列来缓冲请求至-sentry-的并发压力"><span>通过队列来缓冲请求至 Sentry 的并发压力</span></a></h4><p>假设应用的请求量和并发量都巨大，当出现严重故障时每个请求处理都发生错误，那么即使在 SDK 中设置了较低的采样率（比如：0.01），可能请求到 Sentry 的并发量依旧超过其有限承载。为了避免这个问题，我们在流量最大的服务中做了如下尝试：我们增加了一个队列，将服务的错误事件先入列，启动了少量的消费进程去消费该队列缓缓上报错误至 Sentry 服务端。并且应用程序中做了处理，即使该队列容量占满也不会影响正常业务（只是丢弃错误事件）。实践证明，这种中转缓冲的方式非常有效，不过也增加了接入 Sentry 工作量，大家可自行取舍。</p>`,63)]))}const c=s(t,[["render",p]]),l=JSON.parse('{"path":"/%E7%9B%91%E6%8E%A7%E5%91%8A%E8%AD%A6/sentry/%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BAsentry%E6%9C%8D%E5%8A%A1.html","title":"部署 Sentry","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"监控告警/sentry/服务器搭建sentry服务.md"}');export{c as comp,l as data};
