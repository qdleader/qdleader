# git 分支命名规范
git 分支分为集成分支、功能分支和修复分支，分别命名为 develop、feature 和 hotfix。

> master（主分支，永远是可用的稳定版本，不能直接在该分支上开发）
> develop（开发主分支，所有新功能以这个分支来创建自己的开发分支，该分支只做只合并操作，不能直接在该分支上开发）
> feature-xxx（功能开发分支，在develop上创建分支，以自己开发功能模块命名，功能测试正常后合并到develop分支）
> feature-xxx-fix(功能bug修复分支，feature分支合并之后发现bug，在develop上创建分支修复，之后合并回develop分支。PS:feature分支在申请合并之后，未合并之前还是可以提交代码的，所以feature在合并之前还可以在原分支上继续修复bug)
> hotfix-xxx（紧急bug修改分支，在master分支上创建，修复完成后合并到 master）
