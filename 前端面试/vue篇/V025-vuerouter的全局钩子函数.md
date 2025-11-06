# V025-vuerouter 的全局钩子函数

## 1. vue-router 全局钩子函数

beforeEach 和 afterEach 是 vue-router 实例对象的属性
特别提醒：每次路由跳转，都会执行 beforeEach 和 afterEach

### beforeEach

```js
var router = new Router({
  routes: [
    {
      path: "/",
      name: "Chat",
      component: Chat,
    },
  ],
});
```

router.beforeEach 有三个参数：to/from/next

```js
router.beforeEach(function (to, from, next) {
  console.log(to); //到达的路由
  console.log(next); //管道中，可以跳转到其他路由
  console.log(from); //离开的路由
  next();
});
```

### afterEach

````js
router.afterEach有两个参数：to/from

router.afterEach(function (to,from) {
  console.log(to);//到达的路由
  console.log(from);//离开的路由
})

AI助手
2. 单个路由钩子函数beforeEnter
beforeEnter有三个参数：to/from/next

```js

{
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        console.log("我即将进入login1111111111111");
        next();
      }
    },
````

### 3.组件内钩子函数

beforeRouteEnter+beforeRouteUpdate+beforeRouteLeave
都有三个参数：to/from/next

### beforeRouteEnter:进入这个组建路由之前

### beforeRouteLeave：离开这个组建路由

特别注意：

```

beforeRouteUpdate：再本路由的下级路由切换才会触发 beforeRouteUpdate
    methods:{
      success:function(){
        this.$router.push({ path: '/chat' });
      },
    },
    computed:{

    },
    beforeRouteEnter:function(to,from,next){
      console.log("进入这个组建1111111");
      next()
    },
    beforeRouteUpdate:function(to,from,next){
      console.log("在二级导航里面切换了22222");
      next()
    },
    beforeRouteLeave:function(to,from,next){
      console.log("离开这个组建更新3333333");
      next()
    },
```js
```
