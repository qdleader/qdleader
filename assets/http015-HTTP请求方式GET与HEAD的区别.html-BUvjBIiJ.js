import{_ as n,c as a,a as e,o as t}from"./app-DFnxdJ0h.js";const l={};function c(i,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="http015-http请求方式get与head的区别" tabindex="-1"><a class="header-anchor" href="#http015-http请求方式get与head的区别"><span>http015-HTTP请求方式GET与HEAD的区别</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">## <span class="token constant">GET</span>请求</span>
<span class="line">从服务器上获取资源</span>
<span class="line"></span>
<span class="line">## <span class="token constant">HEAD</span>请求</span>
<span class="line"></span>
<span class="line"><span class="token constant">HEAD</span>方法与 <span class="token constant">GET</span> 方法类似，也是请求从服务器获取资源，服务器的处理机制也是一样的，但服务器不会返回请求的实体数据，只会传回响应头，也就是资源的“元信息”。</span>
<span class="line"><span class="token constant">HEAD</span> 方法可以看做是 <span class="token constant">GET</span> 方法的一个“简化版”或者“轻量版”。因为它的响应头与 <span class="token constant">GET</span> 完全相同，所以可以用在很多并不真正需要资源的场合，避免传输 body 数据的浪费。</span>
<span class="line">比如，想要检查一个文件是否存在，只要发个 <span class="token constant">HEAD</span> 请求就可以了，没有必要用 <span class="token constant">GET</span> 把整个文件都取下来。再比如，要检查文件是否有最新版本，同样也应该用 <span class="token constant">HEAD</span>，服务器会在响应头里把文件的修改时间传回来。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token constant">HEAD</span>只返回响应头，<span class="token constant">GET</span>除了返回<span class="token constant">HEAD</span>的信息，还有文件内容</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",c]]),o=JSON.parse('{"path":"/http/http015-HTTP%E8%AF%B7%E6%B1%82%E6%96%B9%E5%BC%8FGET%E4%B8%8EHEAD%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"http015-HTTP请求方式GET与HEAD的区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"http/http015-HTTP请求方式GET与HEAD的区别.md"}');export{d as comp,o as data};
