import{_ as s,e,f as a,o as l}from"./app-Dw20wKhM.js";const i={};function t(d,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h1 id="y003-强制和隐式类型转换" tabindex="-1"><a class="header-anchor" href="#y003-强制和隐式类型转换"><span>Y003-强制和隐式类型转换</span></a></h1><h2 id="强制" tabindex="-1"><a class="header-anchor" href="#强制"><span>强制:</span></a></h2><p>parseInt(), parseFloat(),toString(), Number(), Boolean(), String(),Math.round() Math.round():严格转换，不允许出现任何非数字的字符，否则NaN；取最接近的整数。 Number():严格转换，不允许出现任何非数字的字符，否则NaN；直接转换</p><h2 id="隐式" tabindex="-1"><a class="header-anchor" href="#隐式"><span>隐式:</span></a></h2><p>if, 逻辑运算, == ,|| &amp;&amp;, + - !</p><h2 id="常见解析" tabindex="-1"><a class="header-anchor" href="#常见解析"><span>常见解析</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 1.parseInt() 把值转换成整数</span>
<span class="line">parseInt(&quot;1234blue&quot;); // 1234</span>
<span class="line">parseInt(&quot;0xA&quot;); // 10</span>
<span class="line">parseInt(&quot;22.5&quot;); // 22</span>
<span class="line">parseInt(&quot;blue&quot;); // NaN</span>
<span class="line">// parseInt()方法还有基模式，可以把二进制、八进制、十六进制或其他任何进制的字符串转换成整数。基是由parseInt()方法的第二个参数指定的，示例如下：</span>
<span class="line">parseInt(&quot;AF&quot;, 16); // 175</span>
<span class="line">parseInt(&quot;10&quot;, 2); // 2</span>
<span class="line">parseInt(&quot;10&quot;, 8); // 8</span>
<span class="line">parseInt(&quot;10&quot;, 10); // 10</span>
<span class="line">// 如果十进制数包含前导0，那么最好采用基数10，这样才不会意外地得到八进制的值。例如：</span>
<span class="line">parseInt(&quot;010&quot;); // 8</span>
<span class="line">parseInt(&quot;010&quot;, 8); // 8</span>
<span class="line">parseInt(&quot;010&quot;, 10); // 10</span>
<span class="line"></span>
<span class="line">// 2.parseFloat() 把值转换成浮点数,没有基模式</span>
<span class="line">parseFloat(&quot;1234blue&quot;); // 1234.0</span>
<span class="line">parseFloat(&quot;0xA&quot;); // NaN</span>
<span class="line">parseFloat(&quot;22.5&quot;); // 22.5</span>
<span class="line">parseFloat(&quot;22.34.5&quot;); // 22.34</span>
<span class="line">parseFloat(&quot;0908&quot;); // 908</span>
<span class="line">parseFloat(&quot;blue&quot;); // NaN</span>
<span class="line"></span>
<span class="line">// 3.Number() 把给定的值转换成数字（可以是整数或浮点数）,Number()的强制类型转换与parseInt()和parseFloat()方法的处理方式相似，只是它转换的是整个值，而不是部分值。示例如下：</span>
<span class="line">Number(false) // 0</span>
<span class="line">Number(true) // 1</span>
<span class="line">Number(undefined) // NaN</span>
<span class="line">Number(null) // 0</span>
<span class="line">Number(&quot;5.5&quot;) // 5.5</span>
<span class="line">Number(&quot;56&quot;) // 56</span>
<span class="line">Number(&quot;5.6.7&quot;) // NaN</span>
<span class="line">Number(new Object()) // NaN</span>
<span class="line">Number(100) // 100</span>
<span class="line"></span>
<span class="line">// 4.Boolean() 把给定的值转换成Boolean型</span>
<span class="line">Boolean(&quot;&quot;); // false</span>
<span class="line">Boolean(&quot;hi&quot;); // true</span>
<span class="line">Boolean(100); // true</span>
<span class="line">Boolean(null); // false</span>
<span class="line">Boolean(0); // false</span>
<span class="line">Boolean(new Object()); // true</span>
<span class="line"></span>
<span class="line">// 5.String() 把给定的值转换成字符串</span>
<span class="line">String(123) // &quot;123&quot;</span>
<span class="line"></span>
<span class="line">// 6. + -</span>
<span class="line">console.log(0 + &#39;1&#39;) // &quot;01&quot;</span>
<span class="line">console.log(2 - &#39;1&#39;) // 1</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if()语句中的条件判断表达式 for(..; ..; ..)语句中的条件判断表达式 while()和do .. while() ? : 中的条件判断表达式 逻辑运算符||和&amp;&amp;左边的操作数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">undefined</span>
<span class="line">null</span>
<span class="line">false</span>
<span class="line">+0、-0和NaN</span>
<span class="line">&quot;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假值列表以外的都应该是真值</p><h2 id="抽象相等" tabindex="-1"><a class="header-anchor" href="#抽象相等"><span>抽象相等</span></a></h2><blockquote><p>ES5规范11.9.3节的“抽象相等比较算法”定义了==运算符的行为。该算法简单而又全面，涵盖了所有可能出现的类型组合，以及它们进行强制类型转换的方式。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">比较运算x==y, 其中x和 y是值，产生true或者false。这样的比较按如下方式进行：</span>
<span class="line">	1. 若Type(x)与Type(y)相同， 则</span>
<span class="line">		a. 若Type(x)为Undefined， 返回true。</span>
<span class="line">		b. 若Type(x)为Null， 返回true。</span>
<span class="line">		c. 若Type(x)为Number， 则</span>
<span class="line">			i. 若x为NaN， 返回false。</span>
<span class="line">			ii. 若y为NaN， 返回false。</span>
<span class="line">			iii. 若x与y为相等数值， 返回true。</span>
<span class="line">			iv. 若x 为 +0 且 y为−0， 返回true。</span>
<span class="line">			v. 若x 为 −0 且 y为+0， 返回true。</span>
<span class="line">			vi. 返回false。</span>
<span class="line">		d. 若Type(x)为String, 则当x和y为完全相同的字符序列（长度相等且相同字符在相同位置）时返回true。 否则， 返回false。</span>
<span class="line">		e. 若Type(x)为Boolean, 当x和y为同为true或者同为false时返回true。 否则， 返回false。</span>
<span class="line">		f. 当x和y为引用同一对象时返回true。否则，返回false。</span>
<span class="line">	2. 若x为null且y为undefined， 返回true。</span>
<span class="line">	3. 若x为undefined且y为null， 返回true。</span>
<span class="line">	4. 若Type(x) 为 Number 且 Type(y)为String， 返回comparison x == ToNumber(y)的结果。</span>
<span class="line">	5. 若Type(x) 为 String 且 Type(y)为Number，返回比较ToNumber(x) == y的结果。</span>
<span class="line">	6. 若Type(x)为Boolean， 返回比较ToNumber(x) == y的结果。</span>
<span class="line">	7. 若Type(y)为Boolean， 返回比较x == ToNumber(y)的结果。</span>
<span class="line">	8. 若Type(x)为String或Number，且Type(y)为Object，返回比较x == ToPrimitive(y)的结果。</span>
<span class="line">	9. 若Type(x)为Object且Type(y)为String或Number， 返回比较ToPrimitive(x) == y的结果。</span>
<span class="line">  10. 返回false。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见易错题" tabindex="-1"><a class="header-anchor" href="#常见易错题"><span>常见易错题</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">null == undefined   //true</span>
<span class="line"></span>
<span class="line">[]==![]   // true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">0 == &#39;\\n&#39;   //true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">==最容易出错的一个地方是true和false与其他类型之间的相等比较。</span>
<span class="line">var a = &#39;42&#39;</span>
<span class="line">var b = true</span>
<span class="line">a == b  //false</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>复制代码结果是false，这让人很容易掉坑里。如果严格按照“抽象相等比较算法”，这个结果也就是意料之中的。</p></blockquote><blockquote><p>若Type(y)为Boolean， 返回比较x == ToNumber(y)的结果，即返回&#39;42&#39; == 1，结果为false。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&quot;0&quot; == false    // true</span>
<span class="line">false == 0      // true</span>
<span class="line">false == &quot;&quot;     // true</span>
<span class="line">false == []     // true</span>
<span class="line">&quot;&quot; == 0          // true</span>
<span class="line">&quot;&quot; == []         // true</span>
<span class="line">0 == []          // true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果两边的值中有true或者false，千万不要使用== 如果两边的值中有[]、&quot;&quot;、或者0，尽量不要使用==</p><p>隐式强制转换在部分情况下确实很危险，为了安全起见就要使用===</p>`,22)]))}const p=s(i,[["render",t],["__file","Y003-强制和隐式类型转换.html.vue"]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E8%BF%90%E7%AE%97%E7%B1%BB/Y003-%E5%BC%BA%E5%88%B6%E5%92%8C%E9%9A%90%E5%BC%8F%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html","title":"Y003-强制和隐式类型转换","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"强制:","slug":"强制","link":"#强制","children":[]},{"level":2,"title":"隐式:","slug":"隐式","link":"#隐式","children":[]},{"level":2,"title":"常见解析","slug":"常见解析","link":"#常见解析","children":[]},{"level":2,"title":"抽象相等","slug":"抽象相等","link":"#抽象相等","children":[{"level":3,"title":"常见易错题","slug":"常见易错题","link":"#常见易错题","children":[]}]}],"git":{"updatedTime":1740622710000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"前端面试/js类/运算类/Y003-强制和隐式类型转换.md"}');export{p as comp,u as data};
