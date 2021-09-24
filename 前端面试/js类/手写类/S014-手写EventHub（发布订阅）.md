## 手写 EventHub（发布-订阅）

```
核心思路是：

使用一个对象作为缓存
on 负责把方法发布到缓存的 EventName 对应的数组
emit 负责遍历触发（订阅） EventName 下的方法数组
off 找方法的索引，并删除

```



































```
class EventHub {
  cache = {};
  on(EventName, fn) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn)
  }
  emit(eventName) {
    this.cache[eventName].forEach((fn) => fn());
  }
  // 传参数的emit
  // 触发事件
  emit(eventName, ...rest) {
    this.events[eventName] &&
      this.events[eventName].forEach((fn) => fn.apply(this, rest));
  }
  off(eventName, fn) {
    const index = this.cache[eventName].indexOf(fn)
    if(index === -1) return;
    this.cache[eventName].splice(index,1)
  }
}
```



// 使用如下
// const event = new EventHub();

// const handle = (...rest) => {
//   console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);
