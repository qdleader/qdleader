#### windows本地搭建easy-mock环境
 　　起因：由于easy-mock官网很不稳定，所以想搭建自己本地的mock环境

       1、首先安装node.js 环境 (提供地址：https://nodejs.org/en/)

       2、下载mongoDB 

			
			
			下载时候选择图形化工具，挺好用的，下载完后打开界面如图
			![](windows本地搭建easy-mock环境_files/1.jpg)
			
			

   3、Redis安装（Redis安装包地址：https://github.com/MicrosoftArchive/redis/releases）

       下载一个MSI，然后安装

    　　 注意事项： 

       安装成功后找到安装的文件夹

　　通过命令设置密码，cmd进入Redis客户端（确保服务启动），输入命令redis-cli.exe（也可双击redis-cli.exe），命令config set requirepass mypasswd 设置密码

    　然后再计算机的服务应用程序中找到Redis启动 或者   通过命令redis-server.exe启动服务

   4、安装下载easy mock  

         使用git工具

        　   git clone https://github.com/easy-mock/easy-mock.git

　　　　cd easy-mock
　　　　npm install   
　　　　npm run build
 
      安装完成后打开easy-mock文件夹下的config/default.json 
      检查：
       
        确定一致后，下载npm i -g cross-env pm2

       下载完成后运行环境变量  cross-env NODE_ENV=production pm2 start app.js

      

  　 从http://localhost:7300/打开easymock 的页面 ，开始使用 

        