## 为什么要搭建私有仓库？

日常开发中我们肯定会封装一些通用组件，大部分情况下都会存在于 components 目录下；试想一下如果我们有两个系统 A 和 B，此时这两个系统都要用到的组件我们该如何封装呢？

这种情况下我们还是开发一个包托管到 npm 比较靠谱，随用随下载。但是这些组件有一定的隐私性，我们又不想让别人看到。




我们库里的组件，我们要怎么用呢

很简单
切换npm 下载源为本地服务器地址
-- 查看当前地址：
npm config get registry
https://registry.npmjs.org/
  
npm config set registry http://vuereact.top:4873

 然后正常的的去install 即可

 npm i test



结束





 常用的镜像地址

-- 设置当前地址（设置为淘宝镜像）
npm config set registry http://registry.npmmirror.com/
 
-- 设置当前地址（设置为默认地址）
npm config set registry https://registry.npmjs.org/






## nrm 管理 npm 源
nrm 可以很简单的切换多个 npm 原地址。npm, cnpm ... ... 下面简单罗列 nrm 中常用的一些指令。

```shell
npm install -g nrm

```


| 参数 | 默认值 | 示例描述| 
| --------   | :-----:  | :----:  |
| ls  | nrm ls | 列出所有的源地址 | 
| use [source] | nrm use cnpm | 切换到指定的源 | 
| add [resigtry] [url] | nrm add test http://localhost:8080 | 添加源 |
| del [resigtry] | nrm del test | 删除源 | 

