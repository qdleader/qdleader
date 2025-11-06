# meta 中 name=viewPort 的一些属性

## 1. width

width 属性设置视口的宽度，为一个正整数，或字符串"device-width"

## 2. initial-scale

initial-scale 属性设置页面的初始缩放值，为一个数字，可以带小数

## 3. minimum-scale

minimum-scale 属性设置用户缩放的最小值，为一个数字，可以带小数

## 4. maximum-scale

maximum-scale 属性设置用户缩放的最大值，为一个数字，可以带小数

## 5. user-scalable

user-scalable 属性是布尔值，表示是否允许用户进行缩放，值为"no"或"yes"，默认为"no"，即不允许用户缩放页面

## 6. 示例

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no">

```

默认视图宽度 为 设备宽度
默认缩放比为 1
最大、最小缩放比为 1
不允许用户手动缩放

#### 解决视图上移问题

正如前面所示，视图发生偏移只在 IOS 系统 中的 企微环境 出现，这就表明了 微信 webview 渲染 和 企微 webview 渲染 还是存在差异。

#### viewport-fit — iOS11 新增特性

viewport-fit 是为了适配 iPhoneX 对现有 <meta name="viewport" /> 标签的一个扩展，用于设置网页在可视窗口的布局方式，具有三个属性值：
auto
默认值，跟 contain 表现一致

contain
可视窗口 完全包含 网页内容

cover
网页内容 完全覆盖 可视窗口

既然看起来 企微 webview 中视图高度没法覆盖，那我们就可以通过 <meta name="viewport" /> 设置网页在可视区域的布局方式将视图内容，新增 viweport-fit: cover 使得页面内容完全覆盖整个窗口，即可解决问题：

```js
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
```
