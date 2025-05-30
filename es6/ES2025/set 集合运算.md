# 集合运算

```js
Set.prototype.union(); // 返回两个集合的并集，包含所有不重复的元素
Set.prototype.intersection(); // 返回两个集合的交集，包含两个集合共有的元素
Set.prototype.difference(); // 返回两个集合的差集，返回第一个集合中独有的元素
Set.prototype.symmetricDifference(); // 返回两个集合的对称差集，不同时存在于两个集合中的元素
Set.prototype.isSubsetOf(); // 判断当前集合是否为另一个集合的子集
Set.prototype.isSupersetOf(); // 判断当前集合是否为另一个集合的超集
Set.prototype.isDisjointFrom(); // 判断两个集合是否没有共同元素
```

```js
const A = new Set([1, 2, 3]);
const B = new Set([3, 4, 5]);

console.log(A.union(B)); // Set(5) {1, 2, 3, 4, 5}
console.log(A.intersection(B)); // Set(1) {3}
console.log(A.difference(B)); // Set(2) {1, 2}
console.log(A.symmetricDifference(B)); // Set(4) {1, 2, 4, 5}
```
