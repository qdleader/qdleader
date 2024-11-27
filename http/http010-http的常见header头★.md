# http010-http 的常见 header 头 ★

请求头：

## accept 请求报头域，指定客户端可以接收的类型有哪些 （浏览器可接收的数据格式）

```js
Accept: application / json;
```

## accept-encoding：指定客户端可接收的内容编码（压缩算法，如 gzip）

```js
  Accept-Encoding: gzip, deflate, br
```

## accept-language：指定客户端可接收的编码语言

```js
Accept-Language: zh-CN,zh;q=0.9
```

## host:用户指定请求资源的主机和端口号

```js
Host: github.com;
```

## cookies：用于存储本地的数据

```js
  Cookie: _ga=GA1.2.190650762241.1552965769; _octo=GH1.1.1615682995.1552965770; _device_id=a0dc424c4c83e5b30b7c60f0da2f122; experiment:homepage_signup_flow=eyJ2ZXJzaW9uIjoiMawSIsInJvbGxPdXRQbGFjZW1lbnQiOjUuMzc1OTMxMTMzODM2NDkyLCJzdWJncm91cCI6ImNvbnRyb2wiLCJjcmVhdGVkQXQiOiIyMDIwLTAzLTI2VDAyOjAwOjM5LjIxM1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTAzLTI2VDAyOjAwOjM5LjIxM1oifQ==; user_session=2jzw0VGpePO54lxXRgqvVobiKbi0ol-YSEV8NfllaJyQ3bkF; __Host-user_session_same_siZwIy0BNFrm5Ra%2BQc1%2FY1P6gL5kjcsjn%2B%2BdO7DSqUsjuQlZ7jx4NuDR306Sg%3D%3D--VTJEcRvbJw6Lw7Al--VIhGCbS1CA6EifesiPerag%3D%3D
```

## refer：用于标识这个请求是从哪个页面来的，如登录前是从主页来的，就显示主页的信息

```js
  Referer: https://github.com/qdleader/qdleader
```

## Origin

含义: 表示跨域相关信息，用于设置 CORS 的请求。通过 Origin 头，防止陌生的域进行请求。

示例：

```js
Origin: https://github.com/qdleader/qdleader
```

## user-agent（UA）:用于识别用户的使用的客户端版本等信息(浏览器信息)★

```js
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
```

## content-type 发送数据的格式，如 application/json

```js
Content-Type: application/manifest+json; charset=utf-8
```

## connection:keep-alive 一次 TCP 链接重复使用

## If-Modified-Since

含义: 表示客户端在上次获取资源的具体时间。

示例

```js
If-Modified-Since: Tue, 10 Oct 2021 11:01:01 GMT
```

## Access-Control-Allow-Origin

含义: 表示用于配置 CORS 跨域相关，指定允许访问资源的域名，如果配置为\*表示所有可访问。

示例

```js
Access-Control-Allow-Origin: *
```

## Cache-Control

含义: 表示缓存机制的缓存策略。

示例

```js
Cache-Control:public  // 响应会被缓存
Cache-Control:must-revalidate  // 指定条件下会缓存重用
Cache-Control:no-cache  // 直接向服务器端请求最新资源,不缓存
Cache-Control:max-age=10 // 设置缓存的有效时间
Cache-Control:no-store  // 在任何条件下，响应都不会被缓存
```

## ETag

含义: 表示用于验证缓存，确保当前的资源未被修改过。如果没有更改过则返回 304 状态码，减少不必要传输。

示例

```js
ETag: "1234952790ed";
```

## Location

含义: 表示用于重定向，指向一个新的 URL。
示例

```js
Location: https://github.com/qdleader/qdleader
```

## Last-Modified

含义: 表示资源最后被修改的具体时间。

示例

```js
Last-Modified: Tue, 10 Oct 2021 11:00:00 GMT
```

## Expires

含义: 跟缓存相关，表示指定资源的过期时间，这个时间前都不过期。

示例

```js
Expires: Wed, 21 Oct 2029 07:21:00 GMT
```
