
## 创建  vite 插件通用模板

#### 1. 初始化
```
mkdir vite-progress && cd vite-progress && pnpm init
```
#### 1.2 安装 typescript
```
pnpm i typescript @types/node -D
```


#### 1.3 配置 tsconfig.json
```
{
  "compilerOptions": {
    "module": "ESNext",
    "target": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "declaration": true,
    "noUnusedLocals": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "lib": ["ESNext"],
    "sourceMap": false,
    "noEmitOnError": true,
    "noImplicitAny": false
  },
  "include": [
    "src/*",
    "*.d.ts"
  ],
  "exclude": [
    "node_modules",
    "examples",
    "dist"
  ]
}
```
#### 1.4 安装 vite

```
pnpm intsall vite --save-dev
```

#### 1. 配置 eslint 和 prettier（可选）

安装 eslint
```
pnpm i eslint @typescript-eslint / parser @typescript-eslint / eslint - plugin--save - dev
```


配置.eslintrc：

```
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-console": 1,
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}
```

## 配置格式化文件

#### 安装 prettier （可选）
```
pnpm i prettier eslint - config - prettier eslint - plugin - prettier--save - dev
```


#### 配置.prettierrc ：
```
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "endOfLine": "auto"
}
```
## 3. 新增 src / index.ts 入口
```
import type { PluginOption } from 'vite';

export default function vitePluginTemplate (): PluginOption {
    return {
        // 插件名称
        name: 'vite-plugin',
        // pre 会较于 post 先执行
        enforce: 'pre', // post
        // 指明它们仅在 'build' 或 'serve' 模式时调用
        apply: 'build', // apply 亦可以是一个函数
        config (config, { command }) {
            console.log('这里是config钩子');
        },

        configResolved (resolvedConfig) {
            console.log('这里是configResolved钩子');
        },

        configureServer (server) {
            console.log('这里是configureServer钩子');
        },

        transformIndexHtml (html) {
            console.log('这里是transformIndexHtml钩子');
        },
    }
}
```
到这里，那么我们的基本模版就建好了，怎么运行呢？

在当前目录下执行

pnpm create vite my-vue-app --template vue

 cd my-vue-app

 pnpm i

修改 my-vue-app/package.json

```
{
  "name": "my-vue-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.37"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^3.1.0",
    "vite": "link:../node_modules/vite"
  }
}

```

主要是加入
 "devDependencies": {
    "vite": "link:../node_modules/vite"
  }

这里是让 里面和外面的 vite一个版本

然后修改 my-vue-app/vite.config.ts 文件

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import acnBuildPlugin from '../dist/index.mjs'

export default defineConfig({
  plugins: [vue(), acnBuildPlugin()]
})

```



好了，在外面（vite-progress 目录下）我们再下载个tsup ，tsup 是一个轻小且无需配置的，由 esbuild 支持的构建工具；



修改一下 vite-progress/package.json 的打包命令，及路径

  "main": "./dist/index.mjs",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "pnpm run build -- --watch --ignore-watch my-vue-app",
    "build": "tsup src/index.ts --dts --format cjs,esm",
    "build:vite": "pnpm run build && cd my-vue-app && pnpm run build",
    "prepublish": "pnpm run build",
    "release": "npx bumpp --push --tag --commit && pnpm publish"
  },

  7. 开发环境运行


开发环境运行：实时监听文件修改后重新打包（热更新）
pnpm run build:vite

到这里你就可以 边开发边运行了 😄


# vite 的插件钩子
## 1. vite 独有的钩子

> enforce ：值可以是pre 或 post ， pre 会较于 post 先执行；
> apply ：值可以是 build 或 serve  亦可以是一个函数，指明它们仅在 build 或 serve 模式时调用；
> config(config, env) ：可以在 vite 被解析之前修改 vite 的相关配置。钩子接收原始用户配置 config 和一个描述配置环境的变量env；
> configResolved(resolvedConfig) ：在解析 vite 配置后调用。使用这个钩子读取和存储最终解析的配置。当插件需要根据运行的命令做一些不同的事情时，它很有用。
> configureServer(server) ：主要用来配置开发服务器，为 dev-server (connect 应用程序) 添加自定义的中间件；
> transformIndexHtml(html) ：转换 index.html 的专用钩子。钩子接收当前的 HTML 字符串和转换上下文；
> handleHotUpdate(ctx)：执行自定义HMR更新，可以通过ws往客户端发送自定义的事件；

## 2. vite 与 rollup 的通用钩子之构建阶段

> options(options) ：在服务器启动时被调用：获取、操纵Rollup选项，严格意义上来讲，它执行于属于构建阶段之前；
> buildStart(options)：在每次开始构建时调用；
> resolveId(source, importer, options)：在每个传入模块请求时被调用，创建自定义确认函数，可以用来定位第三方依赖；
> load(id)：在每个传入模块请求时被调用，可以自定义加载器，可用来返回自定义的内容；
> transform(code, id)：在每个传入模块请求时被调用，主要是用来转换单个模块；
> buildEnd()：在构建阶段结束后被调用，此处构建结束只是代表所有模块转义完成；

## 3. vite 与 rollup 的通用钩子之输出阶段

> outputOptions(options)：接受输出参数；
> renderStart(outputOptions, inputOptions)：每次 bundle.generate 和 bundle.write 调用时都会被触发；
> augmentChunkHash(chunkInfo)：用来给 chunk 增加 hash；
> renderChunk(code, chunk, options)：转译单个的chunk时触发。rollup 输出每一个chunk文件的时候都会调用；
> generateBundle(options, bundle, isWrite)：在调用 bundle.write 之前立即触发这个 hook；
> writeBundle(options, bundle)：在调用 bundle.write后，所有的chunk都写入文件后，最后会调用一次 writeBundle；
> closeBundle()：在服务器关闭时被调用



