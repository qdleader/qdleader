

TypeScript 中 Omit 和 Exclude 都有排除属性的能力，但是两者的使用场景和具体功能又不是完全一样


## Exclude

Exclude< T, U >
作用：T中取T、U交集的补集

Exclude<T, U> 的主要作用是从 T 类型中排除出可以赋值给 U 的类型，创建出一个新的子类型。比如下面的例子：
```ts
type T = 'a' | 'b' | 'c';
type U = 'a' | 'b';
type Result = Exclude<T, U>;  // 结果是 'c'
```

说明：

在这个例子中，我们定义了两个类型 T 和 U，T 是一个包含 'a', 'b', 'c' 三个成员的联合类型，而 U 是包含 'a', 'b' 的联合类型。通过 Exclude<T, U> 我们从 T 中排除了可以赋值给 U 的类型，所以结果类型 Result 就变成了 'c'。

## Omit
Omit<T, K> 的主要功能在于，从一个已有的对象类型 T 中排除指定的属性 K，进而创建一个新的对象类型。比如下面的例子：
```ts
type T = {
    a: number;
    b: string;
    c: boolean;
};
type K = 'a' | 'b';
type Result = Omit<T, K>;  // 结果是 { c: boolean }
```

说明：

在这个例子中，我们定义了一个对象类型 T，包含 'a', 'b' 和 'c' 三个属性。我们希望经过处理后得到一个新的对象类型，这个类型只包含 T 中的 'c' 属性。于是我们用 Omit<T, K> 排除了 'a' 和 'b' 两个属性，得到的新类型 Result 就只包含了 { c: boolean } 属性。

## 功能对比




> Exclude的参数类型没有限制，可以是字面量也可以是具体的类型如string、boolean等，而Omit的第二参数则必须是第一参数的子属性

> Omit 一般用于对象似的类型和 interface 类型；一般不用于联合类型；
 而 Exclude 可以用于联合类型,一般不用于 interface 类型和对象似的类型；

> Exclude 是针对联合类型，用于排除一些特定成员类型；Omit 是针对对象类型，用于忽略或排除某些特定属性；
