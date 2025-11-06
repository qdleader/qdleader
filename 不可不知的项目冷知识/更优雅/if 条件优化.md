## if else代码优化

## 优化方案一：提前return，去除不必要的else

如果if-else代码块包含return语句，可以考虑通过提前return，把多余else干掉，使代码更加优雅。

优化前：
```js
if(condition){
    //doSomething
}else{
    return ;
}
```

优化后：
```js
if（!condition）{
    return;
}
//doSomething
```

## 优化方案二：使用条件三目运算符

使用条件三目运算符可以简化某些if-else,使代码更加简洁，更具有可读性。

优化前：
```js
int  price;
if(condition){
    price = 80;
}else{
    price = 100;
}
```

优化后：

```js
int price = condition ? 80 : 100;
```

## 优化方案三：排非策略

比如用户登录场景，如果用户名和密码输入框为空，那么我们就提示用户”用户名和密码不能为空”；如果有值，就执行登录的操作。
优化前
```js
if (user && password) {
    // 逻辑处理
} else {
    throw('用户名和密码不能为空!')
}
```

优化后
```js
if (!user || !password) return throw('用户名和密码不能为空!')
// 逻辑处理
```

表单提交时，需要提前排除那些提交不规范的内容，通常情况下，表单提交遇到不符合我们要求大于我们提交成功的情形，排非策略是个很不错的选择。

## 单个if多条件优化

优化前
```js
function test(type) {
  if (type === 'jpg' || type === 'png' || type === 'gif' || type === 'svg') {
    console.log("该文件为图片");
  }
}
```

优化后
```js
function test(type) {
    const imgArr = ['jpg', 'png', 'gif', 'svg']
    if (imgArr.includes(type)) {
        console.log("该文件为图片")
    }
}
```

## 多个else if分支优化

多个else if通常是一个糟糕的选择，它导致设计复杂，代码可读性差，并且可能导致重构困难。

```js
if (this.type === 'A') {
  this.handleA();
} else if (this.type === 'B') {
  this.handleB();
} else if (this.type === 'C') {
  this.handleC();
} else if (this.type === 'D') {
  this.handleD();
} else {
  this.handleE();
}
```

我们经常遇到多个else if条件判断代码，随着逻辑复杂性的增加，else if的代码将变得越来越肿。
不同条件分支的代码具有很高的耦合度，先前的条件判断将影响后续的代码流，并且此类代码在后续开发中难以维护。
我们可以通过switch、key-value和Map来优化代码。
switch
```js
  switch(val){
    case 'A':
      handleA()
      break
    case 'B':
      handleB()
      break
    case 'C':
      handleC()
      break
    case 'D':
      handleD()
      break
  }
```

key-value
虽然switch语句在逻辑上确实比else if语句简单，但是代码本身也有点多。
其实我们对象枚举，将条件与特定操作相关联的键值。
```js
let enums = {
  'A': handleA,
  'B': handleB,
  'C': handleC,
  'D': handleD,
  'E': handleE
}
function action(val){
  let handleType = enums[val]
  handleType()
}
```

这种方式消除了所有条件语句，并使用键值对象存储条件和操作之间的关系。当我们需要根据条件执行代码时，我们不再需要使用else if或switch语句来处理相应的动作，我们只需从中提取相应的函数handleType并执行它即可。
Map
实际上我们还可以通过Map来进一步的优化我们的代码。
对比Object的话，Map具有许多优点

对象的键只能是字符串或符号，而Map的键可以是任何类型的值。
我们可以使用Map size属性轻松获取Map的键/值对的数量，而对象的键/值对的数量只能手动确定。
具有极快的查找速度。
上面的例子可以优化如下：

```js
let enums = new Map([
  ['A', handleA],
  ['B', handleB],
  ['C', handleC],
  ['D', handleD],
  ['E', handleE]
])

function action(val){
  let handleType = enums.get(val)
  handleType()
}
```

如果我们遇到多层复杂条件，Map语句优势就更明显了！
```js
if (mode == 'kline') {
    if (this.type === 'A') {
        this.handleA()
    } else if (this.type === 'B') {
        this.handleB()
    } else if (this.type === 'C') {
        this.handleC()
    } else if (this.type === 'D') {
        this.handleD()
    }
} else if ((mode = 'depth')) {
    if (this.type === 'A') {
        this.handleA()
    } else if (this.type === 'B') {
        this.handleB()
    } else if (this.type === 'C') {
        this.handleC()
    } else if (this.type === 'D') {
        this.handleD()
    }
}
```

对于上述如此复杂的场景，是否可以通过Map来进行优化？
其实我们只需要将不同的判断语句连接成一个字符串，以便我们可以将条件和操作以键值格式关联在一起。
```js
let enums = new Map([
  ['kline_A', handleKlineA],
  ['kline_B', handleKlineB],
  ['kline_C', handleKlineC],
  ['kline_D', handleKlineD],
  ['kline_E', handleKlineE],
  ['depth_A', handleDepthA],
  ['depth_B', handleDepthB],
  ['depth_C', handleDepthC],
])

function action(mode, type){
  let key = `${mode}_${type}`
  let handleType = enums.get(key)
  handleType()
}
```

也有观点认为，if...else...本身就是语言的底层逻辑，是无法在继续优化的，所谓的优化无非就是从逻辑上或者从语法形式上着手，并没有彻底改变if...else...的本质。对这一点笔者不置可否。
