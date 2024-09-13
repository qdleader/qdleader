# DOM 事件分级

随着DOM级别的变化，DOM事件也随之分成了多个级别。
DOM事件分为3个级别：DOM0级事件处理，DOM2级事件处理和DOM3级事件处理。

> 由于DOM1级中没有事件的相关内容，所以没有DOM1级事件。

## 1、DOM0级事件
DOM0级处理事件就是将一个函数赋值给一个事件处理属性。
```js 
<button id="btn" type="button"></button> 
 
var btn = document.getElementById('btn')
btn.onclick = function() { 
    console.log('Hello World')
}
// 将一个函数赋值给了一个事件处理属性onclick 这样的方法就是DOM0级。
// 可以通过给事件处理属性赋值null来解绑事件。
```
## 2、DOM2级事件
DOM2级处理事件是在DOM0级处理事件的基础上再添加了一些处理程序。

可以同时绑定多个事件处理函数。
定义了 addEventListener 和 removeEventListener 两个方法。
```js
element.addEventListener(eventName, fn, useCapture)
// 第三个参数 useCapture：指定事件是否在捕获或冒泡阶段执行。布尔值，可选，默认false
// 可能值：true - 事件句柄在捕获阶段执行；false- 默认。事件句柄在冒泡阶段执行
```
```js
<button id="btn" type="button"></button> 
 
var btn = document.getElementById('btn')
function showFn() { 
    alert('Hello World')
}
function LogFn() { 
    alert('Hello World')
}
// 同时绑定多个事件处理函数
btn.addEventListener('click', showFn);
btn.addEventListener('click', LogFn);

// 解绑事件 
btn.removeEventListener('click', showFn); 
```

## 3、DOM3级事件

    DOM3级处理事件是在DOM2级处理事件的基础上再添加了很多事件类型。

    UI事件，当用户与页面上的元素交互时触发，如：load、scroll
    焦点事件，当元素获得或失去焦点时触发，如：blur、focus
    鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup
    滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
    文本事件，当在文档中输入文本时触发，如：textInput
    键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
    合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart
    变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified

同时DOM3级事件也允许使用者自定义一些事件。


## 四、DOM事件流
DOM2级事件中规定了一个事件流包括3个阶段：事件捕获阶、处于目标阶段、事件冒泡阶段。
```html 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>事件冒泡</title>
</head>
<body>
  <div id="parent">
    我是父元素
    <span id="son">我是子元素</span>
  </div>
</body>
<script type="text/javascript">
var parent = document.getElementById('parent');
var son = document.getElementById('son');

parent.addEventListener('click', () => {
  alert('父级冒泡');
}, false);
parent.addEventListener('click', () => {
  alert('父级捕获');
}, true);
son.addEventListener('click', () => {
  alert('子级捕获');
}, true);
son.addEventListener('click', () => {
  alert('子级冒泡');
}, false);
</script>
</html>
```

当点击父元素：父级冒泡 -> 父级捕获
当点击子元素：父级捕获 -> 子级捕获 ->  子级冒泡 -> 父级冒泡

总结
事件流的执行顺序是：事件捕获阶 -> 处于目标阶段 -> 事件冒泡阶段，且当事件处于目标阶段时，事件调用顺序决定于绑定事件的书写顺序。
需要注意的是IE8以下版本不支持 addEventlistener 和 removeEventListerner，需要使用attachEvent 和 detachEvent 实现：
```js 
// 绑定事件 
btn.attachEvent('onclick', fn); 
// 解绑事件
btn.detachEvent('onclick', fn); 

// 不需要传入第三个参数，因为IE8以下版本只支持冒泡型事件。

```