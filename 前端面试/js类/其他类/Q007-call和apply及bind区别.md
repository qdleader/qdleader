```
var name = '王',age= 17;
var obj1 = {
  name:'校长',
  objAge:this.age,
  myFun:function(fm,t) {
    console.log(this.name+ "年龄"+ this.age, "来自" + fm + "去往" + t)
  }
}
var db ={
  name:'德玛',
  age:99
}
obj1.myFun.call(db,'成都','上海');　　　　 // 德玛 年龄 99  来自 成都去往上海
obj1.myFun.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海
obj1.myFun.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
```



> call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，传null或undefined 默认指向 window ，第二个参数差别就来了：

> call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。

>  apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。

> bind 除了返回是函数以外，它 的参数和 call 一样。
>  当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！




下面输出什么？

```

<script type="text/javascript">
  function fn(a,b) {
    this.xxx = 3
    console.log(a,b,this)
  }
  fn(1,2)
  console.log(xxx)

  const obj = {m:0}
  fn.call(obj,1,2)

  fn.apply(obj,[1,2])
  fn.apply(null,[1,2])
  fn.apply(undefined,[1,2])
  fn.apply('12',[1,2])
  fn.apply('',[1,2])
  fn.apply(12,[1,2])
  fn.apply([1,2])














  // 结果
  // 1 2 Window 
  //  3
  //  1 2 {m: 0, xxx: 3}
  // 1 2 {m: 0, xxx: 3}
  1 2 Window 
  1 2 Window 
  1 2 String {"12", xxx: 3}
  1 2 String {"", xxx: 3}
  1 2 Number {12, xxx: 3}

  undefined undefined (2) [1, 2, xxx: 3]
</script>



```
