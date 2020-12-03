# 一个组件调用你项目中任意一个组件的方法

两个组件之间没有任何关系，没有相互引用。父子组件或兄弟组件的关系。


这个方法成了，可以实现组件的高度分离。

这里我提供给大家一个vue的一方法：


A 调用 B中的一个方法，A 与 B 没有任何关系。

思路是vuex中存一个属性，A 组件 调用commit方法改变这个属性，
B 组件中获取这个属性，并监听，当监听到这个属性变化时候，即可调用要调的方法。



A 组件：
```
<script>
import { mapGetters, mapActions } from "vuex";
export default {
   methods:{
     ...mapActions(["doF"]),
     <!-- A触发vuex属性的变化 -->
     changeData() {
       this.doF()
     }
   }
}

</script>

```

vuex中：

mutations.js
```
import {
    DOF,
} from './types'
import getters from './getters'

const state = {
    commentDataShow:false,//控制调用first-list中commentData方法
};

const mutations = {
    //A触发dof后改变commentDataShow状态
    [DOF](state) {
        state.commentDataShow = !state.commentDataShow
    },

};

export default {
	state,
	mutations,
	getters
}
```

getters.js
```
import { mapGetters } from "vuex";

const getters = {
    //调用第一层列表list
    commentDataShow(state) {
        return state.commentDataShow
    },

}

export default getters;
```

这个展示的vuex中关键的代码，具体vuex使用可以看vuex那一篇文档。



B组件:

```
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
       ...mapGetters({
           commentDataShow: "commentDataShow"
       })
   },
   watch:{

       commentDataShow() {
           this.commentData()
       }
   },
   methods:{
     <!-- 要调用的方法 -->
     commentData() {
       //doSomething
     }
   }
}

</script>
```



这样这个功能就实现了。

另外另一种情况，两个组件公用一个父组件，而两个子组件来回调方法呢？

除了上面这方法，我们也可以，在这个父组件中设置一个属性，一个组件改变这个属性，当父组件监听到属性变化了，就调用另一个子组件方法，也可以做到。
