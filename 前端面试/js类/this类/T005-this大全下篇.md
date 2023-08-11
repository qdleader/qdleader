this详解下


3.显示绑定： （使用某些方法，改变函数内部的this的指向。） 通过call(),apply()或bind方法直接指定this绑定的对象，如foo.call(obj).

注意： 使用.call()或者.apply执行的函数是会直接执行的。 bind（）是创建一个新的函数。需要手动调用才会执行。 .call()和。apply用法基本类似。不过call接受若干个参数，而apply接受的是一个数组。
```js
function foo() {
    console.log(this.a)
}
var obj = {
    a:2
}


foo.call(obj) //2
```
通过this.call,我们可以调用foo时强制把foo的this绑定到obj上。
另外，call， apply ，bind接受第一个参数是空，或者null，undefined的话，则会忽略如下
```js
function foo() {
    console.log(this.a)
}
var a = 2;

foo.call();
foo.call(null);
foo.call(undefined)
```






结果：
2
2
2
再来几个拓展： 基本看一遍就差不多
```js
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }, 0)
  }
}
var a = 3

obj2.foo1()
obj2.foo2()
```


结果：
2
window
3




setTimeout 调用的其实是window

window.setTimeout( function() {
          console.log(this)
      console.log(this.a)
},0)
把上面的
```js
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }.call(obj1), 0)
  }
}
var a = 3

obj2.foo1()
obj2.foo2()

```


结果

2
{a: 1}
1



```js

var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    function inner () {
      console.log(this)
      console.log(this.a)
    }
    inner()
  }
}
var a = 3
obj2.foo1()
obj2.foo2()

```



结果为
2
window{...}
3



因为调用函数的依然是window
下面说一个面试中最常见的
```js
function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)
```



结果为
2
1
2
uncaught TypeError


解释一下最后这个报错

因为foo()执行，然后打印里面的2没啥问题，但是由于foo返回的是undefined，因此undefiend。call（）就会报错








```js
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)
```







2
1
2
1


虽然foo返回一个匿名函数，但没调用。只有foo()() 才算调用哟







```js
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo.call(obj)()
```





结果是
1
2

foo()函数内的this虽然指定了是为obj，但是调用最后调用匿名函数的却是window。





```js
var obj = {
  a: 'obj',
  foo: function () {
    console.log('foo:', this.a)
    return function () {
      console.log('inner:', this.a)
    }
  }
}
var a = 'window'
var obj2 = { a: 'obj2' }

obj.foo()()
obj.foo.call(obj2)()
obj.foo().call(obj2)
```



答案是：
foo: obj和inner: window

foo: obj2和inner: window

foo: obj和inner: obj2








```js
var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a
    return function (c) {
      console.log(this.a + b + c)
    }
  }
}
var a = 2
var obj2 = { a: 3 }

obj.foo(a).call(obj2, 1)
obj.foo.call(obj2)(1)
```









结果为：
6
6


第一个6为3 + 2 + 1 

第二个6为2+ 3 + 1





# 硬绑定

硬绑定是显示绑定的一种变种
```js
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2
    }
    
    var bar = function () {
        foo.call(obj)
    }
    
    bar(); // 2
    
    setTimeout(bar, 100) // 2
    
    //应邦定的bar不可能在修改它的this
    bar.call(window) // 2
    
    
```  
    
    首先我们创建了函数bar();并且在它的内部手动调用了foo.call(obj),因此就强制把foo的this绑定到了obj上。无论之后如何调用函数的bar，它总会手动在obj上调用foo。这种绑定是一种显试的强制绑定，称之为硬绑定。

    硬绑定的典型应用场景就是创建一个包裹函数，传入所有的参数并返回接受到的所有值：
```js
   function foo(something) {
        console.log(this.a , something)
        return this.a + something;
    }

    var obj = {
        a: 2
    }

    var bar = function () {
        return foo.apply(obj, arguments)
    }

    var b = bar(3) // 2 3
    console.log(b); // 5

```
由于硬绑定是一种非常常用的模式，所以在ES5中提供了内置的方法Function.prototype.bind，它的用法如下：
```js
function foo(something) {
        console.log(this.a , something)
        return this.a + something;
    }

    var obj = {
        a: 2
    }

    var bar = foo.bind(obj);

    var b = bar(3) // 2 3

    console.log(b); // 5


```





