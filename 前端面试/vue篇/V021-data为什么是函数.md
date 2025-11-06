# V021-data为什么是函数

## 1. 为什么 data 是一个函数

根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象

## 组件data定义函数与对象的区别

在我们定义好一个组件的时候，vue最终都会通过**Vue.extend()**构成组件实例

这里我们模仿组件构造函数，定义data属性，采用对象的形式
```js
function Component(){
 
}
Component.prototype.data = {
	count : 0
}
```

创建两个组件实例

```js
const componentA = new Component()
const componentB = new Component()
```

修改componentA组件data属性的值，componentB中的值也发生了改变
```js
console.log(componentB.data.count)  // 0
componentA.data.count = 1
console.log(componentB.data.count)  // 1
```

产生这样的原因这是两者共用了同一个内存地址，componentA修改的内容，同样对componentB产生了影响

如果我们采用函数的形式，则不会出现这种情况（函数返回的对象内存地址并不相同）
```js
function Component(){
	this.data = this.data()
}
Component.prototype.data = function (){
    return {
   		count : 0
    }
}
```

修改componentA组件data属性的值，componentB中的值不受影响
```js
console.log(componentB.data.count)  // 0
componentA.data.count = 1
console.log(componentB.data.count)  // 0
```

vue组件可能会有很多个实例，采用函数返回一个全新data形式，使每个实例对象的数据不会受到其他实例对象数据的污染
