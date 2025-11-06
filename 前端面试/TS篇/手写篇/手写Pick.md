# 手写 pick

Pick<T, K> ==> 从类型 T 中选出属性 K，构造成一个新的类型。

前置知识：type： 作用就是给类型起一个新名字，支持基本类型、联合类型、元组及其他任何你需要的手写类型，常用于联合类型，与接口一样，用来描述对象或函数的类型。

手写实现：

```ts
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

```

使用：
```ts
type Person = {
    name: string,
    age: number,
    gender: string
}

type PersonName = MyPick<Person, 'name'| 'age'> // { name: string }
```
