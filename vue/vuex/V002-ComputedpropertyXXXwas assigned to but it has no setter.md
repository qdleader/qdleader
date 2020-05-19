Computed property "XXX" was assigned to but it has no setter

>001 中留了个小坑，有同学问，按照你的方法后，问啥报错了？
 -> . ->   虽然不影响使用，报错也不行呀。
 
 #分析原因：
	1.组件中v-model=“XXX”，而XXX是vuex state中的某个变量
	2.vuex中是单项流，v-model是vue中的双向绑定，
	但是在computed中只通过get获取参数值，没有set无法改变参数值
	

#解决方法：
##方法1
 >将v-model 改为  :value
 
 ##方法2
 在computed里面添加：
 ```
 computed:{
	 ...mapState({
		<!-- cpShow:'cpShow' -->
	 }),
	 <!-- 上面这种获取只有get没有set，修改为下面方式 -->
	 cpShow:{
		 get() {
			 return this.$store.state.cpShow;
		 },
		 set(val) {
			 this.$store.state.cpShow = val
		 }
	 }
 }
 ```
	
	