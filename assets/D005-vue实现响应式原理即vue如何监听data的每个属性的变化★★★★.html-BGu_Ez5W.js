import{_ as s,c as e,a,o as i}from"./app-DXbwLjSy.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="vue实现响应式原理即vue如何监听data的每个属性的变化★★★★" tabindex="-1"><a class="header-anchor" href="#vue实现响应式原理即vue如何监听data的每个属性的变化★★★★"><span>vue实现响应式原理即vue如何监听data的每个属性的变化★★★★</span></a></h1><h2 id="重要指数-★★★★" tabindex="-1"><a class="header-anchor" href="#重要指数-★★★★"><span>重要指数：★★★★</span></a></h2><p>记住两点</p><blockquote><p>1、使用 Object.defineProprety实现响应式原理 2、 data属性代理到vm(即是Vue实例)上</p></blockquote><h2 id="object-defineproperty-是如何使用的" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-是如何使用的"><span>Object.defineProperty 是如何使用的？</span></a></h2><blockquote><p>Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。 因为 Object.defineProperty() 是ES6新增的一个方法，所有我们使用vue不支持IE低版本浏览器</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> /*----------  defineProperty 基本使用  ------------*/</span>
<span class="line">        let obj = {}</span>
<span class="line">        let name = &#39;qdleader&#39;</span>
<span class="line"></span>
<span class="line">        Object.defineProperty(obj, &#39;name&#39;, {</span>
<span class="line">            get: function () {</span>
<span class="line">                console.log(&#39;get&#39;)</span>
<span class="line">                return name</span>
<span class="line">            },</span>
<span class="line">            set: function (newValue) {</span>
<span class="line">                console.log(&#39;set&#39;)</span>
<span class="line">                name = newValue</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">        })</span>
<span class="line">       console.log(obj.name)</span>
<span class="line">       obj.name = &#39;yyyang&#39;</span>
<span class="line">        // 输出</span>
<span class="line">        // get</span>
<span class="line">        // qdleader</span>
<span class="line">        // set</span>
<span class="line">		</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>defineProperty这个原理就是拦截对象，给对象的属性增加 set 和 get方法，因为核心是 defineProperty所以还需要对数组的方法进行拦截</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">对对象进行拦截</span>
<span class="line">function observer(target){</span>
<span class="line">  // 如果不是对象数据类型直接返回即可</span>
<span class="line">  if(typeof target !== &#39;object&#39;){</span>
<span class="line">    return target</span>
<span class="line">  }</span>
<span class="line">  // 重新定义key</span>
<span class="line">  for(let key in target){</span>
<span class="line">    defineReactive(target,key,target[key])</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">function update(){</span>
<span class="line">  console.log(&#39;update view&#39;)</span>
<span class="line">}</span>
<span class="line">function defineReactive(obj,key,value){</span>
<span class="line">  observer(value); // 有可能对象类型是多层，递归劫持</span>
<span class="line">  Object.defineProperty(obj,key,{</span>
<span class="line">    get(){</span>
<span class="line">      // 在get 方法中收集依赖</span>
<span class="line">      return value</span>
<span class="line">    },</span>
<span class="line">    set(newVal){</span>
<span class="line">      if(newVal !== value){</span>
<span class="line">        observer(value);</span>
<span class="line">        update(); // 在set方法中触发更新</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">const obj = {name:&#39;qdleader&#39;}</span>
<span class="line">observer(obj);</span>
<span class="line">obj.name = &#39;new-name&#39;;</span>
<span class="line">输出：</span>
<span class="line">update view</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">数组方法劫持</span>
<span class="line">const oldProtoMehtods = Array.prototype</span>
<span class="line">const proto = Object.create(oldProtoMehtods)</span>
<span class="line">function update(){</span>
<span class="line">  console.log(&#39;update view&#39;)</span>
<span class="line">}</span>
<span class="line">function defineReactive(obj,key,value){</span>
<span class="line">  observer(value) // 有可能对象类型是多层，递归劫持</span>
<span class="line">  Object.defineProperty(obj,key,{</span>
<span class="line">    get(){</span>
<span class="line">      // 在get 方法中收集依赖</span>
<span class="line">      return value</span>
<span class="line">    },</span>
<span class="line">    set(newVal){</span>
<span class="line">      if(newVal !== value){</span>
<span class="line">        observer(value)</span>
<span class="line">        update() // 在set方法中触发更新</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">[&#39;push&#39;,&#39;pop&#39;,&#39;shift&#39;,&#39;unshift&#39;].forEach(method=&gt;{</span>
<span class="line">  Object.defineProperty(proto, method,{</span>
<span class="line">    get(){</span>
<span class="line">      update()</span>
<span class="line">      return oldProtoMehtods[method]</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">})</span>
<span class="line">function observer(target){</span>
<span class="line">  if(typeof target !== &#39;object&#39;){</span>
<span class="line">    return target</span>
<span class="line">  }</span>
<span class="line">  // 如果不是对象数据类型直接返回即可</span>
<span class="line">  if(Array.isArray(target)){</span>
<span class="line">    Object.setPrototypeOf(target, proto)</span>
<span class="line">    // 给数组中的每一项进行observr</span>
<span class="line">    for(let i = 0 ; i &lt; target.length; i++){</span>
<span class="line">      observer(target[i])</span>
<span class="line">    }</span>
<span class="line">    return</span>
<span class="line">  }</span>
<span class="line">  // 重新定义key</span>
<span class="line">  for(let key in target){</span>
<span class="line">    defineReactive(target, key, target[key])</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">let obj = {hobby:[{name:&#39;zhuanzhuan&#39;}]}</span>
<span class="line">observer(obj)</span>
<span class="line">// 使用[&#39;push&#39;,&#39;pop&#39;,&#39;shift&#39;,&#39;unshift&#39;] 方法，更改数组会触发视图更新</span>
<span class="line">obj.hobby.push(&#39;转转&#39;)</span>
<span class="line">// 更改数组中的对象也会触发视图更新</span>
<span class="line">obj.hobby[0].name = &#39;new-name&#39;</span>
<span class="line">console.log(obj.hobby)</span>
<span class="line">输出：</span>
<span class="line">update view</span>
<span class="line">update view</span>
<span class="line">[ { name: [Getter/Setter] }, &#39;qdleader&#39; ]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-defineproperty缺点" tabindex="-1"><a class="header-anchor" href="#object-defineproperty缺点"><span>Object.defineProperty缺点：</span></a></h2><blockquote><p>无法监听数组的变化</p></blockquote><blockquote><p>需要深度遍历，浪费内存</p></blockquote><h1 id="模拟实现vue响应式" tabindex="-1"><a class="header-anchor" href="#模拟实现vue响应式"><span>模拟实现Vue响应式</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 模拟实现Vue响应式</span>
<span class="line">       let vm = {} // 我们把这个看做是Vue的一个实例</span>
<span class="line">        // data看作是Vue实例的data属性</span>
<span class="line">        let data = {</span>
<span class="line">            price:100,</span>
<span class="line">            name:&#39;qdleader&#39;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        let key, value</span>
<span class="line"></span>
<span class="line">        for (const key in data) {</span>
<span class="line">            if (data.hasOwnProperty(key)) { </span>
<span class="line">               (function(key){</span>
<span class="line">                Object.defineProperty(vm,key,{  // 将data属性代理到vm上</span>
<span class="line">                    get:function(){</span>
<span class="line">                        console.log(&#39;get&#39;,data[key])  // 监听</span>
<span class="line">                        return data[key]</span>
<span class="line">                    },</span>
<span class="line">                    set:function(newValue){</span>
<span class="line">                        console.log(&#39;set&#39;,newValue) // 监听</span>
<span class="line">                        data[key] = newValue</span>
<span class="line">                    }</span>
<span class="line">                })</span>
<span class="line">               })(key)</span>
<span class="line">                </span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        console.log(vm.name)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const v=s(l,[["render",d],["__file","D005-vue实现响应式原理即vue如何监听data的每个属性的变化★★★★.html.vue"]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%E6%B1%87%E6%80%BB/D005-vue%E5%AE%9E%E7%8E%B0%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86%E5%8D%B3vue%E5%A6%82%E4%BD%95%E7%9B%91%E5%90%ACdata%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%98%E5%8C%96%E2%98%85%E2%98%85%E2%98%85%E2%98%85.html","title":"vue实现响应式原理即vue如何监听data的每个属性的变化★★★★","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"重要指数：★★★★","slug":"重要指数-★★★★","link":"#重要指数-★★★★","children":[]},{"level":2,"title":"Object.defineProperty 是如何使用的？","slug":"object-defineproperty-是如何使用的","link":"#object-defineproperty-是如何使用的","children":[]},{"level":2,"title":"Object.defineProperty缺点：","slug":"object-defineproperty缺点","link":"#object-defineproperty缺点","children":[]}],"git":{"updatedTime":1739237687000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"前端面试/js类/常见面试题精选汇总/D005-vue实现响应式原理即vue如何监听data的每个属性的变化★★★★.md"}');export{v as comp,r as data};
