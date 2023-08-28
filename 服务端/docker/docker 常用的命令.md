
docker 查看所有容器
```js
docker ps -a
```



停止容器，使用

docker stop MyContainerName；

删除容器，使用

docker rm MyContainerName；




命令行进入容器

```js
docker exec -it containername /bin/bash
```