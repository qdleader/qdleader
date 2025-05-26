import{_ as s,c as e,a as l,o as a}from"./app-CxRJHVie.js";const i={};function c(d,n){return a(),e("div",null,n[0]||(n[0]=[l(`<h1 id="leetcode409最长字符串" tabindex="-1"><a class="header-anchor" href="#leetcode409最长字符串"><span>leetCode409最长字符串</span></a></h1><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><blockquote><p>给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。</p></blockquote><blockquote><p>在构造过程中，请注意区分大小写。比如 &quot;Aa&quot; 不能当做一个回文字符串。</p></blockquote><blockquote><p>注意: 假设字符串的长度不会超过 1010。</p></blockquote><blockquote><p>示例 1:</p></blockquote><blockquote><p>输入: &quot;abccccdd&quot;</p></blockquote><blockquote><p>输出: 7</p></blockquote><blockquote><p>解释: 我们可以构造的最长的回文串是&quot;dccaccd&quot;, 它的长度是 7。</p></blockquote><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h2><blockquote><p>偶数的最长 把每个字母都对应的放到数组里面，对象里面放对应的个数</p></blockquote><blockquote><p>个数为偶数，一定会组成会问的，个数为奇数的减一即可</p></blockquote><blockquote><p>最总生成的num一定是偶数，如果num小于s的长度，那么num + 1即可</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var longestPalindrome = function(s) {</span>
<span class="line">    if(s.length &gt; 1010) {</span>
<span class="line">        return</span>
<span class="line">    }</span>
<span class="line">    let num = 0;</span>
<span class="line">    let nowObj = {},arr =[];</span>
<span class="line">    for(let i = 0; i &lt; s.length; i ++) {</span>
<span class="line">         if(arr.indexOf(s.charAt(i)) == -1) {</span>
<span class="line">            nowObj[s.charAt(i)] = 1</span>
<span class="line">            arr.push(s.charAt(i))</span>
<span class="line">         } else {</span>
<span class="line">            nowObj[s.charAt(i)] += 1</span>
<span class="line">         }</span>
<span class="line">    }</span>
<span class="line">    console.log(&quot;nowObj&quot;,nowObj)</span>
<span class="line">    console.log(&quot;nowObj&quot;,arr)</span>
<span class="line">    for(let i = 0; i &lt; arr.length; i ++) {</span>
<span class="line">        if((nowObj[arr[i]]) % 2 == 0) {</span>
<span class="line">            num += nowObj[arr[i]]</span>
<span class="line">        } else {</span>
<span class="line">            num += nowObj[arr[i]] - 1</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    if(num &lt; s.length) {</span>
<span class="line">        return num + 1;</span>
<span class="line">    } else {</span>
<span class="line">        return num;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">console.log(longestPalindrome(&quot;cccdd&quot;))</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#拓展</p><p>js实现找出字符串中的最长回文串</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var longestPalindrome = function(s) {</span>
<span class="line">        if(s.length &gt; 1010) {</span>
<span class="line">            return</span>
<span class="line">        }</span>
<span class="line">        let num = 0;</span>
<span class="line">        let str = &#39;&#39;</span>
<span class="line">        for(let i = 0; i &lt; s.length; i ++) {</span>
<span class="line">             str = &#39;&#39;</span>
<span class="line">            for(let j = i; j &lt; s.length ; j ++) {</span>
<span class="line">                str += s.charAt(j)</span>
<span class="line">                if(str.split(&#39;&#39;).reverse().join(&#39;&#39;) == str) {</span>
<span class="line">                    if(str.length &gt; num) {</span>
<span class="line">                        num = str.length;</span>
<span class="line">                    }</span>
<span class="line"></span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return num;</span>
<span class="line">    };</span>
<span class="line"></span>
<span class="line">    console.log(longestPalindrome(&quot;abccccdd&quot;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const p=s(i,[["render",c]]),t=JSON.parse(`{"path":"/leetCode/leetCode409%E6%9C%80%E9%95%BF%E5%AD%97%E7%AC%A6%E4%B8%B2.html","title":"leetCode409最长字符串","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1748223542000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"8ed43cdea85fb441dad6bb632fa4c8205a3b47da","time":1748223542000,"email":"yk4545945@163.com","author":"qdleader","message":"Merge branch 'master' of https://github.com/qdleader/qdleader"}]},"filePathRelative":"leetCode/leetCode409最长字符串.md"}`);export{p as comp,t as data};
