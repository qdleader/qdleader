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
function listen(ele,type,fn) {
  if(ele.addEventListener) {
    ele.addEventListener(type,fn)
  } else {
    ele.attachEvent('on'+ type,fn)
  }
}
```
