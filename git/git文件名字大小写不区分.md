# git文件名字大小写不区分

```js
git config --get core.ignorecase 
```

得到的结果是false 说明我本地已经配置了 区分大小写了，
如果 窗口提示为true执行下列代码

```js
git config core.ignorecase false 
```
