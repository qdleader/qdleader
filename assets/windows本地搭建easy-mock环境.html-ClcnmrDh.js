import{_ as o,c as t,a as s,o as n}from"./app-KfnfuIf0.js";const a="/qdleader/assets/1-BKYkGf-D.jpg",c="/qdleader/assets/2-Bfu74Xuf.jpg",r={};function d(p,e){return n(),t("div",null,[...e[0]||(e[0]=[s(`<h4 id="windows本地搭建easy-mock环境" tabindex="-1"><a class="header-anchor" href="#windows本地搭建easy-mock环境"><span>windows本地搭建easy-mock环境</span></a></h4><p>起因：由于easy-mock官网很不稳定，所以想搭建自己本地的mock环境</p><pre><code>   1、首先安装node.js 环境 (提供地址：https://nodejs.org/en/)

   2、下载mongoDB 

		
		
		下载时候选择图形化工具，挺好用的，下载完后打开界面如图
		![](windows本地搭建easy-mock环境_files/1.jpg)
		
		进来后因为没有设置密码直接点击，connect就可以
		
		然后你就连上啦。
</code></pre><p>3、Redis安装</p><p>我推荐一个傻瓜式安装redis的方法。 首先下载phpstudy，<a href="https://www.xp.cn/download.html" target="_blank" rel="noopener noreferrer">地址</a>然后里面后好多你用的工具可以统一下载和管理。特别方便。 这里直接点立即下载就可以。</p><p><img src="`+a+'" alt=""> a 找到redis直接安装就可以。</p><p><img src="'+c+`" alt=""> 然后在首页点击启动就可以。</p><p>4、安装下载easy mock</p><pre><code>     使用git工具

    　   git clone https://github.com/easy-mock/easy-mock.git
</code></pre><p>cd easy-mock 　　　　npm install<br> 　　　　npm run build</p><pre><code>  安装完成后打开easy-mock文件夹下的config/default.json 
  检查：
   
    确定一致后，下载npm i -g cross-env pm2

   下载完成后运行环境变量  cross-env NODE_ENV=production pm2 start app.js

  ![](windows本地搭建easy-mock环境_files/3.jpg)
</code></pre><p>从http://localhost:7300/打开easymock 的页面 ，开始使用</p>`,12)])])}const i=o(r,[["render",d]]),l=JSON.parse('{"path":"/mock%E6%95%B0%E6%8D%AE/easymock/windows%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BAeasy-mock%E7%8E%AF%E5%A2%83.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"mock数据/easymock/windows本地搭建easy-mock环境.md"}');export{i as comp,l as data};
