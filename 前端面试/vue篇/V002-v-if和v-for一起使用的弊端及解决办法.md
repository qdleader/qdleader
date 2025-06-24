# V002-v-if 和 v-for 一起使用的弊端及解决办法

> 由于 v-for 的优先级比 v-if 高，所以导致每循环一次就会去 v-if 一次，而 v-if 是通过创建和销毁 dom 元素来控制元素的显示与隐藏，所以就会不停的去创建和销毁元素，造成页面卡顿，性能下降。

> 解决办法：

1.在 v-for 的外层或内层包裹一个元素来使用 v-if

2.用 computed 处理

```js
  <ul>
		<li
		  v-for="item in qdleaderArr"
		  v-if="item.isActive"
		  :key="item.id"
		>
		  {{ item.name }}
		</li>
  </ul>
```

处理为：

```js
computed: {
	qdleaderArrActive: function () {
		return this.qdleaderArr.filter(function (item) {
		  return item.isActive
		})
	}
}
<ul>
	<li
	  v-for="item in qdleaderArrActive"
	  :key="item.id"
	>
		{{ item.name }}
	</li>
</ul>
```
