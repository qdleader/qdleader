# github push时候老是push不上去

如果有一个代理，能上github，但是git bash里面老是不能push/pull上去，

设置针对github.com本身(如果你需要代理的仓库，都是github上面的，只要设置这个)的代理：

## 只对github.com
### 找到自己的代理的port的4个数字的端口就行，不一定是7890口的
```js
git config --global http.https://github.com.proxy http://127.0.0.1:7890
#上面是别人的，如果你的代理是http类型的，如下设置：
git config --global https.https://github.com.proxy https://127.0.0.1:7890

git config --global http.https://github.com.proxy 'http://127.0.0.1:代理的port'
```

## 取消代理
```js
git config --global --unset http.https://github.com.proxy
```

针对所有仓库(包含github.com之外的仓库的代理)

### 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
```js
git config --global http.proxy 'socks5://127.0.0.1:7890'
git config --global https.proxy 'socks5://127.0.0.1:7890'

// git config --global http.proxy socks5 127.0.0.1:7890
// git config --global https.proxy socks5 127.0.0.1:7890
```

##上面是别人的，如果你的代理是http类型的，如下设置：
## 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
```js
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```



配置http代理



## 查看代理命令
```js
git config --global --get http.proxy
git config --global --get https.proxy
```

## 取消代理命令

```js
git config --global --unset http.proxy
git config --global --unset https.proxy
```
