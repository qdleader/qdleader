import{_ as s,c as a,a as p,o as e}from"./app-DFnxdJ0h.js";const t={};function l(i,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="s039-单调递增子序列★★★" tabindex="-1"><a class="header-anchor" href="#s039-单调递增子序列★★★"><span>S039-单调递增子序列★★★</span></a></h1><p>vue 3 diif 用的就是单调递增子序列</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">    <span class="token keyword">var</span> <span class="token function-variable function">lengthOfLIS</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> n<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">let</span> tail <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//存放最长上升子序列数组</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> tail<span class="token punctuation">[</span>tail<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//当nums中的元素比tail中的最后一个大时 可以放心push进tail</span></span>
<span class="line">          tail<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//否则进行二分查找</span></span>
<span class="line">          <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">let</span> right <span class="token operator">=</span> tail<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>tail<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">              right <span class="token operator">=</span> mid<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          tail<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">return</span> tail<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;lengthOfLIS&#39;</span><span class="token punctuation">,</span> <span class="token function">lengthOfLIS</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">542</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">246</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">    var lengthOfLIS = function (nums) {</span>
<span class="line">      let n = nums.length;</span>
<span class="line">      if (n &lt;= 1) {</span>
<span class="line">        return n;</span>
<span class="line">      }</span>
<span class="line">      let tail = [nums[0]];//存放最长上升子序列数组</span>
<span class="line">      for (let i = 0; i &lt; n; i++) {</span>
<span class="line">        if (nums[i] &gt; tail[tail.length - 1]) {//当nums中的元素比tail中的最后一个大时 可以放心push进tail</span>
<span class="line">          tail.push(nums[i]);</span>
<span class="line">        } else {//否则进行二分查找</span>
<span class="line">          let left = 0;</span>
<span class="line">          let right = tail.length - 1;</span>
<span class="line">          while (left &lt; right) {</span>
<span class="line">            let mid = Math.floor((left + right) / 2);</span>
<span class="line">            // let mid = left + ((right - left) &gt;&gt; 1);</span>
<span class="line">            if (tail[mid] &lt; nums[i]) {</span>
<span class="line">              left = mid + 1;</span>
<span class="line">            } else {</span>
<span class="line">              right = mid;</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">          if (tail[left] &lt; nums[i]) {</span>
<span class="line">            tail[left] = nums[i]</span>
<span class="line">          };</span>
<span class="line">          //将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">      return tail.length;</span>
<span class="line">    };</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%89%8B%E5%86%99%E7%B1%BB/S039-%E5%8D%95%E8%B0%83%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97%E2%98%85%E2%98%85%E2%98%85.html","title":"S039-单调递增子序列★★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/手写类/S039-单调递增子序列★★★.md"}');export{o as comp,u as data};
