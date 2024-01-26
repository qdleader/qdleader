## 首先介绍一下YaPi是干什么的。
```
帮助开发者轻松创建、发布、维护 API，YApi 还为用户提供了优秀的交互体验，开发人员只需利用平台提供的接口数据写入工具以及简单的点击操作就可以实现接口的管理。免费开源，内网部署，信息再也不怕泄露了！支持 postman, har, swagger 数据导入
```

比起easy mock 来 它写的文档更加清晰，部署也更简单一些



## 需求环境

```
安装nodejs （7.6+）
安装mongodb （2.6+）
我电脑的mongodb 启动命令是

启动mongod: sudo mongod
如果没有mongo 就按照上面那篇，在mac上面如何安装mongo
```




## 安装YaPi

```
  sudo npm install -g yapi-cli --registry https://registry.npmmirror.com/

  sudo yapi server
```

部署YaPi
注意yapi依赖于mongodb数据库,需要先启动mongodb数据库。并且最小化即可，不要关闭。

    yapi server


部署成功，请切换到部署目录，输入： "node vendors/server/app.js" 指令启动服务器,

然后在浏览器打开 http://127.0.0.1:3000 访问

我的部署路径：/Users/用户名/my-yapi











## 注意事项
当我们关闭电脑，第二天底启动mogob时候启动不了
如果报没有mongob 命令 ，那就重新

```
source .bash_profile
```

然后链接一下
```
mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
```

此时，再进行mongo 就可以启动mongo啦
