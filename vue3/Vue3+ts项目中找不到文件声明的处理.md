# Vue3+ts项目中找不到文件声明的处理
.d.ts文件放置的目录与tsconfig.json文件指定的includes匹配列表路径一致

我的是放到src 下面
新建一个 vite-env.d.ts文件


```ts
/// <reference types="vite/client" />

declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module "*.ts";


```