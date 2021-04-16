
# 正则 方式

```
function query(name) {
  const search = location.search.substr(1)  //类似slice（1）从第一未开始，一直截取到最后
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
  const res = search.match(reg)

  if(res === null) {
    return null
  }
  return res[2]
}
```





# URLSearchParams 方式
```
function query(name) {
  const search = location.search
  const p = new URLSearchParams(search)
  return p.get(name)
}

console.log( query('name'))
```



# URLSearchParams 方式2
```
function queryToObj() {
  const res = {}
  const pList = new URLSearchParams(location.search)
  pList.forEach((val, key) => {
    res[key] = val
  })
  return res
}
```


# 传统方式

```
function queryToObj() {
  const res = {};
  const search = location.search.substr(1) //去掉前面的？

  search.split('&').forEach(item => {
      const arr = item.split('=')
      const key = arr[0]
      const val = arr[1]
      res[key] = val
    })
    return res
}
```
