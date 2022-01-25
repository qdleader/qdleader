 import astore from './store'

 new Vue({
  router,
  astore,
  render: h => h(App)
}).$mount('#app')



此时在vue中你会发现
this.$store 没有




解决

```
import store from './store'

new Vue({
 router,
 store,
 render: h => h(App)
}).$mount('#app')

```

vue 中只认 store 
