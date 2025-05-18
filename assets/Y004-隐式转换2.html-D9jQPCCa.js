import{_ as s,c as a,a as e,o as l}from"./app-CKfc45Zi.js";const i={};function u(p,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="y004-隐式转换2" tabindex="-1"><a class="header-anchor" href="#y004-隐式转换2"><span>Y004-隐式转换2</span></a></h1><p>Javascript 隐式强制类型转换</p><p>这里直接上各种类型之间的转换结果，如果没有明白，那就带着问题往下读。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">❞</span>
<span class="line">+、==、||、&amp;&amp;</span>
<span class="line">+ (重点)</span>
<span class="line">1 + &quot;1&quot; // &#39;11&#39;</span>
<span class="line">1 + &quot;string&quot; // &quot;1tring&quot; （加非数字字符串）</span>
<span class="line">1 + true // 2</span>
<span class="line">1 + false //1</span>
<span class="line">1 + [] // &quot;1&quot;</span>
<span class="line">1 + [1,2,3] // &quot;11,2,3&quot;</span>
<span class="line">1 + {}  // &quot;1[object Object]&quot;</span>
<span class="line">1 + null // 1</span>
<span class="line">1 + undefined // 1</span>
<span class="line">null + undefined // NaN</span>
<span class="line"></span>
<span class="line">true + 1 // 2</span>
<span class="line">true + &quot;1&quot; // &quot;true1&quot;</span>
<span class="line">true + &quot;true&quot; // &quot;truetrue&quot; （加非数字字符串）</span>
<span class="line">true + true // 2</span>
<span class="line">true + false // 1</span>
<span class="line">true + [] // &quot;true&quot;</span>
<span class="line">true + [1,2,3] // &quot;true1,2,3&quot;</span>
<span class="line">true + &quot;true[object Object]&quot; // NaN</span>
<span class="line">true + null // 1</span>
<span class="line">true + undefined // NaN</span>
<span class="line"></span>
<span class="line">false + 1 // 1</span>
<span class="line">false + &quot;1&quot; // &quot;false1&quot;</span>
<span class="line">false + &quot;string&quot; // &quot;falsestring&quot; （加非数字字符串）</span>
<span class="line">false + false // 0</span>
<span class="line">false + true // 1</span>
<span class="line">false + [] // &quot;false&quot;</span>
<span class="line">false + {}  // &quot;false[object Object]&quot;</span>
<span class="line"></span>
<span class="line">[] + 1 // &quot;1&quot;</span>
<span class="line">[] + &quot;1&quot; // &quot;1&quot;</span>
<span class="line">[] + &quot;string&quot; // &quot;string&quot; （加非数字字符串）</span>
<span class="line">[] + true  // &quot;true&quot;</span>
<span class="line">[] + false // &quot;false&quot;</span>
<span class="line">[] + [] // &quot;&quot;</span>
<span class="line">[1] + [1] // &quot;11&quot;</span>
<span class="line">[] + {} // &quot;[object Object]&quot; （注意！！！）</span>
<span class="line">[] + null // &quot;null&quot;</span>
<span class="line">[] + undefined // &quot;undefined&quot;</span>
<span class="line"></span>
<span class="line">{} + 1 // 1</span>
<span class="line">{} + &quot;1&quot; // 1</span>
<span class="line">{} + &quot;string&quot; // NaN</span>
<span class="line">{} + true // 1</span>
<span class="line">{} + false // 0</span>
<span class="line">{} + [] // 0 （注意！！！）</span>
<span class="line">{ a:1 } + [] // 0（注意！！！）</span>
<span class="line">{} + [1] // 1 （注意！！！）</span>
<span class="line">{} + [1,2,3] // NaN （注意！！！）</span>
<span class="line">{} + {} // &quot;[object Object][object Object]&quot;</span>
<span class="line">{} + null // 0</span>
<span class="line">{} + undefined // NaN</span>
<span class="line"></span>
<span class="line">-Infinity + Infinity // NaN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p>如果某个操作数是字符串或者能够转换为字符串的话， + 将进行拼接操作。可见在 + 操作中字符串的拼接「优先级」高于数字的 +。 如果一个操作数是对象（包括数组），则首先对其调用ToPrimitive操作，该抽象操作再调用[[DefalutValue]]，以数字作为上下文，保证了优先调用valueOf()方法，可见在 + 操作时，引用类型内部调用valueOf()方法的「优先级」高于toString()。 数组或者对象在调用valueOf()方法如果无法获取到基本类型值（数字），会转而调用toString()。 代码演示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 这里提供valueOf()方法，</span>
<span class="line">var daRui = {</span>
<span class="line">    valueOf: function() {</span>
<span class="line">        return 18</span>
<span class="line">    },</span>
<span class="line">    toString: function() {</span>
<span class="line">        return &quot;daRUI&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">daRui + 7 // 25</span>
<span class="line">daRui + &quot;7&quot; // &quot;187&quot;</span>
<span class="line">daRui + &quot;hello&quot; // &quot;18hello&quot;</span>
<span class="line"></span>
<span class="line">// 这里仅提供toString()方法，</span>
<span class="line">var daRui = {</span>
<span class="line">    toString: function() {</span>
<span class="line">        return &quot;daRUI&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">daRui + 7 // &quot;daRUI7&quot;</span>
<span class="line">daRui + &quot; hello&quot; // &quot;daRUI hello&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特别说明:</p><p>数组中的toString()方法是经过改写的，故[1,2,3]会转为&quot;1,2,3&quot;，[] 会转为&quot;&quot;。 对象的toString()方法会返回 &quot;[object Class]&quot;，Object.prototype.toString.call([]) 返回 &quot;[object Array]&quot;。 [] + {}得到”[object Object]“，而{} + [] 得到 0。这是因为 {} (花括号)在JS中有两种含义： 当 {} 在 + 后面时，表示对象{} 当 {} 位于 + 前面时，{} 表示一个独立的「空代码块」，所以{} + [] 操作相当于进行的是 +<a href="%E4%B8%80%E5%85%83%E6%93%8D%E4%BD%9C%E7%AC%A6%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C"></a> 将 [] 转为0 ==（重点）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">1 == &#39;1&#39; // true</span>
<span class="line">1 == true // true</span>
<span class="line">1 == [] // false</span>
<span class="line">1 == [1] // true</span>
<span class="line">1 == {}  // false</span>
<span class="line"></span>
<span class="line">true == &quot;1&quot; // true</span>
<span class="line">true == &quot;true&quot; // false</span>
<span class="line">true == [] // true</span>
<span class="line">true == [1]  // true</span>
<span class="line">true == {} // false</span>
<span class="line"></span>
<span class="line">[] == &quot;1&quot;// false</span>
<span class="line">[] == true  // false</span>
<span class="line">[] == false // true</span>
<span class="line">[] == []  // false (注意！！！)</span>
<span class="line">[] == {} // false</span>
<span class="line">[] == ![] // true (注意！！！)</span>
<span class="line"></span>
<span class="line">{} == 1 // Unexpected token &#39;==&#39;</span>
<span class="line">{} == &quot;1&quot; // Unexpected token &#39;==&#39;</span>
<span class="line">{} == true // Unexpected token &#39;==&#39;</span>
<span class="line">{} == false // Unexpected token &#39;==&#39;</span>
<span class="line">{} == [] // Unexpected token &#39;==&#39;</span>
<span class="line">{} == {} // false (注意！！！)</span>
<span class="line"></span>
<span class="line">&quot;0&quot; == null // false</span>
<span class="line">&quot;0&quot; == undefined // false</span>
<span class="line">&quot;0&quot; == false // true (注意！！！)</span>
<span class="line">&quot;0&quot; == NaN // false</span>
<span class="line">&quot;0&quot; == 0 // true</span>
<span class="line">&quot;0&quot; == &quot;&quot; // false</span>
<span class="line"></span>
<span class="line">false == null // false (注意！！！)</span>
<span class="line">false == undefined // false (注意！！！)</span>
<span class="line">false == NaN // false</span>
<span class="line">false == 0 // true (注意！！！)</span>
<span class="line">false == &quot;&quot; // true (注意！！！)</span>
<span class="line">false == [] // true (注意！！！)</span>
<span class="line">false == {} // false</span>
<span class="line"></span>
<span class="line">&quot;&quot; == null // false</span>
<span class="line">&quot;&quot; == undefined //false</span>
<span class="line">&quot;&quot; == NaN // false</span>
<span class="line">&quot;&quot; == 0 //true (注意！！！)</span>
<span class="line">&quot;&quot; == [] // true (注意！！！)</span>
<span class="line">&quot;&quot; == {} // false</span>
<span class="line"></span>
<span class="line">0 == null // false</span>
<span class="line">0 == undefined // false</span>
<span class="line">0 == NaN // false</span>
<span class="line">0 == [] // true  (注意！！！)</span>
<span class="line">0 == {} // false</span>
<span class="line">+0 == -0 // true</span>
<span class="line"></span>
<span class="line">null == null // true</span>
<span class="line">null == undefined // true  (注意！！！)</span>
<span class="line">null == &quot;&quot; // false</span>
<span class="line">null == 0 // false</span>
<span class="line">undefined == &quot;&quot; // false</span>
<span class="line">undefined == 0 // false</span>
<span class="line"></span>
<span class="line">NaN == NaN // false  可以使用isNaN() 判断是不是NaN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p>== 操作，最重要的时在两个操作数的转换过程！关于 == 操作ES5 规范11.9.3给出了明确规范：</p><p>字符串和数字之间的相等比较：</p><p>如果Type(x)是数字，Type(y)是字符串，则返回 x == ToNumber(y)的结果。 如果Type(x)是字符串，Type(y)是数字，则返回ToNumber(x) == y的结果。 其他类型值和布尔类型之间的相等比较：</p><p>如果Type(x)是布尔类型，这返回ToNumber(x) == y的结果 如果Type(y)是布尔类型，则返回x == ToNumber(y) 的结果 null和undefined之间的相等比较</p><p>如果x为null，y为undefined，则结果为true 如果x为undefined，y为null，则结果为true 对象和非对象之间的相等比较：</p><p>如果Type(x)是字符串或者数字，Type(y)是对象，则返回x == ToPrimitive(y)的结果 如果Type(x)是对象，Type(y)是字符串或者数字，则返回toPrimitive(x) == y的结果 对象和对象之间比较:</p><p>在Javascript中对象属于引用类型，对象之间的比较，本质比较的是内存地址。所以都为false。</p><p>❝ == 相等操作中，如果两边的操作数不同的话，都会进行类型转换，而且优先转为数字，再进行比较，如果转换后还不同则再次转换，直到相同为止。这里以 字符串类型 == 布尔类型做介绍：</p><p>首先字符串类型转为Number 类型，这时比较的是 数字类型 == 布尔类型 再将布尔类型转为Number类型，这时比较的是数字类型 == 数字类型 这也就不难解释为什么&quot;0&quot; == false了</p><p>如果连个操作数中有引用类型，这会先将引用类型转换为基本类型，在进行上面的操作，进行比较。</p><p>再说[] == ![] // true:</p><p>这里!操作的优先级是高于 == 的，![] 首先转换为false 此时比较双方是 [] == false，这里会将 [] 再次转换为 0 此时比较双方是 0 == false，接下来就不难理解了 ❞ ！！、&amp;&amp;、||（重点） !! 将值转为布尔值</p><p>// 除将下面的转为false其余全部为true</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">!! &quot;&quot;</span>
<span class="line">!! 0</span>
<span class="line">!! -0</span>
<span class="line">!! +0</span>
<span class="line">!! null</span>
<span class="line">!! undefined</span>
<span class="line">!! NaN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&amp;&amp;、|| ❝ &amp;&amp;与||逻辑运算符的特殊之处在于，两者返回的是两个操作数中的一个（且仅一个），即选择两个操作数中的一个，然后返回它的「值」。这两个逻辑运算符首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行ToBoolean强制类型转换，然后在执行条件判断。</p><p>对于||来说，如果条件判断结果为true就返回第一个操作数的值，如果为false就返回第二个操作数的值。</p><p>&amp;&amp;则相反，如果条件判断结果为true就返回第一个操作数的值，如果为false就返回第一个操作数的值。</p><p>​ ——《你不知道的Javascript上卷》</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">❞</span>
<span class="line">18 || &quot;daRui&quot; // 18</span>
<span class="line">undefined || &quot;daRui&quot; // &quot;daRui&quot;</span>
<span class="line">18 &amp;&amp; &quot;daRui&quot; // daRui</span>
<span class="line">null &amp;&amp; &quot;daRui&quot; // null</span>
<span class="line">null || {} // {}</span>
<span class="line">null &amp;&amp; {} // null</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><p>||与&amp;&amp;返回的都是操作数中两个中的一个，这个严格意义上说并不是一种转换，而是一种选择</p><p>日常开发中的 if (a||b) {return true}的过程，其实是先获取到 a||b的值再进行的判断</p><p>这里说 ||和&amp;&amp;的原因是它可以简化我们日常开发中的代码，使代码更简洁，例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">   18 || &quot;daRui&quot;</span>
<span class="line">   // 相当于</span>
<span class="line">   18 ? 18 : &quot;daRui&quot;</span>
<span class="line"></span>
<span class="line">   18 &amp;&amp; &quot;daRui&quot; // daRui</span>
<span class="line">   // 相当于</span>
<span class="line">   18 ? &quot;daRui&quot; : 18</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 JavaScript，常见的 false 值：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">NaN</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,37)]))}const c=s(i,[["render",u]]),t=JSON.parse(`{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E8%BF%90%E7%AE%97%E7%B1%BB/Y004-%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A22.html","title":"Y004-隐式转换2","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1747530378000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"35946fb0727bfe016751f2fe179132b69c4f3fda","time":1747530378000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"前端面试/js类/运算类/Y004-隐式转换2.md"}`);export{c as comp,t as data};
