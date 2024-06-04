# 部署 Sentry 
## 部署在我们自己的服务器上。

在这篇文章中，我们将逐步介绍在我们自己的服务器上部署 Sentinel 的步骤。

最低要求
Docker 19.03.6+
Compose 1.28.0+
4 CPU Cores
8 GB RAM
20 GB Free Disk Space

## 安装 Docker
先让我们尝试输入命令 docker ，会得到“命令未找到”的提示，还有如何安装的建议：

Command 'docker' not found, but can be installed with:
sudo apt install docker.io
所以，你只需要按照系统的提示，“照葫芦画瓢”输入命令，安装 docker.io 就可以了。为了方便，你还可以使用 -y 参数来避免确认，实现自动化操作：
```shell
sudo apt install -y docker.io #安装Docker Engine
```
刚才说过，Docker Engine不像Docker Desktop那样可以安装后就直接使用，必须要做一些手工调整才能用起来，所以你还要在安装完毕后执行下面的两条命令：
```shell
sudo service docker start         #启动docker服务
sudo usermod -aG docker ${USER}   #当前用户加入docker组
```

第一个 service docker start 是启动 Docker 的后台服务，第二个 usermod -aG 是把当前的用户加入 Docker 的用户组。这是因为操作 Docker 必须要有 root 权限，而直接使用 root 用户不够安全，加入 Docker 用户组是一个比较好的选择，这也是 Docker 官方推荐的做法。当然，如果只是为了图省事，你也可以直接切换到 root 用户来操作 Docker。

## 安装 Docker Composer
```shell
sudo curl -SL https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

```

可以通过 docker-compose version 来查看版本。

docker-compose version

Docker Compose version v2.20.2


# 安装 Sentry

使用脚本安装是最快的方法，如果需要自定义配置可以更改官方提供的脚本。
```js
git clone https://github.com/getsentry/self-hosted sentry
```

上面的代码会将库克隆到名为 Sentry 的文件夹中。可以通过将命令末尾的 Sentry 更改为想要的名称来更改。然后 cd 进入刚刚创建的目录并运行以下命令开始安装过程：
```shell
./install
```
安装过程中，会出现提示询问我们是否要创建用户。如果想要安装不会被提示终端，可以运行：
```shell
./install.sh --skip-user-prompt
```

安装需要一段时间，如果安装成功你应该看到以下内容



现在我们可以运行提示的命令并且启动 Sentry
```shell
docker-compose up -d
```
命令执行完毕之后我们可以通过 http://{server_ip}:9000/ 来访问 Sentry

## 创建用户
如果在运行安装命令时使用了 --skip-user-prompt，则需要通过终端创建用户。
```shell
alias sentry="docker-compose run --rm web"
sentry createuser
```



## 解决CSPF跨域访问错误

此时直接访问sentry 可以访问，但是登陆时候，会报 CSRF验证失败
### 方案1
从版本 24.1.0 开始，Sentry 迁移到 Django 4，其中包含更严格的 CSRF 保护。默认情况下，受信任的 CSRF 源设置为您的system.url-prefix，但在某些情况下，可以从多个域访问您的 Sentry 部署，您将需要CSRF_TRUSTED_ORIGINS在sentry.conf.py文件上进行配置。

cd sentry

vim sentry.conf.py

把你的ip 或服务器域名放到CSRF_TRUSTED_ORIGINS中
```Python

# Assuming your Sentry instance can be accessed from sentry.example.com, 10.100.10.10 and 127.0.0.1.
CSRF_TRUSTED_ORIGINS = ["https://sentry.example.com", "http://10.100.10.10", "http://127.0.0.1:9000"]
```


### 方案2 

   默认安装完成以后通过http://ip:9000端口去访问sentry的时候只要一登录就会报错CSPF跨域访问失败，需要修改一些配置。

   打开你的sentry/sentry/config/config.yml文件，在文件的最后增加以下内容：

system.url-prefix: "http://你的sentry部署主机IP地址:9000"
 
  上面的两个配置，第一个指定了sentry的访问前置，例如http://192.168.1.100:9000 。

   打开sentry/sentry/config/sentry.conf.py文件，在文件的最后增加以下内容关闭允许用户自己注册功能：

SENTRY_FEATURES['auth:register'] = False


## 重启服务

 docker-compose down
 docker-compose up -d



sudo shutdown -r now

## 避免 Sentry 引发雪崩（504 Gateway Timeout）
引入新的技术或者工具，或多或少都会增加系统的复杂度和运行风险。某个求量高的的服务发生故障，大量的错误信息涌向 Sentry 服务器，导致 Sentry 响应严重延迟，其 Redis 队列内存容量接近占满，而 Nginx 也全都响应 504 Gateway Timeout。恰好该故障的服务由于请求 Sentry 服务端未设置超时时间，导致 HTTP 请求同步阻塞，反倒拖垮了服务本身。

为了规避此类问题，有以下做法：

#### 保障 Sentry 服务端高可用
这点最重要，但实际我们并未做好。目前我们自部署的 Sentry 是一个单点，并没有集群或冗余。如果要实现高可用，那么付出的金钱成本会较高，甚至可能超过了使用 Sentry SaaS 付费服务的成本。由于 Sentry 官方并未提供中国区的服务，HTTP 请求到国外的速度并不理想，使用官方 SaaS 服务也不见得是太好的选择。

#### 设置 timeout
使用 Sentry SDK 时，一定要设置向 Sentry 服务器发送请求的超时时间，建议 3 秒以下。

#### 设置 sample_rate
使用 Sentry SDK 时，可以设置采样率，0.00 表示拒绝发送任何事件，1.00 表示发送全部事件。建议前期设置较小的值，然后视应用的 PV 大小进行调整。使用采样率可能会带来这样的负面影响：零星的错误可能未上报，导致一直未被发现。

#### 及时熔断
假如当 Sentry 服务器不堪重负时，应该避免应用继续请求 Sentry 了。比如：可以手动将采样率设置为 0.00。

使用异步方式（async）发送请求
如果 SDK 支持异步发送请求，那就使用，避免同步阻塞。

隔离生产环境的 Sentry
运维同事隔离部署了两套 Sentry，一套是体验环境，供开发环境/测试环境/预发布环境的应用接入使用；另外一套是正式环境，供生产环境/私有化环境的应用接入使用。如果要试验 Sentry 的功能或调整 Sentry 的配置，那我们会先在体验环境的 Sentry 中进行，确认没有问题后，才会调整生产环境的 Sentry，借此保障生产环境 Sentry 的稳定性。

#### 通过队列来缓冲请求至 Sentry 的并发压力
假设应用的请求量和并发量都巨大，当出现严重故障时每个请求处理都发生错误，那么即使在 SDK 中设置了较低的采样率（比如：0.01），可能请求到 Sentry 的并发量依旧超过其有限承载。为了避免这个问题，我们在流量最大的服务中做了如下尝试：我们增加了一个队列，将服务的错误事件先入列，启动了少量的消费进程去消费该队列缓缓上报错误至 Sentry 服务端。并且应用程序中做了处理，即使该队列容量占满也不会影响正常业务（只是丢弃错误事件）。实践证明，这种中转缓冲的方式非常有效，不过也增加了接入 Sentry 工作量，大家可自行取舍。







