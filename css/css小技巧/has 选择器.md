# has 选择器

has 选择器是 CSS3 中新增的一个选择器，它可以用来匹配一个元素是否包含另一个元素。
has 选择器的语法如下：

```css
element:has(selector) {
  /* CSS rules */
}
```

```css
/* 其中，element 是要匹配的元素，selector 是要包含的元素的选择器。

例如，我们可以使用 has 选择器来匹配所有包含 <p> 元素的 <div> 元素： */
div:has(p) {
  background-color: yellow;
}
```
