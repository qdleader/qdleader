# B-006let a = 0, b = 0 function fn(a) {   fn = function fn2(b) {     console.log(++a+b);   }   console.log(a++); } 

```js
let a = 0, b = 0
function fn(a) {
  fn = function fn2(b) {
    console.log(++a+b);
  }
  console.log(a++);
}
fn(1)  
fn(2) 
```









## 答案

fn(1)  //1 
fn(2) // 5



## 解析

第一次调用A时，执行到console.log(a++)时，a已经完成自加，此时a的值为2，a++的值为1。

fn(1)=1

第二次调用A时，fn已经被重新赋值，指向了一个新的函数引用；

由于标识符A是在全局作用域定义的，所以在函数内部被重新赋值，在全局作用域也可以访问到重新赋值后的函数。

此时，也创建了一个闭包，该闭包保存了创建环境的活动对象。

此时活动对象：{ a: 2 }，同时， 根据传入的数值2,++a值为3，确定 b = 2。
执行到 console.log(++a + b)，故而输出5
fn(2)=5



## 思考

```
//此处说明 ++操作符的特性。
var i = 0;
var eg = i++;
var eg1 = ++i;
console.log(i, eg, eg1) // 2 0 2
```
> '+' 在后面 后加
> 
> '+' 在前面 先加