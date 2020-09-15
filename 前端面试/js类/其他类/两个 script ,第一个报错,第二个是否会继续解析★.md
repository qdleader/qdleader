# 两个 script ,第一个报错,第二个是否会继续解析★
```
<script>
throw new Error('error')
</script>
 
<script>
console.log(1)
</script>
```
在运行的时候 我们发现1是会正常输出的，再看下一段代码：
```
<script>
console.log(a)
</script>

<script>
var a = 1;
</script>
```

我们发现这个时候输出的a并不是undefined，而是保存：a is not defined，因为下面那个script还没执行到。

因为我们知道浏览器遇到script脚本 会停止dom解析和css解析，专注于解析js，所以这个时候浏览器不会做其他任何事情，
现在浏览器解析到第一个script标签，他开始解析这段代码，如果这段代码报错了，则浏览器抛出错误，并认为该段script解析完毕，
然后浏览器则继续开始查找dom元素 解析dom元素，这个时候浏览器又遇到第二段script块，然后继续开始解析，所以 第一段script的报错 并不会影响第二段script的执行。

浏览器在解析文档的时候，并没有提前将页面上的所有的script标签，提前收集起来 做统一处理，而是根据遇到则解析的 规则来解析，
所以我们看到 即使js存在命名提升，因为在解析第一段script的时候，第二段script还没有执行，所以也就不存在命名提升

```
<script>
var a = 1;
</script>
 
<script>
console.log(a)
</script>
```

这个时候输出1，这表明 多个script块 是共享同一个作用域的，也就是window顶级作用域。