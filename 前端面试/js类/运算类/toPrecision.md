把数字格式化为指定的长度:
```js
var num = new Number(13.3714);
var n=num.toPrecision(2);
n 输出结果:

13

```
定义和用法
toPrecision() 方法返回指定长度的数值字符串。

toPrecision() 方法以指定的精度返回该数值对象的字符串表示，四舍五入到 precision 参数指定的显示数字位数。


使用不同进制把数字格式化为指定的长度:

```js
var num = new Number(13.3714);
var a = num.toPrecision();
var b = num.toPrecision(2);
var c = num.toPrecision(3);
var d = num.toPrecision(10);
a、b、c 和 d 输出结果:

13.3714
13
13.4
13.37140000
```