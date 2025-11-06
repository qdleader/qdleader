
# reactive对象重新赋值后丢失响应而ref不会

为什么 ref 调用 reactive 处理对象，为什么重新赋值后，没有失去响应式，但是 reactive 却失去了响应式？

我们去看看源码咋写的：
```js
class RefImpl {
    constructor(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value; // getter 返回的是_value的值
    }
    set value(newVal) {
        newVal = this.__v_isShallow ? newVal : toRaw(newVal);
        if (hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this.__v_isShallow ? newVal : toReactive(newVal); // setter 调用 toReactive 方法
            triggerRefValue(this, newVal);
        }
    }
}
```

我们读取 xxx.value 值的时候，getter 返回的是 xxx._value 的值，就是说，ref 定义的数据，value 和 _value 的值是一样的
我们修改 xxx.value 值的时候，setter 调用 toReactive 方法
```js
const toReactive = (value) => isObject(value) ? reactive(value) : value;

toReactive 方法判断是否是对象，是的话就调用 reactive 方法（印证了官网说的，ref 定义对象时，底层调用 reactive 方法实现）
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (isReadonly(target)) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
```

reactive 方法，先判断数据是否是 “只读” 的，不是就返回 createReactiveObject 方法处理后的数据

createReactiveObject 方法将对象通过 proxy 处理为响应式数据

## 结论

ref 定义数据（包括对象）时，都会变成 RefImpl(Ref 引用对象) 类的实例，无论是修改还是重新赋值都会调用 setter，都会经过 reactive 方法处理为响应式对象。
但是 reactive 定义数据（必须是对象），是直接调用 reactive 方法处理成响应式对象。如果重新赋值，就会丢失原来响应式对象的引用地址，变成一个新的引用地址，这个新的引用地址指向的对象是没有经过 reactive 方法处理的，所以是一个普通对象，而不是响应式对象

### 解决方法

使用 ref() 定义响应式变量 （推荐此方法，虽然需要多写 .value。但是可以避免很多坑）
在目标对象外边再多定义一个变量 let obj = reactive({ targetObj: {a:1,b:2}})，重新赋值时 obj.targetObj = {c:1,d:2}，不会丢失响应式，但是也是要多写一个 obj. 的前缀 （推荐方法一）
