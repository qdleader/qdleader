import{_ as s,c as n,a,o as l}from"./app-D8HvJIFE.js";const t={};function i(r,e){return l(),n("div",null,[...e[0]||(e[0]=[a(`<p>S005-冒泡排序</p><p>冒泡排序就是依次比较大小，小的大的进行位置上的交换。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function bubbleSort(arr) {</span>
<span class="line">	for(let i = 0; i &lt; arr.length - 1; i ++) {</span>
<span class="line">		for(let j = i + 1; j &lt; arr.length; j ++) {</span>
<span class="line">			if(arr[i] &gt; arr[j]) {</span>
<span class="line">				let tem = arr[i];</span>
<span class="line">				arr[i] = arr[j];</span>
<span class="line">				arr[j] = tem;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return arr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>module.exports = bubbleSort;</p>`,4)])])}const c=s(t,[["render",i]]),p=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S005-%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"常见算法/S005-冒泡排序.md"}');export{c as comp,p as data};
