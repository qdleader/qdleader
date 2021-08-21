

创建项目
```
# 如果需要交互式命令创建
yarn create @vitejs/app
```


### vite.config.js
```
export default {
  alias: {
    "@": resolve("src"),
    "comps": resolve("src/components"),
    "apis": resolve("src/apis"),
    "views": resolve("src/views"),
    "utils": resolve("src/utils"),
    "routes": resolve("src/routes"),
    "styles": resolve("src/styles"),
  },
  plugins: [vue()]
}
```


## 载入不同模式下全局变量

此外，我们也可以通过使用.env文件来载入不同环境下的全局变量，Vite中也使用了 dotenv来加载额外的环境变量，设置的全局变量必须以VITE_为前缀才可以正常被加载，使用方式如下：

.env.development

### 以下变量在`development`被载入
.env.production
```
VITE_APP_BASE_API = '/api/v1'

```

### 以下变量在`production`被载入
.env.production
```
VITE_APP_BASE_API = 'http://192.168.9.212:8888/api/v1'

```

全局变量使用方式：
```
import.meta.env.VITE_APP_BASE_API
```




然后基于resolve写个小方法，方便以后新增别名使用(非必要)

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}
接下来进入重要环节

```
export default defineConfig({
      plugins:[vue()], // 配置需要使用的插件列表，这里将vue添加进去

      // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
      resolve: {
          alias: {
            "/@": pathResolve("src"),
          }
      },
      // 强制预构建插件包
      optimizeDeps: {
          include: ['axios'],
      },
      // 打包配置
      build: {
          target: 'modules',
          outDir: 'dist', //指定输出路径
          assetsDir: 'assets', // 指定生成静态资源的存放路径
          minify: 'terser' // 混淆器，terser构建后文件体积更小
      },
      // 本地运行配置，及反向代理配置
      server: {
          cors: true, // 默认启用并允许任何源
          open: true, // 在服务器启动时自动在浏览器中打开应用程序
          //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
          proxy: {
              '/api': {
                  target: 'http://192.168.9.212:3000',   //代理接口
                  changeOrigin: true,
                  rewrite: (path) => path.replace(/^\/api/, '')
            }
          }
      }
})

```
以上就是vue.config.js文件的基本配置，需要更多配置的可以参考文档进行配置
```
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';
function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
    base: "",
    plugins:[vue()],
    resolve: {
        alias: {
          "/@": pathResolve("src"),
        }
    },
    optimizeDeps: {
        include: ['axios'],
    },
    build: {
      target: 'modules',
      outDir: 'dist',
      assetsDir: 'assets',
      minify: 'terser' // 混淆器
    },
    server: {
        cors: true,
        open: true,
        proxy: {
          '/api': {
              target: 'http://192.168.9.212:3000',   //代理接口
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
    }
});
```

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    // 配置路径别名
    '@': path.resolve(__dirname, 'src'),
    'view': path.resolve(__dirname, 'src/view'),
    'com': path.resolve(__dirname, 'src/components'),
  },
  // 引入第三方的配置
  // optimizeDeps: {
  //   include: ["echarts", "axios", ]
  // },
  plugins: [vue()],
  // hostname: '0.0.0.0',
  // port: 8090,
  // 是否自动在浏览器打开
  // open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
   base: './',
   /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    },
  }
})

```
