1、使用docker拉取minio的镜像
docker pull minio/minio

注意：如果没声明版本的话，默认拉取最新版本

2、查看minio镜像是否拉取成功
docker images

3、启动docker容器
```ts
docker run -d --name minio   #-d后台运行 --name 容器的名称
-p 5000:9000 \ #新版的minio向外暴露了两个端口号 5000端口 外界上传下载所调用的API接口
-p 5001:9001 \ #9001控制台端口，通过界面操作minio
-v /www/server/docker/minio/config:/root/.minio \ #将minio的配置映射到宿主机上
-v /www/server/docker/minio/data:/data # 将minio的数据映射到宿主机上
-e "MINIO_ROOT_USER=root" \ #访问的账号
-e "MINIO_ROOT_PASSWORD=Yang1314"  \ #访问的密码
minio/minio server /data \ # 启动服务
--console-address ":5001" #静态端口号
```

```js

docker run -d \
  -p 9000:9000 \
  -p 9001:9001 \
  --name minio1 \
  -v /Users/docker/minio/data:/data \
  -v /Users/docker/minio/config:/root/.minio \
  -e "MINIO_ROOT_USER=root" \
  -e "MINIO_ROOT_PASSWORD=Yang1314" \
  minio/minio server /data --console-address ":9001"
```

注意：启动时与以前的版本有很大的区别，新版本这里暴露了两个端口号，两个端口号分工明确，而且启动时需要指明静态端口号，用来访问控制台

4、查看容器是否正常启动
docker ps

5、启动正常后即可通过公网ip+静态端口号访问控制台
