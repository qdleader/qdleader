# vue实现响应式原理即vue如何监听data的每个属性的变化★★★★

## 重要指数：★★★★

记住两点
> 1、使用 Object.defineProprety实现响应式原理
> 2、 data属性代理到vm(即是Vue实例)上


## Object.defineProperty 是如何使用的？

>Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
>因为 Object.defineProperty() 是ES6新增的一个方法，所有我们使用vue不支持IE低版本浏览器

```
 /*----------  defineProperty 基本使用  ------------*/
        let obj = {}
        let name = 'qdleader'

        Object.defineProperty(obj, 'name', {
            get: function () {
                console.log('get')
                return name
            },
            set: function (newValue) {
                console.log('set')
                name = newValue
            }

        })
       console.log(obj.name)
       obj.name = 'yyyang'
        // 输出
        // get
        // qdleader
        // set
		
```
> defineProperty这个原理就是拦截对象，给对象的属性增加 set 和 get方法，因为核心是 defineProperty所以还需要对数组的方法进行拦截

```
对对象进行拦截
function observer(target){
  // 如果不是对象数据类型直接返回即可
  if(typeof target !== 'object'){
    return target
  }
  // 重新定义key
  for(let key in target){
    defineReactive(target,key,target[key])
  }
}
function update(){
  console.log('update view')
}
function defineReactive(obj,key,value){
  observer(value); // 有可能对象类型是多层，递归劫持
  Object.defineProperty(obj,key,{
    get(){
      // 在get 方法中收集依赖
      return value
    },
    set(newVal){
      if(newVal !== value){
        observer(value);
        update(); // 在set方法中触发更新
      }
    }
  })
}
const obj = {name:'qdleader'}
observer(obj);
obj.name = 'new-name';
输出：
update view

```


```

数组方法劫持
const oldProtoMehtods = Array.prototype
const proto = Object.create(oldProtoMehtods)
function update(){
  console.log('update view')
}
function defineReactive(obj,key,value){
  observer(value) // 有可能对象类型是多层，递归劫持
  Object.defineProperty(obj,key,{
    get(){
      // 在get 方法中收集依赖
      return value
    },
    set(newVal){
      if(newVal !== value){
        observer(value)
        update() // 在set方法中触发更新
      }
    }
  })
}
['push','pop','shift','unshift'].forEach(method=>{
  Object.defineProperty(proto, method,{
    get(){
      update()
      return oldProtoMehtods[method]
    }
  })
})
function observer(target){
  if(typeof target !== 'object'){
    return target
  }
  // 如果不是对象数据类型直接返回即可
  if(Array.isArray(target)){
    Object.setPrototypeOf(target, proto)
    // 给数组中的每一项进行observr
    for(let i = 0 ; i < target.length; i++){
      observer(target[i])
    }
    return
  }
  // 重新定义key
  for(let key in target){
    defineReactive(target, key, target[key])
  }
}
let obj = {hobby:[{name:'zhuanzhuan'}]}
observer(obj)
// 使用['push','pop','shift','unshift'] 方法，更改数组会触发视图更新
obj.hobby.push('转转')
// 更改数组中的对象也会触发视图更新
obj.hobby[0].name = 'new-name'
console.log(obj.hobby)
输出：
update view
update view
[ { name: [Getter/Setter] }, 'qdleader' ]
```


## Object.defineProperty缺点：

> 无法监听数组的变化

> 需要深度遍历，浪费内存

# 模拟实现Vue响应式

```
// 模拟实现Vue响应式
       let vm = {} // 我们把这个看做是Vue的一个实例
        // data看作是Vue实例的data属性
        let data = {
            price:100,
            name:'qdleader'
        }


        let key, value

        for (const key in data) {
            if (data.hasOwnProperty(key)) { 
               (function(key){
                Object.defineProperty(vm,key,{  // 将data属性代理到vm上
                    get:function(){
                        console.log('get',data[key])  // 监听
                        return data[key]
                    },
                    set:function(newValue){
                        console.log('set',newValue) // 监听
                        data[key] = newValue
                    }
                })
               })(key)
                
            }
        }


        console.log(vm.name)
```