# property 和 attribute 的区别

> property是DOM中的属性，是JavaScript里的对象；
> attribute是HTML标签上的特性，它的值只能够是字符串；




通俗来讲：
attribute 是在我们代码中将常看到的键值对，例如

```
<input id="inputBox" type="text" value="qdleader">





```
这个input上有三个attribute

> id: inputBox
> type: text
> value: Name


property 是 attribute 对应的DOM节点 对象属性
```
let oBox = document.getElementById('inputBox');
oBox.id === 'inputBox'
oBox.type === 'text'
oBox.value === 'qdleader'

```

这里看好像差不多，那他们有什么区别？
## 1.特性(attribute)和属性(property)的同步
```
<input id="inputBox" type="texo" value="qdleader">

//页面加载后，我们输入“前端架构师”
```


```
// attribute
input.getAttribute('id') // inputBox
input.getAttribute('type') // texo
input.getAttribute('value') // qdleader


// property
input.id // inputBox
input.type //  text
input.value // 前端架构师

```

可以看到, 在 attribute 中, 值仍然是 html 代码中的值.
 而在 property 中, type 被自动修正为了 text,
 而 value 随着用户改变 input 的输入, 也变更为了 "前端架构师"


attribute 会始终保持 html 代码中的初始值, 而 Property 是有可能变化的

## eg2
```
<input type="text" id="oInput">


 <script>
 let el = document.getElementById("oInput");
 el.setAttribute('value', 'jjc');   
 console.log("el.value",el.value)
 console.log("el.getAttribute('value'))",el.getAttribute('value'))

 el.value = 'newValue';   
 console.log("el.value",el.value)
 console.log("el.getAttribute('value'))",el.getAttribute('value'))

 el.setAttribute('value', 'qdleader');
 console.log("el.value",el.value)
 console.log("el.getAttribute('value'))",el.getAttribute('value'))
 </script>

```
上面打印：
```
el.value jjc
el.getAttribute('value')) jjc


el.value newValue
el.getAttribute('value')) jjc


el.value newValue
el.getAttribute('value')) qdleader

```

从eg2中可以看出，当el.value没有设置时候，el.setAttribute('value', 'jjc'); 设置了，el.value会同步，

但是当el.value设置后，再打印el.value会发现，值变了，然而el.getAttribute('value')的值，并没有变，(attribute你不讲武德呀），可以看出<b>property的改变不会导致attribute的变化</b>，并且，再继续实验。我们在再继续设置attribute ，el.setAttribute('value', 'qdleader');  会发现property没有变，attribute变了，


eg3：
```
let el = document.getElementById("oInput");

el.setAttribute('value', 'jjc');   
console.log("el.value",el.value)
console.log("el.getAttribute('value'))",el.getAttribute('value'))



el.setAttribute('value', 'qdleader');
console.log("el.value",el.value)
console.log("el.getAttribute('value'))",el.getAttribute('value'))

```

结果打印
```
el.value jjc
el.getAttribute('value')) jjc

el.value qdleader
el.getAttribute('value')) qdleader
```


也就是说  如果没有设置property时候，设置attribute，property会跟着改变，如果过设置了property了，他俩就分道扬镳，耗子尾汁了，attribute变化就不会影响到property了(有同学说，那我首次设置el.value="123",会发现property变了，而attribute为null)。由此，可得出结论：

property能够从attribute中得到同步；
attribute不会同步property上的值；
attribute和property之间的数据绑定是单向的，attribute->property；
更改property和attribute上的任意值，都会将更新反映到HTML页面中；

## Attribute or Property 修改class、id、name
  对于class、id、name、等属性，无论哪一方面发生改变，都会互相影响。（这一part比较直观就不演示了）

## 对于新增加的属性
eg4:
```
<input value="customInput" qdleader="前端架构师" />

input.test = 'one'

console.log(input.test) //one
console.log(input.getAttribute) //null
```


eg5：
```
<input value="customInput" qdleader="前端架构师" />

input.getAttribute('qdleader') // 前端架构师
input.qdleader // undefined
```

可以看到, 我们能够成功的获取自定义的 attribute, 但是无法获取 property.

其实不难理解, DOM 节点在初始化的时候会将html 规范中定义的 attribute 赋值到 property 上, 而自定义的 attribute 并不属于这个氛围内, 自然生成的 DOM 节点就没有这个 property.


好在 DOM 对象也提供了操作特性的 API：

```
  Element.hasAttribute(name) – 判断某个特性是否存在
  elem.getAttribute(name) – 获取指定特性的值
  elem.setAttribute(name, value) – 设置指定特性的值
  elem.removeAttribute(name) – 移除指定特性
```
以上 API 定义在 Element 上。
根据 HTML 规范，标签以及特性名是不区分大小写的，因此以下代码是一样的：
```
  el.getAttribute('id')
  el.getAttribute('ID')
  el.getAttribute('iD')
```
复制代码并且，特性永远都是字符串或 null。如果我们为特性设置非字符串的值，则引擎会将此值转换为字符串。属性是具有类型的：
el.getAttribute('checked') === '' // 特性是字符串
el.checked === false              // 属性是 boolean 类型的值

el.getAttribute('style') === 'color:blue' // 特性是字符串
typeof el.style === 'object'                 // 属性是 CSSStyleDeclaration 对象
复制代码即使都是字符串，属性和特性也可能不同，有一个例外就是 href：
el.getAttribute('href') === '#' // 特性原样返回 html 设置的值
el.href === 'www.baidu.com'   // 属性返回解析后的完整 uri


## 注意

> 对属性Property可以赋任何类型的值，而对特性Attribute只能赋值字符串！并且setAttribute()的两个参数，都必须是字符串
> class特性在变成属性时，名字改成了“className”，因此div1.className和div1.getAttrbute('class')相同。
> 两者都有可能引起DOM重新渲染。

## 总结
> 1、property和attributies都是properties的子集，而每个attribute是attributies的子集；
> 2、attribute可以理解为特性，可以自定义，直接在html标签上添加的和使用setAttribute添加的情况一致，即html标签添加的都是attribute属性， property则是使用xx.属性进行更改，通常来讲，更改互相影响（value除外）
> 3、当添加新的非默认属性时，是不互通的
