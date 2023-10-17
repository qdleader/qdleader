Nginx 默认什么都不配置的时候，是开启协商缓存的


若想要关掉协商缓存

```ts
location / {
  etag off;
  add_header last-Modified "";
}
```


或
```ts
location / {
  etag off;
  if_modified_since off;
}
```

强制缓存设置


```ts
location / {
  expire 300s;
}

```

或

```ts
location / {
  add_header cache-control "max-age:300";
}

```


HTTP协议的Cache -Control指定请求和响应遵循的缓存机制。在请求消息或响应消息中设置 Cache-Control并不会影响另一个消息处理过程中的缓存处理过程。
请求时的缓存指令包括: no-cache、no-store、max-age、 max-stale、min-fresh、only-if-cached等。
响应消息中的指令包括: public、private、no-cache、no- store、no-transform、must-revalidate、proxy-revalidate、max-age。
一.   浏览器中关于Cache的3属性:


## 1. Cache-Control:
设置相对过期时间, max-age指明以秒为单位的缓存时间. 若对静态资源只缓存一次, 可以设置max-age的值为315360000000 (一万年). 比如对于提交的订单，为了防止浏览器回退重新提交，可以使用Cache-Control之no-store绝对禁止缓存，即便浏览器回退依然请求的是服务器，进而判断订单的状态给出相应的提示信息！

Http协议的cache-control的常见取值及其组合释义:
no-cache: 数据内容不能被缓存, 每次请求都重新访问服务器, 若有max-age, 则缓存期间不访问服务器.
no-store: 不仅不能缓存, 连暂存也不可以(即: 临时文件夹中不能暂存该资源).
private(默认): 只能在浏览器中缓存, 只有在第一次请求的时候才访问服务器, 若有max-age, 则缓存期间不访问服务器.
public: 可以被任何缓存区缓存, 如: 浏览器、服务器、代理服务器等.
max-age: 相对过期时间, 即以秒为单位的缓存时间.
no-cache, private: 打开新窗口时候重新访问服务器, 若设置max-age, 则缓存期间不访问服务器.
-  private, 正数的max-age: 后退时候不会访问服务器.
-  no-cache, 正数的max-age: 后退时会访问服务器.

## 2. Expires:
设置以分钟为单位的绝对过期时间, 优先级比Cache-Control低, 同时设置Expires和Cache-Control则后者生效. 也就是说要注意一点:  Cache-Control的优先级高于Expires

expires起到控制页面缓存的作用，合理配置expires可以减少很多服务器的请求, expires的配置可以在http段中或者server段中或者location段中.  比如控制图片等过期时间为30天, 可以配置如下:
```js

location ~ \.(gif|jpg|jpeg|png|bmp|ico)$ {

           root /var/www/img/;

           expires 30d;

       }
```

再比如:
```js
location ~ \.(wma|wmv|asf|mp3|mmf|zip|rar|swf|flv)$ {

              root /var/www/upload/;

              expires max;

      }

```


