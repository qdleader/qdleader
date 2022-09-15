
## require 模块引入与处理
> CommonJS 模块同步加载并执行模块文件，CommonJS 模块在执行阶段分析模块依赖，采用深度优先遍历（depth-first traversal），执行顺序是父 -> 子 -> 父；


eg:

a.js文件
```
const getMes = require('./b')
console.log('我是 a 文件')
exports.say = function(){
    const message = getMes()
    console.log(message)
}
```

b.js文件
```
const say = require('./a')
const  object = {
   name:'《React进阶实践指南》',
   author:'我不是外星人'
}
console.log('我是 b 文件')
module.exports = function(){
    return object
}
```

主文件main.js

```const a = require('./a')
const b = require('./b')

console.log('node 入口文件')

```

接下来终端输入 node main.js 运行 main.js，效果如下：

从上面的运行结果可以得出以下结论：

main.js 和 a.js 模块都引用了 b.js 模块，但是 b.js 模块只执行了一次。
a.js 模块 和 b.js 模块互相引用，但是没有造成循环引用的情况。
执行顺序是父 -> 子 -> 父；








# require 加载原理

** 首先为了弄清楚上述两个问题。我们要明白两个感念，那就是 module 和 Module。
module ：在 Node 中每一个 js 文件都是一个 module ，module 上保存了 exports 等信息之外，还有一个 loaded 表示该模块是否被加载。

为 false 表示还没有加载；
为 true 表示已经加载

Module ：以 nodejs 为例，整个系统运行之后，会用 Module 缓存每一个模块加载的信息。**

require 的源码大致长如下的样子：
```
 // id 为路径标识符
function require(id) {
   /* 查找  Module 上有没有已经加载的 js  对象*/
   const  cachedModule = Module._cache[id]
   
   /* 如果已经加载了那么直接取走缓存的 exports 对象  */
  if(cachedModule){
    return cachedModule.exports
  }
 
  /* 创建当前模块的 module  */
  const module = { exports: {} ,loaded: false , ...}

  /* 将 module 缓存到  Module 的缓存属性中，路径标识符作为 id */  
  Module._cache[id] = module
  /* 加载文件 */
  runInThisContext(wrapper('module.exports = "123"'))(module.exports, require, module, __filename, __dirname)
  /* 加载完成 *//
  module.loaded = true 
  /* 返回值 */
  return module.exports
}
```
从上面我们总结出一次 require 大致流程是这样的；

**require 会接收一个参数——文件标识符，然后分析定位文件，分析过程我们上述已经讲到了，加下来会从 Module 上查找有没有缓存，如果有缓存，那么直接返回缓存的内容。**

**如果没有缓存，会创建一个 module 对象，缓存到 Module 上，然后执行文件，加载完文件，将 loaded 属性设置为 true ，然后返回 module.exports 对象。借此完成模块加载流程。**


**模块导出就是 return 这个变量的其实跟 a = b 赋值一样， 基本类型导出的是值， 引用类型导出的是引用地址。**


**exports 和 module.exports 持有相同引用，因为最后导出的是 module.exports， 所以对 exports 进行赋值会导致 exports 操作的不再是 module.exports 的引用。**


### require 避免重复加载

从上面我们可以直接得出，require 如何避免重复加载的，首先加载之后的文件的 module 会被缓存到 Module 上，比如一个模块已经 require 引入了 a 模块，如果另外一个模块再次引用 a ，那么会直接读取缓存值 module ，所以无需再次执行模块。
对应 demo 片段中，首先 main.js 引用了 a.js ，a.js 中 require 了 b.js 此时 b.js 的 module 放入缓存 Module 中，接下来 main.js 再次引用  b.js ，那么直接走的缓存逻辑。所以 b.js 只会执行一次，也就是在 a.js 引入的时候。




