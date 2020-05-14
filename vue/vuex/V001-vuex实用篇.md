##1.首先在main.js中引入


import store from './store/index.js'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



##2.然后在main.js同级建立store文件夹

在store文件夹里面分别建立actions.js, getters.js, index.js, mutations.js,types.js


比如现在需求在组件A控制组件B中的一个状态的显隐。

在组件A中
```
<script>
import {mapGetters, mapActions} from 'vuex';
	data() {
		return {
			
		}
	},
    methods: {
        //点击弹出
        ...mapActions([
            'buyPop'
        ]),
    }
</script>
```

1.触发后进入store中的index文件
index文件中的内容是固定的：

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default new Vuex.Store({
	modules:{
		mutations
    },
    actions,
});
```

*2.然后进入actions里面

```
import * as types from './types'

export default {
    //点击弹出付款弹出层
    buyPop:({
        commit
    }) => {
        commit(types.BUYPOP)
    }
}
```

*3.然后维护下types文件
```
export const BUYPOP = 'BUYPOP';
```


然后到了mutations文件
```
import {
    BUYPOP,
} from './types'
import getters from './getters'

const state = {
    cpShow:false,  //控制付款弹出层展示隐藏
};

const mutations = {
    //底部购买组件出现弹出付钱板块
    [BUYPOP](state) {
        state.cpShow = true;
    },

};
export default {
	state,
	mutations,
	getters
}
```



然后进入getters文件

```

const getters = {
	//获取弹出层状态
	cpShow(state) {
		return state.cpShow
    },
}

export default getters;
```


然后store文件就处理完毕了，那么在B组件中怎么调用呢？

着啥急，这不就来了嘛。。

B组件：
```
<template>
	<div>
			<div v-show="cpShow">被控制的木偶</div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    data() {
        return {
                                    
        };
    },
    computed:{
        ...mapGetters({
                cpShow:'cpShow'
	   })

    },
    methods: {

    }
};
</script>


//调用时候可以直接this.cpShow
写法嘛很多种：
        ...mapGetters({
                cpShow:'cpShow'
	   })
	   
	   或者
	           ...mapGetters([
	            'cpShow'
	   ])
	   都在可以

```


这就是一个完整的使用流程喽！

加群加群微信搜索qdleader，回复加群