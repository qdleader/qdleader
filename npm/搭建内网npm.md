# 搭建内网npm
## Verdaccio 搭建 npm 私有仓库

为什么要搭建私有仓库？

日常开发中我们肯定会封装一些通用组件，大部分情况下都会存在于 components 目录下；试想一下如果我们有两个系统 A 和 B，此时这两个系统都要用到的组件我们该如何封装呢？

这种情况下我们还是开发一个包托管到 npm 比较靠谱，随用随下载。但是这些组件有一定的隐私性，我们又不想让别人看到。此时 Verdaccio 的好处就体现出来了。

Verdaccio 是一个 Node.js 创建的轻量级 npm 仓库（就是一个应用支持独立部署安装）。可以快速帮助我们搭建一个类似于 npm 的网页应用程序用于托管我们的包

前置条件
本文介绍 Verdaccio 为 5.x 版本；示例演示系统为 阿里云 CentOS。由于此软件是基于 Node.js 开发，需要现在服务器安装 Node.js 并确保版本为 12.x。

提示：推荐使用 nvm 管理 node 版本；安装 nvm

安装 Verdaccio

# 必须要加 -g 全局安装

npm install verdaccio -g
安装成功之后随即在命令行输出 
``
verdaccio 

```js
[root@hecs-3429401 ~]# verdaccio

 info --- config file  - /root/.config/verdaccio/config.yaml
 info --- using htpasswd file: /root/.config/verdaccio/htpasswd
 info --- plugin successfully loaded: verdaccio-htpasswd
 info --- plugin successfully loaded: verdaccio-audit
 warn --- http address - http://0.0.0.0:4873/ - verdaccio/5.28.0
```

根据服务启动后信息不难得到两个重要信息

verdaccio 配置文件：/root/.config/verdaccio/config.yaml

verdaccio 默认启动：默认占用 4873 端口（使用云服务器的小伙伴记得开启安全组）。

注意： 可能有些小伙伴的启用端口前面显示的是 localhost:4873，如果出现这种情况打开安全组也是不生效的，以下附上解决方案。

使用 vim 打开配置文件。在最后一行新增 listen 0.0.0.0:4873，端口可以任意指定。0.0.0.0 就是表示当前主机的 IPV4 地址；之后再重启服务就，在浏览器输入服务器 IP 加端口就可以访问了。

使用 pm2 管理 verdaccio

下载：npm install pm2 -g

pm2 start verdaccio

# 内存使用超过上限自动重启

pm2 start verdaccio --name verdaccio --watch --max-memory-restart 16G  -i 0

此时在浏览器访问 http://你服务器ip:4873  就可以看到欢迎页面了

## 配置文件解析

```shell

# This is the default config file. It allows all users to do anything,
# so don't use it on production systems.

#

# Look here for more config file examples: 这个 examples 404了。
# https://github.com/verdaccio/verdaccio/tree/master/conf

#

# 仓库的包默认存储的位置，默认是不存在的，当发布私有包之后会在 /root/.config/verdaccio 中存在
# path to a directory with all packages

storage: ./storage

# path to a directory with plugins to include

plugins: ./plugins

web:
  # 网页 title
  title: Verdaccio
  # comment out to disable gravatar support
  # gravatar: false
  # 包的排序 asc 降序 desc 升序
  # by default packages are ordercer ascendant (asc|desc)
  # sort_packages: asc
  # 是否开启暗黑模式
  # convert your UI to the dark side
  # darkMode: true
  # 网页 logo
  # logo: http://somedomain/somelogo.png
  # 网页 favicon
  # favicon: http://somedomain/favicon.ico | /path/favicon.ico
  # 网页最大连接数
  # rateLimit:
  #   windowMs: 1000
  #   max: 10000

# translate your registry, api i18n not available yet
# i18n:
# 国际化相关，同样404了。
# list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations

  # 支持 zh_CN
  #   web: en-US

auth:
  # 注册用户的信息存放位置
  htpasswd:
    file: ./htpasswd
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    # 默认可注册的用户是无限的，如果修改为 -1 则是不允许注册；限定用户方法如下
    # 1，先注册 n 个用户，然后修改配置文件为 -1，后续不允许注册
    # 2，开个 n 个用户注册接口
    # max_users: 1000

# a list of other known repositories we can talk to
# 如果私有库没有的话，去查找以下库。

uplinks:
  npmjs:
    url: https://registry.npmjs.org/

packages:
  # @*/ 是包的作用域 例如 @vue/cli 那么 @vue 则是这个包的作用域，前缀一般都是某个组织或者说某个公司，证明这是个内部包
  '@*/*':
    # scoped packages
    access: $all
    publish: $authenticated
    unpublish: $authenticated
    # 如果私有库没有的话，去 npm 查找查找库。
    proxy: npmjs
  # 普通的 npm 包
  '**':
    # 允许所有用户发布和访问包
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # 也可以指定指定 @xxx/xxx 类似的作用域
    # you can specify usernames/groupnames (depending on your auth plugin)
    # $all 所有人 $anonymous 只有匿名者可以操作（基本没用） $authenticated 认证用户（通过npm adduser 添加的用户。
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all

    # allow all known users to publish/publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated
    unpublish: $authenticated

     # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs

# You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.
# A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.
# WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.

server:
  keepAliveTimeout: 60

middlewares:
  audit:
    enabled: true

# log settings

logs: { type: stdout, format: pretty, level: http }
#experiments:

#  # support for npm token command
#  token: false
#  # disable writing body size to logs, read more on ticket 1912
#  bytesin_off: false
#  # enable tarball URL redirect for hosting tarball with a different server, the tarball_url_redirect can be a template string
#  tarball_url_redirect: 'https://mycdn.com/verdaccio/${packageName}/${filename}'
#  # the tarball_url_redirect can be a function, takes packageName and filename and returns the url, when working with a js configuration file
#  tarball_url_redirect(packageName, filename) {
#    const signedUrl = // generate a signed url
#    return signedUrl;
#  }

# This affect the web and api (not developed yet)

#i18n:
#web: en-US

listen: 0.0.0.0:4873

```

根据上面的配置内容我们举个 
```shell
packages:
 # 可以自定义包名的规则。代表 local- 开头的包，只有登录后才可以进行操作。
  'local-*':
    access: $authenticated
    publish: $authenticated
    unpublish: $authenticated
    proxy: npmjs
  # 表示私有库的所有人都可以发布，访问，撤销包。
  '**':
    access: $all
    publish: $all
    unpublish: $all
    proxy: npmjs

```
