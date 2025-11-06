## 配置华为euler仓库源

```js
$ cd /etc/yum.repos.d
$ wget https://repo.huaweicloud.com/repository/conf/openeuler_x86_64.repo
$ yum clean all
$ yum makecache
```

## 安装docker
```js
$ yum -y install docker
```

## 启动docker
```js
$ sudo service docker start
$ docker --version
```

Docker version 18.09.0, build c0d3c43

## 开机自启动
```js
sudo systemctl enable docker
```

## docker 启动
```js
systemctl start docker
```

## docker 停止
```js
systemctl stop docker
```

## docker 重启
```js
systemctl restart docker
```

## 卸载docker
```js
$ sudo yum remove docker-ce docker-ce-cli containerd.io
```
