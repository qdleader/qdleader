https访问
仅为github.com设置socks5代理(推荐这种方式, 公司内网就不用设代理了, 多此一举):


```js
git config --global http.https://github.com.proxy socks5://127.0.0.1:1086
```
其中1086是socks5的监听端口, 这个可以配置的, 每个人不同, 在macOS上一般为1086.


我的是7890


不行的话

移除旧的origin ：git remote remove origin
再重新建立新的origin ： git remote add origin http://github.com/×××
 再试试