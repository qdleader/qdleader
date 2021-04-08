RAF 是 what ？

```
RAF 是 HTML5新增的定时器requestAnimationFrame

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




有关RAF的面试题

用js实现一个无限循环的动画。

定时器 写法

```
let e = document.getElementById('e');
let flag = true;
let left = 0;

function render() {
  if(flag) {
    if(left >= 100) {
      flag = false
    }
    e.style.left = `${left++}px`
  } else {
    if(left <= 0) {
      flag = true
    }
    e.style.left = `${left --}px`
  }
}

setInterval(function() {
    render()
},1000/6)
```

RAF 写法

```
let e = document.getElementById('e');
let flag = true;
let left = 0;

function render() {
  if(flag) {
    if(left >= 100) {
      flag = false
    }
    e.style.left = `${left++}px`
  } else {
    if(left <= 0) {
      flag = true
    }
    e.style.left = `${left --}px`
  }
}

(function loop() {
  render()
  window.requestAnimationFrame(loop)
})()

```


##requestAnimationFrame 比起 setTimeout、setInterval的优势

> 1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。
> 2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。



1、怎么停止requestAnimationFrame？是否有类似clearInterval这样的类似方法？

第一个问题：答案是确定的 必须有：cancelAnimationFrame()接收一个参数 requestAnimationFrame默认返回一个id，cancelAnimationFrame只需要传入这个id就可以停止了。


```

let e = document.getElementById('e');
let flag = true;
let left = 0;

function render() {
  if(flag) {
    if(left >= 100) {
      flag = false
    }
    e.style.left = `${left++}px`
  } else {
    if(left <= 0) {
      flag = true
    }
    e.style.left = `${left --}px`
  }
}

(function animloop() {
     render();
     rafId = window.requestAnimationFrame(animloop);
     //如果left等于50 停止动画
     if(left == 50){
         window.cancelAnimationFrame(rafId)
     }
 })();
```


## 兼容

> 主流浏览器都支持 requestAnimationFrame ，但是有的仍需前缀。写本文的时候，加前缀的情况如下：

> Opera: Opera 15 以后无前缀
> Chrome: Chrome 24+ 无前缀
> Safari: 有前缀
> Firefox: 有前缀，Firefox 23+ 无前缀
> IE: IE 10 以后无前缀
