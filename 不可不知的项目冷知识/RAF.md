RAF 是 what ？

```
RAF 是 requestAnimationFrame 一个动画的API

```

一些关于动画的知识

> 要想动画流畅，更新频率要60帧/s,即16.67ms

> setTimeout 要手动控制频率，而RAF浏览器会自动控制

> 后台标签或隐藏在iframe中，RAF 会暂停， 而setTimeout依然可以执行






```
//settimeout 写法
let oDiv = document.getElementById('oDiv');

let cWidth = 100;
let maxWidth = 500;

function animate() {
  let cWidth = cWidth + 3;
  oDiv.style.width = cWidth;
  if(cWidth < maxWidth) {
    setTimeout(aminmate,16.7)
  }
}

animate()
```
setTimeout 时间需要自己调整，调整不好会有卡顿。。


RAF会自动匹配浏览器最流畅模式。


```
// RAF
let oDiv = document.getElementById('oDiv');

let cWidth = 100;
let maxWidth = 500;

function animate() {
  let cWidth = cWidth + 3;
  oDiv.style.width = cWidth;
  if(cWidth < maxWidth) {
    window.requestAnimationFrame(animate)
  }
}

animate()

```
