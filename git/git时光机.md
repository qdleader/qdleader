# git 版本回退
```
$ git log

```




git log命令显示从最近到最远的提交日志

如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数：

```
 git log --pretty=oneline
```

> HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。

> 穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。

> 要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。



```

git reset --hard 1094a  //返回到指定某一版本
```


Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，也就是最新的提交1094adb...（注意我的提交ID和你的肯定不一样），上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。

```
git reset --hard HEAD^ //返回上一个版本
```



如果只是commit 提交的信息我们想改，git reset --soft head^ 就会回到我们之前add的状态，可以继续修改和提交了。

```
git reset --soft head^ 软撤销，head^是指当前commit，可以改成任意commit id
git reset --hard head^ 硬撤销，彻底丢掉这次提交的全部修改
git reset 不加参数，本次修改就会回到add之前的状态
```
