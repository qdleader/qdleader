# V010-vue中的keep-alive介绍下吧

## 使用场景：

> 如果需要频繁切换路由，这个时候就可以考虑用keep-alive了，来达到避免数据的重复请求的目的

## 作用：

> keep-alive用来缓存组件,避免多次加载相应的组件,减少性能消耗。
> 简单一点来说就是从页面A链接到其他页面后回退到页面A不用在重新执行页面A的created生命周期的代码，只会从缓存中加载之前已经缓存的页面A

## 几个参数：

> Props
> include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
> exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
> max - 数字。最多可以缓存多少组件实例。

一、用法介绍
keep-alive是一个内置组件和类似
keep-alive组件提供了include与exclude两个属性来允许组件有条件地进行缓存，二者都可以用逗号分隔字符串、正则表达式或一个数组来表示
keep-alive提供了两个生命钩子，分别是activated与deactivated。因为keep-alive会将组件保存在内存中，并不会销毁以及重新创建，所以不会重新调用组件的created等方法，需要用activated与deactivated这两个生命钩子来得知当前组件是否处于活动状态。
第一次为调取缓存的加载顺序，开启了keep-alive后，当再次进入（前进或者后退）时，只触发activated，退出时触发deactivated。 beforeCreate->created->beforeMount-> mounted-> activated

## 如何使用呢？

使用router. meta属性
```js
//router.js文件路由设置
{
    path: '/keep_alive_test',
    component: () => import('@/views/keepAliveTest.vue'),
    meta: {
        title: 'keepAlive测试',
        keepAlive: true//使用（通过路由meta的keepAlive属性决定那个页面使用缓存）
    }
},

```

```js
//App.vue文件
	<keep-alive :include="'componentA'">
		<router-view v-if="$route.meta.keepAlive"/>
	</keep-alive>
	<router-view v-if="!$route.meta.keepAlive"/>
```

使用include，exclude属性（不需要设置路由，需要设置组件名字，这里组件名字非路由组件名而是定义组件的名称）

```js
//App.vue文件
<keep-alive :include="pages" exclude="componentB">
	<router-view/>
</keep-alive>
data () {
	return {
		pages: ['componentA', 'componentC']
	}
}

```

//这里的component组件内容就会被缓存,name为componentA\componentC的组件将会被缓存。name为componentB的组件将不会被缓存。
//!!!!include和exclude的组件名字必须是组件定义的name

## 注意事项

> keep-alive组件使用针对的是页面组件！！！！
> 使用keep-alive 的组件不会再次触发created钩子函数
> 使用keep-alive，调用 $destory() 需要谨慎，否则页面不再被缓存
> include 和exclude的组件名字必须是组件定义的name，而不是路由里面定义的名字

# 总结：
```js

用了这个组件后就没有组件就没有created生命周期了。

vue可以使用keep-alive包裹一个动态路由组件，包裹之后，动态组件的状态会被缓存。如果使用动态组件渲染的某个组件使用了created生命周期请求数据，那么下次进入该组件不会再次请求数据。

因为keep-alive之后，所有的动态组件都会被缓存，被缓存之后的组件再次进入就不会执行created，如果想要每次进入数据都有更新或是更新操作，就应该使用activated生命周期来代替created。

router的生命周期不受keep-alive的影响。

```

## 原理总结

> keep-alive 是一个Vue内置组件，主要用于缓存组件实例，避免重复创建和销毁，提高性能。(*不会渲染出 DOM 元素，也不会出现在父组件链中)。它的底层实现主要依靠以下几个关键部分：

> 缓存机制：keep-alive 内部使用一个对象 cache 来存储缓存的组件实例，键是组件的唯一标识key，值就是对应组件的虚拟节点vNode。同时，使用一个数组keys 来维护这些实例缓存顺序

> 而每个缓存顺序通过 LRU 算法进行维护，当缓存的组件数量超过max 属性指定的上限时，会优先移除最久未使用的组件实例。
> 另外，keep-alive 还会在组件声明周期中添加activated 和 deactivated 钩子，当组件被激活时触发activated，被缓存时触发deactivated，并且不会再触发mounted 和 unmounted 钩子。

> 最后，核心代码逻辑是在keep-alive 的render 函数里面，会获取默认插槽的第一个组件节点，再根据include 和exclude 属性判断是否需要缓存该组件。若需要缓存，就检查cache 中是否已有该组件实例，有则直接从缓存获取，没有则添加到缓存里。

> keep-alive 内置组件，可以使组件在切换时保持状态，避免重新渲染。

> 可以通过 include 和 exclude 属性来指定需要缓存的组件。

> 可以缓存 、列表渲染、组件缓存等。

> 需要缓存的组件push 到include 数组中，不需要缓存的组件push 到exclude 数组中。
