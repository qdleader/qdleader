import{_ as e,c as n,a,o as l}from"./app-JR0DiM0i.js";const i={};function r(d,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h1 id="cold-001版本号排序的方法" tabindex="-1"><a class="header-anchor" href="#cold-001版本号排序的方法"><span>cold-001版本号排序的方法</span></a></h1><h2 id="写版本号排序的方法" tabindex="-1"><a class="header-anchor" href="#写版本号排序的方法"><span>写版本号排序的方法</span></a></h2><p>有一组版本号如下[&#39;0.1.1&#39;, &#39;2.3.3&#39;, &#39;0.302.1&#39;, &#39;4.2&#39;, &#39;4.3.5&#39;, &#39;4.3.4.5&#39;]。现在需要对其进行排序，排序的结果为 [&#39;4.3.5&#39;,&#39;4.3.4.5&#39;,&#39;2.3.3&#39;,&#39;0.302.1&#39;,&#39;0.1.1&#39;]</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">arr.sort((a,b)=&gt;a&gt;b?-1:1);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这种比较是存在问题的：如果修改题目中的arr如下:</p><p>const arr=[ &#39;0.5.1&#39;, &#39;0.1.1&#39;, &#39;2.3.3&#39;, &#39;0.302.1&#39;, &#39;4.2&#39;, &#39;4.3.5&#39;, &#39;4.3.4.5&#39; ]; 那字符串比较法会出错：期望中版本号&#39;0.302.1&#39;应该大于&#39;0.5.1&#39;，但实际比较的结果则是相反的，原因就在于逐位比较。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">arr.sort((a,b) =&gt; {</span>
<span class="line">    let i = 0;</span>
<span class="line">    const arr1 = a.split(&#39;.&#39;);</span>
<span class="line">    const arr2 = b.split(&#39;.&#39;);</span>
<span class="line"></span>
<span class="line">    while(true) {</span>
<span class="line">        const  s1 = arr1[i];</span>
<span class="line">        const s2 = arr2[i ++];</span>
<span class="line">        if(s1 === undefined || s2 === undefined) {</span>
<span class="line">            return arr2.length - arr1.length;</span>
<span class="line">        }</span>
<span class="line">        if(s1 === s2) continue;</span>
<span class="line">        return s2 - s1;</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line">console.log(arr);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=e(i,[["render",r]]),p=JSON.parse(`{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%89%8B%E5%86%99%E7%B1%BB/%E5%86%B7%E4%B8%80%E4%BA%9B%E7%9A%84%E6%89%8B%E5%86%99/cold-001%E7%89%88%E6%9C%AC%E5%8F%B7%E6%8E%92%E5%BA%8F%E7%9A%84%E6%96%B9%E6%B3%95.html","title":"cold-001版本号排序的方法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1754578924000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"8368a3d830d4d39275b582b9717392562d913e18","time":1754578924000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"前端面试/js类/手写类/冷一些的手写/cold-001版本号排序的方法.md"}`);export{c as comp,p as data};
