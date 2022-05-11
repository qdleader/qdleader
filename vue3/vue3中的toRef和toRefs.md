## 1. ref的使用

> ref 接受一个原始值，返回一个具有响应式的对象，对象有一个value属性，其值就是所传递的原始值。

> ref是做的一个拷贝关系，修改对象msg的值，不会影响对象obj，视图会发生变化。


```
    import { ref } from "vue";
    let obj = { name: "你好", age: 16 };
    let msg = ref(obj.name);
    console.log(msg.value); // 你好
    let arr = ref([]) // ref 可以是任何类型 也可以是对象
    function change1() {
      msg.value = "世界"; 
      //修改msg1数据的时候必须要加 .value 渲染数据的时候就不用加了
      console.log(obj, msg.value);
      // {name: "你好", age: 16} '世界' 
      // 数据此时没改变 但是页面的数据改变了
      
    }
    change1();
 
     return {
        obj,
        msg,
     };

   ```  

 ## 如果给dom上加ref 就是当前的dom元素
```
<template>
  <div class="home-new">  
      <div ref="target">
       
      </div>
  </div>
</template>
import {ref} from 'vue'
export default {
  name: "HomeNew",
  setup(p, { emit }) {
    const target = ref(null);
    // 懒加载
    console.log(target);
    return {
      target,
    };
  },
 
};
 
```

 

## 2. toRef的使用

> toRef用来给抽离响应式对象中的某一个属性，并把该属性包裹成ref对象，使其和原对象产生链接

> toRef是做的一种引用关系，修改msg2的值，会影响对象msg，但视图不会发生变化
```
    setup(){
    	let msg = { name: 'zs', age: 16 }
        let msg2 = toRef(msg, 'name')
        console.log(msg2.value)	// zs
        function change2() {
            msg2.value = 'ww'
            console.log(msg, msg2.value) // {name: "ww", age: 16} ww
            //此时 msg.ww 数据变了 但是视图上的是不会变的
        }
        change2()
        return { msg2,change2 }
    }
```

## 3. toRefs的使用
>  toRefs用来把响应式对象转换成普通对象，把对象中的每一个属性，包裹成ref对象

> toRefs就是toRef的升级版，只是toRefs是把响应式对象进行转换，其余的特性和toRef无二

```
setup(){
    let msg = { name: 'zs', age: 16 }
    let msg3 = toRefs(msg)
    console.log(msg) // { name:ref, age:ref }  ref代指ref对象
    function change3() {
      msg3.name.value = 'zl'
      msg3.age.value = 20
      console.log(msg, msg3) // {name: "zl", age: 20} { name:ref, age:ref }
    }
    change3()
    return { msg3, change3 }
}
```
 请求过来的数据封装了一下

```
<script>
import { reactive, toRefs } from "vue";
import { getBanner } from "@/api";
export default {
  setup() {
    return {
      ...toRefs(getBan()),
    };
  },
};
function getBan() {
  let bannerList = reactive({
    list: [],// 模板中直接 写入 list 就可以了
  });
  getBanner().then((res) => {
    bannerList.list = res.data;
    console.log(bannerList.list);
  });
  return bannerList;
}
</script>
```

### 这样写模板中直接写入 {{ list }}  就可以了 ， 不用 {{ obj.list }}，修改数据的时候还是 obj.list = 'aaa' 

```
  import { reactive, toRefs } from "vue";
  setup() {
    let obj = reactive({
      list: [],
      newS: [],
      moods: [],
    });
 
    return { ...toRefs(obj) };
  },
```

## 4.总结
> ref、toRef、toRefs 都可以将某个对象中的属性变成响应式数据

> ref的本质是拷贝，修改响应式数据，不会影响到原始数据，视图会更新

> toRef、toRefs的本质是引用，修改响应式数据，会影响到原始数据，视图不会更新

> toRef 一次仅能设置一个数据，接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性

> toRefs接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用toRef执行
