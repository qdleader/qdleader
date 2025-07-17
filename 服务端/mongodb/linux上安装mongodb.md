# linux上安装mongodb

MongoDB的安装过程
1.第一步下载mongodb的安装包

```js
cd /usr/local/

 mkdir mongodb
 cd mongodb
 mkdir data
 mkdir logs
 cd logs
 touch mongodb.log

```

```js
mkdir -p soft/mongodb
```



```js
cd  /soft/mongodb



```

```js
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel80-5.0.4.tgz

tar -zxvf mongodb-linux-x86_64-rhel80-5.0.4.tgz  


```





```js
mv mongodb-linux-x86_64-rhel80-5.0.4  /usr/local/mongodb/
```


5.配置环境变量 
   命令如下：
```js
export MONGODB_HOME=/usr/local/mongodb
export PATH=$MONGODB_HOME/bin:$PATH
```

应用下配置文件

```js
source /etc/profile

```



添加 MongoDB 配置文件 
常用的配置选项：

bind_ip：指定MongoDB监听的IP地址。默认为127.0.0.1，表示只监听本地回环地址。如果你希望MongoDB能够通过网络访问，可以将该选项设置为0.0.0.0，表示监听所有可用的IP地址。

port：指定MongoDB监听的端口号。默认为27017，通常不需要修改。

dbpath：指定MongoDB数据文件存储的路径。默认为/var/lib/mongodb。

logpath：指定MongoDB日志文件的路径。默认为/var/log/mongodb/mongod.log。

logappend：指定是否在日志文件末尾追加日志。默认为false，表示每次启动MongoDB时，会清空日志文件。

journal.enabled：指定是否启用Journaling，用于数据持久性和恢复。默认为true，建议保持默认值。

storage.wiredTiger.engineConfig.cacheSizeGB：指定WiredTiger存储引擎的缓存大小，单位为GB。默认为总系统内存的一半，建议根据实际情况调整。

security.authorization：指定是否启用身份验证。默认为disabled，表示不启用身份验证。在生产环境中，建议将该选项设置为enabled，并配置合适的用户和角色权限。

replication.replSetName：指定复制集的名称。默认为空，表示不启用复制集。如果需要使用复制集功能，可以将该选项设置为一个非空的名称。

net.maxIncomingConnections：指定MongoDB最大允许的入站连接数。默认为65536，根据实际情况进行调整。

processManagement.fork：指定是否在后台运行MongoDB进程。默认为true，表示在后台运行。如果需要在前台运行，可以将该选项设置为false。

touch /usr/local/mongodb/etc/mongodb.conf


mongodb.conf的内容
 ```js
dbpath=/usr/local/mongodb/data
 
logpath=/usr/local/mongodb/logs/mongodb.log
 
logappend=true
 
port=27017 
 
bind_ip=0.0.0.0
 
fork=true 
 
#auth=true 
 
#bind_ip=0.0.0.0 
```

7.启动mongodb服务
命令如下：
cd usr/local/mongodb/mongodb-linux-x86_64-rhel80-5.0.4/bin
```js
./mongod --config /usr/local/mongodb/etc/mongodb.conf
```


启动服务之后测试，进入数据库:
./mongo localhost:27017

开放防火墙的 27017 端口



四、MongoDB用户管理
创建用户
切换到admin数据库：
```js
use admin
```
创建管理员admin：
```js
db.createUser({ user: "admin", pwd: "123456", roles: [
  { role: "readWriteAnyDatabase", db: "admin" },
  { role: "userAdminAnyDatabase", db: "admin" },
  { role: "dbAdminAnyDatabase", db: "admin" }
]});
```

- 参数释义：
    * roles：数组形式，配置具体权限
        + `role: "readWriteAnyDatabase"`表示有读写任意数据库的权限
        + `db: "admin"`，表示：当前权限只对`admin`数据库生效
- `admin`数据库，是 MongoDB 的管理级的特殊数据库，是有特殊意义的。
- 所以`readWriteAnyDatabase`这个权限虽然设置给了`admin`数据库，但实际上，`admin`数据库里还拥有`readWriteAnyDatabase`这个权限的`admin`用户，所以，该用户对任意数据库都具有读写的功能，不只局限在`admin`数据库。
- **注意**：只有`admin`数据库，才有`readWriteAnyDatabase`权限，如果是自己创建的数据库，无法为用户设置`readWriteAnyDatabase`权限，会报错该数据库没有这个权限的用户。

创建超级管理员root：
```js
db.createUser({ user: "root", pwd: "123456", roles: [
  { role: "root", db: "admin" }
]});
```

- `root`权限也只能放在`admin`数据库内才能生效
- `root`是最高权限，可以做任何事情

创建普通用户zhangsan：
```js
db.createUser({ user: "zhangsan", pwd: "123456", roles: [
  { role: "readWrite", db: "school" },
  { role: "userAdmin", db: "school" },
  { role: "readWrite", db: "myBlog" },
  { role: "userAdmin", db: "myBlog" }
]});
```

MongoDB常用权限
read：允许读取指定数据库中数据的权限。
readWrite：允许读、写指定数据库中数据的权限。
dbAdmin：允许对指定数据库中执行管理函数的权限，如索引创建、删除，查看统计或访问 system.profile。
userAdmin：允许对指定数据库执行用户管理的权限，比如创建、删除和修改用户。
dbOwner：允许对指定数据库执行任何管理操作。该角色结合了readWrite 、 dbAdmin和userAdmin角色授予的权限。
**readAnyDatabase**
只对admin数据库可用，授予用户对所有数据库的read权限。
readWriteAnyDatabase：
只对admin数据库可用，授予用户对所有数据库的readWrite权限。
userAdminAnyDatabase：
只对admin数据库可用，授予用户对所有数据库的userAdmin权限。
dbAdminAnyDatabase：
只对admin数据库可用，授予用户对所有数据库的dbAdmin权限。
root：
只对admin数据库可用。超级账号，超级权限。
修改密码
```js
db.updateUser("用户名", {pwd: "新密码"})
```

删除用户
```js
db.dropUser("用户名")
```
