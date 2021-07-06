

直接 vite2创建vue3项目
```
yarn create @vitejs/app
```
选择vue-ts
直接引入elementplus 会发现icon 不显示


## 方法1
在index.html中

```
<link rel="stylesheet" href="https://unpkg.com/element-plus/lib/theme-chalk/index.css">
```


## 方法2
```
do this:
  yarn add sass -D
  yarn add vite-plugin-style-import -D

vite：
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
plugins: [
vue(),
styleImport({
libs: [{
libraryName: 'element-plus',
esModule: true,
ensureStyleFile: true,
resolveStyle: (name) => {
name = name.slice(3)
return element-plus/packages/theme-chalk/src/${name}.scss;
},
resolveComponent: (name) => {
return element-plus/lib/${name};
},
}]
}),
],

})

```


还不生效就在引入个
```
import 'element-plus/packages/theme-chalk/src/base.scss'
```
