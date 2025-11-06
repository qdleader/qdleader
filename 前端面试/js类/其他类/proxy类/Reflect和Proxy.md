
# Reflect和Proxy

Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers 的方法相同.

既然 作用一致 ，那么使用Reflect.get有何意义呢，

```js
const obj = {
  foo: 'foo',
  get bar () {
    return this.foo;
  }
};
const handler = {
  get (target, key, receiver) {
    console.log(`我被读取了${key}属性`);
    return target[key];
  },
  set (target, key, val, receiver) {
    console.log(`我被设置了${key}属性, val: ${val}`);
    target[key] = val;
  }
};
const p = new Proxy(obj, handler);
p.bar; // 输出：我被读取了bar属性
// Q： 为什么读取foo属性没有被拦截

```

在上述代码中我们定义了一个foo属性和bar属性，其中bar属性是一个访问器属性，通过get函数 return this.foo获取得到 的，因此按理来说我们在读取bar属性时候会触发读取foo属性，也同样会被get的trap所拦截到，但实际代码运行结果并没有拦截到foo属性。这是为什么呢，答案的关键在于bar访问器里的this指向。梳理下代码运行过程：p.bar 实际上会被handler的get捕获 返回 target['bar']，而这里的target实际上就是obj，所以这时候bar访问器里的this指向obj，this.foo，实际就是obj.foo。而obj并不是proxy对象p，所以访问其foo属性并不会被拦截到。

那么如何也能触发到foo属性的拦截呢，这时候Reflect就派上用场了，有以下代码：

```js

const obj = {
  foo: 'foo',
  get bar () {
    return this.foo;
  }
};
const handler = {
  get (target, key, receiver) {
    console.log(`我被读取了${key}属性`);
    return Reflect.get(target, key, receiver);
  },
  set (target, key, val, receiver) {
    console.log(`我被设置了${key}属性, val: ${val}`);
    return Reflect.set(target, key, val, receiver);
  }
};
const p = new Proxy(obj, handler)
p.bar; // 输出：我被读取了bar属性   我被读取了foo属性
```

如上面代码所示，我们能正确地触发了foo属性的拦截，其实现的关键在于Reflect.get的第三个参数receiver ，其作用就是改变this指向，在MDN里有以下描述：

如果target对象中指定了getter，receiver则为getter调用时的this值。

而我们这里的receiver就是p对象，this.foo 等同于 p.foo，因此访问bar属性的 时候同样可以拦截得到。也正是因为this指向的问题，所以建议在proxy对象拦截器里的属性方法都通过Reflex.*去操作。
