
# 1
使用 window.location.search 获取 URL 中的查询字符串，然后使用 JavaScript 内置的 URLSearchParams 对象来解析查询字符串。例如：
```js
const search = window.location.search; // 获取 URL 中的查询字符串，如 "?foo=bar"
const params = new URLSearchParams(search); // 使用 URLSearchParams 解析查询字符串
const foo = params.get('foo'); // 获取参数 "foo" 的值
```

## 2
使用 react-router 的 useParams hook 来获取路由中的参数。例如：

```js
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // 获取路由中的 "id" 参数
  // ...
}
```

## 3

使用 react-router 的 withRouter 高阶组件来获取路由信息。例如：
```js
import { withRouter } from 'react-router-dom';

function MyComponent(props) {
  const search = props.location.search; // 获取 URL 中的查询字符串
  // ...
}

export default withRouter(MyComponent);

```


## 4
split 方法


```js

function getParams(url) {
  const res = {}
  if (url.includes('?')) {
    const str = url.split('?')[1]
    const arr = str.split('&')
    arr.forEach(item => {
      const key = item.split('=')[0]
      const val = item.split('=')[1]
      res[key] = decodeURIComponent(val) // 解码
    })
  }
  return res
}

// 测试
const user = getParams('https://www.baidu.com/s?ie=UTF-8&wd=%7B%20user%3A%20%27qdleader%27,%20age%3A%20%2718%27%20%7D')
<!-- const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A12123%9E&age=18') -->
console.log(user) // { user: 'qdleader', age: '18' }
```
```