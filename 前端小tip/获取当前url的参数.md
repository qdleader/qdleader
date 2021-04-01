
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
