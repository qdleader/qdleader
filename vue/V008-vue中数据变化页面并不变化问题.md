由于我们vue2中的数据双向绑定时候经常遇到这种，数据变化了，视图没有变化的情况，这是为什么呢？怎么解决呢？

##### 探索1
```
data() {
  obj1:{}
}
```

```



btn1() {
     this.obj1.name = '123'    
 },          
 btn2() {
     this.obj1.name = '变了呀'    
 },         
```
```
<div @click="btn1">按钮1</div>

<div @click="btn2">按钮2</div>

<div>{{obj1}}</div>
```

当点击按钮1和按钮2时候，页面上的obj1是一点没有变化的，也就是经典的那种数据变了，页面没有变。

但是，当我们给obj1一个初始属性name时候，在改变name，就会发现，页面还是同步的。
##### 探索2
```
data() {
  obj1:{
    name:'我是初始值'
  }
}
```


```
btn1() {
     this.obj1.name = '123'    
 },          
 btn2() {
     this.obj1.name = '变了呀'    
 },         
```
```
<div @click="btn1">按钮1</div>

<div @click="btn2">按钮2</div>

<div>{{obj1}}</div>
```
我们继续探索

我们再加深一层
###### 探索3
```
data() {
  obj1:{
    name:{
      age:12
    }
  }
}
```


```
btn1() {
     this.obj1.name.age = '123'    
 },          
 btn2() {
     this.obj1.name.age = '变了呀'    
 },         
```
```
<div @click="btn1">按钮1</div>

<div @click="btn2">按钮2</div>

<div>{{obj1}}</div>
```
发现这样也是变了的

所以我们可以得出结论

## 只有在data里初始化的数据才是响应的，Vue不能检测到对象属性的添加或删除，没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的


明白怎么造成的了，那咋解决呢？





比如这个改变了这个newArr的数据

```
newArr:[]
```

我们直接赋值

```
let arr = [{name:'前端架构师'}]

this.newArr[0].newList = arr
```
会发现数据变了，页面没有变




有几种方法来解决这个问题


#方法1. 用 Object.assign
```
this.newArr[0].newList = arr
this.newArr = Object.assign({},this.newArr)

```
用Object.assign 追加属性
```
this.newArr = Object.assign({}, this.newArr, {
  age: 12,
  grade: '100'
})
```

## 这个Object.assign并不是深拷贝，只复制了一层。。

eg1:
```
data() {
  obj1:{}
}
```
```       
btn2() {
    this.obj1.page = 1
    this.obj1 = Object.assign({},this.obj1)
    console.log(this.obj1)
},
```
这样就同步了

但我们在往深了一层呢？

这里就有一个面试题了
```
let obj = {
  a:1,
  b:{
    x:1,
    y:1,
  }
}


let obj1 = Object.assign({}, obj)
obj.a= 2

console.log(obj.a)  // 2
console.log(obj1.a)  // 1
说明第一层拷贝没问题

obj.b.x = 2
console.log(obj.b.x)  //2
console.log(obj1.b.x)  //2

说明深层没有拷贝

```


#方法2. 用 this.$set

```
let arr = [{name:'前端架构师'}]
this.$set(this.newArr[index],'newList',arr)


或
Vue.set(this.newArr[index],'newList',arr)
```


有同学说，姨？我怎么用this.$set改了也不管用呢

那是因为
```
data() {
  obj1:{

  }
}


btn2() {
  this.obj1.name = '小明'
  this.$set(this.obj1,name,'小明')
}
```
你用this.$set之前你是不是还对相同的属性做了赋值操作，把this.obj1.name = '小明'这个去掉就生效了。


## 3.生成新数组的方法

数组数据变动，使用某些方法操作数组，变动数据时，有些方法无法被vue监测

> push()，pop()，shift()，unshift()，splice()，sort()，reverse()可被vue检测到
> filter(), concat(), slice()。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组。

```
vue不能检测以下变动的数组：
1、当你利用索引直接设置一个项时，vm.items[indexOfItem] = newValue
2、当你修改数组的长度时，例如： vm.items.length = newLength
```


比如你在监听不到变化的数组后面加个concat
```
arr 是那个变了数组

arr.concat([]);
```


## 4.this.$forceUpdate()

> vue多层循环，动态改变数据后渲染的很慢或者不渲染
可在动态改变数据的方法，第一行加上

```
this.$forceUpdate();

```


## 5. 异步更新队列 this.$nextTick()
数据第一次获取到了，也渲染了，但是第二次之后数据只有在再一次渲染页面的时候更新，并不能实时更新。

Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。

```
data() {
  obj:'未更新'
}
```

```
btn2() {
  this.obj = '已更新'
  console.log(this.$el.textContent)  //未更新
  this.$nextTick(() => {
      console.log(this.$el.textContent)  //已更新
  })
}
```

因为 $nextTick()返回一个 Promise 对象，所以上面写法可以优化一下

```
async btn2() {
  this.obj = '已更新'
  console.log(this.$el.textContent)  //未更新

  await this.$nextTick()
  console.log(this.$el.textContent)  //已更新
}
```
