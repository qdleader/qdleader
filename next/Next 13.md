## Turbopack

首先是最引入注目的，在 Next13 中加入了全新的打包工具 Turbopack， 它是出自 Webpack 作者 TobiasKoppers 之手，官方描述是：开发时更新速度比 Webpack 快 700 倍、比 Vite 快 10 倍，是不是有点迫不及待，想要熟手体验了呢？我们直接使用官方提供的 cli 创建一个 Next.js 工程。

```js
npx create-next-app --example with-turbopack
```

这是启动后的界面，这个 demo 不是一个简单的页面，而是一个包含了深度嵌套路由的例子。
下图我开发时的截图，Turbopack 直接在命令行中打印出了构建时间，我们看到启动时间只需要 2.3ms

试着修改代码，程序会自动热更新，绝大多数次数更新时间都很快，但偶尔有几次更新时间却很长，图片中有一处需要 16s（我使用的是 Mac M1)，这其中的原因就不得而知了，尤大也发布了测评，使用 1000 个节点来对比更新速度，数据显示：根组件与 vite 时间几乎相同，叶子节点比 vite 快 68%，与官方称比 vite 快 10 倍相差甚远。当然目前 Turbopack 还处于 alpha 阶段，期待 Turbopack 能够尽快推出正式版。

#### Turbopack 特点

> 开箱即用 TypeScript, JSX, CSS, CSS Modules, WebAssembly 等
> 增量计算： Turbopack 是建立在 Turbo 之上的，Turbo 是基于 Rust 的开源、增量记忆化框架，除了可以缓存代码，还可以缓存函数运行结果。
> 懒编译：例如，如果访问 localhost:3000，它将仅打包 pages/index.jsx，以及导入的模块。

## 数据请求

使用 react 的 use 函数加 fetch API 来实现：静态站点生成（SSG）、服务器端渲染（SSR）和增量静态再生（ISR）
在 Page 页面使用 fetch：
```js
import { use } from 'react';

async function getData() {
  const res = await fetch('...');
  const name: string = await res.json();
  return name;
}

export default function Page() {
  // 支持的全类型的数据格式
  // 可以返回不用序列化的格式数据
  // 因此可以返回 Date, Map, Set, 等.
  const name = use(getData());

  return '...';
}
```

#### fetch 的缓存策略
```js
// 请求被缓存
// 相当于 `getStaticProps`.
// `force-cache` 是默认值，可以省略
fetch(URL, { cache: 'force-cache' });

// 每次刷新都会重新请求.
// 相当于 `getServerSideProps`.
fetch(URL, { cache: 'no-store' });

// 请求被缓存10s，10s 重新生成
// 相当于 `getStaticProps` 加上 `revalidate` 参数.
fetch(URL, { next: { revalidate: 10 } });
```

使用这种方式的优点是，当请求数据的增加，打包后前端 JavaScript 的大小不会增加。
