
1. 丢弃刚才修改代码 （git status 查出的那些）



```
git checkout -- ./
```




2.丢弃本分支的修改

　　下面的方法直接将当前分支相对上一次提交时的修改丢弃，从而可以从当前分支切换至其他分支

　　通过 git checkout -f 命令强制切换分支





  ```
    git checkout -f test        //强制切换至 test 分支，丢弃当前分支的修改
  ```  
