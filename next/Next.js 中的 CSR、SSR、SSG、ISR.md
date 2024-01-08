```tsx
Next.js 给自己的介绍是“The React Framework”，没接触过的同学可能会有疑问？React 已经是一个框架了，为什么还要有 Next.js 呢？其实 Next.js 是为了互补 React 的不足，Next.js 提供了 CSR、SSR、SSG、ISR、 Streaming 这么多渲染方式，


## CSR（Client Side Rendering）
CSR 也就是客户端渲染，需要使用 JavaScript，调用接口（API）来获取数据，这种方式前后端完全分离。
比如现在有一个博客接口/api/articles，返回 JSON 数据如下

js
[
    {"id":1,"title":"使用 Next.js 和掘金API 打造个性博客"},
    {"id":2,"title":"使用 Strapi 和 Next.js 开发简易微博"},
    {"id":3,"title":"使用 Notion 数据库进行 Next.js 应用全栈开发"}
]

通常 React 项目会使用 create-react-app 来创建项目，我们会在useEffect 中请求数据。
js
import { useState, useEffect } from "react";

function BlogList() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const reload = () => {
    setLoading(true);
    fetch("/api/articles").then((res) => res.json()).then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    reload();
  }, []);

  if (!data && isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <div>
        <button disabled={isLoading} loading={isLoading} onClick={reload}>刷新</button>
      </div>
      {data.map((item) => (
        <div key={item.id}>
          <a href={`/blog/${item.id}`}>{item.title}</a>
        </div>
      ))}
    </div>
  );
}

上面的代码中，页面上还有一个刷新按钮，当数据新增时，接口接口会多返回一条数据，点击刷新按钮，页面上已经存在的 DOM 节点是不更新的，DOM 中只会插入新增的数据，这样我们就会感觉页面渲染很快。
这得益于 React 中引入了虚拟 dom，也就是将真实元素节点抽象成 JavaScript 对象，称之为 VNode，更新 DOM 前会先通过 VDOM 对比，得到要真实更新的 DOM，因此可以有效减少直接操作 dom 次数，从而提高程序性能。



Next.js 团队发布了另一个关于数据请求的 hooks 叫 swr，名字来自于 stale-while-revalidate，意思是过期就会重新验证，它有缓存，聚焦时重新验证，间隔轮询等功能。
与上面代码功能相同，我们可以改成下面代码：
js
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function BlogList() {
  const { data, error } = useSWR("/api/articles", fetcher, { refreshInterval: 3000 });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <a href={`/blog/${item.id}`}>{item.title}</a>
        </div>
      ))}
    </div>
  );
}



#### CSR 存在的问题
基于 create-react-app 创建的应用，在 HTML 首次挂载的的时候仅有几个 DOM 节点，类似如下
js
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" media="screen" href="/assets/css/index-fe9dd8655d2ba.css" />
</head>
<body>
    <div id="root"></div>
    <script src="/assets/js/main-d0bbfde89eb2a.js"></script>
</body>
</html>



这就会引起 2 个问题

> 1. 首次渲染，白屏时间过长；
> 2. 由于所有 JS 都打包在一个文件中，在这个 JS 加载完成之前，在页面上是看不到任何东西，这就会让用户感受到‘白屏’
对于搜索引擎来说，只能在页面中发现一个 DOM 节点，不利于 SEO；因为搜索引擎是不支持执行 JavaScript 代码的。


## SSR（Server Side Rendering）

SSR 也就是服务端渲染，有些同学可能会问“难道要回到 PHP 或者 JSP 时代吗？”，没错 PHP 和 JSP 是服务端渲染，但 Next.js 的 SSR 不同于纯服务端渲染，也拥有着如 SPA 一样快速渲染的能力。传统的服务端渲染只有 HTML 字符串，缺少交互，比如有一个ClickCounter 组件
js
// shared/components/ClickCounter.jsx
import React,{ useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
      <button onClick={() => setCount(count + 1)} > {count} Clicks </button>
  );
};


经过服务端渲染只能得到最简单的的 HTML。

js
// server/index.js
import ReactDOMServer from "react-dom/server";
import express from "express";

require("node-jsx").install();

const app = express();

app.get("/", (req, res) => {
    const reactHtml = ReactDOMServer.renderToString(<ClickCounter />）
    const htmlTemplate = `<!DOCTYPE html>
    <html>
        <head>
            <title>Universal React server bundle</title>
        </head>
        <body>
            <div id="root">${reactHtml}</div>
            <script src="public/client.bundle.js"></script>
        </body>
    </html>`
    res.send(htmlTemplate)
});


打印出的 button 点击无效，传统的服务端渲染到此就结束了。而 react 服务端渲染，需要客户端根据服务端生成的页面，继续二次渲染、事件绑定等

js
// client/index.jsx
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(<ClickCounter />, document.getElementById('root'));




服务器端使用renderToString直接渲染出的页面信息为静态 html。
客户端根据渲染出的静态 html 进行hydrate，做一些绑定事件等操作。
因此，若要使用 react 来实现服务端渲染，一般需要 3 个目录，工程配置比较繁琐。
server： 包含 express 的后端工程
client： 包含 react 的前端工程
shared： 包含前后端公用的组件代码。


而在 Nextjs 中，只需要在 Pages 目录下，如下这么写，Next.js 便会自动打包出前后端的代码，拥有 hydrate 的能力
js
import Link from "next/link";

export default function Page({ data }: PageProps) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/blog/${item.id}`}><a>{item.title}</a></Link>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://localhost:3000/api/articles').then((res)=>res.json());

  return {
    props: { data: res },
  };
};

