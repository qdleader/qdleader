# h003-一些好玩的HTML的属性
### inputmode

在移动端，inputmode 会影响弹出的键盘布局

```js
// 默认值
<input type="text" inputmode="text"/>
// 电话号码
<input type="text" inputmode="tel"/>
// url
<input type="text" inputmode="url"/>
// 邮箱
<input type="text" inputmode="email"/>
// 数字
<input type="text" inputmode="numeric"/>
// 小数
<input type="text" inputmode="decimal"/>
// 搜索
<input type="text" inputmode="search"/>
```

```js

### a 元素的 download 属性

<a> 元素的 download 属性
网页上到处都是链接，所以我们喜欢能增强链接功能的属性，download 属性就有这种功能，它可以把链接设置为点击即下载。

<a href="/example.pdf" download>Download File</a>
在没有值的情况下，download 属性会强制下载链接页面；如果我们提供值，浏览器会将该值作为下载资源的建议文件名。

<a href="/example.pdf" download="my-download.pdf">Download File</a>

### spellcheck 

该属性可以启用拼写检查，通常用于富文本编辑
<div contenteditable spellcheck="true"></div>

### translate

<div translate="yes">how are you</div>

```
