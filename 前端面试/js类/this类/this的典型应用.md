js 中 this 典型应用

##  1在 html 中使用

```js

<input type="button" onclick="showInfo(this)" value="点一下"/>
```

这里 this ，就把当前这个input元素传过去了

## 2.构造函数
```js
function people(name) {
  this.name = name
}
```

## 3. input 点击获取值

```js
<input type="button" id="text" value="点击"/>


let btn = document.getElementById("text");
btn.onclick = function() {
  alert(this.value)
}
```


## 4. call 和 apply

```js
let arr = [12,23,56];
Math.max.apply(this,arr)
Math.min.call(this,...arr)
```
