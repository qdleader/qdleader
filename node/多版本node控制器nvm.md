```js
NVM：可以随时切换你电脑的node版本，方便的不得了呀！

## 安装

github上下载nvm-setup.zip安装包。
下载地址 https://github.com/coreybutler/nvm-windows/releases
安装包说明：
nvm-noinstall.zip：绿色免安装版，但使用时需进行配置。
nvm-setup.zip：安装版，推荐使用
选择nvm-setup.zip进行下载安装

## 注意事项：

> 安装路径不要有空格

## 正常安装过程

1.在安装nvm 之前呢，首先把你电脑上的node都删掉，找到node安装目录，把node的文件夹删掉，或在搜索栏里面搜node，有个node uninstall 点击卸载，然后再把环境变量中的node的路径和npm的路径都删掉

2.安装nvm 下载nvm-setup.zip 然后在c盘直接新建一个nvm文件夹，点击下一步出来的node路径也选这个nvm文件夹，然后直接安装。（我们直接在c盘或d盘装，会把nvm的路径直接自动加到系统path里面，也会避免一些权限不够的坑）

3.然后你用管理员身份运行cmd，输入nvm，出来一大串就说明你安装成功了

4.nvm install 16.11.1    下载成功后 nvm use 16.11.1 就ok了

## 使用

shell
nvm install <version>：下载相应版本node
nvm list：列出已有node版本
nvm use <version>: 使用特定node版本
nvm on：开启node.js版本管理
nvm off：关闭node.js版本管理
nvm node_mirror [url]：设置node镜像，默认是https://nodejs.org/dist/。如果不写url，则使用默认url,设置后可至安装目录settins.txt中查看,国内镜像地址https://npm.taobao.org/mirrors/node/
nvm npm_mirror [url]：设置npm镜像地址，默认是https://github.com/npm/cli/archive/,国内镜像地址：https://npm.taobao.org/mirrors/npm/
nvm uninstall <version>： 卸载指定版本node
nvm use [version] 使用指定版本node
nvm versoin: 显示nvm版本

## 常见问题
### 1、nvm安装node成功，但下载npm失败

原因：网络下载地址默认用国外的服务器
解决：修改nvm安装路径下，settings.txt中添加两行镜像地址：

node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/

### 2、nvm use [version]命令使用报 exit status 1:xxxx

原因： 安装目录中存在空格
解决：卸载重装，注意nvm安装路径中不要有空格出现

### 3、nvm use切换node成功，但执行node -v不是内部名外部命令

原因： nvm中node安装目录在环境变量中配置不正确
解决：
在nvm安装目录下新建nodejs空文件夹： D:\nvm\nodejs
在环境变量中，将%NVM_SYMLINK%指向地址改为上述地址
再次打开cmd， nvm use <version>使用特定特定版本node,测试node -v是否可行
配置环境变量(可通过 window+r —> sysdm.cpl —> 高级 —>环境变量)

### 4、nvm use [version]命令使用报 exit status 145:xxxx

解决

把之前的node和nvm都卸了，按照安装流程方法再走一遍即可
```
