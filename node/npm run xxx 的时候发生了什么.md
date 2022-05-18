> npm i 的时候，npm 就帮我们把这种软连接配置好了，其实这种软连接相当于一种映射，执行npm run xxx 的时候，就会到 node_modules/bin中找对应的映射文件，然后再找到相应的js文件来执行。

> 运行 npm run xxx的时候，npm 会先在当前目录的 node_modules/.bin 查找要执行的程序，如果找到则运行；
没有找到则从全局的 node_modules/.bin 中查找，npm i -g xxx就是安装到到全局目录；

> 如果全局目录还是没找到，那么就从 path 环境变量中查找有没有其他同名的可执行程序。
