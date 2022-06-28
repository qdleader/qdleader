```
fatal: unable to access 'https://github.com/qdleader/qdleader.git/': Failed to connect to github.com port 443: Timed out

```


出现这个报错：


#解决方式：

1、连接超时，首先找到git的安装目录，找到/etc/ssh/ssh_config文件

>在cmd中输入：   where git        查看git的安装目录

复制这几句到该文件最后

```
Host github.com

User git

Hostname ssh.github.com

PreferredAuthentications publickey

IdentityFile ~/.ssh/id_rsa

Port 443
```

成功解决问题。



## git push时出现 fetal:unable to access “https://github.com/...“错误

报 443时候

```
git config --global --unset http.proxy   #取消http代理
git config --global --unset https.proxy  #取消https代理

```

然后新开一个命令窗口，再push一下就可以啦
