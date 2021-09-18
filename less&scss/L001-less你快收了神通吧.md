#1如何使用

>安装
> npm install -g less


#在项目中使用
>npm install less less-loader --save

修改webpack.config.js文件，配置loader加载依赖，让其支持外部的less,在原来的代码上添加


```
// 此种方法在控制台中标签样式显示的是style标签样式
{

test: /\.less$/,

loader: "style-loader!css-loader!less-loader",

},
```



    
```
// 可以在控制台中看到当前标签样式来自于哪个less文件,调试的时候可以设为true，上线后设为false。优化打包体积可以。
{ 
    test: /\.less$/,

    loader: "style-loader!css-loader!less-loader",
　　
　　 options: { sourceMap: true }

}
```



<style lang="less" scoped>
	@import "@/static/hello.less"
</style>
