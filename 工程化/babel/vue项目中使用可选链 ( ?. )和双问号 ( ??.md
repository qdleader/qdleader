vue项目中使用可选链 ( ?. )和双问号 ( ??）



1.安装插件：@babel/plugin-proposal-optional-chaining

```ts
npm install --save-dev @babel/plugin-proposal-optional-chaining
```

2.配置babel
.babelrc 或者 babel.config.js 文件添加 plugins 配置
```ts
{
  "plugins": [
    "@babel/plugin-proposal-optional-chaining"
  ]
}
```


3.使用
配置完了,就可以在项目中使用可选链 ( ?. ) 和双问号 ( ?? )