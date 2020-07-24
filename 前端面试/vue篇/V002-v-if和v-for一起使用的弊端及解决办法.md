
##V002-v-if和v-for一起使用的弊端及解决办法

>由于v-for的优先级比v-if高，所以导致每循环一次就会去v-if一次，而v-if是通过创建和销毁dom元素来控制元素的显示与隐藏，所以就会不停的去创建和销毁元素，造成页面卡顿，性能下降。


>解决办法：

1.在v-for的外层或内层包裹一个元素来使用v-if



2.用computed处理


```
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
```
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