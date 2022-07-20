

## taro安装小程序项目 预览时文件过大

解决：
在package.json中新增：




package.json
```
 "dev:we": "taro build --type weapp --watch --env production",
```

新增后执行：npm run dev:we