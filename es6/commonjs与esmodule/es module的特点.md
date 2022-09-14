
ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时。
ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直接访问修改结果。
ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。
ES6 模块提前加载并执行模块文件，

## 静态语法
ES6 module 的引入和导出是静态的，import 会自动提升到代码的顶层 ，import , export 不能放在块级作用域或条件语句中。


## 执行特性
ES6 module 和 Common.js 一样，对于相同的 js 文件，会保存静态属性。
但是与 Common.js 不同的是 ，CommonJS  模块同步加载并执行模块文件，ES6 模块提前加载并执行模块文件，ES6 模块在预处理阶段分析模块依赖，在执行阶段执行模块，两个阶段都采用深度优先遍历，执行顺序是子 -> 父。
如：
```
main.js
console.log('main.js开始执行')
import say from './a'
import say1 from './b'
console.log('main.js执行完毕')




a.js
import b from './b'
console.log('a模块加载')
export default  function say (){
    console.log('hello , world')
}



b.js
console.log('b模块加载')
export default function sayhello(){
    console.log('hello,world')
}

main.js 和 a.js 都引用了 b.js 模块，但是 b 模块也只加载了一次。
执行顺序是子 -> 父


b模块加载
a模块加载
main.js开始执行
main.js执行完毕

```



## 导出绑定

不能修改import导入的属性
使用 import 被导入的变量是只读的，可以理解默认为 const 装饰，无法被赋值
使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是引用传递。

## import() 动态引入
import() 返回一个 Promise 对象， 返回的 Promise 的 then 成功回调中，可以获取模块的加载成功信息
#### 动态加载可以放在块级作用域
首先 import() 动态加载一些内容，可以放在条件语句或者函数执行上下文中
#### 懒加载  也可实现代码分割
import() 这种加载效果，可以很轻松的实现代码分割。避免一次性加载大量 js 文件


ES6导入 
Tree Shaking 在 Webpack 中的实现，是用来尽可能的删除没有被使用过的代码，一些被 import 了但其实没有被使用的代码，就不会被打包


