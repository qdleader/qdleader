# 手写Exclude

Exclude 是 TypeScript 的一种类型操作符，用于从类型 T 中排除掉指定的类型 K。其定义为：


```typescript

type Exclude<T, K> = T extends K ? never : T;
```

这个定义中，使用了 TypeScript 的条件类型，它主要的义务是允许我们在类型系统中进行运算和推断。
具体来说，在这个条件类型中，我们首先声明了一个泛型类型参数 T 和 K。然后，使用了 extends 关键字将 T 与 K 进行对比。如果 T 是 K 的子类型，则返回 never 类型；否则返回 T 类型。
为什么要返回 never 呢？因为 never 代表的是永远不可能出现的类型，相当于一个空集合。这样，在使用 Exclude 操作符时，我们就可以将 T 中与 K 相同的类型排除掉，从而得到一个新的类型。
例如，假设我们有以下两个类型：


```ts
type A = "a" | "b" | "c" | "d";
type B = "b" | "d" | "e" | "f";

```
我们可以使用 Exclude 操作符将 B 中包含的类型从 A 中排除掉，得到一个新的类型 C：

```ts
type C = Exclude<A, B>; // "a" | "c"
```


因为 A 中包含了四个类型，而 B 中包含了 "b" 和 "d"，所以将这两个类型从 A 中排除后，剩余的类型就是 "a" 和 "c"。因此，新的类型 C 就是 "a" 或者 "c"
