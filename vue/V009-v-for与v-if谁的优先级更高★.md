# v-for与v-if谁的优先级更高★


• 实践中不应该把v-for和v-if放一起
• 在vue2中，v-for的优先级是高于v-if，把它们放在一起，输出的渲染函数中可以看出会先执行循环再判断条件，哪怕我们只渲染列表中一小部分元素，也得在每次重渲染的时候遍历整个列表，这会比较浪费；

另外需要注意的是在vue3中则完全相反，v-if的优先级高于v-for，所以v-if执行时，它调用的变量还不存在，就会导致异常


## 优化方案

• 为了过滤列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。此时定义一个计算属性 (比如 activeUsers)，让其返回过滤后的列表即可（比如users.filter(u=>u.isActive)）

• 为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。此时把 v-if 移动至容器元素上 (比如 ul、ol)或者外面包一层template即可



## vue2.x源码分析
在vue模板编译的时候，会将指令系统转化成可执行的render函数
编写一个p标签，同时使用v-if与 v-for
```js
<div id="app">
  <p v-if="isShow" v-for="item in items">
    {{ item.title }}
  </p>
</div>
创建vue实例，存放isShow与items数据
const app = new Vue({
  el: "#app",
  data() {
    return {
      items: [
        { title: "foo" },
        { title: "baz" }]
    }
  },
  computed: {
    isShow() {
      return this.items && this.items.length > 0
    }
  }
})
```
模板指令的代码都会生成在render函数中，通过app.$options.render就能得到渲染函数
```js
ƒ anonymous() {
  with (this) { return 
    _c('div', { attrs: { "id": "app" } }, 
    _l((items), function (item) 
    { return (isShow) ? _c('p', [_v("\n" + _s(item.title) + "\n")]) : _e() }), 0) }
}
```

• _l是vue的列表渲染函数，函数内部都会进行一次if判断
• 初步得到结论：v-for优先级是比v-if高
• 再将v-for与v-if置于不同标签
```js
<div id="app">
  <template v-if="isShow">
    <p v-for="item in items">{{item.title}}</p>
  </template>
</div>
```
再输出下render函数
```js
ƒ anonymous() {
  with(this){return 
    _c('div',{attrs:{"id":"app"}},
    [(isShow)?[_v("\n"),
    _l((items),function(item){return _c('p',[_v(_s(item.title))])})]:_e()],2)}
}
```
这时候我们可以看到，v-for与v-if作用在不同标签时候，是先进行判断，再进行列表的渲染


我们再在查看下vue源码
```js
// 源码位置：\vue-dev\src\compiler\codegen\index.js
export function genElement (el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    ...
}
```
在进行if判断的时候，v-for是比v-if先进行判断
最终结论：v-for优先级比v-if高