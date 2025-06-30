import{_ as e,c as n,a,o as l}from"./app-DbHRFhcj.js";const i={};function t(c,s){return l(),n("div",null,s[0]||(s[0]=[a(`<p>?用法</p><p>除了表示可选参数外，常用于防御性编程</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const a = fetch(...) || {}		// 假设a是从后端拿到的一个对象类型数据</span>
<span class="line">const unsafeData = a.b.c		// 这样写时不安全的，无法确保b是否有值，如果为空则b.c会进行报错</span>
<span class="line">const safeData = a?.b?.c		// 实际上就是相当于 const safeData = a &amp;&amp; a.b &amp;&amp; a.b.c</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!</p><p>! 叫非空断言操作符号，和?. 这个符号相反，这个符号表示对象后面的属性一定不是null 和 undefined</p><p>比如</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let chartRef = ref&lt;HTMLElement&gt;;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">echarts.init(chartRef.value)  // 这么写此时会报错，因为chartRef.value 有可能是undefined</span>
<span class="line"></span>
<span class="line">有两种解决方案</span>
<span class="line">1.</span>
<span class="line">echarts.init(chartRef.value as HTMLElement)</span>
<span class="line"></span>
<span class="line">2.</span>
<span class="line">echarts.init(chartRef.value!)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><blockquote><ol><li>属性或参数中使用 ？：表示该属性或参数为可选项</li></ol></blockquote><blockquote><ol start="2"><li>属性或参数中使用 ！：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop</li></ol></blockquote><blockquote><ol start="3"><li>变量后使用 ！：表示类型推断排除null、undefined</li></ol></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">if (!!getItem(&#39;Authorization&#39;)) {</span>
<span class="line">console.log(&#39;已登录&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">var o={flag1:true};  </span>
<span class="line">var test1=!!o.flag1;//等效于var test1=o.flag1||false;  </span>
<span class="line">console.log(test1);//true</span>
<span class="line">var test2=!!o.flag2;//等效于var test2=o.flag2||false;  </span>
<span class="line">console.log(test2);//false 而不是undefined 或 null</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于对null与undefined用 ! 操作符时都会产生true的结果， 所以用两个感叹号的作用就在于， 如果设置了o中flag的值（非 null/undefined/0&quot;&quot;/等值），自然test就会取跟o.flag一样的值； 如果没有设置，test就会默认为false，而不是 null或undefined。</p>`,13)]))}const r=e(i,[["render",t]]),p=JSON.parse('{"path":"/Typescript/ts%E4%B8%AD%E7%9A%84_%E5%92%8C!%E7%94%A8%E6%B3%95.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751247917000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c36011f17d8589a9dd4d62d0fd57f0287349de37","time":1751247917000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(css): 添加关于:is()和:where()选择器的文档"}]},"filePathRelative":"Typescript/ts中的?和!用法.md"}');export{r as comp,p as data};
