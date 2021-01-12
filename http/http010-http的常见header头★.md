# http010-http的常见header头★

请求头：

## accept 请求报头域，指定客户端可以接收的类型有哪些 （浏览器可接收的数据格式）   
```
  Accept: application/json
```

## accept-encoding：指定客户端可接收的内容编码（压缩算法，如gzip）

```
  Accept-Encoding: gzip, deflate, br
```
## accept-language：指定客户端可接收的编码语言

```
Accept-Language: zh-CN,zh;q=0.9
```
## host:用户指定请求资源的主机和端口号

```
Host: github.com
```

## cookies：用于存储本地的数据

```
  Cookie: _ga=GA1.2.190650762241.1552965769; _octo=GH1.1.1615682995.1552965770; _device_id=a0dc424c4c83e5b30b7c60f0da2f122; experiment:homepage_signup_flow=eyJ2ZXJzaW9uIjoiMawSIsInJvbGxPdXRQbGFjZW1lbnQiOjUuMzc1OTMxMTMzODM2NDkyLCJzdWJncm91cCI6ImNvbnRyb2wiLCJjcmVhdGVkQXQiOiIyMDIwLTAzLTI2VDAyOjAwOjM5LjIxM1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTAzLTI2VDAyOjAwOjM5LjIxM1oifQ==; user_session=2jzw0VGpePO54lxXRgqvVobiKbi0ol-YSEV8NfllaJyQ3bkF; __Host-user_session_same_siZwIy0BNFrm5Ra%2BQc1%2FY1P6gL5kjcsjn%2B%2BdO7DSqUsjuQlZ7jx4NuDR306Sg%3D%3D--VTJEcRvbJw6Lw7Al--VIhGCbS1CA6EifesiPerag%3D%3D
```
## refer：用于标识这个请求是从哪个页面来的，如登录前是从主页来的，就显示主页的信息

```
  Referer: https://github.com/qdleader/qdleader
```

## user-agent（UA）:用于识别用户的使用的客户端版本等信息(浏览器信息)★

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
```

## content-type 发送数据的格式，如 application/json
```
Content-Type: application/manifest+json; charset=utf-8
```

## connection:keep-alive 一次TCP链接重复使用
