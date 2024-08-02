# 手写Required
Required 是 TypeScript 内置的一个类型操作符，它用于将某个类型的所有可选属性都转换为必选属性。
```ts
type Required<T> = {
    [P in keyof T]-?: T[P]
}

```





这个定义使用了 TypeScript 中的映射类型（Mapped Types）和索引访问类型（Index Access Types）。
首先，声明一个泛型类型 T 作为待操作的类型。然后，使用了映射类型语法，声明一个新类型，其属性名为 P，该属性名必须是 T 的属性名之一，属性值为该属性名在 T 类型中对应的类型。并在属性名前使用 -? 符号来将所有属性设置为必选属性。
该类型操作符的作用是保证某个类型中的每个属性都必须有值，从而避免在使用该类型的地方出现意料之外的错误或者异常情况。

下面是一个使用 Required 操作符的示例：
```ts
interface Person {
  name?: string;
  age?: number;
}

type RequiredPerson = Required<Person>;

let person: RequiredPerson = { name: "Alice", age: 30 };
person.name = "Carol"; // 正常
person.age = 50; // 正常
person = { }; // 报错，因为 name 和 age 是必选属性
```
上面的示例中，我们先声明了一个 Person 接口，然后使用 Required 操作符将其转化为必选类型 RequiredPerson，接着创建一个必选类型的变量 person，并赋初值为 { name: "Alice", age: 30 }。由于 RequiredPerson 中的每个属性都是必选属性，所以我们必须设置 person 中的所有属性。如果我们忘记设置某个属性，或者设置错误的属性名，就会在编译期间发生错误，避免出现运行期错误。
