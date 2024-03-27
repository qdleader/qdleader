# Decorator，即装饰器，从名字上很容易让我们联想到装饰者模式

一、介绍
Decorator，即装饰器，
简单来说，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。
ES6中Decorator函数亦如此，其本质也不是什么高大上的结构，只是一个普通的函数，用于扩展类属性和类方法

eg:
这里定义了一个baby，这个时候他什么技能都没有


```js
class baby{ 
}
// 定义一个获得talk技能的函数，即装饰器

function talk(target){
    target.canTalk = true
}
// 使用该装饰器对baby进行强化

@talk
class baby{
}
// 这个时候baby已经拥有了Talk技能了

baby.canTalk // true
```

上面的代码虽然简单，但也能够清晰地看到使用的Decorator优点：


> 代码的吸引力变强了，装饰器源自一个注释
> 在不改变原有代码的情况下，对原有功能进行扩展


```js

@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
//下面@testable是一个装饰器，target就是建立的类，即MyTestableClass，实现了为类添加静态属性

@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true
// 如果需要传递参数，可以在装饰器外层再封装底层函数

function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false

```
装饰类属性
当对类属性进行装饰的时候，能够接受三个参数：

类的原型对象
需要装饰的属性名
装饰属性名称的描述对象
首先定义一个readonly装饰器
```js
function readonly(target, name, descriptor){
  descriptor.writable = false; // 将可写属性设为false
  return descriptor;
}
// 使用readonly装饰类的name方法

class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}

// 以下引用

readonly(Person.prototype, 'name', descriptor);


```
如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行


```js
function dec(id){
    console.log('evaluated', id);
    return (target, property, descriptor) =>console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
外层装饰器@dec(1)先进入，但内层装饰器@dec(2)先执行
```
注意
**装饰器不能用于修饰函数，因为函数存在变量声明情况**
```js
var counter = 0;

var add = function () {
  counter++;
};

@add
function foo() {
}
编译阶段，变成下面

var counter;
var add;

@add
function foo() {
}

counter = 0;

add = function () {
  counter++;
};

结果是执行后counter等于1，但是实际结果counter等于0
```
## 三、使用场景
基于Decorator强大的作用，我们能够完成各种场景的需求，下面简单列举几下：

使用react-redux的时候，如果写成下面这种形式，既不雅观也很麻烦
```js
class MyReactComponent extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);
通过装饰器就简洁多了

@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}
将mixins，也可以写成装饰器，让使用更加简洁了

function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list);
  };
}

// 使用
const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // "foo"
下面再讲core-decorators.js几个常见的装饰器

@antobind
autobind装饰器使得方法中的this对象，绑定原始对象

import { autobind } from 'core-decorators';

class Person {
  @autobind
  getPerson() {
    return this;
  }
}

let person = new Person();
let getPerson = person.getPerson;

getPerson() === person;
// true
@readonly
readonly装饰器使得属性或方法不可写

import { readonly } from 'core-decorators';

class Meal {
  @readonly
  entree = 'steak';
}

var dinner = new Meal();
dinner.entree = 'salmon';
// Cannot assign to read only property 'entree' of [object Object]
@deprecate
deprecate或deprecated装饰器在控制台显示一条警告，表示该方法将被废除

import { deprecate } from 'core-decorators';

class Person {
  @deprecate
  facepalm() {}

  @deprecate('功能废除了')
  facepalmHard() {}
}

let person = new Person();

person.facepalm();
// DEPRECATION Person#facepalm: This function will be removed in future versions.

person.facepalmHard();
// DEPRECATION Person#facepalmHard: 功能废除了


```
参考文献
https://es6.ruanyifeng.com/#docs/decorator