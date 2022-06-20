最近，使用vue-cli时，webpack配置里面配置了：
resolve：{
‘vue$’: ‘vue/dist/vue.esm.js
……
}
只有这样，我们在index.js(这是我的项目里面文件)中引入vue时（require（’vue’））才可以正常使用，不然会报错。

我们下面将讲解一下require时，它是如何搜索包的，这样再进行解释就可以清楚明了了。

类似于windows系统扫描path变量一样：

require也是按照一个变量集的顺序从上到下依次查找。
顺序是：

> 1. 项目下的node_modules
> 2. 全局的node_modules
> 3. 项目根路径（举个栗子：我在根目录下面有一个index.js;在util包下面有一个app.vue;index中要引用它，就可以：require(‘./util/app.vue’)，这个路径就是在项目路径下去定位）

从上面可以观察到，如果是require用户自定义的’包’时，那么速度相对要慢一点，因为优先级是最低的

接着说一下如何在这个路径的顺序基础上进行引入。

**按照给定的名字在上面的路径下找(如果没有扩展名，默认按照：.js;.json;.node为扩展名去匹配)，如果找到的与文件夹名字相同，那么这就是找到了所谓的‘包’，在包下的package.json文件查找一个main属性，并拿到它的值进行寻找对应的文件。如果有，则进行加载；如果没有，那么继续进行寻找，知道三种目录都搜索不到时才进行报错。**


那么我们再来回头看一下vue的那个配置，vue/dist/vue.esm.js ，原本main配置里面的是：dist/vue.runtime.common.js。添加这个配置说明vue-cli不需要这个文件，而是需要vue.esm.js。了解了这个规则，那么我们就很容易看懂这些配置了。
