# css小技巧

## 1. 更改任何输入字段的光标颜色
```css
input {
    caret-color: red;
}
```

## 2.用一行CSS中添加平滑滚动效果

```css
html {
    scroll-behavior: smooth;
}

```

## 3. 更改输入字段的默认颜色
```css
h1 {
    background: url('logo.png');
    background-clip:text;
    -webkit-background-clip:text;
    color:transparent;
}
```

## 4 使任何元素可调整大小

```css
.resize {
    resize: both;
}
```

## 5. 添加任何图像作为光标
```css
.my-cursor {
    cursor: url('image.png'), auto;
}
```

## 设置图片的混合模式

```css
.box {
    background-image: url('image.png');
    background-blend-mode: lighten;
    background-color: purple;
}

```


```css
.pic1 {
    background-image: url('image.png'), linger-gradient(#f09, #09f, #f0f);
    background-blend-mode: lighten;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0,0 180px;
}

.pic1:hover {
    background-position: 0 0,0 0;
}

```



