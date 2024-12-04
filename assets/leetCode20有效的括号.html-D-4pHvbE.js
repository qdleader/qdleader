import{_ as n,c as a,a as e,o as l}from"./app-CeraUqgt.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="_20-有效的括号" tabindex="-1"><a class="header-anchor" href="#_20-有效的括号"><span>20. 有效的括号</span></a></h2><blockquote><p>给定一个只包括 &#39;(&#39;，&#39;)&#39;，&#39;{&#39;，&#39;}&#39;，&#39;[&#39;，&#39;]&#39; 的字符串 s ，判断字符串是否有效。</p></blockquote><blockquote><p>有效字符串需满足：</p></blockquote><blockquote><p>左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。</p></blockquote><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><blockquote><p>1.首先判断这个字符串是否偶数，不是偶数直接为false 2.把左侧的括号依次放到数组里面，然后从后往前比较，如果不是一对，直接为false 3.当比较完成，看看左侧数组是不是没有了， 4.还要提防右侧括号有剩余，比如这种 ()))，用这行 if(!item) { return false }就可以</p></blockquote><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">var isValid = function(s) {</span>
<span class="line">  if(s % 2 == 1 ) {</span>
<span class="line">    return false</span>
<span class="line">  }</span>
<span class="line">  let arr1 = [];</span>
<span class="line">  for(let i = 0;i &lt; s.length; i ++) {</span>
<span class="line">    if(s[i] == &#39;(&#39; || s[i] == &#39;[&#39; || s[i] == &#39;{&#39;) {</span>
<span class="line">      arr1.push(s[i])</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  if(arr1.length != s.length/2) {</span>
<span class="line">    return false</span>
<span class="line">  }</span>
<span class="line">  let arr = [];</span>
<span class="line">  for(let i = 0;i &lt; s.length; i ++) {</span>
<span class="line">    if(s[i] == &#39;(&#39; || s[i] == &#39;[&#39; || s[i] == &#39;{&#39;) {</span>
<span class="line">      arr.push(s[i])</span>
<span class="line">    } else {</span>
<span class="line">      let item = arr[arr.length - 1]</span>
<span class="line">      if(item == &#39;(&#39; &amp;&amp; s[i] != &#39;)&#39; ) {</span>
<span class="line">        return false</span>
<span class="line">      } else if(item == &#39;[&#39; &amp;&amp; s[i] != &#39;]&#39;) {</span>
<span class="line">        return false</span>
<span class="line">      } else if(item == &#39;{&#39; &amp;&amp; s[i] != &#39;}&#39;) {</span>
<span class="line">        return false</span>
<span class="line">      }</span>
<span class="line">      arr.pop()</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  return arr.length == 0</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">if(s % 2 == 1 ) {</span>
<span class="line">  return false</span>
<span class="line">}</span>
<span class="line">let arr = [];</span>
<span class="line">for(let i = 0;i &lt; s.length; i ++) {</span>
<span class="line">  if(s[i] == &#39;(&#39; || s[i] == &#39;[&#39; || s[i] == &#39;{&#39;) {</span>
<span class="line">    arr.push(s[i])</span>
<span class="line">  } else {</span>
<span class="line">    let item = arr[arr.length - 1]</span>
<span class="line">    if(!item) {</span>
<span class="line">      return false</span>
<span class="line">    }</span>
<span class="line">    if(item == &#39;(&#39; &amp;&amp; s[i] != &#39;)&#39; ) {</span>
<span class="line">      return false</span>
<span class="line">    } else if(item == &#39;[&#39; &amp;&amp; s[i] != &#39;]&#39;) {</span>
<span class="line">      return false</span>
<span class="line">    } else if(item == &#39;{&#39; &amp;&amp; s[i] != &#39;}&#39;) {</span>
<span class="line">      return false</span>
<span class="line">    }</span>
<span class="line">    arr.pop()</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">return arr.length == 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"></span>
<span class="line">funtion <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  map <span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;(&quot;</span><span class="token operator">:</span><span class="token string">&quot;)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;{&quot;</span><span class="token operator">:</span><span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;[&quot;</span><span class="token operator">:</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> x <span class="token keyword">of</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token keyword">in</span> map<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">       stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">       <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">!==</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length</span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const r=n(i,[["render",p],["__file","leetCode20有效的括号.html.vue"]]),d=JSON.parse('{"path":"/leetCode/leetCode20%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"20. 有效的括号","slug":"_20-有效的括号","link":"#_20-有效的括号","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[]}],"git":{"updatedTime":1733276255000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"leetCode/leetCode20有效的括号.md"}');export{r as comp,d as data};