我们需要清楚的是:

getServerSideProps 只在服务端执行
Page 组件是在前后端公共执行

所以，在 Page 函数中要注意一些全局对象的使用，比如window对象（Node.js 中是不存在的，所以会报错）


js
// ❎ 错误代码
export default function Page({ data }: PageProps) {
  return (
    <div style={{width: window.innerWidth}}>
    11
    </div>
  );
}

我们应该将 window 操作放入 useEffect 中，或者 click 回调函数中，因为这些函数在服务端渲染的时候是自动忽略的。
SSR 解决了白屏问题和 SEO 问题，但是也不是完美的。

#### SSR 存在的问题

> 1. 当请求量增大时，每次重新渲染增加了服务器的开销。
> 2. 需要等页面中所有接口请求完成才可以返回 html，虽不是白屏，但完成hydrate之前，页面也是不可操作。




## SSG（Static Site Generation）

SSG 也就是静态站点生成，为了减缓服务器压力，我们可以在构建时生成静态页面，备注：Next.js 生成的静态页面与普通的静态页面是不一样的，也是拥有 SPA 的能力，切换页面用户不会感受到整个页面在刷新
比如文章列表页，要生成静态页面，在 Next.js 中代码如下：
js
import Link from "next/link";

export default function Page({ data }: PageProps) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/blog/${item.id}`}><a>{item.title}</a></Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://localhost:3000/api/articles').then((res)=>res.json());

  return {
    props: { data: res },
  };
};

使用getStaticProps 可以获得静态网页的数据，传递给 Page 函数，便可以生成静态页面。博客列表 URL 是固定的，那么不是固定 URL 的页面，要生成静态页面怎么办呢？比如博客详情页。
js
// pages/blog/[id].tsx
export async function getStaticPaths() {
  const articles = await fetch('https://localhost:3000/api/articles').then((res)=>res.json());
  return {
    paths: articles.map((p) => ({
      params: {
        id: p.id.toString(),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const res = await fetch(`https://localhost:3000/api/articles/${params.id}`).then((res)=>res.json());

  return {
    props: { data: res },
  };
};

export default function Page({ data }: PageProps) {
  return (
    <div>
      <h1>{data.tltle}</h1>
      <div>{data.content}</div>
    </div>
  );
}

我们可以使用 getStaticPaths 获得所有文章的路径，返回的paths 参数会传递给getStaticProps，在 getStaticProps中，通过 params 获得文章 id， Next.js 会在构建时，将paths 遍历生成所有静态页面。
SSG 的优点就是快，部署不需要服务器，任何静态服务空间都可以部署，而缺点也是因为静态，不能动态渲染，每添加一篇博客，就需要重新构建。



## ISR（Incremental Static Regeneration）

于是有了一另一种方案 ISR，增量静态生成，在访问时生成静态页面，在 Next.js 中，它比 SSG 方案只需要加了一个参数revalidate
js
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://localhost:3000/api/articles').then((res)=>res.json());

  return {
    props: { data: res },
    revalidate: 20,
  };
};

上面代码表示，当访问页面时，发现 20s 没有更新页面就会重新生成新的页面，但当前访问的还是已经生成的静态页面，也就是：是否重新生成页面，需要根据上一次的生成时间来判断，并且数据会延迟 1 次。
我们可以在页面上显示生成时间