```js
var obj = {
      a: 1,    // a是定义在对象obj中的属性
      fire: function () {
        console.log(this.a)
      }
}
 
var a = 2;  // a是定义在全局环境中的变量  
var fn = obj.fire;
var fireInGrobal = function () {
    fn.call(obj)   //硬绑定
}
       
fireInGrobal(); // 输出1
```



这样能够能够一次性 返回一个this被永久绑定到obj的fireInGrobal函数，这样我们就不必每次调用fireInGrobal都要在尾巴上加上call那么麻烦了。


var fireInGrobal = function () {
    fn.call(obj)   //硬绑定
}

或者
var fireInGrobal = fn.bind(obj);




```js
function foo1 () {
  console.log(this.a)
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  foo1.call(obj)
}

foo2()
foo2.call(window)

答案：
2
2
```


这里foo2函数内部的函数foo1我们使用call来显式绑定obj，就算后面再用call来绑定window也没有用了

```js
function foo1 (b) {
  console.log(`${this.a} + ${b}`)
  return this.a + b
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  return foo1.call(obj, ...arguments)
}

var num = foo2(3)
console.log(num)


```




答案：

'2 + 3'
5






还有forEach，map，filter，它们的第二个参数也是能绑定this的
```js
function foo (item) {
  console.log(item, this.a)
}
var obj = {
  a: 'obj'
}
var a = 'window'
var arr = [1, 2, 3]

// arr.forEach(foo, obj)
// arr.map(foo, obj)
arr.filter(function (i) {
  console.log(i, this.a)
  return i > 2
}, obj)

```

答案：

1 "obj"
2 "obj"
3 "obj"


如果我们没有传递第二个参数obj的话，this.a打印出来的肯定就是window下的a了，但是传入了之后将obj显示绑定到第一个参数函数上。
(关于arr.filter为什么也会打印出1, 2, 3，那是因为虽然我们使用了return i > 2，不过在执行阶段filter还是把每一项都打印出来)

在这里，我把显式绑定和隐式绑定下，函数和“包含”函数的对象间的关系比作买房和租房的区别。 因为this的缘故

在隐式绑定下：函数和只是暂时住在“包含对象“的旅馆里面，可能过几天就又到另一家旅馆住了 在显式绑定下：函数将取得在“包含对象“里的永久居住权，一直都会”住在这里“

总结一下：

this 永远指向最后调用它的那个对象 匿名函数的this永远指向window 使用.call()或者.apply()的函数是会直接执行的 bind()是创建一个新的函数，需要手动调用才会执行 如果call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数 forEach、map、filter函数的第二个参数也是能显式绑定this的

## new绑定

使用new调用某个构造函数，代码如下：
```js
function Foo(a) {
  this.a = a;
  console.log(this.a);
}
var obj = new Foo(2);





console.log(obj.a) // 2

```







```ts

function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = function () {
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
person1.foo1()
person1.foo2()()
```




结果为：
‘person1'
''


第二个this.name打印的应该就是window下的name了，但是这里window对象中并不存在name属性，所以打印出的是空。
 

```js
var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person2 = {
  name: 'person2',
  foo: function() {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
  
var person1 = new Person('person1')
person1.foo()()
person2.foo()()
```

答案：

'person1'
'window'
'person2'
'window'





```ts

var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo.call(person2)()
person1.foo().call(person2)



```





答案是：
'person2'
'window'
'person1'
'person2'



----】=--百花竞开了云5人体 2345678b n 8 m

把上面的生成的person1想像成
var person1 = {
	name: 'person1',
	foo: function () {
		console.log(this.name)
		return function () {
			console.log(this.name)
		}
	}
}
person1.foo.call(person2)()将foo()函数内的this指向了person2，所以打印出person2，而内部返回的匿名函数是由window调用的，所以打印出window。(类似题目4.9)
person1.foo().call(person2)是将匿名函数的this显式绑定到了person2上，所以打印出来的会是person2

```ts
var obj = {
      a: 1,
      obj2: {
           a: 2,
           obj3: {
                a:3,
                getA: function () {
                    console.log(this.a)   
                 }
           }
       }
}
 
obj.obj2.obj3.getA();  // 输出3
```
