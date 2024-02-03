# auto-fit 和minmax去掉右侧空白


grid-template-columns: repeat(auto-fit minmax(200px,1fr));

表示列宽至少200px 如果还有剩余空间 则分配给该列，如果剩余空间又有200px了，就多一列

```css
.wrapper {
    margin:50px;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    grid-gap:10px 20px;
    grid-auto-rows:50px;
}

```