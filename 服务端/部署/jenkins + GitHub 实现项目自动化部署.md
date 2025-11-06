

## github 生成 Personal Access Token

1、github –> 头像 –> Settings –> Developer settings –> Personal access tokens –> Generate new token

# 2 github 设置 GitHub webhooks（具体需要持续集成的项目），

到要构建的的项目下，settings -> Webhooks

设置Payload URL
 IP + 端口 + github-webhook
 如：
 http://118.12.14.42:8080/github-webhook

服务器 上安装git

// 监测是否安装了 git
$ rpm -qa | grep git

// 安装 git
$ yum install git -y
