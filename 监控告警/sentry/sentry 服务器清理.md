# sentry 服务器清理

df -h

查看磁盘使用情况

或者使用更直观的工具（如果已安装）：

```bash
ncdu /
```

如果没有安装`ncdu`，可以使用`apt install ncdu`（Debian/Ubuntu）或`yum install ncdu`（CentOS/RHEL）来安装。

清理 docker 日志

```js
sudo docker exec sentry-self-hosted-web-1 sentry cleanup --days 30
```

```js
sudo find /var/lib/docker/containers/ -name "*-json.log" -exec truncate -s 0 {} \;
```
