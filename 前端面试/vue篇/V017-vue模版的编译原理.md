# V017-vue 模版的编译原理

## Vue 模板编译原理

Vue 的编译过程就是将 template 转化为 render 函数的过程 分为以下三步

> 第一步是将 模板字符串 转换成 element ASTs 语法树 （解析器）
> 第二步是对 AST 进行静态节点标记，主要用来做虚拟 DOM 的渲染优化（优化器）
> 第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）

相关代码如下

```js
export function compileToFunctions(template) {
  // 我们需要把html字符串变成render函数
  // 1.把html代码转成ast语法树  ast用来描述代码本身形成树结构 不仅可以描述html 也能描述css以及js语法
  // 很多库都运用到了ast 比如 webpack babel eslint等等
  let ast = parse(template);
  // 2.优化静态节点
  // 这个有兴趣的可以去看源码  不影响核心功能就不实现了
  //   if (options.optimize !== false) {
  //     optimize(ast, options);
  //   }

  // 3.通过ast 重新生成代码
  // 我们最后生成的代码需要和render函数一样
  // 类似_c('div',{id:"app"},_c('div',undefined,_v("hello"+_s(name)),_c('span',undefined,_v("world"))))
  // _c代表创建元素 _v代表创建文本 _s代表文Json.stringify--把对象解析成文本
  let code = generate(ast);
  //   使用with语法改变作用域为this  之后调用render函数可以使用call改变this 方便code里面的变量取值
  let renderFn = new Function(`with(this){return ${code}}`);
  return renderFn;
}
```

## 总结

> 首先将 template 编译成 ast 语法树，ast 树形结构，不光可以描述 html 结构，也可以描述 css 样式，js 语法
> 对 ast 语法树，进行静态节点标记，静态节点不改变，不需要每次重新渲染
> 将 ast 语法树，生成 render 函数，render 函数返回 vnode，vnode 是一个 js 对象，描述 dom 节点的信息
> 最后将 vnode，转化为真实 dom 渲染到页面上
