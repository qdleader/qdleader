
## 创建项目

```js
  npm install -g create-next-app		//全局安装脚手架
  create-next-app nextApp		//基于脚手架创建项目
  cd nextApp
  npm run dev		//运行项目
```

创建 ts 模板


```
npx create-next-app@latest --typescript
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


## @next/font
加入了一个新的包，可以在构建时直接引用 google 字体和本地字体，实现字体的托管和预加载，这点对英文网站很有用，中文网站一般不加载字体，图标建议使用 svg。

加载谷歌字体
```js
import { Inter } from '@next/font/google';
const inter = Inter();
<html className={inter.className}>
```
加载本地字体
```js
import localFont from '@next/font/local';
const myFont = localFont({ src: './my-font.woff2' });
<html className={myFont.className}>

```



## next/image
我们知道在 Next.js 12 之前，使用 <img>标签，eslint 会有一个警告，提示我们必须使用 next/image 组件， 因为 next/image 帮我们做了几点优化

> 1. 自动优化图片格式
> 2. 自动缩放图片大小
> 3. 使用Intersection Observer API 实现懒加载

所以 image 必须加上 width 和 height 参数
新的 Next/image 使用了浏览器的 lazy-loading 代替了 Intersection Observer API
默认情况下需要 alt 标记，因此减少了客户端 JavaScript 代码，当然这个属性对浏览器要求较高，要求 chrome 77+。
```js
import Image from 'next/image';
import avatar from './lee.png';

function Home() {
  // 为了提高可访问性 "alt" 属性是必须的
  // 图片可以使用放在 `app/`  目录下
  return <Image alt="leeerob" src={avatar} placeholder="blur" />;
}
```


ts 版本时候图片需放在 public文件夹下
```js
如/public/assets/logo.png
  <Image alt="leeerob" src="/assets/logo.png" placeholder="blur" />

```


网站部署 netlify
搭建好的next网站项目可以直接在放到github或netlify[https://www.netlify.com/]免费部署访问


