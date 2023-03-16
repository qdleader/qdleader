## 图片加载异常


```JS
img {
    width: 128px; height: 96px;
    object-fit: cover;
}
img[src$="break.svg"] {
    object-fit: contain;
    outline: 1px solid #ddd;
    outline-offset: -1px;
}
HTML代码：
<img src="qdleader.jpg" onerror="this.src='break.svg';">

```


## 方式2

```js

<img src="qdleader.png" alt="你好呀" onerror="this.classList.add('error');">

img.error {
  display: inline-block;
  transform: scale(1);
}
img.error::before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: #f5f5f5 url(break.svg) no-repeat center / 50% 50%;
  color: transparent;
}
img.error::after {
  content: attr(alt);
  position: absolute;
  left: 0; bottom: 0;
  width: 100%;
  line-height: 2;
  background-color: rgba(0,0,0,.5);
  color: white;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

```




