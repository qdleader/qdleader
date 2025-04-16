import{_ as i,c,a as o,b as t,w as e,d as p,f as r,v as l,o as u}from"./app-DFnxdJ0h.js";const d={};function v(n,s){return u(),c("div",null,[s[5]||(s[5]=o(`<h1 id="vue的事件修饰符和作用" tabindex="-1"><a class="header-anchor" href="#vue的事件修饰符和作用"><span>vue的事件修饰符和作用</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">	<span class="token punctuation">.</span>stop 阻止事件冒泡</span>
<span class="line">	<span class="token punctuation">.</span>native 绑定原生事件</span>
<span class="line">	<span class="token punctuation">.</span>once 事件只执行一次</span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	<span class="token punctuation">.</span>prevent 阻止默认事件</span>
<span class="line">	防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播），</span>
<span class="line">		等同于JavaScript中的event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，prevent等同于JavaScript的event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，用于取消默认事件。</span>
<span class="line">		比如我们页面的标签，当用户点击时，通常在浏览器的网址列出#：</span>
<span class="line">		例如：</span>
<span class="line">	<span class="token operator">&lt;</span>a v<span class="token operator">-</span>on<span class="token operator">:</span>submit<span class="token punctuation">.</span>prevent<span class="token operator">=</span><span class="token string">&quot;doThis&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span></span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	<span class="token punctuation">.</span>caption 用于事件捕获</span>
<span class="line">		与事件冒泡的方向相反，事件捕获由外到内<span class="token punctuation">,</span>捕获事件：嵌套两三层父子关系，然后所有都有点击事件，</span>
<span class="line">		点击子节点，就会触发从外至内 父节点<span class="token operator">-</span>》子节点的点击事件</span>
<span class="line"></span>
<span class="line">		<span class="token operator">&lt;</span>a v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>capture<span class="token operator">=</span><span class="token string">&quot;doThis&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span> </span>
<span class="line">		　　<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;outeer&quot;</span> @click<span class="token punctuation">.</span>capture<span class="token operator">=</span><span class="token string">&quot;outer&quot;</span><span class="token operator">&gt;</span> </span>
<span class="line">		　　　　<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;middle&quot;</span> @click<span class="token punctuation">.</span>capture<span class="token operator">=</span><span class="token string">&quot;middle&quot;</span><span class="token operator">&gt;</span> </span>
<span class="line">		　　　　　　<span class="token operator">&lt;</span>button @click<span class="token punctuation">.</span>capture<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token operator">&gt;</span><span class="token function">点击我</span><span class="token punctuation">(</span><span class="token operator">^</span>_<span class="token operator">^</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">		 　　　　<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">		 　　<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> </span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		<span class="token punctuation">.</span>self 将事件绑定到自身身上，相当于阻止事件冒泡</span>
<span class="line">		只会触发自己范围内的事件，不包含子元素</span>
<span class="line"></span>
<span class="line">		<span class="token operator">&lt;</span>a v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>self<span class="token operator">=</span><span class="token string">&quot;doThat&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span> </span>
<span class="line">		　　<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;outeer&quot;</span> @click<span class="token punctuation">.</span>self<span class="token operator">=</span><span class="token string">&quot;outer&quot;</span><span class="token operator">&gt;</span> </span>
<span class="line">		　　　　<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;middle&quot;</span> @click<span class="token punctuation">.</span>self<span class="token operator">=</span><span class="token string">&quot;middle&quot;</span><span class="token operator">&gt;</span> </span>
<span class="line">		　　　　　　<span class="token operator">&lt;</span>button @click<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token operator">&gt;</span><span class="token function">点击我</span><span class="token punctuation">(</span><span class="token operator">^</span>_<span class="token operator">^</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">		 　　　　<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">		 　　<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> </span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		<span class="token punctuation">.</span>passive</span>
<span class="line">		Vue 还对应 addEventListener 中的 passive 选项提供了 <span class="token punctuation">.</span>passive 修饰符</span>
<span class="line"></span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token function">滚动事件的默认行为</span> <span class="token punctuation">(</span>即滚动行为<span class="token punctuation">)</span> 将会立即触发 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 而不会等待 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">onScroll</span><span class="token template-punctuation string">\`</span></span> 完成  <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 这其中包含 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">event.preventDefault()</span><span class="token template-punctuation string">\`</span></span> 的情况 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>div v<span class="token operator">-</span>on<span class="token operator">:</span>scroll<span class="token punctuation">.</span>passive<span class="token operator">=</span><span class="token string">&quot;onScroll&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">		这个 <span class="token punctuation">.</span>passive 修饰符尤其能够提升移动端的性能。不要把 <span class="token punctuation">.</span>passive 和 <span class="token punctuation">.</span>prevent 一起使用，因为 <span class="token punctuation">.</span>prevent 将会被忽略，</span>
<span class="line">		同时浏览器可能会向你展示一个警告。请记住，<span class="token punctuation">.</span>passive 会告诉浏览器你不想阻止事件的默认行为。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##事件修饰符还可以串联 例如：</p>`,3)),t("p",null,[t("a",{onClick:s[0]||(s[0]=r((...a)=>n.doThis&&n.doThis(...a),["stop","prevent"]))}),s[4]||(s[4]=p(" 注：使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。"))]),s[6]||(s[6]=o(`<p>##键盘修饰符 在JavaScript事件中除了前面所说的事件，还有键盘事件，也经常需要监测常见的键值。在Vue中允许v-on在监听键盘事件时添加关键修饰符。记住所有的keyCode比较困难，所以Vue为最常用的键盘事件提供了别名： .enter：回车键 .tab：制表键 .delete：含delete和backspace键 .esc：返回键 .space: 空格键 .up：向上键 .down：向下键 .left：向左键 .right：向右键</p><p>##系统修饰键 可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。 .ctrl .alt .shift .meta</p><p>注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。</p><p>例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- Alt + C --&gt;</span>
<span class="line">&lt;input @keyup.alt.67=&quot;clear&quot;&gt;</span>
<span class="line">&lt;!-- Ctrl + Click --&gt;</span>
<span class="line">&lt;div @click.ctrl=&quot;doSomething&quot;&gt;Do something&lt;/div&gt;</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line">4</span>
<span class="line">注意：</span>
<span class="line"></span>
<span class="line">请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##.exact修饰符</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。</span>
<span class="line"></span>
<span class="line">&lt;!-- 即使 Alt 或 Shift 被一同按下时也会触发 --&gt;</span>
<span class="line">&lt;button @click.ctrl=&quot;onClick&quot;&gt;A&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 有且只有 Ctrl 被按下的时候才触发 --&gt;</span>
<span class="line">&lt;button @click.ctrl.exact=&quot;onCtrlClick&quot;&gt;A&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 没有任何系统修饰符被按下的时候才触发 --&gt;</span>
<span class="line">&lt;button @click.exact=&quot;onClick&quot;&gt;A&lt;/button&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##常用修饰符</p><p>(1).lazy 在改变后才触发（也就是说只有光标离开input输入框的时候值才会改变）</p>`,9)),e(t("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.msg=a)},null,512),[[l,n.msg,void 0,{lazy:!0}]]),s[7]||(s[7]=p(" 1 (2).number 将输出字符串转为Number类型·（虽然type类型定义了是number类型，但是如果输入字符串，输出的是string） ")),e(t("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>n.msg=a)},null,512),[[l,n.msg,void 0,{number:!0}]]),s[8]||(s[8]=p(" 1 (3).trim 自动过滤用户输入的首尾空格 ")),e(t("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>n.msg=a)},null,512),[[l,n.msg,void 0,{trim:!0}]])])}const m=i(d,[["render",v]]),b=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V008-vue%E7%9A%84%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6%E5%92%8C%E4%BD%9C%E7%94%A8.html","title":"vue的事件修饰符和作用","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/vue篇/V008-vue的事件修饰符和作用.md"}');export{m as comp,b as data};
