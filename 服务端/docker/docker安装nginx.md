
## Docker 安装 Nginx
Nginx 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务 。


1、查看可用的 Nginx 版本
访问 Nginx 镜像库地址： https://hub.docker.com/_/nginx?tab=tags。
可以通过 Sort by 查看其他版本的 Nginx，默认是最新版本 nginx:latest。
你也可以在下拉列表中找到其他你想要的版本：


此外，我们还可以用 docker search nginx 命令来查看可用版本：
```
docker search nginx
```

### 2、取最新版的 Nginx 镜像
这里我们拉取官方的最新版本的镜像：

```js
$ docker pull nginx:latest
```

3、查看本地镜像
使用以下命令来查看是否已安装了 nginx：

```js
docker images
```


 3、创建Nginx配置文件 
启动前需要先创建Nginx外部挂载的配置文件（ /Users/docker/nginx/conf/nginx.conf）
之所以要先创建 , 是因为Nginx本身容器只存在/etc/nginx 目录 , 本身就不创建 nginx.conf 文件
当服务器和容器都不存在 nginx.conf 文件时, 执行启动命令的时候 docker会将nginx.conf 作为目录创建 , 这并不是我们想要的结果 。



# 创建挂载目录

```js
sudo mkdir -p /Users/docker/nginx/conf
mkdir -p /Users/docker/nginx/log
mkdir -p /Users/docker/nginx/html
```

 chmod 777 /Users/docker/

## 容器中的nginx.conf文件和conf.d文件夹复制到宿主机

```js
# 生成容器
docker run --name nginx -p 9001:80 -d nginx
# 将容器nginx.conf文件复制到宿主机
docker cp nginx:/etc/nginx/nginx.conf /Users/docker/nginx/conf/nginx.conf
# 将容器conf.d文件夹下内容复制到宿主机
docker cp nginx:/etc/nginx/conf.d /Users/docker/nginx/conf/conf.d
# 将容器中的html文件夹复制到宿主机
docker cp nginx:/usr/share/nginx/html /Users/docker/nginx/

```

删除了刚才的容器
docker rm -f nginx



```js
docker run \
-p 9002:80 \
--name nginx \
-v /Users/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /Users/docker/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /Users/docker/nginx/log:/var/log/nginx \
-v /Users/docker/nginx/html:/usr/share/nginx/html \
-d nginx:latest
```

命令	   描述
–name nginx	启动容器的名字
-d	后台运行
-p 9002:80	将容器的 9002(后面那个) 端口映射到主机的 80(前面那个) 端口
-v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf	挂载nginx.conf配置文件
-v /home/nginx/conf/conf.d:/etc/nginx/conf.d	挂载nginx配置文件
-v /home/nginx/log:/var/log/nginx	挂载nginx日志文件
-v /home/nginx/html:/usr/share/nginx/html	挂载nginx内容
nginx:latest	本地运行的版本
\	shell 命令换行








测试

curl 127.0.0.1:9002




5、安装成功
最后我们可以通过浏览器可以直接访问 9002 端口的 nginx 服务：



## 其他

我们想要改变配置文件nginx.conf ，也可以进入容器去修改：


### 进入容器
```js
docker exec -it nginx bash
```

nginx.conf配置文件在 /etc/nginx/  下面，但是你使用vim nginx.conf 或者vi nginx.conf

会发现vi或者vim命令没有用，解决办法：apt-get  update  完成之后 apt-get install vim

此时你就可以自己定制nginx.con文件了，改好配置文件之后重启容器，步骤，先把容器停了


docker stop nginx  然后重启 docker start nginx


碰到nginx 403 时候，可能是映射文件的权限不够

  chmod -R 755 /Users/docker/qiankunnginx/html