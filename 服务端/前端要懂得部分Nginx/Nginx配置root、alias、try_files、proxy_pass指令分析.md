## Nginx配置root、alias、try_files、proxy_pass指令分析

摘要：本文主要介绍root、alias指令在配置前端项目的时候的区别，下面的配置都是基于react或者vue项目配置的，不是静态服务器文件方式，因为加了try_files参数。

## root指令
#### 示例一

```js
server {
    listen       80;
    location / {
        root /data;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

结果
访问路径：http://127.0.0.1:80/index.html  实际访问/data/index.html
访问路径：http://127.0.0.1:80/a/index.html  实际访问/data/a/index.html

## 示例二
```js
location /a {
  root /data;
  index index.html index.htm;
  try_files $uri $uri/ /index.html;
}
```

结果
访问路径：http://127.0.0.1:80/a/index.html  实际访问/data/a/index.html
访问路径：http://127.0.0.1:80/aaab/index.html  实际访问/data/aaab/index.html

# 结论

root指令实际访问的文件路径是root路径+location路径

# alias指令

我个人建议alias指令后面的路径都加上/，因为大多数我们配置的都是指定到固定文件夹，除非你的location匹配的是固定的文件，那么你alias也可以指定固定文件路径

配置指定的文件路径

```js
server {
    listen       80;
    location /index.html {
      alias /data/index.html;
    }
}
```

结果
访问路径：http://127.0.0.1:80/index.html  实际访问/data/index.html
访问其他地址都会报`404 Not Found`

```js
server {
    listen       80;
    location /a {
        alias /data/;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

结果
访问路径：http://192.168.137.110:8060/a/index.html  实际访问/data/index.html
访问路径：http://192.168.137.110:8060/a/a/index.html  实际访问/data/a/index.html

alias指令会把location上配置的值去掉，然后把后缀拼接到alias指令后面，就像上面访问/a/index.html，而location是/a，最终的访问文件地址是/data/index.html。

# try_files指令

按指定的file顺序查找存在的文件，并使用第一个找到的文件进行请求处理。

```js
server {
    listen       80;
    location /a/ {
        root /data/;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

比如请求http://192.168.137.110:8060/a/qdleader.html

### $uri

查找文件/data/a/qdleader.html

### $uri/

查找文件夹/data/a/qdleader.html/qdleader.html文件

### /index.html

请求http://192.168.137.110:8060/index.html路径

针对alias的多个location指令的try_files配置
为什么要加try_files指令，因为路由由前端控制了，页面刷新的时候路由重新到后端，找不到该文件，我们就把它重定向到index.html文件，交给前端解析。

```js
server {
    listen       80;
    location /mobile/ {
        alias /data-mobile/;
        index index.html index.htm;
        try_files $uri $uri/ /mobile/index.html;
    }
    location /pc/ {
        alias /data-pc/;
        index index.html index.htm;
        try_files $uri $uri/ /pc/index.html;
    }
}
```

## proxy_pass指令

该指令用于反向代理使用

#### 案例一( 有/结尾)
```js
server {
    listen       80;
    location /apis-config1/ {
    	proxy_pass http://192.168.137.2:5021/;
    }
}
```

结果
访问`http://192.168.137.110:8060/apis-config1/abc`    实际访问的是`http://192.168.137.2:5021/abc`

#### 案例二（无/结尾）
```js
server {
    listen       80;
    location /apis-config2/ {
        proxy_pass http://192.168.137.2:5021;
    }
}
```

结果
访问`http://192.168.137.110:8060/apis-config2/abc`    实际访问的是`http://192.168.137.2:5021/apis-config2/abc`

#### 案例三

```js
server {
    listen       80;
    location /apis-config3/ {
        proxy_pass http://192.168.137.2:5021/apis/;
    }
}
```

结果
访问`http://192.168.137.110:8060/apis-config3/abc`    实际访问的是`http://192.168.137.2:5021/apis/abc`

#### 案例四
```js
server {
    listen       80;
    location /apis-config4-1/ {
        proxy_pass http://192.168.137.2:5021/apis;
    }

    location /apis-config4-2 {
        proxy_pass http://192.168.137.2:5021/apis;
    }
}
```

结果
访问`http://192.168.137.110:8060/apis-config4-1/abc`    实际访问的是`http://192.168.137.2:5021/apisabc`

访问`http://192.168.137.110:8060/apis-config4-2/abc`    实际访问的是`http://192.168.137.2:5021/apis/abc`

#### 案例五
```js
server {
    listen       80;
    location /apis-config5-1 {
        proxy_pass http://192.168.137.2:5021/;
    }

    location /apis-config5-2 {
        proxy_pass http://192.168.137.2:5021;
    }
}
```

结果
访问`http://192.168.137.110:8060/apis-config5-1/abc`    实际访问的是`http://192.168.137.2:5021//abc`

访问`http://192.168.137.110:8060/apis-config5-2/abc`    实际访问的是`http://192.168.137.2:5021/apis-config5-2/abc`

结论
对于这个没啥好说的，按需选取配置，不过我个人推荐都加上/符号，就按照案例一配置就能不变应万变。
