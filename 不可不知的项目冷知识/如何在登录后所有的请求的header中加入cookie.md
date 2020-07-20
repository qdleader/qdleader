##如何在登录后所有的请求的header中加入cookie
为了增加项目的安全性，我们使用的一个方式是，向项目的heade中加入cookie，当用户直接把接口地址换个浏览器打开时候，会惊喜的发现，打不开了。。
emm。。。。要的就是这个效果。


那快说如何做吧！

	这里那就需要引入一个好用的插件js-cookie了。
	
	
	注意：登录时候后台接口可以setcookie，如果设置不了或者报跨域错误，需要前台这边打开个开关。
	
	// 前端的mainjs文件要写入axios全局配置，允许后端写入cookie到浏览器中
	axios.defaults.withCredentials = true
	
	
	
	js-cookie下载。
```
npm install js-cookie --save-dev
```
	
	
```
加入header中
   // const token = Cookies.get('sessionId');//注意使用的时候需要引入cookie方法，推荐js-cookie

   // config.headers = {
   //   'Content-Type':'application/x-www-form-urlencoded',
   //   'PHPSESSID':token
   // }
 
```

如果参数中也需要
```
const token = Cookies.get('sessionId');
 if(token){
   	config.params = {'PHPSESSID':token}
}
```

##有个注意的点：
 当你在本地开发时候，设置cookie是不行的.由于本地是跨域的，（先把这个axios.defaults.withCredentials = true注释掉）
 
 
 等文件放到服务器上再打开axios.defaults.withCredentials = true就可以了