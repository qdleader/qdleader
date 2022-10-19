## map 的使用
```
map.set(key,value)添加键值对到映射中
map.get(key)获取映射中某一个键的对应值
map.delete(key)将某一键值对移除映射
map.clear()清空映射中所有键值对
map.entries()返回一个以二元数组（键值对）作为元素的数组
map.has(key)检查映射中是否包含某一键值对
map.keys()返回一个当前映射中所有键作为元素的可迭代对象
map.values()返回一个当前映射中所有值作为元素的可迭代对象
map.size映射中键值对的数量
```



垃圾回收机制
我们知道，程序运行中会有一些垃圾数据不再使用，需要及时释放出去，如果我们没有及时释放，这就是内存泄露

JS 中的垃圾数据都是由垃圾回收（Garbage Collection，缩写为 GC）器自动回收的，不需要手动释放，它是如何做的喃？

很简单，JS 引擎中有一个后台进程称为垃圾回收器，它监视所有对象，观察对象是否可被访问，然后按照固定的时间间隔周期性的删除掉那些不可访问的对象即可

现在各大浏览器通常用采用的垃圾回收有两种方法：
引用计数
标记清除


引用计数
最早最简单的垃圾回收机制，就是给一个占用物理空间的对象附加一个引用计数器，当有其它对象引用这个对象时，这个对象的引用计数加一，反之解除时就减一，当该对象引用计数为 0 时就会被回收。

该方式很简单，但会引起内存泄漏：

// 循环引用的问题
function temp(){
    var a={};
    var b={};
    a.o = b;
    b.o = a;
}
这种情况下每次调用 temp 函数，a 和 b 的引用计数都是 2 ，会使这部分内存永远不会被释放，即内存泄漏。现在已经很少使用了，只有低版本的 IE 使用这种方式。

标记清除
V8 中主垃圾回收器就采用标记清除法进行垃圾回收。主要流程如下：

标记：遍历调用栈，看老生代区域堆中的对象是否被引用，被引用的对象标记为活动对象，没有被引用的对象（待清理）标记为垃圾数据。
垃圾清理：将所有垃圾数据清理掉


在我们的开发过程中，如果我们想要让垃圾回收器回收某一对象，就将对象的引用直接设置为 null

var a = {}; // {} 可访问，a 是其引用

a = null; // 引用设置为 null
// {} 将会被从内存里清理出去


但如果一个对象被多次引用时，例如作为另一对象的键、值或子元素时，将该对象引用设置为 null 时，该对象是不会被回收的，依然存在

```
var a = {}; 
var arr = [a];

a = null; 
console.log(arr)
// [{}]
```

如果作为 Map 的键喃？

var a = {}; 
var map = new Map();
map.set(a, '三分钟学前端')

a = null; 
console.log(map.keys()) // MapIterator {{}}
console.log(map.values()) // MapIterator {"三分钟学前端"}
如果想让 a 置为 null 时，该对象被回收，该怎么做喃？

WeakMap vs Map
ES6 考虑到了这一点，推出了： WeakMap 。它对于值的引用都是不计入垃圾回收机制的，所以名字里面才会有一个"Weak"，表示这是弱引用（对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为）。



### Map 相对于 WeakMap ：

Map 的键可以是任意类型，WeakMap 只接受对象作为键（null除外），而值可以是任意。
 2.WeakMap不能包含无引用的对象，否则会被自动清除出集合（垃圾回收机制）
Map 可以被遍历， WeakMap 不能被遍历



注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
```
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
```
上面代码的set和get方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined。



任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数，例如：
```
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3
```


如果读取一个未知的键，则返回undefined。
```
new Map().get('asfddfsasadf')
// undefined

注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined复制代码

上面代码的set和get方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined。
由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。
如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
let map = new Map();

map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123复制代码

Map 的属性及方法
属性：

constructor：构造函数
size：返回字典中所包含的元素个数



const map = new Map([
  ['name', 'An'],
  ['des', 'JS']
]);

map.size // 2复制代码

操作方法：

set(key, value)：向字典中添加新元素
get(key)：通过键查找特定的数值并返回
has(key)：判断字典中是否存在键key
delete(key)：通过键 key 从字典中移除对应的数据
clear()：将这个字典中的所有元素删除



遍历方法

Keys()：将字典中包含的所有键名以迭代器形式返回
values()：将字典中包含的所有数值以迭代器形式返回
entries()：返回所有成员的迭代器
forEach()：遍历字典的所有成员



const map = new Map([
        ['name', 'An'],
        ['des', 'JS']
]);
console.log(map.entries())    // MapIterator {"name" => "An", "des" => "JS"}
console.log(map.keys()) // MapIterator {"name", "des"}复制代码

Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。
map[Symbol.iterator] === map.entries
// true复制代码

Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。
对于 forEach ，看一个例子
const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

let map = new Map([
    ['name', 'An'],
    ['des', 'JS']
])
map.forEach(function(value, key, map) {
  this.report(key, value);
}, reporter);
// Key: name, Value: An
// Key: des, Value: JS复制代码

在这个例子中， forEach 方法的回调函数的 this，就指向 reporter
与其他数据结构的相互转换
1.Map 转 Array
const map = new Map([[1, 1], [2, 2], [3, 3]])
console.log([...map])    // [[1, 1], [2, 2], [3, 3]]复制代码

2.Array 转 Map
const map = new Map([[1, 1], [2, 2], [3, 3]])
console.log(map)    // Map {1 => 1, 2 => 2, 3 => 3}复制代码

3.Map 转 Object
因为 Object 的键名都为字符串，而Map 的键名为对象，所以转换的时候会把非字符串键名转换为字符串键名。
function mapToObj(map) {
    let obj = Object.create(null)
    for (let [key, value] of map) {
        obj[key] = value
    }
    return obj
}
const map = new Map().set('name', 'An').set('des', 'JS')
mapToObj(map)  // {name: "An", des: "JS"}复制代码

4.Object 转 Map
function objToMap(obj) {
    let map = new Map()
    for (let key of Object.keys(obj)) {
        map.set(key, obj[key])
    }
    return map
}

objToMap({'name': 'An', 'des': 'JS'}) // Map {"name" => "An", "des" => "JS"}复制代码

5.Map 转 JSON
function mapToJson(map) {
    return JSON.stringify([...map])
}

let map = new Map().set('name', 'An').set('des', 'JS')
mapToJson(map)    // [["name","An"],["des","JS"]]复制代码

6.JSON 转 Map
function jsonToStrMap(jsonStr) {
  return objToMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"name": "An", "des": "JS"}') // Map {"name" => "An", "des" => "JS"}

