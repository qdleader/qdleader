# line-height


## 说一下下面三种情况，p的line-height分别是多少？

1.
```
<div class="box">
  <p></p>
</div>

<style>
.box {
  font-size:30px;
  line-height:40px;
}
p{
  font-size:12px;
}
</style>
```

答案：
```
40px
```
解析：
> 直接继承 父元素的lineheight，所以为 40px


2.
```
<div class="box">
  <p></p>
</div>

<style>
.box {
  font-size:30px;
  line-height:2;
}
p{
  font-size:12px;
}
</style>
```

答案：
```
24px
```
解析：
> 父元素的lineheight是比例，这种是自身的font-size乘比例就是自身line-height
12*2 = 24


3.
```
<div class="box">
  <p></p>
</div>

<style>
.box {
  font-size:30px;
  line-height:200%;
}
p{
  font-size:20px;
}
</style>
```

答案：
```
60px

```

解析：
> 父元素的lineheight是百分比的最特殊，这种是父元素的font-size乘父元素line-height
30*200% = 60，子元素p直接继承父元素line-height 60px
