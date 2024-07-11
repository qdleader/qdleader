# react阻止冒泡和去掉默认事件
## 阻止冒泡

```js
fn(ev){
    ev.stopPropagation()
}
```



## 去掉默认事件

```js
fn(ev){
    ev.preventDefault()
}
```


