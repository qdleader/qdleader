webpack是用JS写的，运行在node环境，所以默认webpack打包的时候只会处理JS之间的依赖关系。

因为像 .css 这样的文件不是一个 JavaScript 模块，你需要配置 webpack 使用 css-loader 和 style-loader 去合理地处理它们。



如果在JS中导入了css，那么就需要使用 css-loader 来识别这个模块，通过特定的语法规则进行转换内容最后导出。

css-loader会处理 import / require @import / url 引入的内容。
```js
// base.css
.bg {
  background: #000;
}
const style = require('./base.css')
console.log(style, 'css')

```

css-loader处理之后导出的是一个数组

但是这并不是我们想要的，因为是个数组，页面是无法直接使用，这时我们需要用到零外一个style-loader来处理

style-loader 是通过一个JS脚本创建一个style标签，里面包含一些样式。style-loader是不能单独使用的，应为它并不负责解析 css 之前的依赖关系，每个loader的功能都是单一的，各自拆分独立。


## style-loader和css-loader作用是不同的。

>  1、css-loader: 加载.css文件

>  2、style-loader：使用<style>将css-loader内部样式注入到我们的HTML页面


由于webpack只能处理js相关的文件，所以像图片和css资源是处理不了的，css-loader的作用是将css文件转换成webpack能够处理的资源，而style-loader就是帮我们直接将css-loader解析后的内容挂载到html页面当中。


 css-loader帮助我们解析css成为js对象
 sytle-loader可以从css-loader解析的对象中提取css样式挂载到页面当中


 ### less-loader

Less是CSS预处理语言，扩展了CSS语言，增加了变量、Mixin、函数等特性，Less-loader的作用就是将less代码转译为浏览器可以识别的CSS代码。
```less
// demo.less
@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
  -webkit-box-shadow: @style @c;
  box-shadow:         @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}
.box {
  color: saturate(@base, 5%);
  border-color: lighten(@base, 30%);
  div { .box-shadow(0 0 5px, 30%) }
}
```

上面的less代码会被less-loader转译为：
```css
// demo.css
.box {
  color: #fe33ac;
  border-color: #fdcdea;
}
.box div {
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

```

所以less-loader的原理很简单，就是调用less库提供的方法，转译less语法后输出，如下：
```js
// less-loader实现（经简化）
const less = require('less');

module.exports = function(content) {
  const callback = this.async(); // 转译比较耗时，采用异步方式
  const options = this.getOptions(); // 获取配置文件中less-loader的options
  
  less.render(
    content,
    createOptions(options), // less转译的配置
    (err, output) => {
      callback(err, output.css); // 将生成的css代码传递给下一个loader
    }
  );
};
```

### css-loader

Css-loader的作用主要是解析css文件中的@import和url语句，处理css-modules，并将结果作为一个js模块返回。
假如我们有a.css、b.css、c.css：


// a.css
```css

@import './b.css'; // 导入b.css
.a {
  font-size: 16px;
}
```



// b.css
```css

@import './c.css'; // 导入c.css
.b {
  color: red;
}
```



// c.css
```css

.c {
  font-weight: bolder;
}
```
来看看css-loader对a.css的编译输出：

```js


// css-loader输出

exports = module.exports = require("../../../node_modules/css-loader/lib/css-base.js")(false);


// imports
// 文件需要的依赖js模块，这里为空

// module
exports.push([ // 模块导出内容
  module.id, 
  ".src-components-Home-index__c--3riXS {\n  font-weight: bolder;\n}\n.src-components-Home-index__b--I-yI3 {\n  color: red;\n}\n.src-components-Home-index__a--3EFPE {\n  font-size: 16px;\n}\n", 
  ""
]); 

// exports
exports.locals = { // css-modules的类名映射
  "c": "src-components-Home-index__c--3riXS",
  "b": "src-components-Home-index__b--I-yI3",
  "a": "src-components-Home-index__a--3EFPE"
};

```

可以理解为css-loader将a.css、b.css和c.css的样式内容以字符串的形式拼接在一起，并将其作为js模块的导出内容。

####  css-loader源码（经简化）

```js
// https://github.com/webpack-contrib/css-loader/blob/master/src/index.js
import postcss from 'postcss';

module.exports = async function (content, map, meta) {
  const options = this.getOptions(); // 获取配置

  const plugins = []; // 转译源码所需的postcss插件
  shouldUseModulesPlugins(options, this) && plugins.push(modulesPlugins); // 处理css-modules
  shouldUseImportPlugin(options, this) && plugins.push(importPlugin); // 处理@import语句
  shouldUseURLPlugin(options, this) && plugins.push(urlPlugin); // 处理url()语句
  shouldUseIcssPlugin(options, this) && plugins.push(icssPlugin); // 处理icss相关逻辑

  if (meta && meta.ast) { // 复用前面loader生成的CSS AST（如postcss-loader）
    content = meta.ast.root;
  }

  const result = await postcss(plugins).process(content); // 使用postcss转译源码

  const importCode = getImportCode(); // 需要导入的依赖语句
  const moduleCode = getModuleCode(result); // 模块导出内容
  const exportCode = getExportCode(); // 其他需要导出的信息，如css-modules的类名映射等

  const callback = this.async(); // 异步返回
  callback(null, `${importCode}${moduleCode}${exportCode}`);
};
```


## style-loader
经过css-loader的转译，我们已经得到了完整的css样式代码，style-loader的作用就是将结果以style标签的方式插入DOM树中。
直觉上似乎我们只需要像下面这样返回一段js代码，将css-loader返回的结果插入DOM就行：
```js
module.exports = function (content) {
  return `
    const style = document.createElement('style');
    style.innerHTML = '${content}';
    document.head.appendChild(style);
  `;
};

```

但css-loader返回的不是css样式代码的文本，而是一个js模块的代码，将这些js代码直接放进style标里显然是不行的。
我们来看看style-loader的实现：
 style-loader

 ```js
import loaderUtils from 'loader-utils';

module.exports = function (content) {
  // do nothing
};

module.exports.pitch = function (remainingRequest) {
  /*
  * 用require语句获取css-loader返回的js模块的导出
  * 用'!!'前缀跳过配置中的loader，避免重复执行
  * 用remainingRequest参数获取loader链的剩余部分，在本例中是css-loader、less-loader
  * 用loaderUtils的stringifyRequest方法将request语句中的绝对路径转为相对路径
  */
  const requestPath = loaderUtils.stringifyRequest(this, '!!' + remainingRequest);

  // 本例中requestPath为:
  // '!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!src/styles/index.less'

  return `
    const content = require(${requestPath})
    const style = document.createElement('style');
    style.innerHTML = content;
    document.head.appendChild(style);
  `;
};

```

### style-loader的几个设计思路：

css-loader返回的样式只能通过其js模块的运行时得到，故使用require语句取得
normal方法实际上什么都没做，在pitch方法里中断loader链的执行，再以inline方式调用了后方的loader来加载当前的less文件
如果将pitch中的实现放到normal方法里，就会造成loader链执行两遍
如果requestPath中没有'!!'前缀，就会造成loader链被无限循环调用

style-loader的实现逻辑比较绕，也是一个比较经典的pitch应用，理解了它的原理，就可以是说对loader的调用链、执行顺序和模块化输出等有了一个比较全面的认识，推荐细细体会。



