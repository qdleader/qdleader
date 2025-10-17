import{_ as n,c as a,a as e,o as l}from"./app-CGkWrEiW.js";const i={};function c(d,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="b004-变量提升★" tabindex="-1"><a class="header-anchor" href="#b004-变量提升★"><span>B004-变量提升★</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">(function() {</span>
<span class="line"></span>
<span class="line">	try{</span>
<span class="line">		throw new Error()</span>
<span class="line">	} catch(x) {</span>
<span class="line">		var x = 1,y = 2;</span>
<span class="line">		console.log(x)</span>
<span class="line">	}</span>
<span class="line">	console.log(x)</span>
<span class="line">	console.log(y)</span>
<span class="line">})()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 我们都知道var是在预编译阶段会有一个变量提升，这种类型很容易解决，但是当遇到在catch(x)中与已有变量重名的情况，一定要区分两者之间的关系。</span>
<span class="line"></span>
<span class="line">// 用变量提升的方法，把程序重写并分析如下：</span>
<span class="line"></span>
<span class="line">// (function () {</span>
<span class="line">//     var x,y;  // 外部变量提升</span>
<span class="line">//     try {</span>
<span class="line">//         throw new Error();</span>
<span class="line">//     } catch (x/* 内部的x */) {</span>
<span class="line">//         x = 1; //内部的x，和上面声明的x不是一回事！！</span>
<span class="line">//          y = 2; //内部没有声明，作用域链向上找，外面的y</span>
<span class="line">//         console.log(x); //当然是1</span>
<span class="line">//     }</span>
<span class="line">//     console.log(x);  //只声明，未赋值，undefined</span>
<span class="line">//     console.log(y);  //就是2了</span>
<span class="line">// })();</span>
<span class="line">// 这样子就很清晰，之后注意预编译的过程，把变量和函数定义进行提升后，进行分析，会清楚很多</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)])])}const t=n(i,[["render",c]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%8F%98%E9%87%8F%E7%B1%BB/B004-%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87%E2%98%85.html","title":"B004-变量提升★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1760666540000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"134857c9ac84d0010e9657b514f471a824ae1e0f","time":1760666540000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加scroll-snap-type CSS属性文档"}]},"filePathRelative":"前端面试/js类/变量类/B004-变量提升★.md"}');export{t as comp,p as data};
