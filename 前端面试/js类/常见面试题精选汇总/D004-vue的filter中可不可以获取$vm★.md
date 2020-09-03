# Vue中filter能不能写异步代码，能不能获取$vm？





#答案是：  不可以



#解析：




比如当写一个vue时间戳过滤器时候，用this调用别的方法:

```
execute_time(time) {
      if (time === 0) return '/'
      else return this.getTime(time)
    }
```




我发现报了个"TypeError: Cannot read property ‘getTime’ of undefined"，我第一时间就打印了this，果然是undefined。


官方文档中：过滤器filters的说明是：
vue中的过滤器更偏向于对文本数据的转化，
而不能依赖this上下文，如果需要使用到上下文this我们应该使用computed计算属性的或者一个method方法。