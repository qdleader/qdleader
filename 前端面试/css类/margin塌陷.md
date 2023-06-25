
## 什么是margin 塌陷
>设置子元素的margin，父元素也具有与子元素相同的margin值，称之为塌陷现象。这种现象我们称之为margin的塌陷现象。具体说就是子类标签设置margin-top:50px;时，不是子类标签距离父类标签上边框50像素。而是子类标签和父类标签距离上级标签50个像素。

>2.竖直方向的margin会出现叠加现象（水平方向不会塌陷），两个margin紧挨着，中间没有border或者padding
margin直接接触，就产生了合并，表现为较大的margin会覆盖掉较小的margin，竖直方向的两个盒子中间只有一个较大的margin，这也是margin塌陷现象


## margin 塌陷解决办法

1.父集设置 常用的办法是给父元素设置overflow：hidden

2.父集设置border（给父元素添加透明边框，至少添加border-top:1px solid transparent）

3.给父元素添加padding-top:npx

4.给父元素添加position: absolute;

5.给父元素添加position: fixed;

6.给父元素添加display: inline-block;

7.给父元素添加display: flow-root;
