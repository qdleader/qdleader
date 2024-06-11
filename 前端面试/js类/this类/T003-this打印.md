```
var name = 222

var a = {
  name: 111,
  say: function() {
    console.log(this.name)
  }
}

var fun  = a.say
fun()
a.say()

var b = {
  name: 333,
  say: function (fun) {
    fun()
  }
}

b.say(a.say)

b.say = a.say
b.say()
```

答案

```
222
111


222
333

```



## 2.

```js
var fullname = 'a';  
  
var obj = {  
    fullname: 'b',  
    prop: {  
        fullname: 'c',  
        getFullname: () => {  
            return this.fullname;  
        }  
    }  
};  
  
console.log(obj.prop.getFullname());  
  
var test = obj.prop.getFullname;  
  
console.log(test());

```

## 答案
```js
a

a

```


## 解析

obj.prop.getFullname 是一个箭头函数，箭头函数中的 this 指向定义时所在的上下文，而不是调用时所在的上下文。

obj.prop.getFullname 是在全局上下文中定义的，因此 this 指向全局对象 window。所以obj.prop.getFullname 返回的是 'a'。

test 是一个变量，其值为 obj.prop.getFullname 函数的引用。由于 test 是在全局上下文中定义的，因此 this 也指向全局对象 window。当调用 test() 时，实际上是在全局上下文中调用 obj.prop.getFullname 函数，因此返回的也是 'a'。

