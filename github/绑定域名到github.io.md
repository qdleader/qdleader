# 绑定域名到github.io

假设你github的用户名为username，那么创建一个名为username.github.io的代码库（repository）,在这个库中上传html、CSS等静态页面文件，可以用地址 http://username.github.io 来访问页面了，这个页面就是你账户的主页面（User pages）。
如果你又创建了个叫repo的代码库，在它下面的gh-pages分支里上传了html、CSS等静态页面文件，那么用http://username.github.io/repo 这个地址就能访问页面了。
要想域名绑定，在代码库的根目录下放一个CNAME文件就行了，文件里写上想要绑定的域名，然后在域名DNS管理的后台网站建立指向就行。
如果绑定一级域名，绑定A记录到207.97.227.245，
如果绑定二级域名，cname到username.github.com.
等待dns同步
