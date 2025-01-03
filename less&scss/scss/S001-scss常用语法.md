# scss 常用语法

## 1. 变量

```scss
$color: #333;
```

## 2. 嵌套

```scss
.container {
  .header {
    background-color: $color;
  }
}
```

## 3. 导入

SASS 能够将代码分割为多个片段，并以 underscore 风格的下划线作为其命名前缀（\_partial.scss），SASS 会通过这些下划线来辨别哪些文件是 SASS 片段，并且不让片段内容直接生成为 CSS 文件，从而只是在使用@import 指令的位置被导入。CSS 原生的@import 会通过额外的 HTTP 请求获取引入的样式片段，而 SASS 的@import 则会直接将这些引入的片段合并至当前 CSS 文件，并且不会产生新的 HTTP 请求。下面例子中的代码，将会在 base.scss 文件当中引入\_reset.scss 片断。

```js
// _reset.scss
html, body, ul, ol {
  margin:  0;
  padding: 0;
}

// base.scss
@import 'reset';
body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
// SASS中引入片断时，可以缺省使用文件扩展名，因此上面代码中直接通过@import 'reset'引入，编译后生成的代码如下：


html, body, ul, ol {
  margin: 0;
  padding: 0; }

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef; }

```

## 4. 混合

```scss
@mixin button {
  background-color: $color;
}

.button {
  @include button;
}

@mixin border-radius($radius) {
  border-radius: $radius;
  -ms-border-radius: $radius;
  -moz-border-radius: $radius;
  -webkit-border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```

## 5. 继承

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}
```

## 6. 运算

```scss
$base-line-height: 1.5 !default;
$base-font-color: #333 !default;
$base-font-size: 10px !default;

$base-line-height: $base-font-size * $base-line-height;
```

## 7. 条件

```scss
$type: monster;
.#{$type} {
  background-color: #333;
}
```

## 8. 循环

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}
```

## 9. 函数

```scss
@function calculate-rem($size) {
  $rem-size: $size / 16px;
  @return #{$rem-size}rem;
}
```
