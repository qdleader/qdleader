

###V006-watch和computed的区别



#使用场景

```
computed 　　　　
　　　　当一个属性受多个属性影响的时候就需要用到computed(当有一些数据需要随着另外一些数据变化时，建议使用computed)
　　　　最典型的例子： 购物车商品结算的时候
watch
　　　　当一条数据影响多条数据的时候就需要用watch(当有一个通用的响应数据变化的时候，要执行一些业务逻辑或异步操作的时候建议使用watch)
　　　　搜索数据
```




#总结：

```
watch顾名思义，用于监听数据变化，其中可以监听的数据来源有三部分：props、data、computed内的数据；
watch提供两个参数（newValue，oldValue），第一个参数是新值，第二个参数保存旧值；



computed用于处理复杂的逻辑运算，主要和methods储存方法来进行区分；
methods储存方法，，computed储存需要处理的数据值；methods每次都会调用，computed有缓存机制，只有改变时才执行，性能更佳；

```
