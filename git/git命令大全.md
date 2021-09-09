## 常用命令大全

我们我们开发时候在工作区，当我们把修改，add之后，修改内容会被提到暂存区，当我们commit 之后修改的内容
会被提到我们本地的仓库（repository）,当我们push之后，会被提到远程仓库（remote）

```
Workspace：工作区
Index / Stage：暂存区
Repository：仓库区（或本地仓库）
Remote：远程仓库
```


# 一、新建代码库

#### 在当前目录新建一个Git代码库
```
 git init
```
#### 新建一个目录，将其初始化为Git代码库
```
git init [project-name]
```
#### 下载一个项目和它的整个代码历史
```
git clone [url]
```

# 生成ssh
```
git config --global user.name "yk"
添加邮箱
git config --global user.email "youremail@163.com"
```
#### 生成公钥
```
生成ssh-keygen -t rsa -C "你的邮箱"  连续回车  
ssh-keygen -t rsa
生成公钥
```
> （然后有个C盘的路径，沿着那个路径找到那个文件，把里面的内容粘贴过来，在GitHub上那个ssh，设置秘钥，密码粘进去）

# 添加到暂存区

#### 添加指定文件到暂存区
```
git add [file1] [file2] ...
```
#### 添加指定目录到暂存区，包括子目录
```
$ git add [dir]
```
#### 添加当前目录的所有文件到暂存区
```
$ git add .
```

##### 添加每个变化前，都会要求确认 对于同一个文件的多处变化，可以实现分次提交
```
git add -p
```

#### 删除工作区文件，并且将这次删除放入暂存区
```
git rm [file1] [file2] ...
```

#### 改名文件，并且将这个改名放入暂存区
```
 git mv [file-original] [file-renamed]
```



# 代码提交
#### 提交暂存区到仓库区
```
 git commit -m [message]
```
#### 提交暂存区的指定文件到仓库区
```
git commit [file1] [file2] ... -m [message]
```

#### 使用一次新的commit，替代上一次提交
#### 如果代码没有任何新变化，则用来改写上一次commit的提交信息
```
git commit --amend -m [message]
```

# 分支

#### 查看所有分支
```
git branch -a
```

#### 查看所有远程分支
```
git branch -r
```
#### 查看所有本地分支
```
git branch
```
#### 新建一个分支，但依然停留在当前分支
```
git branch [branch-name]
```

#### 新建一个分支，并切换到该分支
```
git checkout -b [branch]
```

#### 切换到指定分支，并更新工作区
```
git checkout [branch-name]
```

#### 切换到上一个分支
```
git checkout -
```

#### 合并指定分支到当前分支
```
 git merge [branch]
```


#### 删除本地分支
```
git branch -d <branchName>
```

#### 强制删除本地分支
```
git branch -D <branchName>
```

#### 删除远程分支
```
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```


#### 新建一个分支，与指定的远程分支建立追踪关系
```
git branch --track [branch] [remote-branch]
```

>git branch -d 删除分支，会在删除前检查merge状态，避免误删没有合并的分支。
git branch -D 是git branch --delete --force的简写，它会强制删除该分支。
如果想要删除远程分支以及追踪分支需使用: git push --origin -delete branch



# 查看信息

#### 显示有变更的文件
```
 git status
```

#### 显示当前分支的版本历史
```
git log
```

如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数：

```
 git log --pretty=oneline
 ```
#### 搜索提交历史，根据关键词
```
$ git log -S [keyword]
```

#### 显示某个文件的版本历史，包括文件改名
```
 git log --follow [file]
git whatchanged [file]

```

#### 显示过去5次提交
```
git log -5 --pretty --oneline
```

#### 显示暂存区和工作区的差异

```
git diff
```


#### 显示当前分支的最近几次提交
```
 git reflog
```



# 远程同步
#### 上传本地指定分支到远程仓库
```
git push [remote] [branch]
```

#### 强行推送当前分支到远程仓库，即使有冲突
```
git push [remote] --force
```

#### 推送所有分支到远程仓库
```
git push [remote] --all
```

#### 下载远程仓库的所有变动
```
git fetch [remote]
```

#### 显示所有远程仓库
```
git remote -v
```

#### 增加一个新的远程仓库，并命名
```
git remote add [shortname] [url]
```

#### 取回远程仓库的变化，并与本地分支合并
```
git pull [remote] [branch]
```



# 撤销

#### 恢复暂存区的指定文件到工作区
```
git checkout [file]
```

#### 恢复暂存区的所有文件到工作区
```
git checkout .
```

#### 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
```
git reset [file]
```

#### 重置暂存区与工作区，与上一次commit保持一致
```
git reset --hard
```

#### 恢复某个commit的指定文件到暂存区和工作区
```
git checkout [commit] [file]
```


#### 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
```
git reset [commit]
```

#### 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
```
git reset --hard [commit]
```

```
git reset --hard 1094a  //返回到指定某一版本
```


>Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，也就是最新的提交1094adb...（注意我的提交ID和你的肯定不一样），上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。

```
git reset --hard HEAD^ //返回上一个版本
```

#### 暂时将未提交的变化移除，稍后再移入
```
$ git stash
$ git stash pop
```


### 拉取远程所有分支


```



git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
```
## 首先同步所有远程分支，如上：

 

### 将本地所有分支与远程保持同步 
```
git fetch --all
```
### 最后拉取所有分支代码
```
 git pull --all

```
