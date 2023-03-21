
前端构建打包工具，在运行 build 的时候，会默认把项目中所有用到的第三方资源、库文件打包成一个 js 文件中 vendor.js，如果不加以拆分，这个文件将会很大导致首屏加载速度变慢。这时可以把一些第三方库文件用 cdn 加载（优化手段之一），优化包大小和首屏加载速度


Vue2 + Webpack
我们回顾以前使用 vue2 + webpack 构建的时候，可以在 index.html 中用 script 标签加载第三方库资源，推荐这个 cdn 资源网站： https://www.jsdelivr.com/

<script src="https://cdn.jsdelivr.net/npm/vue@2.5.20/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@0.18.1/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/headroom.js@0.9.4/dist/headroom.min.js"></script>
然后在 webpack 里配置 externals：防止将某些 import 的包打包到 bundle 中，而是在运行时再去从外部获取这些扩展依赖

externals: {
  'vue': 'Vue',
  'vuex': 'Vuex',
  'axios': 'axios',
  'vue-router': 'VueRouter',
  'headroom': 'headroom'
},
上面 externals 属性里的键值对：

属性名就是包名，比如 import Vue from 'vue' 里面的 vue

属性值就是导出的名字，比如 import Vue from 'vue' 里面的 Vue

package.json 无需安装这些第三方包，可直接运行项目和打包了

Vue3 + Vite
为什么 Vite 不能 直接 在 index.html 导入 CDN 资源，首先我们要了解其原理

Vite 是基于浏览器原生 ES imports 的开发服务器。开发环境下不需要打包，是利用浏览器去解析 imports，在服务器端按需编译返回。所以能达到秒速模块热更新（HMR）

就是这样：

<script type="module">
import { sub } from './index.js'
</script>
开发环境下走的是浏览器 script 标签原生 ESM 导入，dev server 是不会使用 index.html 的 CDN 资源，而是使用源码里 import node_modules 里的依赖包

安装插件标识 CDN
上面说的是 开发环境下不会使用 index.html 的 CDN 资源，而我们关注的是 生产环境，所以能在生产环境中使用 CND 资源且打包时排除此资源即可

Vite 的打包是通过 Rollup，打包时使用 CDN 需要安装一个插件：rollup-plugin-external-globals

import { defineConfig } from 'vite'
import externalGlobals from 'rollup-plugin-external-globals'

export default defineConfig({
  // other config
  build: {
    rollupOptions: {
      external: ['vue', 'vuex', 'axios', 'vue-router'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          vuex: 'Vuex',
          axios: 'axios',
          'vue-router': 'VueRouter'
        })
      ]
    }
  }
})
external 是 CDN 的包名

externalGlobals 里的键值对与 webpack externals 的解释一致

然后在 index.html 加入 CDN 文件

<script src="https://cdn.jsdelivr.net/npm/vue@3.2.20/dist/vue.global.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@4.0.12/dist/vue-router.global.min.js"></script>
开发环境下，package.json 依然需要保留安装这些 CDN 资源的包，不能删除，dev server 需要引用

打包即可实现 CDN 加载资源

alias 配置项加载 CDN
alias 除了可以用来配置别名，还可以配置 CDN（本质也是别名的引用）

先来写一下试试：

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // other config
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      axios: 'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js',
      mitt: 'https://cdn.jsdelivr.net/npm/mitt@3.0.0/dist/mitt.min.js'
    }
  }
})
这里先配置了 axios、mitt 的别名 CDN，结果浏览器报错：

Uncaught SyntaxError: The requested module ‘https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js’ does not provide an export named ‘default’

说这个 CDN 资源没有一个名为 default export。看报错信息应该也明白，它需要支持 ESM 编译的 CDN
而在 GitHub 上也有专门的 issues：https://github.com/vitejs/vite/issues/2204

尤大有在下面解答：
WechatIMG229.jpeg

意思就是：Vite 不会重写从外部文件导入的内容，需要使用支持 ESM 编译的 CDN

还很细心地贴出两个支持 ESM 编译的 CDN 资源地址：https://www.skypack.dev/ or https://www.jsdelivr.com/esm

那么我们把上面 CDN 资源改好再试试~

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // other config
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      mitt: 'https://cdn.jsdelivr.net/npm/mitt@3.0.0/+esm',
      axios: 'https://esm.sh/axios@0.21.4',
    }
  }
})
运行成功~

可以查看这个 CDN 资源，发现其内容是 export 一个最终的包文件的 js 代码

/* esm.sh - axios@0.21.4 */
export * from "https://cdn.esm.sh/v55/axios@0.21.4/es2021/axios.js";
export { default } from "https://cdn.esm.sh/v55/axios@0.21.4/es2021/axios.js";
查看浏览器 Network，其实是加载了两个资源
WechatIMG228.jpeg

而且使用 alias 加载 CDN 还有个好处，它是按需加载。意思是如果只是在某个 Vue 文件中 import 了这个库，那么进入到这个 Vue 文件的页面，才会加载此 CDN 资源


但需要注意的是，import 时不能解构，只能直接引入，因为支持 ESM 编译的资源文件都是 export { default } from ...，没有单个 export
例如我配置了 mavon-editor 的 ESM CDN 资源

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'mavon-editor': 'https://esm.sh/mavon-editor@next',
    }
  }
})
页面使用，如果还是按照常规解构引入方式：

import { mavonEditor } from 'mavon-editor'
控制台报错，且页面无法渲染该组件
WechatIMG338.png
所以使用支持 ESM CDN 资源 alias 配置加载时，引入资源只能直接引入
这也说明这种方式不适合那些需要解构资源的 CDN

import axios from 'axios'

import mitt from 'mitt'
总结
第一种方案：

采用 rollup-plugin-external-globals 插件标识是外部引入的资源，在 index.html 用 script 标签引入 CDN 资源
缺点：进入首屏就加载全部 CDN 资源；开发环境不可用（这也不算缺点哈哈）

第二种方案：

alias 配置项加载 支持 ESM 编译的 CDN，package.json 可删除 CDN 资源的依赖包
优点：按需加载；开发环境也可使用