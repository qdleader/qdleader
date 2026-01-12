import{_ as a,c as n,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function i(r,s){return p(),n("div",null,[...s[0]||(s[0]=[e(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">docker network create qdnet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">sudo su</span>
<span class="line">cd <span class="token operator">/</span>Users</span>
<span class="line">mkdir data</span>
<span class="line">mkdir plugins</span>
<span class="line"></span>
<span class="line">chmod <span class="token number">777</span> data</span>
<span class="line">chmod <span class="token number">777</span> plugins</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">docker run <span class="token operator">-</span>d \\</span>
<span class="line">	<span class="token operator">--</span>name es \\</span>
<span class="line">    <span class="token operator">-</span>e <span class="token string">&quot;ES_JAVA_OPTS=-Xms256m -Xmx256m&quot;</span> \\</span>
<span class="line">    <span class="token operator">-</span>e <span class="token string">&quot;discovery.type=single-node&quot;</span> \\</span>
<span class="line">    <span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>data<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>elasticsearch<span class="token operator">/</span>data \\</span>
<span class="line">    <span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>plugins<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>elasticsearch<span class="token operator">/</span>plugins \\</span>
<span class="line">    <span class="token operator">--</span>privileged \\</span>
<span class="line">    <span class="token operator">--</span>network qdnet \\</span>
<span class="line">    <span class="token operator">-</span>p <span class="token number">9200</span><span class="token operator">:</span><span class="token number">9200</span> \\</span>
<span class="line">    <span class="token operator">-</span>p <span class="token number">9300</span><span class="token operator">:</span><span class="token number">9300</span> \\</span>
<span class="line"><span class="token literal-property property">elasticsearch</span><span class="token operator">:</span><span class="token number">7.12</span><span class="token number">.1</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令说明：</p><p>-e &quot;cluster.name=es-docker-cluster&quot;：设置集群名称 -e &quot;http.host=0.0.0.0&quot;：监听的地址，可以外网访问 -e &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;：内存大小 -e &quot;discovery.type=single-node&quot;：非集群模式 -v es-data:/usr/share/elasticsearch/data：挂载逻辑卷，绑定elasticsearch的数据目录 -v es-logs:/usr/share/elasticsearch/logs：挂载逻辑卷，绑定elasticsearch的日志目录 -v es-plugins:/usr/share/elasticsearch/plugins：挂载逻辑卷，绑定elasticsearch的插件目录 --privileged：授予逻辑卷访问权 --network qd-net ：加入一个名为qd-net的网络中 -p 9200:9200：端口映射配置</p><h2 id="安装-kibana" tabindex="-1"><a class="header-anchor" href="#安装-kibana"><span>安装 kibana</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">docker run <span class="token operator">-</span>d \\</span>
<span class="line"><span class="token operator">--</span>name kibana1 \\</span>
<span class="line"><span class="token operator">-</span>e <span class="token constant">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">121.36</span><span class="token number">.47</span><span class="token number">.43</span><span class="token operator">:</span><span class="token number">9200</span> \\</span>
<span class="line"><span class="token operator">--</span>network qdnet \\</span>
<span class="line"><span class="token operator">-</span>p <span class="token number">5601</span><span class="token operator">:</span><span class="token number">5601</span>  \\</span>
<span class="line"><span class="token literal-property property">kibana</span><span class="token operator">:</span><span class="token number">7.12</span><span class="token number">.1</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里等待个10秒钟不要着急</p><p>如果是m1电脑，下载失败 加上 --platform linux/amd64 \\</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">docker run <span class="token operator">-</span>d \\</span>
<span class="line"><span class="token operator">--</span>name kibana \\</span>
<span class="line"><span class="token operator">-</span>e <span class="token constant">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">121.36</span><span class="token number">.47</span><span class="token number">.43</span><span class="token operator">:</span><span class="token number">9200</span> \\</span>
<span class="line"><span class="token operator">--</span>network qdnet \\</span>
<span class="line"><span class="token operator">-</span>p <span class="token number">5601</span><span class="token operator">:</span><span class="token number">5601</span>  \\</span>
<span class="line"><span class="token operator">--</span>platform linux<span class="token operator">/</span>amd64 \\</span>
<span class="line"><span class="token literal-property property">kibana</span><span class="token operator">:</span><span class="token number">7.12</span><span class="token number">.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kibana中文配置</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">#进入容器</span>
<span class="line">docker exec <span class="token operator">-</span>it kibana <span class="token operator">/</span>bin<span class="token operator">/</span>bash</span>
<span class="line"></span>
<span class="line">#进入配置文件目录</span>
<span class="line">cd <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>kibana<span class="token operator">/</span>config</span>
<span class="line"></span>
<span class="line">#编辑文件kibana<span class="token punctuation">.</span>yml</span>
<span class="line">vi kibana<span class="token punctuation">.</span>yml</span>
<span class="line"></span>
<span class="line">#在最后一行添加如下配置</span>
<span class="line">i18n<span class="token punctuation">.</span>locale<span class="token operator">:</span> zh<span class="token operator">-</span><span class="token constant">CN</span></span>
<span class="line"></span>
<span class="line">#保存退出</span>
<span class="line">exit</span>
<span class="line"></span>
<span class="line">#并重启容器</span>
<span class="line">docker restart kibana</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ik分词器安装" tabindex="-1"><a class="header-anchor" href="#ik分词器安装"><span>IK分词器安装</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>_analyze</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qdleader，带你打开通往梦想的门！&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IK分词器集成ElasticSearch下载地址[https://github.com/medcl/elasticsearch-analysis-ik/releases/tag/v7.12.1]</p><p>我们只需要将上面elasticsearch-analysis-ik-7.12.1拷贝到ElasticSearch的plugins目录中即可，但由于当前服务采用的是docker安装，所以需要将文件拷贝到docker容器的plugins目录才行。</p><p>操作如下： properties复制代码#为了方便配置，我们将elasticsearch-analysis-ik-7.12.1改成ik文件夹</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">mv elasticsearch<span class="token operator">-</span>analysis<span class="token operator">-</span>ik<span class="token operator">-</span><span class="token number">7.12</span><span class="token number">.1</span> ik</span>
<span class="line"></span>
<span class="line">#将ik文件夹拷贝到esdata容器中</span>
<span class="line"></span>
<span class="line">docker cp ik es<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>elasticsearch<span class="token operator">/</span>plugins</span>
<span class="line"></span>
<span class="line">#重启容器</span>
<span class="line">docker restart es</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候 docker restart es 在浏览器里面当闻不到了，那就试试</p><p>docker start -a es 看看报错输出</p><h2 id="分词测试" tabindex="-1"><a class="header-anchor" href="#分词测试"><span>分词测试</span></a></h2><p>IK分词器包含两种模式：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">ik_smart：最少切分</span>
<span class="line"></span>
<span class="line">ik_max_word：最细切分</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面使用默认的standard分词器，对中文分词非常难用，安装IK分词器后，我们可以使用IK分词器测试，测试代码如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>_analyze</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qdleader，带你打开通往梦想的门！&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)])])}const c=a(l,[["render",i]]),o=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/docker/Docker%E5%AE%89%E8%A3%85ElasticSearch.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"服务端/docker/Docker安装ElasticSearch.md"}');export{c as comp,o as data};
