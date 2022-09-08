
## 下载一个项目和它的整个代码历史

```
git clone [url]
```


## 列出所有本地分支

 ```
git branch
```


## 新建一个分支，但依然停留在当前分支

 ```
 git branch [branch-name]
 ```


## 新建一个分支，并切换到该分支

```
git checkout -b [branch-name]
```


## 合并指定分支到当前分支

 ```
git merge [branch-name]
```


## 添加当前目录的所有文件到暂存区
 ```
 git add .
```

## 提交暂存区到仓库区

 ```
git commit -m 'XXX'
```

## 取回远程仓库的变化，并与本地分支合并
```
git pull origin master
```


## 上传本地指定分支到远程
```
git push origin master
```



## 切换到指定分支，并更新工作区

```
git checkout [branch-name]
```


## 显示当前分支的版本历史
```
git log
```


## 查看当前的用户名
```
git config user.name

git config user.email
```

#### 使用一次新的commit，替代上一次提交
#### 如果代码没有任何新变化，则用来改写上一次commit的提交信息
```
git commit --amend -m [message]
```

## 修改用户名和邮箱：

```

git config --global user.name “Your_username”

git config --global user.email “Your_email”

```

## git 只提交某一文件夹下的文件

```
git status ./           查看这个文件夹下的文件状态
git add ./*             把这个文件下的所有应该加入追踪的，加入到暂存区
git commit -m 日志描述 ./           把这个文件夹下提交的修改commit到本地库
git push                push到远程库

```
