
 
## 环境准备

基于阿里云服务器Linux的CentOS7

且确保已经安装了gcc相关环境
```js
yum -y install gcc
yum -y install gcc-c++

```

一、查看官方文档官网地址：[!https://www.docker.com/]

### 1、先卸载旧版本
```js
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

### 2、安装需要的软件包
```js
yum install -y yum-utils
```

### 3、配置阿里云镜像仓库
# 使用国内阿里云的
```js
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 4、更新yum软件包索引
```js
yum makecache fast
```

### 5、安装Docker CE
# ce是社区版，ee是企业版
```js
yum install docker-ce docker-ce-cli containerd.io
```

### 6、启动Docker
```js
systemctl start docker
```

### 7、测试命令
```js
docker version #查看版本信息，是否安装成功
```

### 8、运行hello world
```js
docker run hello-world
```

### 9、查看下载的镜像
```js
docker images
```

### 其他命令
```js

systemctl start docker     #运行Docker守护进程
systemctl stop docker      #停止Docker守护进程
systemctl restart docker   #重启Docker守护进程
systemctl enable docker    #设置Docker开机自启动
systemctl status docker    #查看Docker的运行状态

```
