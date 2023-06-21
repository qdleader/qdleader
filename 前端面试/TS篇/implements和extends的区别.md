

## extends
继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法



ts 中 extends 可以理解为 es6 class 对应的 extends
可以实现类的继承 

```js
class Son extends Father {}
```

可以实现和接口的继承

```js

interface IPeople {
  age: number;
  name: string;
}

interface IPerson extends IPeople {
  sex: string;  // IPerson上除了从IPeople继承的属性，还增加了sex属性
}

```

## implements

实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能


implements 理解为实现，A implements B，A 上要有 B 对应的属性和方法,不能用于两个 interface 之间
类和类之间
class Son implements Father {} // 用于类之间，此时没有继承的效果，而是要求Son上要有定义Father类的属性方法
类和接口之间：
class Son implements IFather {} // 用接口去规范class， 要求Son的属性和方法等要按照IFather接口中定义的来

```js

interface IPerson {
  age: number;
  name: string;
}

interface IPeoPle extends IPerson {
  sex: string;
}

class User implements IPerson {
  age: number;
  name: string;
}
interface IRoles extends User{

}
class Roles extends User{
  
}

```