js
function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const t = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return <h1>当前时间：{time}</h1>;
}
export default function Page({ data, time }) {
  return (
    <div style={{ width: 500, margin: "0 auto" }}>
      <h1>
        页面生成时间：<span>{time}</span>
      </h1>
      <Time />
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/blog/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await getList();

  const time = new Date().toLocaleTimeString();

  return {
    props: { data: res, time },
    revalidate: 20,
  };
};

上面代码中我们定义了一个 Time 组件，Time 在客户端渲染，每秒自动刷新。
本地使用运行yarn build和 yarn start 来模拟生成环境，测试增量生成。



列表页面可以增量生成，那么详情页呢？

若我们访问不存在的 id，比如 http://localhost:3000/blog/4，页面会显示 404。

getStaticPaths 方法中还有一个参数 fallback 用于控制未生成静态页面的渲染方式。
js
// pages/blog/[id].js
import { useRouter } from 'next/router'

function Post({ post }) {
  const router = useRouter()

  // 如果页面还没静态生成，则先显示下面的loading
  // 直到 `getStaticProps()`运行完成
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // Render ...
}

// 在构建时运行，获取全部文章路径
export async function getStaticPaths() {
  const articles = await fetch('https://localhost:3000/api/articles').then((res)=>res.json());
  return {
    paths: articles.map((p) => ({
      params: {
        id: p.id,
      },
    })),
    fallback: true,
  }
}

fallback 有 3 个值

fallback: 'blocking' 未生成的页面使用服务端渲染;
fallback: false 未生成的页面访问 404
fallback: true 当访问的静态页面不存在时，会显示 loading，直到静态页面生成返回新的页面。

我们将 fallback 设置为 true，重新访问页面。

revalidate会额外导致服务器性能开销，20s 生成一次页面是没必要的，比如一些博客网站和新闻网站，文章详情变更没那么频繁。

#### On-demand Revalidation（按需增量生成）
自从 next v12.2.0 开始支持按需增量生成，我们可以在 page 目录下新建一个 pages/api/revalidate.js接口，用于触发增量生成。
js
// pages/api/revalidate.js

export default async function handler(req, res) {
  // 设置一个秘钥用于检查，访问合法性
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // path 为要触发的实际路径
    // e.g. for "/blog/[id]" this should be "/blog/5"
    await res.revalidate(req.query.path)
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

比如我们在数据库中增加了 2 条数据，此时访问 https://localhost:3000/api/revalidate?secret=<token>&path=/blog/5，便可以触发，生成新的静态页面了。




## Server component
Server component 是 React18 提供的能力， 与上面的 SSR 不同，相当于是流式 SSR。
传统 SSR 执行步骤

在服务器上，获取整个应用的数据。
在服务器上，将整个应用程序数据渲染为 HTML 并发送响应。
在浏览器上，加载整个应用程序的 JavaScript 代码。
在客户端，将 JavaScript 逻辑连接到服务端返回的 HTML（这就是“水合”）。

而以上每个步骤必须完成，才可以开始下一个步骤。

比如一个传统的博客页面采用 SSR 的方式使用 getServerSideProps 的方式渲染，那么就需要等 3 个接口全部返回才可以看到页面。
js
export async function getServerSideProps() {
  const list = await getBlogList()
  const detail = await getBlogDetail()
  const comments = await getComments()

  return { props: { list,detail,comments } }
}

如果评论接口返回较慢，那么整个程序就是待响应状态。
我们可以在 Next.js 13 中开启 app 目录来，使用 Suspense开启流渲染的能力，将 Comments 组件使用 Suspense 包裹。
js
import { SkeletonCard } from '@/ui/SkeletonCard';
import { Suspense } from 'react';
import Comments from './Comments';

export default function Posts() {
  return (
    <BlogList />
    <section>
     <BlogDetail />
      <Suspense
        fallback={
          <div className="w-full h-40 ">
            <SkeletonCard isLoading={true} />
          </div>
        }
      >
        <Comments />
      </Suspense>
    </section>
  );
}

组件数据请求使用 use API，就可以实现流渲染了。
js

import { use } from 'react';

async function fetchComment(): Promise<string> {
  return fetch('http://www.example.com/api/comments').then((res)=>res.json())
}

export default function Comments() {
  let data = use(fetchComment());
  return (
    <section>
      {data.map((item)=><Item key={item.id}/>)}
    </section>
  );
}



如果评论部分接口还在请求中，那么页面左侧注水完成，也是可以交互可以点击的。
因此，Server component 解决了 SSR 中的 3 个问题

> 1. 不必在服务器上返回所有数据才开始返回 html，相反我们可以先返回一个 HTML 结构，相当于骨架屏。
> 2. 不必等待所有 JavaScript 加载完毕才能开始补水。相反，我们可以利用代码拆分与服务器渲染结合使用，React 将在相关代码加载时对其进行水合。
> 3. 不必等待所有组件水合完成，页面才可以交互。




## 总结


> CSR - 客户端渲染。也就是我们常说的 SPA（single page application），使用 useEffect 获取接口数据，优点是前端后端完全分离，静态部署，缺点是 JavaScript 过大，会造成“白屏”，网页初始 DOM 为空，不利于 SEO，适合开发一些后端管理系统。


> SSR - 服务器端渲染。优点是解决 SEO 和白屏问题，缺点是每次渲染都会请求服务器，会给服务器造成压力。


> SSG - 静态站点生成。在构建时获取数据，生成静态页面，只需要静态部署，适合开发一些数据不易变更的网站，比如开发文档。


> ISR – 增量静态再生。它是 SSG 和 SSR 的组合，主要是靠静态服务，但在数据过期时，可以再次从 API 获取数据，并且生成静态页面，最适合常见的资讯类、新闻类网站。


> Server component- 也是 SSR 的一种， 但互补了 SSR 的不足，让网页拥有流式渲染的能力。

```