### Object.hasOwn(obj, propKey)

Object.hasOwn() 方法是比 Object.prototype.hasOwnProperty() 方法更加 便捷 和 安全 的策略。
例如 Object.create(null) 创建一个不继承自 Object.prototype 的对象，使 hasOwnProperty 方法无法访问。



```
Object.create(null).hasOwnProperty("foo")
// Uncaught TypeError: Object.create(...).hasOwnProperty is not a function
```



Object.hasOwn(obj, propKey) 使用案例。
let object = { foo: false }
Object.hasOwn(object, "foo") // true

let object2 = Object.create({ foo: true })
Object.hasOwn(object2, "foo") // false

let object3 = Object.create(null)
Object.hasOwn(object3, "foo") // false

