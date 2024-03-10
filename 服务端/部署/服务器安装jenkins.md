

我们先进入到jenkins官网(https://www.jenkins.io/download/)选择对应的版本进行下载

## 下载 jenkins
```
 sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
```

sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key



2、安装完成后，使用我们yum工具分别输入以下命令进行安装jenkins（其中需要输入Y继续安装）
```js
yum install fontconfig java-11-openjdk
yum install jenkins

```


 3、查看是否安装成功

通过输入命令： rpm -qa | grep jenkins 查看是否输入命令

[root@anjing ~]# rpm -qa | grep jenkins
jenkins-2.318-1.1.noarch


## 4、启动jenkins

输入命令启动jenkins： sudo service jenkins start 

[root@anjing ~]# sudo service jenkins start

此时，输入你的ip：8080 就可以访问了


## Jenkins常用命令
a、启动Jenkins命令

# 重启 Jenkins
service jenkins restart

# 停止 Jenkins
service jenkins stop


b、修改jenkins端口号

通过vi命令读取jenkins的配置文件： vi /etc/sysconfig/jenkins 

找到“JENKINS_PORT”的文字，将后面的端口号进行修改。修改完成后进行保存，端口号修改后，也需要到云端服务器管理开放对应的端口。



## 4、根据界面提示信息去查看密码
$ cat /var/lib/jenkins/secrets/initialAdminPassword






## 卸载

第一种：
卸载yum方式安装的jenkins

service jenkins stop

yum -y remove jenkins