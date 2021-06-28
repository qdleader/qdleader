
js new操作符都做了哪些事情

```
1.创建一个空对象
let obj = {}
2.设置原型链
obj.__proto__ = Fn.prototype
3.改变this指向，使Fn的this指向obj，并执行Fn函数体
let result = Fn.call(fn);
4.判断Fn的返回值类型，如果是值类型，返回fn，如果是引用类型，就返回这个引用类型的对象
```


关于第四点，如果不是很清楚的话，我们来看下面的两个例子

```

// 第一种
function Person(name){
  this.name = name;
  return 1; // return undefined/NaN/'string'/null
}
let p = new Person('哈哈');
console.log(p); // { name:'哈哈' }


//第二种
function Person(name){
  this.name = name;
  return { age:20 };
}
let p = new Person('哈哈');
```
但是我们一般使用这种构造函数，不会有返回值。如果没有写return，相当于return undefined，JavaScript中的函数都是这样。undefined是值类型的，因此丢弃它，返回obj。
