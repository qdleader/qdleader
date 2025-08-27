在 CentOS 服务器上安装 MySQL 并配置新用户远程访问，可以按照以下步骤操作：

### 1. 安装 MySQL
首先确保系统已更新，然后安装 MySQL：

```bash
# 更新系统
sudo yum update -y

# 安装 MySQL 服务器
sudo yum install -y mysql-server

# 启动 MySQL 服务并设置开机自启
sudo systemctl start mysqld
sudo systemctl enable mysqld

# 查看 MySQL 运行状态
sudo systemctl status mysqld
```

### 2. 初始化 MySQL 安全设置
MySQL 安装后需要进行安全配置（设置 root 密码、删除匿名用户等）：

```bash
sudo mysql_secure_installation
```

按照提示进行操作：
- 设置 root 密码（输入 Y 后设置强密码）
- 移除匿名用户（输入 Y）
- 禁止 root 远程登录（输入 Y，我们之后会创建专门的远程用户）
- 删除 test 数据库（输入 Y）
- 重新加载权限表（输入 Y）

### 3. 创建新用户并配置远程访问
登录 MySQL 并执行以下 SQL 命令：

```bash
# 登录 MySQL（使用刚才设置的 root 密码）
mysql -u root -p
```

在 MySQL 命令行中执行：

```sql
-- 创建新用户（替换 username 和 password 为你的用户名和密码）
CREATE USER 'username'@'%' IDENTIFIED BY 'password';

-- 授予权限（根据需要调整权限范围，这里授予所有权限）
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;

-- 刷新权限
FLUSH PRIVILEGES;

-- 退出 MySQL
exit;
```

### 4. 配置 MySQL 允许远程连接
编辑 MySQL 配置文件，允许远程连接：

```bash
sudo vi /etc/my.cnf
```

找到 `bind-address` 配置项，将其注释掉或修改为 `0.0.0.0`：

```ini
# bind-address = 127.0.0.1  # 注释掉这行
```

保存并退出编辑器，然后重启 MySQL 服务：

```bash
sudo systemctl restart mysqld
```

### 5. 配置防火墙允许 MySQL 端口
默认 MySQL 使用 3306 端口，需要在防火墙上开放该端口：

```bash
# 开放 3306 端口
sudo firewall-cmd --zone=public --add-port=3306/tcp --permanent

# 重新加载防火墙配置
sudo firewall-cmd --reload
```

### 6. 测试远程连接
现在可以从远程计算机测试连接：

```bash
# 在本地计算机执行（替换 username、server_ip 为实际值）
mysql -u username -p -h server_ip
```

输入密码后如果能成功登录，说明配置完成。

**注意事项**：
- 生产环境中应避免使用 `%`（允许所有 IP 访问），而是指定具体的 IP 地址
- 根据实际需求调整用户权限，不要过度授权
- 确保使用强密码提高安全性