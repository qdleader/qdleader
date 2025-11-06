# proxy的基本使用

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

其基本语法如下：

const p = new Proxy(target, handler);
请注意到定义里的关键词“用于创建一个对象的代理”，因此Proxy只能代理对象，任何原始值类型都是无法代理的 。如对number, boolean类型的原始值代理都会得到 “Cannot create proxy with a non-object as target or handler”的错误：

```js
const obj = {
  foo: 'bar',
  fn () {
    console.log('fn调用了');
  }
};
const handler = {
  get (target, key) {
    console.log(`我被读取了${key}属性`);
    return target[key];
  },
  set (target, key, val) {
    console.log(`我被设置了${key}属性, val: ${val}`);
    target[key] = val;
  },
  apply (target, thisArg, argumentsList) {
    console.log('fn调用被拦截');
    return target.call(thisArg, ...argumentsList);
  }
};
const p = new Proxy(obj, handler);
p.foo; // 输出：我被读取了foo属性
p.foo = 'bar1'; // 输出：我被设置了foo属性, val: bar1
p.fn(); // 输出：我被读取了fn属性 fn调用了
```

Proxy的13 种方法如下

```js
// 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。
handler.getPrototypeOf()

// 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。
handler.setPrototypeOf()

// 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。
handler.isExtensible()

// 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。
handler.preventExtensions()

// 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。
handler.getOwnPropertyDescriptor()

// 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。
andler.defineProperty()

// 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。
handler.has()

// 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。
handler.get()

// 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。
handler.set()

// 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。
handler.deleteProperty()

// 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。
handler.ownKeys()

// 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。
handler.apply()

// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。
handler.construct()

```
