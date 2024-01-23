
```js
docker network create qdnet
```


```js
sudo su
cd /Users
mkdir data
mkdir plugins

chmod 777 data
chmod 777 plugins
```

```js
docker run -d \
	--name es \
    -e "ES_JAVA_OPTS=-Xms256m -Xmx256m" \
    -e "discovery.type=single-node" \
    -v /Users/data:/usr/share/elasticsearch/data \
    -v /Users/plugins:/usr/share/elasticsearch/plugins \
    --privileged \
    --network qdnet \
    -p 9200:9200 \
    -p 9300:9300 \
elasticsearch:7.12.1

```

命令说明：

-e "cluster.name=es-docker-cluster"：设置集群名称
-e "http.host=0.0.0.0"：监听的地址，可以外网访问
-e "ES_JAVA_OPTS=-Xms512m -Xmx512m"：内存大小
-e "discovery.type=single-node"：非集群模式
-v es-data:/usr/share/elasticsearch/data：挂载逻辑卷，绑定elasticsearch的数据目录
-v es-logs:/usr/share/elasticsearch/logs：挂载逻辑卷，绑定elasticsearch的日志目录
-v es-plugins:/usr/share/elasticsearch/plugins：挂载逻辑卷，绑定elasticsearch的插件目录
--privileged：授予逻辑卷访问权
--network qd-net ：加入一个名为qd-net的网络中
-p 9200:9200：端口映射配置




## 安装 kibana

```js

docker run -d \
--name kibana1 \
-e ELASTICSEARCH_HOSTS=http://121.36.47.43:9200 \
--network qdnet \
-p 5601:5601  \
kibana:7.12.1

```

这里等待个10秒钟不要着急

如果是m1电脑，下载失败
加上 --platform linux/amd64 \

```js
docker run -d \
--name kibana \
-e ELASTICSEARCH_HOSTS=http://121.36.47.43:9200 \
--network qdnet \
-p 5601:5601  \
--platform linux/amd64 \
kibana:7.12.1
```




Kibana中文配置

```js
#进入容器
docker exec -it kibana /bin/bash

#进入配置文件目录
cd /usr/share/kibana/config

#编辑文件kibana.yml
vi kibana.yml

#在最后一行添加如下配置
i18n.locale: zh-CN

#保存退出
exit

#并重启容器
docker restart kibana


```


## IK分词器安装


```js
GET /_analyze
{
  "analyzer": "standard",
  "text": "qdleader，带你打开通往梦想的门！"
}
```



IK分词器集成ElasticSearch下载地址[https://github.com/medcl/elasticsearch-analysis-ik/releases/tag/v7.12.1]


我们只需要将上面elasticsearch-analysis-ik-7.12.1拷贝到ElasticSearch的plugins目录中即可，但由于当前服务采用的是docker安装，所以需要将文件拷贝到docker容器的plugins目录才行。

操作如下：
properties复制代码#为了方便配置，我们将elasticsearch-analysis-ik-7.12.1改成ik文件夹


```js
mv elasticsearch-analysis-ik-7.12.1 ik

#将ik文件夹拷贝到esdata容器中

docker cp ik es:/usr/share/elasticsearch/plugins

#重启容器
docker restart es
```



有时候  docker restart es  在浏览器里面当闻不到了，那就试试

docker start -a es  看看报错输出


## 分词测试

IK分词器包含两种模式：

```js
ik_smart：最少切分


ik_max_word：最细切分
```


前面使用默认的standard分词器，对中文分词非常难用，安装IK分词器后，我们可以使用IK分词器测试，测试代码如下：
```js
GET /_analyze
{
  "analyzer": "ik_smart",
  "text": "qdleader，带你打开通往梦想的门！"
}

```

