# gitHub加速的几种方法

这几个方法中最后一个，下载东西时候方便又快速。用的人都说真香！！

## 1.浏览github加速

这是两个国内镜像的地址：

```

https://github.com.cnpmjs.org

https://hub.fastgit.org

```

->_->  浏览起来真香呀！
https://github.com.cnpmjs.org/这个网址浏览时候常有问题，刷新一下就可以了，下面这个网址比这个就好用多了。。


https://hub.fastgit.org这个下载时候也是比较快的

```
git clone https://hub.fastgit.org/qdleader/qdleader.git
```
推荐指数：★★★



## 2.github浏览加速
```
http://toolwa.com/github/
```

把你要浏览的仓库放到输入框就可以快速浏览

比如你把
```
https://github.com/qdleader/qdleader.git
```

放到搜索框里面搜索

就会跳到仓库页面。

但有时候会卡掉

推荐指数：★


## 3.git clone 下载加速

```
https://github.zhlh6.cn/
```
把加速的地址
放到输入栏
```
https://github.com/qdleader/qdleader
```

会生成下面的地址
```
git@git.zhlh6.cn:qdleader/qdleader
```
直接git clone 这个地址即可


推荐指数：★★★




## 4.谷歌浏览器 GitHub 加速插件


> 直接在chrome 网上应用商店  搜GitHub加速  下载即可


如果小伙伴在线安装不便，可以在qdleader 公众号后台回复 github加速。获取安装包

推荐指数: ★★★


## 5.通过 Gitee 中转 fork 仓库下载

> 访问 gitee 网站：https://gitee.com/ 并登录，在顶部选择“从 GitHub/GitLab 导入仓库”

在导入页面中粘贴你的Github仓库地址，点击导入即可：

等待导入操作完成，然后在导入的仓库中下载浏览对应的该 GitHub 仓库代码.

之后再下载，就会比原来快很多了。

推荐指数: ★★


## 6. 通过修改 HOSTS 文件进行加速

1 获取GitHub官方CDN地址
打开

https://www.ipaddress.com/

查询这两个链接的DNS解析地址
```
github.com

github.global.ssl.fastly.net
```

记录下查询到的IP地址。

2 修改系统Hosts文件
打开系统hosts文件。
路径：C:\Windows\System32\drivers\etc

在最后加上

```
  192.30.253.112     github.com

  199.232.69.194 github.global.ssl.fastly.net

```

3 刷新系统DNS缓存
```
Windows+X 打开系统命令行（管理员身份）或powershell

运行 ipconfig /flushdns 手动刷新系统DNS缓存。
```

推荐指数: ★★


## 7.克隆加速
加入部分连接
```
ghproxy.com
```
比如你下下载
```
https://github.com/qdleader/qdleader.git
```

原来写法
```
git clone https://github.com/qdleader/qdleader.git
```
现在只需要

```
git clone https://ghproxy.com/github.com/qdleader/qdleader.git
```

基本用这个就可以测你网速了。O(∩_∩)O哈哈~

推荐指数: ★★★★★
