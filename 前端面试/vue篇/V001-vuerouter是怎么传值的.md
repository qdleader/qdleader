##V001-vuerouter是怎么传值的

1.
>在路由处配置

```
path:'/detail/:id'
```

```
调用：
this.$router.push({
	path:'/home/${id}'
})
```

在组件内通过this.$route.params.id即可获取。



2.在router-link标签中传递参数。
```
<router-link :to = {
	params:{
		id:1
	}
}/>
```

也可通过：
this.$route.params.id获取

>这里通过router-link传参方式是隐形传参

3.另一种params的是通过params传参，通过name配置路由。

```
//路由处：

{
	path：'/home',
	name:'Home',
	component:Home
}
```

```
调用：

this.$router.push({
	name:'Home',
	params:{
		id:id
	}
})
```

获取：
this.$route.params.id



4.通过query来传递参数，参数会在url后边的?id=?中显示



```
//路由处：

{
	path：'/home',
	name:'Home',
	component:Home
}
```


```
调用：

this.$router.push({
	path:'/home',
	query:{
		id:id
	}
})
```

获取：
this.$route.query.id