import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const p={};function i(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="foreach究竟能不能改变数组的值★" tabindex="-1"><a class="header-anchor" href="#foreach究竟能不能改变数组的值★"><span>forEach究竟能不能改变数组的值★</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> oldArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>obj<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">]</span></span>
<span class="line">    oldArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">      el <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldArr<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从例子一来看forEach并不改变原数组 例子二：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">    let obj = {&#39;1&#39;:1}</span>
<span class="line">    let oldArr = [&#39;1&#39;,1,obj,true]</span>
<span class="line">    oldArr.forEach((el)=&gt;{</span>
<span class="line">      if(typeof el == &#39;object&#39;){</span>
<span class="line">        el[&#39;2&#39;]=2</span>
<span class="line">      }</span>
<span class="line">      el = 2</span>
<span class="line">    })</span>
<span class="line">    console.log(oldArr)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子二里的obj的值是被改变了的，那么forEach究竟改不改变原数组呢？ 所以我们回到概念，forEach方法只是操作数据而已，数组里的数据是如何引用的呢？ js的数据有基本数据类型和引用数据类型，同时引出堆内存和栈内存的概念。对于基本数据类型：Number、String 、Boolean、Null和Undefined，它们在栈内存中直接存储变量名和值。而Object对象的真实数据存储在堆内存中，它在栈内存中存储的是变量名和堆内存的位置。 而在forEach方法里操作了obj对象，实际操作的是对象本身，而数据只是引用了对象的栈内存地址，所以数组里的数据相应改变。 那么为什么forEach方法不能改变数组里的基本变量呢？</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> oldArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>obj<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span>a<span class="token punctuation">]</span></span>
<span class="line">    oldArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> el <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        el<span class="token punctuation">[</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      el <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    a  <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldArr<span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不仅forEach方法无法改变，直接在外面操作a变量也无法改变。 因为数组内的基本变量，在栈内存内生成了自己的值，并非引用栈内存的地址。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">    let a = 1</span>
<span class="line">    let obj = {&#39;1&#39;:1}</span>
<span class="line">    let oldArr = [&#39;1&#39;,1,obj,true,a]</span>
<span class="line">    oldArr.forEach((el,index)=&gt;{</span>
<span class="line">      // if(typeof el == &#39;object&#39;){</span>
<span class="line">      //   el[&#39;2&#39;]=2</span>
<span class="line">      // }</span>
<span class="line">      oldArr[index] =2</span>
<span class="line">    })</span>
<span class="line">    console.log(oldArr)</span>
<span class="line"> </span>
<span class="line">\`\`\`js</span>
<span class="line"></span>
<span class="line">神奇的事发生了，基本数据类型也被改变了。 因为我们使用forEach方法的时候对于每个数据都创建了一个变量el，我们操作的是el变量，对于基本数据类型，el变量就是新创建的一个内存。el变量改变并不影响基本原来地址值的改变。而el变量对应的是引用数据类型时，实际还是一个引用地址，操作它，仍旧操作的是对应的堆内存。</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">### 总结：</span>
<span class="line"></span>
<span class="line">forEach方法里操作对象生效，想要操作里面的基本数据类型，就用arr[i]的形式直接操作数组。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)])])}const o=n(p,[["render",i]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%E6%B1%87%E6%80%BB/forEach%E7%A9%B6%E7%AB%9F%E8%83%BD%E4%B8%8D%E8%83%BD%E6%94%B9%E5%8F%98%E6%95%B0%E7%BB%84%E7%9A%84%E5%80%BC%E2%98%85.html","title":"forEach究竟能不能改变数组的值★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端面试/js类/常见面试题精选汇总/forEach究竟能不能改变数组的值★.md"}');export{o as comp,r as data};
