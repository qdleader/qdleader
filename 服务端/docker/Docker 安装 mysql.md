# docker 中下载 mysql
docker pull mysql:8

# 启动
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql




# 进入容器
docker exec -it mysql bash


# 登录mysql by 密码123456
 mysql -h localhost -u root -p


# 添加远程登录用户

mysql> create user 'yyy'@'%' identified by '123456';

<!-- -- 允许访问所有数据库下的所有表 -->
mysql> GRANT ALL PRIVILEGES ON *.* TO 'yyy'@'%';


