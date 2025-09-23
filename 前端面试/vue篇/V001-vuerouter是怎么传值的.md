# V001-vuerouter 是怎么传值的

## 1.在路由处配置

```js
path: "/detail/:id";
```

```js
// 调用：
this.$router.push({
  path: "/home/${id}",
});
```

在组件内通过 this.$route.params.id 即可获取。

## 2.在 router-link 标签中传递参数。

```js
<router-link :to = {
	params:{
		id:1
	}
}/>
```

也可通过：
this.$route.params.id 获取

> 这里通过 router-link 传参方式是隐形传参

## 3.另一种 params 的是通过 params 传参，通过 name 配置路由。

```js
//路由处：

{
	path：'/home',
	name:'Home',
	component:Home
}
```

```js
// 调用：

this.$router.push({
  name: "Home",
  params: {
    id: id,
  },
});
```

获取：
this.$route.params.id

## 4.通过 query 来传递参数，参数会在 url 后边的?id=?中显示

```js
//路由处：

{
	path：'/home',
	name:'Home',
	component:Home
}
```

```js
// 调用：

this.$router.push({
  path: "/home",
  query: {
    id: id,
  },
});
```

获取：
this.$route.query.id
