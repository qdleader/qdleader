
## React是怎么区分class和function的？

在Component的原型上定义属性 isReactComponent = {}



当我们需要渲染Button组件的时候，直接使用即可，无需关心它是通过什么方式定义的。
```js
<Button />
```

但是React内部会关心它是通过什么方式定义的。

如果是函数，React会直接调用。
```js
// React 内部
const result = Button(props); // <div>Hello</div>
```
如果是class，React 需要先用 new 操作符将其实例化，然后调用刚才生成实例的 render 方法：


```js
// React 内部
const instance = new Button(props) // Button {}
const result = instance.render() // <div>Hello</div>

```
无论哪种情况，React的目的是获取渲染后的Node（节点），具体获取方式取决于Button是如何定义的。

所以React是怎么区分class和function的？




单纯的判断是函数还是类，还是比较容易的。事实上，在开发中，React都会经过babel将类等新语法编译成在可在低版本浏览器上运行的代码。所以class会被编译成经过特殊处理的函数。又该如何判断？


以下为class编译后的伪代码：

function Person(name) {
  if (!(this instanceof Person)) {
    throw new TypeError('Cannot call a class as a function')
  }
  this.name = name
}

new Person('Jack') // OK
Person('George') // 无法把类当做函数来调用
为什么不干脆都都通过new的方式调用呢？并不可以。

# 此外还有两个致命的问题：

## 第一：箭头函数。
1. 箭头函数没有自己的this，其内部的this指向离它最近的常规函数所处的上下文。
2. 而且箭头函数没有 prototype 属性。(那我们是不是可以通过函数是否有prototype属性来判断直接调用还是通过new方式调用？不可以！

万一箭头函数被babel编译过呢。

那干脆把class和箭头函数都通过babel编译成常规函数，然后都通过new的方式不行吗？ 是的，不行！看第二个原因。)


## 第二：不能都使用new的原因是，React支持组件返回字符串、数字等基本类型的值。

```js
function Title() {
  return 'hello title'
}

Title() // 'hello title'
new Title() // {}
```

返回另一个对象的函数，在使用new调用时会覆盖其创建的实例。但是，如果一个函数的返回值不是一个对象，它会被 new 完全忽略。如果你返回了一个字符串或数字，就好像完全没有 return 一样。





此外

最初这个标记是在 React.Component 这个基类自己身上：
```js
// React 内部
class Component {}
Component.isReactClass = {}

// 可以这样检查
class Greeting extends Component {}
Greeting.isReactClass // ok

```
然而，某些 compile-to-js 的语言，在类的实现上有所不同，子类在继承父类的时候，会丢失静态属性，导致在子类上访问不到父类的 isReactComponent，所以保险起见，React 把标记移到了 React.Component.prototype上，选择把它作为实例属性，以确保子类能够正确继承。


