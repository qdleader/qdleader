

####不要在“created”和“watch”中调用方法


Vue开发人员经常犯的一个错误是他们不必要地在created和watch中调用方法。 其背后的想法是，我们希望在组件初始化后立即运行watch。


Vue为此提供了内置的解决方案，这是我们经常忘记的Vue watch属性。
我们要做的就是稍微重组watch并声明两个属性：
1.handler (newVal, oldVal)-这是我们的watch方法本身。
2. immediate: true- 代表如果在 wacth 里声明了之后，就会立即先去执行里面的handler方法，如果为 false就跟我们以前的效果一样，不会在绑定的时候就执行



bad:
```
created: () {
	this.handleChange()
},
methods: {
	handleChange() {
		// stuff happens
	}
},
watch () {
	property() {
		this.handleChange()
	}
}


```


good:
```
// 好的做法
methods: {
  handleChange() {
    // stuff happens
  }
},
watch () {
  property {
    immediate: true
    handler() {
      this.handleChange()
    }
  }
}

```