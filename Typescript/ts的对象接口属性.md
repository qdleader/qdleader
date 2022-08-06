


## 接口类型


### 可选属性
```
interface IState {
    name: string,
    age?:number  //可有可无
}

let obj: IState
obj = {
    name: 'qdleader',
    age:12
} 
obj = {
    name: 'qdleader',
} 
```

#### 属性个数不确定时候 
```
interface IState2 {
    name: string,
    age: number,
    [propName:string]:any
}
let obj2: IState2 = {
    name: 'qdleader',
    age: 12,
    sex:'male',
    isMarry:true
}
```

#### 只读属性
```
interface IState3 {
    readonly name: string,
}
let obj3: IState3
obj3 = {
     name: 'qdleader',
} 
obj3.name = 'qdleader1' // name 一旦定义赋值了就禁止修改

```


## 接口继承


如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用

语法：

```
interface 接口2 extends 接口1 {
    属性1： 类型1， // 接口2中特有的类型 
 }
```

```
interface a { 
    x: number; 
    y: number 
}


// 继承 a
// 使用 extends(继承)关键字实现了接口
interface b extends a {
  z: number
}
```
// 继承后，b 就有了 a 的所有属性和方法(此时，b 同时有 x、y、z 三个属性)



## 接口和类型 的区别
interface（接口）和 type（类型别名）的对比：


相同点：都可以给对象指定类型

不同点:
接口，只能为对象指定类型。它可以继承。
类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名



先有的 interface，后有的 type,推荐使用 type
// 接口的写法-------------
interface IPerson {
	name: string,
	age: number
}

const user1：IPerson = {
	name: 'a',
	age: 20
}

// type的写法-------------
type Person  = {
	name: string,
	age: number
}
const user2：Person = {
	name: 'b',
	age: 20
}




