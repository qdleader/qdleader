# git 用不同账号提交不同的仓库
其实很简单，在每个仓库里面修改成局部的相应的username和email即可

git config  user.name “Your_username”

git config  user.email “Your_email”


这个是不会影响全局的，这样你就可以在这个仓库用这个账号直接提交，别的仓库用别的账号直接提交，不用来回登录换账号了，很好用




设置全局
```
# 1.查看git配置信息
$ git config --list




# 2.查看git用户名、密码、邮箱的配置
$ git config user.name
$ git config user.password
$ git config user.email


# 3.设置git用户名、密码、邮箱的配置
$ git config user.name "freedom"
$ git config user.password "123456"
$ git config user.email "1548429568@qq.com"
# 3.设置git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name 用户命
```
