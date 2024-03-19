单个commit只需要git cherry-pick commitid

多个commit 只需要git cherry-pick commitid1..commitid100

注意，不包含第一个commitid ， 即  git cherry-pick (commitid1..commitid100]


> 不光是摘取比的分支的commit，本地分枝 摘取远程本分枝的commit也是可以的