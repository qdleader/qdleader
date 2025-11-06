# 固定列宽，改变列的数量即float效果

```css
/* grid-template-columns: repeat(auto-fit, 200px) 表示固定列宽为 200px，数量是自适应的，只要容纳得下，就会往上排列, 跟width:200px; float: left;效果一样 */
.wrapper {
    margin:50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-gap: 10px 20px;
    grid-auto-rows: 50px;
}
```
