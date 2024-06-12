
# 如何让 var [a, b] = {a: 1, b: 2} 解构赋值成功



我们知道var [a, b] = [1, 2]这是肯定没有问题的，所以我们可以将对象身上的迭代器，打造成和数组身上的迭代器（arr[Symbol.iterator]）一样，代码如下：

```js
Object.prototype[Symbol.iterator] = function(){
  return Object.values(this)[Symbol.iterator]()
}

var [a, b] = {a: 1, b: 2}
console.log(a,b);

```