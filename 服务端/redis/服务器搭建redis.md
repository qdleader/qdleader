# 服务器搭建redis

## 1.获取redis资源
```js
wget http://download.redis.io/releases/redis-4.0.8.tar.gz
```

## 2.解压
```js
tar xzvf redis-4.0.8.tar.gz
```
## 3.安装
```js
cd redis-4.0.8
make
cd src
make install PREFIX=/usr/local/redis
```

## 4.移动配置文件到安装目录下
```js
cd ../
mkdir /usr/local/redis/etc
mv redis.conf /usr/local/redis/etc
```

## 5.配置redis为后台启动
```js
vi /usr/local/redis/etc/redis.conf //将daemonize no 改成daemonize yes
```
## 6.将redis加入到开机启动
```js
vi /etc/rc.local //在里面添加内容：/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf (意思就是开机调用这段开启redis的命令)
```

## 7.开启redis
```js
/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf 
```
 
## 8.将redis-cli,redis-server拷贝到bin下，让redis-cli指令可以在任意目录下直接使用
```js
cp /usr/local/redis/bin/redis-server /usr/local/bin/
cp /usr/local/redis/bin/redis-cli /usr/local/bin/
```

 
## 9.设置redis密码
a.运行命令：redis-cli
b.查看现有的redis密码(可选操作，可以没有)
　　运行命令：config get requirepass 如果没有设置过密码的话运行结果会如下图所示
c.设置redis密码
    运行命令：config set requirepass ****(****为你要设置的密码)，设置成功的话会返回‘OK’字样
d.测试连接
　　重启redis服务
　　//（redis-cli -h 127.0.0.1 -p 6379 -a ****（****为你设置的密码））
　　输入 redis-cli 进入命令模式，使用 auth '*****' （****为你设置的密码）登陆　　　　　 

## 10.让外网能够访问redis
复制代码a.配置防火墙: 
```js
 firewall-cmd --zone=public --add-port=6379/tcp --permanent //（开放**6379**端口）

systemctl restart firewalld //（重启防火墙以使配置即时生效）
```
查看系统所有开放的端口：firewall-cmd --zone=public --list-ports

b.此时 虽然防火墙开放了6379端口，但是外网还是无法访问的，因为redis监听的是127.0.0.1：6379，并不监听外网的请求。

（一）把文件夹目录里的redis.conf配置文件里的bind 127.0.0.1前面加#注释掉

（二）命令：redis-cli连接到redis后，通过 config get  daemonize和config get  protected-mode 是不是都为no，如果不是，就用config set 配置名 属性 改为no。


## 常用命令　　
　　redis-server /usr/local/redis/etc/redis.conf //启动redis
　　pkill redis  //停止redis
## 卸载redis：
　　　　rm -rf /usr/local/redis //删除安装目录
　　　　rm -rf /usr/bin/redis-* //删除所有redis相关命令脚本
　　　　rm -rf /root/download/redis-4.0.4 //删除redis解压文件夹
## 启动redis:
两种方式：
```js
redis-server &
```
加上`&`号使redis以后台程序方式运行

或者是
```js
redis-server
```
检测后台进程是否存在
```js
ps -ef |grep redis
```

检测6379端口是否在监听
```js
netstat -lntp | grep 6379
```

有时候会报异常

原因: Redis已经启动
解决: 关掉Redis,重启即可
```js
redis-cli shutdown
redis-server
```

然后你就能看到Redis愉快的运行了.
使用redis-cli客户端检测连接是否正常
```js
redis-cli
>127.0.0.1:6379> keys *
>(empty list or set)
>127.0.0.1:6379> set key "hello world" 
>OK
>127.0.0.1:6379> get key
>"hello world"
```
## 停止redis:
使用客户端
```js
redis-cli shutdown
```
因为Redis可以妥善处理SIGTERM信号，所以直接kill -9也是可以的
```js
kill -9 PID
```

#启动redis服务端
```js
$ src/redis-server
```

#启动redis客户端
```js
$ src/redis-cli
```

查看linux上面是否有安装redis,redis启动
检测是否有安装redis-cli和redis-server
```js
[root@localhost bin]# whereis redis-cli
redis-cli: /usr/bin/redis-cli

[root@localhost bin]# whereis redis-server
redis-server: /usr/bin/redis-server
```

Linux系统下设置redis的密码

1、进入redis操作的命令行
运行命令：redis-cli
2、查看现有的redis密码(可选操作，可以没有)
运行命令：config get requirepass如果没有设置过密码的话运行结果会如下图所示


3、设置redis密码
运行命令：config set requirepass ****(****为你要设置的密码)，设置成功的话会返回‘OK’字样

## 4、重启redis服务
ctrl+C退出当前的命令行模式后运行命令：
redis-cli -h 127.0.0.1 -p 6379 -a ****（****为你心设置的密码）  


redis-cli -h 121.36.47.43 -p 6379