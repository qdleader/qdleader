# first-child 和 first-of-type 的区别

first-child 和 first-of-type 都是 CSS 中的伪类选择器，用于选中某些特定的元素。它们的区别主要在于选择元素的方式：

first-child：这个选择器会选中其父元素的第一个子元素，不论这个子元素是什么类型的标签。例如，p:first-child 会选中每个父元素的第一个子元素，只要这个子元素是<p>标签。
first-of-type：这个选择器会选中其父元素的第一个特定类型的子元素。例如，p:first-of-type 会选中每个父元素的第一个<p>元素，不论这个<p>元素在其兄弟元素中的位置如何。

看下面的 HTML 代码：

```js
<div>
  <span>我是一个 span 标签</span>
  <p>我是一个 p 标签</p>
  <p>我是另一个 p 标签</p>
</div>
```

在这个例子中，使用 p:first-child 选择器将不会选中任何元素，因为<div>的第一个子元素是<span>，而不是<p>。但是，如果使用 p:first-of-type 选择器，那么会选中第一个<p>元素，因为它是<div>的第一个<p>类型的子元素
