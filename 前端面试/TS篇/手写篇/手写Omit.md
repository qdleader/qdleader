# 手写Omit

```ts


type Omit<T,K> = Pick<T,Exclude<keyof T,K>>
```
    
## 解析
这个定义中，使用了 TypeScript 的类型推导机制和 Exclude 操作符。
首先，我们声明了两个泛型类型参数 T 和 K，其中 T 表示要操作的类型，K 表示要删去的属性名。
然后，使用了 keyof T 操作符，获取了 T 类型的所有属性名组成的联合类型。接着，使用 Exclude 操作符将 K 从这个联合类型中排除掉，得到一个新的属性名联合类型。最后，使用 Pick 操作符从 T 类型中选取删去了属性 K 后的属性集合。
例如，假设我们有以下类型：
```ts
interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    street: string;
  };
}

type PersonNameAndAge = Omit<Person, "address">;
```

PersonNameAndAge 将会是一个新的类型，它只包含 Person 中的 name 和 age 两个属性

