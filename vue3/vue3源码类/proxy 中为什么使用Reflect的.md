

## Reflect 有返回值

对于某个对象，赋值并不总是成功的。

例如，我们把 input 的name属性设置为只读，如下：
```js
Object.defineProperty(input, 'name', {
    get () {
       return this.getAttribute('name') || 'text';
    }
});
```

传统的使用等于号进行的属性赋值并不能知道最后是否执行成功，需要开发者自己进行进一步的检测。

例如：
```js
console.log(input.type = 'qdleader');
```
上面一行赋值返回值是'qdleader'，至于改变输入框的type属性值是否成功，不得而知。

```js
// 输出 false
console.log(Reflect.set(input, 'name', 'qdleader'));
```
但是下面一行语句使用的Reflect.set()方法，就可以知道是否设置成功，因为Reflect.set()的返回值是true或者false（只要参数类型准确）。


##  Reflect方法还有个好处，不会因为报错而中断正常的代码逻辑执行

```js
(function () {
    'use strict';

    let frozen = { name: 'yyy' };
    Object.freeze(frozen);

    frozen['name'] = 'qdleader';

    console.log('no log');
})();
```
会出现下面的TypeError错误：

Uncaught TypeError: Cannot assign to read only property ‘name’ of object ‘#<Object>’
后面的语句console.log('no log')就没有被执行。

但是如果使用Reflect方法，则console语句是可以执行的，例如：

```js
(function () {
    'use strict';

    let frozen = { name: 'yyy' };
    Object.freeze(frozen);

    Reflect.set(frozen, 'name', 'qdleader');

    console.log('no log');
})();
```


## receiver参数


receiver是接受者的意思，表示调用对应属性或方法的主体对象，通常情况下，receiver参数是无需使用的，但是如果发生了继承，为了明确调用主体，receiver参数就需要出马了。

比方说下面这个例子：

let people = {
  _name: '外星人',
  get name () {
    return this._name;
  }
}
let peopleQD = new Proxy(people, {
  get (target, prop, receiver) {
    return target[prop];
  }
});

let threePeople = {
  __proto__: peopleQD,
  _name: '三体人'
};

// 结果是外星人
console.log(threePeople.name);
实际上，这里预期显示应该是“三体人”，而不是“外星人”。

这个时候，就需要使用receiver参数了，代码变化部分参见下面标红的那一行：

let people = {
  _name: '外星人',
  get name () {
    return this._name;
  }
}
let peopleQD = new Proxy(people, {
  get (target, prop, receiver) {
    return Reflect.get(target, prop, receiver);
    // 也可以简写为 Reflect.get(...arguments) 
  }
});

let threePeople = {
  __proto__: peopleQD,
  _name: '三体人'
};

// 结果是三体人 
console.log(threePeople.name);
此时，运行结果就是预期的“三体人”了


实际上 Reflect 的函数可以接收第三个参数，即函数调用过程中的 this
比如：
```js
const obj = {
  get test() {
      return this.age + this.name
  }
}

const obj2 = {
  name: "Ben",
  age: "18"
}

console.log(Reflect.get(obj, "test", obj2)) // 输出 18Ben
```


### Reflect对象经常和Proxy代理一起使用，原因有三点：

> Reflect提供的所有静态方法和Proxy第2个handle参数方法是一模一样的。具体见后面的对比描述。
> Proxy get/set()方法需要的返回值正是Reflect的get/set方法的返回值，可以天然配合使用，比直接对象赋值/获取值要更方便和准确。
> receiver参数具有不可替代性。




