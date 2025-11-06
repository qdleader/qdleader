# http016-HTTP fetch 发送两次请求的原因

之所以会发送2次请求，那是因为我们使用了带预检(Preflighted)的跨域请求。该请求会在发送真实的请求之前发送一个类型为OPTIONS的预检请求。预检请求会检测服务器是否支持我们的真实请求所需要的跨域资源，唯有资源满足条件才会发送真实的请求。比如我们在请求头部增加了authorization项，那么在服务器响应头中需要放入Access-Control-Allow-Headers，并且其值中必须要包含authorization，否则OPTIONS预检会失败，从而导致不会发送真实的请求。

请求一次的是简单请求，两次的是非简单请求

## 简单请求和非简单请求的区别
```js
请求的方法只能是GET, POST, HEAD的一种
请求的header的只能是Accept，Accept-Language, Content-Language，Content-Type这些字段，不能超出这些字段
对于请求的header的Content-Type字段，只能是以下值

text/plain
multipart/form-data
application/x-www-form-urlencoded

都满足以上条件的就是简单请求，否则就是非简单请求。
```

比如我们经常使用的Content-Type:application/json; charset=utf-8，这个请求就是非简单请求

## 为什么需要预检请求

发出预检请求针对的是非简单请求，这些非简单请求有可能会在服务器进行比较大的运算，增加负载，如果此时cors不通过，就有可能增加了服务器没有必要的运算，如果此时有预检请求，如果不通过，则真实请求不会发出，在一定程度上减少了服务器无效的运算。

### 那为什么简单请求不需要预检呢？

因为简单请求可以由form表单发起，它不是ajax请求，不涉及到跨域和cors问题，可以直接与服务器通信，另外，简单请求大部分上是获取资源比较多，运算也没那么复杂，所以进行一次预检请求就没有必要。

## 注意

> 如果预检请求通过了，在一定时间内重复请求是不用再次发起预检请求。
