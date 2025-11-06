# webpack Plugin 和 Loader 的区别★★★
## loader：
### loader从字面的意思理解，是 加载 的意思。

由于webpack 本身只能打包commonjs规范的js文件，所以，针对css，图片等格式的文件没法打包，就需要引入第三方的模块进行打包。loader虽然是扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域，完成压缩，打包.也就是说loader仅仅只是为了打包，
如：css-loader和style-loader模块是为了打包css的
babel-loader和babel-core模块时为了把ES6的代码转成ES5
url-loader和file-loader是把图片进行打包的。

### plugin是做什么的

plugin完成的是loader不能完成的功能，这是废话，没有说清楚。
plugin也是为了扩展webpack的功能，但是 plugin 是作用于webpack本身上的。而且plugin不仅只局限在打包，资源的加载上，它的功能要更加丰富。从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack提供了很多开箱即用的插件：CommonChunkPlugin主要用于提取第三方库和公共模块，避免首屏加载的bundle文件，或者按需加载的bundle文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建bundle。
插件可以携带参数，所以在plugins属性传入new实例。

## 二、从运行时机的角度区分

 > 1 . loader运行在打包文件之前（loader为在模块加载时的预处理文件）

 > 2.  plugins在整个编译周期都起作用。
