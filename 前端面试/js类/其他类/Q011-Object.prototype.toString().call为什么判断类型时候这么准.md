# Q011-Object.prototype.toString().call为什么判断类型时候这么准

## 为什么Object.prototype.toString.call()可以准确判断数据类型
我们需要了解，不论是Array,还是Date，所有数据类型。都是从对象衍生而来的。本质上，Array和Date还有Function啥的他们就是对象。
虽然他们都被称为对象，对象也是有很多类型的。比如Date,他就是时间对象‘ [object Date] ’,
Array,他就是数组对象‘[object Array]’等等。简而言之，**js中所有的数据类型，都只是对象的一种类型**。所以，js中有一句话叫，万物皆对象。
而Object.prototype.toString() 这个函数作用就是，返回当前调用者的对象类型。

**言简意赅的说:所有数据类型都是对象的一种类型，而Object.prototype.toString可以返回当前调用者的对象类型。**




### Object.prototype.toString.call()为什么要加call();
因为Object.prototype.toString()返回的是调用者的类型。不论你toString()本身的入参写的是什么，在Object.prototype.toString()中，他的调用者永远都是Object.prototype;所以，在不加call()情况下，我们的出来的结果永远都是 '[object Object]'

**call(),是为了改变Object.prototype.toString这个函数都指向。让Object.prototype.toString这个方法指向我们所传入的数据。**



#### 为什么一定要用Object.prototype.toString.call()

为什么一定要用Object.prototype.toString.call()这个方法，那么长，写起来很麻烦，我直接在当前数据本身去调用toString()，然后让他顺着原型链去找，最后找到Object.prototype.toString这个方法不行吗？连call都省下了。
还真不行。
因为，每个数据类，他们都重写了toString()方法。所以，如果我们拿数据本身去toString()，是得不到对象类型的。

我们在数组的原型上又发现了一个toString方法，证明toString方法被重写了。所以，直接使用数据本身去调用toString。是无法调用到Object.prototype.toString的。而且，在数组上被重写之后的toString方法，作用也不再是返回对象类型了。而是打印数组内容。
所以，我们只能使用Object.prototyoe.toString.call();的形式去获取对象属性



### 总结

> js中所有的数据类型，本质上都是对象，而这些数据类型不过是对象的一种类型而已。
> Object.prototype.toString这个方法是用于返回当前调用者的对象类型的
> call是为了让Object.prototype.toString方法指向我们指定的数据。否则返回永远都是[object Object]

