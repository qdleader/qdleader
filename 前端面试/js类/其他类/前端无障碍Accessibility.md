# 前端无障碍Accessibility
## 什么是无障碍
无障碍是指让所有人都可以使用网站或应用，包括残疾人士。无障碍性是网站或应用的一个特性，它使得网站或应用可以被所有人使用，包括残疾人士。

无障碍性是网站或应用的一个特性，它使得网站或应用可以被所有人使用，包括残疾人士。无障碍性包括以下几个方面：

1. 可访问性：网站或应用可以被所有用户访问，包括残疾人士。这包括使用键盘、鼠标、屏幕阅读器等辅助技术访问网站或应用。2. 可理解性：网站或应用的内容可以被所有用户理解。这包括使用清晰、简洁的语言，以及提供足够的上下文信息。3. 可操作性：网站或应用可以被所有用户操作。这包括使用键盘、鼠标、触摸屏等输入设备操作网站或应用。4. 可感知性：网站或应用的内容可以被所有用户感知。这包括使用清晰、对比度高的颜色，以及提供足够的视觉反馈。

无障碍性是网站或应用的一个重要特性，它可以帮助网站或应用更好地服务于所有用户，包括残疾人士。

## DOM 的顺序很重要

读屏软件在读屏时默认按照 DOM 的顺序朗读，因此如果 DOM 的顺序与内容的语义顺序不一致，例如使用了 flex-direction: row-reverse; 使得内容的顺序倒序显示，会使得内容难以理解。因此尽量避免使用会影响到 DOM 视觉顺序的样式，如果无法避免，需要手动设置 tabIndex 属性，告知读屏软件正确的内容顺序。

## 图像使用 alt 属性

```js
<img> 标签需要加上 alt 属性，读屏软件会自动读出 alt 的内容，例如 alt 内容为"一只目光汹汹凝视远方的猫"，那么会被读作"一只目光汹汹凝视远方的猫 图像"。如果没有添加 alt 属性，那么仅会读作"图像"，视障用户会完全无法理解其实际含义。
但是，当 <img> 标签出现在 <a> 标签内部，作为一个图像链接时，应在 <a> 上使用 title 属性，<img> 标签可不加 alt 属性。
```
## 视频使用 title 属性
```js
与上面的 <img> 标签相似，<video> 标签需要加上 title 属性，例如 title 内容为"一只正在奔跑的猫"，那么会被读作"一只正在奔跑的猫 视频"。
```
## 禁用状态使用 disabled 属性

使用特定的 class 来增加禁用态样式是常见的手法，但由于 class 语义并不能被读屏软件识别，因此读屏时无法知道当前处于禁用态。可以改为使用 disabled 属性实现禁用态，例如：
```js
<input type="search" name="q" placeholder="请输入用户名" aria-label="搜索用户" disabled/>
/* 禁用态样式 */
input[disabled] {
    opacity: .5;
}
```

而对于没有 disabled 属性的标签，例如 a 标签，可以使用 aria-disabled 属性达到同样的效果。

## a 标签作为按钮需要指明 role="button"

在 H5 中，为了避免一些浏览器默认样式的干扰，以及制作点击效果（具体原因），目前采用 a 标签实现。但从无障碍的角度考虑，a 标签默认会被当做链接处理，读屏时会读作"链接内的文字 链接"。


```js
<a class="test_btn" role="button" href="javascript:;">文字</a>
```

读屏时会读出"文字 按钮"。

按钮可能会用图片实现，增加描述文字

如果 a 标签内本身没有文字，例如以图片、背景色和边框制作的按钮，还需要加上 aria-label="描述文字"，读屏时会读作"描述文字 按钮"的形式
```js
<a class="test_btn" role="button" href="javascript:;" aria-label="更完整的描述"></a>
```


## 多重标签嵌套

另外 a 标签内容如果有嵌套的标签，并不会影响文字被读出，例如：
```js
<a class="test_btn" role="button" href="javascript:;">
    <span class="test_btn_inner">
        <span class="test_btn_inner_text">文字</span>
    </span>
</a>
```


## 读屏时仍会读出"文字 按钮"。

用 background-image 实现的 icon 无法被无障碍识别，需要改成 img 实现，用 alt 写文案
一些数字读出来是英文的，显式指定 lang 为 zh
```js
<html lang="zh">
...
</html>
```


