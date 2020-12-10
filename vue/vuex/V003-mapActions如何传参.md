mapActions如何传参

调用页面

```
methods:{
  ...mapActions([
        'programPop'
    ]),
    doSomething() {
      this.programPop(true)
    }
}
```



vuex中
```
actions.js

// 展示节目单(...mapAction 传参写方法, str即为传入的参数)
  programPop:({
      commit
  },str) => {
      commit(types.PROGRAMPOP,str)
  },



mutations.js

//展示节目列表
    [PROGRAMPOP](state,str) {
        console.log(123,state,str)
        state.programPopShow = str
    },

```

其他均无变化，参照V001即可
