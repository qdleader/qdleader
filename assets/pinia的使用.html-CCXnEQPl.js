import{_ as n,c as a,a as e,o as i}from"./app-z95KQ9dg.js";const l={};function t(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="pinia的使用" tabindex="-1"><a class="header-anchor" href="#pinia的使用"><span>pinia的使用</span></a></h1><h2 id="安装状态管理pinia" tabindex="-1"><a class="header-anchor" href="#安装状态管理pinia"><span>安装状态管理pinia</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> npm install pinia</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在main.js 中引入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  // main.js</span>
<span class="line"> import { createApp } from &#39;vue&#39;</span>
<span class="line"> import App from &#39;./App.vue&#39;</span>
<span class="line"></span>
<span class="line"> import { createPinia } from &#39;pinia&#39;</span>
<span class="line"> const pinia = createPinia()</span>
<span class="line"></span>
<span class="line"> const app = createApp(App)</span>
<span class="line"> app.use(pinia)</span>
<span class="line"> app.mount(&#39;#app&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们在src中建立store文件夹 ，然后建立个 index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> // src/store/index.js</span>
<span class="line"> // 引入仓库定义函数</span>
<span class="line"> import { defineStore } from &#39;pinia&#39;</span>
<span class="line"></span>
<span class="line"> // 传入2个参数，定义仓库并导出</span>
<span class="line"> // 第一个参数唯一不可重复，字符串类型，作为仓库ID以区分仓库</span>
<span class="line"> // 第二个参数，以对象形式配置仓库的state,getters,actions</span>
<span class="line"> // 配置 state getters actions</span>
<span class="line"> export const mainStore = defineStore(&#39;main&#39;, {</span>
<span class="line">   // state 类似组件的data选项，函数形式返回对象</span>
<span class="line">   state: () =&gt; {</span>
<span class="line">     return {</span>
<span class="line">       msg: &#39;hello world!&#39;,</span>
<span class="line">       counter: 0</span>
<span class="line">     }</span>
<span class="line">   },</span>
<span class="line">   getters: {},</span>
<span class="line">   actions: {}</span>
<span class="line"> })</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1在组件中使用" tabindex="-1"><a class="header-anchor" href="#_1在组件中使用"><span>1在组件中使用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">   &lt;button @click=&quot;handleClick&quot;&gt;修改状态数据&lt;/button&gt;</span>
<span class="line">    &lt;!-- 模板内不需要加.value --&gt;</span>
<span class="line">     &lt;p&gt;{{store.counter}}&lt;/p&gt;</span>
<span class="line">     &lt;!-- 或者使用解构之后的 --&gt;</span>
<span class="line">     &lt;p&gt;{{counter}}&lt;/p&gt;</span>
<span class="line"> &lt;/template&gt;</span>
<span class="line"> ​</span>
<span class="line"> &lt;script setup&gt;</span>
<span class="line"> // 导入状态仓库</span>
<span class="line"> import { mainStore } from &quot;../store/index.js&quot;;</span>
<span class="line"> // 使普通数据变响应式的函数  </span>
<span class="line"> import { storeToRefs } from &quot;pinia&quot;;</span>
<span class="line"> // 实例化仓库</span>
<span class="line"> const store = mainStore();</span>
<span class="line"> // 解构并使数据具有响应式</span>
<span class="line"> const { counter } = storeToRefs(store);</span>
<span class="line"> ​</span>
<span class="line"> // 点击 + 1;</span>
<span class="line"> function handleClick() {</span>
<span class="line">   // ref数据这里需要加.value访问</span>
<span class="line">   counter.value++;</span>
<span class="line"> }</span>
<span class="line"> &lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="patch" tabindex="-1"><a class="header-anchor" href="#patch"><span>$patch</span></a></h2><p>对象形式 前面介绍的是少量数据的变更，如果涉及数据比较多，则推荐使用仓库实例的$patch方法，批量修改，虽然看起来和前面的几乎没有区别，但是会加快修改速度，对程序的性能有很大的好处。$patch传入一个对象，对象的属性就是各种状态</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> &lt;template&gt;</span>
<span class="line">   &lt;button @click=&quot;handleClick&quot;&gt;修改状态数据&lt;/button&gt;</span>
<span class="line">      &lt;p&gt;{{msg}}&lt;/p&gt;</span>
<span class="line">     &lt;!-- 或者使用解构之后的 --&gt;</span>
<span class="line">     &lt;p&gt;{{counter}}&lt;/p&gt;</span>
<span class="line"> &lt;/template&gt;</span>
<span class="line"> ​</span>
<span class="line"> &lt;script setup&gt;</span>
<span class="line"> // 导入状态仓库</span>
<span class="line"> import { mainStore } from &quot;../store/index.js&quot;;</span>
<span class="line"> // 使普通数据变响应式的函数  </span>
<span class="line"> import { storeToRefs } from &quot;pinia&quot;;</span>
<span class="line"> // 实例化仓库</span>
<span class="line"> const store = mainStore();</span>
<span class="line"> // 解构并使数据具有响应式</span>
<span class="line"> const { msg,counter } = storeToRefs(store);</span>
<span class="line"> ​</span>
<span class="line"> // 点击 + 1;修改字符串</span>
<span class="line"> function handleClick() {</span>
<span class="line">   store.$patch({</span>
<span class="line">      msg: &quot;pinia good!&quot;,</span>
<span class="line">     counter: counter.value + 1,</span>
<span class="line">   });</span>
<span class="line"> }</span>
<span class="line"> &lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数形式" tabindex="-1"><a class="header-anchor" href="#函数形式"><span>函数形式</span></a></h2><p>上面例子中的$patch也可以传入一个函数，函数参数为state状态：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> &lt;template&gt;</span>
<span class="line">   &lt;button @click=&quot;handleClick&quot;&gt;修改状态数据&lt;/button&gt;</span>
<span class="line">      &lt;p&gt;{{msg}}&lt;/p&gt;</span>
<span class="line">     &lt;!-- 或者使用解构之后的 --&gt;</span>
<span class="line">     &lt;p&gt;{{counter}}&lt;/p&gt;</span>
<span class="line"> &lt;/template&gt;</span>
<span class="line"> ​</span>
<span class="line"> &lt;script setup&gt;</span>
<span class="line"> // 导入状态仓库</span>
<span class="line"> import { mainStore } from &quot;../store/index.js&quot;;</span>
<span class="line"> // 使普通数据变响应式的函数  </span>
<span class="line"> import { storeToRefs } from &quot;pinia&quot;;</span>
<span class="line"> // 实例化仓库</span>
<span class="line"> const store = mainStore();</span>
<span class="line"> // 解构并使数据具有响应式</span>
<span class="line"> const { msg,counter } = storeToRefs(store);</span>
<span class="line"> ​</span>
<span class="line"> // 点击 + 1;修改字符串</span>
<span class="line"> function handleClick() {</span>
<span class="line">    store.$patch((state) =&gt; {</span>
<span class="line">     state.msg = &quot;pinia good!&quot;;</span>
<span class="line">     state.counter++;</span>
<span class="line">   });</span>
<span class="line"> }</span>
<span class="line"> &lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>actions</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">5Actions</span>
<span class="line">actions等价于组件中的方法，它们可以在defineStore()中进行定义actions属性，并且可以完美地去定义业务逻辑。</span>
<span class="line"></span>
<span class="line">复制</span>
<span class="line">export const useStore = defineStore(&#39;main&#39;, {</span>
<span class="line">  state: () =&gt; ({</span>
<span class="line">    counter: 0,</span>
<span class="line">  }),</span>
<span class="line">  actions: {</span>
<span class="line">    increment() {</span>
<span class="line">      this.counter++</span>
<span class="line">    },</span>
<span class="line">    randomizeCounter() {</span>
<span class="line">      this.counter = Math.round(100 * Math.random())</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">})</span>
<span class="line">在上面的代码中，我们可以看到actions有点类似getters，但事实上是有所不同的。</span>
<span class="line"></span>
<span class="line">相同点：actions和getters都可以全类型支持来访问整个store实例。</span>
<span class="line">不同点：actions操作可以是异步的，可以在其中等待任何api调用甚至其他操作。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，action也可以像state和getters进行相互使用，action可以通过this直接访问。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// src/store/user.ts</span>
<span class="line">export const useUserStore = defineStore({</span>
<span class="line">  &quot;user&quot;,</span>
<span class="line">  state: () =&gt; ({</span>
<span class="line">    userData: null</span>
<span class="line">  }),</span>
<span class="line">  actions:{</span>
<span class="line">    async login(account, pwd) {</span>
<span class="line">      const { data } = await api.login(account, pwd)</span>
<span class="line">      this.setData(data) // 调用另一个 action 的方法</span>
<span class="line">      return data</span>
<span class="line">    },</span>
<span class="line">    setData(data) {</span>
<span class="line">      this.userData = data</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="也可以在action-里调用其他-store-里的-action-引入对应的-store-后即可访问其内部的方法了。" tabindex="-1"><a class="header-anchor" href="#也可以在action-里调用其他-store-里的-action-引入对应的-store-后即可访问其内部的方法了。"><span>也可以在action 里调用其他 store 里的 action，引入对应的 store 后即可访问其内部的方法了。</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// src/store/user.ts</span>
<span class="line"></span>
<span class="line">import { useAppStore } from &#39;./app&#39;</span>
<span class="line">export const useUserStore = defineStore({</span>
<span class="line">  id: &#39;user&#39;,</span>
<span class="line">  actions: {</span>
<span class="line">    async login(account, pwd) {</span>
<span class="line">      const { data } = await api.login(account, pwd)</span>
<span class="line">      const appStore = useAppStore()</span>
<span class="line">      appStore.setData(data) // 调用 app store 里的 action 方法</span>
<span class="line">      return data</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// src/store/app.ts</span>
<span class="line">export const useAppStore = defineStore({</span>
<span class="line">  &quot;app&quot;,</span>
<span class="line">  state:()=&gt;{</span>
<span class="line">    userData: null</span>
<span class="line">  },</span>
<span class="line">  actions: {</span>
<span class="line">    setData(data) {</span>
<span class="line">      this.userData = data</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在组件中使用" tabindex="-1"><a class="header-anchor" href="#在组件中使用"><span>在组件中使用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">   &lt;button @click=&quot;handleClick&quot;&gt;修改状态数据&lt;/button&gt;</span>
<span class="line">      &lt;p&gt;{{msg}}&lt;/p&gt;</span>
<span class="line">     &lt;!-- 或者使用解构之后的 --&gt;</span>
<span class="line">     &lt;p&gt;{{counter}}&lt;/p&gt;</span>
<span class="line"> &lt;/template&gt;</span>
<span class="line"> ​</span>
<span class="line"> &lt;script setup&gt;</span>
<span class="line"> // 导入状态仓库</span>
<span class="line"> import { useAppStore } from &quot;../store/app.ts&quot;;</span>
<span class="line"> const store = useAppStore();</span>
<span class="line"> ​</span>
<span class="line"> function handleClick() {</span>
<span class="line">    store.setData(&#39;qdleader&#39;)</span>
<span class="line"> }</span>
<span class="line"> &lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const d=n(l,[["render",t],["__file","pinia的使用.html.vue"]]),r=JSON.parse('{"path":"/vue3/pinia/pinia%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"pinia的使用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装状态管理pinia","slug":"安装状态管理pinia","link":"#安装状态管理pinia","children":[]},{"level":2,"title":"1在组件中使用","slug":"_1在组件中使用","link":"#_1在组件中使用","children":[]},{"level":2,"title":"$patch","slug":"patch","link":"#patch","children":[]},{"level":2,"title":"函数形式","slug":"函数形式","link":"#函数形式","children":[]},{"level":2,"title":"也可以在action 里调用其他 store 里的 action，引入对应的 store 后即可访问其内部的方法了。","slug":"也可以在action-里调用其他-store-里的-action-引入对应的-store-后即可访问其内部的方法了。","link":"#也可以在action-里调用其他-store-里的-action-引入对应的-store-后即可访问其内部的方法了。","children":[]},{"level":2,"title":"在组件中使用","slug":"在组件中使用","link":"#在组件中使用","children":[]}],"git":{"updatedTime":1728353169000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"vue3/pinia/pinia的使用.md"}');export{d as comp,r as data};
