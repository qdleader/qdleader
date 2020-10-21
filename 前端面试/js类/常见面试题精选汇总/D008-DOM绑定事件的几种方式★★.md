# D008-DOM绑定事件的几种方式★★


## 1.在DOM元素中直接绑定

```
<input type="button" onclick="fn()"/>

<script>
function fn() {
  console.log("执行方法1")
}
</script>
```

## 2.在js中直接绑定

```
document.getElementById('btn').onclick = function() {
  console.log("方法2")
}
```


## 绑定事件监听函数
> 事件监听函数addEventListener() 或attachEvent()

事件监听分别定义了三个时间阶段，依次是：捕获阶段，目标阶段，和冒泡阶段

```
element.addEventListener(event, function, useCapture)


event:(必需)事件名，支持所有的Dom事件。
function:(必需)指定要事件触发时候执行的函数
useCapture:（可选）指定事件是否在捕获或冒泡阶段执行。true，捕获。false，冒泡。默认false。

element.addEventListener(DOM事件名,事件触发时执行函数,指定是否是冒泡执行 不填时候默认为false false为冒泡)
```



```
document.getElementById('btn').addEventListener('onclick','aaa')

function aaa() {
  console.log('123')
}
```


在ie中，dom事件名必须加on
```
element.attachEvent('onclick',aaa)

function aaa() {
  console.log('aaaa')
}
```

所以封装一个通用的就是

```
//绑定监听事件
function listen(ele,type,fn) {
  if(ele.addEventListener) {
    ele.addEventListener(type,fn)
  } else {
    ele.attachEvent('on'+ type,fn)
  }
}

//解除事件监听
function removeEventHandler(ele,type,fn) {
  if(ele.removeEventListener) {
    ele.removeEventListener(type,fn)
  } else {
    ele.detachEvent('on' + type,fn)
  }
}

let btnInput = document.getElementById('btn');

listen(btnInput,'click',hello1);//添加事件 hello1
listen(btnInput,'click',hello2);//添加事件 hello2

removeEventHandler(btnInput,'click',hello1) //移除事件hello1
```

由于我们正常写，然后绑定多个事件时候：
```
let btn1 = document.getElementById('btn1');
btn1.onclick = function() {
  console.log('hello1')
}
btn1.onclick = function() {
  console.log('hello2')
}
```
我们会发现：常规的事件绑定只执行最后绑定的事件。


所以事件监听的一大优点就是
> 可以绑定多个事件，并可以解除相应的绑定



## 事件委托

事件委托就是利用冒泡的原理，把事件加到父元素或祖先元素上，触发执行效果。

```
let btn6 = document.getElementById('btn6')
document.onclick = function(event) {
  let event = event || window.event;
  let target = event.target || event.srcElement
  if(target == btn6) {
    alert("我是按钮6")
  }
}
```

通过下面两个例子

```
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

item1.onclick = function() {
  console.log('btn1')
}

item2.onclick = function() {
  console.log('btn2')
}

item3.onclick = function() {
  console.log('btn3')
}
```

但通过事件委托ne

```
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

document.addEventListener('click',function(event) {
    let target = event.target
    if(target == btn1) {
      console.log('btn1')
    } else if(target == btn2) {
        console.log('btn2')
    } else if(target == btn3) {
        console.log('btn3')
    }
  })

```
因此呢，得出
## 事件委托优点

> 1.提高JavaScript性能。事件委托可以显著的提高事件的处理速度，减少内存的占用。

那么还有优点吗？


看下面这两个例子：

```
<ul id="list">
 <li id="item1" >item1</li>
 <li id="item2" >item2</li>
 <li id="item3" >item3</li>
</ul>



let oUl = document.getElementById("list");
let oLi = oUl.getElementsByTagName("li");

for(var i = 0; i < oLi.length; i ++) {
  (function(i) {
    oLi[i].onclick = function() {
      console.log(i)
    }
  }(i))
}

let newLi = document.createElement('li')
let newText = document.createTextNode('item4')
newLi.appendChild(newText);
oLi.appendChild(newLi)
```

你会发现点击第四个按钮时候是不生效的。。。

但你用事件监听写呢
```
let oUl = document.getElementById("list");

document.addEventListener('click',function(event) {
    let target = event.target;
    if(target == 'Li') {
      console.log(target.innerHTML)
    }
  })


  let newLi = document.createElement('li');
  let newText = document.createTextNode('item4');

  newLi.appendChild(newText)
  oUl.appendChild(newLi)
```
item4有事件响应。说明事件委托可以为新添加的DOM元素动态的添加事件。

所以得出
## 事件委托第二个优点
> 可以对动态创建的DOM元素进行事件绑定:
