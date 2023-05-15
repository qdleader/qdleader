## 1、PM2是什么
        PM2 是一个带有负载均衡功能的 Node 应用的进程管理器。我们都知道nodejs是单进程执行的，当程序出现错误死掉之后需要能够自动，这时候就需要PM2了。当然进程管理工具有很多，例如forever等等；




入门教程
挑我们最爱的express应用来举例。一般我们都是通过npm start启动应用，其实就是调用node ./bin/www。那么，换成pm2就是
注意，这里用了--watch参数，意味着当你的express应用代码发生变化时，pm2会帮你重启服务，多贴心。
pm2 start ./bin/www --watch






### 2、主要特性
    1）启动多子进程，充分使用CPU

    2）子进程之间负载均衡

    3）0秒重启

    4）界面友好

    5）提供进程交互（例如：监控）接口

### 3、安装
```js
npm install pm2 -g
```

### 4、使用
```js
pm2 start app.js -i 4 -n customer   //-i 4启动4个进程 -n customer指定进程名称

pm2 list  //查看进程状态

pm2 info customer //查看单个进程的详细启动信息

pm2 logs customer   //查看实时日志

pm2 restart  all || customer //直接重启进程

pm2 reload customer  //0秒停机重启进程

pm2 gracefulReload customer  //等待网络连接处理完之后重启进程;避免请求处理中断导致可能的业务错误

pm2 delete all|customer //删除所有的或者指定的进程

pm2 stop  all ||customer  //停止进程，但是进程仍然存在

pm2 monit    //监控进程信息

pm2 update //升级pm2之后需要升级老版本启动的进程

pm2 start start.json //通过配置文件启动 

start.json示例

[{

    "name" : "project",    //进程名称

    "script" : "app.js",    //入口文件

    "exec_mode" : "cluster", //模式

    "instances" : 3,   //进程实例个数

    "cwd" : "./project/",  //路径

    "env": {   //环境变量

        "NODE_ENV": "development", 

        "DEBUG": "*", //打印debug日志

        "DEBUG_FD" : 1 //debug日志默认输出到process.stderr；该参数将日志输出到process.stdout

    }

}]

```
