# git拉去远程库获取不到所有分支

<!-- 你现在 在dev 上 要切换到远程的$  release/v4.9 -->
## 方法1
> git checkout release/v4.9

> git pull
```
此时 你 git pull 时候 会报


There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> release/v4.9

```

<!-- 此时 把你本地的关联到 远程即可 -->

##  解决办法：

```
git branch --set-upstream-to=origin/release/v4.9  release/v4.9

```

> 解释：将远程的v1.12分支与本地的v1.12建立连接，以后在本地v1.12分支pull和push的时候就不需要指定远程分支的名称直接进行git push和git pull 操作即可






## 方法2

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
此时你已经看到你要切换的分支了，直接切就可以了
```
git checkout release/v4.9
```
