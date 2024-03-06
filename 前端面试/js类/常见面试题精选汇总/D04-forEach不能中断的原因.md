# JS forEach循环不能break或return的原因

forEach的原理
```js
Array.prototype.myEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this);
};

```

从上面的实现原理可以看出，forEach在使用时并不是字面那种写法在生效，内部其实是回调函数在进行真正的操作，进行数组遍历的for循环是定义在forEach里面的而我们添加的break或return只是写在了callback里面，和for循环并不在同一个作用域所以是不生效的。

forEach() 跳出循环的方法

使用 for 循环代替 forEach（这个很简单这里就不写例子了）
使用try···catch捕获异常实现

```js
try{
    var arr=[1,2,3,4,5];
    arr.forEach(function(val,i){
        if(val == 3){
            throw new Error("ending");  //抛出错误
        }else{
            console.log(val);
        }
    })
}catch(e){
    //其实 catch 中的代码全部注释掉不要都可以
    if(e.message == "ending"){
        console.log("结束了") ;
    }
}

```
