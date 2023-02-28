
## call
```js
 Function.prototype.myCall = function(context, ...args) {
    context = context || window; // 参数默认值并不会排除null，所以重新赋值
    let fn = Symbol();
    context[fn] = this; // this是调用call的函数
    const result = context.fn(...args);
    delete context.fn; // 执行后删除新增属性
    return result;
  }

  let Person = {
      name: 'Tom',
      say(age) {
          console.log(this)
          console.log(`我叫${this.name}我今年${age}`)
      }
  }

  Person1 = {
      name: 'Tom1'
  }

  Person.say.call(Person1,18)//我叫Tom1我今年18
```



## apply
```js
// apply原理一致  只是第二个参数是传入的数组
Function.prototype.myApply = function (context, args) {
    context = context || window; 
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol();
  context[fn] = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
  // 执行函数并返回结果
};
```