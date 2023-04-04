
## 创建项目

```js
  npm install -g create-next-app		//全局安装脚手架
  create-next-app nextDemo		//基于脚手架创建项目
  cd nextDemo
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



