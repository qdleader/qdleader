import{_ as a,c as t,a as r,o as n}from"./app-KfnfuIf0.js";const d={};function o(c,e){return n(),t("div",null,[...e[0]||(e[0]=[r(`<h1 id="http017-301和302有哪些区别" tabindex="-1"><a class="header-anchor" href="#http017-301和302有哪些区别"><span>http017-301和302有哪些区别</span></a></h1><p>官方的比较简洁的说明：</p><pre><code>    301 redirect: 301 代表永久性转移(Permanently Moved)

    302 redirect: 302 代表暂时性转移(Temporarily Moved )
</code></pre><p><strong>详细来说，301和302状态码都表示重定向，就是说浏览器在拿到服务器返回的这个状态码后会自动跳转到一个新的URL地址，这个地址可以从响应的Location首部中获取（用户看到的效果就是他输入的地址A瞬间变成了另一个地址B）——这是它们的共同点。他们的不同在于。301表示旧地址A的资源已经被永久地移除了（这个资源不可访问了），搜索引擎在抓取新内容的同时也将旧的网址交换为重定向之后的网址；302表示旧地址A的资源还在（仍然可以访问），这个重定向只是临时地从旧地址A跳转到地址B，搜索引擎会抓取新的内容而保存旧的网址。</strong></p><h2 id="使用301跳转的场景" tabindex="-1"><a class="header-anchor" href="#使用301跳转的场景"><span>使用301跳转的场景：</span></a></h2><pre><code>1）域名到期不想续费（或者发现了更适合网站的域名），想换个域名。

2）在搜索引擎的搜索结果中出现了不带www的域名，而带www的域名却没有收录，这个时候可以用301重定向来告诉搜索引擎我们目标的域名是哪一个。

3）空间服务器不稳定，换空间的时候。
</code></pre><h2 id="使用302跳转的场景" tabindex="-1"><a class="header-anchor" href="#使用302跳转的场景"><span>使用302跳转的场景：</span></a></h2><pre><code>    --尽量使用301跳转！
</code></pre><h4 id="为什么尽量要使用301跳转-——网址劫持" tabindex="-1"><a class="header-anchor" href="#为什么尽量要使用301跳转-——网址劫持"><span>为什么尽量要使用301跳转？——网址劫持！</span></a></h4><pre><code>从网站A（网站比较烂）上做了一个302跳转到网站B（搜索排名很靠前），这时候有时搜索引擎会使用网站B的内容，但却收录了网站A的地址，这样在不知不觉间，网站B在为网站A作贡献，网站A的排名就靠前了。

301跳转对查找引擎是一种对照驯良的跳转编制，也是查找引擎能够遭遇的跳转编制，它告诉查找引擎，这个地址弃用了，永远转向一个新地址，可以转移新域名的权重。而302重定向很容易被搜索引擎误认为是利用多个域名指向同一网站，那么你的网站就会被封掉，罪名是“利用重复的内容来干扰Google搜索结果的网站排名”。
</code></pre>`,10)])])}const h=a(d,[["render",o]]),s=JSON.parse('{"path":"/http/http017-301%E5%92%8C302%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8C%BA%E5%88%AB.html","title":"http017-301和302有哪些区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"http/http017-301和302有哪些区别.md"}');export{h as comp,s as data};
