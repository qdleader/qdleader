# 华为云centos服务器安装mysql

##  步骤：安装 MySQL8

在 root 目录下，安装 mysql 和 mysql-devel

```js
yum install mysql
yum install mysql-devel
```

、

##  安装 mysql-server
```shell
wget http://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm
rpm -ivh mysql80-community-release-el7-5.noarch.rpm
yum install mysql-community-server
```

## 安装成功后重启mysql服务
```js
service mysqld restart
```

## 设置密码
# 登录mysql并输入密码
```shell
mysql -u root -p
```

默认密码为空，直接回车

# mysql8 修改密码方式
```shell
alter user 'root'@'localhost' identified by '这里填你要的密码';
```

```js
// <!-- -- 允许访问所有数据库下的所有表 -->
mysql> GRANT ALL PRIVILEGES ON *.* TO 'yyy'@'%';

// <!-- -- 刷新权限 -->
mysql> flush privileges;
```

## 注意

service mysqld restart  时候如果报错

```js
// 输入
mkdir mysql-server
//  (创建这个文件夹，用来下载并安装文件)
// 3、输入
cd mysql-server
//  (进入文件夹)
// 4、输入
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm

//  (下载mysql的repo包，也可以windows上下载后传到linux的mysql-server里)
// 5、输入
rpm -ivh mysql-community-release-el7-5.noarch.rpm
//  (安装repo包)
// 6、输入
yum install mysql-server
```

然后重新执行 service mysqld restart
