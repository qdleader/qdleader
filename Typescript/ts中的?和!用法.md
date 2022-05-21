
?用法

除了表示可选参数外，常用于防御性编程
```
const a = fetch(...) || {}		// 假设a是从后端拿到的一个对象类型数据
const unsafeData = a.b.c		// 这样写时不安全的，无法确保b是否有值，如果为空则b.c会进行报错
const safeData = a?.b?.c		// 实际上就是相当于 const safeData = a && a.b && a.b.c

```


!

! 叫非空断言操作符号，和?. 这个符号相反，这个符号表示对象后面的属性一定不是null 和 undefined


比如
```
let chartRef = ref<HTMLElement>;



echarts.init(chartRef.value)  // 这么写此时会报错，因为chartRef.value 有可能是undefined

有两种解决方案
1.
echarts.init(chartRef.value as HTMLElement)

2.
echarts.init(chartRef.value!)
```


## 总结
> 1. 属性或参数中使用 ？：表示该属性或参数为可选项

> 2. 属性或参数中使用 ！：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop

> 3. 变量后使用 ！：表示类型推断排除null、undefined




```

if (!!getItem('Authorization')) {
console.log('已登录')
}


var o={flag1:true};  
var test1=!!o.flag1;//等效于var test1=o.flag1||false;  
console.log(test1);//true
var test2=!!o.flag2;//等效于var test2=o.flag2||false;  
console.log(test2);//false 而不是undefined 或 null
```


由于对null与undefined用 ! 操作符时都会产生true的结果，
所以用两个感叹号的作用就在于，
如果设置了o中flag的值（非 null/undefined/0""/等值），自然test就会取跟o.flag一样的值；
如果没有设置，test就会默认为false，而不是 null或undefined。
