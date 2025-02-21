# attribute 和 property 的区别

property 是 DOM 中的属性，是 JavaScript 里的对象；
attribute 是 HTML 元素的属性，它的值只能够是字符串

```js
<div id="div1" class="divClass" title="divTitle" title1="divTitle1"></div>
var in1=document.getElementById("div1");
console.log(in1);

“title1”被放在了attributes这个对象里，这个对象按顺序记录了我们在TAG中定义的属性和属性的数量。

从这里就可以看出，attributes是属于property的一个子集，它保存了HTML标签上定义属性。如果再进一步探索attitudes中的每一个属性，会发现它们并不是简单的对象，它是一个Attr类型的对象，拥有NodeType、NodeName等属性。注意，打印attribute属性不会直接得到对象的值，而是获取一个包含属性名和值的字符串，如：

console.log(in1.attributes.title1);        // divTitle1
由此可以得出：

HTML标签中定义的属性和值会保存该DOM对象的attributes属性里面；
```

1. Attribute（特性）：

- 是在 HTML 标记中定义的属性
- 它的值只能是字符串
- 即使值发生变化，HTML 代码中的 attribute 值也不会改变
- 例如：`<input type="text" value="hello">` 中的 type 和 value 都是 attribute

2. Property（属性）：

- 是 DOM 对象的属性
- 可以是任何类型的值（不限于字符串）
- 会随着用户交互或 JS 操作而改变
- 例如：通过 JavaScript 访问的 element.value 就是 property

### property 取值

属性取值很简单。取任何属性的只，用“.”就可以：

```js
var id = div1.id;
var className = div1.className;
var childNodes = div1.childNodes;
var attrs = div1.attributes;
此处再次强调：

// class 特性在变成属性时，名字改成了“className”，因此 div1.className 和 div1.getAttrbute('class')相同。
// 上面代码中的 div1.attributes 是取的 attributes 这一属性，取出来保存到 attrs 变量中，attrs 就成了一个 NamedNodeList 类型的对象，里面存储了若干个 Attr 类型。
```

### property 赋值

```js
// 赋值和基本的 js 对象属性赋值一样，用“.”即可：

div1.className = 'a';
div1.align = 'center';
div1.AAAAA = true;
div1.BBBBB = [1, 2, 3];
对属性 Property 可以赋任何类型的值，而对特性 Attribute 只能赋值字符串！
```

举个实际例子：

```html
<input type="text" value="hello" />
```

如果用户在输入框中输入"world"：

- input 的 value attribute 仍然是"hello"（通过 getAttribute('value')获取）
- 但 input 的 value property 已经变成"world"（通过 element.value 获取）

更改 property 和 attribute 其中一个值，会出现什么结果

```js
var in1 = div1.getAttribute("id1");
in1.value = "new value of prop";

console.log(in1.value); // 'new value of prop'
console.log(in1.attributes.value); // 'value="hello"'
```

此时，页面中的输入栏的值变成了“new value of prop”，而 propety 中的 value 也变成了新的值，但 attributes 却仍然是“hello”。从这里可以推断，property 和 attribute 的同名属性的值并不是双向绑定的。

如果反过来，设置 attitudes 中的值，效果会怎样呢？

```js
var in2 = div1.getAttribute("id2");
in2.setAttribute("value", "ni");
console.log(in2.value); //ni
console.log(in2.attributes.value); //value='ni'
```

由此，可得出结论：

property 能够从 attribute 中得到同步；
attribute 不会同步 property 上的值；
attribute 和 property 之间的数据绑定是单向的，attribute->property；
更改 property 和 attribute 上的任意值，都会将更新反映到 HTML 页面中；
