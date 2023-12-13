

```shell
# 安装 pm2
npm install -g pm2

# 列出所有实例
pm2 list

# fork模式，无法处理并发
# 启动一个实例，实例名myapi
pm2 start index.js --name myapi

# cluster模式，可处理并发，启动4个实例
pm2 start index.js --name myapi -i 4

# 启动一个实例，并监视应用目录的变化，一旦发生变化，自动重启
pm2 start index.js --name myapi --watch

# 内存使用超过上限自动重启
pm2 start index.js --name myapi --max-memory-restart 20M
pm2 start index.js --name myapi --node-args="--max-old-space-size=4096"

# 把名称为myapi的应用增加3个实例
pm2 scale myapi +3

# 把名称为myapi的应用增加到10个实例
pm2 scale myapi 10

# 重置重启次数
pm2 reset myapi

# 监视所有进程
pm2 monit

# 显示所有进程的日志
pm2 logs

# 停止所有进程
pm2 stop all

# 重启所有进程
pm2 restart all

# 重载所有进程，0秒停机
pm2 reload all

# 杀死所有进程
pm2 delete all

# 查看某个进程的信息
pm2 describe ID号

# 使用pm2设置nodejs开机自启
pm2 save && pm2 startup

# 开启api访问，http://ip:9615
pm2 web



```
## cluster mode

cluster mode  就是在单台服务器上，开启多个相同 node.js项目 进程，共同处理网络请求服务，让 node.js项目 处理并发和响应速度达到最高性能。

二、解决方案


## 法一：命令启动
```shell
# 启动多个 node.js项目进程（进程数量 = cpu核数量）
pm2 start app.js -i 0
```


## 法二：配置文件启动
```js
// 1、配置文件(processes.json)，设置如下
module.exports = {
    apps: [{
        script: "api.js",
        instances: "max",
        exec_mode: "cluster", // 开启进程间的负载均衡模式
    }]
}
```

```shell
 # 2、用配置文件启动 node.js 项目
  pm2 start processes.json
```




## 三、其他重要说明

#### -i 后面的数字说明

> 0/max ：开启进程数量  ==  cpu核数量
> -1：进程数量  == cpu核数量 - 1

#### pm2更改instances配置不起作用解决办法
 有时候改了pm2 start app.js -i 0 改了模式没有生效，那就因为现在有正在运行的node进程，需要pm2 delete all 杀死所有进程，然后再次启动。即可！