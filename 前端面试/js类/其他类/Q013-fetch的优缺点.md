
# fetch 的优缺点

fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，**一定记住fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。**

## fetch的优点：

> 1.符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
> 2.更好更方便的写法

我认为fetch的优势主要优势就是：

1.  语法简洁，更加语义化
2.  基于标准 Promise 实现，支持 async/await
3.  同构方便，使用 [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
4. 更加底层，提供的API丰富（request, response）
5. 脱离了XHR，是ES规范里新的实现方式

## fetch 的缺点

fetch是一个低层次的API，你可以把它考虑成原生的XHR，所以使用起来并不是那么舒服，需要进行封装。

```js
> fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
> fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
> fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
> fetch没有办法原生监测请求的进度，而XHR可以
```
