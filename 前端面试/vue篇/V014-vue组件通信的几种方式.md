
# V014-vue组件通信的几种方式

```js
1.props 和$emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的
2.$parent,$children 获取当前组件的父组件和当前组件的子组件
3.$attrs 和$listeners A->B->C。Vue 2.4 开始提供了$attrs 和$listeners 来解决这个问题
(如果一个第三方的组件有100个props和100个$emit触发的事件，你在对它进行二次封装的时候如果需要支持其所有的props和$emit触发的事件，你就可以用$attr和$listeners轻松解决，否则的话你还得写100个props和100个$emit触发的事件。还有多级组件嵌套的情况也很适用，不用将props一层一层往上传递。)
4.父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)
5.$refs 获取组件实例
6.envetBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式
7.vuex 状态管理
8.locastorage 和 sessionStorage
```
