import{_ as a,c as e,a as s,b as l,o as i,t as p}from"./app-DbHRFhcj.js";const d={};function c(v,n){return i(),e("div",null,[n[0]||(n[0]=s(`<h1 id="weakmap和map的区别" tabindex="-1"><a class="header-anchor" href="#weakmap和map的区别"><span>WeakMap和Map的区别</span></a></h1><h2 id="map-的使用" tabindex="-1"><a class="header-anchor" href="#map-的使用"><span>map 的使用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">map.set(key,value)添加键值对到映射中</span>
<span class="line">map.get(key)获取映射中某一个键的对应值</span>
<span class="line">map.delete(key)将某一键值对移除映射</span>
<span class="line">map.clear()清空映射中所有键值对</span>
<span class="line">map.entries()返回一个以二元数组（键值对）作为元素的数组</span>
<span class="line">map.has(key)检查映射中是否包含某一键值对</span>
<span class="line">map.keys()返回一个当前映射中所有键作为元素的可迭代对象</span>
<span class="line">map.values()返回一个当前映射中所有值作为元素的可迭代对象</span>
<span class="line">map.size映射中键值对的数量</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>垃圾回收机制 我们知道，程序运行中会有一些垃圾数据不再使用，需要及时释放出去，如果我们没有及时释放，这就是内存泄露</p><p>JS 中的垃圾数据都是由垃圾回收（Garbage Collection，缩写为 GC）器自动回收的，不需要手动释放，它是如何做的喃？</p><p>很简单，JS 引擎中有一个后台进程称为垃圾回收器，它监视所有对象，观察对象是否可被访问，然后按照固定的时间间隔周期性的删除掉那些不可访问的对象即可</p><p>现在各大浏览器通常用采用的垃圾回收有两种方法： 引用计数 标记清除</p><p>引用计数 最早最简单的垃圾回收机制，就是给一个占用物理空间的对象附加一个引用计数器，当有其它对象引用这个对象时，这个对象的引用计数加一，反之解除时就减一，当该对象引用计数为 0 时就会被回收。</p><p>该方式很简单，但会引起内存泄漏：</p><p>// 循环引用的问题 function temp(){ var a={}; var b={}; a.o = b; b.o = a; } 这种情况下每次调用 temp 函数，a 和 b 的引用计数都是 2 ，会使这部分内存永远不会被释放，即内存泄漏。现在已经很少使用了，只有低版本的 IE 使用这种方式。</p><p>标记清除 V8 中主垃圾回收器就采用标记清除法进行垃圾回收。主要流程如下：</p><p>标记：遍历调用栈，看老生代区域堆中的对象是否被引用，被引用的对象标记为活动对象，没有被引用的对象（待清理）标记为垃圾数据。 垃圾清理：将所有垃圾数据清理掉</p><p>在我们的开发过程中，如果我们想要让垃圾回收器回收某一对象，就将对象的引用直接设置为 null</p><p>var a = {}; // {} 可访问，a 是其引用</p><p>a = null; // 引用设置为 null // {} 将会被从内存里清理出去</p><p>但如果一个对象被多次引用时，例如作为另一对象的键、值或子元素时，将该对象引用设置为 null 时，该对象是不会被回收的，依然存在</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var a = {}; </span>
<span class="line">var arr = [a];</span>
<span class="line"></span>
<span class="line">a = null; </span>
<span class="line">console.log(arr)</span>
<span class="line">// [{}]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果作为 Map 的键喃？</p><p>var a = {}; var map = new Map(); map.set(a, &#39;三分钟学前端&#39;)</p>`,19)),l("p",null,"a = null; console.log(map.keys()) // MapIterator "+p()+' console.log(map.values()) // MapIterator {"三分钟学前端"} 如果想让 a 置为 null 时，该对象被回收，该怎么做喃？',1),n[1]||(n[1]=s(`<p>WeakMap vs Map ES6 考虑到了这一点，推出了： WeakMap 。它对于值的引用都是不计入垃圾回收机制的，所以名字里面才会有一个&quot;Weak&quot;，表示这是弱引用（对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为）。</p><h3 id="map-相对于-weakmap" tabindex="-1"><a class="header-anchor" href="#map-相对于-weakmap"><span>Map 相对于 WeakMap ：</span></a></h3><p>Map 的键可以是任意类型，WeakMap 只接受对象作为键（null除外），而值可以是任意。 2.WeakMap不能包含无引用的对象，否则会被自动清除出集合（垃圾回收机制） Map 可以被遍历， WeakMap 不能被遍历</p><p>注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const map = new Map();</span>
<span class="line"></span>
<span class="line">map.set([&#39;a&#39;], 555);</span>
<span class="line">map.get([&#39;a&#39;]) // undefined</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的set和get方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined。</p><p>任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数，例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const set = new Set([</span>
<span class="line">  [&#39;foo&#39;, 1],</span>
<span class="line">  [&#39;bar&#39;, 2]</span>
<span class="line">]);</span>
<span class="line">const m1 = new Map(set);</span>
<span class="line">m1.get(&#39;foo&#39;) // 1</span>
<span class="line"></span>
<span class="line">const m2 = new Map([[&#39;baz&#39;, 3]]);</span>
<span class="line">const m3 = new Map(m2);</span>
<span class="line">m3.get(&#39;baz&#39;) // 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果读取一个未知的键，则返回undefined。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">new Map().get(&#39;asfddfsasadf&#39;)</span>
<span class="line">// undefined</span>
<span class="line"></span>
<span class="line">注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。</span>
<span class="line">const map = new Map();</span>
<span class="line"></span>
<span class="line">map.set([&#39;a&#39;], 555);</span>
<span class="line">map.get([&#39;a&#39;]) // undefined复制代码</span>
<span class="line"></span>
<span class="line">上面代码的set和get方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined。</span>
<span class="line">由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。</span>
<span class="line">如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。</span>
<span class="line">let map = new Map();</span>
<span class="line"></span>
<span class="line">map.set(-0, 123);</span>
<span class="line">map.get(+0) // 123</span>
<span class="line"></span>
<span class="line">map.set(true, 1);</span>
<span class="line">map.set(&#39;true&#39;, 2);</span>
<span class="line">map.get(true) // 1</span>
<span class="line"></span>
<span class="line">map.set(undefined, 3);</span>
<span class="line">map.set(null, 4);</span>
<span class="line">map.get(undefined) // 3</span>
<span class="line"></span>
<span class="line">map.set(NaN, 123);</span>
<span class="line">map.get(NaN) // 123复制代码</span>
<span class="line"></span>
<span class="line">Map 的属性及方法</span>
<span class="line">属性：</span>
<span class="line"></span>
<span class="line">constructor：构造函数</span>
<span class="line">size：返回字典中所包含的元素个数</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">const map = new Map([</span>
<span class="line">  [&#39;name&#39;, &#39;An&#39;],</span>
<span class="line">  [&#39;des&#39;, &#39;JS&#39;]</span>
<span class="line">]);</span>
<span class="line"></span>
<span class="line">map.size // 2复制代码</span>
<span class="line"></span>
<span class="line">操作方法：</span>
<span class="line"></span>
<span class="line">set(key, value)：向字典中添加新元素</span>
<span class="line">get(key)：通过键查找特定的数值并返回</span>
<span class="line">has(key)：判断字典中是否存在键key</span>
<span class="line">delete(key)：通过键 key 从字典中移除对应的数据</span>
<span class="line">clear()：将这个字典中的所有元素删除</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">遍历方法</span>
<span class="line"></span>
<span class="line">Keys()：将字典中包含的所有键名以迭代器形式返回</span>
<span class="line">values()：将字典中包含的所有数值以迭代器形式返回</span>
<span class="line">entries()：返回所有成员的迭代器</span>
<span class="line">forEach()：遍历字典的所有成员</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">const map = new Map([</span>
<span class="line">        [&#39;name&#39;, &#39;An&#39;],</span>
<span class="line">        [&#39;des&#39;, &#39;JS&#39;]</span>
<span class="line">]);</span>
<span class="line">console.log(map.entries())    // MapIterator {&quot;name&quot; =&gt; &quot;An&quot;, &quot;des&quot; =&gt; &quot;JS&quot;}</span>
<span class="line">console.log(map.keys()) // MapIterator {&quot;name&quot;, &quot;des&quot;}复制代码</span>
<span class="line"></span>
<span class="line">Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。</span>
<span class="line">map[Symbol.iterator] === map.entries</span>
<span class="line">// true复制代码</span>
<span class="line"></span>
<span class="line">Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。</span>
<span class="line">对于 forEach ，看一个例子</span>
<span class="line">const reporter = {</span>
<span class="line">  report: function(key, value) {</span>
<span class="line">    console.log(&quot;Key: %s, Value: %s&quot;, key, value);</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">let map = new Map([</span>
<span class="line">    [&#39;name&#39;, &#39;An&#39;],</span>
<span class="line">    [&#39;des&#39;, &#39;JS&#39;]</span>
<span class="line">])</span>
<span class="line">map.forEach(function(value, key, map) {</span>
<span class="line">  this.report(key, value);</span>
<span class="line">}, reporter);</span>
<span class="line">// Key: name, Value: An</span>
<span class="line">// Key: des, Value: JS复制代码</span>
<span class="line"></span>
<span class="line">在这个例子中， forEach 方法的回调函数的 this，就指向 reporter</span>
<span class="line">与其他数据结构的相互转换</span>
<span class="line">1.Map 转 Array</span>
<span class="line">const map = new Map([[1, 1], [2, 2], [3, 3]])</span>
<span class="line">console.log([...map])    // [[1, 1], [2, 2], [3, 3]]复制代码</span>
<span class="line"></span>
<span class="line">2.Array 转 Map</span>
<span class="line">const map = new Map([[1, 1], [2, 2], [3, 3]])</span>
<span class="line">console.log(map)    // Map {1 =&gt; 1, 2 =&gt; 2, 3 =&gt; 3}复制代码</span>
<span class="line"></span>
<span class="line">3.Map 转 Object</span>
<span class="line">因为 Object 的键名都为字符串，而Map 的键名为对象，所以转换的时候会把非字符串键名转换为字符串键名。</span>
<span class="line">function mapToObj(map) {</span>
<span class="line">    let obj = Object.create(null)</span>
<span class="line">    for (let [key, value] of map) {</span>
<span class="line">        obj[key] = value</span>
<span class="line">    }</span>
<span class="line">    return obj</span>
<span class="line">}</span>
<span class="line">const map = new Map().set(&#39;name&#39;, &#39;An&#39;).set(&#39;des&#39;, &#39;JS&#39;)</span>
<span class="line">mapToObj(map)  // {name: &quot;An&quot;, des: &quot;JS&quot;}复制代码</span>
<span class="line"></span>
<span class="line">4.Object 转 Map</span>
<span class="line">function objToMap(obj) {</span>
<span class="line">    let map = new Map()</span>
<span class="line">    for (let key of Object.keys(obj)) {</span>
<span class="line">        map.set(key, obj[key])</span>
<span class="line">    }</span>
<span class="line">    return map</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">objToMap({&#39;name&#39;: &#39;An&#39;, &#39;des&#39;: &#39;JS&#39;}) // Map {&quot;name&quot; =&gt; &quot;An&quot;, &quot;des&quot; =&gt; &quot;JS&quot;}复制代码</span>
<span class="line"></span>
<span class="line">5.Map 转 JSON</span>
<span class="line">function mapToJson(map) {</span>
<span class="line">    return JSON.stringify([...map])</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let map = new Map().set(&#39;name&#39;, &#39;An&#39;).set(&#39;des&#39;, &#39;JS&#39;)</span>
<span class="line">mapToJson(map)    // [[&quot;name&quot;,&quot;An&quot;],[&quot;des&quot;,&quot;JS&quot;]]复制代码</span>
<span class="line"></span>
<span class="line">6.JSON 转 Map</span>
<span class="line">function jsonToStrMap(jsonStr) {</span>
<span class="line">  return objToMap(JSON.parse(jsonStr));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">jsonToStrMap(&#39;{&quot;name&quot;: &quot;An&quot;, &quot;des&quot;: &quot;JS&quot;}&#39;) // Map {&quot;name&quot; =&gt; &quot;An&quot;, &quot;des&quot; =&gt; &quot;JS&quot;}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10))])}const u=a(d,[["render",c]]),m=JSON.parse('{"path":"/es6/WeakMap%E5%92%8CMap%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"WeakMap和Map的区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751247917000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c36011f17d8589a9dd4d62d0fd57f0287349de37","time":1751247917000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(css): 添加关于:is()和:where()选择器的文档"}]},"filePathRelative":"es6/WeakMap和Map的区别.md"}');export{u as comp,m as data};
