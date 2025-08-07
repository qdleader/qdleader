# clamp()函数：流体布局

clamp() 函数是 CSS3 中新增的一个函数，它可以用来实现流体布局。
clamp() 函数的语法如下：

```css
clamp(min, val, max)
```

其中，min 表示最小值，val 表示中间值，max 表示最大值。clamp() 函数会根据当前视口的大小，自动选择一个合适的值作为最终值。

例如，我们可以使用 clamp() 函数来实现一个流体布局的标题，代码如下：

```css
h1 {
  font-size: clamp(1rem, 2vw, 2rem);
}
```
