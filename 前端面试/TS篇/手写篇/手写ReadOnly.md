# 手写ReadOnly

Readonly 是 TypeScript 内置的一个类型操作符，它用于将某个类型中每个属性设置为只读属性，这表示这些属性的值不能被修改。
下面是 Readonly 的代码：
```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

这个定义使用了 TypeScript 中的映射类型（Mapped Types）和索引访问类型（Index Access Types）。
首先，声明一个泛型类型 T 作为待操作的类型。然后，使用了映射类型语法，声明一个新类型，其属性名为 P，该属性名必须是 T 的属性名之一，属性值为该属性名在 T 类型中对应的类型。并且使用 readonly 关键字将属性设置为只读属性。
该类型操作符的作用是保护类型中的属性免于被错误的修改，特别是防止在多个地方引用该类型中的同一个属性时产生冲突。
以下是一个使用 Readonly 操作符的示例：
```ts
interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>;

let person: ReadonlyPerson = { name: "Alice", age: 30 };
person.name = "Bob"; // 报错，因为 name 是只读属性
person.age = 40; // 报错，因为 age 是只读属性
person = { name: "Carol", age: 50 }; // 可以修改整体属性值
```

上面的示例中，我们先声明了一个 Person 接口，然后使用 Readonly 操作符将其转化为只读类型 ReadonlyPerson，接着创建一个只读类型的变量 person，并赋初值为 { name: "Alice", age: 30 }。由于 ReadonlyPerson 中的每个属性都是只读属性，所以我们不能修改 person 中的任何属性。如果要修改整个数据对象，我们需要分配一个新对象来覆盖 person。
