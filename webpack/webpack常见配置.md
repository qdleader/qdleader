# webpack 常见配置

## publicPath

类型：String
默认：'/'
    部署应用包时的基本 URL。默认情况下，Vue CLI会假设你的应用是被部署在一个域名的根路径上，例如www.my-app.com/。如果应用被部署在一个子路径上，你需要用这个选项指定这个子路径。例如，如果你的应用被部署在www.my-app.com/my-app/，则设置publicPath为/my-app/。
    这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径


## productionSourceMap
类型：boolean
默认：true
    不允许打包时生成项目来源映射文件，在生产环境下可以显著的减少包的体积


## assetsDir
放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录,默认是'',

## indexPath
指定生成的 index.html 的输出路径(相对于outputDir)。也可以是一个绝对路径。默认是'index.html'

## filenameHashing
类型：boolean
默认：true
    文件名哈希，默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求你每次编辑过某样东西后都要重新编译。如果你想要生成长期缓存的文件，你可以通过将这个选项设置为 false 来关闭文件名哈希。(index.html 除外，它会一直生成 hash 以便浏览器能够正确地缓存。)


## lintOnSave
类型：boolean | 'warning' | 'default' | 'error'
默认：'default'

```css
css: {
    //是否启用css分离插件，默认是true，如果不启用css样式分离插件，打包出来的css是通过内联样式的方式注入至dom中的，
    extract: true,
    sourceMap: false,//效果同上
    modules: false,// 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
  },
```


## devServer
本地开发服务器配置，此处直接贴上我常用的配置，以注释的方式介绍

```js
devServer: { 
    //配置开发服务器
    host: "0.0.0.0",
    //是否启用热加载，就是每次更新代码，是否需要重新刷新浏览器才能看到新代码效果
    hot: true,
    //服务启动端口
    port: "8080",
    //是否自动打开浏览器默认为false
    open: false,
    //配置http代理
    proxy: { 
      "/api": { //如果ajax请求的地址是http://192.168.0.118:9999/api1那么你就可以在jajx中使用/api/api1路径,其请求路径会解析
        // http://192.168.0.118:9999/api1，当然你在浏览器上开到的还是http://localhost:8080/api/api1;
        target: "http://192.168.0.118:9999",
        //是否允许跨域，这里是在开发环境会起作用
        changeOrigin: true,
        pathRewrite: {
            //把多余的路径置为''
          "api": ""
        }
      },
    }
},

```



## pluginOptions
这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
```js

{
    //定义一个全局的less文件，把公共样式变量放入其中，这样每次使用的时候就不用重新引用了
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        './src/assets/public.less'
      ]
    }
}
```

## chainWebpack
是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。例如：

```js
chainWebpack(config) { 
//添加一个路径别名 假设有在assets/img/menu/目录下有十张图片，如果全路径require("/assets/img/menu/img.png")
    config.resolve.alias
      //添加多个别名支持链式调用
      .set("assets", path.join(__dirname, "/src/assets"))
      .set("img", path.join(__dirname, "/src/assets/img/menu"))
      //引入图片时只需require("img/img1.png");即可
}
```