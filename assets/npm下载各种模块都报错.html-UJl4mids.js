import{_ as s,c as e,a,o as l}from"./app-D8HvJIFE.js";const i={};function p(t,n){return l(),e("div",null,[...n[0]||(n[0]=[a(`<h1 id="npm安装任何包都报错的解决办法" tabindex="-1"><a class="header-anchor" href="#npm安装任何包都报错的解决办法"><span>npm安装任何包都报错的解决办法</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">解决办法：</span>
<span class="line"></span>
<span class="line">1、执行：</span>
<span class="line"></span>
<span class="line">npm config get proxy</span>
<span class="line">npm config get https-proxy</span>
<span class="line">如果返回值不为null，继续执行：</span>
<span class="line">（这一步很重要，一定要保证两个命令的返回值都为null,话说回来，应该出现这个错误这两个返回值有不为null的）</span>
<span class="line">npm config set proxy null</span>
<span class="line">npm config set https-proxy null</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">2、执行：</span>
<span class="line">npm config set registry http://registry.cnpmjs.org/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你就可以愉快的安装cnpm了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install -g cnpm --registry=https://registry.npmmirror.com/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后你就可以更加愉快的用cnpm安任何东西了</p><p>现在基本就可以了，若cnpm 现在也任然报错呢，可以再检查一下是否配置了 git的系统变量</p><blockquote><p>系统变量的path中加入git 路径</p></blockquote>`,7)])])}const d=s(i,[["render",p]]),r=JSON.parse('{"path":"/node/npm%E4%B8%8B%E8%BD%BD%E5%90%84%E7%A7%8D%E6%A8%A1%E5%9D%97%E9%83%BD%E6%8A%A5%E9%94%99.html","title":"npm安装任何包都报错的解决办法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"node/npm下载各种模块都报错.md"}');export{d as comp,r as data};
