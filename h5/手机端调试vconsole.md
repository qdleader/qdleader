
# 为什么使用vconsole呢？
>因为手机或者平板之类的客户端软件并没有控制台，前端开发想看log日志比较麻烦，如果一直弹窗alert方法实在太挫了。所以腾讯开发了这个 js 插件。

#使用方法

## 方法1：

```
<script src="https://qdleader.github.io/qdleader/h5/vconsole.js"></script>
//或使用cdn链接 <script src="https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js"></script>
<script>
    // init vConsole
    var vConsole = new VConsole();
    console.log('Hello world');
</script>

```



## 方法2：


# 安装
```
npm install vconsole

```
# 引入

```
import VConsole from 'vconsole';

const isDebug = true;
// 本地开发调试注入vConsole
if (isDebug) {
    new VConsole();
}
```




其他类似工具Eruda
