

vue2 中 采用 defineProperty 来劫持整个对象，然后进行深度遍历所有属性，给每个属性添加getter和setter，实现响应式，但有以下问题

> 检测不到对象属性的添加和删除
> 数组API 无法监听到（ 无法监听数组基于下标的修改）
> 需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题
> 对 Map、Set、WeakMap 和 WeakSet 不支持；

2、proxy： 监听是针对一个对象的，那么对于这个对象的所有操作会进入监听操作


## 总结
> Object.defineProperty 只能遍历对象属性进行劫持
> Proxy 可以直接劫持整个对象，并返回一个新的对象，我们可以只操作新的对象达到响应式目的
> Proxy 可以直接监听数组的变化(push、 shift、splice)
> Proxy 有多达13种拦截方法，不限于apply、ownkeys、deleteProperty、has等等，这个是Object.defineProperty 不具备的



