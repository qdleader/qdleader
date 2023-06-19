
## type 和 interface的区别

相同点
都可以描述一个对象或者函数


### interface
```js
nterface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void;
}
```


### type
```
type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number)=> void;

```
都允许拓展（extends）
interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。
**interface extends interface**
```js
interface Name { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```

**type extends type**

```js
type Name = { 
  name: string; 
}
type User = Name & { age: number  };
```

**interface extends type**
```js
type Name = { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```

**type extends interface**
```js
interface Name { 
  name: string; 
}
type User = Name & { 
  age: number; 
}
```




#### 不同点：

  type类型别名，可以定义基础类型，元组等
  type不会创建一个真正的新的类名
  类型别名无法被实现implements，而接口可以被派生类实现
  类型别名重名会抛出错误，接口重名是会产生合并



type 可以而 interface 不行

type 可以声明基本类型别名，联合类型，元组等类型
```js
// 基本类型别名

type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```


type 语句中还可以使用 typeof 获取实例的 类型进行赋值

 当你想获取一个变量的类型时，使用 typeof
```js
let div = document.createElement('div');
type B = typeof div
```




其他

```js
type StringOrNumber = string | number;  
type Text = string | { text: string };  
type NameLookup = Dictionary<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
```

## interface 可以而 type 不行
interface 能够声明合并
```js
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 的接口为 {
  name: string
  age: number
  sex: string 
}
*/

```



## 总结


相同点：

    > 都可以描述对象或者函数
    > 都允许扩展（extends）

不同点：

    > 类型别名可以为任何类型引入名称，例如基本类型，联合类型等。
    > 类型别名不支持继承
    > 类型别名不会创建一个类型的名字
    > 类型别名无法被实现implements，而接口可以被派生类实现
    > 类型别名重名会抛出错误，接口重名是会产生合并




一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 。其他更多详情参看 官方规范文档

