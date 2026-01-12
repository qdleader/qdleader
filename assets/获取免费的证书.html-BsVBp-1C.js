import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const p={};function i(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="免费证书" tabindex="-1"><a class="header-anchor" href="#免费证书"><span>免费证书</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>joyssl<span class="token punctuation">.</span>com<span class="token operator">/</span>sys<span class="token operator">/</span>index<span class="token punctuation">.</span>html</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>选择--》 购买证书</p><p>--》 免费版本</p><p>买完正常配置即可。</p><p>最后 证书下载下来，在服务器配置时候</p><p>官方的nginx 写法又问题，会报错</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">listen <span class="token number">443</span><span class="token punctuation">;</span></span>
<span class="line">server_name localhost<span class="token punctuation">;</span> <span class="token comment"># localhost 修改为您证书绑定的域名。</span></span>
<span class="line">ssl on<span class="token punctuation">;</span> <span class="token comment">#设置为 on 启用 SSL 功能。</span></span>
<span class="line">root html<span class="token punctuation">;</span></span>
<span class="line">index index.html index.htm<span class="token punctuation">;</span></span>
<span class="line">ssl_certificate cert/domain name.pem<span class="token punctuation">;</span> <span class="token comment">#将 domain name.pem 替换成您证书的文件名。</span></span>
<span class="line">ssl_certificate_key cert/domain name.key<span class="token punctuation">;</span> <span class="token comment">#将 domain name.key 替换成您证书的密钥文件名</span></span>
<span class="line"> ssl_session_timeout 5m<span class="token punctuation">;</span></span>
<span class="line">ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span> <span class="token comment">#使用此加密套件。</span></span>
<span class="line">ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span> <span class="token comment">#使用该协议进行配置。</span></span>
<span class="line"> ssl_prefer_server_ciphers on<span class="token punctuation">;</span></span>
<span class="line">location / <span class="token punctuation">{</span></span>
<span class="line">root html<span class="token punctuation">;</span> <span class="token comment">#站点目录。</span></span>
<span class="line">index index.html index.htm<span class="token punctuation">;</span> <span class="token comment">#添加属性。</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ssl 这去掉， listen 443; 改为:listen 443 ssl;</p><p>即</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line">server <span class="token punctuation">{</span></span>
<span class="line">listen <span class="token number">443</span> ssl<span class="token punctuation">;</span></span>
<span class="line">server_name localhost<span class="token punctuation">;</span> <span class="token comment"># localhost 修改为您证书绑定的域名。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ssl on; #设置为 on 启用 SSL 功能。</span></span>
<span class="line"></span>
<span class="line">root html<span class="token punctuation">;</span></span>
<span class="line">index index.html index.htm<span class="token punctuation">;</span></span>
<span class="line">ssl_certificate cert/domain name.pem<span class="token punctuation">;</span> <span class="token comment">#将 domain name.pem 替换成您证书的文件名。</span></span>
<span class="line">ssl_certificate_key cert/domain name.key<span class="token punctuation">;</span> <span class="token comment">#将 domain name.key 替换成您证书的密钥文件名</span></span>
<span class="line"> ssl_session_timeout 5m<span class="token punctuation">;</span></span>
<span class="line">ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span> <span class="token comment">#使用此加密套件。</span></span>
<span class="line">ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span> <span class="token comment">#使用该协议进行配置。</span></span>
<span class="line"> ssl_prefer_server_ciphers on<span class="token punctuation">;</span></span>
<span class="line">location / <span class="token punctuation">{</span></span>
<span class="line">root html<span class="token punctuation">;</span> <span class="token comment">#站点目录。</span></span>
<span class="line">index index.html index.htm<span class="token punctuation">;</span> <span class="token comment">#添加属性。</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)])])}const o=n(p,[["render",i]]),r=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E8%AF%81%E4%B9%A6/%E8%8E%B7%E5%8F%96%E5%85%8D%E8%B4%B9%E7%9A%84%E8%AF%81%E4%B9%A6.html","title":"免费证书","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"服务端/证书/获取免费的证书.md"}');export{o as comp,r as data};
