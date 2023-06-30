# url-loader和file-loader的区别


### 什么是 url-loader

url-loader 会将引入的文件进行编码，生成 DataURL，相当于把文件翻译成了一串字符串，再把这个字符串打包到 JavaScript。

    使用 base64 来加载图片也是有两面性的：

    优点：节省请求，提高页面性能
    缺点：增大本地文件大小，降低加载性能
    所以我们得有取舍，只对部分小 size 的图片进行 base64 编码，其它的大图片还是发请求吧。

### 什么是 file-loader

  在css文件中定义background的属性或者在html中引入image的src，我们知道在webpack打包后这些图片会打包至定义好的一个文件夹下，和开发时候的相对路径会不一样，这就会导致导入图片路径的错误。而file-loader正是为了解决此类问题而产生的，他修改打包后图片的储存路径，再根据配置修改我们引用的路径，使之对应引入。

## 两者之间的联系
  url-loader内部封装了 file-loader。url-loader不依赖于file-loader，即使用url-loader时，只需要安装url-loader即可，不需要安装file-loader。

# 总结
  通过上面的介绍，我们可以看到，url-loader工作分两种情况：

  文件大小小于limit参数，url-loader将会把文件转为DataURL； 文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。因此我们只需要安装url-loader即可。


工程中配置

如下：webpack.config.js
```js
module.exports = ({
    ...
    module : {
        rules: [
            {
                // 小于10k的图片在img下不会有图片文件，而是直接把图片的base64值写到html引入图片的地方
                // 大于10k的图片会放在img下，需要的时候通过http请求下载
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /(\.(eot|ttf|woff|woff2|otf)|font)$/,
                loader: 'file-loader',
                options: { outputPath: 'fonts/' }
            }
        ]
    }
})

```