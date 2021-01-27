# 多人协作

图形化工具有很多，我们下载后直接用就行，现在我们主要说一下命令行的git 的使用。


下面我们说一下，在工作常见的多人协作使用命令行场景：
> 假设现在有三个人，A，B都是开发，C是负责人。
任务需求到达，A来开发登录板块。B来开发注册板块。


**1**
A 首先把git 项目克隆到本地，（就一开始没有项目时候使用一次即可）

```
git clone http//XXX

```

cd 到下载的这个文件夹，进入的默认是master分支。

A 同学开发的是login板块，所以，A新建了个分支来开发。

```
git checkout -b feature-login

```
此时新建了个feature-login的分支，并且当前分支就是feature-login分支了，

当A 在分支修改完后就直接提交
```
git status //看看自己改了哪些文件
```

```
git add --all或 git add .
git commit -m "登录板块开发完毕"

git push origin feature-login
```

**2**
B 同学开发与A同理

**3**
当A与B都已经开发完毕了，C出场了

C 合并代码

C首先合并A代码
```
git fetch  //把线上所有的分支都下载下来

git branch //查看有几条分支

git checkout feature-login //转到feature-login分支

git pull origin feature-login  //把feature-login代码下载下来

git checkout master  //转到master分支

git merge feature-login  //将feature-login代码合并到master分支上来

```

同理再合并B代码

merge时候有时候会冲突，就进入文件把冲突解决掉，再merge就可以了。

等都合并完了，C再正常的提交一下，master分支，即可！

```
git status
git add .
git commit -m "添加登录注册功能"
git push origin master
```


**以上就是多人协作啦**


## 多人协作常见意外情况

开发一开始，你忘了新建分支。但此时，你已经在master分支上开发了半天了，写了好多代码。

如果你现在新建分支是不可以了，你得先提交，但那不就提到master分支了吗。。。。

### 如何解决
```
git statsh //把已经修改的代码暂存到另外一个地方

```
现在你再切换分支就可以了
```
git checkout -b new-feature  //切换到new-feature分支

git stash pop //把修改的释放出来

```

然后正常那个提交即可

```
git add .
git commit -m "新增XX"
```
