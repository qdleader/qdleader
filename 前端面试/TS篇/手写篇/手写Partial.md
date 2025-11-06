# Partial

Partial 可以快速把某个接口类型中定义的所有属性变成可选的。

```ts
interface ApiKey {
  id: number;
  name: string;
}

const dataType1: ApiKey = {
  id: 1,
  name: 'static'
}

const dataType2: ApiKey = {
  name: 'json'
}

```

这样会报错 Property 'id' is missing in type '{ name: string; }' but required in type 'ApiKey'.Key'.

```ts
interface ApiKey {
  id: number;
  name: string;
}

const dataType1: ApiKey = {
  id: 1,
  name: 'static'
}

const dataType2:  Partial<ApiKey> = {
  name: 'json'
}

```

这个时候在运行，就不会报错了。

我们可以自己实现
```ts
type MyPartial<T> = {
  [P in keyof T]?: T[P];
}

const dataType2:  MyPartial<ApiKey> = {
  name: 'json'
}
```

```ts
interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;

let person1: PartialPerson = { name: "Alice" }; // age 是可选属性，值默认为 undefined
let person2: PartialPerson = { }; // name 和 age 都是可选属性，值默认为 undefined
let person3: Partial<Person> = { name: "Bob", age: 20 }; // 和 Person 一样，都是必选属性

```
