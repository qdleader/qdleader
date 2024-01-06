## Proxy是如何监听数组的

```js
  let arr = [1,2,3]
  let proxy = new Proxy(arr, {	
 	get: function (target, key, receiver) {
         console.log('get的key为 ===>' + key);
         return Reflect.get(target, key, receiver);
     },
     set(target, key, value, receiver){
         console.log('set的key为 ===>' + key, value);
         return Reflect.set(target, key, value, receiver);
     }
 })
 proxy[0]          // set的key为 ===>0
 proxy[3] = 12     // set的key为 ===>3  12

```

key值是索引，如果使用数组的方法呢？

```js
  let arr = [1,2,3]
  let proxy = new Proxy(arr, {	
 	get: function (target, key, receiver) {
         console.log('get的key为 ===>' + key);
         return Reflect.get(target, key, receiver);
     },
     set(target, key, value, receiver){
         console.log('set的key为 ===>' + key, value);
         return Reflect.set(target, key, value, receiver);
     }
 })

proxy.push('2')
// get的key为 ===>push
// get的key为 ===>length
// set的key为 ===>3 2
// set的key为 ===>length 4

```
可以看到，get方法走了两次，set方法走了两次。因为push方法其实做了两步，第一次更新的是数组中的第4项，第二次更新的是数组的length
如何避免多次执行呢
用的hasOwProperty, set肯定会出发多次，但是通知只出去一次， 比如数组修改length的时候，hasOwProperty是true， 那就不触发


```js
function hasOwn(target,key){
  return target.hasOwnProperty(key);
}

  let arr = [1,2,3]
  let proxy = new Proxy(arr, {	
 	get: function (target, key, receiver) {
         console.log('get的key为 ===>' + key);
         return Reflect.get(target, key, receiver);
     },
    set(target, key, value, receiver) {
        // 更改、新增属性
        let oldValue = target[key]; // 获取上次的值
        let hadKey = hasOwn(target,key); // 看这个属性是否存在
        let result = Reflect.set(target, key, value, receiver);
        if(!hadKey){ // 新增属性
            console.log('更新 添加')
        }else if(oldValue !== value){ // 修改存在的属性
            console.log('更新 修改')
        }
        // 当调用push 方法第一次修改时数组长度已经发生变化
        // 如果这次的值和上次的值一样则不触发更新
        return result;

    }
 })

proxy.push('2')
```
这样 set 就执行了一次啦



```js
  let arr = [1,2,3]
  let proxy = new Proxy(arr, {	
 	get: function (target, key, receiver) {
         console.log('get的key为 ===>' + key);
         return Reflect.get(target, key, receiver);
     },
     set(target, key, value, receiver){
         console.log('set的key为 ===>' + key, value);
         return Reflect.set(target, key, value, receiver);
     }
 })

console.log(proxy, 'proxy的length=' + proxy.length)
console.log(arr, 'arr的length=' + arr.length)

// get的key为 ===>length
// Proxy(Array) {0: 1, 1: 2, 2: 3, 3: '2'} 'proxy的length=4'
// (4) [1, 2, 3, '2'] 'arr的length=4'

```

从console的结果所以可以看出，这里的proxy就是个类数组。那么可以猜想，如果proxy第一个参数传的是数组时，proxy就会转化成类数组，也可以调用数组的方法，length、push等，找不到的方法就去原型链上找。

所以，如果调用push等方法，key就是push，数组长度改变，key值就是length。









