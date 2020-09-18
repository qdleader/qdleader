# V006-vue中的清除计时器问题★
1.有同学说我页面切来切去为什么就是没有触发destroyed呢，那我的定时器岂不是都清不了了，emm。。。。。。
```
destroyed() {
	if(timer) {
		clearInterval(timer);
	}
},
```
不触发是正常的呀。

因为beforeDestory和destoryed是在节点销毁时候才会触发的，如果你切换路由时候没有用v-if控制显隐不触发也是正常的，一般那就不会触发。等你离开页面时候，才会触发。那他要不离开切了下路由还一直请求。。。
不！。，这不是我想要的。


那我写了个计时器还请不了了？


来来来，少年，我看你骨骼惊奇，传授你此法。。

判断当路由离开时候清除计时器。

```
    beforeRouteLeave(to, from, next){
         if(timer) {
            clearInterval(timer);
        }
        next();
    },
```


此法不好使你来砍我。。。

