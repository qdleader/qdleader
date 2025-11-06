

## 装饰器允许我们修改或扩展类、方法、属性和其他声明的行为。

```ts
function uppercase(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = () => value;
  const setter = (newValue: string) => {
    value = newValue.toUpperCase();
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person {
  @uppercase
  name: string;
}

const person = new Person();
person.name = 'John Doe';
console.log(person.name); // Output: JOHN DOE

```
