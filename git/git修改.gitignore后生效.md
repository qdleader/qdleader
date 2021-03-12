




在使用git的时候我们有时候需要忽略一些文件或者文件夹。我们一般在仓库的根目录创建.gitignore文件


在提交之前，修改.gitignore文件，添加需要忽略的文件。然后再做add  commit push 等


但是有时在使用过称中，需要对.gitignore文件进行再次的修改。这次我们需要清除一下缓存cache，才能是.gitignore 生效。

具体做法：

```
git rm -r --cached .  #清除缓存
git add . #重新trace file
git commit -m "update .gitignore" #提交和注释
git push origin master #可选，如果需要同步到remote上的话
```


这样就能够使修改后的.gitignore生效。
