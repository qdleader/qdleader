
# Cookie中的domain

此条 cookie 的作用范围。我们知道域名是分多个级别的，如：顶级域名、二级域名、三级域名等等。domain 属性是指可以访问该 cookie 的域名。如果设置为 '.baidu.com'，那么末尾是 '.baidu.com' 结束的域名都可以访问到这个 cookie，要注意必须是 '.' 开头。这产生了一个效果，那就是 '.baidu.com' 下属的子域名也可以访问这个 cookie，例如: '.tieba.baicu.com'。
上面所讲到的 domian 属性的效果，也为实现单点登录提供了技术基础。即通过在父级域名下设置 cookie，那么在多个子域名下就可以拿到父域名下的 cookie，从而不用重新登录。

当我们在 www.baidu.com 登录时，我们可以在 .baidu.com 这个域下存入一条 cookie:
document.cookie = "userInfo=obj;path=/;domain=.baidu.com"
如果你在 zhidao.baidu.com 下存入该条 cookie，那么在 www.baidu.com 和 tieba.baidu.com 下都不会看到这条 cookie，这就是 cookie 跨域。

## 总结

  domain 表示的是 cookie 所在的域，默认为请求的地址，如网址为www.baidu.com/search，那么 domain 默认为www.baidu.com。而跨域访问，如域A为k1.baidu.com，域B为k2.baidu.com，那么在域A生产一个令域A和域B都能访问的cookie就要将该 cookie 的 domain 设置为 .baidu.com；如果要在域A生产一个令域A不能访问而域B能访问的 cookie 就要将该 cookie 的 domain设置为k2.baidu.com。注意：一般在域名前是需要加一个"."的，如"domain=.baidu.com"。
