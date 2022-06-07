import {isObject} from '@vue/shared'

export function reactive(target) {
    if(!isObject(target)) {
        return 
    }
    const proxy = new Proxy(target,{
        get(target,key,receiver) {
           // return target[key]
            return Reflect.get(target,key,receiver)
        },
        set(target,key,value,receiver) {
            //target[key] = value
            return Reflect.set(target,key,value,receiver)
        }
    })
    return proxy;
}


未完待续

## 额外拓展

### 关于 reactive 和 ref 的对比
reactive vs ref
> reactive参数一般接受对象或数组，是深层次的响应式。ref参数一般接收简单数据类型，若ref接收对象为参数，本质上会转变为reactive方法
> 在JS中访问ref的值需要手动添加.value，访问reactive不需要
reactive的底层响应式原理是Proxy，ref的原理是defineProperty


