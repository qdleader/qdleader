## URLSearchParams 方法


```
// 创建一个URLSearchParams实例
const urlSearchParams = new URLSearchParams(window.location.search);
// 把键值对列表转换为一个对象
const params = Object.fromEntries(urlSearchParams.entries());

```


split 方法

```
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
