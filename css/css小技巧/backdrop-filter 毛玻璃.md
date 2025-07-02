# backdrop-filter 毛玻璃

```js

.bg {
    background: url(image.png);

    & > div {
        width: 300px;
        height: 200px;
        background: rgba(255, 255, 255, .7);
    }
    .g-filter {
        filter: blur(6px);
    }
    .g-backdrop-filter {
        backdrop-filter: blur(6px);
    }
}

<div class="bg">
    <div>Normal</div>
    <div class="g-filter">filter</div>
    <div class="g-backdrop-filter">backdrop-filter</div>
</div>
```

filter 和 backdrop-filter 使用上最明显的差异在于：

filter 作用于当前元素，并且它的后代元素也会继承这个属性
backdrop-filter 作用于元素背后的所有元素
仔细区分理解，一个是当前元素和它的后代元素，一个是元素背后的所有元素。
