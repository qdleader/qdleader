# mutation 和 action 的区别

## 1. 作用

- mutation：用于处理同步操作，如修改 state 中的数据(同步执行，立即生效)
- action：用于处理异步操作，如发送请求、处理异步逻辑等，最终通过 `commit` 提交 mutation 修改 state 中的数据


## 2. 调用方式

- mutation：通过 `this.$store.commit('SET_NUMBER', 10)` 调用
- action：通过 `this.$store.dispatch('ACTION_NAME',payload)` 调用






接收参数不同，mutation第一个参数是state，而action第一个参数是context，其包含了

```js
{
    state,      // 等同于 `store.state`，若在模块中则为局部状态
    rootState,  // 等同于 `store.state`，只存在于模块中
    commit,     // 等同于 `store.commit`
    dispatch,   // 等同于 `store.dispatch`
    getters,    // 等同于 `store.getters`
    rootGetters // 等同于 `store.getters`，只存在于模块中
}
```

