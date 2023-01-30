# BFC 的理解和应用★★★

## 一、BFC概念

　     BFC（Block Formatting Context）格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

通俗的理解就是：

首先BFC是一个名词，是一个独立的布局环境，我们可以理解为一个箱子（实际上是看不见摸不着的），箱子里面物品的摆放是不受外界的影响的。转换为BFC的理解则是：BFC中的元素的布局是不受外界的影响（我们往往利用这个特性来消除浮动元素对其非浮动的兄弟元素和其子元素带来的影响。）并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

## 形成BFC的常见条件

> 1. float 不是 none
> 2. position 是absolute 或fixed
> 3. overflow 不是 visible
> 4. display 是flex inline-block table-cell table-caption inline-flex


## BFC 的作用

1. 清除内部浮动
我们在布局时经常会遇到这个问题：对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把把父元素变成一个BFC就行了。常用的办法是给父元素设置overflow:hidden。

2.外边距折叠

两个兄弟盒子之间的垂直距离是由他们的外边距所决定的，但不是他们的两个外边距之和，而是以较大的为准。

```
<div class="container">
       <div class="box"></div>
       <div class="box"></div>
   </div>

   .container {
             overflow: hidden;
             width: 100px;
             height: 100px;
             background-color: red;
         }

         .box1 {
             height: 20px;
             margin: 10px 0;
             background-color: green;
         }

         .box2 {
             height: 20px;
             margin: 20px 0;
             background-color: green;
         }
```

这里我门可以看到，第一个子盒子有上边距（不会发生margin穿透的问题）；两个子盒子的垂直距离为20px而不是30px，因为垂直外边距会折叠，间距以较大的为准。

那么有没有方法让垂直外边距不折叠呢？答案是：有.bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素，同样外面的元素不会影响到BFC内的元素。所以就让box1或box2再处于另一个BFC中就行了。

```

    <div class="container">
        <div class="wrapper">
            <div class="box1"></div>
        </div>
        <div class="box2"></div>
    </div>



    .container {
      overflow: hidden;
      width: 100px;
      height: 100px;
      background-color: red;
  }

  .wrapper {
      overflow: hidden;
  }

  .box1 {
      height: 20px;
      margin: 10px 0;
      background-color: green;
  }

  .box2 {
      height: 20px;
      margin: 20px 0;
      background-color: green;
  }

```
3.创建自适应两栏布局

在很多网站中，我们常看到这样的一种结构，左图片+右文字的两栏结构。


```
<img src="tu" class="img1"/>
<div class="box1">文字文字文字文字文字文字文字文字</div>


.img1 {
       float: left;
       width: 200px;
       height: 300px;
       margin-right: 10px;
       background-color: red;
   }

   .box1 {
       overflow: hidden;/*创建bfc */
       height: 300px;
       background-color: purple;
   }


```


当文字过多时候会出现文字环绕图片情况。，利用bfc可以解决这一弊端。



### What's FC？
一定不是KFC，FC的全称是：Formatting Contexts，是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。


## IFC

IFC IFC(Inline Formatting Contexts)直译为"内联格式化上下文"，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响) IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短。 同个ifc下的多个line box高度会不同。
        IFC中时不可能有块级元素的，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。 那么IFC一般有什么用呢？ 水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。


