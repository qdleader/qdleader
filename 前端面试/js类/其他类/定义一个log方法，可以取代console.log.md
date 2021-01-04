# 定义一个log方法，可以取代console

1.乞丐版

```
function log(msg) {
  console.log(msg)
}

log("hello qdleader")
```

2.真香版
版本1虽然实现，但是实现不了传多个参数。
```
function log() {
  console.log.apply(console, arguments)
}
```
