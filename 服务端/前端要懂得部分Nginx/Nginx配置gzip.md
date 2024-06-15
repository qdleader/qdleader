
```js
Nginx配置Gzip

#开启和关闭gzip模式
gzip on;

#gizp压缩起点，文件大于1k才进行压缩
gzip_min_length 1k;


# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间
其中的zip_comp_level，是一项重要的性能指标，随着压缩率的提高，所消耗的CPU也会越来越多。从1-4压缩比较明显，5以后基本变化不大。估建议设置gzip_comp_level 4
gzip_comp_level 6;


# 进行压缩的文件类型。(对特定的MIME类型生效,其中'text/html’被系统强制启用)
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;


# nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩
gzip_static on


# 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;


# 设置gzip压缩针对的HTTP协议版本
gzip_http_version 1.1;



```


# zip压缩的方案有几种？

## 一、服务器在线Gzip压缩（nginx）

```js


#开启和关闭gzip模式
gzip on;

#gizp压缩起点，文件大于1k才进行压缩
gzip_min_length 1k;


# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间
其中的zip_comp_level，是一项重要的性能指标，随着压缩率的提高，所消耗的CPU也会越来越多。从1-4压缩比较明显，5以后基本变化不大。估建议设置gzip_comp_level 4
gzip_comp_level 6;


# 进行压缩的文件类型。(对特定的MIME类型生效,其中'text/html’被系统强制启用)
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;


# nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩
gzip_static on


# 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;


# 设置gzip压缩针对的HTTP协议版本
gzip_http_version 1.1;


```

## 二、前端预生成gz文件

前端工程项目可以在打包的时候，前端使用webpack或vite打包工作，生成gz文件。这样的目的是减少在服务器在线生成gzip的步骤。
Nginx服务器只需要配置：
csharp复制代码// 静态加载本地的gz文件，需要在nginx上安装http_gzip_static_module模块
gzip_static on;

在webpack中可以使用compression-webpack-plugin来实现
```javascript
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  // ...其他配置
  plugins: [
    new CompressionPlugin({
      // 匹配需要进行Gzip压缩的文件类型
      test: /\.(js|css|html|svg)$/,
      // 只有文件大小大于等于该值时才会生成Gzip文件
      threshold: 10240,
    }),
  ],
};
```
在vite中使用vite-plugin-compression来实现
```js
import compressPlugin from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    compressPlugin({
      ext: '.gz',
      algorithm: 'gzip',
      deleteOriginFile: false,
    }),
  ],
});
```

## Gzip两种方式结合
#### 1、两种方式的优缺点
一、前端借助构建工具，预先生成gz文件，缺点是构打包后构建的产物体积会变大，优点是不耗费服务器的性能。 二、使用nginx在线Gzip，缺点是需要实时压缩，会耗费服务器的性能，但是无需前端预先生成gz文件。


#### 2、两种方式结合的配置
有gz文件的时候使用静态资源，不存在gz文件的时候进行在线压缩而不是加载源文件，需要在nginx上把两种配置都写上。
```js
// nginx配置
gzip on;
gzip_static on;
gzip_comp_level 4;
gzip_types text/plain text/html text/css application/x-javascript text/xml application/xml application/xml
```
gzip_static的优先级高，会先加载静态gz文件，当同目录下不存在此文件的时候，会执行在线压缩命令。



##### 3、确定请求资源是否为gzip压缩？

响应头的Content-Edcoding:gzip表示gzip压缩已经生效
比较文件大小，看请求资源文件大小是否比打包后的资源更小



##### 4、确定是否请求的是预打包的gz资源？
Etag中只有简单字符表示静态资源加载，而前面带 W/ 表示启动了在线压缩。

