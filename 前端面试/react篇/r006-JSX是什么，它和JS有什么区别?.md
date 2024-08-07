# r006-JSX是什么，它和JS有什么区别?

JSX是react的语法糖，它允许在html中写JS，它不能被浏览器直接识别，需要通过webpack、babel之类的编译工具转换为JS执行

## JSX与JS的区别：

JS可以被打包工具直接编译，不需要额外转换，jsx需要通过babel编译，它是React.createElement的语法糖，使用jsx等价于React.createElement
jsx是js的语法扩展，允许在html中写JS；JS是原生写法，需要通过script标签引入


## 为什么在文件中没有使用react，也要在文件顶部import React from “react”

只要使用了jsx，就需要引用react，因为jsx本质就是React.createElement


## 为什么React自定义组件首字母要大写
jsx通过babel转义时，调用了React.createElement函数，它接收三个参数，分别是type元素类型，props元素属性，children子元素。
如下图所示，从jsx到真实DOM需要经历jsx->虚拟DOM->真实DOM。如果组件首字母为小写，它会被当成字符串进行传递，在创建虚拟DOM的时候，就会把它当成一个html标签，而html没有app这个标签，就会报错。组件首字母为大写，它会当成一个变量进行传递，React知道它是个自定义组件就不会报错了



```javascript
<app>qdleader</app>
// 转义后
React.createElement("app",null,"qdleader")

<App>qdleader</App>
// 转义后
React.createElement(App,null,qdleader)

```


React组件为什么不能返回多个元素
这个问题也可以理解为React组件为什么只能有一个根元素，原因：

React组件最后会编译为render函数，函数的返回值只能是1个，如果不用单独的根节点包裹，就会并列返回多个值，这在js中是不允许的
```js
class App extends React.Component{
  render(){ 
    return(
    <div>
     <h1 className="title">lyllovelemon</h1>
      <span>内容</span>	
    </div>	
  )
}

//编译后
class App extends React.Component{
  render(){
    return React.createElement('div',null,[
      React.createElement('h1',{className:'title'},'lyllovelemon'),
      React.createElement('span'),null,'内容'
      ])
  }
}
```

react的虚拟DOM是一个树状结构，树的根节点只能是1个，如果有多个根节点，无法确认是在哪棵树上进行更新

vue的根节点为什么只有一个也是同样的原因


## React组件怎样可以返回多个组件

使用HOC（高阶函数）
使用React.Fragment,可以让你将元素列表加到一个分组中，而且不会创建额外的节点（类似vue的template)
```js
renderList(){
  this.state.list.map((item,key)=>{
    return (<React.Fragment>
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.address}</td>
      </tr>	
    </React.Fragment>)
  })
}
```

使用数组返回

```js
renderList(){
  this.state.list.map((item,key)=>{
    return [
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.address}</td>
      </tr>
    ]
  })
}
```

## React中元素和组件的区别

react组件有类组件、函数组件
react元素是通过jsx创建的

```
const element = <div className="element">我是元素</div>	

```
