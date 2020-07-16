####中watch的详细用法：

##watch:常规用法1
```
<input type="text" v-model="uerName"/>

data(){
	return {
		userName:'qdleader'
	}
},
watch:{
	userName(newName, oldName) {
		//...
	}
}
```

也可以写一个监听处理函数，
当每次监听到 cityName 值发生改变时，执行函数。也可以在所监听的数据后面直接加字符串形式的方法名：

```
watch: {
    userName: 'nameChange'
    }
 } 
```

>这样使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。

因此当我门在子组件props首次获取父组件传过来的默认值时候，需要立即执行一次函数，这就引出第二种immediate

##2.immediate和handler
```
data(){
	return {
		userName:'qdleader'
	}
},
watch: {
	userName:{
		handler(newName, oldName) {
			//..
		},
		immediate:true,//immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler。
	}
}
```


## 3.deep
还有很多时候，我们是要监听对象某一属性变化的，这时候就可以用deep

```
data(){
	return {
		userInfo:{
			id:1,
			name:'qdleader'
		}
	}
},

watch:{
	userInfo: {
		handler (newName, oldName) {
			//...
		},
		deep:true,
		immediate:true
	}
}
```

这里有个不太好的地方。虽然设置了deep：true，我们可以坚挺到userInfo.name的变化。但是此时会给userinfo的所有属性都加上这个监听器，当对象属性较多时，每个属性值的变化都会执行handler。如果只需要监听对象中的一个属性值，则可以做以下优化：使用字符串的形式监听对象属性：

```
watch:{
	'userInfo.name': {
		handler (newName, oldName) {
			//...
		},
		deep:true,
		immediate:true
	}
}
```

同学问了，监听对象属性还有没有别的方法呢？

别着急呀！

监听对象属性computed也可以帮帮忙的。

```
computed: {
  getName: function() {
	return this.userInfo.name
 }
},
watch:{
	getName:{
		handler:function(){
			//do something
		}
	}
}
```




//延伸。。
监听路由变化：

```
watch:{
      '$route.path':function(newVal,oldVal){
        //console.log(newVal+"---"+oldVal);
        if(newVal === '/login'){
          console.log('欢迎进入登录页面');
        } else if(newVal === '/register'){
          console.log('欢迎进入注册页面');
        }
      }
 }
或者：
watch:{
  $route(to,from){
    console.log(to.path);
  }
},
```