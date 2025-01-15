import{_ as n,c as e,a,o as i}from"./app-BJH5QZKa.js";const l={};function t(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="v008-vue中数据变化页面并不变化问题" tabindex="-1"><a class="header-anchor" href="#v008-vue中数据变化页面并不变化问题"><span>V008-vue中数据变化页面并不变化问题</span></a></h1><p>由于我们vue2中的数据双向绑定时候经常遇到这种，数据变化了，视图没有变化的情况，这是为什么呢？怎么解决呢？</p><h5 id="探索1" tabindex="-1"><a class="header-anchor" href="#探索1"><span>探索1</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data() {</span>
<span class="line">  obj1:{}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">btn1() {</span>
<span class="line">     this.obj1.name = &#39;123&#39;    </span>
<span class="line"> },          </span>
<span class="line"> btn2() {</span>
<span class="line">     this.obj1.name = &#39;变了呀&#39;    </span>
<span class="line"> },         </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;div @click=&quot;btn1&quot;&gt;按钮1&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;div @click=&quot;btn2&quot;&gt;按钮2&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;{{obj1}}&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当点击按钮1和按钮2时候，页面上的obj1是一点没有变化的，也就是经典的那种数据变了，页面没有变。</p><p>但是，当我们给obj1一个初始属性name时候，在改变name，就会发现，页面还是同步的。</p><h5 id="探索2" tabindex="-1"><a class="header-anchor" href="#探索2"><span>探索2</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data() {</span>
<span class="line">  obj1:{</span>
<span class="line">    name:&#39;我是初始值&#39;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">btn1() {</span>
<span class="line">     this.obj1.name = &#39;123&#39;    </span>
<span class="line"> },          </span>
<span class="line"> btn2() {</span>
<span class="line">     this.obj1.name = &#39;变了呀&#39;    </span>
<span class="line"> },         </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;div @click=&quot;btn1&quot;&gt;按钮1&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;div @click=&quot;btn2&quot;&gt;按钮2&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;{{obj1}}&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们继续探索</p><p>我们再加深一层</p><h6 id="探索3" tabindex="-1"><a class="header-anchor" href="#探索3"><span>探索3</span></a></h6><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data() {</span>
<span class="line">  obj1:{</span>
<span class="line">    name:{</span>
<span class="line">      age:12</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">btn1() {</span>
<span class="line">     this.obj1.name.age = &#39;123&#39;    </span>
<span class="line"> },          </span>
<span class="line"> btn2() {</span>
<span class="line">     this.obj1.name.age = &#39;变了呀&#39;    </span>
<span class="line"> },         </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;div @click=&quot;btn1&quot;&gt;按钮1&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;div @click=&quot;btn2&quot;&gt;按钮2&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;{{obj1}}&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现这样也是变了的</p><p>所以我们可以得出结论</p><h2 id="只有在data里初始化的数据才是响应的-vue不能检测到对象属性的添加或删除-没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的" tabindex="-1"><a class="header-anchor" href="#只有在data里初始化的数据才是响应的-vue不能检测到对象属性的添加或删除-没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的"><span>只有在data里初始化的数据才是响应的，Vue不能检测到对象属性的添加或删除，没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的</span></a></h2><p>明白怎么造成的了，那咋解决呢？</p><p>比如这个改变了这个newArr的数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">newArr:[]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们直接赋值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let arr = [{name:&#39;前端架构师&#39;}]</span>
<span class="line"></span>
<span class="line">this.newArr[0].newList = arr</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现数据变了，页面没有变</p><p>有几种方法来解决这个问题</p><p>#方法1. 用 Object.assign</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">this.newArr[0].newList = arr</span>
<span class="line">this.newArr = Object.assign({},this.newArr)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用Object.assign 追加属性</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">this.newArr = Object.assign({}, this.newArr, {</span>
<span class="line">  age: 12,</span>
<span class="line">  grade: &#39;100&#39;</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="这个object-assign并不是深拷贝-只复制了一层。。" tabindex="-1"><a class="header-anchor" href="#这个object-assign并不是深拷贝-只复制了一层。。"><span>这个Object.assign并不是深拷贝，只复制了一层。。</span></a></h2><p>eg1:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data() {</span>
<span class="line">  obj1:{}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">btn2() {</span>
<span class="line">    this.obj1.page = 1</span>
<span class="line">    this.obj1 = Object.assign({},this.obj1)</span>
<span class="line">    console.log(this.obj1)</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就同步了</p><p>但我们在往深了一层呢？</p><p>这里就有一个面试题了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let obj = {</span>
<span class="line">  a:1,</span>
<span class="line">  b:{</span>
<span class="line">    x:1,</span>
<span class="line">    y:1,</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">let obj1 = Object.assign({}, obj)</span>
<span class="line">obj.a= 2</span>
<span class="line"></span>
<span class="line">console.log(obj.a)  // 2</span>
<span class="line">console.log(obj1.a)  // 1</span>
<span class="line">说明第一层拷贝没问题</span>
<span class="line"></span>
<span class="line">obj.b.x = 2</span>
<span class="line">console.log(obj.b.x)  //2</span>
<span class="line">console.log(obj1.b.x)  //2</span>
<span class="line"></span>
<span class="line">说明深层没有拷贝</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#方法2. 用 this.$set</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let arr = [{name:&#39;前端架构师&#39;}]</span>
<span class="line">this.$set(this.newArr[index],&#39;newList&#39;,arr)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">或</span>
<span class="line">Vue.set(this.newArr[index],&#39;newList&#39;,arr)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有同学说，姨？我怎么用this.$set改了也不管用呢</p><p>那是因为</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data() {</span>
<span class="line">  obj1:{</span>
<span class="line"></span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">btn2() {</span>
<span class="line">  this.obj1.name = &#39;小明&#39;</span>
<span class="line">  this.$set(this.obj1,name,&#39;小明&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你用this.$set之前你是不是还对相同的属性做了赋值操作，把this.obj1.name = &#39;小明&#39;这个去掉就生效了。</p><h2 id="_3-生成新数组的方法" tabindex="-1"><a class="header-anchor" href="#_3-生成新数组的方法"><span>3.生成新数组的方法</span></a></h2><p>数组数据变动，使用某些方法操作数组，变动数据时，有些方法无法被vue监测</p><blockquote><p>push()，pop()，shift()，unshift()，splice()，sort()，reverse()可被vue检测到 filter(), concat(), slice()。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vue不能检测以下变动的数组：</span>
<span class="line">1、当你利用索引直接设置一个项时，vm.items[indexOfItem] = newValue</span>
<span class="line">2、当你修改数组的长度时，例如： vm.items.length = newLength</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如你在监听不到变化的数组后面加个concat</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">arr 是那个变了数组</span>
<span class="line"></span>
<span class="line">arr.concat([]);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-this-forceupdate" tabindex="-1"><a class="header-anchor" href="#_4-this-forceupdate"><span>4.this.$forceUpdate()</span></a></h2><blockquote><p>vue多层循环，动态改变数据后渲染的很慢或者不渲染 可在动态改变数据的方法，第一行加上</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">this.$forceUpdate();</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-异步更新队列-this-nexttick" tabindex="-1"><a class="header-anchor" href="#_5-异步更新队列-this-nexttick"><span>5. 异步更新队列 this.$nextTick()</span></a></h2><p>数据第一次获取到了，也渲染了，但是第二次之后数据只有在再一次渲染页面的时候更新，并不能实时更新。</p><p>Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data() {</span>
<span class="line">  obj:&#39;未更新&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">btn2() {</span>
<span class="line">  this.obj = &#39;已更新&#39;</span>
<span class="line">  console.log(this.$el.textContent)  //未更新</span>
<span class="line">  this.$nextTick(() =&gt; {</span>
<span class="line">      console.log(this.$el.textContent)  //已更新</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 $nextTick()返回一个 Promise 对象，所以上面写法可以优化一下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">async btn2() {</span>
<span class="line">  this.obj = &#39;已更新&#39;</span>
<span class="line">  console.log(this.$el.textContent)  //未更新</span>
<span class="line"></span>
<span class="line">  await this.$nextTick()</span>
<span class="line">  console.log(this.$el.textContent)  //已更新</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62)]))}const r=n(l,[["render",t],["__file","V008-vue中数据变化页面并不变化问题.html.vue"]]),p=JSON.parse('{"path":"/vue/V008-vue%E4%B8%AD%E6%95%B0%E6%8D%AE%E5%8F%98%E5%8C%96%E9%A1%B5%E9%9D%A2%E5%B9%B6%E4%B8%8D%E5%8F%98%E5%8C%96%E9%97%AE%E9%A2%98.html","title":"V008-vue中数据变化页面并不变化问题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"只有在data里初始化的数据才是响应的，Vue不能检测到对象属性的添加或删除，没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的","slug":"只有在data里初始化的数据才是响应的-vue不能检测到对象属性的添加或删除-没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的","link":"#只有在data里初始化的数据才是响应的-vue不能检测到对象属性的添加或删除-没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的","children":[]},{"level":2,"title":"这个Object.assign并不是深拷贝，只复制了一层。。","slug":"这个object-assign并不是深拷贝-只复制了一层。。","link":"#这个object-assign并不是深拷贝-只复制了一层。。","children":[]},{"level":2,"title":"3.生成新数组的方法","slug":"_3-生成新数组的方法","link":"#_3-生成新数组的方法","children":[]},{"level":2,"title":"4.this.$forceUpdate()","slug":"_4-this-forceupdate","link":"#_4-this-forceupdate","children":[]},{"level":2,"title":"5. 异步更新队列 this.$nextTick()","slug":"_5-异步更新队列-this-nexttick","link":"#_5-异步更新队列-this-nexttick","children":[]}],"git":{"updatedTime":1736904811000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"vue/V008-vue中数据变化页面并不变化问题.md"}');export{r as comp,p as data};
