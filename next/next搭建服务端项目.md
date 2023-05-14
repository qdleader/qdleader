Turbopack
首先是最引入注目的，在 Next13 中加入了全新的打包工具 Turbopack， 它是出自 Webpack 作者 TobiasKoppers 之手，官方描述是：开发时更新速度比 Webpack 快 700 倍、比 Vite 快 10 倍，是不是有点迫不及待，想要熟手体验了呢？我们直接使用官方提供的 cli 创建一个 Next.js 工程。
npx create-next-app --example with-turbopack
复制代码

这是启动后的界面，这个 demo 不是一个简单的页面，而是一个包含了深度嵌套路由的例子。
下图我开发时的截图，Turbopack 直接在命令行中打印出了构建时间，我们看到启动时间只需要 2.3ms

试着修改代码，程序会自动热更新，绝大多数次数更新时间都很快，但偶尔有几次更新时间却很长，图片中有一处需要 16s（我使用的是 Mac M1)，这其中的原因就不得而知了，尤大也发布了测评，使用 1000 个节点来对比更新速度，数据显示：根组件与 vite 时间几乎相同，叶子节点比 vite 快 68%，与官方称比 vite 快 10 倍相差甚远。当然目前 Turbopack 还处于 alpha 阶段，期待 Turbopack 能够尽快推出正式版。
Turbopack 特点

开箱即用 TypeScript, JSX, CSS, CSS Modules, WebAssembly 等
增量计算： Turbopack 是建立在 Turbo 之上的，Turbo 是基于 Rust 的开源、增量记忆化框架，除了可以缓存代码，还可以缓存函数运行结果。
懒编译：例如，如果访问 localhost:3000，它将仅打包 pages/index.jsx，以及导入的模块。


## 创建项目

```js
  npm install -g create-next-app		//全局安装脚手架
  create-next-app nextApp		//基于脚手架创建项目
  cd nextApp
  npm run dev		//运行项目
```


目录结构介绍：
> components文件夹: 这里是专门放置自己写的组件的，这里的组件不包括页面，指公用的或者有专门用途的组件。
> node_modules文件夹：Next项目的所有依赖包都在这里，一般我们不会修改和编辑这里的内容。
> pages文件夹：这里是放置页面的，这里边的内容会自动生成路由，并在服务器端渲染，渲染好后进行数据同步。
> static文件夹： 这个是静态文件夹，比如项目需要的图片、图标和静态资源都可以放到这里。
> .gitignore文件： 这个主要是控制git提交和上传文件的，简称就是忽略提交。
> package.json文件：定义了项目所需要的文件和项目的配置信息（名称、版本和许可证），最主要的是使用npm install 就可以下载项目所需要的所有包。


## 路由

#### 页面跳转

页面跳转一般有两种形式，第一种是利用标签<Link>,第二种是用js编程的方式进行跳转，也就是利用Router组件
```js
import Router from 'next/router'

 const goDetail = () => {
    Router.push({
      pathname: '/pageDetail'
    })
  }


      <div><Link href="/pageDetail">详情页</Link></div>
      <div onClick={goDetail}>去详情页面</div>
```


注意：用<Link>标签进行跳转是非常容易的，但是又一个小坑需要你注意一下，就是他不支持兄弟标签并列的情况。

就是得加个根标签


#### 参数的传递和接收

在Next.js中只能通过通过query（?id=1）来传递参数，而不能通过(path:id)的形式传递参数。

###### 拼接方式传递
```js
import Link from 'next/link'
import Router from 'next/router'

  <Link href="/pageDetail?bid=23"><a>{blog.title}</a></Link>
  const goDetail = () => {
    Router.push({
      pathname: '/pageDetail?bid=123',
    })
  }



      <div><Link href="/pageDetail">详情页</Link></div>
      <div onClick={goDetail}>去详情页面</div>
```
###### 对象方式传递

```js
    import Link from 'next/link'
    import Router from 'next/router'


    const goDetail = () => {
      Router.push({
        pathname: '/pageDetail',
        query: {
          name:"icourt"
        }
      })
    }

      <div><Link href={pathname:"/pageDetail",query:{ name:"icourt"}}>详情页</Link></div>
      <div onClick={goDetail}>去详情页面</div>
```



```js
//PageDetail.js
import { withRouter} from 'next/router'
import Link from 'next/link'

const PageDetail = ({router})=>{
    return (
        <>
            <div>详情页获取参数: {router.query.name}</div>
            <Link href="/">返回首页</Link>
        </>
    )
}
//withRouter是Next.js框架的高级组件，用来处理路由用的
export default withRouter(PageDetail)

```


<!-- 动态路由 -->
```js

pages/post/[pid].js
route : /post/abc  -->  query : { "pid": "abc" }


pages/post/[pid]/[comment].js
route : /post/abc/a-comment  -->  query : { "pid": "abc", "comment": "a-comment" }

```


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


```js
fetch 的缓存策略
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



## CSS-in-JS
可以使用任何现有的 CSS-in-JS 解决方案。 最简单的一种是内联样式：
<p style={{ color: 'red' }}>hi there</p>

使用 styled-jsx 的组件就像这样
```js
function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  )
}

export default HelloWorld

```


@next/font
加入了一个新的包，可以在构建时直接引用 google 字体和本地字体，实现字体的托管和预加载，这点对英文网站很有用，中文网站一般不加载字体，图标建议使用 svg。
加载谷歌字体
import { Inter } from '@next/font/google';
const inter = Inter();
<html className={inter.className}>
复制代码
加载本地字体
import localFont from '@next/font/local';
const myFont = localFont({ src: './my-font.woff2' });
<html className={myFont.className}>


新的 next/image
我们知道在 Next.js 12 之前，使用 <img>标签，eslint 会有一个警告，提示我们必须使用 next/image 组件， 因为 next/image 帮我们做了几点优化

自动优化图片格式
自动缩放图片大小
使用Intersection Observer API 实现懒加载

所以 image 必须加上 width 和 height 参数
新的 Next/image 使用了浏览器的 lazy-loading 代替了 Intersection Observer API
默认情况下需要 alt 标记，因此减少了客户端 JavaScript 代码，当然这个属性对浏览器要求较高，要求 chrome 77+。
import Image from 'next/image';
import avatar from './lee.png';

function Home() {
  // 为了提高可访问性 "alt" 属性是必须的
  // 图片可以使用放在 `app/`  目录下
  return <Image alt="leeerob" src={avatar} placeholder="blur" />;
}


在 Next13 中 ， 在 app 目录下，如要使用 useState 等状态管理的 hook，那么该组件只在客户端执行，需要在首行加入 'use client' 指令。
```js 
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
该区分服务端组件和客户端组件，下表列出了常用使用场景





使用场景服务端组件客户端组件fetch 请求数据。✅[⚠️]访问后端资源（直接）✅❌在服务器上保留敏感信息（访问令牌、API 密钥等）✅❌保持对服务器的大量依赖/减少客户端 JavaScript✅❌添加交互和事件侦听器（onClick(),onChange()等）❌✅使用状态和生命周期效果（useState(), useReducer(), useEffect(), 等）❌✅使用仅限浏览器的 API(window)❌✅使用依赖于状态、效果或仅浏览器 API 的自定义 hooks❌✅使用React 类组件

